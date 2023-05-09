# SDK

## Overview

<p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization.</p> <p>The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs. </p> <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a> console.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/acm-pca/>
### Available Operations

* [CreateCertificateAuthority](#createcertificateauthority) - <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>
* [CreateCertificateAuthorityAuditReport](#createcertificateauthorityauditreport) - <p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>
* [CreatePermission](#createpermission) - <p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [DeleteCertificateAuthority](#deletecertificateauthority) - <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
* [DeletePermission](#deletepermission) - <p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [DeletePolicy](#deletepolicy) - <p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [DescribeCertificateAuthority](#describecertificateauthority) - <p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
* [DescribeCertificateAuthorityAuditReport](#describecertificateauthorityauditreport) - Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 
* [GetCertificate](#getcertificate) - Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 
* [GetCertificateAuthorityCertificate](#getcertificateauthoritycertificate) - Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
* [GetCertificateAuthorityCsr](#getcertificateauthoritycsr) - Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 
* [GetPolicy](#getpolicy) - <p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [ImportCertificateAuthorityCertificate](#importcertificateauthoritycertificate) - <p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>
* [IssueCertificate](#issuecertificate) - <p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>
* [ListCertificateAuthorities](#listcertificateauthorities) - Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
* [ListPermissions](#listpermissions) - <p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [ListTags](#listtags) - Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 
* [PutPolicy](#putpolicy) - <p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [RestoreCertificateAuthority](#restorecertificateauthority) - Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
* [RevokeCertificate](#revokecertificate) - <p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
* [TagCertificateAuthority](#tagcertificateauthority) - <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>
* [UntagCertificateAuthority](#untagcertificateauthority) - Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 
* [UpdateCertificateAuthority](#updatecertificateauthority) - <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

## CreateCertificateAuthority

<p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCertificateAuthority(ctx, operations.CreateCertificateAuthorityRequest{
        CreateCertificateAuthorityRequest: shared.CreateCertificateAuthorityRequest{
            CertificateAuthorityConfiguration: shared.CertificateAuthorityConfiguration{
                CsrExtensions: &shared.CsrExtensions{
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: sdk.Bool(false),
                        DataEncipherment: sdk.Bool(false),
                        DecipherOnly: sdk.Bool(false),
                        DigitalSignature: sdk.Bool(false),
                        EncipherOnly: sdk.Bool(false),
                        KeyAgreement: sdk.Bool(false),
                        KeyCertSign: sdk.Bool(false),
                        KeyEncipherment: sdk.Bool(false),
                        NonRepudiation: sdk.Bool(false),
                    },
                    SubjectInformationAccess: []shared.AccessDescription{
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("voluptatibus"),
                                    Country: sdk.String("Tanzania"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "praesentium",
                                            Value: "voluptatibus",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "ipsa",
                                            Value: "omnis",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("voluptate"),
                                    GenerationQualifier: sdk.String("cum"),
                                    GivenName: sdk.String("perferendis"),
                                    Initials: sdk.String("doloremque"),
                                    Locality: sdk.String("reprehenderit"),
                                    Organization: sdk.String("ut"),
                                    OrganizationalUnit: sdk.String("maiores"),
                                    Pseudonym: sdk.String("dicta"),
                                    SerialNumber: sdk.String("corporis"),
                                    State: sdk.String("dolore"),
                                    Surname: sdk.String("iusto"),
                                    Title: sdk.String("Mr."),
                                },
                                DNSName: sdk.String("harum"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("enim"),
                                    PartyName: "accusamus",
                                },
                                IPAddress: sdk.String("commodi"),
                                OtherName: &shared.OtherName{
                                    TypeID: "repudiandae",
                                    Value: "quae",
                                },
                                RegisteredID: sdk.String("ipsum"),
                                Rfc822Name: sdk.String("quidem"),
                                UniformResourceIdentifier: sdk.String("molestias"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumResourcePkiManifest.ToPointer(),
                                CustomObjectIdentifier: sdk.String("pariatur"),
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("modi"),
                                    Country: sdk.String("Lithuania"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "voluptates",
                                            Value: "quasi",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "repudiandae",
                                            Value: "sint",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "veritatis",
                                            Value: "itaque",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("incidunt"),
                                    GenerationQualifier: sdk.String("enim"),
                                    GivenName: sdk.String("consequatur"),
                                    Initials: sdk.String("est"),
                                    Locality: sdk.String("quibusdam"),
                                    Organization: sdk.String("explicabo"),
                                    OrganizationalUnit: sdk.String("deserunt"),
                                    Pseudonym: sdk.String("distinctio"),
                                    SerialNumber: sdk.String("quibusdam"),
                                    State: sdk.String("labore"),
                                    Surname: sdk.String("modi"),
                                    Title: sdk.String("Mr."),
                                },
                                DNSName: sdk.String("aliquid"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("cupiditate"),
                                    PartyName: "quos",
                                },
                                IPAddress: sdk.String("perferendis"),
                                OtherName: &shared.OtherName{
                                    TypeID: "magni",
                                    Value: "assumenda",
                                },
                                RegisteredID: sdk.String("ipsam"),
                                Rfc822Name: sdk.String("alias"),
                                UniformResourceIdentifier: sdk.String("fugit"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumResourcePkiNotify.ToPointer(),
                                CustomObjectIdentifier: sdk.String("excepturi"),
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("tempora"),
                                    Country: sdk.String("Philippines"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "labore",
                                            Value: "delectus",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "eum",
                                            Value: "non",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "eligendi",
                                            Value: "sint",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("aliquid"),
                                    GenerationQualifier: sdk.String("provident"),
                                    GivenName: sdk.String("necessitatibus"),
                                    Initials: sdk.String("sint"),
                                    Locality: sdk.String("officia"),
                                    Organization: sdk.String("dolor"),
                                    OrganizationalUnit: sdk.String("debitis"),
                                    Pseudonym: sdk.String("a"),
                                    SerialNumber: sdk.String("dolorum"),
                                    State: sdk.String("in"),
                                    Surname: sdk.String("in"),
                                    Title: sdk.String("Dr."),
                                },
                                DNSName: sdk.String("maiores"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("rerum"),
                                    PartyName: "dicta",
                                },
                                IPAddress: sdk.String("magnam"),
                                OtherName: &shared.OtherName{
                                    TypeID: "cumque",
                                    Value: "facere",
                                },
                                RegisteredID: sdk.String("ea"),
                                Rfc822Name: sdk.String("aliquid"),
                                UniformResourceIdentifier: sdk.String("laborum"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumResourcePkiNotify.ToPointer(),
                                CustomObjectIdentifier: sdk.String("non"),
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("occaecati"),
                                    Country: sdk.String("Gambia"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "delectus",
                                            Value: "quidem",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "provident",
                                            Value: "nam",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "id",
                                            Value: "blanditiis",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "deleniti",
                                            Value: "sapiente",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("amet"),
                                    GenerationQualifier: sdk.String("deserunt"),
                                    GivenName: sdk.String("nisi"),
                                    Initials: sdk.String("vel"),
                                    Locality: sdk.String("natus"),
                                    Organization: sdk.String("omnis"),
                                    OrganizationalUnit: sdk.String("molestiae"),
                                    Pseudonym: sdk.String("perferendis"),
                                    SerialNumber: sdk.String("nihil"),
                                    State: sdk.String("magnam"),
                                    Surname: sdk.String("distinctio"),
                                    Title: sdk.String("Miss"),
                                },
                                DNSName: sdk.String("labore"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("labore"),
                                    PartyName: "suscipit",
                                },
                                IPAddress: sdk.String("natus"),
                                OtherName: &shared.OtherName{
                                    TypeID: "nobis",
                                    Value: "eum",
                                },
                                RegisteredID: sdk.String("vero"),
                                Rfc822Name: sdk.String("aspernatur"),
                                UniformResourceIdentifier: sdk.String("architecto"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumCaRepository.ToPointer(),
                                CustomObjectIdentifier: sdk.String("et"),
                            },
                        },
                    },
                },
                KeyAlgorithm: shared.KeyAlgorithmEnumEcPrime256v1,
                SigningAlgorithm: shared.SigningAlgorithmEnumSha512Withecdsa,
                Subject: shared.Asn1Subject{
                    CommonName: sdk.String("provident"),
                    Country: sdk.String("Marshall Islands"),
                    CustomAttributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            ObjectIdentifier: "accusantium",
                            Value: "mollitia",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "reiciendis",
                            Value: "mollitia",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "ad",
                            Value: "eum",
                        },
                    },
                    DistinguishedNameQualifier: sdk.String("dolor"),
                    GenerationQualifier: sdk.String("necessitatibus"),
                    GivenName: sdk.String("odit"),
                    Initials: sdk.String("nemo"),
                    Locality: sdk.String("quasi"),
                    Organization: sdk.String("iure"),
                    OrganizationalUnit: sdk.String("doloribus"),
                    Pseudonym: sdk.String("debitis"),
                    SerialNumber: sdk.String("eius"),
                    State: sdk.String("maxime"),
                    Surname: sdk.String("deleniti"),
                    Title: sdk.String("Miss"),
                },
            },
            CertificateAuthorityType: shared.CertificateAuthorityTypeEnumRoot,
            IdempotencyToken: sdk.String("architecto"),
            KeyStorageSecurityStandard: shared.KeyStorageSecurityStandardEnumFips1402Level2OrHigher.ToPointer(),
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: sdk.String("repudiandae"),
                    Enabled: false,
                    ExpirationInDays: sdk.Int64(352312),
                    S3BucketName: sdk.String("expedita"),
                    S3ObjectACL: shared.S3ObjectACLEnumPublicRead.ToPointer(),
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: sdk.String("repellat"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: sdk.String("saepe"),
                },
                shared.Tag{
                    Key: "pariatur",
                    Value: sdk.String("accusantium"),
                },
                shared.Tag{
                    Key: "consequuntur",
                    Value: sdk.String("praesentium"),
                },
                shared.Tag{
                    Key: "natus",
                    Value: sdk.String("magni"),
                },
            },
            UsageMode: shared.CertificateAuthorityUsageModeEnumGeneralPurpose.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateCertificateAuthorityXAmzTargetEnumAcmPrivateCaCreateCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## CreateCertificateAuthorityAuditReport

<p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCertificateAuthorityAuditReport(ctx, operations.CreateCertificateAuthorityAuditReportRequest{
        CreateCertificateAuthorityAuditReportRequest: shared.CreateCertificateAuthorityAuditReportRequest{
            AuditReportResponseFormat: shared.AuditReportResponseFormatEnumJSON,
            CertificateAuthorityArn: "accusantium",
            S3BucketName: "ab",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.CreateCertificateAuthorityAuditReportXAmzTargetEnumAcmPrivateCaCreateCertificateAuthorityAuditReport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateAuthorityAuditReportResponse != nil {
        // handle response
    }
}
```

## CreatePermission

<p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePermission(ctx, operations.CreatePermissionRequest{
        CreatePermissionRequest: shared.CreatePermissionRequest{
            Actions: []shared.ActionTypeEnum{
                shared.ActionTypeEnumGetCertificate,
                shared.ActionTypeEnumListPermissions,
                shared.ActionTypeEnumIssueCertificate,
                shared.ActionTypeEnumListPermissions,
            },
            CertificateAuthorityArn: "amet",
            Principal: "aut",
            SourceAccount: sdk.String("cumque"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreatePermissionXAmzTargetEnumAcmPrivateCaCreatePermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCertificateAuthority

<p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCertificateAuthority(ctx, operations.DeleteCertificateAuthorityRequest{
        DeleteCertificateAuthorityRequest: shared.DeleteCertificateAuthorityRequest{
            CertificateAuthorityArn: "dignissimos",
            PermanentDeletionTimeInDays: sdk.Int64(54338),
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.DeleteCertificateAuthorityXAmzTargetEnumAcmPrivateCaDeleteCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePermission

<p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePermission(ctx, operations.DeletePermissionRequest{
        DeletePermissionRequest: shared.DeletePermissionRequest{
            CertificateAuthorityArn: "dolor",
            Principal: "vero",
            SourceAccount: sdk.String("nostrum"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeletePermissionXAmzTargetEnumAcmPrivateCaDeletePermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePolicy

<p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePolicy(ctx, operations.DeletePolicyRequest{
        DeletePolicyRequest: shared.DeletePolicyRequest{
            ResourceArn: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeletePolicyXAmzTargetEnumAcmPrivateCaDeletePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeCertificateAuthority

<p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCertificateAuthority(ctx, operations.DescribeCertificateAuthorityRequest{
        DescribeCertificateAuthorityRequest: shared.DescribeCertificateAuthorityRequest{
            CertificateAuthorityArn: "earum",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeCertificateAuthorityXAmzTargetEnumAcmPrivateCaDescribeCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## DescribeCertificateAuthorityAuditReport

Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCertificateAuthorityAuditReport(ctx, operations.DescribeCertificateAuthorityAuditReportRequest{
        DescribeCertificateAuthorityAuditReportRequest: shared.DescribeCertificateAuthorityAuditReportRequest{
            AuditReportID: "libero",
            CertificateAuthorityArn: "delectus",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DescribeCertificateAuthorityAuditReportXAmzTargetEnumAcmPrivateCaDescribeCertificateAuthorityAuditReport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificateAuthorityAuditReportResponse != nil {
        // handle response
    }
}
```

## GetCertificate

Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCertificate(ctx, operations.GetCertificateRequest{
        GetCertificateRequest: shared.GetCertificateRequest{
            CertificateArn: "ipsum",
            CertificateAuthorityArn: "hic",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.GetCertificateXAmzTargetEnumAcmPrivateCaGetCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCertificateResponse != nil {
        // handle response
    }
}
```

## GetCertificateAuthorityCertificate

Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCertificateAuthorityCertificate(ctx, operations.GetCertificateAuthorityCertificateRequest{
        GetCertificateAuthorityCertificateRequest: shared.GetCertificateAuthorityCertificateRequest{
            CertificateAuthorityArn: "numquam",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.GetCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaGetCertificateAuthorityCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCertificateAuthorityCertificateResponse != nil {
        // handle response
    }
}
```

## GetCertificateAuthorityCsr

Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCertificateAuthorityCsr(ctx, operations.GetCertificateAuthorityCsrRequest{
        GetCertificateAuthorityCsrRequest: shared.GetCertificateAuthorityCsrRequest{
            CertificateAuthorityArn: "quidem",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.GetCertificateAuthorityCsrXAmzTargetEnumAcmPrivateCaGetCertificateAuthorityCsr,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCertificateAuthorityCsrResponse != nil {
        // handle response
    }
}
```

## GetPolicy

<p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPolicy(ctx, operations.GetPolicyRequest{
        GetPolicyRequest: shared.GetPolicyRequest{
            ResourceArn: "ab",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetPolicyXAmzTargetEnumAcmPrivateCaGetPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyResponse != nil {
        // handle response
    }
}
```

## ImportCertificateAuthorityCertificate

<p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportCertificateAuthorityCertificate(ctx, operations.ImportCertificateAuthorityCertificateRequest{
        ImportCertificateAuthorityCertificateRequest: shared.ImportCertificateAuthorityCertificateRequest{
            Certificate: "necessitatibus",
            CertificateAuthorityArn: "distinctio",
            CertificateChain: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ImportCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaImportCertificateAuthorityCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IssueCertificate

<p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.IssueCertificate(ctx, operations.IssueCertificateRequest{
        IssueCertificateRequest: shared.IssueCertificateRequest{
            APIPassthrough: &shared.APIPassthrough{
                Extensions: &shared.Extensions{
                    CertificatePolicies: []shared.PolicyInformation{
                        shared.PolicyInformation{
                            CertPolicyID: "amet",
                            PolicyQualifiers: []shared.PolicyQualifierInfo{
                                shared.PolicyQualifierInfo{
                                    PolicyQualifierID: shared.PolicyQualifierIDEnumCps,
                                    Qualifier: shared.Qualifier{
                                        CpsURI: "accusamus",
                                    },
                                },
                                shared.PolicyQualifierInfo{
                                    PolicyQualifierID: shared.PolicyQualifierIDEnumCps,
                                    Qualifier: shared.Qualifier{
                                        CpsURI: "ad",
                                    },
                                },
                                shared.PolicyQualifierInfo{
                                    PolicyQualifierID: shared.PolicyQualifierIDEnumCps,
                                    Qualifier: shared.Qualifier{
                                        CpsURI: "saepe",
                                    },
                                },
                                shared.PolicyQualifierInfo{
                                    PolicyQualifierID: shared.PolicyQualifierIDEnumCps,
                                    Qualifier: shared.Qualifier{
                                        CpsURI: "suscipit",
                                    },
                                },
                            },
                        },
                    },
                    CustomExtensions: []shared.CustomExtension{
                        shared.CustomExtension{
                            Critical: sdk.Bool(false),
                            ObjectIdentifier: "provident",
                            Value: "minima",
                        },
                        shared.CustomExtension{
                            Critical: sdk.Bool(false),
                            ObjectIdentifier: "repellendus",
                            Value: "totam",
                        },
                        shared.CustomExtension{
                            Critical: sdk.Bool(false),
                            ObjectIdentifier: "similique",
                            Value: "alias",
                        },
                    },
                    ExtendedKeyUsage: []shared.ExtendedKeyUsage{
                        shared.ExtendedKeyUsage{
                            ExtendedKeyUsageObjectIdentifier: sdk.String("quaerat"),
                            ExtendedKeyUsageType: shared.ExtendedKeyUsageTypeEnumCodeSigning.ToPointer(),
                        },
                        shared.ExtendedKeyUsage{
                            ExtendedKeyUsageObjectIdentifier: sdk.String("vel"),
                            ExtendedKeyUsageType: shared.ExtendedKeyUsageTypeEnumDocumentSigning.ToPointer(),
                        },
                        shared.ExtendedKeyUsage{
                            ExtendedKeyUsageObjectIdentifier: sdk.String("officiis"),
                            ExtendedKeyUsageType: shared.ExtendedKeyUsageTypeEnumClientAuth.ToPointer(),
                        },
                        shared.ExtendedKeyUsage{
                            ExtendedKeyUsageObjectIdentifier: sdk.String("dolorum"),
                            ExtendedKeyUsageType: shared.ExtendedKeyUsageTypeEnumCertificateTransparency.ToPointer(),
                        },
                    },
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: sdk.Bool(false),
                        DataEncipherment: sdk.Bool(false),
                        DecipherOnly: sdk.Bool(false),
                        DigitalSignature: sdk.Bool(false),
                        EncipherOnly: sdk.Bool(false),
                        KeyAgreement: sdk.Bool(false),
                        KeyCertSign: sdk.Bool(false),
                        KeyEncipherment: sdk.Bool(false),
                        NonRepudiation: sdk.Bool(false),
                    },
                    SubjectAlternativeNames: []shared.GeneralName{
                        shared.GeneralName{
                            DirectoryName: &shared.Asn1Subject{
                                CommonName: sdk.String("harum"),
                                Country: sdk.String("Lao People's Democratic Republic"),
                                CustomAttributes: []shared.CustomAttribute{
                                    shared.CustomAttribute{
                                        ObjectIdentifier: "quisquam",
                                        Value: "tenetur",
                                    },
                                },
                                DistinguishedNameQualifier: sdk.String("amet"),
                                GenerationQualifier: sdk.String("tempore"),
                                GivenName: sdk.String("accusamus"),
                                Initials: sdk.String("numquam"),
                                Locality: sdk.String("enim"),
                                Organization: sdk.String("dolorem"),
                                OrganizationalUnit: sdk.String("sapiente"),
                                Pseudonym: sdk.String("totam"),
                                SerialNumber: sdk.String("nihil"),
                                State: sdk.String("sit"),
                                Surname: sdk.String("expedita"),
                                Title: sdk.String("Mrs."),
                            },
                            DNSName: sdk.String("sed"),
                            EdiPartyName: &shared.EdiPartyName{
                                NameAssigner: sdk.String("vel"),
                                PartyName: "libero",
                            },
                            IPAddress: sdk.String("voluptas"),
                            OtherName: &shared.OtherName{
                                TypeID: "deserunt",
                                Value: "quam",
                            },
                            RegisteredID: sdk.String("ipsum"),
                            Rfc822Name: sdk.String("incidunt"),
                            UniformResourceIdentifier: sdk.String("qui"),
                        },
                        shared.GeneralName{
                            DirectoryName: &shared.Asn1Subject{
                                CommonName: sdk.String("cupiditate"),
                                Country: sdk.String("Slovakia (Slovak Republic)"),
                                CustomAttributes: []shared.CustomAttribute{
                                    shared.CustomAttribute{
                                        ObjectIdentifier: "soluta",
                                        Value: "dicta",
                                    },
                                    shared.CustomAttribute{
                                        ObjectIdentifier: "laborum",
                                        Value: "totam",
                                    },
                                    shared.CustomAttribute{
                                        ObjectIdentifier: "incidunt",
                                        Value: "aspernatur",
                                    },
                                    shared.CustomAttribute{
                                        ObjectIdentifier: "dolores",
                                        Value: "distinctio",
                                    },
                                },
                                DistinguishedNameQualifier: sdk.String("facilis"),
                                GenerationQualifier: sdk.String("aliquid"),
                                GivenName: sdk.String("quam"),
                                Initials: sdk.String("molestias"),
                                Locality: sdk.String("temporibus"),
                                Organization: sdk.String("qui"),
                                OrganizationalUnit: sdk.String("neque"),
                                Pseudonym: sdk.String("fugit"),
                                SerialNumber: sdk.String("magni"),
                                State: sdk.String("odio"),
                                Surname: sdk.String("sunt"),
                                Title: sdk.String("Mrs."),
                            },
                            DNSName: sdk.String("nam"),
                            EdiPartyName: &shared.EdiPartyName{
                                NameAssigner: sdk.String("hic"),
                                PartyName: "voluptatem",
                            },
                            IPAddress: sdk.String("cumque"),
                            OtherName: &shared.OtherName{
                                TypeID: "soluta",
                                Value: "nobis",
                            },
                            RegisteredID: sdk.String("et"),
                            Rfc822Name: sdk.String("saepe"),
                            UniformResourceIdentifier: sdk.String("ipsum"),
                        },
                    },
                },
                Subject: &shared.Asn1Subject{
                    CommonName: sdk.String("veritatis"),
                    Country: sdk.String("Saint Helena"),
                    CustomAttributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            ObjectIdentifier: "tempore",
                            Value: "cupiditate",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "aperiam",
                            Value: "delectus",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "dolorem",
                            Value: "dolore",
                        },
                    },
                    DistinguishedNameQualifier: sdk.String("labore"),
                    GenerationQualifier: sdk.String("adipisci"),
                    GivenName: sdk.String("dolorum"),
                    Initials: sdk.String("architecto"),
                    Locality: sdk.String("quae"),
                    Organization: sdk.String("aut"),
                    OrganizationalUnit: sdk.String("quas"),
                    Pseudonym: sdk.String("itaque"),
                    SerialNumber: sdk.String("consequatur"),
                    State: sdk.String("est"),
                    Surname: sdk.String("repellendus"),
                    Title: sdk.String("Miss"),
                },
            },
            CertificateAuthorityArn: "doloribus",
            Csr: "ut",
            IdempotencyToken: sdk.String("facilis"),
            SigningAlgorithm: shared.SigningAlgorithmEnumSha256Withrsa,
            TemplateArn: sdk.String("qui"),
            Validity: shared.Validity{
                Type: shared.ValidityPeriodTypeEnumEndDate,
                Value: 512393,
            },
            ValidityNotBefore: &shared.Validity{
                Type: shared.ValidityPeriodTypeEnumDays,
                Value: 580447,
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.IssueCertificateXAmzTargetEnumAcmPrivateCaIssueCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IssueCertificateResponse != nil {
        // handle response
    }
}
```

## ListCertificateAuthorities

Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCertificateAuthorities(ctx, operations.ListCertificateAuthoritiesRequest{
        ListCertificateAuthoritiesRequest: shared.ListCertificateAuthoritiesRequest{
            MaxResults: sdk.Int64(455169),
            NextToken: sdk.String("consectetur"),
            ResourceOwner: shared.ResourceOwnerEnumOtherAccounts.ToPointer(),
        },
        MaxResults: sdk.String("tenetur"),
        NextToken: sdk.String("dignissimos"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.ListCertificateAuthoritiesXAmzTargetEnumAcmPrivateCaListCertificateAuthorities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateAuthoritiesResponse != nil {
        // handle response
    }
}
```

## ListPermissions

<p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPermissions(ctx, operations.ListPermissionsRequest{
        ListPermissionsRequest: shared.ListPermissionsRequest{
            CertificateAuthorityArn: "ducimus",
            MaxResults: sdk.Int64(293020),
            NextToken: sdk.String("quibusdam"),
        },
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("sequi"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListPermissionsXAmzTargetEnumAcmPrivateCaListPermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionsResponse != nil {
        // handle response
    }
}
```

## ListTags

Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTags(ctx, operations.ListTagsRequest{
        ListTagsRequest: shared.ListTagsRequest{
            CertificateAuthorityArn: "porro",
            MaxResults: sdk.Int64(981830),
            NextToken: sdk.String("doloribus"),
        },
        MaxResults: sdk.String("iusto"),
        NextToken: sdk.String("eligendi"),
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumAcmPrivateCaListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## PutPolicy

<p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutPolicy(ctx, operations.PutPolicyRequest{
        PutPolicyRequest: shared.PutPolicyRequest{
            Policy: "vel",
            ResourceArn: "possimus",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.PutPolicyXAmzTargetEnumAcmPrivateCaPutPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RestoreCertificateAuthority

Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreCertificateAuthority(ctx, operations.RestoreCertificateAuthorityRequest{
        RestoreCertificateAuthorityRequest: shared.RestoreCertificateAuthorityRequest{
            CertificateAuthorityArn: "quasi",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.RestoreCertificateAuthorityXAmzTargetEnumAcmPrivateCaRestoreCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RevokeCertificate

<p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RevokeCertificate(ctx, operations.RevokeCertificateRequest{
        RevokeCertificateRequest: shared.RevokeCertificateRequest{
            CertificateAuthorityArn: "saepe",
            CertificateSerial: "ea",
            RevocationReason: shared.RevocationReasonEnumPrivilegeWithdrawn,
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.RevokeCertificateXAmzTargetEnumAcmPrivateCaRevokeCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagCertificateAuthority

<p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagCertificateAuthority(ctx, operations.TagCertificateAuthorityRequest{
        TagCertificateAuthorityRequest: shared.TagCertificateAuthorityRequest{
            CertificateAuthorityArn: "consectetur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aspernatur",
                    Value: sdk.String("minima"),
                },
                shared.Tag{
                    Key: "eaque",
                    Value: sdk.String("a"),
                },
                shared.Tag{
                    Key: "libero",
                    Value: sdk.String("aut"),
                },
                shared.Tag{
                    Key: "aut",
                    Value: sdk.String("deleniti"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.TagCertificateAuthorityXAmzTargetEnumAcmPrivateCaTagCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagCertificateAuthority

Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagCertificateAuthority(ctx, operations.UntagCertificateAuthorityRequest{
        UntagCertificateAuthorityRequest: shared.UntagCertificateAuthorityRequest{
            CertificateAuthorityArn: "dolorum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "placeat",
                    Value: sdk.String("velit"),
                },
                shared.Tag{
                    Key: "eum",
                    Value: sdk.String("autem"),
                },
                shared.Tag{
                    Key: "nobis",
                    Value: sdk.String("quas"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.UntagCertificateAuthorityXAmzTargetEnumAcmPrivateCaUntagCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCertificateAuthority

<p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCertificateAuthority(ctx, operations.UpdateCertificateAuthorityRequest{
        UpdateCertificateAuthorityRequest: shared.UpdateCertificateAuthorityRequest{
            CertificateAuthorityArn: "explicabo",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: sdk.String("provident"),
                    Enabled: false,
                    ExpirationInDays: sdk.Int64(55374),
                    S3BucketName: sdk.String("molestiae"),
                    S3ObjectACL: shared.S3ObjectACLEnumPublicRead.ToPointer(),
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: sdk.String("odio"),
                },
            },
            Status: shared.CertificateAuthorityStatusEnumPendingCertificate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.UpdateCertificateAuthorityXAmzTargetEnumAcmPrivateCaUpdateCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
