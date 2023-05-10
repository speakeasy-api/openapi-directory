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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CsrExtensions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\AccessDescription;
use \OpenAPI\OpenAPI\Models\Shared\GeneralName;
use \OpenAPI\OpenAPI\Models\Shared\Asn1Subject;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\EdiPartyName;
use \OpenAPI\OpenAPI\Models\Shared\OtherName;
use \OpenAPI\OpenAPI\Models\Shared\AccessMethod;
use \OpenAPI\OpenAPI\Models\Shared\AccessMethodTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\SigningAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyStorageSecurityStandardEnum;
use \OpenAPI\OpenAPI\Models\Shared\RevocationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ObjectAclEnum;
use \OpenAPI\OpenAPI\Models\Shared\OcspConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityUsageModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCertificateAuthorityRequest();
    $request->createCertificateAuthorityRequest = new CreateCertificateAuthorityRequest();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration = new CertificateAuthorityConfiguration();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions = new CsrExtensions();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage = new KeyUsage();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->crlSign = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->dataEncipherment = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->decipherOnly = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->digitalSignature = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->encipherOnly = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyAgreement = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyCertSign = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->keyEncipherment = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->keyUsage->nonRepudiation = false;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->csrExtensions->subjectInformationAccess = [
        new AccessDescription(),
        new AccessDescription(),
        new AccessDescription(),
        new AccessDescription(),
    ];
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->keyAlgorithm = KeyAlgorithmEnum::EC_SECP384R1;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->signingAlgorithm = SigningAlgorithmEnum::SHA256_WITHECDSA;
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject = new Asn1Subject();
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->commonName = 'at';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->country = 'Taiwan';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->distinguishedNameQualifier = 'molestiae';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->generationQualifier = 'quod';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->givenName = 'quod';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->initials = 'esse';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->locality = 'totam';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->organization = 'porro';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->organizationalUnit = 'dolorum';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->pseudonym = 'dicta';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->serialNumber = 'nam';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->state = 'officia';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->surname = 'occaecati';
    $request->createCertificateAuthorityRequest->certificateAuthorityConfiguration->subject->title = 'Mr.';
    $request->createCertificateAuthorityRequest->certificateAuthorityType = CertificateAuthorityTypeEnum::SUBORDINATE;
    $request->createCertificateAuthorityRequest->idempotencyToken = 'hic';
    $request->createCertificateAuthorityRequest->keyStorageSecurityStandard = KeyStorageSecurityStandardEnum::FIPS1402_LEVEL3_OR_HIGHER;
    $request->createCertificateAuthorityRequest->revocationConfiguration = new RevocationConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration = new CrlConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->customCname = 'totam';
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->enabled = false;
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->expirationInDays = 105907;
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3BucketName = 'commodi';
    $request->createCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3ObjectAcl = S3ObjectAclEnum::PUBLIC_READ;
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration = new OcspConfiguration();
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->enabled = false;
    $request->createCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->ocspCustomCname = 'modi';
    $request->createCertificateAuthorityRequest->tags = [
        new Tag(),
    ];
    $request->createCertificateAuthorityRequest->usageMode = CertificateAuthorityUsageModeEnum::SHORT_LIVED_CERTIFICATE;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = CreateCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->createCertificateAuthority($request);

    if ($response->createCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCertificateAuthorityAuditReport

<p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityAuditReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCertificateAuthorityAuditReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuditReportResponseFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateAuthorityAuditReportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCertificateAuthorityAuditReportRequest();
    $request->createCertificateAuthorityAuditReportRequest = new CreateCertificateAuthorityAuditReportRequest();
    $request->createCertificateAuthorityAuditReportRequest->auditReportResponseFormat = AuditReportResponseFormatEnum::CSV;
    $request->createCertificateAuthorityAuditReportRequest->certificateAuthorityArn = 'sed';
    $request->createCertificateAuthorityAuditReportRequest->s3BucketName = 'iste';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateCertificateAuthorityAuditReportXAmzTargetEnum::ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT;

    $response = $sdk->sdk->createCertificateAuthorityAuditReport($request);

    if ($response->createCertificateAuthorityAuditReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPermission

<p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermissionRequest();
    $request->createPermissionRequest = new CreatePermissionRequest();
    $request->createPermissionRequest->actions = [
        ActionTypeEnum::GET_CERTIFICATE,
        ActionTypeEnum::GET_CERTIFICATE,
    ];
    $request->createPermissionRequest->certificateAuthorityArn = 'saepe';
    $request->createPermissionRequest->principal = 'quidem';
    $request->createPermissionRequest->sourceAccount = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = CreatePermissionXAmzTargetEnum::ACM_PRIVATE_CA_CREATE_PERMISSION;

    $response = $sdk->sdk->createPermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificateAuthority

<p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateAuthorityRequest();
    $request->deleteCertificateAuthorityRequest = new DeleteCertificateAuthorityRequest();
    $request->deleteCertificateAuthorityRequest->certificateAuthorityArn = 'corporis';
    $request->deleteCertificateAuthorityRequest->permanentDeletionTimeInDays = 128926;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DeleteCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_DELETE_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->deleteCertificateAuthority($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermission

<p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionRequest();
    $request->deletePermissionRequest = new DeletePermissionRequest();
    $request->deletePermissionRequest->certificateAuthorityArn = 'iure';
    $request->deletePermissionRequest->principal = 'culpa';
    $request->deletePermissionRequest->sourceAccount = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = DeletePermissionXAmzTargetEnum::ACM_PRIVATE_CA_DELETE_PERMISSION;

    $response = $sdk->sdk->deletePermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePolicy

<p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolicyRequest();
    $request->deletePolicyRequest = new DeletePolicyRequest();
    $request->deletePolicyRequest->resourceArn = 'mollitia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = DeletePolicyXAmzTargetEnum::ACM_PRIVATE_CA_DELETE_POLICY;

    $response = $sdk->sdk->deletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificateAuthority

<p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateAuthorityRequest();
    $request->describeCertificateAuthorityRequest = new DescribeCertificateAuthorityRequest();
    $request->describeCertificateAuthorityRequest->certificateAuthorityArn = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = DescribeCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_DESCRIBE_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->describeCertificateAuthority($request);

    if ($response->describeCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificateAuthorityAuditReport

Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateAuthorityAuditReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificateAuthorityAuditReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateAuthorityAuditReportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateAuthorityAuditReportRequest();
    $request->describeCertificateAuthorityAuditReportRequest = new DescribeCertificateAuthorityAuditReportRequest();
    $request->describeCertificateAuthorityAuditReportRequest->auditReportId = 'sequi';
    $request->describeCertificateAuthorityAuditReportRequest->certificateAuthorityArn = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = DescribeCertificateAuthorityAuditReportXAmzTargetEnum::ACM_PRIVATE_CA_DESCRIBE_CERTIFICATE_AUTHORITY_AUDIT_REPORT;

    $response = $sdk->sdk->describeCertificateAuthorityAuditReport($request);

    if ($response->describeCertificateAuthorityAuditReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificate

Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateRequest();
    $request->getCertificateRequest = new GetCertificateRequest();
    $request->getCertificateRequest->certificateArn = 'laborum';
    $request->getCertificateRequest->certificateAuthorityArn = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = GetCertificateXAmzTargetEnum::ACM_PRIVATE_CA_GET_CERTIFICATE;

    $response = $sdk->sdk->getCertificate($request);

    if ($response->getCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificateAuthorityCertificate

Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateAuthorityCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCertificateAuthorityCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateAuthorityCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateAuthorityCertificateRequest();
    $request->getCertificateAuthorityCertificateRequest = new GetCertificateAuthorityCertificateRequest();
    $request->getCertificateAuthorityCertificateRequest->certificateAuthorityArn = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetCertificateAuthorityCertificateXAmzTargetEnum::ACM_PRIVATE_CA_GET_CERTIFICATE_AUTHORITY_CERTIFICATE;

    $response = $sdk->sdk->getCertificateAuthorityCertificate($request);

    if ($response->getCertificateAuthorityCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCertificateAuthorityCsr

Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateAuthorityCsrRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCertificateAuthorityCsrRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificateAuthorityCsrXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCertificateAuthorityCsrRequest();
    $request->getCertificateAuthorityCsrRequest = new GetCertificateAuthorityCsrRequest();
    $request->getCertificateAuthorityCsrRequest->certificateAuthorityArn = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = GetCertificateAuthorityCsrXAmzTargetEnum::ACM_PRIVATE_CA_GET_CERTIFICATE_AUTHORITY_CSR;

    $response = $sdk->sdk->getCertificateAuthorityCsr($request);

    if ($response->getCertificateAuthorityCsrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicy

<p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyRequest();
    $request->getPolicyRequest = new GetPolicyRequest();
    $request->getPolicyRequest->resourceArn = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetPolicyXAmzTargetEnum::ACM_PRIVATE_CA_GET_POLICY;

    $response = $sdk->sdk->getPolicy($request);

    if ($response->getPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCertificateAuthorityCertificate

<p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateAuthorityCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCertificateAuthorityCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateAuthorityCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCertificateAuthorityCertificateRequest();
    $request->importCertificateAuthorityCertificateRequest = new ImportCertificateAuthorityCertificateRequest();
    $request->importCertificateAuthorityCertificateRequest->certificate = 'modi';
    $request->importCertificateAuthorityCertificateRequest->certificateAuthorityArn = 'praesentium';
    $request->importCertificateAuthorityCertificateRequest->certificateChain = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = ImportCertificateAuthorityCertificateXAmzTargetEnum::ACM_PRIVATE_CA_IMPORT_CERTIFICATE_AUTHORITY_CERTIFICATE;

    $response = $sdk->sdk->importCertificateAuthorityCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issueCertificate

<p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IssueCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\IssueCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiPassthrough;
use \OpenAPI\OpenAPI\Models\Shared\Extensions;
use \OpenAPI\OpenAPI\Models\Shared\PolicyInformation;
use \OpenAPI\OpenAPI\Models\Shared\PolicyQualifierInfo;
use \OpenAPI\OpenAPI\Models\Shared\PolicyQualifierIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\Qualifier;
use \OpenAPI\OpenAPI\Models\Shared\CustomExtension;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\GeneralName;
use \OpenAPI\OpenAPI\Models\Shared\Asn1Subject;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\EdiPartyName;
use \OpenAPI\OpenAPI\Models\Shared\OtherName;
use \OpenAPI\OpenAPI\Models\Shared\SigningAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\Validity;
use \OpenAPI\OpenAPI\Models\Shared\ValidityPeriodTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\IssueCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssueCertificateRequest();
    $request->issueCertificateRequest = new IssueCertificateRequest();
    $request->issueCertificateRequest->apiPassthrough = new ApiPassthrough();
    $request->issueCertificateRequest->apiPassthrough->extensions = new Extensions();
    $request->issueCertificateRequest->apiPassthrough->extensions->certificatePolicies = [
        new PolicyInformation(),
        new PolicyInformation(),
    ];
    $request->issueCertificateRequest->apiPassthrough->extensions->customExtensions = [
        new CustomExtension(),
    ];
    $request->issueCertificateRequest->apiPassthrough->extensions->extendedKeyUsage = [
        new ExtendedKeyUsage(),
        new ExtendedKeyUsage(),
        new ExtendedKeyUsage(),
    ];
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage = new KeyUsage();
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->crlSign = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->dataEncipherment = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->decipherOnly = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->digitalSignature = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->encipherOnly = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->keyAgreement = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->keyCertSign = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->keyEncipherment = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->keyUsage->nonRepudiation = false;
    $request->issueCertificateRequest->apiPassthrough->extensions->subjectAlternativeNames = [
        new GeneralName(),
        new GeneralName(),
        new GeneralName(),
        new GeneralName(),
    ];
    $request->issueCertificateRequest->apiPassthrough->subject = new Asn1Subject();
    $request->issueCertificateRequest->apiPassthrough->subject->commonName = 'explicabo';
    $request->issueCertificateRequest->apiPassthrough->subject->country = 'Niger';
    $request->issueCertificateRequest->apiPassthrough->subject->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->issueCertificateRequest->apiPassthrough->subject->distinguishedNameQualifier = 'quibusdam';
    $request->issueCertificateRequest->apiPassthrough->subject->generationQualifier = 'labore';
    $request->issueCertificateRequest->apiPassthrough->subject->givenName = 'modi';
    $request->issueCertificateRequest->apiPassthrough->subject->initials = 'qui';
    $request->issueCertificateRequest->apiPassthrough->subject->locality = 'aliquid';
    $request->issueCertificateRequest->apiPassthrough->subject->organization = 'cupiditate';
    $request->issueCertificateRequest->apiPassthrough->subject->organizationalUnit = 'quos';
    $request->issueCertificateRequest->apiPassthrough->subject->pseudonym = 'perferendis';
    $request->issueCertificateRequest->apiPassthrough->subject->serialNumber = 'magni';
    $request->issueCertificateRequest->apiPassthrough->subject->state = 'assumenda';
    $request->issueCertificateRequest->apiPassthrough->subject->surname = 'ipsam';
    $request->issueCertificateRequest->apiPassthrough->subject->title = 'Mr.';
    $request->issueCertificateRequest->certificateAuthorityArn = 'fugit';
    $request->issueCertificateRequest->csr = 'dolorum';
    $request->issueCertificateRequest->idempotencyToken = 'excepturi';
    $request->issueCertificateRequest->signingAlgorithm = SigningAlgorithmEnum::SHA384_WITHECDSA;
    $request->issueCertificateRequest->templateArn = 'facilis';
    $request->issueCertificateRequest->validity = new Validity();
    $request->issueCertificateRequest->validity->type = ValidityPeriodTypeEnum::MONTHS;
    $request->issueCertificateRequest->validity->value = 288476;
    $request->issueCertificateRequest->validityNotBefore = new Validity();
    $request->issueCertificateRequest->validityNotBefore->type = ValidityPeriodTypeEnum::YEARS;
    $request->issueCertificateRequest->validityNotBefore->value = 433288;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = IssueCertificateXAmzTargetEnum::ACM_PRIVATE_CA_ISSUE_CERTIFICATE;

    $response = $sdk->sdk->issueCertificate($request);

    if ($response->issueCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificateAuthorities

Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificateAuthoritiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCertificateAuthoritiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceOwnerEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificateAuthoritiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificateAuthoritiesRequest();
    $request->listCertificateAuthoritiesRequest = new ListCertificateAuthoritiesRequest();
    $request->listCertificateAuthoritiesRequest->maxResults = 638921;
    $request->listCertificateAuthoritiesRequest->nextToken = 'dolor';
    $request->listCertificateAuthoritiesRequest->resourceOwner = ResourceOwnerEnum::OTHER_ACCOUNTS;
    $request->maxResults = 'a';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListCertificateAuthoritiesXAmzTargetEnum::ACM_PRIVATE_CA_LIST_CERTIFICATE_AUTHORITIES;

    $response = $sdk->sdk->listCertificateAuthorities($request);

    if ($response->listCertificateAuthoritiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissions

<p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionsRequest();
    $request->listPermissionsRequest = new ListPermissionsRequest();
    $request->listPermissionsRequest->certificateAuthorityArn = 'cumque';
    $request->listPermissionsRequest->maxResults = 813798;
    $request->listPermissionsRequest->nextToken = 'ea';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ListPermissionsXAmzTargetEnum::ACM_PRIVATE_CA_LIST_PERMISSIONS;

    $response = $sdk->sdk->listPermissions($request);

    if ($response->listPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->listTagsRequest = new ListTagsRequest();
    $request->listTagsRequest->certificateAuthorityArn = 'provident';
    $request->listTagsRequest->maxResults = 725255;
    $request->listTagsRequest->nextToken = 'id';
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListTagsXAmzTargetEnum::ACM_PRIVATE_CA_LIST_TAGS;

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPolicy

<p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPolicyRequest();
    $request->putPolicyRequest = new PutPolicyRequest();
    $request->putPolicyRequest->policy = 'molestiae';
    $request->putPolicyRequest->resourceArn = 'perferendis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = PutPolicyXAmzTargetEnum::ACM_PRIVATE_CA_PUT_POLICY;

    $response = $sdk->sdk->putPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreCertificateAuthority

Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreCertificateAuthorityRequest();
    $request->restoreCertificateAuthorityRequest = new RestoreCertificateAuthorityRequest();
    $request->restoreCertificateAuthorityRequest->certificateAuthorityArn = 'natus';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = RestoreCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_RESTORE_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->restoreCertificateAuthority($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeCertificate

<p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RevokeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevokeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevocationReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\RevokeCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeCertificateRequest();
    $request->revokeCertificateRequest = new RevokeCertificateRequest();
    $request->revokeCertificateRequest->certificateAuthorityArn = 'excepturi';
    $request->revokeCertificateRequest->certificateSerial = 'ullam';
    $request->revokeCertificateRequest->revocationReason = RevocationReasonEnum::SUPERSEDED;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = RevokeCertificateXAmzTargetEnum::ACM_PRIVATE_CA_REVOKE_CERTIFICATE;

    $response = $sdk->sdk->revokeCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagCertificateAuthority

<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagCertificateAuthorityRequest();
    $request->tagCertificateAuthorityRequest = new TagCertificateAuthorityRequest();
    $request->tagCertificateAuthorityRequest->certificateAuthorityArn = 'eum';
    $request->tagCertificateAuthorityRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = TagCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_TAG_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->tagCertificateAuthority($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagCertificateAuthority

Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UntagCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagCertificateAuthorityRequest();
    $request->untagCertificateAuthorityRequest = new UntagCertificateAuthorityRequest();
    $request->untagCertificateAuthorityRequest->certificateAuthorityArn = 'eius';
    $request->untagCertificateAuthorityRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = UntagCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_UNTAG_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->untagCertificateAuthority($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificateAuthority

<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevocationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ObjectAclEnum;
use \OpenAPI\OpenAPI\Models\Shared\OcspConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateAuthorityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateAuthorityRequest();
    $request->updateCertificateAuthorityRequest = new UpdateCertificateAuthorityRequest();
    $request->updateCertificateAuthorityRequest->certificateAuthorityArn = 'expedita';
    $request->updateCertificateAuthorityRequest->revocationConfiguration = new RevocationConfiguration();
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration = new CrlConfiguration();
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->customCname = 'nihil';
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->enabled = false;
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->expirationInDays = 998848;
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3BucketName = 'quibusdam';
    $request->updateCertificateAuthorityRequest->revocationConfiguration->crlConfiguration->s3ObjectAcl = S3ObjectAclEnum::PUBLIC_READ;
    $request->updateCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration = new OcspConfiguration();
    $request->updateCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->enabled = false;
    $request->updateCertificateAuthorityRequest->revocationConfiguration->ocspConfiguration->ocspCustomCname = 'saepe';
    $request->updateCertificateAuthorityRequest->status = CertificateAuthorityStatusEnum::FAILED;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = UpdateCertificateAuthorityXAmzTargetEnum::ACM_PRIVATE_CA_UPDATE_CERTIFICATE_AUTHORITY;

    $response = $sdk->sdk->updateCertificateAuthority($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
