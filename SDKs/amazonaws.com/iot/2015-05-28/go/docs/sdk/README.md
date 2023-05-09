# SDK

## Overview

<fullname>IoT</fullname> <p>IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>The service endpoints that expose this API are listed in <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>. You must use the endpoint for the region that has the resources you want to access.</p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services Signature Version 4</a> to sign the request is: <i>execute-api</i>.</p> <p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p> <p>For information about how to use the credentials provider for IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to Amazon Web Services Services</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [AcceptCertificateTransfer](#acceptcertificatetransfer) - <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
* [AddThingToBillingGroup](#addthingtobillinggroup) - <p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
* [AddThingToThingGroup](#addthingtothinggroup) - <p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
* [AssociateTargetsWithJob](#associatetargetswithjob) - <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
* [AttachPolicy](#attachpolicy) - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>
* [~~AttachPrincipalPolicy~~](#attachprincipalpolicy) - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p> :warning: **Deprecated**
* [AttachSecurityProfile](#attachsecurityprofile) - <p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>
* [AttachThingPrincipal](#attachthingprincipal) - <p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
* [CancelAuditMitigationActionsTask](#cancelauditmitigationactionstask) - <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
* [CancelAuditTask](#cancelaudittask) - <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>
* [CancelCertificateTransfer](#cancelcertificatetransfer) - <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
* [CancelDetectMitigationActionsTask](#canceldetectmitigationactionstask) - <p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
* [CancelJob](#canceljob) - <p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>
* [CancelJobExecution](#canceljobexecution) - <p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
* [ClearDefaultAuthorizer](#cleardefaultauthorizer) - <p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
* [ConfirmTopicRuleDestination](#confirmtopicruledestination) - <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
* [CreateAuditSuppression](#createauditsuppression) - <p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>
* [CreateAuthorizer](#createauthorizer) - <p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
* [CreateBillingGroup](#createbillinggroup) - <p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
* [CreateCertificateFromCsr](#createcertificatefromcsr) - <p>Creates an X.509 certificate using the specified certificate signing request. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action. </p> <note> <p>The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-25 or NIST P-384 curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p> </note> <note> <p>Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> </note> <p>You can create multiple certificates in a batch by creating a directory, copying multiple <code>.csr</code> files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is: </p> <p> <code>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</code> </p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for the corresponding CSR. </p> <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the command in parallel to speed up the certificate creation process:</p> <p> <code>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} </code> </p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} </code> </p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path" </code> </p>
* [CreateCustomMetric](#createcustommetric) - <p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
* [CreateDimension](#createdimension) - <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>
* [CreateDomainConfiguration](#createdomainconfiguration) - <p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
* [CreateDynamicThingGroup](#createdynamicthinggroup) - <p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
* [CreateFleetMetric](#createfleetmetric) - <p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
* [CreateJob](#createjob) - <p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
* [CreateJobTemplate](#createjobtemplate) - <p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
* [CreateKeysAndCertificate](#createkeysandcertificate) - <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
* [CreateMitigationAction](#createmitigationaction) - <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
* [CreateOTAUpdate](#createotaupdate) - <p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
* [CreatePolicy](#createpolicy) - <p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
* [CreatePolicyVersion](#createpolicyversion) - <p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
* [CreateProvisioningClaim](#createprovisioningclaim) - <p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
* [CreateProvisioningTemplate](#createprovisioningtemplate) - <p>Creates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
* [CreateProvisioningTemplateVersion](#createprovisioningtemplateversion) - <p>Creates a new version of a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
* [CreateRoleAlias](#createrolealias) - <p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
* [CreateScheduledAudit](#createscheduledaudit) - <p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
* [CreateSecurityProfile](#createsecurityprofile) - <p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
* [CreateStream](#createstream) - <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>
* [CreateThing](#creatething) - <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
* [CreateThingGroup](#createthinggroup) - <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
* [CreateThingType](#createthingtype) - <p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
* [CreateTopicRule](#createtopicrule) - <p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
* [CreateTopicRuleDestination](#createtopicruledestination) - <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
* [DeleteAccountAuditConfiguration](#deleteaccountauditconfiguration) - <p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
* [DeleteAuditSuppression](#deleteauditsuppression) - <p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
* [DeleteAuthorizer](#deleteauthorizer) - <p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>
* [DeleteBillingGroup](#deletebillinggroup) - <p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
* [DeleteCACertificate](#deletecacertificate) - <p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
* [DeleteCertificate](#deletecertificate) - <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>
* [DeleteCustomMetric](#deletecustommetric) - <p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>
* [DeleteDimension](#deletedimension) - <p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
* [DeleteDomainConfiguration](#deletedomainconfiguration) - <p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
* [DeleteDynamicThingGroup](#deletedynamicthinggroup) - <p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
* [DeleteFleetMetric](#deletefleetmetric) - <p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
* [DeleteJob](#deletejob) - <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
* [DeleteJobExecution](#deletejobexecution) - <p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
* [DeleteJobTemplate](#deletejobtemplate) - Deletes the specified job template.
* [DeleteMitigationAction](#deletemitigationaction) - <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
* [DeleteOTAUpdate](#deleteotaupdate) - <p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>
* [DeletePolicy](#deletepolicy) - <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
* [DeletePolicyVersion](#deletepolicyversion) - <p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
* [DeleteProvisioningTemplate](#deleteprovisioningtemplate) - <p>Deletes a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
* [DeleteProvisioningTemplateVersion](#deleteprovisioningtemplateversion) - <p>Deletes a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
* [DeleteRegistrationCode](#deleteregistrationcode) - <p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
* [DeleteRoleAlias](#deleterolealias) - <p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
* [DeleteScheduledAudit](#deletescheduledaudit) - <p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
* [DeleteSecurityProfile](#deletesecurityprofile) - <p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>
* [DeleteStream](#deletestream) - <p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>
* [DeleteThing](#deletething) - <p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>
* [DeleteThingGroup](#deletethinggroup) - <p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>
* [DeleteThingType](#deletethingtype) - <p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
* [DeleteTopicRule](#deletetopicrule) - <p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>
* [DeleteTopicRuleDestination](#deletetopicruledestination) - <p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
* [DeleteV2LoggingLevel](#deletev2logginglevel) - <p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
* [DeprecateThingType](#deprecatethingtype) - <p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
* [DescribeAccountAuditConfiguration](#describeaccountauditconfiguration) - <p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
* [DescribeAuditFinding](#describeauditfinding) - <p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
* [DescribeAuditMitigationActionsTask](#describeauditmitigationactionstask) - Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
* [DescribeAuditSuppression](#describeauditsuppression) -  Gets information about a Device Defender audit suppression. 
* [DescribeAuditTask](#describeaudittask) - <p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
* [DescribeAuthorizer](#describeauthorizer) - <p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
* [DescribeBillingGroup](#describebillinggroup) - <p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
* [DescribeCACertificate](#describecacertificate) - <p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
* [DescribeCertificate](#describecertificate) - <p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
* [DescribeCustomMetric](#describecustommetric) - <p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
* [DescribeDefaultAuthorizer](#describedefaultauthorizer) - <p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
* [DescribeDetectMitigationActionsTask](#describedetectmitigationactionstask) - <p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
* [DescribeDimension](#describedimension) - <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
* [DescribeDomainConfiguration](#describedomainconfiguration) - <p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
* [DescribeEndpoint](#describeendpoint) - <p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>
* [DescribeEventConfigurations](#describeeventconfigurations) - <p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
* [DescribeFleetMetric](#describefleetmetric) - <p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
* [DescribeIndex](#describeindex) - <p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
* [DescribeJob](#describejob) - <p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
* [DescribeJobExecution](#describejobexecution) - <p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
* [DescribeJobTemplate](#describejobtemplate) - Returns information about a job template.
* [DescribeManagedJobTemplate](#describemanagedjobtemplate) - View details of a managed job template.
* [DescribeMitigationAction](#describemitigationaction) - <p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
* [DescribeProvisioningTemplate](#describeprovisioningtemplate) - <p>Returns information about a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
* [DescribeProvisioningTemplateVersion](#describeprovisioningtemplateversion) - <p>Returns information about a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
* [DescribeRoleAlias](#describerolealias) - <p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
* [DescribeScheduledAudit](#describescheduledaudit) - <p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
* [DescribeSecurityProfile](#describesecurityprofile) - <p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
* [DescribeStream](#describestream) - <p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
* [DescribeThing](#describething) - <p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
* [DescribeThingGroup](#describethinggroup) - <p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
* [DescribeThingRegistrationTask](#describethingregistrationtask) - <p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
* [DescribeThingType](#describethingtype) - <p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
* [DetachPolicy](#detachpolicy) - <p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>
* [~~DetachPrincipalPolicy~~](#detachprincipalpolicy) - <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p> :warning: **Deprecated**
* [DetachSecurityProfile](#detachsecurityprofile) - <p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
* [DetachThingPrincipal](#detachthingprincipal) - <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
* [DisableTopicRule](#disabletopicrule) - <p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
* [EnableTopicRule](#enabletopicrule) - <p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
* [GetBehaviorModelTrainingSummaries](#getbehaviormodeltrainingsummaries) - <p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
* [GetBucketsAggregation](#getbucketsaggregation) - <p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
* [GetCardinality](#getcardinality) - <p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
* [GetEffectivePolicies](#geteffectivepolicies) - <p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
* [GetIndexingConfiguration](#getindexingconfiguration) - <p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>
* [GetJobDocument](#getjobdocument) - <p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
* [GetLoggingOptions](#getloggingoptions) - <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
* [GetOTAUpdate](#getotaupdate) - <p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
* [GetPercentiles](#getpercentiles) - <p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
* [GetPolicy](#getpolicy) - <p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>
* [GetPolicyVersion](#getpolicyversion) - <p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
* [GetRegistrationCode](#getregistrationcode) - <p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
* [GetStatistics](#getstatistics) - <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
* [GetTopicRule](#gettopicrule) - <p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>
* [GetTopicRuleDestination](#gettopicruledestination) - <p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
* [GetV2LoggingOptions](#getv2loggingoptions) - <p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
* [ListActiveViolations](#listactiveviolations) - <p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
* [ListAttachedPolicies](#listattachedpolicies) - <p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
* [ListAuditFindings](#listauditfindings) - <p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
* [ListAuditMitigationActionsExecutions](#listauditmitigationactionsexecutions) - <p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
* [ListAuditMitigationActionsTasks](#listauditmitigationactionstasks) - <p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
* [ListAuditSuppressions](#listauditsuppressions) - <p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
* [ListAuditTasks](#listaudittasks) - <p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
* [ListAuthorizers](#listauthorizers) - <p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
* [ListBillingGroups](#listbillinggroups) - <p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
* [ListCACertificates](#listcacertificates) - <p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
* [ListCertificates](#listcertificates) - <p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>
* [ListCertificatesByCA](#listcertificatesbyca) - <p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
* [ListCustomMetrics](#listcustommetrics) - <p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
* [ListDetectMitigationActionsExecutions](#listdetectmitigationactionsexecutions) - <p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
* [ListDetectMitigationActionsTasks](#listdetectmitigationactionstasks) - <p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
* [ListDimensions](#listdimensions) - <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
* [ListDomainConfigurations](#listdomainconfigurations) - <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
* [ListFleetMetrics](#listfleetmetrics) - <p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
* [ListIndices](#listindices) - <p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>
* [ListJobExecutionsForJob](#listjobexecutionsforjob) - <p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
* [ListJobExecutionsForThing](#listjobexecutionsforthing) - <p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
* [ListJobTemplates](#listjobtemplates) - <p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
* [ListJobs](#listjobs) - <p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>
* [ListManagedJobTemplates](#listmanagedjobtemplates) - Returns a list of managed job templates.
* [ListMetricValues](#listmetricvalues) - Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.
* [ListMitigationActions](#listmitigationactions) - <p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
* [ListOTAUpdates](#listotaupdates) - <p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
* [ListOutgoingCertificates](#listoutgoingcertificates) - <p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
* [ListPolicies](#listpolicies) - <p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>
* [~~ListPolicyPrincipals~~](#listpolicyprincipals) - <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p> :warning: **Deprecated**
* [ListPolicyVersions](#listpolicyversions) - <p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
* [~~ListPrincipalPolicies~~](#listprincipalpolicies) - <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p> :warning: **Deprecated**
* [ListPrincipalThings](#listprincipalthings) - <p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
* [ListProvisioningTemplateVersions](#listprovisioningtemplateversions) - <p>A list of provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
* [ListProvisioningTemplates](#listprovisioningtemplates) - <p>Lists the provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
* [ListRelatedResourcesForAuditFinding](#listrelatedresourcesforauditfinding) - <p>The related resources of an Audit finding. The following resources can be returned from calling this API:</p> <ul> <li> <p>DEVICE_CERTIFICATE</p> </li> <li> <p>CA_CERTIFICATE</p> </li> <li> <p>IOT_POLICY</p> </li> <li> <p>COGNITO_IDENTITY_POOL</p> </li> <li> <p>CLIENT_ID</p> </li> <li> <p>ACCOUNT_SETTINGS</p> </li> <li> <p>ROLE_ALIAS</p> </li> <li> <p>IAM_ROLE</p> </li> <li> <p>ISSUER_CERTIFICATE</p> </li> </ul> <note> <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a> but provides pagination and is not limited to 10 resources. When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p> </note>
* [ListRoleAliases](#listrolealiases) - <p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
* [ListScheduledAudits](#listscheduledaudits) - <p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
* [ListSecurityProfiles](#listsecurityprofiles) - <p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>
* [ListSecurityProfilesForTarget](#listsecurityprofilesfortarget) - <p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
* [ListStreams](#liststreams) - <p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
* [ListTagsForResource](#listtagsforresource) - <p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [ListTargetsForPolicy](#listtargetsforpolicy) - <p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
* [ListTargetsForSecurityProfile](#listtargetsforsecurityprofile) - <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
* [ListThingGroups](#listthinggroups) - <p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
* [ListThingGroupsForThing](#listthinggroupsforthing) - <p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
* [ListThingPrincipals](#listthingprincipals) - <p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
* [ListThingRegistrationTaskReports](#listthingregistrationtaskreports) - Information about the thing registration tasks.
* [ListThingRegistrationTasks](#listthingregistrationtasks) - <p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
* [ListThingTypes](#listthingtypes) - <p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
* [ListThings](#listthings) - <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer Guide</i>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>
* [ListThingsInBillingGroup](#listthingsinbillinggroup) - <p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>
* [ListThingsInThingGroup](#listthingsinthinggroup) - <p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
* [ListTopicRuleDestinations](#listtopicruledestinations) - <p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
* [ListTopicRules](#listtopicrules) - <p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
* [ListV2LoggingLevels](#listv2logginglevels) - <p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
* [ListViolationEvents](#listviolationevents) - <p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
* [PutVerificationStateOnViolation](#putverificationstateonviolation) - Set a verification state and provide a description of that verification state on a violation (detect alarm).
* [RegisterCACertificate](#registercacertificate) - <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
* [RegisterCertificate](#registercertificate) - <p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
* [RegisterCertificateWithoutCA](#registercertificatewithoutca) - Register a certificate that does not have a certificate authority (CA). For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. 
* [RegisterThing](#registerthing) - <p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
* [RejectCertificateTransfer](#rejectcertificatetransfer) - <p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>
* [RemoveThingFromBillingGroup](#removethingfrombillinggroup) - <p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
* [RemoveThingFromThingGroup](#removethingfromthinggroup) - <p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
* [ReplaceTopicRule](#replacetopicrule) - <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>
* [SearchIndex](#searchindex) - <p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
* [SetDefaultAuthorizer](#setdefaultauthorizer) - <p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
* [SetDefaultPolicyVersion](#setdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
* [SetLoggingOptions](#setloggingoptions) - <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
* [SetV2LoggingLevel](#setv2logginglevel) - <p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
* [SetV2LoggingOptions](#setv2loggingoptions) - <p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
* [StartAuditMitigationActionsTask](#startauditmitigationactionstask) - <p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
* [StartDetectMitigationActionsTask](#startdetectmitigationactionstask) - <p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
* [StartOnDemandAuditTask](#startondemandaudittask) - <p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
* [StartThingRegistrationTask](#startthingregistrationtask) - <p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
* [StopThingRegistrationTask](#stopthingregistrationtask) - <p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
* [TagResource](#tagresource) - <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [TestAuthorization](#testauthorization) - <p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
* [TestInvokeAuthorizer](#testinvokeauthorizer) - <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
* [TransferCertificate](#transfercertificate) - <p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>
* [UntagResource](#untagresource) - <p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [UpdateAccountAuditConfiguration](#updateaccountauditconfiguration) - <p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
* [UpdateAuditSuppression](#updateauditsuppression) -  Updates a Device Defender audit suppression. 
* [UpdateAuthorizer](#updateauthorizer) - <p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
* [UpdateBillingGroup](#updatebillinggroup) - <p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
* [UpdateCACertificate](#updatecacertificate) - <p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
* [UpdateCertificate](#updatecertificate) - <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>
* [UpdateCustomMetric](#updatecustommetric) - <p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
* [UpdateDimension](#updatedimension) - <p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
* [UpdateDomainConfiguration](#updatedomainconfiguration) - <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
* [UpdateDynamicThingGroup](#updatedynamicthinggroup) - <p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
* [UpdateEventConfigurations](#updateeventconfigurations) - <p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
* [UpdateFleetMetric](#updatefleetmetric) - <p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>
* [UpdateIndexingConfiguration](#updateindexingconfiguration) - <p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
* [UpdateJob](#updatejob) - <p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>
* [UpdateMitigationAction](#updatemitigationaction) - <p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
* [UpdateProvisioningTemplate](#updateprovisioningtemplate) - <p>Updates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
* [UpdateRoleAlias](#updaterolealias) - <p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
* [UpdateScheduledAudit](#updatescheduledaudit) - <p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
* [UpdateSecurityProfile](#updatesecurityprofile) - <p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
* [UpdateStream](#updatestream) - <p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
* [UpdateThing](#updatething) - <p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
* [UpdateThingGroup](#updatethinggroup) - <p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>
* [UpdateThingGroupsForThing](#updatethinggroupsforthing) - <p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
* [UpdateTopicRuleDestination](#updatetopicruledestination) - <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
* [ValidateSecurityProfileBehaviors](#validatesecurityprofilebehaviors) - <p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>

## AcceptCertificateTransfer

<p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AcceptCertificateTransfer(ctx, operations.AcceptCertificateTransferRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        CertificateID: "ipsa",
        SetAsActive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddThingToBillingGroup

<p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddThingToBillingGroup(ctx, operations.AddThingToBillingGroupRequest{
        RequestBody: operations.AddThingToBillingGroupRequestBody{
            BillingGroupArn: sdk.String("delectus"),
            BillingGroupName: sdk.String("tempora"),
            ThingArn: sdk.String("suscipit"),
            ThingName: sdk.String("molestiae"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddThingToBillingGroupResponse != nil {
        // handle response
    }
}
```

## AddThingToThingGroup

<p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddThingToThingGroup(ctx, operations.AddThingToThingGroupRequest{
        RequestBody: operations.AddThingToThingGroupRequestBody{
            OverrideDynamicGroups: sdk.Bool(false),
            ThingArn: sdk.String("temporibus"),
            ThingGroupArn: sdk.String("ab"),
            ThingGroupName: sdk.String("quis"),
            ThingName: sdk.String("veritatis"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddThingToThingGroupResponse != nil {
        // handle response
    }
}
```

## AssociateTargetsWithJob

<p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateTargetsWithJob(ctx, operations.AssociateTargetsWithJobRequest{
        RequestBody: operations.AssociateTargetsWithJobRequestBody{
            Comment: sdk.String("at"),
            Targets: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        JobID: "occaecati",
        NamespaceID: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateTargetsWithJobResponse != nil {
        // handle response
    }
}
```

## AttachPolicy

<p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AttachPolicy(ctx, operations.AttachPolicyRequest{
        RequestBody: operations.AttachPolicyRequestBody{
            Target: "deleniti",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
        PolicyName: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AttachPrincipalPolicy~~

<p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AttachPrincipalPolicy(ctx, operations.AttachPrincipalPolicyRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        PolicyName: "ad",
        XAmznIotPrincipal: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AttachSecurityProfile

<p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AttachSecurityProfile(ctx, operations.AttachSecurityProfileRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        SecurityProfileName: "fuga",
        SecurityProfileTargetArn: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachSecurityProfileResponse != nil {
        // handle response
    }
}
```

## AttachThingPrincipal

<p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AttachThingPrincipal(ctx, operations.AttachThingPrincipalRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ThingName: "reiciendis",
        XAmznPrincipal: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachThingPrincipalResponse != nil {
        // handle response
    }
}
```

## CancelAuditMitigationActionsTask

<p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelAuditMitigationActionsTask(ctx, operations.CancelAuditMitigationActionsTaskRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        TaskID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelAuditMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## CancelAuditTask

<p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelAuditTask(ctx, operations.CancelAuditTaskRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        TaskID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelAuditTaskResponse != nil {
        // handle response
    }
}
```

## CancelCertificateTransfer

<p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelCertificateTransfer(ctx, operations.CancelCertificateTransferRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        CertificateID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelDetectMitigationActionsTask

<p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelDetectMitigationActionsTask(ctx, operations.CancelDetectMitigationActionsTaskRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        TaskID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelDetectMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## CancelJob

<p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelJob(ctx, operations.CancelJobRequest{
        RequestBody: operations.CancelJobRequestBody{
            Comment: sdk.String("quis"),
            ReasonCode: sdk.String("vitae"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        Force: sdk.Bool(false),
        JobID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```

## CancelJobExecution

<p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelJobExecution(ctx, operations.CancelJobExecutionRequest{
        RequestBody: operations.CancelJobExecutionRequestBody{
            ExpectedVersion: sdk.Int64(662527),
            StatusDetails: map[string]string{
                "aut": "quasi",
                "error": "temporibus",
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        Force: sdk.Bool(false),
        JobID: "cum",
        ThingName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClearDefaultAuthorizer

<p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ClearDefaultAuthorizer(ctx, operations.ClearDefaultAuthorizerRequest{
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClearDefaultAuthorizerResponse != nil {
        // handle response
    }
}
```

## ConfirmTopicRuleDestination

<p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmTopicRuleDestination(ctx, operations.ConfirmTopicRuleDestinationRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        ConfirmationToken: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmTopicRuleDestinationResponse != nil {
        // handle response
    }
}
```

## CreateAuditSuppression

<p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAuditSuppression(ctx, operations.CreateAuditSuppressionRequest{
        RequestBody: operations.CreateAuditSuppressionRequestBody{
            CheckName: "ipsum",
            ClientRequestToken: "quidem",
            Description: sdk.String("molestias"),
            ExpirationDate: types.MustTimeFromString("2021-04-09T11:24:10.949Z"),
            ResourceIdentifier: operations.CreateAuditSuppressionRequestBodyResourceIdentifier{
                Account: sdk.String("modi"),
                CaCertificateID: sdk.String("praesentium"),
                ClientID: sdk.String("rem"),
                CognitoIdentityPoolID: sdk.String("voluptates"),
                DeviceCertificateArn: sdk.String("quasi"),
                DeviceCertificateID: sdk.String("repudiandae"),
                IamRoleArn: sdk.String("sint"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("veritatis"),
                    IssuerCertificateSubject: sdk.String("itaque"),
                    IssuerID: sdk.String("incidunt"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("enim"),
                    PolicyVersionID: sdk.String("consequatur"),
                },
                RoleAliasArn: sdk.String("est"),
            },
            SuppressIndefinitely: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuditSuppressionResponse != nil {
        // handle response
    }
}
```

## CreateAuthorizer

<p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>

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
    res, err := s.SDK.CreateAuthorizer(ctx, operations.CreateAuthorizerRequest{
        RequestBody: operations.CreateAuthorizerRequestBody{
            AuthorizerFunctionArn: "qui",
            EnableCachingForHTTP: sdk.Bool(false),
            SigningDisabled: sdk.Bool(false),
            Status: operations.CreateAuthorizerRequestBodyStatusEnumActive.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quos",
                    Value: sdk.String("perferendis"),
                },
                shared.Tag{
                    Key: "magni",
                    Value: sdk.String("assumenda"),
                },
                shared.Tag{
                    Key: "ipsam",
                    Value: sdk.String("alias"),
                },
            },
            TokenKeyName: sdk.String("fugit"),
            TokenSigningPublicKeys: map[string]string{
                "excepturi": "tempora",
                "facilis": "tempore",
                "labore": "delectus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        AuthorizerName: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthorizerResponse != nil {
        // handle response
    }
}
```

## CreateBillingGroup

<p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>

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
    res, err := s.SDK.CreateBillingGroup(ctx, operations.CreateBillingGroupRequest{
        RequestBody: operations.CreateBillingGroupRequestBody{
            BillingGroupProperties: &operations.CreateBillingGroupRequestBodyBillingGroupProperties{
                BillingGroupDescription: sdk.String("officia"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: sdk.String("a"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        BillingGroupName: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBillingGroupResponse != nil {
        // handle response
    }
}
```

## CreateCertificateFromCsr

<p>Creates an X.509 certificate using the specified certificate signing request. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action. </p> <note> <p>The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-25 or NIST P-384 curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p> </note> <note> <p>Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> </note> <p>You can create multiple certificates in a batch by creating a directory, copying multiple <code>.csr</code> files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is: </p> <p> <code>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</code> </p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for the corresponding CSR. </p> <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the command in parallel to speed up the certificate creation process:</p> <p> <code>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} </code> </p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} </code> </p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path" </code> </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCertificateFromCsr(ctx, operations.CreateCertificateFromCsrRequest{
        RequestBody: operations.CreateCertificateFromCsrRequestBody{
            CertificateSigningRequest: "cumque",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        SetAsActive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateFromCsrResponse != nil {
        // handle response
    }
}
```

## CreateCustomMetric

<p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>

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
    res, err := s.SDK.CreateCustomMetric(ctx, operations.CreateCustomMetricRequest{
        RequestBody: operations.CreateCustomMetricRequestBody{
            ClientRequestToken: "enim",
            DisplayName: sdk.String("accusamus"),
            MetricType: operations.CreateCustomMetricRequestBodyMetricTypeEnumNumber,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: sdk.String("nam"),
                },
                shared.Tag{
                    Key: "id",
                    Value: sdk.String("blanditiis"),
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: sdk.String("sapiente"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        MetricName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomMetricResponse != nil {
        // handle response
    }
}
```

## CreateDimension

<p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>

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
    res, err := s.SDK.CreateDimension(ctx, operations.CreateDimensionRequest{
        RequestBody: operations.CreateDimensionRequestBody{
            ClientRequestToken: "nihil",
            StringValues: []string{
                "distinctio",
                "id",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "labore",
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: "natus",
                    Value: sdk.String("nobis"),
                },
            },
            Type: operations.CreateDimensionRequestBodyTypeEnumTopicFilter,
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        Name: "Ramona Lueilwitz MD",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDimensionResponse != nil {
        // handle response
    }
}
```

## CreateDomainConfiguration

<p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>

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
    res, err := s.SDK.CreateDomainConfiguration(ctx, operations.CreateDomainConfigurationRequest{
        RequestBody: operations.CreateDomainConfigurationRequestBody{
            AuthorizerConfig: &operations.CreateDomainConfigurationRequestBodyAuthorizerConfig{
                AllowAuthorizerOverride: sdk.Bool(false),
                DefaultAuthorizerName: sdk.String("reiciendis"),
            },
            DomainName: sdk.String("mollitia"),
            ServerCertificateArns: []string{
                "eum",
                "dolor",
            },
            ServiceType: operations.CreateDomainConfigurationRequestBodyServiceTypeEnumJobs.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nemo",
                    Value: sdk.String("quasi"),
                },
            },
            ValidationCertificateArn: sdk.String("iure"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
        DomainConfigurationName: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateDynamicThingGroup

<p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>

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
    res, err := s.SDK.CreateDynamicThingGroup(ctx, operations.CreateDynamicThingGroupRequest{
        RequestBody: operations.CreateDynamicThingGroupRequestBody{
            IndexName: sdk.String("architecto"),
            QueryString: "repudiandae",
            QueryVersion: sdk.String("ullam"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: sdk.String("repellat"),
                },
                shared.Tag{
                    Key: "quibusdam",
                    Value: sdk.String("sed"),
                },
                shared.Tag{
                    Key: "saepe",
                    Value: sdk.String("pariatur"),
                },
            },
            ThingGroupProperties: &operations.CreateDynamicThingGroupRequestBodyThingGroupProperties{
                AttributePayload: &shared.AttributePayload{
                    Attributes: map[string]string{
                        "consequuntur": "praesentium",
                    },
                    Merge: sdk.Bool(false),
                },
                ThingGroupDescription: sdk.String("natus"),
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        ThingGroupName: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDynamicThingGroupResponse != nil {
        // handle response
    }
}
```

## CreateFleetMetric

<p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>

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
    res, err := s.SDK.CreateFleetMetric(ctx, operations.CreateFleetMetricRequest{
        RequestBody: operations.CreateFleetMetricRequestBody{
            AggregationField: "odit",
            AggregationType: operations.CreateFleetMetricRequestBodyAggregationType{
                Name: shared.AggregationTypeNameEnumPercentiles.ToPointer(),
                Values: []string{
                    "ab",
                },
            },
            Description: sdk.String("maiores"),
            IndexName: sdk.String("quidem"),
            Period: 373291,
            QueryString: "voluptate",
            QueryVersion: sdk.String("autem"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eaque",
                    Value: sdk.String("pariatur"),
                },
                shared.Tag{
                    Key: "nemo",
                    Value: sdk.String("voluptatibus"),
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: sdk.String("fugiat"),
                },
            },
            Unit: operations.CreateFleetMetricRequestBodyUnitEnumGigabytes.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MetricName: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFleetMetricResponse != nil {
        // handle response
    }
}
```

## CreateJob

<p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>

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
    res, err := s.SDK.CreateJob(ctx, operations.CreateJobRequest{
        RequestBody: operations.CreateJobRequestBody{
            AbortConfig: &operations.CreateJobRequestBodyAbortConfig{
                CriteriaList: []shared.AbortCriteria{
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumRejected,
                        MinNumberOfExecutedThings: 54338,
                        ThresholdPercentage: 3389.85,
                    },
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumFailed,
                        MinNumberOfExecutedThings: 179490,
                        ThresholdPercentage: 185.21,
                    },
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumFailed,
                        MinNumberOfExecutedThings: 793698,
                        ThresholdPercentage: 4634.51,
                    },
                },
            },
            Description: sdk.String("dolor"),
            Document: sdk.String("vero"),
            DocumentParameters: map[string]string{
                "hic": "recusandae",
                "omnis": "facilis",
            },
            DocumentSource: sdk.String("perspiciatis"),
            JobExecutionsRetryConfig: &operations.CreateJobRequestBodyJobExecutionsRetryConfig{
                CriteriaList: []shared.RetryCriteria{
                    shared.RetryCriteria{
                        FailureType: shared.RetryableFailureTypeEnumAll,
                        NumberOfRetries: 164694,
                    },
                },
            },
            JobExecutionsRolloutConfig: &operations.CreateJobRequestBodyJobExecutionsRolloutConfig{
                ExponentialRate: &shared.ExponentialRolloutRate{
                    BaseRatePerMinute: 500026,
                    IncrementFactor: 6214.79,
                    RateIncreaseCriteria: shared.RateIncreaseCriteria{
                        NumberOfNotifiedThings: sdk.Int64(50370),
                        NumberOfSucceededThings: sdk.Int64(577229),
                    },
                },
                MaximumPerMinute: sdk.Int64(699098),
            },
            JobTemplateArn: sdk.String("adipisci"),
            NamespaceID: sdk.String("asperiores"),
            PresignedURLConfig: &operations.CreateJobRequestBodyPresignedURLConfig{
                ExpiresInSec: sdk.Int64(934214),
                RoleArn: sdk.String("modi"),
            },
            SchedulingConfig: &operations.CreateJobRequestBodySchedulingConfig{
                EndBehavior: shared.JobEndBehaviorEnumCancel.ToPointer(),
                EndTime: sdk.String("dolorum"),
                MaintenanceWindows: []shared.MaintenanceWindow{
                    shared.MaintenanceWindow{
                        DurationInMinutes: 864282,
                        StartTime: "provident",
                    },
                    shared.MaintenanceWindow{
                        DurationInMinutes: 750844,
                        StartTime: "libero",
                    },
                    shared.MaintenanceWindow{
                        DurationInMinutes: 964490,
                        StartTime: "quaerat",
                    },
                },
                StartTime: sdk.String("quos"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: sdk.String("dolorem"),
                },
                shared.Tag{
                    Key: "dolor",
                    Value: sdk.String("qui"),
                },
            },
            TargetSelection: operations.CreateJobRequestBodyTargetSelectionEnumContinuous.ToPointer(),
            Targets: []string{
                "excepturi",
                "cum",
                "voluptate",
                "dignissimos",
            },
            TimeoutConfig: &operations.CreateJobRequestBodyTimeoutConfig{
                InProgressTimeoutInMinutes: sdk.Int64(970237),
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        JobID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobResponse != nil {
        // handle response
    }
}
```

## CreateJobTemplate

<p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>

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
    res, err := s.SDK.CreateJobTemplate(ctx, operations.CreateJobTemplateRequest{
        RequestBody: operations.CreateJobTemplateRequestBody{
            AbortConfig: &operations.CreateJobTemplateRequestBodyAbortConfig{
                CriteriaList: []shared.AbortCriteria{
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumAll,
                        MinNumberOfExecutedThings: 696344,
                        ThresholdPercentage: 9764.05,
                    },
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumRejected,
                        MinNumberOfExecutedThings: 617658,
                        ThresholdPercentage: 1796.03,
                    },
                },
            },
            Description: "atque",
            Document: sdk.String("sit"),
            DocumentSource: sdk.String("fugiat"),
            JobArn: sdk.String("ab"),
            JobExecutionsRetryConfig: &operations.CreateJobTemplateRequestBodyJobExecutionsRetryConfig{
                CriteriaList: []shared.RetryCriteria{
                    shared.RetryCriteria{
                        FailureType: shared.RetryableFailureTypeEnumAll,
                        NumberOfRetries: 478596,
                    },
                    shared.RetryCriteria{
                        FailureType: shared.RetryableFailureTypeEnumTimedOut,
                        NumberOfRetries: 677082,
                    },
                    shared.RetryCriteria{
                        FailureType: shared.RetryableFailureTypeEnumTimedOut,
                        NumberOfRetries: 607045,
                    },
                },
            },
            JobExecutionsRolloutConfig: &operations.CreateJobTemplateRequestBodyJobExecutionsRolloutConfig{
                ExponentialRate: &shared.ExponentialRolloutRate{
                    BaseRatePerMinute: 896672,
                    IncrementFactor: 7146.97,
                    RateIncreaseCriteria: shared.RateIncreaseCriteria{
                        NumberOfNotifiedThings: sdk.Int64(990339),
                        NumberOfSucceededThings: sdk.Int64(469497),
                    },
                },
                MaximumPerMinute: sdk.Int64(216897),
            },
            MaintenanceWindows: []shared.MaintenanceWindow{
                shared.MaintenanceWindow{
                    DurationInMinutes: 663078,
                    StartTime: "saepe",
                },
                shared.MaintenanceWindow{
                    DurationInMinutes: 263322,
                    StartTime: "aspernatur",
                },
            },
            PresignedURLConfig: &operations.CreateJobTemplateRequestBodyPresignedURLConfig{
                ExpiresInSec: sdk.Int64(20651),
                RoleArn: sdk.String("amet"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: sdk.String("ad"),
                },
                shared.Tag{
                    Key: "saepe",
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: sdk.String("provident"),
                },
                shared.Tag{
                    Key: "minima",
                    Value: sdk.String("repellendus"),
                },
            },
            TimeoutConfig: &operations.CreateJobTemplateRequestBodyTimeoutConfig{
                InProgressTimeoutInMinutes: sdk.Int64(519711),
            },
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        JobTemplateID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobTemplateResponse != nil {
        // handle response
    }
}
```

## CreateKeysAndCertificate

<p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateKeysAndCertificate(ctx, operations.CreateKeysAndCertificateRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        SetAsActive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeysAndCertificateResponse != nil {
        // handle response
    }
}
```

## CreateMitigationAction

<p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>

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
    res, err := s.SDK.CreateMitigationAction(ctx, operations.CreateMitigationActionRequest{
        RequestBody: operations.CreateMitigationActionRequestBody{
            ActionParams: operations.CreateMitigationActionRequestBodyActionParams{
                AddThingsToThingGroupParams: &shared.AddThingsToThingGroupParams{
                    OverrideDynamicGroups: sdk.Bool(false),
                    ThingGroupNames: []string{
                        "tenetur",
                        "amet",
                        "tempore",
                        "accusamus",
                    },
                },
                EnableIoTLoggingParams: &shared.EnableIoTLoggingParams{
                    LogLevel: shared.LogLevelEnumInfo,
                    RoleArnForLogging: "enim",
                },
                PublishFindingToSnsParams: &shared.PublishFindingToSnsParams{
                    TopicArn: "dolorem",
                },
                ReplaceDefaultPolicyVersionParams: &shared.ReplaceDefaultPolicyVersionParams{
                    TemplateName: shared.PolicyTemplateNameEnumBlankPolicy,
                },
                UpdateCACertificateParams: &shared.UpdateCACertificateParams{
                    Action: shared.CACertificateUpdateActionEnumDeactivate,
                },
                UpdateDeviceCertificateParams: &shared.UpdateDeviceCertificateParams{
                    Action: shared.DeviceCertificateUpdateActionEnumDeactivate,
                },
            },
            RoleArn: "sapiente",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: sdk.String("sit"),
                },
                shared.Tag{
                    Key: "expedita",
                    Value: sdk.String("neque"),
                },
                shared.Tag{
                    Key: "sed",
                    Value: sdk.String("vel"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        ActionName: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMitigationActionResponse != nil {
        // handle response
    }
}
```

## CreateOTAUpdate

<p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>

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
    res, err := s.SDK.CreateOTAUpdate(ctx, operations.CreateOTAUpdateRequest{
        RequestBody: operations.CreateOTAUpdateRequestBody{
            AdditionalParameters: map[string]string{
                "pariatur": "soluta",
                "dicta": "laborum",
                "totam": "incidunt",
                "aspernatur": "dolores",
            },
            AwsJobAbortConfig: &operations.CreateOTAUpdateRequestBodyAwsJobAbortConfig{
                AbortCriteriaList: []shared.AwsJobAbortCriteria{
                    shared.AwsJobAbortCriteria{
                        Action: shared.AwsJobAbortCriteriaAbortActionEnumCancel,
                        FailureType: shared.AwsJobAbortCriteriaFailureTypeEnumTimedOut,
                        MinNumberOfExecutedThings: 396060,
                        ThresholdPercentage: 4631.5,
                    },
                    shared.AwsJobAbortCriteria{
                        Action: shared.AwsJobAbortCriteriaAbortActionEnumCancel,
                        FailureType: shared.AwsJobAbortCriteriaFailureTypeEnumTimedOut,
                        MinNumberOfExecutedThings: 840429,
                        ThresholdPercentage: 1832.8,
                    },
                    shared.AwsJobAbortCriteria{
                        Action: shared.AwsJobAbortCriteriaAbortActionEnumCancel,
                        FailureType: shared.AwsJobAbortCriteriaFailureTypeEnumFailed,
                        MinNumberOfExecutedThings: 144847,
                        ThresholdPercentage: 1649.59,
                    },
                },
            },
            AwsJobExecutionsRolloutConfig: &operations.CreateOTAUpdateRequestBodyAwsJobExecutionsRolloutConfig{
                ExponentialRate: &shared.AwsJobExponentialRolloutRate{
                    BaseRatePerMinute: 488056,
                    IncrementFactor: 1248.33,
                    RateIncreaseCriteria: shared.AwsJobRateIncreaseCriteria{
                        NumberOfNotifiedThings: sdk.Int64(355613),
                        NumberOfSucceededThings: sdk.Int64(722081),
                    },
                },
                MaximumPerMinute: sdk.Int64(940432),
            },
            AwsJobPresignedURLConfig: &operations.CreateOTAUpdateRequestBodyAwsJobPresignedURLConfig{
                ExpiresInSec: sdk.Int64(30452),
            },
            AwsJobTimeoutConfig: &operations.CreateOTAUpdateRequestBodyAwsJobTimeoutConfig{
                InProgressTimeoutInMinutes: sdk.Int64(765326),
            },
            Description: sdk.String("soluta"),
            Files: []shared.OTAUpdateFile{
                shared.OTAUpdateFile{
                    Attributes: map[string]string{
                        "saepe": "ipsum",
                    },
                    CodeSigning: &shared.CodeSigning{
                        AwsSignerJobID: sdk.String("veritatis"),
                        CustomCodeSigning: &shared.CustomCodeSigning{
                            CertificateChain: &shared.CodeSigningCertificateChain{
                                CertificateName: sdk.String("nobis"),
                                InlineDocument: sdk.String("quos"),
                            },
                            HashAlgorithm: sdk.String("tempore"),
                            Signature: &shared.CodeSigningSignature{
                                InlineDocument: sdk.String("cupiditate"),
                            },
                            SignatureAlgorithm: sdk.String("aperiam"),
                        },
                        StartSigningJobParameter: &shared.StartSigningJobParameter{
                            Destination: &shared.Destination{
                                S3Destination: &shared.S3Destination{
                                    Bucket: sdk.String("delectus"),
                                    Prefix: sdk.String("dolorem"),
                                },
                            },
                            SigningProfileName: sdk.String("dolore"),
                            SigningProfileParameter: &shared.SigningProfileParameter{
                                CertificateArn: sdk.String("labore"),
                                CertificatePathOnDevice: sdk.String("adipisci"),
                                Platform: sdk.String("dolorum"),
                            },
                        },
                    },
                    FileLocation: &shared.FileLocation{
                        S3Location: &shared.S3Location{
                            Bucket: sdk.String("architecto"),
                            Key: sdk.String("quae"),
                            Version: sdk.String("aut"),
                        },
                        Stream: &shared.Stream{
                            FileID: sdk.Int64(555649),
                            StreamID: sdk.String("itaque"),
                        },
                    },
                    FileName: sdk.String("consequatur"),
                    FileType: sdk.Int64(669917),
                    FileVersion: sdk.String("repellendus"),
                },
                shared.OTAUpdateFile{
                    Attributes: map[string]string{
                        "doloribus": "ut",
                        "facilis": "cupiditate",
                        "qui": "quae",
                        "laudantium": "odio",
                    },
                    CodeSigning: &shared.CodeSigning{
                        AwsSignerJobID: sdk.String("occaecati"),
                        CustomCodeSigning: &shared.CustomCodeSigning{
                            CertificateChain: &shared.CodeSigningCertificateChain{
                                CertificateName: sdk.String("voluptatibus"),
                                InlineDocument: sdk.String("quisquam"),
                            },
                            HashAlgorithm: sdk.String("vero"),
                            Signature: &shared.CodeSigningSignature{
                                InlineDocument: sdk.String("omnis"),
                            },
                            SignatureAlgorithm: sdk.String("quis"),
                        },
                        StartSigningJobParameter: &shared.StartSigningJobParameter{
                            Destination: &shared.Destination{
                                S3Destination: &shared.S3Destination{
                                    Bucket: sdk.String("ipsum"),
                                    Prefix: sdk.String("delectus"),
                                },
                            },
                            SigningProfileName: sdk.String("voluptate"),
                            SigningProfileParameter: &shared.SigningProfileParameter{
                                CertificateArn: sdk.String("consectetur"),
                                CertificatePathOnDevice: sdk.String("vero"),
                                Platform: sdk.String("tenetur"),
                            },
                        },
                    },
                    FileLocation: &shared.FileLocation{
                        S3Location: &shared.S3Location{
                            Bucket: sdk.String("dignissimos"),
                            Key: sdk.String("hic"),
                            Version: sdk.String("distinctio"),
                        },
                        Stream: &shared.Stream{
                            FileID: sdk.Int64(799203),
                            StreamID: sdk.String("odio"),
                        },
                    },
                    FileName: sdk.String("similique"),
                    FileType: sdk.Int64(708548),
                    FileVersion: sdk.String("vero"),
                },
                shared.OTAUpdateFile{
                    Attributes: map[string]string{
                        "dolore": "quibusdam",
                        "illum": "sequi",
                    },
                    CodeSigning: &shared.CodeSigning{
                        AwsSignerJobID: sdk.String("natus"),
                        CustomCodeSigning: &shared.CustomCodeSigning{
                            CertificateChain: &shared.CodeSigningCertificateChain{
                                CertificateName: sdk.String("impedit"),
                                InlineDocument: sdk.String("aut"),
                            },
                            HashAlgorithm: sdk.String("voluptatibus"),
                            Signature: &shared.CodeSigningSignature{
                                InlineDocument: sdk.String("exercitationem"),
                            },
                            SignatureAlgorithm: sdk.String("nulla"),
                        },
                        StartSigningJobParameter: &shared.StartSigningJobParameter{
                            Destination: &shared.Destination{
                                S3Destination: &shared.S3Destination{
                                    Bucket: sdk.String("fugit"),
                                    Prefix: sdk.String("porro"),
                                },
                            },
                            SigningProfileName: sdk.String("maiores"),
                            SigningProfileParameter: &shared.SigningProfileParameter{
                                CertificateArn: sdk.String("doloribus"),
                                CertificatePathOnDevice: sdk.String("iusto"),
                                Platform: sdk.String("eligendi"),
                            },
                        },
                    },
                    FileLocation: &shared.FileLocation{
                        S3Location: &shared.S3Location{
                            Bucket: sdk.String("ducimus"),
                            Key: sdk.String("alias"),
                            Version: sdk.String("officia"),
                        },
                        Stream: &shared.Stream{
                            FileID: sdk.Int64(269479),
                            StreamID: sdk.String("ipsam"),
                        },
                    },
                    FileName: sdk.String("ea"),
                    FileType: sdk.Int64(136900),
                    FileVersion: sdk.String("vel"),
                },
            },
            Protocols: []shared.ProtocolEnum{
                shared.ProtocolEnumMqtt,
                shared.ProtocolEnumMqtt,
                shared.ProtocolEnumMqtt,
                shared.ProtocolEnumHTTP,
            },
            RoleArn: "dicta",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maiores",
                    Value: sdk.String("quasi"),
                },
            },
            TargetSelection: operations.CreateOTAUpdateRequestBodyTargetSelectionEnumContinuous.ToPointer(),
            Targets: []string{
                "excepturi",
                "voluptatibus",
                "nostrum",
                "sapiente",
            },
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        OtaUpdateID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOTAUpdateResponse != nil {
        // handle response
    }
}
```

## CreatePolicy

<p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>

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
    res, err := s.SDK.CreatePolicy(ctx, operations.CreatePolicyRequest{
        RequestBody: operations.CreatePolicyRequestBody{
            PolicyDocument: "magnam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quo",
                    Value: sdk.String("consectetur"),
                },
                shared.Tag{
                    Key: "recusandae",
                    Value: sdk.String("aspernatur"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        PolicyName: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePolicyResponse != nil {
        // handle response
    }
}
```

## CreatePolicyVersion

<p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePolicyVersion(ctx, operations.CreatePolicyVersionRequest{
        RequestBody: operations.CreatePolicyVersionRequestBody{
            PolicyDocument: "aliquam",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("laborum"),
        PolicyName: "placeat",
        SetAsDefault: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePolicyVersionResponse != nil {
        // handle response
    }
}
```

## CreateProvisioningClaim

<p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProvisioningClaim(ctx, operations.CreateProvisioningClaimRequest{
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
        TemplateName: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProvisioningClaimResponse != nil {
        // handle response
    }
}
```

## CreateProvisioningTemplate

<p>Creates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>

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
    res, err := s.SDK.CreateProvisioningTemplate(ctx, operations.CreateProvisioningTemplateRequest{
        RequestBody: operations.CreateProvisioningTemplateRequestBody{
            Description: sdk.String("libero"),
            Enabled: sdk.Bool(false),
            PreProvisioningHook: &operations.CreateProvisioningTemplateRequestBodyPreProvisioningHook{
                PayloadVersion: sdk.String("quasi"),
                TargetArn: sdk.String("tempora"),
            },
            ProvisioningRoleArn: "numquam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "provident",
                    Value: sdk.String("ipsa"),
                },
            },
            TemplateBody: "molestiae",
            TemplateName: "magnam",
            Type: operations.CreateProvisioningTemplateRequestBodyTypeEnumFleetProvisioning.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProvisioningTemplateResponse != nil {
        // handle response
    }
}
```

## CreateProvisioningTemplateVersion

<p>Creates a new version of a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProvisioningTemplateVersion(ctx, operations.CreateProvisioningTemplateVersionRequest{
        RequestBody: operations.CreateProvisioningTemplateVersionRequestBody{
            TemplateBody: "fugiat",
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        SetAsDefault: sdk.Bool(false),
        TemplateName: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProvisioningTemplateVersionResponse != nil {
        // handle response
    }
}
```

## CreateRoleAlias

<p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>

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
    res, err := s.SDK.CreateRoleAlias(ctx, operations.CreateRoleAliasRequest{
        RequestBody: operations.CreateRoleAliasRequestBody{
            CredentialDurationSeconds: sdk.Int64(56848),
            RoleArn: "id",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "neque",
                    Value: sdk.String("quo"),
                },
                shared.Tag{
                    Key: "illum",
                    Value: sdk.String("quo"),
                },
                shared.Tag{
                    Key: "fuga",
                    Value: sdk.String("eius"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("debitis"),
        RoleAlias: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRoleAliasResponse != nil {
        // handle response
    }
}
```

## CreateScheduledAudit

<p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>

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
    res, err := s.SDK.CreateScheduledAudit(ctx, operations.CreateScheduledAuditRequest{
        RequestBody: operations.CreateScheduledAuditRequestBody{
            DayOfMonth: sdk.String("aspernatur"),
            DayOfWeek: operations.CreateScheduledAuditRequestBodyDayOfWeekEnumMon.ToPointer(),
            Frequency: operations.CreateScheduledAuditRequestBodyFrequencyEnumMonthly,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "recusandae",
                    Value: sdk.String("aperiam"),
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: sdk.String("quod"),
                },
            },
            TargetCheckNames: []string{
                "inventore",
                "nihil",
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        ScheduledAuditName: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScheduledAuditResponse != nil {
        // handle response
    }
}
```

## CreateSecurityProfile

<p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>

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
    res, err := s.SDK.CreateSecurityProfile(ctx, operations.CreateSecurityProfileRequest{
        RequestBody: operations.CreateSecurityProfileRequestBody{
            AdditionalMetricsToRetain: []string{
                "molestiae",
                "accusantium",
                "porro",
            },
            AdditionalMetricsToRetainV2: []shared.MetricToRetain{
                shared.MetricToRetain{
                    Metric: "quas",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "praesentium",
                        Operator: shared.DimensionValueOperatorEnumIn.ToPointer(),
                    },
                },
                shared.MetricToRetain{
                    Metric: "deleniti",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "fugit",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                },
            },
            AlertTargets: map[string]shared.AlertTarget{
                "incidunt": shared.AlertTarget{
                    AlertTargetArn: "atque",
                    RoleArn: "explicabo",
                },
                "minima": shared.AlertTarget{
                    AlertTargetArn: "nisi",
                    RoleArn: "fugit",
                },
                "sapiente": shared.AlertTarget{
                    AlertTargetArn: "consequuntur",
                    RoleArn: "ratione",
                },
            },
            Behaviors: []shared.Behavior{
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumNotInSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(578922),
                        ConsecutiveDatapointsToClear: sdk.Int64(543806),
                        DurationSeconds: sdk.Int64(92260),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumMedium,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("eveniet"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "veritatis",
                                "esse",
                                "quod",
                                "nam",
                            },
                            Count: sdk.Int64(877131),
                            Number: sdk.Float64(3990.25),
                            Numbers: []float64{
                                9040.45,
                            },
                            Ports: []int64{
                                690025,
                                473221,
                            },
                            Strings: []string{
                                "occaecati",
                                "minima",
                                "distinctio",
                            },
                        },
                    },
                    Metric: sdk.String("eligendi"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "sit",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                    Name: "Chad Runolfsson DDS",
                    SuppressAlerts: sdk.Bool(false),
                },
            },
            SecurityProfileDescription: sdk.String("quaerat"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consectetur",
                    Value: sdk.String("esse"),
                },
                shared.Tag{
                    Key: "blanditiis",
                    Value: sdk.String("provident"),
                },
                shared.Tag{
                    Key: "a",
                    Value: sdk.String("nulla"),
                },
                shared.Tag{
                    Key: "quas",
                    Value: sdk.String("esse"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("quia"),
        SecurityProfileName: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSecurityProfileResponse != nil {
        // handle response
    }
}
```

## CreateStream

<p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>

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
    res, err := s.SDK.CreateStream(ctx, operations.CreateStreamRequest{
        RequestBody: operations.CreateStreamRequestBody{
            Description: sdk.String("asperiores"),
            Files: []shared.StreamFile{
                shared.StreamFile{
                    FileID: sdk.Int64(85001),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("consequuntur"),
                        Key: sdk.String("quasi"),
                        Version: sdk.String("similique"),
                    },
                },
                shared.StreamFile{
                    FileID: sdk.Int64(633608),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("aliquid"),
                        Key: sdk.String("tenetur"),
                        Version: sdk.String("quae"),
                    },
                },
                shared.StreamFile{
                    FileID: sdk.Int64(936747),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("vel"),
                        Key: sdk.String("in"),
                        Version: sdk.String("eius"),
                    },
                },
                shared.StreamFile{
                    FileID: sdk.Int64(727697),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("illum"),
                        Key: sdk.String("soluta"),
                        Version: sdk.String("accusantium"),
                    },
                },
            },
            RoleArn: "aliquam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: sdk.String("ullam"),
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: sdk.String("ullam"),
                },
                shared.Tag{
                    Key: "nisi",
                    Value: sdk.String("aut"),
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: sdk.String("qui"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
        StreamID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamResponse != nil {
        // handle response
    }
}
```

## CreateThing

<p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateThing(ctx, operations.CreateThingRequest{
        RequestBody: operations.CreateThingRequestBody{
            AttributePayload: &operations.CreateThingRequestBodyAttributePayload{
                Attributes: map[string]string{
                    "at": "et",
                },
                Merge: sdk.Bool(false),
            },
            BillingGroupName: sdk.String("voluptate"),
            ThingTypeName: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        ThingName: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateThingResponse != nil {
        // handle response
    }
}
```

## CreateThingGroup

<p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>

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
    res, err := s.SDK.CreateThingGroup(ctx, operations.CreateThingGroupRequest{
        RequestBody: operations.CreateThingGroupRequestBody{
            ParentGroupName: sdk.String("aut"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eum",
                    Value: sdk.String("mollitia"),
                },
                shared.Tag{
                    Key: "ab",
                    Value: sdk.String("corrupti"),
                },
                shared.Tag{
                    Key: "non",
                    Value: sdk.String("voluptatem"),
                },
            },
            ThingGroupProperties: &operations.CreateThingGroupRequestBodyThingGroupProperties{
                AttributePayload: &shared.AttributePayload{
                    Attributes: map[string]string{
                        "occaecati": "numquam",
                    },
                    Merge: sdk.Bool(false),
                },
                ThingGroupDescription: sdk.String("impedit"),
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
        ThingGroupName: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateThingGroupResponse != nil {
        // handle response
    }
}
```

## CreateThingType

<p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>

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
    res, err := s.SDK.CreateThingType(ctx, operations.CreateThingTypeRequest{
        RequestBody: operations.CreateThingTypeRequestBody{
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptas",
                    Value: sdk.String("asperiores"),
                },
                shared.Tag{
                    Key: "aperiam",
                    Value: sdk.String("ea"),
                },
                shared.Tag{
                    Key: "quaerat",
                    Value: sdk.String("consequuntur"),
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: sdk.String("officia"),
                },
            },
            ThingTypeProperties: &operations.CreateThingTypeRequestBodyThingTypeProperties{
                SearchableAttributes: []string{
                    "dignissimos",
                    "officia",
                    "asperiores",
                    "nemo",
                },
                ThingTypeDescription: sdk.String("quae"),
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("fuga"),
        ThingTypeName: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateThingTypeResponse != nil {
        // handle response
    }
}
```

## CreateTopicRule

<p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>

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
    res, err := s.SDK.CreateTopicRule(ctx, operations.CreateTopicRuleRequest{
        RequestBody: operations.CreateTopicRuleRequestBody{
            TopicRulePayload: operations.CreateTopicRuleRequestBodyTopicRulePayload{
                Actions: []shared.Action{
                    shared.Action{
                        CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                            AlarmName: "velit",
                            RoleArn: "culpa",
                            StateReason: "est",
                            StateValue: "recusandae",
                        },
                        CloudwatchLogs: &shared.CloudwatchLogsAction{
                            BatchMode: sdk.Bool(false),
                            LogGroupName: "totam",
                            RoleArn: "fugiat",
                        },
                        CloudwatchMetric: &shared.CloudwatchMetricAction{
                            MetricName: "vel",
                            MetricNamespace: "ducimus",
                            MetricTimestamp: sdk.String("quos"),
                            MetricUnit: "vel",
                            MetricValue: "labore",
                            RoleArn: "possimus",
                        },
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "facilis",
                            HashKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                            HashKeyValue: "commodi",
                            Operation: sdk.String("in"),
                            PayloadField: sdk.String("corporis"),
                            RangeKeyField: sdk.String("reiciendis"),
                            RangeKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                            RangeKeyValue: sdk.String("nemo"),
                            RoleArn: "recusandae",
                            TableName: "aliquid",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            PutItem: shared.PutItemInput{
                                TableName: "aperiam",
                            },
                            RoleArn: "cum",
                        },
                        Elasticsearch: &shared.ElasticsearchAction{
                            Endpoint: "consectetur",
                            ID: "75ed4f6f-bee4-41f3-b317-fe35b60eb1ea",
                            Index: "tempora",
                            RoleArn: "aspernatur",
                            Type: "voluptas",
                        },
                        Firehose: &shared.FirehoseAction{
                            BatchMode: sdk.Bool(false),
                            DeliveryStreamName: "voluptas",
                            RoleArn: "voluptas",
                            Separator: sdk.String("minima"),
                        },
                        HTTP: &shared.HTTPAction{
                            Auth: &shared.HTTPAuthorization{
                                Sigv4: &shared.SigV4Authorization{
                                    RoleArn: "nobis",
                                    ServiceName: "dolorum",
                                    SigningRegion: "adipisci",
                                },
                            },
                            ConfirmationURL: sdk.String("minus"),
                            Headers: []shared.HTTPActionHeader{
                                shared.HTTPActionHeader{
                                    Key: "blanditiis",
                                    Value: "in",
                                },
                            },
                            URL: "dolore",
                        },
                        IotAnalytics: &shared.IotAnalyticsAction{
                            BatchMode: sdk.Bool(false),
                            ChannelArn: sdk.String("aliquam"),
                            ChannelName: sdk.String("officiis"),
                            RoleArn: sdk.String("temporibus"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            BatchMode: sdk.Bool(false),
                            InputName: "ullam",
                            MessageID: sdk.String("adipisci"),
                            RoleArn: "cum",
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("quas"),
                                    EntryID: sdk.String("hic"),
                                    PropertyAlias: sdk.String("nesciunt"),
                                    PropertyID: sdk.String("culpa"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("pariatur"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("totam"),
                                                TimeInSeconds: "hic",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("exercitationem"),
                                                DoubleValue: sdk.String("nobis"),
                                                IntegerValue: sdk.String("sit"),
                                                StringValue: sdk.String("rerum"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("sed"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("reiciendis"),
                                                TimeInSeconds: "explicabo",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("asperiores"),
                                                DoubleValue: sdk.String("facilis"),
                                                IntegerValue: sdk.String("voluptate"),
                                                StringValue: sdk.String("expedita"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("ab"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("iste"),
                                                TimeInSeconds: "dolore",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("laborum"),
                                                DoubleValue: sdk.String("sed"),
                                                IntegerValue: sdk.String("in"),
                                                StringValue: sdk.String("commodi"),
                                            },
                                        },
                                    },
                                },
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("quidem"),
                                    EntryID: sdk.String("explicabo"),
                                    PropertyAlias: sdk.String("voluptas"),
                                    PropertyID: sdk.String("unde"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("suscipit"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("sapiente"),
                                                TimeInSeconds: "debitis",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("illo"),
                                                DoubleValue: sdk.String("reiciendis"),
                                                IntegerValue: sdk.String("perferendis"),
                                                StringValue: sdk.String("corrupti"),
                                            },
                                        },
                                    },
                                },
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("maiores"),
                                    EntryID: sdk.String("incidunt"),
                                    PropertyAlias: sdk.String("sed"),
                                    PropertyID: sdk.String("provident"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("necessitatibus"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("ipsum"),
                                                TimeInSeconds: "ea",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("occaecati"),
                                                DoubleValue: sdk.String("quos"),
                                                IntegerValue: sdk.String("voluptatibus"),
                                                StringValue: sdk.String("tempora"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("tempora"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("voluptate"),
                                                TimeInSeconds: "reiciendis",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("ex"),
                                                DoubleValue: sdk.String("sit"),
                                                IntegerValue: sdk.String("non"),
                                                StringValue: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                },
                            },
                            RoleArn: "praesentium",
                        },
                        Kafka: &shared.KafkaAction{
                            ClientProperties: map[string]string{
                                "quaerat": "incidunt",
                                "ipsam": "debitis",
                                "rem": "sit",
                            },
                            DestinationArn: "nobis",
                            Key: sdk.String("error"),
                            Partition: sdk.String("veniam"),
                            Topic: "minima",
                        },
                        Kinesis: &shared.KinesisAction{
                            PartitionKey: sdk.String("recusandae"),
                            RoleArn: "reiciendis",
                            StreamName: "nulla",
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "magni",
                        },
                        Location: &shared.LocationAction{
                            DeviceID: "aperiam",
                            Latitude: "saepe",
                            Longitude: "numquam",
                            RoleArn: "veniam",
                            Timestamp: &shared.LocationTimestamp{
                                Unit: sdk.String("in"),
                                Value: "officiis",
                            },
                            TrackerName: "beatae",
                        },
                        OpenSearch: &shared.OpenSearchAction{
                            Endpoint: "laudantium",
                            ID: "58b6a89f-be3a-45aa-8e48-24d0ab407508",
                            Index: "quas",
                            RoleArn: "repudiandae",
                            Type: "corporis",
                        },
                        Republish: &shared.RepublishAction{
                            Headers: &shared.MqttHeaders{
                                ContentType: sdk.String("et"),
                                CorrelationData: sdk.String("blanditiis"),
                                MessageExpiry: sdk.String("ex"),
                                PayloadFormatIndicator: sdk.String("sed"),
                                ResponseTopic: sdk.String("sit"),
                                UserProperties: []shared.UserProperty{
                                    shared.UserProperty{
                                        Key: "nostrum",
                                        Value: "saepe",
                                    },
                                    shared.UserProperty{
                                        Key: "error",
                                        Value: "consequatur",
                                    },
                                },
                            },
                            Qos: sdk.Int64(279068),
                            RoleArn: "reiciendis",
                            Topic: "dolorem",
                        },
                        S3: &shared.S3Action{
                            BucketName: "harum",
                            CannedACL: shared.CannedAccessControlListEnumPrivate.ToPointer(),
                            Key: "architecto",
                            RoleArn: "occaecati",
                        },
                        Salesforce: &shared.SalesforceAction{
                            Token: "labore",
                            URL: "quidem",
                        },
                        Sns: &shared.SnsAction{
                            MessageFormat: shared.MessageFormatEnumJSON.ToPointer(),
                            RoleArn: "laborum",
                            TargetArn: "nam",
                        },
                        Sqs: &shared.SqsAction{
                            QueueURL: "tenetur",
                            RoleArn: "laboriosam",
                            UseBase64: sdk.Bool(false),
                        },
                        StepFunctions: &shared.StepFunctionsAction{
                            ExecutionNamePrefix: sdk.String("alias"),
                            RoleArn: "amet",
                            StateMachineName: "deserunt",
                        },
                        Timestream: &shared.TimestreamAction{
                            DatabaseName: "voluptate",
                            Dimensions: []shared.TimestreamDimension{
                                shared.TimestreamDimension{
                                    Name: "Rene Skiles",
                                    Value: "perferendis",
                                },
                                shared.TimestreamDimension{
                                    Name: "Rickey Kiehn",
                                    Value: "praesentium",
                                },
                                shared.TimestreamDimension{
                                    Name: "Floyd Barrows",
                                    Value: "quasi",
                                },
                            },
                            RoleArn: "atque",
                            TableName: "reprehenderit",
                            Timestamp: &shared.TimestreamTimestamp{
                                Unit: "asperiores",
                                Value: "totam",
                            },
                        },
                    },
                    shared.Action{
                        CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                            AlarmName: "suscipit",
                            RoleArn: "quidem",
                            StateReason: "maxime",
                            StateValue: "et",
                        },
                        CloudwatchLogs: &shared.CloudwatchLogsAction{
                            BatchMode: sdk.Bool(false),
                            LogGroupName: "esse",
                            RoleArn: "amet",
                        },
                        CloudwatchMetric: &shared.CloudwatchMetricAction{
                            MetricName: "assumenda",
                            MetricNamespace: "ea",
                            MetricTimestamp: sdk.String("atque"),
                            MetricUnit: "error",
                            MetricValue: "officiis",
                            RoleArn: "officiis",
                        },
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "accusamus",
                            HashKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                            HashKeyValue: "minima",
                            Operation: sdk.String("aspernatur"),
                            PayloadField: sdk.String("ex"),
                            RangeKeyField: sdk.String("maiores"),
                            RangeKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                            RangeKeyValue: sdk.String("at"),
                            RoleArn: "error",
                            TableName: "blanditiis",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            PutItem: shared.PutItemInput{
                                TableName: "suscipit",
                            },
                            RoleArn: "repudiandae",
                        },
                        Elasticsearch: &shared.ElasticsearchAction{
                            Endpoint: "atque",
                            ID: "81ead4f0-e101-4256-bf94-e29e973e922a",
                            Index: "quis",
                            RoleArn: "reprehenderit",
                            Type: "error",
                        },
                        Firehose: &shared.FirehoseAction{
                            BatchMode: sdk.Bool(false),
                            DeliveryStreamName: "illo",
                            RoleArn: "corporis",
                            Separator: sdk.String("quidem"),
                        },
                        HTTP: &shared.HTTPAction{
                            Auth: &shared.HTTPAuthorization{
                                Sigv4: &shared.SigV4Authorization{
                                    RoleArn: "eveniet",
                                    ServiceName: "non",
                                    SigningRegion: "vero",
                                },
                            },
                            ConfirmationURL: sdk.String("doloremque"),
                            Headers: []shared.HTTPActionHeader{
                                shared.HTTPActionHeader{
                                    Key: "ipsa",
                                    Value: "totam",
                                },
                                shared.HTTPActionHeader{
                                    Key: "quae",
                                    Value: "molestiae",
                                },
                            },
                            URL: "eveniet",
                        },
                        IotAnalytics: &shared.IotAnalyticsAction{
                            BatchMode: sdk.Bool(false),
                            ChannelArn: sdk.String("qui"),
                            ChannelName: sdk.String("cum"),
                            RoleArn: sdk.String("iure"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            BatchMode: sdk.Bool(false),
                            InputName: "necessitatibus",
                            MessageID: sdk.String("ratione"),
                            RoleArn: "laborum",
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("voluptatum"),
                                    EntryID: sdk.String("rem"),
                                    PropertyAlias: sdk.String("aliquam"),
                                    PropertyID: sdk.String("ad"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("alias"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("corporis"),
                                                TimeInSeconds: "perspiciatis",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("nihil"),
                                                DoubleValue: sdk.String("mollitia"),
                                                IntegerValue: sdk.String("voluptas"),
                                                StringValue: sdk.String("alias"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("maiores"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("reiciendis"),
                                                TimeInSeconds: "dolores",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("id"),
                                                DoubleValue: sdk.String("minima"),
                                                IntegerValue: sdk.String("dolore"),
                                                StringValue: sdk.String("dolorum"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("nesciunt"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("quae"),
                                                TimeInSeconds: "recusandae",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("omnis"),
                                                DoubleValue: sdk.String("quaerat"),
                                                IntegerValue: sdk.String("molestiae"),
                                                StringValue: sdk.String("ex"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("ut"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("culpa"),
                                                TimeInSeconds: "adipisci",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("debitis"),
                                                DoubleValue: sdk.String("laudantium"),
                                                IntegerValue: sdk.String("eum"),
                                                StringValue: sdk.String("nemo"),
                                            },
                                        },
                                    },
                                },
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("recusandae"),
                                    EntryID: sdk.String("esse"),
                                    PropertyAlias: sdk.String("provident"),
                                    PropertyID: sdk.String("quis"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("reiciendis"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("provident"),
                                                TimeInSeconds: "aspernatur",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("ullam"),
                                                DoubleValue: sdk.String("quasi"),
                                                IntegerValue: sdk.String("animi"),
                                                StringValue: sdk.String("nostrum"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("mollitia"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("provident"),
                                                TimeInSeconds: "possimus",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("animi"),
                                                DoubleValue: sdk.String("ex"),
                                                IntegerValue: sdk.String("aliquid"),
                                                StringValue: sdk.String("accusantium"),
                                            },
                                        },
                                    },
                                },
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("repellat"),
                                    EntryID: sdk.String("doloribus"),
                                    PropertyAlias: sdk.String("ullam"),
                                    PropertyID: sdk.String("in"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("earum"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("officia"),
                                                TimeInSeconds: "laborum",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("placeat"),
                                                DoubleValue: sdk.String("modi"),
                                                IntegerValue: sdk.String("voluptatibus"),
                                                StringValue: sdk.String("molestias"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("officiis"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("sapiente"),
                                                TimeInSeconds: "cumque",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("vitae"),
                                                DoubleValue: sdk.String("rerum"),
                                                IntegerValue: sdk.String("tempora"),
                                                StringValue: sdk.String("quis"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("inventore"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("fugit"),
                                                TimeInSeconds: "cumque",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("quae"),
                                                DoubleValue: sdk.String("perferendis"),
                                                IntegerValue: sdk.String("velit"),
                                                StringValue: sdk.String("aspernatur"),
                                            },
                                        },
                                    },
                                },
                            },
                            RoleArn: "eum",
                        },
                        Kafka: &shared.KafkaAction{
                            ClientProperties: map[string]string{
                                "rem": "at",
                                "impedit": "eos",
                            },
                            DestinationArn: "sapiente",
                            Key: sdk.String("eum"),
                            Partition: sdk.String("dicta"),
                            Topic: "minima",
                        },
                        Kinesis: &shared.KinesisAction{
                            PartitionKey: sdk.String("beatae"),
                            RoleArn: "cupiditate",
                            StreamName: "provident",
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "earum",
                        },
                        Location: &shared.LocationAction{
                            DeviceID: "soluta",
                            Latitude: "hic",
                            Longitude: "illum",
                            RoleArn: "eaque",
                            Timestamp: &shared.LocationTimestamp{
                                Unit: sdk.String("earum"),
                                Value: "perspiciatis",
                            },
                            TrackerName: "maiores",
                        },
                        OpenSearch: &shared.OpenSearchAction{
                            Endpoint: "debitis",
                            ID: "6c632ca3-aed0-4117-9963-12fde0477177",
                            Index: "praesentium",
                            RoleArn: "maiores",
                            Type: "reiciendis",
                        },
                        Republish: &shared.RepublishAction{
                            Headers: &shared.MqttHeaders{
                                ContentType: sdk.String("vel"),
                                CorrelationData: sdk.String("architecto"),
                                MessageExpiry: sdk.String("fugiat"),
                                PayloadFormatIndicator: sdk.String("doloremque"),
                                ResponseTopic: sdk.String("dicta"),
                                UserProperties: []shared.UserProperty{
                                    shared.UserProperty{
                                        Key: "tempora",
                                        Value: "esse",
                                    },
                                    shared.UserProperty{
                                        Key: "ex",
                                        Value: "consectetur",
                                    },
                                },
                            },
                            Qos: sdk.Int64(399812),
                            RoleArn: "ipsa",
                            Topic: "laborum",
                        },
                        S3: &shared.S3Action{
                            BucketName: "sunt",
                            CannedACL: shared.CannedAccessControlListEnumPublicReadWrite.ToPointer(),
                            Key: "fugiat",
                            RoleArn: "expedita",
                        },
                        Salesforce: &shared.SalesforceAction{
                            Token: "aliquid",
                            URL: "officia",
                        },
                        Sns: &shared.SnsAction{
                            MessageFormat: shared.MessageFormatEnumRaw.ToPointer(),
                            RoleArn: "aliquid",
                            TargetArn: "perferendis",
                        },
                        Sqs: &shared.SqsAction{
                            QueueURL: "eum",
                            RoleArn: "voluptas",
                            UseBase64: sdk.Bool(false),
                        },
                        StepFunctions: &shared.StepFunctionsAction{
                            ExecutionNamePrefix: sdk.String("iste"),
                            RoleArn: "id",
                            StateMachineName: "ab",
                        },
                        Timestream: &shared.TimestreamAction{
                            DatabaseName: "error",
                            Dimensions: []shared.TimestreamDimension{
                                shared.TimestreamDimension{
                                    Name: "Shaun Osinski",
                                    Value: "deleniti",
                                },
                                shared.TimestreamDimension{
                                    Name: "Gloria Skiles",
                                    Value: "ex",
                                },
                                shared.TimestreamDimension{
                                    Name: "Ms. Geraldine Ratke",
                                    Value: "aliquid",
                                },
                                shared.TimestreamDimension{
                                    Name: "Miss Nora Moen",
                                    Value: "culpa",
                                },
                            },
                            RoleArn: "voluptatem",
                            TableName: "sapiente",
                            Timestamp: &shared.TimestreamTimestamp{
                                Unit: "officiis",
                                Value: "architecto",
                            },
                        },
                    },
                },
                AwsIotSQLVersion: sdk.String("fuga"),
                Description: sdk.String("pariatur"),
                ErrorAction: &shared.Action{
                    CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                        AlarmName: "debitis",
                        RoleArn: "voluptatem",
                        StateReason: "alias",
                        StateValue: "deleniti",
                    },
                    CloudwatchLogs: &shared.CloudwatchLogsAction{
                        BatchMode: sdk.Bool(false),
                        LogGroupName: "earum",
                        RoleArn: "ex",
                    },
                    CloudwatchMetric: &shared.CloudwatchMetricAction{
                        MetricName: "sapiente",
                        MetricNamespace: "rem",
                        MetricTimestamp: sdk.String("minus"),
                        MetricUnit: "nemo",
                        MetricValue: "asperiores",
                        RoleArn: "ratione",
                    },
                    DynamoDB: &shared.DynamoDBAction{
                        HashKeyField: "ullam",
                        HashKeyType: shared.DynamoKeyTypeEnumString.ToPointer(),
                        HashKeyValue: "illum",
                        Operation: sdk.String("totam"),
                        PayloadField: sdk.String("impedit"),
                        RangeKeyField: sdk.String("quibusdam"),
                        RangeKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                        RangeKeyValue: sdk.String("ipsam"),
                        RoleArn: "culpa",
                        TableName: "dolor",
                    },
                    DynamoDBv2: &shared.DynamoDBv2Action{
                        PutItem: shared.PutItemInput{
                            TableName: "aliquam",
                        },
                        RoleArn: "inventore",
                    },
                    Elasticsearch: &shared.ElasticsearchAction{
                        Endpoint: "deleniti",
                        ID: "14301042-1813-4d52-88ec-e7e253b66845",
                        Index: "ab",
                        RoleArn: "porro",
                        Type: "autem",
                    },
                    Firehose: &shared.FirehoseAction{
                        BatchMode: sdk.Bool(false),
                        DeliveryStreamName: "nobis",
                        RoleArn: "laboriosam",
                        Separator: sdk.String("recusandae"),
                    },
                    HTTP: &shared.HTTPAction{
                        Auth: &shared.HTTPAuthorization{
                            Sigv4: &shared.SigV4Authorization{
                                RoleArn: "consequuntur",
                                ServiceName: "voluptatem",
                                SigningRegion: "exercitationem",
                            },
                        },
                        ConfirmationURL: sdk.String("necessitatibus"),
                        Headers: []shared.HTTPActionHeader{
                            shared.HTTPActionHeader{
                                Key: "nisi",
                                Value: "at",
                            },
                        },
                        URL: "vero",
                    },
                    IotAnalytics: &shared.IotAnalyticsAction{
                        BatchMode: sdk.Bool(false),
                        ChannelArn: sdk.String("est"),
                        ChannelName: sdk.String("harum"),
                        RoleArn: sdk.String("sequi"),
                    },
                    IotEvents: &shared.IotEventsAction{
                        BatchMode: sdk.Bool(false),
                        InputName: "doloribus",
                        MessageID: sdk.String("repudiandae"),
                        RoleArn: "optio",
                    },
                    IotSiteWise: &shared.IotSiteWiseAction{
                        PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                            shared.PutAssetPropertyValueEntry{
                                AssetID: sdk.String("nemo"),
                                EntryID: sdk.String("voluptate"),
                                PropertyAlias: sdk.String("blanditiis"),
                                PropertyID: sdk.String("officia"),
                                PropertyValues: []shared.AssetPropertyValue{
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("numquam"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("nemo"),
                                            TimeInSeconds: "quos",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("eius"),
                                            DoubleValue: sdk.String("aspernatur"),
                                            IntegerValue: sdk.String("ducimus"),
                                            StringValue: sdk.String("nesciunt"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("fuga"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("laudantium"),
                                            TimeInSeconds: "incidunt",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("quasi"),
                                            DoubleValue: sdk.String("rem"),
                                            IntegerValue: sdk.String("fugiat"),
                                            StringValue: sdk.String("dicta"),
                                        },
                                    },
                                },
                            },
                            shared.PutAssetPropertyValueEntry{
                                AssetID: sdk.String("nisi"),
                                EntryID: sdk.String("consequuntur"),
                                PropertyAlias: sdk.String("consectetur"),
                                PropertyID: sdk.String("aperiam"),
                                PropertyValues: []shared.AssetPropertyValue{
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("reiciendis"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("soluta"),
                                            TimeInSeconds: "alias",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("omnis"),
                                            DoubleValue: sdk.String("eos"),
                                            IntegerValue: sdk.String("occaecati"),
                                            StringValue: sdk.String("iste"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("magni"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("inventore"),
                                            TimeInSeconds: "fuga",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("accusamus"),
                                            DoubleValue: sdk.String("voluptatibus"),
                                            IntegerValue: sdk.String("distinctio"),
                                            StringValue: sdk.String("omnis"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("delectus"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("minima"),
                                            TimeInSeconds: "praesentium",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("maxime"),
                                            DoubleValue: sdk.String("magnam"),
                                            IntegerValue: sdk.String("temporibus"),
                                            StringValue: sdk.String("quos"),
                                        },
                                    },
                                },
                            },
                            shared.PutAssetPropertyValueEntry{
                                AssetID: sdk.String("commodi"),
                                EntryID: sdk.String("itaque"),
                                PropertyAlias: sdk.String("commodi"),
                                PropertyID: sdk.String("totam"),
                                PropertyValues: []shared.AssetPropertyValue{
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("modi"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("nam"),
                                            TimeInSeconds: "vero",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("voluptatem"),
                                            DoubleValue: sdk.String("ipsam"),
                                            IntegerValue: sdk.String("vel"),
                                            StringValue: sdk.String("alias"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("quasi"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("non"),
                                            TimeInSeconds: "maiores",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("enim"),
                                            DoubleValue: sdk.String("sint"),
                                            IntegerValue: sdk.String("nulla"),
                                            StringValue: sdk.String("deserunt"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("esse"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("nemo"),
                                            TimeInSeconds: "reprehenderit",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("est"),
                                            DoubleValue: sdk.String("quis"),
                                            IntegerValue: sdk.String("sint"),
                                            StringValue: sdk.String("accusamus"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("impedit"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("hic"),
                                            TimeInSeconds: "necessitatibus",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("asperiores"),
                                            DoubleValue: sdk.String("ex"),
                                            IntegerValue: sdk.String("voluptas"),
                                            StringValue: sdk.String("debitis"),
                                        },
                                    },
                                },
                            },
                        },
                        RoleArn: "delectus",
                    },
                    Kafka: &shared.KafkaAction{
                        ClientProperties: map[string]string{
                            "minus": "fuga",
                        },
                        DestinationArn: "laborum",
                        Key: sdk.String("consectetur"),
                        Partition: sdk.String("velit"),
                        Topic: "atque",
                    },
                    Kinesis: &shared.KinesisAction{
                        PartitionKey: sdk.String("ipsum"),
                        RoleArn: "impedit",
                        StreamName: "magni",
                    },
                    Lambda: &shared.LambdaAction{
                        FunctionArn: "soluta",
                    },
                    Location: &shared.LocationAction{
                        DeviceID: "repudiandae",
                        Latitude: "nam",
                        Longitude: "dolore",
                        RoleArn: "iusto",
                        Timestamp: &shared.LocationTimestamp{
                            Unit: sdk.String("voluptate"),
                            Value: "sequi",
                        },
                        TrackerName: "dignissimos",
                    },
                    OpenSearch: &shared.OpenSearchAction{
                        Endpoint: "neque",
                        ID: "c8d72f64-d1db-41f2-8431-0661e96349e1",
                        Index: "impedit",
                        RoleArn: "voluptatibus",
                        Type: "iste",
                    },
                    Republish: &shared.RepublishAction{
                        Headers: &shared.MqttHeaders{
                            ContentType: sdk.String("itaque"),
                            CorrelationData: sdk.String("alias"),
                            MessageExpiry: sdk.String("nisi"),
                            PayloadFormatIndicator: sdk.String("itaque"),
                            ResponseTopic: sdk.String("velit"),
                            UserProperties: []shared.UserProperty{
                                shared.UserProperty{
                                    Key: "non",
                                    Value: "dolor",
                                },
                                shared.UserProperty{
                                    Key: "iusto",
                                    Value: "sit",
                                },
                                shared.UserProperty{
                                    Key: "doloremque",
                                    Value: "consequatur",
                                },
                            },
                        },
                        Qos: sdk.Int64(639705),
                        RoleArn: "recusandae",
                        Topic: "ea",
                    },
                    S3: &shared.S3Action{
                        BucketName: "quidem",
                        CannedACL: shared.CannedAccessControlListEnumAwsExecRead.ToPointer(),
                        Key: "facilis",
                        RoleArn: "placeat",
                    },
                    Salesforce: &shared.SalesforceAction{
                        Token: "perspiciatis",
                        URL: "expedita",
                    },
                    Sns: &shared.SnsAction{
                        MessageFormat: shared.MessageFormatEnumJSON.ToPointer(),
                        RoleArn: "a",
                        TargetArn: "voluptate",
                    },
                    Sqs: &shared.SqsAction{
                        QueueURL: "ullam",
                        RoleArn: "unde",
                        UseBase64: sdk.Bool(false),
                    },
                    StepFunctions: &shared.StepFunctionsAction{
                        ExecutionNamePrefix: sdk.String("necessitatibus"),
                        RoleArn: "animi",
                        StateMachineName: "impedit",
                    },
                    Timestream: &shared.TimestreamAction{
                        DatabaseName: "ipsam",
                        Dimensions: []shared.TimestreamDimension{
                            shared.TimestreamDimension{
                                Name: "Jeremiah Koch PhD",
                                Value: "consectetur",
                            },
                            shared.TimestreamDimension{
                                Name: "Stephanie Effertz",
                                Value: "iste",
                            },
                        },
                        RoleArn: "ex",
                        TableName: "nemo",
                        Timestamp: &shared.TimestreamTimestamp{
                            Unit: "soluta",
                            Value: "libero",
                        },
                    },
                },
                RuleDisabled: sdk.Bool(false),
                SQL: sdk.String("rem"),
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quae"),
        RuleName: "quae",
        XAmzTagging: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTopicRuleDestination

<p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>

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
    res, err := s.SDK.CreateTopicRuleDestination(ctx, operations.CreateTopicRuleDestinationRequest{
        RequestBody: operations.CreateTopicRuleDestinationRequestBody{
            DestinationConfiguration: operations.CreateTopicRuleDestinationRequestBodyDestinationConfiguration{
                HTTPURLConfiguration: &shared.HTTPURLDestinationConfiguration{
                    ConfirmationURL: "neque",
                },
                VpcConfiguration: &shared.VpcDestinationConfiguration{
                    RoleArn: "exercitationem",
                    SecurityGroups: []string{
                        "et",
                        "ipsum",
                        "unde",
                        "nulla",
                    },
                    SubnetIds: []string{
                        "maxime",
                        "quia",
                        "quia",
                    },
                    VpcID: "nostrum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTopicRuleDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteAccountAuditConfiguration

<p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccountAuditConfiguration(ctx, operations.DeleteAccountAuditConfigurationRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("inventore"),
        DeleteScheduledAudits: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccountAuditConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteAuditSuppression

<p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>

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
    res, err := s.SDK.DeleteAuditSuppression(ctx, operations.DeleteAuditSuppressionRequest{
        RequestBody: operations.DeleteAuditSuppressionRequestBody{
            CheckName: "aperiam",
            ResourceIdentifier: operations.DeleteAuditSuppressionRequestBodyResourceIdentifier{
                Account: sdk.String("totam"),
                CaCertificateID: sdk.String("dolore"),
                ClientID: sdk.String("eligendi"),
                CognitoIdentityPoolID: sdk.String("distinctio"),
                DeviceCertificateArn: sdk.String("voluptatem"),
                DeviceCertificateID: sdk.String("autem"),
                IamRoleArn: sdk.String("esse"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("dolores"),
                    IssuerCertificateSubject: sdk.String("assumenda"),
                    IssuerID: sdk.String("beatae"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("est"),
                    PolicyVersionID: sdk.String("facere"),
                },
                RoleAliasArn: sdk.String("corrupti"),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAuditSuppressionResponse != nil {
        // handle response
    }
}
```

## DeleteAuthorizer

<p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAuthorizer(ctx, operations.DeleteAuthorizerRequest{
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        AuthorizerName: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAuthorizerResponse != nil {
        // handle response
    }
}
```

## DeleteBillingGroup

<p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBillingGroup(ctx, operations.DeleteBillingGroupRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        BillingGroupName: "expedita",
        ExpectedVersion: sdk.Int64(885208),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBillingGroupResponse != nil {
        // handle response
    }
}
```

## DeleteCACertificate

<p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCACertificate(ctx, operations.DeleteCACertificateRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("corporis"),
        CaCertificateID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCACertificateResponse != nil {
        // handle response
    }
}
```

## DeleteCertificate

<p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCertificate(ctx, operations.DeleteCertificateRequest{
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("quis"),
        CertificateID: "beatae",
        ForceDelete: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCustomMetric

<p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCustomMetric(ctx, operations.DeleteCustomMetricRequest{
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("numquam"),
        MetricName: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomMetricResponse != nil {
        // handle response
    }
}
```

## DeleteDimension

<p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDimension(ctx, operations.DeleteDimensionRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("qui"),
        Name: "Jaime McGlynn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDimensionResponse != nil {
        // handle response
    }
}
```

## DeleteDomainConfiguration

<p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDomainConfiguration(ctx, operations.DeleteDomainConfigurationRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("corporis"),
        DomainConfigurationName: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteDynamicThingGroup

<p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDynamicThingGroup(ctx, operations.DeleteDynamicThingGroupRequest{
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("labore"),
        ExpectedVersion: sdk.Int64(520875),
        ThingGroupName: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDynamicThingGroupResponse != nil {
        // handle response
    }
}
```

## DeleteFleetMetric

<p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFleetMetric(ctx, operations.DeleteFleetMetricRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("est"),
        ExpectedVersion: sdk.Int64(770873),
        MetricName: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteJob

<p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteJob(ctx, operations.DeleteJobRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        Force: sdk.Bool(false),
        JobID: "aperiam",
        NamespaceID: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteJobExecution

<p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteJobExecution(ctx, operations.DeleteJobExecutionRequest{
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        ExecutionNumber: 498180,
        Force: sdk.Bool(false),
        JobID: "voluptate",
        NamespaceID: sdk.String("pariatur"),
        ThingName: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteJobTemplate

Deletes the specified job template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteJobTemplate(ctx, operations.DeleteJobTemplateRequest{
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("placeat"),
        JobTemplateID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMitigationAction

<p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMitigationAction(ctx, operations.DeleteMitigationActionRequest{
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("vero"),
        ActionName: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMitigationActionResponse != nil {
        // handle response
    }
}
```

## DeleteOTAUpdate

<p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOTAUpdate(ctx, operations.DeleteOTAUpdateRequest{
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("dolores"),
        DeleteStream: sdk.Bool(false),
        ForceDeleteAWSJob: sdk.Bool(false),
        OtaUpdateID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOTAUpdateResponse != nil {
        // handle response
    }
}
```

## DeletePolicy

<p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePolicy(ctx, operations.DeletePolicyRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("maiores"),
        PolicyName: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePolicyVersion

<p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePolicyVersion(ctx, operations.DeletePolicyVersionRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("nemo"),
        PolicyName: "aliquam",
        PolicyVersionID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProvisioningTemplate

<p>Deletes a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProvisioningTemplate(ctx, operations.DeleteProvisioningTemplateRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("quas"),
        TemplateName: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProvisioningTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteProvisioningTemplateVersion

<p>Deletes a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProvisioningTemplateVersion(ctx, operations.DeleteProvisioningTemplateVersionRequest{
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("iste"),
        TemplateName: "assumenda",
        VersionID: 731634,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProvisioningTemplateVersionResponse != nil {
        // handle response
    }
}
```

## DeleteRegistrationCode

<p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRegistrationCode(ctx, operations.DeleteRegistrationCodeRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRegistrationCodeResponse != nil {
        // handle response
    }
}
```

## DeleteRoleAlias

<p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRoleAlias(ctx, operations.DeleteRoleAliasRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("libero"),
        RoleAlias: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRoleAliasResponse != nil {
        // handle response
    }
}
```

## DeleteScheduledAudit

<p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteScheduledAudit(ctx, operations.DeleteScheduledAuditRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("itaque"),
        ScheduledAuditName: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScheduledAuditResponse != nil {
        // handle response
    }
}
```

## DeleteSecurityProfile

<p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSecurityProfile(ctx, operations.DeleteSecurityProfileRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        ExpectedVersion: sdk.Int64(227362),
        SecurityProfileName: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSecurityProfileResponse != nil {
        // handle response
    }
}
```

## DeleteStream

<p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStream(ctx, operations.DeleteStreamRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        StreamID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStreamResponse != nil {
        // handle response
    }
}
```

## DeleteThing

<p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteThing(ctx, operations.DeleteThingRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("facere"),
        ExpectedVersion: sdk.Int64(706061),
        ThingName: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteThingResponse != nil {
        // handle response
    }
}
```

## DeleteThingGroup

<p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteThingGroup(ctx, operations.DeleteThingGroupRequest{
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("rerum"),
        ExpectedVersion: sdk.Int64(179795),
        ThingGroupName: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteThingGroupResponse != nil {
        // handle response
    }
}
```

## DeleteThingType

<p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteThingType(ctx, operations.DeleteThingTypeRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        ThingTypeName: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteThingTypeResponse != nil {
        // handle response
    }
}
```

## DeleteTopicRule

<p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTopicRule(ctx, operations.DeleteTopicRuleRequest{
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("vitae"),
        RuleName: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTopicRuleDestination

<p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTopicRuleDestination(ctx, operations.DeleteTopicRuleDestinationRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("iusto"),
        Arn: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTopicRuleDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteV2LoggingLevel

<p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteV2LoggingLevel(ctx, operations.DeleteV2LoggingLevelRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("tempore"),
        TargetName: "veniam",
        TargetType: operations.DeleteV2LoggingLevelTargetTypeEnumDefault,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeprecateThingType

<p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeprecateThingType(ctx, operations.DeprecateThingTypeRequest{
        RequestBody: operations.DeprecateThingTypeRequestBody{
            UndoDeprecate: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        ThingTypeName: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeprecateThingTypeResponse != nil {
        // handle response
    }
}
```

## DescribeAccountAuditConfiguration

<p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccountAuditConfiguration(ctx, operations.DescribeAccountAuditConfigurationRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountAuditConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeAuditFinding

<p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAuditFinding(ctx, operations.DescribeAuditFindingRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("nam"),
        FindingID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuditFindingResponse != nil {
        // handle response
    }
}
```

## DescribeAuditMitigationActionsTask

Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAuditMitigationActionsTask(ctx, operations.DescribeAuditMitigationActionsTaskRequest{
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("vero"),
        TaskID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuditMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## DescribeAuditSuppression

 Gets information about a Device Defender audit suppression. 

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
    res, err := s.SDK.DescribeAuditSuppression(ctx, operations.DescribeAuditSuppressionRequest{
        RequestBody: operations.DescribeAuditSuppressionRequestBody{
            CheckName: "repellendus",
            ResourceIdentifier: operations.DescribeAuditSuppressionRequestBodyResourceIdentifier{
                Account: sdk.String("iure"),
                CaCertificateID: sdk.String("dolorem"),
                ClientID: sdk.String("commodi"),
                CognitoIdentityPoolID: sdk.String("impedit"),
                DeviceCertificateArn: sdk.String("commodi"),
                DeviceCertificateID: sdk.String("aut"),
                IamRoleArn: sdk.String("voluptatem"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("ad"),
                    IssuerCertificateSubject: sdk.String("quae"),
                    IssuerID: sdk.String("amet"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("illum"),
                    PolicyVersionID: sdk.String("praesentium"),
                },
                RoleAliasArn: sdk.String("quidem"),
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuditSuppressionResponse != nil {
        // handle response
    }
}
```

## DescribeAuditTask

<p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAuditTask(ctx, operations.DescribeAuditTaskRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        TaskID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuditTaskResponse != nil {
        // handle response
    }
}
```

## DescribeAuthorizer

<p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAuthorizer(ctx, operations.DescribeAuthorizerRequest{
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("sint"),
        AuthorizerName: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAuthorizerResponse != nil {
        // handle response
    }
}
```

## DescribeBillingGroup

<p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBillingGroup(ctx, operations.DescribeBillingGroupRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("sunt"),
        BillingGroupName: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBillingGroupResponse != nil {
        // handle response
    }
}
```

## DescribeCACertificate

<p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCACertificate(ctx, operations.DescribeCACertificateRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("minus"),
        CaCertificateID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCACertificateResponse != nil {
        // handle response
    }
}
```

## DescribeCertificate

<p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCertificate(ctx, operations.DescribeCertificateRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("repellat"),
        CertificateID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificateResponse != nil {
        // handle response
    }
}
```

## DescribeCustomMetric

<p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomMetric(ctx, operations.DescribeCustomMetricRequest{
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        MetricName: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomMetricResponse != nil {
        // handle response
    }
}
```

## DescribeDefaultAuthorizer

<p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDefaultAuthorizer(ctx, operations.DescribeDefaultAuthorizerRequest{
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDefaultAuthorizerResponse != nil {
        // handle response
    }
}
```

## DescribeDetectMitigationActionsTask

<p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDetectMitigationActionsTask(ctx, operations.DescribeDetectMitigationActionsTaskRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        TaskID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDetectMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## DescribeDimension

<p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDimension(ctx, operations.DescribeDimensionRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("hic"),
        Name: "Toby Friesen",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDimensionResponse != nil {
        // handle response
    }
}
```

## DescribeDomainConfiguration

<p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDomainConfiguration(ctx, operations.DescribeDomainConfigurationRequest{
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        DomainConfigurationName: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDomainConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeEndpoint

<p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEndpoint(ctx, operations.DescribeEndpointRequest{
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("similique"),
        EndpointType: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointResponse != nil {
        // handle response
    }
}
```

## DescribeEventConfigurations

<p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEventConfigurations(ctx, operations.DescribeEventConfigurationsRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventConfigurationsResponse != nil {
        // handle response
    }
}
```

## DescribeFleetMetric

<p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFleetMetric(ctx, operations.DescribeFleetMetricRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("ab"),
        MetricName: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFleetMetricResponse != nil {
        // handle response
    }
}
```

## DescribeIndex

<p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeIndex(ctx, operations.DescribeIndexRequest{
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        IndexName: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIndexResponse != nil {
        // handle response
    }
}
```

## DescribeJob

<p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJob(ctx, operations.DescribeJobRequest{
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("sunt"),
        JobID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobResponse != nil {
        // handle response
    }
}
```

## DescribeJobExecution

<p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobExecution(ctx, operations.DescribeJobExecutionRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        ExecutionNumber: sdk.Int64(5310),
        JobID: "rem",
        ThingName: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobExecutionResponse != nil {
        // handle response
    }
}
```

## DescribeJobTemplate

Returns information about a job template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeJobTemplate(ctx, operations.DescribeJobTemplateRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("saepe"),
        JobTemplateID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobTemplateResponse != nil {
        // handle response
    }
}
```

## DescribeManagedJobTemplate

View details of a managed job template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeManagedJobTemplate(ctx, operations.DescribeManagedJobTemplateRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        TemplateName: "hic",
        TemplateVersion: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeManagedJobTemplateResponse != nil {
        // handle response
    }
}
```

## DescribeMitigationAction

<p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMitigationAction(ctx, operations.DescribeMitigationActionRequest{
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("beatae"),
        ActionName: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMitigationActionResponse != nil {
        // handle response
    }
}
```

## DescribeProvisioningTemplate

<p>Returns information about a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisioningTemplate(ctx, operations.DescribeProvisioningTemplateRequest{
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("totam"),
        TemplateName: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisioningTemplateResponse != nil {
        // handle response
    }
}
```

## DescribeProvisioningTemplateVersion

<p>Returns information about a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProvisioningTemplateVersion(ctx, operations.DescribeProvisioningTemplateVersionRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        TemplateName: "repellat",
        VersionID: 861123,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProvisioningTemplateVersionResponse != nil {
        // handle response
    }
}
```

## DescribeRoleAlias

<p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRoleAlias(ctx, operations.DescribeRoleAliasRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        RoleAlias: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRoleAliasResponse != nil {
        // handle response
    }
}
```

## DescribeScheduledAudit

<p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeScheduledAudit(ctx, operations.DescribeScheduledAuditRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        ScheduledAuditName: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeScheduledAuditResponse != nil {
        // handle response
    }
}
```

## DescribeSecurityProfile

<p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSecurityProfile(ctx, operations.DescribeSecurityProfileRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("rem"),
        SecurityProfileName: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSecurityProfileResponse != nil {
        // handle response
    }
}
```

## DescribeStream

<p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStream(ctx, operations.DescribeStreamRequest{
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("ullam"),
        StreamID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStreamResponse != nil {
        // handle response
    }
}
```

## DescribeThing

<p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeThing(ctx, operations.DescribeThingRequest{
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("vero"),
        ThingName: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeThingResponse != nil {
        // handle response
    }
}
```

## DescribeThingGroup

<p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeThingGroup(ctx, operations.DescribeThingGroupRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("sint"),
        ThingGroupName: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeThingGroupResponse != nil {
        // handle response
    }
}
```

## DescribeThingRegistrationTask

<p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeThingRegistrationTask(ctx, operations.DescribeThingRegistrationTaskRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("neque"),
        TaskID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeThingRegistrationTaskResponse != nil {
        // handle response
    }
}
```

## DescribeThingType

<p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeThingType(ctx, operations.DescribeThingTypeRequest{
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ThingTypeName: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeThingTypeResponse != nil {
        // handle response
    }
}
```

## DetachPolicy

<p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DetachPolicy(ctx, operations.DetachPolicyRequest{
        RequestBody: operations.DetachPolicyRequestBody{
            Target: "maiores",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("quos"),
        PolicyName: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~DetachPrincipalPolicy~~

<p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DetachPrincipalPolicy(ctx, operations.DetachPrincipalPolicyRequest{
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("similique"),
        PolicyName: "illo",
        XAmznIotPrincipal: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DetachSecurityProfile

<p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DetachSecurityProfile(ctx, operations.DetachSecurityProfileRequest{
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        SecurityProfileName: "cupiditate",
        SecurityProfileTargetArn: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachSecurityProfileResponse != nil {
        // handle response
    }
}
```

## DetachThingPrincipal

<p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DetachThingPrincipal(ctx, operations.DetachThingPrincipalRequest{
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("veniam"),
        ThingName: "debitis",
        XAmznPrincipal: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachThingPrincipalResponse != nil {
        // handle response
    }
}
```

## DisableTopicRule

<p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableTopicRule(ctx, operations.DisableTopicRuleRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("in"),
        RuleName: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableTopicRule

<p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableTopicRule(ctx, operations.EnableTopicRuleRequest{
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        RuleName: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBehaviorModelTrainingSummaries

<p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetBehaviorModelTrainingSummaries(ctx, operations.GetBehaviorModelTrainingSummariesRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("magni"),
        MaxResults: sdk.Int64(276650),
        NextToken: sdk.String("adipisci"),
        SecurityProfileName: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBehaviorModelTrainingSummariesResponse != nil {
        // handle response
    }
}
```

## GetBucketsAggregation

<p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>

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
    res, err := s.SDK.GetBucketsAggregation(ctx, operations.GetBucketsAggregationRequest{
        RequestBody: operations.GetBucketsAggregationRequestBody{
            AggregationField: "dolor",
            BucketsAggregationType: operations.GetBucketsAggregationRequestBodyBucketsAggregationType{
                TermsAggregation: &shared.TermsAggregation{
                    MaxBuckets: sdk.Int64(349898),
                },
            },
            IndexName: sdk.String("expedita"),
            QueryString: "facilis",
            QueryVersion: sdk.String("impedit"),
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBucketsAggregationResponse != nil {
        // handle response
    }
}
```

## GetCardinality

<p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCardinality(ctx, operations.GetCardinalityRequest{
        RequestBody: operations.GetCardinalityRequestBody{
            AggregationField: sdk.String("veniam"),
            IndexName: sdk.String("quod"),
            QueryString: "itaque",
            QueryVersion: sdk.String("a"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCardinalityResponse != nil {
        // handle response
    }
}
```

## GetEffectivePolicies

<p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEffectivePolicies(ctx, operations.GetEffectivePoliciesRequest{
        RequestBody: operations.GetEffectivePoliciesRequestBody{
            CognitoIdentityPoolID: sdk.String("culpa"),
            Principal: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ThingName: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEffectivePoliciesResponse != nil {
        // handle response
    }
}
```

## GetIndexingConfiguration

<p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIndexingConfiguration(ctx, operations.GetIndexingConfigurationRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIndexingConfigurationResponse != nil {
        // handle response
    }
}
```

## GetJobDocument

<p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetJobDocument(ctx, operations.GetJobDocumentRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        JobID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJobDocumentResponse != nil {
        // handle response
    }
}
```

## GetLoggingOptions

<p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLoggingOptions(ctx, operations.GetLoggingOptionsRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoggingOptionsResponse != nil {
        // handle response
    }
}
```

## GetOTAUpdate

<p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOTAUpdate(ctx, operations.GetOTAUpdateRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("hic"),
        OtaUpdateID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOTAUpdateResponse != nil {
        // handle response
    }
}
```

## GetPercentiles

<p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPercentiles(ctx, operations.GetPercentilesRequest{
        RequestBody: operations.GetPercentilesRequestBody{
            AggregationField: sdk.String("aspernatur"),
            IndexName: sdk.String("libero"),
            Percents: []float64{
                2791.72,
                9253.95,
                7972.54,
            },
            QueryString: "id",
            QueryVersion: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPercentilesResponse != nil {
        // handle response
    }
}
```

## GetPolicy

<p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPolicy(ctx, operations.GetPolicyRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("ad"),
        PolicyName: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyResponse != nil {
        // handle response
    }
}
```

## GetPolicyVersion

<p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPolicyVersion(ctx, operations.GetPolicyVersionRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        PolicyName: "suscipit",
        PolicyVersionID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyVersionResponse != nil {
        // handle response
    }
}
```

## GetRegistrationCode

<p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRegistrationCode(ctx, operations.GetRegistrationCodeRequest{
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRegistrationCodeResponse != nil {
        // handle response
    }
}
```

## GetStatistics

<p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStatistics(ctx, operations.GetStatisticsRequest{
        RequestBody: operations.GetStatisticsRequestBody{
            AggregationField: sdk.String("fugit"),
            IndexName: sdk.String("aliquid"),
            QueryString: "magnam",
            QueryVersion: sdk.String("quaerat"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatisticsResponse != nil {
        // handle response
    }
}
```

## GetTopicRule

<p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTopicRule(ctx, operations.GetTopicRuleRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("facere"),
        RuleName: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTopicRuleResponse != nil {
        // handle response
    }
}
```

## GetTopicRuleDestination

<p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTopicRuleDestination(ctx, operations.GetTopicRuleDestinationRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("facere"),
        Arn: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTopicRuleDestinationResponse != nil {
        // handle response
    }
}
```

## GetV2LoggingOptions

<p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetV2LoggingOptions(ctx, operations.GetV2LoggingOptionsRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV2LoggingOptionsResponse != nil {
        // handle response
    }
}
```

## ListActiveViolations

<p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListActiveViolations(ctx, operations.ListActiveViolationsRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        BehaviorCriteriaType: operations.ListActiveViolationsBehaviorCriteriaTypeEnumStatistical.ToPointer(),
        ListSuppressedAlerts: sdk.Bool(false),
        MaxResults: sdk.Int64(950956),
        NextToken: sdk.String("maiores"),
        SecurityProfileName: sdk.String("laudantium"),
        ThingName: sdk.String("maiores"),
        VerificationState: operations.ListActiveViolationsVerificationStateEnumFalsePositive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActiveViolationsResponse != nil {
        // handle response
    }
}
```

## ListAttachedPolicies

<p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAttachedPolicies(ctx, operations.ListAttachedPoliciesRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("velit"),
        Marker: sdk.String("eius"),
        PageSize: sdk.Int64(458212),
        Recursive: sdk.Bool(false),
        Target: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttachedPoliciesResponse != nil {
        // handle response
    }
}
```

## ListAuditFindings

<p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAuditFindings(ctx, operations.ListAuditFindingsRequest{
        RequestBody: operations.ListAuditFindingsRequestBody{
            CheckName: sdk.String("eligendi"),
            EndTime: types.MustTimeFromString("2022-10-18T16:16:49.615Z"),
            ListSuppressedFindings: sdk.Bool(false),
            MaxResults: sdk.Int64(876649),
            NextToken: sdk.String("excepturi"),
            ResourceIdentifier: &operations.ListAuditFindingsRequestBodyResourceIdentifier{
                Account: sdk.String("accusantium"),
                CaCertificateID: sdk.String("qui"),
                ClientID: sdk.String("impedit"),
                CognitoIdentityPoolID: sdk.String("beatae"),
                DeviceCertificateArn: sdk.String("incidunt"),
                DeviceCertificateID: sdk.String("dicta"),
                IamRoleArn: sdk.String("odit"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("corporis"),
                    IssuerCertificateSubject: sdk.String("rerum"),
                    IssuerID: sdk.String("alias"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("error"),
                    PolicyVersionID: sdk.String("vel"),
                },
                RoleAliasArn: sdk.String("accusantium"),
            },
            StartTime: types.MustTimeFromString("2022-03-23T15:16:38.938Z"),
            TaskID: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("quam"),
        MaxResults: sdk.String("magni"),
        NextToken: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuditFindingsResponse != nil {
        // handle response
    }
}
```

## ListAuditMitigationActionsExecutions

<p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAuditMitigationActionsExecutions(ctx, operations.ListAuditMitigationActionsExecutionsRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        ActionStatus: operations.ListAuditMitigationActionsExecutionsActionStatusEnumCompleted.ToPointer(),
        FindingID: "excepturi",
        MaxResults: sdk.Int64(980410),
        NextToken: sdk.String("laudantium"),
        TaskID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuditMitigationActionsExecutionsResponse != nil {
        // handle response
    }
}
```

## ListAuditMitigationActionsTasks

<p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAuditMitigationActionsTasks(ctx, operations.ListAuditMitigationActionsTasksRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("quas"),
        AuditTaskID: sdk.String("molestiae"),
        EndTime: types.MustTimeFromString("2022-01-05T00:04:42.693Z"),
        FindingID: sdk.String("a"),
        MaxResults: sdk.Int64(749702),
        NextToken: sdk.String("perspiciatis"),
        StartTime: types.MustTimeFromString("2022-11-18T14:17:14.435Z"),
        TaskStatus: operations.ListAuditMitigationActionsTasksTaskStatusEnumCanceled.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuditMitigationActionsTasksResponse != nil {
        // handle response
    }
}
```

## ListAuditSuppressions

<p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>

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
    res, err := s.SDK.ListAuditSuppressions(ctx, operations.ListAuditSuppressionsRequest{
        RequestBody: operations.ListAuditSuppressionsRequestBody{
            AscendingOrder: sdk.Bool(false),
            CheckName: sdk.String("commodi"),
            MaxResults: sdk.Int64(908734),
            NextToken: sdk.String("porro"),
            ResourceIdentifier: &operations.ListAuditSuppressionsRequestBodyResourceIdentifier{
                Account: sdk.String("tempore"),
                CaCertificateID: sdk.String("quidem"),
                ClientID: sdk.String("modi"),
                CognitoIdentityPoolID: sdk.String("voluptates"),
                DeviceCertificateArn: sdk.String("fugit"),
                DeviceCertificateID: sdk.String("eius"),
                IamRoleArn: sdk.String("sequi"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("eligendi"),
                    IssuerCertificateSubject: sdk.String("asperiores"),
                    IssuerID: sdk.String("esse"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("blanditiis"),
                    PolicyVersionID: sdk.String("sint"),
                },
                RoleAliasArn: sdk.String("repellat"),
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("corporis"),
        MaxResults: sdk.String("velit"),
        NextToken: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuditSuppressionsResponse != nil {
        // handle response
    }
}
```

## ListAuditTasks

<p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAuditTasks(ctx, operations.ListAuditTasksRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("officia"),
        EndTime: types.MustTimeFromString("2022-09-15T19:17:34.163Z"),
        MaxResults: sdk.Int64(502106),
        NextToken: sdk.String("eius"),
        StartTime: types.MustTimeFromString("2022-06-20T04:00:27.717Z"),
        TaskStatus: operations.ListAuditTasksTaskStatusEnumFailed.ToPointer(),
        TaskType: operations.ListAuditTasksTaskTypeEnumScheduledAuditTask.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuditTasksResponse != nil {
        // handle response
    }
}
```

## ListAuthorizers

<p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAuthorizers(ctx, operations.ListAuthorizersRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("amet"),
        PageSize: sdk.Int64(473326),
        Status: operations.ListAuthorizersStatusEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizersResponse != nil {
        // handle response
    }
}
```

## ListBillingGroups

<p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBillingGroups(ctx, operations.ListBillingGroupsRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("dolore"),
        MaxResults: sdk.Int64(125811),
        NamePrefixFilter: sdk.String("maiores"),
        NextToken: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBillingGroupsResponse != nil {
        // handle response
    }
}
```

## ListCACertificates

<p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCACertificates(ctx, operations.ListCACertificatesRequest{
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("veniam"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("nihil"),
        PageSize: sdk.Int64(320326),
        TemplateName: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCACertificatesResponse != nil {
        // handle response
    }
}
```

## ListCertificates

<p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCertificates(ctx, operations.ListCertificatesRequest{
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("sit"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("quidem"),
        PageSize: sdk.Int64(831031),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificatesResponse != nil {
        // handle response
    }
}
```

## ListCertificatesByCA

<p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCertificatesByCA(ctx, operations.ListCertificatesByCARequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        CaCertificateID: "architecto",
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("adipisci"),
        PageSize: sdk.Int64(867115),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificatesByCAResponse != nil {
        // handle response
    }
}
```

## ListCustomMetrics

<p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomMetrics(ctx, operations.ListCustomMetricsRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("soluta"),
        MaxResults: sdk.Int64(677509),
        NextToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomMetricsResponse != nil {
        // handle response
    }
}
```

## ListDetectMitigationActionsExecutions

<p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDetectMitigationActionsExecutions(ctx, operations.ListDetectMitigationActionsExecutionsRequest{
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        EndTime: types.MustTimeFromString("2021-06-18T12:23:42.062Z"),
        MaxResults: sdk.Int64(42615),
        NextToken: sdk.String("expedita"),
        StartTime: types.MustTimeFromString("2022-11-22T18:35:16.911Z"),
        TaskID: sdk.String("deserunt"),
        ThingName: sdk.String("aliquid"),
        ViolationID: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDetectMitigationActionsExecutionsResponse != nil {
        // handle response
    }
}
```

## ListDetectMitigationActionsTasks

<p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDetectMitigationActionsTasks(ctx, operations.ListDetectMitigationActionsTasksRequest{
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        EndTime: types.MustTimeFromString("2020-02-07T14:24:22.214Z"),
        MaxResults: sdk.Int64(792719),
        NextToken: sdk.String("quo"),
        StartTime: types.MustTimeFromString("2021-01-05T05:02:10.793Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDetectMitigationActionsTasksResponse != nil {
        // handle response
    }
}
```

## ListDimensions

<p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDimensions(ctx, operations.ListDimensionsRequest{
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        MaxResults: sdk.Int64(342104),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDimensionsResponse != nil {
        // handle response
    }
}
```

## ListDomainConfigurations

<p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDomainConfigurations(ctx, operations.ListDomainConfigurationsRequest{
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("quae"),
        Marker: sdk.String("quos"),
        PageSize: sdk.Int64(44571),
        ServiceType: operations.ListDomainConfigurationsServiceTypeEnumData.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListFleetMetrics

<p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFleetMetrics(ctx, operations.ListFleetMetricsRequest{
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("maiores"),
        MaxResults: sdk.Int64(81581),
        NextToken: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetMetricsResponse != nil {
        // handle response
    }
}
```

## ListIndices

<p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListIndices(ctx, operations.ListIndicesRequest{
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("rem"),
        MaxResults: sdk.Int64(527715),
        NextToken: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIndicesResponse != nil {
        // handle response
    }
}
```

## ListJobExecutionsForJob

<p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobExecutionsForJob(ctx, operations.ListJobExecutionsForJobRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        JobID: "sit",
        MaxResults: sdk.Int64(703189),
        NextToken: sdk.String("veritatis"),
        Status: operations.ListJobExecutionsForJobStatusEnumCanceled.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobExecutionsForJobResponse != nil {
        // handle response
    }
}
```

## ListJobExecutionsForThing

<p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobExecutionsForThing(ctx, operations.ListJobExecutionsForThingRequest{
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("nihil"),
        JobID: sdk.String("voluptas"),
        MaxResults: sdk.Int64(658199),
        NamespaceID: sdk.String("commodi"),
        NextToken: sdk.String("alias"),
        Status: operations.ListJobExecutionsForThingStatusEnumRejected.ToPointer(),
        ThingName: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobExecutionsForThingResponse != nil {
        // handle response
    }
}
```

## ListJobTemplates

<p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobTemplates(ctx, operations.ListJobTemplatesRequest{
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("placeat"),
        MaxResults: sdk.Int64(378403),
        NextToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobTemplatesResponse != nil {
        // handle response
    }
}
```

## ListJobs

<p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobs(ctx, operations.ListJobsRequest{
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("quasi"),
        MaxResults: sdk.Int64(766591),
        NamespaceID: sdk.String("dicta"),
        NextToken: sdk.String("harum"),
        Status: operations.ListJobsStatusEnumScheduled.ToPointer(),
        TargetSelection: operations.ListJobsTargetSelectionEnumSnapshot.ToPointer(),
        ThingGroupID: sdk.String("beatae"),
        ThingGroupName: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## ListManagedJobTemplates

Returns a list of managed job templates.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListManagedJobTemplates(ctx, operations.ListManagedJobTemplatesRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("officiis"),
        MaxResults: sdk.Int64(739633),
        NextToken: sdk.String("pariatur"),
        TemplateName: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedJobTemplatesResponse != nil {
        // handle response
    }
}
```

## ListMetricValues

Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMetricValues(ctx, operations.ListMetricValuesRequest{
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        DimensionName: sdk.String("occaecati"),
        DimensionValueOperator: operations.ListMetricValuesDimensionValueOperatorEnumNotIn.ToPointer(),
        EndTime: types.MustTimeFromString("2021-08-18T10:06:28.236Z"),
        MaxResults: sdk.Int64(944033),
        MetricName: "maxime",
        NextToken: sdk.String("accusantium"),
        StartTime: types.MustTimeFromString("2022-09-15T09:33:00.010Z"),
        ThingName: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricValuesResponse != nil {
        // handle response
    }
}
```

## ListMitigationActions

<p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListMitigationActions(ctx, operations.ListMitigationActionsRequest{
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dolor"),
        ActionType: operations.ListMitigationActionsActionTypeEnumPublishFindingToSns.ToPointer(),
        MaxResults: sdk.Int64(274295),
        NextToken: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMitigationActionsResponse != nil {
        // handle response
    }
}
```

## ListOTAUpdates

<p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOTAUpdates(ctx, operations.ListOTAUpdatesRequest{
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        MaxResults: sdk.Int64(531195),
        NextToken: sdk.String("blanditiis"),
        OtaUpdateStatus: operations.ListOTAUpdatesOTAUpdateStatusEnumCreateComplete.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOTAUpdatesResponse != nil {
        // handle response
    }
}
```

## ListOutgoingCertificates

<p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOutgoingCertificates(ctx, operations.ListOutgoingCertificatesRequest{
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("architecto"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("est"),
        PageSize: sdk.Int64(318379),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOutgoingCertificatesResponse != nil {
        // handle response
    }
}
```

## ListPolicies

<p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPolicies(ctx, operations.ListPoliciesRequest{
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("labore"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("sapiente"),
        PageSize: sdk.Int64(901651),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesResponse != nil {
        // handle response
    }
}
```

## ~~ListPolicyPrincipals~~

<p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPolicyPrincipals(ctx, operations.ListPolicyPrincipalsRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("quia"),
        PageSize: sdk.Int64(887284),
        XAmznIotPolicy: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPolicyPrincipalsResponse != nil {
        // handle response
    }
}
```

## ListPolicyVersions

<p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPolicyVersions(ctx, operations.ListPolicyVersionsRequest{
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        PolicyName: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPolicyVersionsResponse != nil {
        // handle response
    }
}
```

## ~~ListPrincipalPolicies~~

<p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPrincipalPolicies(ctx, operations.ListPrincipalPoliciesRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("fugit"),
        PageSize: sdk.Int64(25190),
        XAmznIotPrincipal: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrincipalPoliciesResponse != nil {
        // handle response
    }
}
```

## ListPrincipalThings

<p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPrincipalThings(ctx, operations.ListPrincipalThingsRequest{
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        MaxResults: sdk.Int64(303421),
        NextToken: sdk.String("deserunt"),
        XAmznPrincipal: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrincipalThingsResponse != nil {
        // handle response
    }
}
```

## ListProvisioningTemplateVersions

<p>A list of provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProvisioningTemplateVersions(ctx, operations.ListProvisioningTemplateVersionsRequest{
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        MaxResults: sdk.Int64(999854),
        NextToken: sdk.String("aspernatur"),
        TemplateName: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningTemplateVersionsResponse != nil {
        // handle response
    }
}
```

## ListProvisioningTemplates

<p>Lists the provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProvisioningTemplates(ctx, operations.ListProvisioningTemplatesRequest{
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        MaxResults: sdk.Int64(44929),
        NextToken: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningTemplatesResponse != nil {
        // handle response
    }
}
```

## ListRelatedResourcesForAuditFinding

<p>The related resources of an Audit finding. The following resources can be returned from calling this API:</p> <ul> <li> <p>DEVICE_CERTIFICATE</p> </li> <li> <p>CA_CERTIFICATE</p> </li> <li> <p>IOT_POLICY</p> </li> <li> <p>COGNITO_IDENTITY_POOL</p> </li> <li> <p>CLIENT_ID</p> </li> <li> <p>ACCOUNT_SETTINGS</p> </li> <li> <p>ROLE_ALIAS</p> </li> <li> <p>IAM_ROLE</p> </li> <li> <p>ISSUER_CERTIFICATE</p> </li> </ul> <note> <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a> but provides pagination and is not limited to 10 resources. When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRelatedResourcesForAuditFinding(ctx, operations.ListRelatedResourcesForAuditFindingRequest{
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("optio"),
        FindingID: "nobis",
        MaxResults: sdk.Int64(404422),
        NextToken: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRelatedResourcesForAuditFindingResponse != nil {
        // handle response
    }
}
```

## ListRoleAliases

<p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRoleAliases(ctx, operations.ListRoleAliasesRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("sed"),
        IsAscendingOrder: sdk.Bool(false),
        Marker: sdk.String("beatae"),
        PageSize: sdk.Int64(627341),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoleAliasesResponse != nil {
        // handle response
    }
}
```

## ListScheduledAudits

<p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListScheduledAudits(ctx, operations.ListScheduledAuditsRequest{
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("animi"),
        MaxResults: sdk.Int64(512488),
        NextToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScheduledAuditsResponse != nil {
        // handle response
    }
}
```

## ListSecurityProfiles

<p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSecurityProfiles(ctx, operations.ListSecurityProfilesRequest{
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("itaque"),
        DimensionName: sdk.String("dignissimos"),
        MaxResults: sdk.Int64(373449),
        MetricName: sdk.String("explicabo"),
        NextToken: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityProfilesResponse != nil {
        // handle response
    }
}
```

## ListSecurityProfilesForTarget

<p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSecurityProfilesForTarget(ctx, operations.ListSecurityProfilesForTargetRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("architecto"),
        MaxResults: sdk.Int64(506966),
        NextToken: sdk.String("eveniet"),
        Recursive: sdk.Bool(false),
        SecurityProfileTargetArn: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityProfilesForTargetResponse != nil {
        // handle response
    }
}
```

## ListStreams

<p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStreams(ctx, operations.ListStreamsRequest{
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        IsAscendingOrder: sdk.Bool(false),
        MaxResults: sdk.Int64(576657),
        NextToken: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quae"),
        NextToken: sdk.String("omnis"),
        ResourceArn: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTargetsForPolicy

<p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargetsForPolicy(ctx, operations.ListTargetsForPolicyRequest{
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        Marker: sdk.String("labore"),
        PageSize: sdk.Int64(983434),
        PolicyName: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsForPolicyResponse != nil {
        // handle response
    }
}
```

## ListTargetsForSecurityProfile

<p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargetsForSecurityProfile(ctx, operations.ListTargetsForSecurityProfileRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        MaxResults: sdk.Int64(302878),
        NextToken: sdk.String("dolorum"),
        SecurityProfileName: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsForSecurityProfileResponse != nil {
        // handle response
    }
}
```

## ListThingGroups

<p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingGroups(ctx, operations.ListThingGroupsRequest{
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        MaxResults: sdk.Int64(607624),
        NamePrefixFilter: sdk.String("aut"),
        NextToken: sdk.String("ipsam"),
        ParentGroup: sdk.String("officia"),
        Recursive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingGroupsResponse != nil {
        // handle response
    }
}
```

## ListThingGroupsForThing

<p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingGroupsForThing(ctx, operations.ListThingGroupsForThingRequest{
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("nisi"),
        MaxResults: sdk.Int64(474185),
        NextToken: sdk.String("quia"),
        ThingName: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingGroupsForThingResponse != nil {
        // handle response
    }
}
```

## ListThingPrincipals

<p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingPrincipals(ctx, operations.ListThingPrincipalsRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        MaxResults: sdk.Int64(57909),
        NextToken: sdk.String("sint"),
        ThingName: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingPrincipalsResponse != nil {
        // handle response
    }
}
```

## ListThingRegistrationTaskReports

Information about the thing registration tasks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingRegistrationTaskReports(ctx, operations.ListThingRegistrationTaskReportsRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        MaxResults: sdk.Int64(964201),
        NextToken: sdk.String("culpa"),
        ReportType: operations.ListThingRegistrationTaskReportsReportTypeEnumResults,
        TaskID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingRegistrationTaskReportsResponse != nil {
        // handle response
    }
}
```

## ListThingRegistrationTasks

<p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingRegistrationTasks(ctx, operations.ListThingRegistrationTasksRequest{
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        MaxResults: sdk.Int64(987371),
        NextToken: sdk.String("animi"),
        Status: operations.ListThingRegistrationTasksStatusEnumCancelling.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingRegistrationTasksResponse != nil {
        // handle response
    }
}
```

## ListThingTypes

<p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingTypes(ctx, operations.ListThingTypesRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        MaxResults: sdk.Int64(759490),
        NextToken: sdk.String("sequi"),
        ThingTypeName: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingTypesResponse != nil {
        // handle response
    }
}
```

## ListThings

<p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer Guide</i>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThings(ctx, operations.ListThingsRequest{
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("in"),
        AttributeName: sdk.String("nostrum"),
        AttributeValue: sdk.String("temporibus"),
        MaxResults: sdk.Int64(186937),
        NextToken: sdk.String("dolor"),
        ThingTypeName: sdk.String("nisi"),
        UsePrefixAttributeValue: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingsResponse != nil {
        // handle response
    }
}
```

## ListThingsInBillingGroup

<p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingsInBillingGroup(ctx, operations.ListThingsInBillingGroupRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("quod"),
        BillingGroupName: "minus",
        MaxResults: sdk.Int64(550994),
        NextToken: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingsInBillingGroupResponse != nil {
        // handle response
    }
}
```

## ListThingsInThingGroup

<p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListThingsInThingGroup(ctx, operations.ListThingsInThingGroupRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        MaxResults: sdk.Int64(590998),
        NextToken: sdk.String("ex"),
        Recursive: sdk.Bool(false),
        ThingGroupName: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThingsInThingGroupResponse != nil {
        // handle response
    }
}
```

## ListTopicRuleDestinations

<p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTopicRuleDestinations(ctx, operations.ListTopicRuleDestinationsRequest{
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("expedita"),
        MaxResults: sdk.Int64(446737),
        NextToken: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopicRuleDestinationsResponse != nil {
        // handle response
    }
}
```

## ListTopicRules

<p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTopicRules(ctx, operations.ListTopicRulesRequest{
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("impedit"),
        MaxResults: sdk.Int64(880998),
        NextToken: sdk.String("et"),
        RuleDisabled: sdk.Bool(false),
        Topic: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopicRulesResponse != nil {
        // handle response
    }
}
```

## ListV2LoggingLevels

<p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListV2LoggingLevels(ctx, operations.ListV2LoggingLevelsRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        MaxResults: sdk.Int64(150349),
        NextToken: sdk.String("impedit"),
        TargetType: operations.ListV2LoggingLevelsTargetTypeEnumClientID.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListV2LoggingLevelsResponse != nil {
        // handle response
    }
}
```

## ListViolationEvents

<p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListViolationEvents(ctx, operations.ListViolationEventsRequest{
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        BehaviorCriteriaType: operations.ListViolationEventsBehaviorCriteriaTypeEnumMachineLearning.ToPointer(),
        EndTime: types.MustTimeFromString("2020-05-17T09:08:21.319Z"),
        ListSuppressedAlerts: sdk.Bool(false),
        MaxResults: sdk.Int64(694394),
        NextToken: sdk.String("illo"),
        SecurityProfileName: sdk.String("quo"),
        StartTime: types.MustTimeFromString("2022-03-18T01:27:23.704Z"),
        ThingName: sdk.String("distinctio"),
        VerificationState: operations.ListViolationEventsVerificationStateEnumUnknown.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListViolationEventsResponse != nil {
        // handle response
    }
}
```

## PutVerificationStateOnViolation

Set a verification state and provide a description of that verification state on a violation (detect alarm).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutVerificationStateOnViolation(ctx, operations.PutVerificationStateOnViolationRequest{
        RequestBody: operations.PutVerificationStateOnViolationRequestBody{
            VerificationState: operations.PutVerificationStateOnViolationRequestBodyVerificationStateEnumTruePositive,
            VerificationStateDescription: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        ViolationID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutVerificationStateOnViolationResponse != nil {
        // handle response
    }
}
```

## RegisterCACertificate

<p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>

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
    res, err := s.SDK.RegisterCACertificate(ctx, operations.RegisterCACertificateRequest{
        RequestBody: operations.RegisterCACertificateRequestBody{
            CaCertificate: "rerum",
            CertificateMode: operations.RegisterCACertificateRequestBodyCertificateModeEnumSniOnly.ToPointer(),
            RegistrationConfig: &operations.RegisterCACertificateRequestBodyRegistrationConfig{
                RoleArn: sdk.String("odit"),
                TemplateBody: sdk.String("ad"),
                TemplateName: sdk.String("sequi"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: sdk.String("esse"),
                },
            },
            VerificationCertificate: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("laborum"),
        AllowAutoRegistration: sdk.Bool(false),
        SetAsActive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterCACertificateResponse != nil {
        // handle response
    }
}
```

## RegisterCertificate

<p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterCertificate(ctx, operations.RegisterCertificateRequest{
        RequestBody: operations.RegisterCertificateRequestBody{
            CaCertificatePem: sdk.String("illum"),
            CertificatePem: "fugit",
            Status: operations.RegisterCertificateRequestBodyStatusEnumRegisterInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("esse"),
        SetAsActive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterCertificateResponse != nil {
        // handle response
    }
}
```

## RegisterCertificateWithoutCA

Register a certificate that does not have a certificate authority (CA). For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterCertificateWithoutCA(ctx, operations.RegisterCertificateWithoutCARequest{
        RequestBody: operations.RegisterCertificateWithoutCARequestBody{
            CertificatePem: "explicabo",
            Status: operations.RegisterCertificateWithoutCARequestBodyStatusEnumInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterCertificateWithoutCAResponse != nil {
        // handle response
    }
}
```

## RegisterThing

<p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterThing(ctx, operations.RegisterThingRequest{
        RequestBody: operations.RegisterThingRequestBody{
            Parameters: map[string]string{
                "sapiente": "neque",
            },
            TemplateBody: "officia",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterThingResponse != nil {
        // handle response
    }
}
```

## RejectCertificateTransfer

<p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RejectCertificateTransfer(ctx, operations.RejectCertificateTransferRequest{
        RequestBody: operations.RejectCertificateTransferRequestBody{
            RejectReason: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        CertificateID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveThingFromBillingGroup

<p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveThingFromBillingGroup(ctx, operations.RemoveThingFromBillingGroupRequest{
        RequestBody: operations.RemoveThingFromBillingGroupRequestBody{
            BillingGroupArn: sdk.String("est"),
            BillingGroupName: sdk.String("iure"),
            ThingArn: sdk.String("quisquam"),
            ThingName: sdk.String("provident"),
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveThingFromBillingGroupResponse != nil {
        // handle response
    }
}
```

## RemoveThingFromThingGroup

<p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveThingFromThingGroup(ctx, operations.RemoveThingFromThingGroupRequest{
        RequestBody: operations.RemoveThingFromThingGroupRequestBody{
            ThingArn: sdk.String("perferendis"),
            ThingGroupArn: sdk.String("corrupti"),
            ThingGroupName: sdk.String("doloremque"),
            ThingName: sdk.String("fugiat"),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveThingFromThingGroupResponse != nil {
        // handle response
    }
}
```

## ReplaceTopicRule

<p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>

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
    res, err := s.SDK.ReplaceTopicRule(ctx, operations.ReplaceTopicRuleRequest{
        RequestBody: operations.ReplaceTopicRuleRequestBody{
            TopicRulePayload: operations.ReplaceTopicRuleRequestBodyTopicRulePayload{
                Actions: []shared.Action{
                    shared.Action{
                        CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                            AlarmName: "cumque",
                            RoleArn: "soluta",
                            StateReason: "fugiat",
                            StateValue: "laboriosam",
                        },
                        CloudwatchLogs: &shared.CloudwatchLogsAction{
                            BatchMode: sdk.Bool(false),
                            LogGroupName: "nam",
                            RoleArn: "enim",
                        },
                        CloudwatchMetric: &shared.CloudwatchMetricAction{
                            MetricName: "maiores",
                            MetricNamespace: "consectetur",
                            MetricTimestamp: sdk.String("necessitatibus"),
                            MetricUnit: "maxime",
                            MetricValue: "cupiditate",
                            RoleArn: "voluptatem",
                        },
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "provident",
                            HashKeyType: shared.DynamoKeyTypeEnumString.ToPointer(),
                            HashKeyValue: "accusantium",
                            Operation: sdk.String("magnam"),
                            PayloadField: sdk.String("repellat"),
                            RangeKeyField: sdk.String("omnis"),
                            RangeKeyType: shared.DynamoKeyTypeEnumString.ToPointer(),
                            RangeKeyValue: sdk.String("vel"),
                            RoleArn: "cum",
                            TableName: "id",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            PutItem: shared.PutItemInput{
                                TableName: "possimus",
                            },
                            RoleArn: "fugit",
                        },
                        Elasticsearch: &shared.ElasticsearchAction{
                            Endpoint: "ipsam",
                            ID: "53819b47-4b0e-4d20-a562-48fff639a910",
                            Index: "mollitia",
                            RoleArn: "nam",
                            Type: "assumenda",
                        },
                        Firehose: &shared.FirehoseAction{
                            BatchMode: sdk.Bool(false),
                            DeliveryStreamName: "quo",
                            RoleArn: "fuga",
                            Separator: sdk.String("tempore"),
                        },
                        HTTP: &shared.HTTPAction{
                            Auth: &shared.HTTPAuthorization{
                                Sigv4: &shared.SigV4Authorization{
                                    RoleArn: "commodi",
                                    ServiceName: "fugit",
                                    SigningRegion: "suscipit",
                                },
                            },
                            ConfirmationURL: sdk.String("voluptate"),
                            Headers: []shared.HTTPActionHeader{
                                shared.HTTPActionHeader{
                                    Key: "aliquid",
                                    Value: "provident",
                                },
                                shared.HTTPActionHeader{
                                    Key: "laboriosam",
                                    Value: "accusamus",
                                },
                            },
                            URL: "ab",
                        },
                        IotAnalytics: &shared.IotAnalyticsAction{
                            BatchMode: sdk.Bool(false),
                            ChannelArn: sdk.String("itaque"),
                            ChannelName: sdk.String("quisquam"),
                            RoleArn: sdk.String("eaque"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            BatchMode: sdk.Bool(false),
                            InputName: "alias",
                            MessageID: sdk.String("qui"),
                            RoleArn: "consequuntur",
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("quidem"),
                                    EntryID: sdk.String("sequi"),
                                    PropertyAlias: sdk.String("amet"),
                                    PropertyID: sdk.String("exercitationem"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("praesentium"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("unde"),
                                                TimeInSeconds: "similique",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("eligendi"),
                                                DoubleValue: sdk.String("tempore"),
                                                IntegerValue: sdk.String("amet"),
                                                StringValue: sdk.String("debitis"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("nobis"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("asperiores"),
                                                TimeInSeconds: "temporibus",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("id"),
                                                DoubleValue: sdk.String("atque"),
                                                IntegerValue: sdk.String("quibusdam"),
                                                StringValue: sdk.String("sit"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("quo"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("veniam"),
                                                TimeInSeconds: "aliquam",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("provident"),
                                                DoubleValue: sdk.String("vero"),
                                                IntegerValue: sdk.String("earum"),
                                                StringValue: sdk.String("doloremque"),
                                            },
                                        },
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("ipsum"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("alias"),
                                                TimeInSeconds: "doloremque",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("tempora"),
                                                DoubleValue: sdk.String("perspiciatis"),
                                                IntegerValue: sdk.String("quam"),
                                                StringValue: sdk.String("atque"),
                                            },
                                        },
                                    },
                                },
                            },
                            RoleArn: "officia",
                        },
                        Kafka: &shared.KafkaAction{
                            ClientProperties: map[string]string{
                                "architecto": "a",
                                "laborum": "veritatis",
                            },
                            DestinationArn: "quod",
                            Key: sdk.String("a"),
                            Partition: sdk.String("qui"),
                            Topic: "accusantium",
                        },
                        Kinesis: &shared.KinesisAction{
                            PartitionKey: sdk.String("commodi"),
                            RoleArn: "atque",
                            StreamName: "totam",
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "tenetur",
                        },
                        Location: &shared.LocationAction{
                            DeviceID: "voluptate",
                            Latitude: "quam",
                            Longitude: "quod",
                            RoleArn: "vitae",
                            Timestamp: &shared.LocationTimestamp{
                                Unit: sdk.String("sapiente"),
                                Value: "reiciendis",
                            },
                            TrackerName: "quod",
                        },
                        OpenSearch: &shared.OpenSearchAction{
                            Endpoint: "voluptate",
                            ID: "1dca163f-2a3c-480a-97ff-334cddf857a9",
                            Index: "voluptates",
                            RoleArn: "eum",
                            Type: "quasi",
                        },
                        Republish: &shared.RepublishAction{
                            Headers: &shared.MqttHeaders{
                                ContentType: sdk.String("quas"),
                                CorrelationData: sdk.String("odio"),
                                MessageExpiry: sdk.String("commodi"),
                                PayloadFormatIndicator: sdk.String("porro"),
                                ResponseTopic: sdk.String("aliquid"),
                                UserProperties: []shared.UserProperty{
                                    shared.UserProperty{
                                        Key: "quidem",
                                        Value: "explicabo",
                                    },
                                    shared.UserProperty{
                                        Key: "et",
                                        Value: "nulla",
                                    },
                                    shared.UserProperty{
                                        Key: "magni",
                                        Value: "natus",
                                    },
                                },
                            },
                            Qos: sdk.Int64(851199),
                            RoleArn: "a",
                            Topic: "impedit",
                        },
                        S3: &shared.S3Action{
                            BucketName: "unde",
                            CannedACL: shared.CannedAccessControlListEnumPublicReadWrite.ToPointer(),
                            Key: "facere",
                            RoleArn: "voluptas",
                        },
                        Salesforce: &shared.SalesforceAction{
                            Token: "doloribus",
                            URL: "recusandae",
                        },
                        Sns: &shared.SnsAction{
                            MessageFormat: shared.MessageFormatEnumJSON.ToPointer(),
                            RoleArn: "facere",
                            TargetArn: "dignissimos",
                        },
                        Sqs: &shared.SqsAction{
                            QueueURL: "iste",
                            RoleArn: "provident",
                            UseBase64: sdk.Bool(false),
                        },
                        StepFunctions: &shared.StepFunctionsAction{
                            ExecutionNamePrefix: sdk.String("dolor"),
                            RoleArn: "sint",
                            StateMachineName: "aperiam",
                        },
                        Timestream: &shared.TimestreamAction{
                            DatabaseName: "eaque",
                            Dimensions: []shared.TimestreamDimension{
                                shared.TimestreamDimension{
                                    Name: "Maggie Jones",
                                    Value: "fugiat",
                                },
                                shared.TimestreamDimension{
                                    Name: "Donna Abshire",
                                    Value: "quis",
                                },
                            },
                            RoleArn: "velit",
                            TableName: "ratione",
                            Timestamp: &shared.TimestreamTimestamp{
                                Unit: "quas",
                                Value: "maxime",
                            },
                        },
                    },
                    shared.Action{
                        CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                            AlarmName: "recusandae",
                            RoleArn: "cumque",
                            StateReason: "doloremque",
                            StateValue: "totam",
                        },
                        CloudwatchLogs: &shared.CloudwatchLogsAction{
                            BatchMode: sdk.Bool(false),
                            LogGroupName: "iure",
                            RoleArn: "maiores",
                        },
                        CloudwatchMetric: &shared.CloudwatchMetricAction{
                            MetricName: "est",
                            MetricNamespace: "fugit",
                            MetricTimestamp: sdk.String("veritatis"),
                            MetricUnit: "necessitatibus",
                            MetricValue: "iste",
                            RoleArn: "dicta",
                        },
                        DynamoDB: &shared.DynamoDBAction{
                            HashKeyField: "ipsam",
                            HashKeyType: shared.DynamoKeyTypeEnumString.ToPointer(),
                            HashKeyValue: "cumque",
                            Operation: sdk.String("quidem"),
                            PayloadField: sdk.String("non"),
                            RangeKeyField: sdk.String("beatae"),
                            RangeKeyType: shared.DynamoKeyTypeEnumString.ToPointer(),
                            RangeKeyValue: sdk.String("molestias"),
                            RoleArn: "beatae",
                            TableName: "autem",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            PutItem: shared.PutItemInput{
                                TableName: "ducimus",
                            },
                            RoleArn: "libero",
                        },
                        Elasticsearch: &shared.ElasticsearchAction{
                            Endpoint: "molestias",
                            ID: "e3c8db03-408d-46d3-a4ff-d455906d1263",
                            Index: "quibusdam",
                            RoleArn: "numquam",
                            Type: "rem",
                        },
                        Firehose: &shared.FirehoseAction{
                            BatchMode: sdk.Bool(false),
                            DeliveryStreamName: "officiis",
                            RoleArn: "omnis",
                            Separator: sdk.String("neque"),
                        },
                        HTTP: &shared.HTTPAction{
                            Auth: &shared.HTTPAuthorization{
                                Sigv4: &shared.SigV4Authorization{
                                    RoleArn: "corporis",
                                    ServiceName: "quod",
                                    SigningRegion: "dolores",
                                },
                            },
                            ConfirmationURL: sdk.String("placeat"),
                            Headers: []shared.HTTPActionHeader{
                                shared.HTTPActionHeader{
                                    Key: "recusandae",
                                    Value: "quos",
                                },
                                shared.HTTPActionHeader{
                                    Key: "dicta",
                                    Value: "sapiente",
                                },
                                shared.HTTPActionHeader{
                                    Key: "ipsum",
                                    Value: "consequatur",
                                },
                            },
                            URL: "soluta",
                        },
                        IotAnalytics: &shared.IotAnalyticsAction{
                            BatchMode: sdk.Bool(false),
                            ChannelArn: sdk.String("necessitatibus"),
                            ChannelName: sdk.String("sequi"),
                            RoleArn: sdk.String("recusandae"),
                        },
                        IotEvents: &shared.IotEventsAction{
                            BatchMode: sdk.Bool(false),
                            InputName: "labore",
                            MessageID: sdk.String("adipisci"),
                            RoleArn: "magni",
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                                shared.PutAssetPropertyValueEntry{
                                    AssetID: sdk.String("dolores"),
                                    EntryID: sdk.String("illum"),
                                    PropertyAlias: sdk.String("iusto"),
                                    PropertyID: sdk.String("magni"),
                                    PropertyValues: []shared.AssetPropertyValue{
                                        shared.AssetPropertyValue{
                                            Quality: sdk.String("aliquid"),
                                            Timestamp: shared.AssetPropertyTimestamp{
                                                OffsetInNanos: sdk.String("ad"),
                                                TimeInSeconds: "voluptate",
                                            },
                                            Value: shared.AssetPropertyVariant{
                                                BooleanValue: sdk.String("vel"),
                                                DoubleValue: sdk.String("minima"),
                                                IntegerValue: sdk.String("sit"),
                                                StringValue: sdk.String("vel"),
                                            },
                                        },
                                    },
                                },
                            },
                            RoleArn: "laboriosam",
                        },
                        Kafka: &shared.KafkaAction{
                            ClientProperties: map[string]string{
                                "quasi": "rem",
                                "dignissimos": "doloremque",
                            },
                            DestinationArn: "assumenda",
                            Key: sdk.String("provident"),
                            Partition: sdk.String("facere"),
                            Topic: "sed",
                        },
                        Kinesis: &shared.KinesisAction{
                            PartitionKey: sdk.String("inventore"),
                            RoleArn: "voluptatibus",
                            StreamName: "unde",
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "deserunt",
                        },
                        Location: &shared.LocationAction{
                            DeviceID: "repellendus",
                            Latitude: "consequatur",
                            Longitude: "adipisci",
                            RoleArn: "doloremque",
                            Timestamp: &shared.LocationTimestamp{
                                Unit: sdk.String("optio"),
                                Value: "tempora",
                            },
                            TrackerName: "debitis",
                        },
                        OpenSearch: &shared.OpenSearchAction{
                            Endpoint: "cumque",
                            ID: "c11a0836-4290-468b-8502-a55e7f73bc84",
                            Index: "ipsam",
                            RoleArn: "officiis",
                            Type: "sequi",
                        },
                        Republish: &shared.RepublishAction{
                            Headers: &shared.MqttHeaders{
                                ContentType: sdk.String("magni"),
                                CorrelationData: sdk.String("voluptatem"),
                                MessageExpiry: sdk.String("est"),
                                PayloadFormatIndicator: sdk.String("amet"),
                                ResponseTopic: sdk.String("veritatis"),
                                UserProperties: []shared.UserProperty{
                                    shared.UserProperty{
                                        Key: "voluptatibus",
                                        Value: "numquam",
                                    },
                                    shared.UserProperty{
                                        Key: "rerum",
                                        Value: "dolorum",
                                    },
                                    shared.UserProperty{
                                        Key: "quibusdam",
                                        Value: "earum",
                                    },
                                },
                            },
                            Qos: sdk.Int64(566669),
                            RoleArn: "numquam",
                            Topic: "molestiae",
                        },
                        S3: &shared.S3Action{
                            BucketName: "impedit",
                            CannedACL: shared.CannedAccessControlListEnumAuthenticatedRead.ToPointer(),
                            Key: "animi",
                            RoleArn: "voluptatum",
                        },
                        Salesforce: &shared.SalesforceAction{
                            Token: "aliquid",
                            URL: "nihil",
                        },
                        Sns: &shared.SnsAction{
                            MessageFormat: shared.MessageFormatEnumJSON.ToPointer(),
                            RoleArn: "optio",
                            TargetArn: "incidunt",
                        },
                        Sqs: &shared.SqsAction{
                            QueueURL: "eos",
                            RoleArn: "magnam",
                            UseBase64: sdk.Bool(false),
                        },
                        StepFunctions: &shared.StepFunctionsAction{
                            ExecutionNamePrefix: sdk.String("dolores"),
                            RoleArn: "aliquid",
                            StateMachineName: "eum",
                        },
                        Timestream: &shared.TimestreamAction{
                            DatabaseName: "vel",
                            Dimensions: []shared.TimestreamDimension{
                                shared.TimestreamDimension{
                                    Name: "Joshua Hoppe",
                                    Value: "impedit",
                                },
                                shared.TimestreamDimension{
                                    Name: "Ivan Volkman",
                                    Value: "illo",
                                },
                            },
                            RoleArn: "doloribus",
                            TableName: "cumque",
                            Timestamp: &shared.TimestreamTimestamp{
                                Unit: "expedita",
                                Value: "modi",
                            },
                        },
                    },
                },
                AwsIotSQLVersion: sdk.String("cumque"),
                Description: sdk.String("ipsam"),
                ErrorAction: &shared.Action{
                    CloudwatchAlarm: &shared.CloudwatchAlarmAction{
                        AlarmName: "occaecati",
                        RoleArn: "ipsum",
                        StateReason: "accusamus",
                        StateValue: "quisquam",
                    },
                    CloudwatchLogs: &shared.CloudwatchLogsAction{
                        BatchMode: sdk.Bool(false),
                        LogGroupName: "quasi",
                        RoleArn: "fugit",
                    },
                    CloudwatchMetric: &shared.CloudwatchMetricAction{
                        MetricName: "quo",
                        MetricNamespace: "temporibus",
                        MetricTimestamp: sdk.String("mollitia"),
                        MetricUnit: "id",
                        MetricValue: "quibusdam",
                        RoleArn: "ipsa",
                    },
                    DynamoDB: &shared.DynamoDBAction{
                        HashKeyField: "accusamus",
                        HashKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                        HashKeyValue: "quam",
                        Operation: sdk.String("similique"),
                        PayloadField: sdk.String("delectus"),
                        RangeKeyField: sdk.String("saepe"),
                        RangeKeyType: shared.DynamoKeyTypeEnumNumber.ToPointer(),
                        RangeKeyValue: sdk.String("nobis"),
                        RoleArn: "at",
                        TableName: "molestias",
                    },
                    DynamoDBv2: &shared.DynamoDBv2Action{
                        PutItem: shared.PutItemInput{
                            TableName: "aut",
                        },
                        RoleArn: "temporibus",
                    },
                    Elasticsearch: &shared.ElasticsearchAction{
                        Endpoint: "tenetur",
                        ID: "448a47f9-390c-4588-8098-3dabf9ef3ffd",
                        Index: "repellendus",
                        RoleArn: "omnis",
                        Type: "delectus",
                    },
                    Firehose: &shared.FirehoseAction{
                        BatchMode: sdk.Bool(false),
                        DeliveryStreamName: "odio",
                        RoleArn: "voluptatibus",
                        Separator: sdk.String("aut"),
                    },
                    HTTP: &shared.HTTPAction{
                        Auth: &shared.HTTPAuthorization{
                            Sigv4: &shared.SigV4Authorization{
                                RoleArn: "quam",
                                ServiceName: "omnis",
                                SigningRegion: "similique",
                            },
                        },
                        ConfirmationURL: sdk.String("asperiores"),
                        Headers: []shared.HTTPActionHeader{
                            shared.HTTPActionHeader{
                                Key: "facere",
                                Value: "neque",
                            },
                            shared.HTTPActionHeader{
                                Key: "quis",
                                Value: "in",
                            },
                        },
                        URL: "sed",
                    },
                    IotAnalytics: &shared.IotAnalyticsAction{
                        BatchMode: sdk.Bool(false),
                        ChannelArn: sdk.String("non"),
                        ChannelName: sdk.String("porro"),
                        RoleArn: sdk.String("fugiat"),
                    },
                    IotEvents: &shared.IotEventsAction{
                        BatchMode: sdk.Bool(false),
                        InputName: "soluta",
                        MessageID: sdk.String("ipsa"),
                        RoleArn: "reiciendis",
                    },
                    IotSiteWise: &shared.IotSiteWiseAction{
                        PutAssetPropertyValueEntries: []shared.PutAssetPropertyValueEntry{
                            shared.PutAssetPropertyValueEntry{
                                AssetID: sdk.String("vero"),
                                EntryID: sdk.String("eos"),
                                PropertyAlias: sdk.String("quas"),
                                PropertyID: sdk.String("quasi"),
                                PropertyValues: []shared.AssetPropertyValue{
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("praesentium"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("iusto"),
                                            TimeInSeconds: "fugiat",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("enim"),
                                            DoubleValue: sdk.String("iure"),
                                            IntegerValue: sdk.String("laudantium"),
                                            StringValue: sdk.String("modi"),
                                        },
                                    },
                                },
                            },
                            shared.PutAssetPropertyValueEntry{
                                AssetID: sdk.String("magnam"),
                                EntryID: sdk.String("accusamus"),
                                PropertyAlias: sdk.String("nulla"),
                                PropertyID: sdk.String("repudiandae"),
                                PropertyValues: []shared.AssetPropertyValue{
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("praesentium"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("enim"),
                                            TimeInSeconds: "animi",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("unde"),
                                            DoubleValue: sdk.String("quae"),
                                            IntegerValue: sdk.String("eum"),
                                            StringValue: sdk.String("nostrum"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("eveniet"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("laboriosam"),
                                            TimeInSeconds: "ratione",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("blanditiis"),
                                            DoubleValue: sdk.String("quidem"),
                                            IntegerValue: sdk.String("illum"),
                                            StringValue: sdk.String("reiciendis"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("placeat"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("dolores"),
                                            TimeInSeconds: "consequatur",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("nesciunt"),
                                            DoubleValue: sdk.String("quia"),
                                            IntegerValue: sdk.String("quidem"),
                                            StringValue: sdk.String("voluptas"),
                                        },
                                    },
                                    shared.AssetPropertyValue{
                                        Quality: sdk.String("quo"),
                                        Timestamp: shared.AssetPropertyTimestamp{
                                            OffsetInNanos: sdk.String("laudantium"),
                                            TimeInSeconds: "dignissimos",
                                        },
                                        Value: shared.AssetPropertyVariant{
                                            BooleanValue: sdk.String("omnis"),
                                            DoubleValue: sdk.String("omnis"),
                                            IntegerValue: sdk.String("fugit"),
                                            StringValue: sdk.String("dolorem"),
                                        },
                                    },
                                },
                            },
                        },
                        RoleArn: "quidem",
                    },
                    Kafka: &shared.KafkaAction{
                        ClientProperties: map[string]string{
                            "debitis": "vitae",
                            "dolor": "ad",
                        },
                        DestinationArn: "atque",
                        Key: sdk.String("ut"),
                        Partition: sdk.String("asperiores"),
                        Topic: "reprehenderit",
                    },
                    Kinesis: &shared.KinesisAction{
                        PartitionKey: sdk.String("deserunt"),
                        RoleArn: "itaque",
                        StreamName: "et",
                    },
                    Lambda: &shared.LambdaAction{
                        FunctionArn: "eos",
                    },
                    Location: &shared.LocationAction{
                        DeviceID: "impedit",
                        Latitude: "ex",
                        Longitude: "praesentium",
                        RoleArn: "natus",
                        Timestamp: &shared.LocationTimestamp{
                            Unit: sdk.String("vitae"),
                            Value: "tenetur",
                        },
                        TrackerName: "laudantium",
                    },
                    OpenSearch: &shared.OpenSearchAction{
                        Endpoint: "aspernatur",
                        ID: "ce115717-2305-4377-9cfa-89df975e3566",
                        Index: "rem",
                        RoleArn: "aliquid",
                        Type: "aperiam",
                    },
                    Republish: &shared.RepublishAction{
                        Headers: &shared.MqttHeaders{
                            ContentType: sdk.String("perspiciatis"),
                            CorrelationData: sdk.String("fugit"),
                            MessageExpiry: sdk.String("itaque"),
                            PayloadFormatIndicator: sdk.String("unde"),
                            ResponseTopic: sdk.String("cumque"),
                            UserProperties: []shared.UserProperty{
                                shared.UserProperty{
                                    Key: "repellendus",
                                    Value: "temporibus",
                                },
                            },
                        },
                        Qos: sdk.Int64(792106),
                        RoleArn: "minima",
                        Topic: "a",
                    },
                    S3: &shared.S3Action{
                        BucketName: "beatae",
                        CannedACL: shared.CannedAccessControlListEnumPrivate.ToPointer(),
                        Key: "veritatis",
                        RoleArn: "facere",
                    },
                    Salesforce: &shared.SalesforceAction{
                        Token: "earum",
                        URL: "laborum",
                    },
                    Sns: &shared.SnsAction{
                        MessageFormat: shared.MessageFormatEnumRaw.ToPointer(),
                        RoleArn: "voluptatem",
                        TargetArn: "odit",
                    },
                    Sqs: &shared.SqsAction{
                        QueueURL: "aliquid",
                        RoleArn: "pariatur",
                        UseBase64: sdk.Bool(false),
                    },
                    StepFunctions: &shared.StepFunctionsAction{
                        ExecutionNamePrefix: sdk.String("enim"),
                        RoleArn: "numquam",
                        StateMachineName: "architecto",
                    },
                    Timestream: &shared.TimestreamAction{
                        DatabaseName: "est",
                        Dimensions: []shared.TimestreamDimension{
                            shared.TimestreamDimension{
                                Name: "Dr. Terry Mohr",
                                Value: "expedita",
                            },
                            shared.TimestreamDimension{
                                Name: "Evelyn Kuhlman MD",
                                Value: "placeat",
                            },
                        },
                        RoleArn: "quod",
                        TableName: "eligendi",
                        Timestamp: &shared.TimestreamTimestamp{
                            Unit: "sit",
                            Value: "possimus",
                        },
                    },
                },
                RuleDisabled: sdk.Bool(false),
                SQL: sdk.String("distinctio"),
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("tempora"),
        RuleName: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchIndex

<p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchIndex(ctx, operations.SearchIndexRequest{
        RequestBody: operations.SearchIndexRequestBody{
            IndexName: sdk.String("doloremque"),
            MaxResults: sdk.Int64(549419),
            NextToken: sdk.String("reiciendis"),
            QueryString: "facilis",
            QueryVersion: sdk.String("aliquam"),
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchIndexResponse != nil {
        // handle response
    }
}
```

## SetDefaultAuthorizer

<p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetDefaultAuthorizer(ctx, operations.SetDefaultAuthorizerRequest{
        RequestBody: operations.SetDefaultAuthorizerRequestBody{
            AuthorizerName: "placeat",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetDefaultAuthorizerResponse != nil {
        // handle response
    }
}
```

## SetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetDefaultPolicyVersion(ctx, operations.SetDefaultPolicyVersionRequest{
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("itaque"),
        PolicyName: "fuga",
        PolicyVersionID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetLoggingOptions

<p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>

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
    res, err := s.SDK.SetLoggingOptions(ctx, operations.SetLoggingOptionsRequest{
        RequestBody: operations.SetLoggingOptionsRequestBody{
            LoggingOptionsPayload: operations.SetLoggingOptionsRequestBodyLoggingOptionsPayload{
                LogLevel: shared.LogLevelEnumInfo.ToPointer(),
                RoleArn: sdk.String("aspernatur"),
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetV2LoggingLevel

<p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>

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
    res, err := s.SDK.SetV2LoggingLevel(ctx, operations.SetV2LoggingLevelRequest{
        RequestBody: operations.SetV2LoggingLevelRequestBody{
            LogLevel: operations.SetV2LoggingLevelRequestBodyLogLevelEnumDebug,
            LogTarget: operations.SetV2LoggingLevelRequestBodyLogTarget{
                TargetName: sdk.String("consequatur"),
                TargetType: shared.LogTargetTypeEnumSourceIP.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetV2LoggingOptions

<p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetV2LoggingOptions(ctx, operations.SetV2LoggingOptionsRequest{
        RequestBody: operations.SetV2LoggingOptionsRequestBody{
            DefaultLogLevel: operations.SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumError.ToPointer(),
            DisableAllLogs: sdk.Bool(false),
            RoleArn: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartAuditMitigationActionsTask

<p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartAuditMitigationActionsTask(ctx, operations.StartAuditMitigationActionsTaskRequest{
        RequestBody: operations.StartAuditMitigationActionsTaskRequestBody{
            AuditCheckToActionsMapping: map[string][]string{
                "eligendi": []string{
                    "dignissimos",
                    "fugit",
                    "ratione",
                    "possimus",
                },
                "quaerat": []string{
                    "natus",
                },
            },
            ClientRequestToken: "esse",
            Target: operations.StartAuditMitigationActionsTaskRequestBodyTarget{
                AuditCheckToReasonCodeFilter: map[string][]string{
                    "deserunt": []string{
                        "ipsa",
                    },
                    "debitis": []string{
                        "deserunt",
                        "hic",
                        "ducimus",
                    },
                    "consequuntur": []string{
                        "libero",
                        "quia",
                    },
                    "omnis": []string{
                        "qui",
                    },
                },
                AuditTaskID: sdk.String("explicabo"),
                FindingIds: []string{
                    "amet",
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        TaskID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAuditMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## StartDetectMitigationActionsTask

<p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartDetectMitigationActionsTask(ctx, operations.StartDetectMitigationActionsTaskRequest{
        RequestBody: operations.StartDetectMitigationActionsTaskRequestBody{
            Actions: []string{
                "iusto",
                "dignissimos",
                "provident",
            },
            ClientRequestToken: "occaecati",
            IncludeOnlyActiveViolations: sdk.Bool(false),
            IncludeSuppressedAlerts: sdk.Bool(false),
            Target: operations.StartDetectMitigationActionsTaskRequestBodyTarget{
                BehaviorName: sdk.String("assumenda"),
                SecurityProfileName: sdk.String("sunt"),
                ViolationIds: []string{
                    "vero",
                },
            },
            ViolationEventOccurrenceRange: &operations.StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange{
                EndTime: types.MustTimeFromString("2021-06-24T14:54:46.838Z"),
                StartTime: types.MustTimeFromString("2022-01-01T15:46:37.757Z"),
            },
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("nemo"),
        TaskID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDetectMitigationActionsTaskResponse != nil {
        // handle response
    }
}
```

## StartOnDemandAuditTask

<p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartOnDemandAuditTask(ctx, operations.StartOnDemandAuditTaskRequest{
        RequestBody: operations.StartOnDemandAuditTaskRequestBody{
            TargetCheckNames: []string{
                "porro",
                "quaerat",
                "magni",
                "cumque",
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartOnDemandAuditTaskResponse != nil {
        // handle response
    }
}
```

## StartThingRegistrationTask

<p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartThingRegistrationTask(ctx, operations.StartThingRegistrationTaskRequest{
        RequestBody: operations.StartThingRegistrationTaskRequestBody{
            InputFileBucket: "possimus",
            InputFileKey: "delectus",
            RoleArn: "harum",
            TemplateBody: "aliquam",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartThingRegistrationTaskResponse != nil {
        // handle response
    }
}
```

## StopThingRegistrationTask

<p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopThingRegistrationTask(ctx, operations.StopThingRegistrationTaskRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("vitae"),
        TaskID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopThingRegistrationTaskResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: "nam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "rerum",
                    Value: sdk.String("assumenda"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestAuthorization

<p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>

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
    res, err := s.SDK.TestAuthorization(ctx, operations.TestAuthorizationRequest{
        RequestBody: operations.TestAuthorizationRequestBody{
            AuthInfos: []shared.AuthInfo{
                shared.AuthInfo{
                    ActionType: shared.ActionTypeEnumReceive.ToPointer(),
                    Resources: []string{
                        "tempore",
                        "recusandae",
                    },
                },
                shared.AuthInfo{
                    ActionType: shared.ActionTypeEnumSubscribe.ToPointer(),
                    Resources: []string{
                        "voluptas",
                        "laudantium",
                        "corporis",
                    },
                },
                shared.AuthInfo{
                    ActionType: shared.ActionTypeEnumReceive.ToPointer(),
                    Resources: []string{
                        "deleniti",
                        "necessitatibus",
                        "aspernatur",
                    },
                },
                shared.AuthInfo{
                    ActionType: shared.ActionTypeEnumPublish.ToPointer(),
                    Resources: []string{
                        "vero",
                        "eos",
                        "voluptatem",
                    },
                },
            },
            CognitoIdentityPoolID: sdk.String("temporibus"),
            PolicyNamesToAdd: []string{
                "quae",
                "commodi",
                "a",
            },
            PolicyNamesToSkip: []string{
                "sed",
                "nam",
                "quia",
                "iusto",
            },
            Principal: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        ClientID: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestAuthorizationResponse != nil {
        // handle response
    }
}
```

## TestInvokeAuthorizer

<p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestInvokeAuthorizer(ctx, operations.TestInvokeAuthorizerRequest{
        RequestBody: operations.TestInvokeAuthorizerRequestBody{
            HTTPContext: &operations.TestInvokeAuthorizerRequestBodyHTTPContext{
                Headers: map[string]string{
                    "nemo": "non",
                    "recusandae": "omnis",
                    "ipsa": "aliquam",
                },
                QueryString: sdk.String("dolor"),
            },
            MqttContext: &operations.TestInvokeAuthorizerRequestBodyMqttContext{
                ClientID: sdk.String("occaecati"),
                Password: sdk.String("quibusdam"),
                Username: sdk.String("Ceasar26"),
            },
            TLSContext: &operations.TestInvokeAuthorizerRequestBodyTLSContext{
                ServerName: sdk.String("commodi"),
            },
            Token: sdk.String("ipsam"),
            TokenSignature: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("odio"),
        AuthorizerName: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestInvokeAuthorizerResponse != nil {
        // handle response
    }
}
```

## TransferCertificate

<p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TransferCertificate(ctx, operations.TransferCertificateRequest{
        RequestBody: operations.TransferCertificateRequestBody{
            TransferMessage: sdk.String("voluptatum"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        CertificateID: "optio",
        TargetAwsAccount: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCertificateResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        RequestBody: operations.UntagResourceRequestBody{
            ResourceArn: "maiores",
            TagKeys: []string{
                "sed",
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAccountAuditConfiguration

<p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>

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
    res, err := s.SDK.UpdateAccountAuditConfiguration(ctx, operations.UpdateAccountAuditConfigurationRequest{
        RequestBody: operations.UpdateAccountAuditConfigurationRequestBody{
            AuditCheckConfigurations: map[string]shared.AuditCheckConfiguration{
                "exercitationem": shared.AuditCheckConfiguration{
                    Enabled: sdk.Bool(false),
                },
                "veniam": shared.AuditCheckConfiguration{
                    Enabled: sdk.Bool(false),
                },
                "modi": shared.AuditCheckConfiguration{
                    Enabled: sdk.Bool(false),
                },
            },
            AuditNotificationTargetConfigurations: map[string]shared.AuditNotificationTarget{
                "quae": shared.AuditNotificationTarget{
                    Enabled: sdk.Bool(false),
                    RoleArn: sdk.String("similique"),
                    TargetArn: sdk.String("possimus"),
                },
            },
            RoleArn: sdk.String("quo"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountAuditConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateAuditSuppression

 Updates a Device Defender audit suppression. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAuditSuppression(ctx, operations.UpdateAuditSuppressionRequest{
        RequestBody: operations.UpdateAuditSuppressionRequestBody{
            CheckName: "deserunt",
            Description: sdk.String("fugit"),
            ExpirationDate: types.MustTimeFromString("2022-03-22T14:59:15.400Z"),
            ResourceIdentifier: operations.UpdateAuditSuppressionRequestBodyResourceIdentifier{
                Account: sdk.String("molestiae"),
                CaCertificateID: sdk.String("maxime"),
                ClientID: sdk.String("facere"),
                CognitoIdentityPoolID: sdk.String("impedit"),
                DeviceCertificateArn: sdk.String("cupiditate"),
                DeviceCertificateID: sdk.String("deleniti"),
                IamRoleArn: sdk.String("quasi"),
                IssuerCertificateIdentifier: &shared.IssuerCertificateIdentifier{
                    IssuerCertificateSerialNumber: sdk.String("maiores"),
                    IssuerCertificateSubject: sdk.String("voluptatem"),
                    IssuerID: sdk.String("aliquid"),
                },
                PolicyVersionIdentifier: &shared.PolicyVersionIdentifier{
                    PolicyName: sdk.String("laudantium"),
                    PolicyVersionID: sdk.String("unde"),
                },
                RoleAliasArn: sdk.String("corrupti"),
            },
            SuppressIndefinitely: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAuditSuppressionResponse != nil {
        // handle response
    }
}
```

## UpdateAuthorizer

<p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAuthorizer(ctx, operations.UpdateAuthorizerRequest{
        RequestBody: operations.UpdateAuthorizerRequestBody{
            AuthorizerFunctionArn: sdk.String("minus"),
            EnableCachingForHTTP: sdk.Bool(false),
            Status: operations.UpdateAuthorizerRequestBodyStatusEnumInactive.ToPointer(),
            TokenKeyName: sdk.String("similique"),
            TokenSigningPublicKeys: map[string]string{
                "consectetur": "labore",
                "laudantium": "cumque",
                "adipisci": "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        AuthorizerName: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAuthorizerResponse != nil {
        // handle response
    }
}
```

## UpdateBillingGroup

<p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateBillingGroup(ctx, operations.UpdateBillingGroupRequest{
        RequestBody: operations.UpdateBillingGroupRequestBody{
            BillingGroupProperties: operations.UpdateBillingGroupRequestBodyBillingGroupProperties{
                BillingGroupDescription: sdk.String("doloribus"),
            },
            ExpectedVersion: sdk.Int64(757824),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        BillingGroupName: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBillingGroupResponse != nil {
        // handle response
    }
}
```

## UpdateCACertificate

<p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCACertificate(ctx, operations.UpdateCACertificateRequest{
        RequestBody: operations.UpdateCACertificateRequestBody{
            RegistrationConfig: &operations.UpdateCACertificateRequestBodyRegistrationConfig{
                RoleArn: sdk.String("reiciendis"),
                TemplateBody: sdk.String("vitae"),
                TemplateName: sdk.String("ullam"),
            },
            RemoveAutoRegistration: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("est"),
        CaCertificateID: "perferendis",
        NewAutoRegistrationStatus: operations.UpdateCACertificateNewAutoRegistrationStatusEnumDisable.ToPointer(),
        NewStatus: operations.UpdateCACertificateNewStatusEnumInactive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCertificate

<p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCertificate(ctx, operations.UpdateCertificateRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("maxime"),
        CertificateID: "maxime",
        NewStatus: operations.UpdateCertificateNewStatusEnumRegisterInactive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomMetric

<p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCustomMetric(ctx, operations.UpdateCustomMetricRequest{
        RequestBody: operations.UpdateCustomMetricRequestBody{
            DisplayName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        MetricName: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomMetricResponse != nil {
        // handle response
    }
}
```

## UpdateDimension

<p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDimension(ctx, operations.UpdateDimensionRequest{
        RequestBody: operations.UpdateDimensionRequestBody{
            StringValues: []string{
                "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("quidem"),
        Name: "Owen Hills",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDimensionResponse != nil {
        // handle response
    }
}
```

## UpdateDomainConfiguration

<p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDomainConfiguration(ctx, operations.UpdateDomainConfigurationRequest{
        RequestBody: operations.UpdateDomainConfigurationRequestBody{
            AuthorizerConfig: &operations.UpdateDomainConfigurationRequestBodyAuthorizerConfig{
                AllowAuthorizerOverride: sdk.Bool(false),
                DefaultAuthorizerName: sdk.String("aspernatur"),
            },
            DomainConfigurationStatus: operations.UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnumDisabled.ToPointer(),
            RemoveAuthorizerConfig: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("facilis"),
        DomainConfigurationName: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateDynamicThingGroup

<p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>

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
    res, err := s.SDK.UpdateDynamicThingGroup(ctx, operations.UpdateDynamicThingGroupRequest{
        RequestBody: operations.UpdateDynamicThingGroupRequestBody{
            ExpectedVersion: sdk.Int64(968212),
            IndexName: sdk.String("dolores"),
            QueryString: sdk.String("dolore"),
            QueryVersion: sdk.String("pariatur"),
            ThingGroupProperties: operations.UpdateDynamicThingGroupRequestBodyThingGroupProperties{
                AttributePayload: &shared.AttributePayload{
                    Attributes: map[string]string{
                        "cupiditate": "nemo",
                        "natus": "nisi",
                        "provident": "amet",
                    },
                    Merge: sdk.Bool(false),
                },
                ThingGroupDescription: sdk.String("dolor"),
            },
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("velit"),
        ThingGroupName: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDynamicThingGroupResponse != nil {
        // handle response
    }
}
```

## UpdateEventConfigurations

<p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>

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
    res, err := s.SDK.UpdateEventConfigurations(ctx, operations.UpdateEventConfigurationsRequest{
        RequestBody: operations.UpdateEventConfigurationsRequestBody{
            EventConfigurations: map[string]shared.Configuration{
                "occaecati": shared.Configuration{
                    Enabled: sdk.Bool(false),
                },
                "numquam": shared.Configuration{
                    Enabled: sdk.Bool(false),
                },
                "fugiat": shared.Configuration{
                    Enabled: sdk.Bool(false),
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEventConfigurationsResponse != nil {
        // handle response
    }
}
```

## UpdateFleetMetric

<p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>

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
    res, err := s.SDK.UpdateFleetMetric(ctx, operations.UpdateFleetMetricRequest{
        RequestBody: operations.UpdateFleetMetricRequestBody{
            AggregationField: sdk.String("necessitatibus"),
            AggregationType: &operations.UpdateFleetMetricRequestBodyAggregationType{
                Name: shared.AggregationTypeNameEnumPercentiles.ToPointer(),
                Values: []string{
                    "corrupti",
                },
            },
            Description: sdk.String("cupiditate"),
            ExpectedVersion: sdk.Int64(974724),
            IndexName: "ullam",
            Period: sdk.Int64(680370),
            QueryString: sdk.String("soluta"),
            QueryVersion: sdk.String("cum"),
            Unit: operations.UpdateFleetMetricRequestBodyUnitEnumTerabits.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        MetricName: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateIndexingConfiguration

<p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>

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
    res, err := s.SDK.UpdateIndexingConfiguration(ctx, operations.UpdateIndexingConfigurationRequest{
        RequestBody: operations.UpdateIndexingConfigurationRequestBody{
            ThingGroupIndexingConfiguration: &operations.UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration{
                CustomFields: []shared.Field{
                    shared.Field{
                        Name: sdk.String("Travis Leannon"),
                        Type: shared.FieldTypeEnumBoolean.ToPointer(),
                    },
                },
                ManagedFields: []shared.Field{
                    shared.Field{
                        Name: sdk.String("Rodney Orn"),
                        Type: shared.FieldTypeEnumNumber.ToPointer(),
                    },
                    shared.Field{
                        Name: sdk.String("Stephanie Hansen"),
                        Type: shared.FieldTypeEnumString.ToPointer(),
                    },
                },
                ThingGroupIndexingMode: shared.ThingGroupIndexingModeEnumOff.ToPointer(),
            },
            ThingIndexingConfiguration: &operations.UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration{
                CustomFields: []shared.Field{
                    shared.Field{
                        Name: sdk.String("Debra Kerluke"),
                        Type: shared.FieldTypeEnumNumber.ToPointer(),
                    },
                    shared.Field{
                        Name: sdk.String("Nettie Hartmann"),
                        Type: shared.FieldTypeEnumString.ToPointer(),
                    },
                },
                DeviceDefenderIndexingMode: shared.DeviceDefenderIndexingModeEnumViolations.ToPointer(),
                Filter: &shared.IndexingFilter{
                    NamedShadowNames: []string{
                        "nemo",
                        "molestias",
                        "architecto",
                        "expedita",
                    },
                },
                ManagedFields: []shared.Field{
                    shared.Field{
                        Name: sdk.String("Malcolm Shanahan"),
                        Type: shared.FieldTypeEnumNumber.ToPointer(),
                    },
                    shared.Field{
                        Name: sdk.String("Jean Corkery"),
                        Type: shared.FieldTypeEnumNumber.ToPointer(),
                    },
                    shared.Field{
                        Name: sdk.String("Jesse Abbott"),
                        Type: shared.FieldTypeEnumBoolean.ToPointer(),
                    },
                    shared.Field{
                        Name: sdk.String("Ms. Alberto Hagenes"),
                        Type: shared.FieldTypeEnumNumber.ToPointer(),
                    },
                },
                NamedShadowIndexingMode: shared.NamedShadowIndexingModeEnumOn.ToPointer(),
                ThingConnectivityIndexingMode: shared.ThingConnectivityIndexingModeEnumOff.ToPointer(),
                ThingIndexingMode: shared.ThingIndexingModeEnumRegistry.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIndexingConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateJob

<p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>

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
    res, err := s.SDK.UpdateJob(ctx, operations.UpdateJobRequest{
        RequestBody: operations.UpdateJobRequestBody{
            AbortConfig: &operations.UpdateJobRequestBodyAbortConfig{
                CriteriaList: []shared.AbortCriteria{
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumRejected,
                        MinNumberOfExecutedThings: 713246,
                        ThresholdPercentage: 3753.78,
                    },
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumAll,
                        MinNumberOfExecutedThings: 412024,
                        ThresholdPercentage: 4281.99,
                    },
                    shared.AbortCriteria{
                        Action: shared.AbortActionEnumCancel,
                        FailureType: shared.JobExecutionFailureTypeEnumAll,
                        MinNumberOfExecutedThings: 881067,
                        ThresholdPercentage: 9700.97,
                    },
                },
            },
            Description: sdk.String("consequatur"),
            JobExecutionsRetryConfig: &operations.UpdateJobRequestBodyJobExecutionsRetryConfig{
                CriteriaList: []shared.RetryCriteria{
                    shared.RetryCriteria{
                        FailureType: shared.RetryableFailureTypeEnumFailed,
                        NumberOfRetries: 913433,
                    },
                },
            },
            JobExecutionsRolloutConfig: &operations.UpdateJobRequestBodyJobExecutionsRolloutConfig{
                ExponentialRate: &shared.ExponentialRolloutRate{
                    BaseRatePerMinute: 590280,
                    IncrementFactor: 9784.6,
                    RateIncreaseCriteria: shared.RateIncreaseCriteria{
                        NumberOfNotifiedThings: sdk.Int64(311449),
                        NumberOfSucceededThings: sdk.Int64(256647),
                    },
                },
                MaximumPerMinute: sdk.Int64(248276),
            },
            PresignedURLConfig: &operations.UpdateJobRequestBodyPresignedURLConfig{
                ExpiresInSec: sdk.Int64(741024),
                RoleArn: sdk.String("incidunt"),
            },
            TimeoutConfig: &operations.UpdateJobRequestBodyTimeoutConfig{
                InProgressTimeoutInMinutes: sdk.Int64(175455),
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        JobID: "corrupti",
        NamespaceID: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateMitigationAction

<p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>

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
    res, err := s.SDK.UpdateMitigationAction(ctx, operations.UpdateMitigationActionRequest{
        RequestBody: operations.UpdateMitigationActionRequestBody{
            ActionParams: &operations.UpdateMitigationActionRequestBodyActionParams{
                AddThingsToThingGroupParams: &shared.AddThingsToThingGroupParams{
                    OverrideDynamicGroups: sdk.Bool(false),
                    ThingGroupNames: []string{
                        "quibusdam",
                        "est",
                        "commodi",
                    },
                },
                EnableIoTLoggingParams: &shared.EnableIoTLoggingParams{
                    LogLevel: shared.LogLevelEnumWarn,
                    RoleArnForLogging: "autem",
                },
                PublishFindingToSnsParams: &shared.PublishFindingToSnsParams{
                    TopicArn: "dicta",
                },
                ReplaceDefaultPolicyVersionParams: &shared.ReplaceDefaultPolicyVersionParams{
                    TemplateName: shared.PolicyTemplateNameEnumBlankPolicy,
                },
                UpdateCACertificateParams: &shared.UpdateCACertificateParams{
                    Action: shared.CACertificateUpdateActionEnumDeactivate,
                },
                UpdateDeviceCertificateParams: &shared.UpdateDeviceCertificateParams{
                    Action: shared.DeviceCertificateUpdateActionEnumDeactivate,
                },
            },
            RoleArn: sdk.String("recusandae"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        ActionName: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMitigationActionResponse != nil {
        // handle response
    }
}
```

## UpdateProvisioningTemplate

<p>Updates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProvisioningTemplate(ctx, operations.UpdateProvisioningTemplateRequest{
        RequestBody: operations.UpdateProvisioningTemplateRequestBody{
            DefaultVersionID: sdk.Int64(539703),
            Description: sdk.String("doloribus"),
            Enabled: sdk.Bool(false),
            PreProvisioningHook: &operations.UpdateProvisioningTemplateRequestBodyPreProvisioningHook{
                PayloadVersion: sdk.String("pariatur"),
                TargetArn: sdk.String("aut"),
            },
            ProvisioningRoleArn: sdk.String("similique"),
            RemovePreProvisioningHook: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        TemplateName: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProvisioningTemplateResponse != nil {
        // handle response
    }
}
```

## UpdateRoleAlias

<p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRoleAlias(ctx, operations.UpdateRoleAliasRequest{
        RequestBody: operations.UpdateRoleAliasRequestBody{
            CredentialDurationSeconds: sdk.Int64(859537),
            RoleArn: sdk.String("dolorem"),
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolore"),
        RoleAlias: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRoleAliasResponse != nil {
        // handle response
    }
}
```

## UpdateScheduledAudit

<p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateScheduledAudit(ctx, operations.UpdateScheduledAuditRequest{
        RequestBody: operations.UpdateScheduledAuditRequestBody{
            DayOfMonth: sdk.String("illum"),
            DayOfWeek: operations.UpdateScheduledAuditRequestBodyDayOfWeekEnumTue.ToPointer(),
            Frequency: operations.UpdateScheduledAuditRequestBodyFrequencyEnumBiweekly.ToPointer(),
            TargetCheckNames: []string{
                "atque",
            },
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        ScheduledAuditName: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateScheduledAuditResponse != nil {
        // handle response
    }
}
```

## UpdateSecurityProfile

<p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>

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
    res, err := s.SDK.UpdateSecurityProfile(ctx, operations.UpdateSecurityProfileRequest{
        RequestBody: operations.UpdateSecurityProfileRequestBody{
            AdditionalMetricsToRetain: []string{
                "cupiditate",
                "suscipit",
            },
            AdditionalMetricsToRetainV2: []shared.MetricToRetain{
                shared.MetricToRetain{
                    Metric: "repellendus",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "delectus",
                        Operator: shared.DimensionValueOperatorEnumIn.ToPointer(),
                    },
                },
                shared.MetricToRetain{
                    Metric: "mollitia",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "possimus",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                },
                shared.MetricToRetain{
                    Metric: "neque",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "quam",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                },
                shared.MetricToRetain{
                    Metric: "debitis",
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "voluptatum",
                        Operator: shared.DimensionValueOperatorEnumIn.ToPointer(),
                    },
                },
            },
            AlertTargets: map[string]shared.AlertTarget{
                "vitae": shared.AlertTarget{
                    AlertTargetArn: "cumque",
                    RoleArn: "architecto",
                },
                "sint": shared.AlertTarget{
                    AlertTargetArn: "eligendi",
                    RoleArn: "occaecati",
                },
                "quis": shared.AlertTarget{
                    AlertTargetArn: "tempore",
                    RoleArn: "officia",
                },
                "iste": shared.AlertTarget{
                    AlertTargetArn: "unde",
                    RoleArn: "quas",
                },
            },
            Behaviors: []shared.Behavior{
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumInCidrSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(531568),
                        ConsecutiveDatapointsToClear: sdk.Int64(957510),
                        DurationSeconds: sdk.Int64(645139),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumLow,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("hic"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "sint",
                                "autem",
                            },
                            Count: sdk.Int64(614368),
                            Number: sdk.Float64(5865.56),
                            Numbers: []float64{
                                6837.83,
                            },
                            Ports: []int64{
                                222771,
                                528082,
                                561858,
                                801274,
                            },
                            Strings: []string{
                                "eaque",
                                "consectetur",
                                "autem",
                                "vitae",
                            },
                        },
                    },
                    Metric: sdk.String("numquam"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "incidunt",
                        Operator: shared.DimensionValueOperatorEnumIn.ToPointer(),
                    },
                    Name: "Sylvester Kling",
                    SuppressAlerts: sdk.Bool(false),
                },
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumInCidrSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(654199),
                        ConsecutiveDatapointsToClear: sdk.Int64(10585),
                        DurationSeconds: sdk.Int64(916486),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumHigh,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("qui"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "exercitationem",
                                "ipsum",
                                "laboriosam",
                                "doloremque",
                            },
                            Count: sdk.Int64(153370),
                            Number: sdk.Float64(5301.99),
                            Numbers: []float64{
                                9514.11,
                                9324.44,
                                9103.96,
                                9992.08,
                            },
                            Ports: []int64{
                                237208,
                                303549,
                                71751,
                            },
                            Strings: []string{
                                "sed",
                                "necessitatibus",
                            },
                        },
                    },
                    Metric: sdk.String("possimus"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "dignissimos",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                    Name: "Marion Franey",
                    SuppressAlerts: sdk.Bool(false),
                },
            },
            DeleteAdditionalMetricsToRetain: sdk.Bool(false),
            DeleteAlertTargets: sdk.Bool(false),
            DeleteBehaviors: sdk.Bool(false),
            SecurityProfileDescription: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("est"),
        ExpectedVersion: sdk.Int64(446484),
        SecurityProfileName: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSecurityProfileResponse != nil {
        // handle response
    }
}
```

## UpdateStream

<p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>

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
    res, err := s.SDK.UpdateStream(ctx, operations.UpdateStreamRequest{
        RequestBody: operations.UpdateStreamRequestBody{
            Description: sdk.String("voluptate"),
            Files: []shared.StreamFile{
                shared.StreamFile{
                    FileID: sdk.Int64(962120),
                    S3Location: &shared.S3Location{
                        Bucket: sdk.String("incidunt"),
                        Key: sdk.String("dolore"),
                        Version: sdk.String("nemo"),
                    },
                },
            },
            RoleArn: sdk.String("est"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("fuga"),
        StreamID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStreamResponse != nil {
        // handle response
    }
}
```

## UpdateThing

<p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateThing(ctx, operations.UpdateThingRequest{
        RequestBody: operations.UpdateThingRequestBody{
            AttributePayload: &operations.UpdateThingRequestBodyAttributePayload{
                Attributes: map[string]string{
                    "cupiditate": "soluta",
                    "tempore": "culpa",
                    "fugiat": "inventore",
                    "atque": "ad",
                },
                Merge: sdk.Bool(false),
            },
            ExpectedVersion: sdk.Int64(959420),
            RemoveThingType: sdk.Bool(false),
            ThingTypeName: sdk.String("voluptates"),
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ThingName: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateThingResponse != nil {
        // handle response
    }
}
```

## UpdateThingGroup

<p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>

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
    res, err := s.SDK.UpdateThingGroup(ctx, operations.UpdateThingGroupRequest{
        RequestBody: operations.UpdateThingGroupRequestBody{
            ExpectedVersion: sdk.Int64(763934),
            ThingGroupProperties: operations.UpdateThingGroupRequestBodyThingGroupProperties{
                AttributePayload: &shared.AttributePayload{
                    Attributes: map[string]string{
                        "sequi": "atque",
                        "maiores": "expedita",
                        "rerum": "totam",
                    },
                    Merge: sdk.Bool(false),
                },
                ThingGroupDescription: sdk.String("quod"),
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ThingGroupName: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateThingGroupResponse != nil {
        // handle response
    }
}
```

## UpdateThingGroupsForThing

<p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateThingGroupsForThing(ctx, operations.UpdateThingGroupsForThingRequest{
        RequestBody: operations.UpdateThingGroupsForThingRequestBody{
            OverrideDynamicGroups: sdk.Bool(false),
            ThingGroupsToAdd: []string{
                "distinctio",
                "eius",
            },
            ThingGroupsToRemove: []string{
                "veniam",
            },
            ThingName: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateThingGroupsForThingResponse != nil {
        // handle response
    }
}
```

## UpdateTopicRuleDestination

<p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTopicRuleDestination(ctx, operations.UpdateTopicRuleDestinationRequest{
        RequestBody: operations.UpdateTopicRuleDestinationRequestBody{
            Arn: "porro",
            Status: operations.UpdateTopicRuleDestinationRequestBodyStatusEnumDisabled,
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTopicRuleDestinationResponse != nil {
        // handle response
    }
}
```

## ValidateSecurityProfileBehaviors

<p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>

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
    res, err := s.SDK.ValidateSecurityProfileBehaviors(ctx, operations.ValidateSecurityProfileBehaviorsRequest{
        RequestBody: operations.ValidateSecurityProfileBehaviorsRequestBody{
            Behaviors: []shared.Behavior{
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumNotInPortSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(481307),
                        ConsecutiveDatapointsToClear: sdk.Int64(456473),
                        DurationSeconds: sdk.Int64(687352),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumLow,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("quod"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "totam",
                            },
                            Count: sdk.Int64(873681),
                            Number: sdk.Float64(2943.16),
                            Numbers: []float64{
                                6380.85,
                                9780.79,
                                5851.09,
                            },
                            Ports: []int64{
                                901563,
                            },
                            Strings: []string{
                                "eaque",
                                "ex",
                            },
                        },
                    },
                    Metric: sdk.String("eveniet"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "delectus",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                    Name: "Charles Parisian",
                    SuppressAlerts: sdk.Bool(false),
                },
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumNotInPortSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(257488),
                        ConsecutiveDatapointsToClear: sdk.Int64(488433),
                        DurationSeconds: sdk.Int64(342772),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumHigh,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("veritatis"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "earum",
                                "minima",
                            },
                            Count: sdk.Int64(405161),
                            Number: sdk.Float64(8216.72),
                            Numbers: []float64{
                                5479.07,
                            },
                            Ports: []int64{
                                682327,
                                195789,
                            },
                            Strings: []string{
                                "numquam",
                                "laborum",
                                "eligendi",
                                "autem",
                            },
                        },
                    },
                    Metric: sdk.String("adipisci"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "sunt",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                    Name: "Terrence Treutel",
                    SuppressAlerts: sdk.Bool(false),
                },
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumNotInPortSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(910726),
                        ConsecutiveDatapointsToClear: sdk.Int64(852873),
                        DurationSeconds: sdk.Int64(503528),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumHigh,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("natus"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "repellendus",
                                "facilis",
                                "molestias",
                                "dolore",
                            },
                            Count: sdk.Int64(90969),
                            Number: sdk.Float64(379.11),
                            Numbers: []float64{
                                3902.3,
                                2458.49,
                                7331.27,
                                7105.06,
                            },
                            Ports: []int64{
                                505113,
                                113540,
                                478773,
                                542242,
                            },
                            Strings: []string{
                                "molestiae",
                            },
                        },
                    },
                    Metric: sdk.String("nam"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "aperiam",
                        Operator: shared.DimensionValueOperatorEnumIn.ToPointer(),
                    },
                    Name: "Emmett Swaniawski",
                    SuppressAlerts: sdk.Bool(false),
                },
                shared.Behavior{
                    Criteria: &shared.BehaviorCriteria{
                        ComparisonOperator: shared.ComparisonOperatorEnumNotInCidrSet.ToPointer(),
                        ConsecutiveDatapointsToAlarm: sdk.Int64(523266),
                        ConsecutiveDatapointsToClear: sdk.Int64(424553),
                        DurationSeconds: sdk.Int64(177790),
                        MlDetectionConfig: &shared.MachineLearningDetectionConfig{
                            ConfidenceLevel: shared.ConfidenceLevelEnumLow,
                        },
                        StatisticalThreshold: &shared.StatisticalThreshold{
                            Statistic: sdk.String("sunt"),
                        },
                        Value: &shared.MetricValue{
                            Cidrs: []string{
                                "iste",
                                "accusamus",
                                "distinctio",
                            },
                            Count: sdk.Int64(275006),
                            Number: sdk.Float64(2875.03),
                            Numbers: []float64{
                                4994.51,
                                2345.5,
                                9580.6,
                            },
                            Ports: []int64{
                                33323,
                                190260,
                            },
                            Strings: []string{
                                "asperiores",
                            },
                        },
                    },
                    Metric: sdk.String("architecto"),
                    MetricDimension: &shared.MetricDimension{
                        DimensionName: "sint",
                        Operator: shared.DimensionValueOperatorEnumNotIn.ToPointer(),
                    },
                    Name: "Marlon Boyle",
                    SuppressAlerts: sdk.Bool(false),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateSecurityProfileBehaviorsResponse != nil {
        // handle response
    }
}
```
