# SDK

## Overview

<p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization.</p> <p>The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs. </p> <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a> console.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/acm-pca/>
### Available Operations

* [createCertificateAuthority](#createcertificateauthority) - <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>
* [createCertificateAuthorityAuditReport](#createcertificateauthorityauditreport) - <p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>
* [createPermission](#createpermission) - <p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [deleteCertificateAuthority](#deletecertificateauthority) - <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
* [deletePermission](#deletepermission) - <p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [deletePolicy](#deletepolicy) - <p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [describeCertificateAuthority](#describecertificateauthority) - <p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
* [describeCertificateAuthorityAuditReport](#describecertificateauthorityauditreport) - Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 
* [getCertificate](#getcertificate) - Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 
* [getCertificateAuthorityCertificate](#getcertificateauthoritycertificate) - Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
* [getCertificateAuthorityCsr](#getcertificateauthoritycsr) - Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 
* [getPolicy](#getpolicy) - <p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [importCertificateAuthorityCertificate](#importcertificateauthoritycertificate) - <p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>
* [issueCertificate](#issuecertificate) - <p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>
* [listCertificateAuthorities](#listcertificateauthorities) - Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
* [listPermissions](#listpermissions) - <p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [listTags](#listtags) - Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 
* [putPolicy](#putpolicy) - <p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [restoreCertificateAuthority](#restorecertificateauthority) - Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
* [revokeCertificate](#revokecertificate) - <p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
* [tagCertificateAuthority](#tagcertificateauthority) - <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>
* [untagCertificateAuthority](#untagcertificateauthority) - Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 
* [updateCertificateAuthority](#updatecertificateauthority) - <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

## createCertificateAuthority

<p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessDescription;
import org.openapis.openapi.models.shared.AccessMethod;
import org.openapis.openapi.models.shared.AccessMethodTypeEnum;
import org.openapis.openapi.models.shared.Asn1Subject;
import org.openapis.openapi.models.shared.CertificateAuthorityConfiguration;
import org.openapis.openapi.models.shared.CertificateAuthorityTypeEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityUsageModeEnum;
import org.openapis.openapi.models.shared.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.CrlConfiguration;
import org.openapis.openapi.models.shared.CsrExtensions;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.EdiPartyName;
import org.openapis.openapi.models.shared.GeneralName;
import org.openapis.openapi.models.shared.KeyAlgorithmEnum;
import org.openapis.openapi.models.shared.KeyStorageSecurityStandardEnum;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.OcspConfiguration;
import org.openapis.openapi.models.shared.OtherName;
import org.openapis.openapi.models.shared.RevocationConfiguration;
import org.openapis.openapi.models.shared.S3ObjectAclEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SigningAlgorithmEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCertificateAuthorityRequest req = new CreateCertificateAuthorityRequest(                new CreateCertificateAuthorityRequest(                new CertificateAuthorityConfiguration(KeyAlgorithmEnum.RSA2048, SigningAlgorithmEnum.SHA384_WITHECDSA,                 new Asn1Subject() {{
                                                                commonName = "dolor";
                                                                country = "Cocos (Keeling) Islands";
                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                    add(new CustomAttribute("cum", "voluptate") {{
                                                                        objectIdentifier = "hic";
                                                                        value = "excepturi";
                                                                    }}),
                                                                }};
                                                                distinguishedNameQualifier = "dignissimos";
                                                                generationQualifier = "reiciendis";
                                                                givenName = "amet";
                                                                initials = "dolorum";
                                                                locality = "numquam";
                                                                organization = "veritatis";
                                                                organizationalUnit = "ipsa";
                                                                pseudonym = "ipsa";
                                                                serialNumber = "iure";
                                                                state = "odio";
                                                                surname = "quaerat";
                                                                title = "Dr.";
                                                            }};) {{
                                                csrExtensions = new CsrExtensions() {{
                                                    keyUsage = new KeyUsage() {{
                                                        crlSign = false;
                                                        dataEncipherment = false;
                                                        decipherOnly = false;
                                                        digitalSignature = false;
                                                        encipherOnly = false;
                                                        keyAgreement = false;
                                                        keyCertSign = false;
                                                        keyEncipherment = false;
                                                        nonRepudiation = false;
                                                    }};;
                                                    subjectInformationAccess = new org.openapis.openapi.models.shared.AccessDescription[]{{
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "tempora";
                                                                                country = "Isle of Man";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("dolorum", "a") {{
                                                                                        objectIdentifier = "officiis";
                                                                                        value = "qui";
                                                                                    }}),
                                                                                    add(new CustomAttribute("iusto", "ipsum") {{
                                                                                        objectIdentifier = "esse";
                                                                                        value = "harum";
                                                                                    }}),
                                                                                    add(new CustomAttribute("amet", "tempore") {{
                                                                                        objectIdentifier = "quisquam";
                                                                                        value = "tenetur";
                                                                                    }}),
                                                                                    add(new CustomAttribute("enim", "dolorem") {{
                                                                                        objectIdentifier = "accusamus";
                                                                                        value = "numquam";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "sapiente";
                                                                                generationQualifier = "totam";
                                                                                givenName = "nihil";
                                                                                initials = "sit";
                                                                                locality = "expedita";
                                                                                organization = "neque";
                                                                                organizationalUnit = "sed";
                                                                                pseudonym = "vel";
                                                                                serialNumber = "libero";
                                                                                state = "voluptas";
                                                                                surname = "deserunt";
                                                                                title = "Ms.";
                                                                            }};;
                                                                            dnsName = "ipsum";
                                                                            ediPartyName = new EdiPartyName("incidunt") {{
                                                                                nameAssigner = "qui";
                                                                            }};;
                                                                            ipAddress = "cupiditate";
                                                                            otherName = new OtherName("maxime", "pariatur");;
                                                                            registeredId = "soluta";
                                                                            rfc822Name = "dicta";
                                                                            uniformResourceIdentifier = "laborum";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_MANIFEST;
                                                                            customObjectIdentifier = "incidunt";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "voluptatibus";
                                                                    country = "Heard Island and McDonald Islands";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("sit", "fugiat") {{
                                                                            objectIdentifier = "eos";
                                                                            value = "atque";
                                                                        }}),
                                                                        add(new CustomAttribute("dolorum", "iusto") {{
                                                                            objectIdentifier = "ab";
                                                                            value = "soluta";
                                                                        }}),
                                                                        add(new CustomAttribute("deleniti", "omnis") {{
                                                                            objectIdentifier = "voluptate";
                                                                            value = "dolorum";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "necessitatibus";
                                                                    generationQualifier = "distinctio";
                                                                    givenName = "asperiores";
                                                                    initials = "nihil";
                                                                    locality = "ipsum";
                                                                    organization = "voluptate";
                                                                    organizationalUnit = "id";
                                                                    pseudonym = "saepe";
                                                                    serialNumber = "eius";
                                                                    state = "aspernatur";
                                                                    surname = "perferendis";
                                                                    title = "Mrs.";
                                                                }};
                                                                dnsName = "optio";
                                                                ediPartyName = new EdiPartyName("saepe") {{
                                                                    nameAssigner = "accusamus";
                                                                    partyName = "ad";
                                                                }};
                                                                ipAddress = "suscipit";
                                                                otherName = new OtherName("minima", "repellendus") {{
                                                                    typeId = "deserunt";
                                                                    value = "provident";
                                                                }};
                                                                registeredId = "totam";
                                                                rfc822Name = "similique";
                                                                uniformResourceIdentifier = "alias";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_NOTIFY;
                                                                customObjectIdentifier = "quaerat";
                                                            }};
                                                        }}),
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "consequatur";
                                                                                country = "Oman";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("ut", "facilis") {{
                                                                                        objectIdentifier = "porro";
                                                                                        value = "doloribus";
                                                                                    }}),
                                                                                    add(new CustomAttribute("quae", "laudantium") {{
                                                                                        objectIdentifier = "cupiditate";
                                                                                        value = "qui";
                                                                                    }}),
                                                                                    add(new CustomAttribute("voluptatibus", "quisquam") {{
                                                                                        objectIdentifier = "odio";
                                                                                        value = "occaecati";
                                                                                    }}),
                                                                                    add(new CustomAttribute("quis", "ipsum") {{
                                                                                        objectIdentifier = "vero";
                                                                                        value = "omnis";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "delectus";
                                                                                generationQualifier = "voluptate";
                                                                                givenName = "consectetur";
                                                                                initials = "vero";
                                                                                locality = "tenetur";
                                                                                organization = "dignissimos";
                                                                                organizationalUnit = "hic";
                                                                                pseudonym = "distinctio";
                                                                                serialNumber = "quod";
                                                                                state = "odio";
                                                                                surname = "similique";
                                                                                title = "Miss";
                                                                            }};;
                                                                            dnsName = "vero";
                                                                            ediPartyName = new EdiPartyName("ducimus") {{
                                                                                nameAssigner = "dolore";
                                                                            }};;
                                                                            ipAddress = "quibusdam";
                                                                            otherName = new OtherName("illum", "sequi");;
                                                                            registeredId = "natus";
                                                                            rfc822Name = "impedit";
                                                                            uniformResourceIdentifier = "aut";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_NOTIFY;
                                                                            customObjectIdentifier = "exercitationem";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "aspernatur";
                                                                    country = "Chile";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("quam", "molestias") {{
                                                                            objectIdentifier = "facilis";
                                                                            value = "aliquid";
                                                                        }}),
                                                                        add(new CustomAttribute("neque", "fugit") {{
                                                                            objectIdentifier = "temporibus";
                                                                            value = "qui";
                                                                        }}),
                                                                        add(new CustomAttribute("sunt", "ullam") {{
                                                                            objectIdentifier = "magni";
                                                                            value = "odio";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "nam";
                                                                    generationQualifier = "hic";
                                                                    givenName = "voluptatem";
                                                                    initials = "cumque";
                                                                    locality = "soluta";
                                                                    organization = "nobis";
                                                                    organizationalUnit = "et";
                                                                    pseudonym = "saepe";
                                                                    serialNumber = "ipsum";
                                                                    state = "veritatis";
                                                                    surname = "nobis";
                                                                    title = "Ms.";
                                                                }};
                                                                dnsName = "tempore";
                                                                ediPartyName = new EdiPartyName("delectus") {{
                                                                    nameAssigner = "cupiditate";
                                                                    partyName = "aperiam";
                                                                }};
                                                                ipAddress = "dolorem";
                                                                otherName = new OtherName("adipisci", "dolorum") {{
                                                                    typeId = "dolore";
                                                                    value = "labore";
                                                                }};
                                                                registeredId = "architecto";
                                                                rfc822Name = "quae";
                                                                uniformResourceIdentifier = "aut";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_MANIFEST;
                                                                customObjectIdentifier = "itaque";
                                                            }};
                                                        }}),
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "eaque";
                                                                                country = "Uruguay";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("deleniti", "impedit") {{
                                                                                        objectIdentifier = "aut";
                                                                                        value = "aut";
                                                                                    }}),
                                                                                    add(new CustomAttribute("accusamus", "inventore") {{
                                                                                        objectIdentifier = "aliquam";
                                                                                        value = "fugit";
                                                                                    }}),
                                                                                    add(new CustomAttribute("dolorum", "laborum") {{
                                                                                        objectIdentifier = "non";
                                                                                        value = "et";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "placeat";
                                                                                generationQualifier = "velit";
                                                                                givenName = "eum";
                                                                                initials = "autem";
                                                                                locality = "nobis";
                                                                                organization = "quas";
                                                                                organizationalUnit = "assumenda";
                                                                                pseudonym = "nulla";
                                                                                serialNumber = "voluptas";
                                                                                state = "libero";
                                                                                surname = "quasi";
                                                                                title = "Mrs.";
                                                                            }};;
                                                                            dnsName = "numquam";
                                                                            ediPartyName = new EdiPartyName("explicabo") {{
                                                                                nameAssigner = "provident";
                                                                            }};;
                                                                            ipAddress = "ipsa";
                                                                            otherName = new OtherName("molestiae", "magnam");;
                                                                            registeredId = "odio";
                                                                            rfc822Name = "eius";
                                                                            uniformResourceIdentifier = "esse";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_MANIFEST;
                                                                            customObjectIdentifier = "rem";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "nulla";
                                                                    country = "Cameroon";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("iusto", "eligendi") {{
                                                                            objectIdentifier = "maiores";
                                                                            value = "doloribus";
                                                                        }}),
                                                                        add(new CustomAttribute("officia", "tempora") {{
                                                                            objectIdentifier = "ducimus";
                                                                            value = "alias";
                                                                        }}),
                                                                        add(new CustomAttribute("aspernatur", "vel") {{
                                                                            objectIdentifier = "ipsam";
                                                                            value = "ea";
                                                                        }}),
                                                                        add(new CustomAttribute("ratione", "ex") {{
                                                                            objectIdentifier = "possimus";
                                                                            value = "magnam";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "laudantium";
                                                                    generationQualifier = "dicta";
                                                                    givenName = "dolor";
                                                                    initials = "maiores";
                                                                    locality = "quasi";
                                                                    organization = "ex";
                                                                    organizationalUnit = "nulla";
                                                                    pseudonym = "excepturi";
                                                                    serialNumber = "voluptatibus";
                                                                    state = "nostrum";
                                                                    surname = "sapiente";
                                                                    title = "Miss";
                                                                }};
                                                                dnsName = "saepe";
                                                                ediPartyName = new EdiPartyName("corporis") {{
                                                                    nameAssigner = "ea";
                                                                    partyName = "impedit";
                                                                }};
                                                                ipAddress = "veniam";
                                                                otherName = new OtherName("magnam", "ea") {{
                                                                    typeId = "aliquid";
                                                                    value = "inventore";
                                                                }};
                                                                registeredId = "quo";
                                                                rfc822Name = "consectetur";
                                                                uniformResourceIdentifier = "recusandae";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.CA_REPOSITORY;
                                                                customObjectIdentifier = "minima";
                                                            }};
                                                        }}),
                                                    }};
                                                }};;
                                            }};, CertificateAuthorityTypeEnum.SUBORDINATE) {{
                                idempotencyToken = "reprehenderit";
                                keyStorageSecurityStandard = KeyStorageSecurityStandardEnum.FIPS1402_LEVEL3_OR_HIGHER;
                                revocationConfiguration = new RevocationConfiguration() {{
                                    crlConfiguration = new CrlConfiguration(false) {{
                                        customCname = "fugiat";
                                        expirationInDays = 283519L;
                                        s3BucketName = "eum";
                                        s3ObjectAcl = S3ObjectAclEnum.PUBLIC_READ;
                                    }};;
                                    ocspConfiguration = new OcspConfiguration(false) {{
                                        ocspCustomCname = "assumenda";
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("veritatis") {{
                                        key = "praesentium";
                                        value = "quisquam";
                                    }}),
                                }};
                                usageMode = CertificateAuthorityUsageModeEnum.GENERAL_PURPOSE;
                            }};, CreateCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "fuga";
            }};            

            CreateCertificateAuthorityResponse res = sdk.sdk.createCertificateAuthority(req);

            if (res.createCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCertificateAuthorityAuditReport

<p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityAuditReportRequest;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityAuditReportResponse;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityAuditReportXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuditReportResponseFormatEnum;
import org.openapis.openapi.models.shared.CreateCertificateAuthorityAuditReportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCertificateAuthorityAuditReportRequest req = new CreateCertificateAuthorityAuditReportRequest(                new CreateCertificateAuthorityAuditReportRequest(AuditReportResponseFormatEnum.JSON, "voluptas", "ab");, CreateCertificateAuthorityAuditReportXAmzTargetEnum.ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            CreateCertificateAuthorityAuditReportResponse res = sdk.sdk.createCertificateAuthorityAuditReport(req);

            if (res.createCertificateAuthorityAuditReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPermission

<p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePermissionRequest;
import org.openapis.openapi.models.operations.CreatePermissionResponse;
import org.openapis.openapi.models.operations.CreatePermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionTypeEnum;
import org.openapis.openapi.models.shared.CreatePermissionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePermissionRequest req = new CreatePermissionRequest(                new CreatePermissionRequest(                new org.openapis.openapi.models.shared.ActionTypeEnum[]{{
                                                add(ActionTypeEnum.LIST_PERMISSIONS),
                                                add(ActionTypeEnum.ISSUE_CERTIFICATE),
                                            }}, "distinctio", "quod") {{
                                sourceAccount = "dignissimos";
                            }};, CreatePermissionXAmzTargetEnum.ACM_PRIVATE_CA_CREATE_PERMISSION) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreatePermissionResponse res = sdk.sdk.createPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCertificateAuthority

<p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.DeleteCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.DeleteCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCertificateAuthorityRequest req = new DeleteCertificateAuthorityRequest(                new DeleteCertificateAuthorityRequest("sapiente") {{
                                permanentDeletionTimeInDays = 174112L;
                            }};, DeleteCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_DELETE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "accusantium";
                xAmzDate = "porro";
                xAmzSecurityToken = "eum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "praesentium";
            }};            

            DeleteCertificateAuthorityResponse res = sdk.sdk.deleteCertificateAuthority(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermission

<p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionRequest;
import org.openapis.openapi.models.operations.DeletePermissionResponse;
import org.openapis.openapi.models.operations.DeletePermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePermissionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePermissionRequest req = new DeletePermissionRequest(                new DeletePermissionRequest("deleniti", "fugit") {{
                                sourceAccount = "fuga";
                            }};, DeletePermissionXAmzTargetEnum.ACM_PRIVATE_CA_DELETE_PERMISSION) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "fugit";
            }};            

            DeletePermissionResponse res = sdk.sdk.deletePermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePolicy

<p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePolicyRequest;
import org.openapis.openapi.models.operations.DeletePolicyResponse;
import org.openapis.openapi.models.operations.DeletePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePolicyRequest req = new DeletePolicyRequest(                new DeletePolicyRequest("consequuntur");, DeletePolicyXAmzTargetEnum.ACM_PRIVATE_CA_DELETE_POLICY) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "saepe";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "atque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
            }};            

            DeletePolicyResponse res = sdk.sdk.deletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificateAuthority

<p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificateAuthorityRequest req = new DescribeCertificateAuthorityRequest(                new DescribeCertificateAuthorityRequest("accusamus");, DescribeCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_DESCRIBE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeCertificateAuthorityResponse res = sdk.sdk.describeCertificateAuthority(req);

            if (res.describeCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificateAuthorityAuditReport

Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityAuditReportRequest;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityAuditReportResponse;
import org.openapis.openapi.models.operations.DescribeCertificateAuthorityAuditReportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificateAuthorityAuditReportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificateAuthorityAuditReportRequest req = new DescribeCertificateAuthorityAuditReportRequest(                new DescribeCertificateAuthorityAuditReportRequest("vel", "harum");, DescribeCertificateAuthorityAuditReportXAmzTargetEnum.ACM_PRIVATE_CA_DESCRIBE_CERTIFICATE_AUTHORITY_AUDIT_REPORT) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "occaecati";
                xAmzDate = "minima";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sit";
            }};            

            DescribeCertificateAuthorityAuditReportResponse res = sdk.sdk.describeCertificateAuthorityAuditReport(req);

            if (res.describeCertificateAuthorityAuditReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificate

Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateRequest;
import org.openapis.openapi.models.operations.GetCertificateResponse;
import org.openapis.openapi.models.operations.GetCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCertificateRequest req = new GetCertificateRequest(                new GetCertificateRequest("tempore", "adipisci");, GetCertificateXAmzTargetEnum.ACM_PRIVATE_CA_GET_CERTIFICATE) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            GetCertificateResponse res = sdk.sdk.getCertificate(req);

            if (res.getCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificateAuthorityCertificate

Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCertificateRequest;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCertificateResponse;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCertificateAuthorityCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCertificateAuthorityCertificateRequest req = new GetCertificateAuthorityCertificateRequest(                new GetCertificateAuthorityCertificateRequest("blanditiis");, GetCertificateAuthorityCertificateXAmzTargetEnum.ACM_PRIVATE_CA_GET_CERTIFICATE_AUTHORITY_CERTIFICATE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            GetCertificateAuthorityCertificateResponse res = sdk.sdk.getCertificateAuthorityCertificate(req);

            if (res.getCertificateAuthorityCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificateAuthorityCsr

Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCsrRequest;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCsrResponse;
import org.openapis.openapi.models.operations.GetCertificateAuthorityCsrXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCertificateAuthorityCsrRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCertificateAuthorityCsrRequest req = new GetCertificateAuthorityCsrRequest(                new GetCertificateAuthorityCsrRequest("sint");, GetCertificateAuthorityCsrXAmzTargetEnum.ACM_PRIVATE_CA_GET_CERTIFICATE_AUTHORITY_CSR) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "quia";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "veritatis";
            }};            

            GetCertificateAuthorityCsrResponse res = sdk.sdk.getCertificateAuthorityCsr(req);

            if (res.getCertificateAuthorityCsrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicy

<p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyRequest;
import org.openapis.openapi.models.operations.GetPolicyResponse;
import org.openapis.openapi.models.operations.GetPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPolicyRequest req = new GetPolicyRequest(                new GetPolicyRequest("quasi");, GetPolicyXAmzTargetEnum.ACM_PRIVATE_CA_GET_POLICY) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            GetPolicyResponse res = sdk.sdk.getPolicy(req);

            if (res.getPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCertificateAuthorityCertificate

<p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCertificateAuthorityCertificateRequest;
import org.openapis.openapi.models.operations.ImportCertificateAuthorityCertificateResponse;
import org.openapis.openapi.models.operations.ImportCertificateAuthorityCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportCertificateAuthorityCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportCertificateAuthorityCertificateRequest req = new ImportCertificateAuthorityCertificateRequest(                new ImportCertificateAuthorityCertificateRequest("eius", "libero") {{
                                certificateChain = "illum";
                            }};, ImportCertificateAuthorityCertificateXAmzTargetEnum.ACM_PRIVATE_CA_IMPORT_CERTIFICATE_AUTHORITY_CERTIFICATE) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "aliquam";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            ImportCertificateAuthorityCertificateResponse res = sdk.sdk.importCertificateAuthorityCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCertificate

<p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCertificateRequest;
import org.openapis.openapi.models.operations.IssueCertificateResponse;
import org.openapis.openapi.models.operations.IssueCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApiPassthrough;
import org.openapis.openapi.models.shared.Asn1Subject;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.CustomExtension;
import org.openapis.openapi.models.shared.EdiPartyName;
import org.openapis.openapi.models.shared.ExtendedKeyUsage;
import org.openapis.openapi.models.shared.ExtendedKeyUsageTypeEnum;
import org.openapis.openapi.models.shared.Extensions;
import org.openapis.openapi.models.shared.GeneralName;
import org.openapis.openapi.models.shared.IssueCertificateRequest;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.OtherName;
import org.openapis.openapi.models.shared.PolicyInformation;
import org.openapis.openapi.models.shared.PolicyQualifierIdEnum;
import org.openapis.openapi.models.shared.PolicyQualifierInfo;
import org.openapis.openapi.models.shared.Qualifier;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SigningAlgorithmEnum;
import org.openapis.openapi.models.shared.Validity;
import org.openapis.openapi.models.shared.ValidityPeriodTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCertificateRequest req = new IssueCertificateRequest(                new IssueCertificateRequest("nisi", "aut", SigningAlgorithmEnum.SHA256_WITHRSA,                 new Validity(ValidityPeriodTypeEnum.END_DATE, 845358L);) {{
                                apiPassthrough = new ApiPassthrough() {{
                                    extensions = new Extensions() {{
                                        certificatePolicies = new org.openapis.openapi.models.shared.PolicyInformation[]{{
                                            add(new PolicyInformation("adipisci") {{
                                                certPolicyId = "deleniti";
                                                policyQualifiers = new org.openapis.openapi.models.shared.PolicyQualifierInfo[]{{
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("omnis");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("architecto") {{
                                                            cpsUri = "dolorum";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("at");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("quasi") {{
                                                            cpsUri = "tenetur";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("ipsa");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("voluptate") {{
                                                            cpsUri = "et";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("consectetur");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("veritatis") {{
                                                            cpsUri = "minima";
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                            add(new PolicyInformation("numquam") {{
                                                certPolicyId = "iste";
                                                policyQualifiers = new org.openapis.openapi.models.shared.PolicyQualifierInfo[]{{
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("aut");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("rem") {{
                                                            cpsUri = "accusantium";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("mollitia");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("eum") {{
                                                            cpsUri = "laudantium";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("non");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("corrupti") {{
                                                            cpsUri = "ab";
                                                        }};
                                                    }}),
                                                    add(new PolicyQualifierInfo(PolicyQualifierIdEnum.CPS,                 new Qualifier("occaecati");) {{
                                                        policyQualifierId = PolicyQualifierIdEnum.CPS;
                                                        qualifier = new Qualifier("dolor") {{
                                                            cpsUri = "voluptatem";
                                                        }};
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        customExtensions = new org.openapis.openapi.models.shared.CustomExtension[]{{
                                            add(new CustomExtension("aut", "dignissimos") {{
                                                critical = false;
                                                objectIdentifier = "explicabo";
                                                value = "voluptas";
                                            }}),
                                            add(new CustomExtension("natus", "velit") {{
                                                critical = false;
                                                objectIdentifier = "dicta";
                                                value = "maiores";
                                            }}),
                                            add(new CustomExtension("asperiores", "aperiam") {{
                                                critical = false;
                                                objectIdentifier = "voluptatibus";
                                                value = "voluptas";
                                            }}),
                                            add(new CustomExtension("consequuntur", "repellendus") {{
                                                critical = false;
                                                objectIdentifier = "ea";
                                                value = "quaerat";
                                            }}),
                                        }};
                                        extendedKeyUsage = new org.openapis.openapi.models.shared.ExtendedKeyUsage[]{{
                                            add(new ExtendedKeyUsage() {{
                                                extendedKeyUsageObjectIdentifier = "maxime";
                                                extendedKeyUsageType = ExtendedKeyUsageTypeEnum.TIME_STAMPING;
                                            }}),
                                            add(new ExtendedKeyUsage() {{
                                                extendedKeyUsageObjectIdentifier = "officia";
                                                extendedKeyUsageType = ExtendedKeyUsageTypeEnum.CERTIFICATE_TRANSPARENCY;
                                            }}),
                                            add(new ExtendedKeyUsage() {{
                                                extendedKeyUsageObjectIdentifier = "nemo";
                                                extendedKeyUsageType = ExtendedKeyUsageTypeEnum.SERVER_AUTH;
                                            }}),
                                        }};
                                        keyUsage = new KeyUsage() {{
                                            crlSign = false;
                                            dataEncipherment = false;
                                            decipherOnly = false;
                                            digitalSignature = false;
                                            encipherOnly = false;
                                            keyAgreement = false;
                                            keyCertSign = false;
                                            keyEncipherment = false;
                                            nonRepudiation = false;
                                        }};;
                                        subjectAlternativeNames = new org.openapis.openapi.models.shared.GeneralName[]{{
                                            add(new GeneralName() {{
                                                directoryName = new Asn1Subject() {{
                                                    commonName = "porro";
                                                    country = "Sierra Leone";
                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                        add(new CustomAttribute("fuga", "id") {{
                                                            objectIdentifier = "ab";
                                                            value = "adipisci";
                                                        }}),
                                                        add(new CustomAttribute("culpa", "est") {{
                                                            objectIdentifier = "suscipit";
                                                            value = "velit";
                                                        }}),
                                                    }};
                                                    distinguishedNameQualifier = "recusandae";
                                                    generationQualifier = "totam";
                                                    givenName = "fugiat";
                                                    initials = "vel";
                                                    locality = "ducimus";
                                                    organization = "quos";
                                                    organizationalUnit = "vel";
                                                    pseudonym = "labore";
                                                    serialNumber = "possimus";
                                                    state = "facilis";
                                                    surname = "cum";
                                                    title = "Ms.";
                                                }};
                                                dnsName = "in";
                                                ediPartyName = new EdiPartyName("assumenda") {{
                                                    nameAssigner = "corporis";
                                                    partyName = "reiciendis";
                                                }};
                                                ipAddress = "nemo";
                                                otherName = new OtherName("aperiam", "cum") {{
                                                    typeId = "recusandae";
                                                    value = "aliquid";
                                                }};
                                                registeredId = "consectetur";
                                                rfc822Name = "in";
                                                uniformResourceIdentifier = "exercitationem";
                                            }}),
                                            add(new GeneralName() {{
                                                directoryName = new Asn1Subject() {{
                                                    commonName = "earum";
                                                    country = "Slovenia";
                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                        add(new CustomAttribute("reiciendis", "quidem") {{
                                                            objectIdentifier = "doloribus";
                                                            value = "suscipit";
                                                        }}),
                                                        add(new CustomAttribute("dolore", "sunt") {{
                                                            objectIdentifier = "saepe";
                                                            value = "necessitatibus";
                                                        }}),
                                                    }};
                                                    distinguishedNameQualifier = "asperiores";
                                                    generationQualifier = "adipisci";
                                                    givenName = "non";
                                                    initials = "amet";
                                                    locality = "beatae";
                                                    organization = "dignissimos";
                                                    organizationalUnit = "a";
                                                    pseudonym = "debitis";
                                                    serialNumber = "consectetur";
                                                    state = "corporis";
                                                    surname = "harum";
                                                    title = "Mrs.";
                                                }};
                                                dnsName = "ipsa";
                                                ediPartyName = new EdiPartyName("vitae") {{
                                                    nameAssigner = "voluptates";
                                                    partyName = "libero";
                                                }};
                                                ipAddress = "accusamus";
                                                otherName = new OtherName("aspernatur", "voluptas") {{
                                                    typeId = "similique";
                                                    value = "tempora";
                                                }};
                                                registeredId = "voluptas";
                                                rfc822Name = "voluptas";
                                                uniformResourceIdentifier = "minima";
                                            }}),
                                        }};
                                    }};;
                                    subject = new Asn1Subject() {{
                                        commonName = "nobis";
                                        country = "Palau";
                                        customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                            add(new CustomAttribute("blanditiis", "in") {{
                                                objectIdentifier = "minus";
                                                value = "dolores";
                                            }}),
                                        }};
                                        distinguishedNameQualifier = "dolore";
                                        generationQualifier = "aliquam";
                                        givenName = "officiis";
                                        initials = "temporibus";
                                        locality = "ullam";
                                        organization = "adipisci";
                                        organizationalUnit = "cum";
                                        pseudonym = "blanditiis";
                                        serialNumber = "quas";
                                        state = "hic";
                                        surname = "nesciunt";
                                        title = "Miss";
                                    }};;
                                }};;
                                idempotencyToken = "corrupti";
                                templateArn = "pariatur";
                                validityNotBefore = new Validity(ValidityPeriodTypeEnum.DAYS, 940210L);;
                            }};, IssueCertificateXAmzTargetEnum.ACM_PRIVATE_CA_ISSUE_CERTIFICATE) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "sit";
                xAmzDate = "rerum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "explicabo";
            }};            

            IssueCertificateResponse res = sdk.sdk.issueCertificate(req);

            if (res.issueCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCertificateAuthorities

Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCertificateAuthoritiesRequest;
import org.openapis.openapi.models.operations.ListCertificateAuthoritiesResponse;
import org.openapis.openapi.models.operations.ListCertificateAuthoritiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCertificateAuthoritiesRequest;
import org.openapis.openapi.models.shared.ResourceOwnerEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCertificateAuthoritiesRequest req = new ListCertificateAuthoritiesRequest(                new ListCertificateAuthoritiesRequest() {{
                                maxResults = 707918L;
                                nextToken = "voluptate";
                                resourceOwner = ResourceOwnerEnum.OTHER_ACCOUNTS;
                            }};, ListCertificateAuthoritiesXAmzTargetEnum.ACM_PRIVATE_CA_LIST_CERTIFICATE_AUTHORITIES) {{
                maxResults = "ab";
                nextToken = "iste";
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "sed";
                xAmzDate = "in";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListCertificateAuthoritiesResponse res = sdk.sdk.listCertificateAuthorities(req);

            if (res.listCertificateAuthoritiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissions

<p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionsRequest;
import org.openapis.openapi.models.operations.ListPermissionsResponse;
import org.openapis.openapi.models.operations.ListPermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionsRequest req = new ListPermissionsRequest(                new ListPermissionsRequest("unde") {{
                                maxResults = 100032L;
                                nextToken = "suscipit";
                            }};, ListPermissionsXAmzTargetEnum.ACM_PRIVATE_CA_LIST_PERMISSIONS) {{
                maxResults = "sapiente";
                nextToken = "debitis";
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "perferendis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "sed";
            }};            

            ListPermissionsResponse res = sdk.sdk.listPermissions(req);

            if (res.listPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.operations.ListTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest("eius") {{
                                maxResults = 896762L;
                                nextToken = "ipsum";
                            }};, ListTagsXAmzTargetEnum.ACM_PRIVATE_CA_LIST_TAGS) {{
                maxResults = "ea";
                nextToken = "occaecati";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "tempora";
                xAmzDate = "tempora";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "ex";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPolicy

<p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPolicyRequest;
import org.openapis.openapi.models.operations.PutPolicyResponse;
import org.openapis.openapi.models.operations.PutPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPolicyRequest req = new PutPolicyRequest(                new PutPolicyRequest("non", "officiis");, PutPolicyXAmzTargetEnum.ACM_PRIVATE_CA_PUT_POLICY) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "quaerat";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "rem";
            }};            

            PutPolicyResponse res = sdk.sdk.putPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreCertificateAuthority

Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.RestoreCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.RestoreCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreCertificateAuthorityRequest req = new RestoreCertificateAuthorityRequest(                new RestoreCertificateAuthorityRequest("nobis");, RestoreCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_RESTORE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "minima";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "magni";
            }};            

            RestoreCertificateAuthorityResponse res = sdk.sdk.restoreCertificateAuthority(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeCertificate

<p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeCertificateRequest;
import org.openapis.openapi.models.operations.RevokeCertificateResponse;
import org.openapis.openapi.models.operations.RevokeCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.RevocationReasonEnum;
import org.openapis.openapi.models.shared.RevokeCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RevokeCertificateRequest req = new RevokeCertificateRequest(                new RevokeCertificateRequest("saepe", "numquam", RevocationReasonEnum.CERTIFICATE_AUTHORITY_COMPROMISE);, RevokeCertificateXAmzTargetEnum.ACM_PRIVATE_CA_REVOKE_CERTIFICATE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            RevokeCertificateResponse res = sdk.sdk.revokeCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagCertificateAuthority

<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.TagCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.TagCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagCertificateAuthorityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagCertificateAuthorityRequest req = new TagCertificateAuthorityRequest(                new TagCertificateAuthorityRequest("dolorum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("expedita") {{
                                                    key = "error";
                                                    value = "hic";
                                                }}),
                                                add(new Tag("dolorum") {{
                                                    key = "debitis";
                                                    value = "neque";
                                                }}),
                                                add(new Tag("dolorum") {{
                                                    key = "nostrum";
                                                    value = "officia";
                                                }}),
                                            }});, TagCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_TAG_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "tempora";
                xAmzDate = "atque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "fugiat";
            }};            

            TagCertificateAuthorityResponse res = sdk.sdk.tagCertificateAuthority(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagCertificateAuthority

Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.UntagCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.UntagCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UntagCertificateAuthorityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagCertificateAuthorityRequest req = new UntagCertificateAuthorityRequest(                new UntagCertificateAuthorityRequest("culpa",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("esse") {{
                                                    key = "magnam";
                                                    value = "consequatur";
                                                }}),
                                                add(new Tag("voluptatum") {{
                                                    key = "ipsam";
                                                    value = "sit";
                                                }}),
                                                add(new Tag("corporis") {{
                                                    key = "quas";
                                                    value = "repudiandae";
                                                }}),
                                            }});, UntagCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_UNTAG_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "ex";
                xAmzDate = "sed";
                xAmzSecurityToken = "sit";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "nostrum";
            }};            

            UntagCertificateAuthorityResponse res = sdk.sdk.untagCertificateAuthority(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCertificateAuthority

<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.UpdateCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.UpdateCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityStatusEnum;
import org.openapis.openapi.models.shared.CrlConfiguration;
import org.openapis.openapi.models.shared.OcspConfiguration;
import org.openapis.openapi.models.shared.RevocationConfiguration;
import org.openapis.openapi.models.shared.S3ObjectAclEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCertificateAuthorityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCertificateAuthorityRequest req = new UpdateCertificateAuthorityRequest(                new UpdateCertificateAuthorityRequest("error") {{
                                revocationConfiguration = new RevocationConfiguration() {{
                                    crlConfiguration = new CrlConfiguration(false) {{
                                        customCname = "consequatur";
                                        expirationInDays = 279068L;
                                        s3BucketName = "reiciendis";
                                        s3ObjectAcl = S3ObjectAclEnum.PUBLIC_READ;
                                    }};;
                                    ocspConfiguration = new OcspConfiguration(false) {{
                                        ocspCustomCname = "harum";
                                    }};;
                                }};;
                                status = CertificateAuthorityStatusEnum.CREATING;
                            }};, UpdateCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_UPDATE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "labore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "atque";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "nam";
            }};            

            UpdateCertificateAuthorityResponse res = sdk.sdk.updateCertificateAuthority(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
