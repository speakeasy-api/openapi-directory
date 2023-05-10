# SDK

## Overview

<fullname>IoT</fullname> <p>IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>The service endpoints that expose this API are listed in <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>. You must use the endpoint for the region that has the resources you want to access.</p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services Signature Version 4</a> to sign the request is: <i>execute-api</i>.</p> <p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p> <p>For information about how to use the credentials provider for IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to Amazon Web Services Services</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [acceptCertificateTransfer](#acceptcertificatetransfer) - <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
* [addThingToBillingGroup](#addthingtobillinggroup) - <p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
* [addThingToThingGroup](#addthingtothinggroup) - <p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
* [associateTargetsWithJob](#associatetargetswithjob) - <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
* [attachPolicy](#attachpolicy) - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>
* [~~attachPrincipalPolicy~~](#attachprincipalpolicy) - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p> :warning: **Deprecated**
* [attachSecurityProfile](#attachsecurityprofile) - <p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>
* [attachThingPrincipal](#attachthingprincipal) - <p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
* [cancelAuditMitigationActionsTask](#cancelauditmitigationactionstask) - <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
* [cancelAuditTask](#cancelaudittask) - <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>
* [cancelCertificateTransfer](#cancelcertificatetransfer) - <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
* [cancelDetectMitigationActionsTask](#canceldetectmitigationactionstask) - <p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
* [cancelJob](#canceljob) - <p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>
* [cancelJobExecution](#canceljobexecution) - <p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
* [clearDefaultAuthorizer](#cleardefaultauthorizer) - <p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
* [confirmTopicRuleDestination](#confirmtopicruledestination) - <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
* [createAuditSuppression](#createauditsuppression) - <p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>
* [createAuthorizer](#createauthorizer) - <p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
* [createBillingGroup](#createbillinggroup) - <p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
* [createCertificateFromCsr](#createcertificatefromcsr) - <p>Creates an X.509 certificate using the specified certificate signing request. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action. </p> <note> <p>The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-25 or NIST P-384 curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p> </note> <note> <p>Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> </note> <p>You can create multiple certificates in a batch by creating a directory, copying multiple <code>.csr</code> files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is: </p> <p> <code>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</code> </p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for the corresponding CSR. </p> <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the command in parallel to speed up the certificate creation process:</p> <p> <code>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} </code> </p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} </code> </p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path" </code> </p>
* [createCustomMetric](#createcustommetric) - <p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
* [createDimension](#createdimension) - <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>
* [createDomainConfiguration](#createdomainconfiguration) - <p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
* [createDynamicThingGroup](#createdynamicthinggroup) - <p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
* [createFleetMetric](#createfleetmetric) - <p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
* [createJob](#createjob) - <p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
* [createJobTemplate](#createjobtemplate) - <p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
* [createKeysAndCertificate](#createkeysandcertificate) - <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
* [createMitigationAction](#createmitigationaction) - <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
* [createOTAUpdate](#createotaupdate) - <p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
* [createPolicy](#createpolicy) - <p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
* [createPolicyVersion](#createpolicyversion) - <p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
* [createProvisioningClaim](#createprovisioningclaim) - <p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
* [createProvisioningTemplate](#createprovisioningtemplate) - <p>Creates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
* [createProvisioningTemplateVersion](#createprovisioningtemplateversion) - <p>Creates a new version of a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
* [createRoleAlias](#createrolealias) - <p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
* [createScheduledAudit](#createscheduledaudit) - <p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
* [createSecurityProfile](#createsecurityprofile) - <p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
* [createStream](#createstream) - <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>
* [createThing](#creatething) - <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
* [createThingGroup](#createthinggroup) - <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
* [createThingType](#createthingtype) - <p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
* [createTopicRule](#createtopicrule) - <p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
* [createTopicRuleDestination](#createtopicruledestination) - <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
* [deleteAccountAuditConfiguration](#deleteaccountauditconfiguration) - <p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
* [deleteAuditSuppression](#deleteauditsuppression) - <p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
* [deleteAuthorizer](#deleteauthorizer) - <p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>
* [deleteBillingGroup](#deletebillinggroup) - <p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
* [deleteCACertificate](#deletecacertificate) - <p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
* [deleteCertificate](#deletecertificate) - <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>
* [deleteCustomMetric](#deletecustommetric) - <p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>
* [deleteDimension](#deletedimension) - <p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
* [deleteDomainConfiguration](#deletedomainconfiguration) - <p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
* [deleteDynamicThingGroup](#deletedynamicthinggroup) - <p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
* [deleteFleetMetric](#deletefleetmetric) - <p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
* [deleteJob](#deletejob) - <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
* [deleteJobExecution](#deletejobexecution) - <p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
* [deleteJobTemplate](#deletejobtemplate) - Deletes the specified job template.
* [deleteMitigationAction](#deletemitigationaction) - <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
* [deleteOTAUpdate](#deleteotaupdate) - <p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>
* [deletePolicy](#deletepolicy) - <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
* [deletePolicyVersion](#deletepolicyversion) - <p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
* [deleteProvisioningTemplate](#deleteprovisioningtemplate) - <p>Deletes a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
* [deleteProvisioningTemplateVersion](#deleteprovisioningtemplateversion) - <p>Deletes a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
* [deleteRegistrationCode](#deleteregistrationcode) - <p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
* [deleteRoleAlias](#deleterolealias) - <p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
* [deleteScheduledAudit](#deletescheduledaudit) - <p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
* [deleteSecurityProfile](#deletesecurityprofile) - <p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>
* [deleteStream](#deletestream) - <p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>
* [deleteThing](#deletething) - <p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>
* [deleteThingGroup](#deletethinggroup) - <p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>
* [deleteThingType](#deletethingtype) - <p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
* [deleteTopicRule](#deletetopicrule) - <p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>
* [deleteTopicRuleDestination](#deletetopicruledestination) - <p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
* [deleteV2LoggingLevel](#deletev2logginglevel) - <p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
* [deprecateThingType](#deprecatethingtype) - <p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
* [describeAccountAuditConfiguration](#describeaccountauditconfiguration) - <p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
* [describeAuditFinding](#describeauditfinding) - <p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
* [describeAuditMitigationActionsTask](#describeauditmitigationactionstask) - Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
* [describeAuditSuppression](#describeauditsuppression) -  Gets information about a Device Defender audit suppression. 
* [describeAuditTask](#describeaudittask) - <p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
* [describeAuthorizer](#describeauthorizer) - <p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
* [describeBillingGroup](#describebillinggroup) - <p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
* [describeCACertificate](#describecacertificate) - <p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
* [describeCertificate](#describecertificate) - <p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
* [describeCustomMetric](#describecustommetric) - <p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
* [describeDefaultAuthorizer](#describedefaultauthorizer) - <p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
* [describeDetectMitigationActionsTask](#describedetectmitigationactionstask) - <p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
* [describeDimension](#describedimension) - <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
* [describeDomainConfiguration](#describedomainconfiguration) - <p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
* [describeEndpoint](#describeendpoint) - <p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>
* [describeEventConfigurations](#describeeventconfigurations) - <p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
* [describeFleetMetric](#describefleetmetric) - <p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
* [describeIndex](#describeindex) - <p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
* [describeJob](#describejob) - <p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
* [describeJobExecution](#describejobexecution) - <p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
* [describeJobTemplate](#describejobtemplate) - Returns information about a job template.
* [describeManagedJobTemplate](#describemanagedjobtemplate) - View details of a managed job template.
* [describeMitigationAction](#describemitigationaction) - <p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
* [describeProvisioningTemplate](#describeprovisioningtemplate) - <p>Returns information about a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
* [describeProvisioningTemplateVersion](#describeprovisioningtemplateversion) - <p>Returns information about a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
* [describeRoleAlias](#describerolealias) - <p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
* [describeScheduledAudit](#describescheduledaudit) - <p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
* [describeSecurityProfile](#describesecurityprofile) - <p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
* [describeStream](#describestream) - <p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
* [describeThing](#describething) - <p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
* [describeThingGroup](#describethinggroup) - <p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
* [describeThingRegistrationTask](#describethingregistrationtask) - <p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
* [describeThingType](#describethingtype) - <p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
* [detachPolicy](#detachpolicy) - <p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>
* [~~detachPrincipalPolicy~~](#detachprincipalpolicy) - <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p> :warning: **Deprecated**
* [detachSecurityProfile](#detachsecurityprofile) - <p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
* [detachThingPrincipal](#detachthingprincipal) - <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
* [disableTopicRule](#disabletopicrule) - <p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
* [enableTopicRule](#enabletopicrule) - <p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
* [getBehaviorModelTrainingSummaries](#getbehaviormodeltrainingsummaries) - <p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
* [getBucketsAggregation](#getbucketsaggregation) - <p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
* [getCardinality](#getcardinality) - <p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
* [getEffectivePolicies](#geteffectivepolicies) - <p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
* [getIndexingConfiguration](#getindexingconfiguration) - <p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>
* [getJobDocument](#getjobdocument) - <p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
* [getLoggingOptions](#getloggingoptions) - <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
* [getOTAUpdate](#getotaupdate) - <p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
* [getPercentiles](#getpercentiles) - <p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
* [getPolicy](#getpolicy) - <p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>
* [getPolicyVersion](#getpolicyversion) - <p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
* [getRegistrationCode](#getregistrationcode) - <p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
* [getStatistics](#getstatistics) - <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
* [getTopicRule](#gettopicrule) - <p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>
* [getTopicRuleDestination](#gettopicruledestination) - <p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
* [getV2LoggingOptions](#getv2loggingoptions) - <p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
* [listActiveViolations](#listactiveviolations) - <p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
* [listAttachedPolicies](#listattachedpolicies) - <p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
* [listAuditFindings](#listauditfindings) - <p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
* [listAuditMitigationActionsExecutions](#listauditmitigationactionsexecutions) - <p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
* [listAuditMitigationActionsTasks](#listauditmitigationactionstasks) - <p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
* [listAuditSuppressions](#listauditsuppressions) - <p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
* [listAuditTasks](#listaudittasks) - <p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
* [listAuthorizers](#listauthorizers) - <p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
* [listBillingGroups](#listbillinggroups) - <p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
* [listCACertificates](#listcacertificates) - <p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
* [listCertificates](#listcertificates) - <p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>
* [listCertificatesByCA](#listcertificatesbyca) - <p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
* [listCustomMetrics](#listcustommetrics) - <p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
* [listDetectMitigationActionsExecutions](#listdetectmitigationactionsexecutions) - <p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
* [listDetectMitigationActionsTasks](#listdetectmitigationactionstasks) - <p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
* [listDimensions](#listdimensions) - <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
* [listDomainConfigurations](#listdomainconfigurations) - <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
* [listFleetMetrics](#listfleetmetrics) - <p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
* [listIndices](#listindices) - <p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>
* [listJobExecutionsForJob](#listjobexecutionsforjob) - <p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
* [listJobExecutionsForThing](#listjobexecutionsforthing) - <p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
* [listJobTemplates](#listjobtemplates) - <p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
* [listJobs](#listjobs) - <p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>
* [listManagedJobTemplates](#listmanagedjobtemplates) - Returns a list of managed job templates.
* [listMetricValues](#listmetricvalues) - Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.
* [listMitigationActions](#listmitigationactions) - <p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
* [listOTAUpdates](#listotaupdates) - <p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
* [listOutgoingCertificates](#listoutgoingcertificates) - <p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
* [listPolicies](#listpolicies) - <p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>
* [~~listPolicyPrincipals~~](#listpolicyprincipals) - <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p> :warning: **Deprecated**
* [listPolicyVersions](#listpolicyversions) - <p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
* [~~listPrincipalPolicies~~](#listprincipalpolicies) - <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p> :warning: **Deprecated**
* [listPrincipalThings](#listprincipalthings) - <p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
* [listProvisioningTemplateVersions](#listprovisioningtemplateversions) - <p>A list of provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
* [listProvisioningTemplates](#listprovisioningtemplates) - <p>Lists the provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
* [listRelatedResourcesForAuditFinding](#listrelatedresourcesforauditfinding) - <p>The related resources of an Audit finding. The following resources can be returned from calling this API:</p> <ul> <li> <p>DEVICE_CERTIFICATE</p> </li> <li> <p>CA_CERTIFICATE</p> </li> <li> <p>IOT_POLICY</p> </li> <li> <p>COGNITO_IDENTITY_POOL</p> </li> <li> <p>CLIENT_ID</p> </li> <li> <p>ACCOUNT_SETTINGS</p> </li> <li> <p>ROLE_ALIAS</p> </li> <li> <p>IAM_ROLE</p> </li> <li> <p>ISSUER_CERTIFICATE</p> </li> </ul> <note> <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a> but provides pagination and is not limited to 10 resources. When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p> </note>
* [listRoleAliases](#listrolealiases) - <p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
* [listScheduledAudits](#listscheduledaudits) - <p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
* [listSecurityProfiles](#listsecurityprofiles) - <p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>
* [listSecurityProfilesForTarget](#listsecurityprofilesfortarget) - <p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
* [listStreams](#liststreams) - <p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [listTargetsForPolicy](#listtargetsforpolicy) - <p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
* [listTargetsForSecurityProfile](#listtargetsforsecurityprofile) - <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
* [listThingGroups](#listthinggroups) - <p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
* [listThingGroupsForThing](#listthinggroupsforthing) - <p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
* [listThingPrincipals](#listthingprincipals) - <p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
* [listThingRegistrationTaskReports](#listthingregistrationtaskreports) - Information about the thing registration tasks.
* [listThingRegistrationTasks](#listthingregistrationtasks) - <p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
* [listThingTypes](#listthingtypes) - <p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
* [listThings](#listthings) - <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer Guide</i>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>
* [listThingsInBillingGroup](#listthingsinbillinggroup) - <p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>
* [listThingsInThingGroup](#listthingsinthinggroup) - <p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
* [listTopicRuleDestinations](#listtopicruledestinations) - <p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
* [listTopicRules](#listtopicrules) - <p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
* [listV2LoggingLevels](#listv2logginglevels) - <p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
* [listViolationEvents](#listviolationevents) - <p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
* [putVerificationStateOnViolation](#putverificationstateonviolation) - Set a verification state and provide a description of that verification state on a violation (detect alarm).
* [registerCACertificate](#registercacertificate) - <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
* [registerCertificate](#registercertificate) - <p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
* [registerCertificateWithoutCA](#registercertificatewithoutca) - Register a certificate that does not have a certificate authority (CA). For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. 
* [registerThing](#registerthing) - <p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
* [rejectCertificateTransfer](#rejectcertificatetransfer) - <p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>
* [removeThingFromBillingGroup](#removethingfrombillinggroup) - <p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
* [removeThingFromThingGroup](#removethingfromthinggroup) - <p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
* [replaceTopicRule](#replacetopicrule) - <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>
* [searchIndex](#searchindex) - <p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
* [setDefaultAuthorizer](#setdefaultauthorizer) - <p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
* [setDefaultPolicyVersion](#setdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
* [setLoggingOptions](#setloggingoptions) - <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
* [setV2LoggingLevel](#setv2logginglevel) - <p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
* [setV2LoggingOptions](#setv2loggingoptions) - <p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
* [startAuditMitigationActionsTask](#startauditmitigationactionstask) - <p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
* [startDetectMitigationActionsTask](#startdetectmitigationactionstask) - <p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
* [startOnDemandAuditTask](#startondemandaudittask) - <p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
* [startThingRegistrationTask](#startthingregistrationtask) - <p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
* [stopThingRegistrationTask](#stopthingregistrationtask) - <p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
* [tagResource](#tagresource) - <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [testAuthorization](#testauthorization) - <p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
* [testInvokeAuthorizer](#testinvokeauthorizer) - <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
* [transferCertificate](#transfercertificate) - <p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>
* [untagResource](#untagresource) - <p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [updateAccountAuditConfiguration](#updateaccountauditconfiguration) - <p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
* [updateAuditSuppression](#updateauditsuppression) -  Updates a Device Defender audit suppression. 
* [updateAuthorizer](#updateauthorizer) - <p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
* [updateBillingGroup](#updatebillinggroup) - <p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
* [updateCACertificate](#updatecacertificate) - <p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
* [updateCertificate](#updatecertificate) - <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>
* [updateCustomMetric](#updatecustommetric) - <p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
* [updateDimension](#updatedimension) - <p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
* [updateDomainConfiguration](#updatedomainconfiguration) - <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
* [updateDynamicThingGroup](#updatedynamicthinggroup) - <p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
* [updateEventConfigurations](#updateeventconfigurations) - <p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
* [updateFleetMetric](#updatefleetmetric) - <p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>
* [updateIndexingConfiguration](#updateindexingconfiguration) - <p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
* [updateJob](#updatejob) - <p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>
* [updateMitigationAction](#updatemitigationaction) - <p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
* [updateProvisioningTemplate](#updateprovisioningtemplate) - <p>Updates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
* [updateRoleAlias](#updaterolealias) - <p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
* [updateScheduledAudit](#updatescheduledaudit) - <p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
* [updateSecurityProfile](#updatesecurityprofile) - <p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
* [updateStream](#updatestream) - <p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
* [updateThing](#updatething) - <p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
* [updateThingGroup](#updatethinggroup) - <p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>
* [updateThingGroupsForThing](#updatethinggroupsforthing) - <p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
* [updateTopicRuleDestination](#updatetopicruledestination) - <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
* [validateSecurityProfileBehaviors](#validatesecurityprofilebehaviors) - <p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>

## acceptCertificateTransfer

<p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptCertificateTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptCertificateTransferRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->certificateId = 'ipsa';
    $request->setAsActive = false;

    $response = $sdk->sdk->acceptCertificateTransfer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addThingToBillingGroup

<p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddThingToBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddThingToBillingGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddThingToBillingGroupRequest();
    $request->requestBody = new AddThingToBillingGroupRequestBody();
    $request->requestBody->billingGroupArn = 'delectus';
    $request->requestBody->billingGroupName = 'tempora';
    $request->requestBody->thingArn = 'suscipit';
    $request->requestBody->thingName = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->addThingToBillingGroup($request);

    if ($response->addThingToBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addThingToThingGroup

<p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddThingToThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddThingToThingGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddThingToThingGroupRequest();
    $request->requestBody = new AddThingToThingGroupRequestBody();
    $request->requestBody->overrideDynamicGroups = false;
    $request->requestBody->thingArn = 'temporibus';
    $request->requestBody->thingGroupArn = 'ab';
    $request->requestBody->thingGroupName = 'quis';
    $request->requestBody->thingName = 'veritatis';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->addThingToThingGroup($request);

    if ($response->addThingToThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateTargetsWithJob

<p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTargetsWithJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTargetsWithJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTargetsWithJobRequest();
    $request->requestBody = new AssociateTargetsWithJobRequestBody();
    $request->requestBody->comment = 'at';
    $request->requestBody->targets = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->jobId = 'occaecati';
    $request->namespaceId = 'fugit';

    $response = $sdk->sdk->associateTargetsWithJob($request);

    if ($response->associateTargetsWithJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachPolicy

<p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachPolicyRequest();
    $request->requestBody = new AttachPolicyRequestBody();
    $request->requestBody->target = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->policyName = 'qui';

    $response = $sdk->sdk->attachPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~attachPrincipalPolicy~~

<p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachPrincipalPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachPrincipalPolicyRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->policyName = 'ad';
    $request->xAmznIotPrincipal = 'natus';

    $response = $sdk->sdk->attachPrincipalPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachSecurityProfile

<p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachSecurityProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachSecurityProfileRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->securityProfileName = 'fuga';
    $request->securityProfileTargetArn = 'in';

    $response = $sdk->sdk->attachSecurityProfile($request);

    if ($response->attachSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachThingPrincipal

<p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachThingPrincipalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachThingPrincipalRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->thingName = 'reiciendis';
    $request->xAmznPrincipal = 'est';

    $response = $sdk->sdk->attachThingPrincipal($request);

    if ($response->attachThingPrincipalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelAuditMitigationActionsTask

<p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelAuditMitigationActionsTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelAuditMitigationActionsTaskRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->taskId = 'enim';

    $response = $sdk->sdk->cancelAuditMitigationActionsTask($request);

    if ($response->cancelAuditMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelAuditTask

<p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelAuditTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelAuditTaskRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->taskId = 'doloribus';

    $response = $sdk->sdk->cancelAuditTask($request);

    if ($response->cancelAuditTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelCertificateTransfer

<p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelCertificateTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelCertificateTransferRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->certificateId = 'mollitia';

    $response = $sdk->sdk->cancelCertificateTransfer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDetectMitigationActionsTask

<p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDetectMitigationActionsTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDetectMitigationActionsTaskRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->taskId = 'quia';

    $response = $sdk->sdk->cancelDetectMitigationActionsTask($request);

    if ($response->cancelDetectMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelJob

<p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->requestBody = new CancelJobRequestBody();
    $request->requestBody->comment = 'quis';
    $request->requestBody->reasonCode = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->force = false;
    $request->jobId = 'ipsam';

    $response = $sdk->sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelJobExecution

<p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobExecutionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobExecutionRequest();
    $request->requestBody = new CancelJobExecutionRequestBody();
    $request->requestBody->expectedVersion = 662527;
    $request->requestBody->statusDetails = [
        'aut' => 'quasi',
        'error' => 'temporibus',
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->force = false;
    $request->jobId = 'cum';
    $request->thingName = 'perferendis';

    $response = $sdk->sdk->cancelJobExecution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clearDefaultAuthorizer

<p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClearDefaultAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearDefaultAuthorizerRequest();
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->clearDefaultAuthorizer($request);

    if ($response->clearDefaultAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmTopicRuleDestination

<p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmTopicRuleDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmTopicRuleDestinationRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->confirmationToken = 'quae';

    $response = $sdk->sdk->confirmTopicRuleDestination($request);

    if ($response->confirmTopicRuleDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuditSuppression

<p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuditSuppressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuditSuppressionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuditSuppressionRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuditSuppressionRequest();
    $request->requestBody = new CreateAuditSuppressionRequestBody();
    $request->requestBody->checkName = 'ipsum';
    $request->requestBody->clientRequestToken = 'quidem';
    $request->requestBody->description = 'molestias';
    $request->requestBody->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-09T11:24:10.949Z');
    $request->requestBody->resourceIdentifier = new CreateAuditSuppressionRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'modi';
    $request->requestBody->resourceIdentifier->caCertificateId = 'praesentium';
    $request->requestBody->resourceIdentifier->clientId = 'rem';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'voluptates';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'quasi';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'repudiandae';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'sint';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'veritatis';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'itaque';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'incidunt';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'enim';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'consequatur';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'est';
    $request->requestBody->suppressIndefinitely = false;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->createAuditSuppression($request);

    if ($response->createAuditSuppressionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuthorizer

<p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorizerRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorizerRequest();
    $request->requestBody = new CreateAuthorizerRequestBody();
    $request->requestBody->authorizerFunctionArn = 'qui';
    $request->requestBody->enableCachingForHttp = false;
    $request->requestBody->signingDisabled = false;
    $request->requestBody->status = CreateAuthorizerRequestBodyStatusEnum::ACTIVE;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->tokenKeyName = 'quos';
    $request->requestBody->tokenSigningPublicKeys = [
        'magni' => 'assumenda',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->authorizerName = 'tempore';

    $response = $sdk->sdk->createAuthorizer($request);

    if ($response->createAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBillingGroup

<p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequestBodyBillingGroupProperties;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBillingGroupRequest();
    $request->requestBody = new CreateBillingGroupRequestBody();
    $request->requestBody->billingGroupProperties = new CreateBillingGroupRequestBodyBillingGroupProperties();
    $request->requestBody->billingGroupProperties->billingGroupDescription = 'labore';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->billingGroupName = 'sint';

    $response = $sdk->sdk->createBillingGroup($request);

    if ($response->createBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCertificateFromCsr

<p>Creates an X.509 certificate using the specified certificate signing request. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action. </p> <note> <p>The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-25 or NIST P-384 curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p> </note> <note> <p>Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> </note> <p>You can create multiple certificates in a batch by creating a directory, copying multiple <code>.csr</code> files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is: </p> <p> <code>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</code> </p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for the corresponding CSR. </p> <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the command in parallel to speed up the certificate creation process:</p> <p> <code>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} </code> </p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} </code> </p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path" </code> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateFromCsrRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCertificateFromCsrRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCertificateFromCsrRequest();
    $request->requestBody = new CreateCertificateFromCsrRequestBody();
    $request->requestBody->certificateSigningRequest = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->setAsActive = false;

    $response = $sdk->sdk->createCertificateFromCsr($request);

    if ($response->createCertificateFromCsrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomMetric

<p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomMetricRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomMetricRequestBodyMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomMetricRequest();
    $request->requestBody = new CreateCustomMetricRequestBody();
    $request->requestBody->clientRequestToken = 'maiores';
    $request->requestBody->displayName = 'rerum';
    $request->requestBody->metricType = CreateCustomMetricRequestBodyMetricTypeEnum::STRING_LIST;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->metricName = 'occaecati';

    $response = $sdk->sdk->createCustomMetric($request);

    if ($response->createCustomMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDimension

<p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDimensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDimensionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDimensionRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDimensionRequest();
    $request->requestBody = new CreateDimensionRequestBody();
    $request->requestBody->clientRequestToken = 'enim';
    $request->requestBody->stringValues = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->type = CreateDimensionRequestBodyTypeEnum::TOPIC_FILTER;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->name = 'Ms. Arturo Krajcik';

    $response = $sdk->sdk->createDimension($request);

    if ($response->createDimensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomainConfiguration

<p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainConfigurationRequestBodyAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainConfigurationRequestBodyServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainConfigurationRequest();
    $request->requestBody = new CreateDomainConfigurationRequestBody();
    $request->requestBody->authorizerConfig = new CreateDomainConfigurationRequestBodyAuthorizerConfig();
    $request->requestBody->authorizerConfig->allowAuthorizerOverride = false;
    $request->requestBody->authorizerConfig->defaultAuthorizerName = 'distinctio';
    $request->requestBody->domainName = 'id';
    $request->requestBody->serverCertificateArns = [
        'labore',
        'suscipit',
    ];
    $request->requestBody->serviceType = CreateDomainConfigurationRequestBodyServiceTypeEnum::CREDENTIAL_PROVIDER;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->validationCertificateArn = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->domainConfigurationName = 'provident';

    $response = $sdk->sdk->createDomainConfiguration($request);

    if ($response->createDomainConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDynamicThingGroup

<p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDynamicThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDynamicThingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDynamicThingGroupRequestBodyThingGroupProperties;
use \OpenAPI\OpenAPI\Models\Shared\AttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDynamicThingGroupRequest();
    $request->requestBody = new CreateDynamicThingGroupRequestBody();
    $request->requestBody->indexName = 'quos';
    $request->requestBody->queryString = 'sint';
    $request->requestBody->queryVersion = 'accusantium';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->thingGroupProperties = new CreateDynamicThingGroupRequestBodyThingGroupProperties();
    $request->requestBody->thingGroupProperties->attributePayload = new AttributePayload();
    $request->requestBody->thingGroupProperties->attributePayload->attributes = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->requestBody->thingGroupProperties->attributePayload->merge = false;
    $request->requestBody->thingGroupProperties->thingGroupDescription = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->thingGroupName = 'architecto';

    $response = $sdk->sdk->createDynamicThingGroup($request);

    if ($response->createDynamicThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleetMetric

<p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetMetricRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetMetricRequestBodyAggregationType;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetMetricRequestBodyUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetMetricRequest();
    $request->requestBody = new CreateFleetMetricRequestBody();
    $request->requestBody->aggregationField = 'architecto';
    $request->requestBody->aggregationType = new CreateFleetMetricRequestBodyAggregationType();
    $request->requestBody->aggregationType->name = AggregationTypeNameEnum::CARDINALITY;
    $request->requestBody->aggregationType->values = [
        'expedita',
        'nihil',
    ];
    $request->requestBody->description = 'repellat';
    $request->requestBody->indexName = 'quibusdam';
    $request->requestBody->period = 149448;
    $request->requestBody->queryString = 'saepe';
    $request->requestBody->queryVersion = 'pariatur';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->unit = CreateFleetMetricRequestBodyUnitEnum::KILOBYTES;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->metricName = 'maxime';

    $response = $sdk->sdk->createFleetMetric($request);

    if ($response->createFleetMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJob

<p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyAbortConfig;
use \OpenAPI\OpenAPI\Models\Shared\AbortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AbortActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyJobExecutionsRetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\RetryCriteria;
use \OpenAPI\OpenAPI\Models\Shared\RetryableFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyJobExecutionsRolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialRolloutRate;
use \OpenAPI\OpenAPI\Models\Shared\RateIncreaseCriteria;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyPresignedUrlConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodySchedulingConfig;
use \OpenAPI\OpenAPI\Models\Shared\JobEndBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyTargetSelectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequestBodyTimeoutConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobRequest();
    $request->requestBody = new CreateJobRequestBody();
    $request->requestBody->abortConfig = new CreateJobRequestBodyAbortConfig();
    $request->requestBody->abortConfig->criteriaList = [
        new AbortCriteria(),
        new AbortCriteria(),
    ];
    $request->requestBody->description = 'excepturi';
    $request->requestBody->document = 'odit';
    $request->requestBody->documentParameters = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->requestBody->documentSource = 'ipsam';
    $request->requestBody->jobExecutionsRetryConfig = new CreateJobRequestBodyJobExecutionsRetryConfig();
    $request->requestBody->jobExecutionsRetryConfig->criteriaList = [
        new RetryCriteria(),
        new RetryCriteria(),
    ];
    $request->requestBody->jobExecutionsRolloutConfig = new CreateJobRequestBodyJobExecutionsRolloutConfig();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate = new ExponentialRolloutRate();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->baseRatePerMinute = 420075;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->incrementFactor = 7220.56;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria = new RateIncreaseCriteria();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfNotifiedThings = 50588;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfSucceededThings = 866383;
    $request->requestBody->jobExecutionsRolloutConfig->maximumPerMinute = 365496;
    $request->requestBody->jobTemplateArn = 'voluptatibus';
    $request->requestBody->namespaceId = 'perferendis';
    $request->requestBody->presignedUrlConfig = new CreateJobRequestBodyPresignedUrlConfig();
    $request->requestBody->presignedUrlConfig->expiresInSec = 855804;
    $request->requestBody->presignedUrlConfig->roleArn = 'amet';
    $request->requestBody->schedulingConfig = new CreateJobRequestBodySchedulingConfig();
    $request->requestBody->schedulingConfig->endBehavior = JobEndBehaviorEnum::STOP_ROLLOUT;
    $request->requestBody->schedulingConfig->endTime = 'cumque';
    $request->requestBody->schedulingConfig->maintenanceWindows = [
        new MaintenanceWindow(),
        new MaintenanceWindow(),
    ];
    $request->requestBody->schedulingConfig->startTime = 'hic';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->targetSelection = CreateJobRequestBodyTargetSelectionEnum::SNAPSHOT;
    $request->requestBody->targets = [
        'quis',
    ];
    $request->requestBody->timeoutConfig = new CreateJobRequestBodyTimeoutConfig();
    $request->requestBody->timeoutConfig->inProgressTimeoutInMinutes = 521037;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->jobId = 'minus';

    $response = $sdk->sdk->createJob($request);

    if ($response->createJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJobTemplate

<p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyAbortConfig;
use \OpenAPI\OpenAPI\Models\Shared\AbortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AbortActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyJobExecutionsRetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\RetryCriteria;
use \OpenAPI\OpenAPI\Models\Shared\RetryableFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialRolloutRate;
use \OpenAPI\OpenAPI\Models\Shared\RateIncreaseCriteria;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyPresignedUrlConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyTimeoutConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobTemplateRequest();
    $request->requestBody = new CreateJobTemplateRequestBody();
    $request->requestBody->abortConfig = new CreateJobTemplateRequestBodyAbortConfig();
    $request->requestBody->abortConfig->criteriaList = [
        new AbortCriteria(),
        new AbortCriteria(),
    ];
    $request->requestBody->description = 'dolor';
    $request->requestBody->document = 'vero';
    $request->requestBody->documentSource = 'nostrum';
    $request->requestBody->jobArn = 'hic';
    $request->requestBody->jobExecutionsRetryConfig = new CreateJobTemplateRequestBodyJobExecutionsRetryConfig();
    $request->requestBody->jobExecutionsRetryConfig->criteriaList = [
        new RetryCriteria(),
        new RetryCriteria(),
        new RetryCriteria(),
        new RetryCriteria(),
    ];
    $request->requestBody->jobExecutionsRolloutConfig = new CreateJobTemplateRequestBodyJobExecutionsRolloutConfig();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate = new ExponentialRolloutRate();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->baseRatePerMinute = 608253;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->incrementFactor = 7044.15;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria = new RateIncreaseCriteria();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfNotifiedThings = 596656;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfSucceededThings = 31838;
    $request->requestBody->jobExecutionsRolloutConfig->maximumPerMinute = 783645;
    $request->requestBody->maintenanceWindows = [
        new MaintenanceWindow(),
    ];
    $request->requestBody->presignedUrlConfig = new CreateJobTemplateRequestBodyPresignedUrlConfig();
    $request->requestBody->presignedUrlConfig->expiresInSec = 500026;
    $request->requestBody->presignedUrlConfig->roleArn = 'error';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->timeoutConfig = new CreateJobTemplateRequestBodyTimeoutConfig();
    $request->requestBody->timeoutConfig->inProgressTimeoutInMinutes = 577229;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->jobTemplateId = 'deleniti';

    $response = $sdk->sdk->createJobTemplate($request);

    if ($response->createJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createKeysAndCertificate

<p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeysAndCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKeysAndCertificateRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->setAsActive = false;

    $response = $sdk->sdk->createKeysAndCertificate($request);

    if ($response->createKeysAndCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMitigationAction

<p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMitigationActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMitigationActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMitigationActionRequestBodyActionParams;
use \OpenAPI\OpenAPI\Models\Shared\AddThingsToThingGroupParams;
use \OpenAPI\OpenAPI\Models\Shared\EnableIoTLoggingParams;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishFindingToSnsParams;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceDefaultPolicyVersionParams;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTemplateNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCACertificateParams;
use \OpenAPI\OpenAPI\Models\Shared\CACertificateUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceCertificateParams;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCertificateUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMitigationActionRequest();
    $request->requestBody = new CreateMitigationActionRequestBody();
    $request->requestBody->actionParams = new CreateMitigationActionRequestBodyActionParams();
    $request->requestBody->actionParams->addThingsToThingGroupParams = new AddThingsToThingGroupParams();
    $request->requestBody->actionParams->addThingsToThingGroupParams->overrideDynamicGroups = false;
    $request->requestBody->actionParams->addThingsToThingGroupParams->thingGroupNames = [
        'dolorem',
        'dolorem',
    ];
    $request->requestBody->actionParams->enableIoTLoggingParams = new EnableIoTLoggingParams();
    $request->requestBody->actionParams->enableIoTLoggingParams->logLevel = LogLevelEnum::INFO;
    $request->requestBody->actionParams->enableIoTLoggingParams->roleArnForLogging = 'qui';
    $request->requestBody->actionParams->publishFindingToSnsParams = new PublishFindingToSnsParams();
    $request->requestBody->actionParams->publishFindingToSnsParams->topicArn = 'ipsum';
    $request->requestBody->actionParams->replaceDefaultPolicyVersionParams = new ReplaceDefaultPolicyVersionParams();
    $request->requestBody->actionParams->replaceDefaultPolicyVersionParams->templateName = PolicyTemplateNameEnum::BLANK_POLICY;
    $request->requestBody->actionParams->updateCACertificateParams = new UpdateCACertificateParams();
    $request->requestBody->actionParams->updateCACertificateParams->action = CACertificateUpdateActionEnum::DEACTIVATE;
    $request->requestBody->actionParams->updateDeviceCertificateParams = new UpdateDeviceCertificateParams();
    $request->requestBody->actionParams->updateDeviceCertificateParams->action = DeviceCertificateUpdateActionEnum::DEACTIVATE;
    $request->requestBody->roleArn = 'hic';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->actionName = 'veritatis';

    $response = $sdk->sdk->createMitigationAction($request);

    if ($response->createMitigationActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOTAUpdate

<p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBodyAwsJobAbortConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsJobAbortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AwsJobAbortCriteriaAbortActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsJobAbortCriteriaFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBodyAwsJobExecutionsRolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsJobExponentialRolloutRate;
use \OpenAPI\OpenAPI\Models\Shared\AwsJobRateIncreaseCriteria;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBodyAwsJobPresignedUrlConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBodyAwsJobTimeoutConfig;
use \OpenAPI\OpenAPI\Models\Shared\OTAUpdateFile;
use \OpenAPI\OpenAPI\Models\Shared\CodeSigning;
use \OpenAPI\OpenAPI\Models\Shared\CustomCodeSigning;
use \OpenAPI\OpenAPI\Models\Shared\CodeSigningCertificateChain;
use \OpenAPI\OpenAPI\Models\Shared\CodeSigningSignature;
use \OpenAPI\OpenAPI\Models\Shared\StartSigningJobParameter;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\S3Destination;
use \OpenAPI\OpenAPI\Models\Shared\SigningProfileParameter;
use \OpenAPI\OpenAPI\Models\Shared\FileLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\Stream;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateOTAUpdateRequestBodyTargetSelectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOTAUpdateRequest();
    $request->requestBody = new CreateOTAUpdateRequestBody();
    $request->requestBody->additionalParameters = [
        'ipsa' => 'iure',
    ];
    $request->requestBody->awsJobAbortConfig = new CreateOTAUpdateRequestBodyAwsJobAbortConfig();
    $request->requestBody->awsJobAbortConfig->abortCriteriaList = [
        new AwsJobAbortCriteria(),
        new AwsJobAbortCriteria(),
    ];
    $request->requestBody->awsJobExecutionsRolloutConfig = new CreateOTAUpdateRequestBodyAwsJobExecutionsRolloutConfig();
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate = new AwsJobExponentialRolloutRate();
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate->baseRatePerMinute = 311796;
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate->incrementFactor = 8810.05;
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria = new AwsJobRateIncreaseCriteria();
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfNotifiedThings = 696344;
    $request->requestBody->awsJobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfSucceededThings = 976405;
    $request->requestBody->awsJobExecutionsRolloutConfig->maximumPerMinute = 377752;
    $request->requestBody->awsJobPresignedUrlConfig = new CreateOTAUpdateRequestBodyAwsJobPresignedUrlConfig();
    $request->requestBody->awsJobPresignedUrlConfig->expiresInSec = 617658;
    $request->requestBody->awsJobTimeoutConfig = new CreateOTAUpdateRequestBodyAwsJobTimeoutConfig();
    $request->requestBody->awsJobTimeoutConfig->inProgressTimeoutInMinutes = 179603;
    $request->requestBody->description = 'atque';
    $request->requestBody->files = [
        new OTAUpdateFile(),
    ];
    $request->requestBody->protocols = [
        ProtocolEnum::MQTT,
        ProtocolEnum::HTTP,
        ProtocolEnum::HTTP,
        ProtocolEnum::MQTT,
    ];
    $request->requestBody->roleArn = 'voluptate';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->targetSelection = CreateOTAUpdateRequestBodyTargetSelectionEnum::SNAPSHOT;
    $request->requestBody->targets = [
        'necessitatibus',
        'distinctio',
        'asperiores',
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->otaUpdateId = 'perferendis';

    $response = $sdk->sdk->createOTAUpdate($request);

    if ($response->createOTAUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPolicy

<p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePolicyRequest();
    $request->requestBody = new CreatePolicyRequestBody();
    $request->requestBody->policyDocument = 'amet';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->policyName = 'repellendus';

    $response = $sdk->sdk->createPolicy($request);

    if ($response->createPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPolicyVersion

<p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePolicyVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePolicyVersionRequest();
    $request->requestBody = new CreatePolicyVersionRequestBody();
    $request->requestBody->policyDocument = 'totam';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->policyName = 'officiis';
    $request->setAsDefault = false;

    $response = $sdk->sdk->createPolicyVersion($request);

    if ($response->createPolicyVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProvisioningClaim

<p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningClaimRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProvisioningClaimRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->templateName = 'quisquam';

    $response = $sdk->sdk->createProvisioningClaim($request);

    if ($response->createProvisioningClaimResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProvisioningTemplate

<p>Creates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyPreProvisioningHook;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProvisioningTemplateRequest();
    $request->requestBody = new CreateProvisioningTemplateRequestBody();
    $request->requestBody->description = 'tenetur';
    $request->requestBody->enabled = false;
    $request->requestBody->preProvisioningHook = new CreateProvisioningTemplateRequestBodyPreProvisioningHook();
    $request->requestBody->preProvisioningHook->payloadVersion = 'amet';
    $request->requestBody->preProvisioningHook->targetArn = 'tempore';
    $request->requestBody->provisioningRoleArn = 'accusamus';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->templateBody = 'enim';
    $request->requestBody->templateName = 'dolorem';
    $request->requestBody->type = CreateProvisioningTemplateRequestBodyTypeEnum::JITP;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->createProvisioningTemplate($request);

    if ($response->createProvisioningTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProvisioningTemplateVersion

<p>Creates a new version of a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProvisioningTemplateVersionRequest();
    $request->requestBody = new CreateProvisioningTemplateVersionRequestBody();
    $request->requestBody->templateBody = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->setAsDefault = false;
    $request->templateName = 'maxime';

    $response = $sdk->sdk->createProvisioningTemplateVersion($request);

    if ($response->createProvisioningTemplateVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoleAlias

<p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleAliasRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoleAliasRequest();
    $request->requestBody = new CreateRoleAliasRequestBody();
    $request->requestBody->credentialDurationSeconds = 863856;
    $request->requestBody->roleArn = 'soluta';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->roleAlias = 'aliquid';

    $response = $sdk->sdk->createRoleAlias($request);

    if ($response->createRoleAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScheduledAudit

<p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduledAuditRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduledAuditRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduledAuditRequestBodyDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduledAuditRequestBodyFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScheduledAuditRequest();
    $request->requestBody = new CreateScheduledAuditRequestBody();
    $request->requestBody->dayOfMonth = 'quam';
    $request->requestBody->dayOfWeek = CreateScheduledAuditRequestBodyDayOfWeekEnum::WED;
    $request->requestBody->frequency = CreateScheduledAuditRequestBodyFrequencyEnum::MONTHLY;
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->targetCheckNames = [
        'fugit',
    ];
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->scheduledAuditName = 'cumque';

    $response = $sdk->sdk->createScheduledAudit($request);

    if ($response->createScheduledAuditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecurityProfile

<p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricToRetain;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlertTarget;
use \OpenAPI\OpenAPI\Models\Shared\Behavior;
use \OpenAPI\OpenAPI\Models\Shared\BehaviorCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachineLearningDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidenceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecurityProfileRequest();
    $request->requestBody = new CreateSecurityProfileRequestBody();
    $request->requestBody->additionalMetricsToRetain = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->requestBody->additionalMetricsToRetainV2 = [
        new MetricToRetain(),
    ];
    $request->requestBody->alertTargets = [
        'nobis' => new AlertTarget(),
    ];
    $request->requestBody->behaviors = [
        new Behavior(),
        new Behavior(),
        new Behavior(),
    ];
    $request->requestBody->securityProfileDescription = 'tempore';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->securityProfileName = 'architecto';

    $response = $sdk->sdk->createSecurityProfile($request);

    if ($response->createSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStream

<p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StreamFile;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamRequest();
    $request->requestBody = new CreateStreamRequestBody();
    $request->requestBody->description = 'quae';
    $request->requestBody->files = [
        new StreamFile(),
    ];
    $request->requestBody->roleArn = 'quas';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';
    $request->streamId = 'cupiditate';

    $response = $sdk->sdk->createStream($request);

    if ($response->createStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createThing

<p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingRequestBodyAttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateThingRequest();
    $request->requestBody = new CreateThingRequestBody();
    $request->requestBody->attributePayload = new CreateThingRequestBodyAttributePayload();
    $request->requestBody->attributePayload->attributes = [
        'quae' => 'laudantium',
    ];
    $request->requestBody->attributePayload->merge = false;
    $request->requestBody->billingGroupName = 'odio';
    $request->requestBody->thingTypeName = 'occaecati';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';
    $request->thingName = 'voluptate';

    $response = $sdk->sdk->createThing($request);

    if ($response->createThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createThingGroup

<p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingGroupRequestBodyThingGroupProperties;
use \OpenAPI\OpenAPI\Models\Shared\AttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateThingGroupRequest();
    $request->requestBody = new CreateThingGroupRequestBody();
    $request->requestBody->parentGroupName = 'consectetur';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->thingGroupProperties = new CreateThingGroupRequestBodyThingGroupProperties();
    $request->requestBody->thingGroupProperties->attributePayload = new AttributePayload();
    $request->requestBody->thingGroupProperties->attributePayload->attributes = [
        'dignissimos' => 'hic',
        'distinctio' => 'quod',
        'odio' => 'similique',
        'facilis' => 'vero',
    ];
    $request->requestBody->thingGroupProperties->attributePayload->merge = false;
    $request->requestBody->thingGroupProperties->thingGroupDescription = 'ducimus';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';
    $request->thingGroupName = 'voluptatibus';

    $response = $sdk->sdk->createThingGroup($request);

    if ($response->createThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createThingType

<p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateThingTypeRequestBodyThingTypeProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateThingTypeRequest();
    $request->requestBody = new CreateThingTypeRequestBody();
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->thingTypeProperties = new CreateThingTypeRequestBodyThingTypeProperties();
    $request->requestBody->thingTypeProperties->searchableAttributes = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->requestBody->thingTypeProperties->thingTypeDescription = 'iusto';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';
    $request->thingTypeName = 'aspernatur';

    $response = $sdk->sdk->createThingType($request);

    if ($response->createThingTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTopicRule

<p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleRequestBodyTopicRulePayload;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchAlarmAction;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchLogsAction;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBAction;
use \OpenAPI\OpenAPI\Models\Shared\DynamoKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBv2Action;
use \OpenAPI\OpenAPI\Models\Shared\PutItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchAction;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\SigV4Authorization;
use \OpenAPI\OpenAPI\Models\Shared\HttpActionHeader;
use \OpenAPI\OpenAPI\Models\Shared\IotAnalyticsAction;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsAction;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseAction;
use \OpenAPI\OpenAPI\Models\Shared\PutAssetPropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyTimestamp;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyVariant;
use \OpenAPI\OpenAPI\Models\Shared\KafkaAction;
use \OpenAPI\OpenAPI\Models\Shared\KinesisAction;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAction;
use \OpenAPI\OpenAPI\Models\Shared\LocationAction;
use \OpenAPI\OpenAPI\Models\Shared\LocationTimestamp;
use \OpenAPI\OpenAPI\Models\Shared\OpenSearchAction;
use \OpenAPI\OpenAPI\Models\Shared\RepublishAction;
use \OpenAPI\OpenAPI\Models\Shared\MqttHeaders;
use \OpenAPI\OpenAPI\Models\Shared\UserProperty;
use \OpenAPI\OpenAPI\Models\Shared\S3Action;
use \OpenAPI\OpenAPI\Models\Shared\CannedAccessControlListEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceAction;
use \OpenAPI\OpenAPI\Models\Shared\SnsAction;
use \OpenAPI\OpenAPI\Models\Shared\MessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Shared\StepFunctionsAction;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamAction;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamDimension;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamTimestamp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTopicRuleRequest();
    $request->requestBody = new CreateTopicRuleRequestBody();
    $request->requestBody->topicRulePayload = new CreateTopicRuleRequestBodyTopicRulePayload();
    $request->requestBody->topicRulePayload->actions = [
        new Action(),
        new Action(),
    ];
    $request->requestBody->topicRulePayload->awsIotSqlVersion = 'possimus';
    $request->requestBody->topicRulePayload->description = 'magnam';
    $request->requestBody->topicRulePayload->errorAction = new Action();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm = new CloudwatchAlarmAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->alarmName = 'ratione';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->roleArn = 'ex';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->stateReason = 'laudantium';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->stateValue = 'dicta';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs = new CloudwatchLogsAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->logGroupName = 'dolor';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->roleArn = 'maiores';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric = new CloudwatchMetricAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricName = 'quasi';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricNamespace = 'ex';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricTimestamp = 'nulla';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricUnit = 'excepturi';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricValue = 'voluptatibus';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->roleArn = 'nostrum';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB = new DynamoDBAction();
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyField = 'sapiente';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyType = DynamoKeyTypeEnum::NUMBER;
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyValue = 'saepe';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->operation = 'ea';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->payloadField = 'impedit';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyField = 'corporis';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyType = DynamoKeyTypeEnum::STRING;
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyValue = 'aliquid';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->roleArn = 'inventore';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->tableName = 'magnam';
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2 = new DynamoDBv2Action();
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->putItem = new PutItemInput();
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->putItem->tableName = 'ea';
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->roleArn = 'quo';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch = new ElasticsearchAction();
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->endpoint = 'consectetur';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->id = 'e250fb00-8c42-4e14-9aac-366c8dd6b144';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->index = 'explicabo';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->roleArn = 'provident';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->type = 'ipsa';
    $request->requestBody->topicRulePayload->errorAction->firehose = new FirehoseAction();
    $request->requestBody->topicRulePayload->errorAction->firehose->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->firehose->deliveryStreamName = 'molestiae';
    $request->requestBody->topicRulePayload->errorAction->firehose->roleArn = 'magnam';
    $request->requestBody->topicRulePayload->errorAction->firehose->separator = 'odio';
    $request->requestBody->topicRulePayload->errorAction->http = new HttpAction();
    $request->requestBody->topicRulePayload->errorAction->http->auth = new HttpAuthorization();
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4 = new SigV4Authorization();
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->roleArn = 'eius';
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->serviceName = 'esse';
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->signingRegion = 'esse';
    $request->requestBody->topicRulePayload->errorAction->http->confirmationUrl = 'rem';
    $request->requestBody->topicRulePayload->errorAction->http->headers = [
        new HttpActionHeader(),
        new HttpActionHeader(),
        new HttpActionHeader(),
    ];
    $request->requestBody->topicRulePayload->errorAction->http->url = 'reprehenderit';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics = new IotAnalyticsAction();
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->channelArn = 'quidem';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->channelName = 'fugiat';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->roleArn = 'ut';
    $request->requestBody->topicRulePayload->errorAction->iotEvents = new IotEventsAction();
    $request->requestBody->topicRulePayload->errorAction->iotEvents->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->iotEvents->inputName = 'eum';
    $request->requestBody->topicRulePayload->errorAction->iotEvents->messageId = 'suscipit';
    $request->requestBody->topicRulePayload->errorAction->iotEvents->roleArn = 'assumenda';
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise = new IotSiteWiseAction();
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise->putAssetPropertyValueEntries = [
        new PutAssetPropertyValueEntry(),
    ];
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise->roleArn = 'praesentium';
    $request->requestBody->topicRulePayload->errorAction->kafka = new KafkaAction();
    $request->requestBody->topicRulePayload->errorAction->kafka->clientProperties = [
        'veritatis' => 'ipsa',
        'id' => 'quidem',
        'neque' => 'quo',
        'illum' => 'quo',
    ];
    $request->requestBody->topicRulePayload->errorAction->kafka->destinationArn = 'fuga';
    $request->requestBody->topicRulePayload->errorAction->kafka->key = 'eius';
    $request->requestBody->topicRulePayload->errorAction->kafka->partition = 'eos';
    $request->requestBody->topicRulePayload->errorAction->kafka->topic = 'voluptas';
    $request->requestBody->topicRulePayload->errorAction->kinesis = new KinesisAction();
    $request->requestBody->topicRulePayload->errorAction->kinesis->partitionKey = 'ab';
    $request->requestBody->topicRulePayload->errorAction->kinesis->roleArn = 'cupiditate';
    $request->requestBody->topicRulePayload->errorAction->kinesis->streamName = 'consequatur';
    $request->requestBody->topicRulePayload->errorAction->lambda = new LambdaAction();
    $request->requestBody->topicRulePayload->errorAction->lambda->functionArn = 'tempora';
    $request->requestBody->topicRulePayload->errorAction->location = new LocationAction();
    $request->requestBody->topicRulePayload->errorAction->location->deviceId = 'debitis';
    $request->requestBody->topicRulePayload->errorAction->location->latitude = 'ipsam';
    $request->requestBody->topicRulePayload->errorAction->location->longitude = 'aspernatur';
    $request->requestBody->topicRulePayload->errorAction->location->roleArn = 'sequi';
    $request->requestBody->topicRulePayload->errorAction->location->timestamp = new LocationTimestamp();
    $request->requestBody->topicRulePayload->errorAction->location->timestamp->unit = 'quo';
    $request->requestBody->topicRulePayload->errorAction->location->timestamp->value = 'esse';
    $request->requestBody->topicRulePayload->errorAction->location->trackerName = 'recusandae';
    $request->requestBody->topicRulePayload->errorAction->openSearch = new OpenSearchAction();
    $request->requestBody->topicRulePayload->errorAction->openSearch->endpoint = 'aperiam';
    $request->requestBody->topicRulePayload->errorAction->openSearch->id = 'bc7178e4-796f-42a7-8c68-8282aa482562';
    $request->requestBody->topicRulePayload->errorAction->openSearch->index = 'sapiente';
    $request->requestBody->topicRulePayload->errorAction->openSearch->roleArn = 'consequuntur';
    $request->requestBody->topicRulePayload->errorAction->openSearch->type = 'ratione';
    $request->requestBody->topicRulePayload->errorAction->republish = new RepublishAction();
    $request->requestBody->topicRulePayload->errorAction->republish->headers = new MqttHeaders();
    $request->requestBody->topicRulePayload->errorAction->republish->headers->contentType = 'explicabo';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->correlationData = 'saepe';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->messageExpiry = 'occaecati';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->payloadFormatIndicator = 'atque';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->responseTopic = 'et';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->userProperties = [
        new UserProperty(),
        new UserProperty(),
    ];
    $request->requestBody->topicRulePayload->errorAction->republish->qos = 910545;
    $request->requestBody->topicRulePayload->errorAction->republish->roleArn = 'accusamus';
    $request->requestBody->topicRulePayload->errorAction->republish->topic = 'veritatis';
    $request->requestBody->topicRulePayload->errorAction->s3 = new S3Action();
    $request->requestBody->topicRulePayload->errorAction->s3->bucketName = 'esse';
    $request->requestBody->topicRulePayload->errorAction->s3->cannedAcl = CannedAccessControlListEnum::BUCKET_OWNER_FULL_CONTROL;
    $request->requestBody->topicRulePayload->errorAction->s3->key = 'nam';
    $request->requestBody->topicRulePayload->errorAction->s3->roleArn = 'vero';
    $request->requestBody->topicRulePayload->errorAction->salesforce = new SalesforceAction();
    $request->requestBody->topicRulePayload->errorAction->salesforce->token = 'aliquid';
    $request->requestBody->topicRulePayload->errorAction->salesforce->url = 'quasi';
    $request->requestBody->topicRulePayload->errorAction->sns = new SnsAction();
    $request->requestBody->topicRulePayload->errorAction->sns->messageFormat = MessageFormatEnum::JSON;
    $request->requestBody->topicRulePayload->errorAction->sns->roleArn = 'vel';
    $request->requestBody->topicRulePayload->errorAction->sns->targetArn = 'harum';
    $request->requestBody->topicRulePayload->errorAction->sqs = new SqsAction();
    $request->requestBody->topicRulePayload->errorAction->sqs->queueUrl = 'molestiae';
    $request->requestBody->topicRulePayload->errorAction->sqs->roleArn = 'rerum';
    $request->requestBody->topicRulePayload->errorAction->sqs->useBase64 = false;
    $request->requestBody->topicRulePayload->errorAction->stepFunctions = new StepFunctionsAction();
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->executionNamePrefix = 'occaecati';
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->roleArn = 'minima';
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->stateMachineName = 'distinctio';
    $request->requestBody->topicRulePayload->errorAction->timestream = new TimestreamAction();
    $request->requestBody->topicRulePayload->errorAction->timestream->databaseName = 'eligendi';
    $request->requestBody->topicRulePayload->errorAction->timestream->dimensions = [
        new TimestreamDimension(),
    ];
    $request->requestBody->topicRulePayload->errorAction->timestream->roleArn = 'culpa';
    $request->requestBody->topicRulePayload->errorAction->timestream->tableName = 'tempore';
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp = new TimestreamTimestamp();
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp->unit = 'adipisci';
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp->value = 'cumque';
    $request->requestBody->topicRulePayload->ruleDisabled = false;
    $request->requestBody->topicRulePayload->sql = 'consequuntur';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->ruleName = 'provident';
    $request->xAmzTagging = 'a';

    $response = $sdk->sdk->createTopicRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTopicRuleDestination

<p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HttpUrlDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\VpcDestinationConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTopicRuleDestinationRequest();
    $request->requestBody = new CreateTopicRuleDestinationRequestBody();
    $request->requestBody->destinationConfiguration = new CreateTopicRuleDestinationRequestBodyDestinationConfiguration();
    $request->requestBody->destinationConfiguration->httpUrlConfiguration = new HttpUrlDestinationConfiguration();
    $request->requestBody->destinationConfiguration->httpUrlConfiguration->confirmationUrl = 'nulla';
    $request->requestBody->destinationConfiguration->vpcConfiguration = new VpcDestinationConfiguration();
    $request->requestBody->destinationConfiguration->vpcConfiguration->roleArn = 'quas';
    $request->requestBody->destinationConfiguration->vpcConfiguration->securityGroups = [
        'quasi',
        'a',
    ];
    $request->requestBody->destinationConfiguration->vpcConfiguration->subnetIds = [
        'sint',
        'pariatur',
        'possimus',
    ];
    $request->requestBody->destinationConfiguration->vpcConfiguration->vpcId = 'quia';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->createTopicRuleDestination($request);

    if ($response->createTopicRuleDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountAuditConfiguration

<p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountAuditConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountAuditConfigurationRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->deleteScheduledAudits = false;

    $response = $sdk->sdk->deleteAccountAuditConfiguration($request);

    if ($response->deleteAccountAuditConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAuditSuppression

<p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuditSuppressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuditSuppressionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuditSuppressionRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAuditSuppressionRequest();
    $request->requestBody = new DeleteAuditSuppressionRequestBody();
    $request->requestBody->checkName = 'eius';
    $request->requestBody->resourceIdentifier = new DeleteAuditSuppressionRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'libero';
    $request->requestBody->resourceIdentifier->caCertificateId = 'illum';
    $request->requestBody->resourceIdentifier->clientId = 'soluta';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'accusantium';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'aliquam';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'sapiente';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'dicta';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'ullam';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'reprehenderit';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'ullam';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'nisi';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'aut';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'voluptatum';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->deleteAuditSuppression($request);

    if ($response->deleteAuditSuppressionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAuthorizer

<p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAuthorizerRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->authorizerName = 'minima';

    $response = $sdk->sdk->deleteAuthorizer($request);

    if ($response->deleteAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBillingGroup

<p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBillingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBillingGroupRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'rem';
    $request->billingGroupName = 'aut';
    $request->expectedVersion = 513075;

    $response = $sdk->sdk->deleteBillingGroup($request);

    if ($response->deleteBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCACertificate

<p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCACertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCACertificateRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->caCertificateId = 'occaecati';

    $response = $sdk->sdk->deleteCACertificate($request);

    if ($response->deleteCACertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificate

<p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'dicta';
    $request->certificateId = 'maiores';
    $request->forceDelete = false;

    $response = $sdk->sdk->deleteCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomMetric

<p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomMetricRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'ea';
    $request->metricName = 'quaerat';

    $response = $sdk->sdk->deleteCustomMetric($request);

    if ($response->deleteCustomMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDimension

<p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDimensionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDimensionRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->name = 'Anna Hahn';

    $response = $sdk->sdk->deleteDimension($request);

    if ($response->deleteDimensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainConfiguration

<p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainConfigurationRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'velit';
    $request->domainConfigurationName = 'culpa';

    $response = $sdk->sdk->deleteDomainConfiguration($request);

    if ($response->deleteDomainConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDynamicThingGroup

<p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDynamicThingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDynamicThingGroupRequest();
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'quos';
    $request->expectedVersion = 427834;
    $request->thingGroupName = 'labore';

    $response = $sdk->sdk->deleteDynamicThingGroup($request);

    if ($response->deleteDynamicThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFleetMetric

<p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetMetricRequest();
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->expectedVersion = 828657;
    $request->metricName = 'nemo';

    $response = $sdk->sdk->deleteFleetMetric($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJob

<p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->force = false;
    $request->jobId = 'earum';
    $request->namespaceId = 'facere';

    $response = $sdk->sdk->deleteJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJobExecution

<p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobExecutionRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->executionNumber = 296556;
    $request->force = false;
    $request->jobId = 'sunt';
    $request->namespaceId = 'asperiores';
    $request->thingName = 'adipisci';

    $response = $sdk->sdk->deleteJobExecution($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJobTemplate

Deletes the specified job template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobTemplateRequest();
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->jobTemplateId = 'corporis';

    $response = $sdk->sdk->deleteJobTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMitigationAction

<p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMitigationActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMitigationActionRequest();
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->actionName = 'similique';

    $response = $sdk->sdk->deleteMitigationAction($request);

    if ($response->deleteMitigationActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOTAUpdate

<p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOTAUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOTAUpdateRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nobis';
    $request->deleteStream = false;
    $request->forceDeleteAWSJob = false;
    $request->otaUpdateId = 'dolorum';

    $response = $sdk->sdk->deleteOTAUpdate($request);

    if ($response->deleteOTAUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePolicy

<p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolicyRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->policyName = 'officiis';

    $response = $sdk->sdk->deletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePolicyVersion

<p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePolicyVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePolicyVersionRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'hic';
    $request->policyName = 'nesciunt';
    $request->policyVersionId = 'culpa';

    $response = $sdk->sdk->deletePolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProvisioningTemplate

<p>Deletes a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisioningTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProvisioningTemplateRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'sit';
    $request->templateName = 'rerum';

    $response = $sdk->sdk->deleteProvisioningTemplate($request);

    if ($response->deleteProvisioningTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProvisioningTemplateVersion

<p>Deletes a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisioningTemplateVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProvisioningTemplateVersionRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'expedita';
    $request->templateName = 'ab';
    $request->versionId = 611749;

    $response = $sdk->sdk->deleteProvisioningTemplateVersion($request);

    if ($response->deleteProvisioningTemplateVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRegistrationCode

<p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRegistrationCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRegistrationCodeRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->deleteRegistrationCode($request);

    if ($response->deleteRegistrationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoleAlias

<p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoleAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoleAliasRequest();
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'illo';
    $request->roleAlias = 'reiciendis';

    $response = $sdk->sdk->deleteRoleAlias($request);

    if ($response->deleteRoleAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScheduledAudit

<p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduledAuditRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduledAuditRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'eius';
    $request->scheduledAuditName = 'necessitatibus';

    $response = $sdk->sdk->deleteScheduledAudit($request);

    if ($response->deleteScheduledAuditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecurityProfile

<p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecurityProfileRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'tempora';
    $request->expectedVersion = 455444;
    $request->securityProfileName = 'reiciendis';

    $response = $sdk->sdk->deleteSecurityProfile($request);

    if ($response->deleteSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStream

<p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStreamRequest();
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->streamId = 'incidunt';

    $response = $sdk->sdk->deleteStream($request);

    if ($response->deleteStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteThing

<p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThingRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'veniam';
    $request->expectedVersion = 329543;
    $request->thingName = 'recusandae';

    $response = $sdk->sdk->deleteThing($request);

    if ($response->deleteThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteThingGroup

<p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThingGroupRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veniam';
    $request->expectedVersion = 446135;
    $request->thingGroupName = 'officiis';

    $response = $sdk->sdk->deleteThingGroup($request);

    if ($response->deleteThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteThingType

<p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThingTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThingTypeRequest();
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->thingTypeName = 'voluptatum';

    $response = $sdk->sdk->deleteThingType($request);

    if ($response->deleteThingTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTopicRule

<p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTopicRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTopicRuleRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->ruleName = 'officia';

    $response = $sdk->sdk->deleteTopicRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTopicRuleDestination

<p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTopicRuleDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTopicRuleDestinationRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'ut';
    $request->arn = 'fugiat';

    $response = $sdk->sdk->deleteTopicRuleDestination($request);

    if ($response->deleteTopicRuleDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteV2LoggingLevel

<p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2LoggingLevelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2LoggingLevelTargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2LoggingLevelRequest();
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->targetName = 'sit';
    $request->targetType = DeleteV2LoggingLevelTargetTypeEnum::CLIENT_ID;

    $response = $sdk->sdk->deleteV2LoggingLevel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprecateThingType

<p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateThingTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprecateThingTypeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprecateThingTypeRequest();
    $request->requestBody = new DeprecateThingTypeRequestBody();
    $request->requestBody->undoDeprecate = false;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sed';
    $request->thingTypeName = 'sit';

    $response = $sdk->sdk->deprecateThingType($request);

    if ($response->deprecateThingTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountAuditConfiguration

<p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountAuditConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountAuditConfigurationRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->describeAccountAuditConfiguration($request);

    if ($response->describeAccountAuditConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAuditFinding

<p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditFindingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuditFindingRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'quidem';
    $request->findingId = 'atque';

    $response = $sdk->sdk->describeAuditFinding($request);

    if ($response->describeAuditFindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAuditMitigationActionsTask

Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditMitigationActionsTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuditMitigationActionsTaskRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->taskId = 'voluptate';

    $response = $sdk->sdk->describeAuditMitigationActionsTask($request);

    if ($response->describeAuditMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAuditSuppression

 Gets information about a Device Defender audit suppression. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditSuppressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditSuppressionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditSuppressionRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuditSuppressionRequest();
    $request->requestBody = new DescribeAuditSuppressionRequestBody();
    $request->requestBody->checkName = 'unde';
    $request->requestBody->resourceIdentifier = new DescribeAuditSuppressionRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'reiciendis';
    $request->requestBody->resourceIdentifier->caCertificateId = 'provident';
    $request->requestBody->resourceIdentifier->clientId = 'repellendus';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'delectus';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'voluptates';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'perferendis';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'est';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'quidem';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'reprehenderit';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'facere';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'fuga';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'praesentium';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'mollitia';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->describeAuditSuppression($request);

    if ($response->describeAuditSuppressionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAuditTask

<p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuditTaskRequest();
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'esse';
    $request->taskId = 'amet';

    $response = $sdk->sdk->describeAuditTask($request);

    if ($response->describeAuditTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAuthorizer

<p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuthorizerRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->authorizerName = 'natus';

    $response = $sdk->sdk->describeAuthorizer($request);

    if ($response->describeAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBillingGroup

<p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBillingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBillingGroupRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'error';
    $request->billingGroupName = 'blanditiis';

    $response = $sdk->sdk->describeBillingGroup($request);

    if ($response->describeBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCACertificate

<p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCACertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCACertificateRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->caCertificateId = 'repellendus';

    $response = $sdk->sdk->describeCACertificate($request);

    if ($response->describeCACertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificate

<p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'beatae';
    $request->certificateId = 'dolores';

    $response = $sdk->sdk->describeCertificate($request);

    if ($response->describeCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomMetric

<p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomMetricRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'saepe';
    $request->metricName = 'consequuntur';

    $response = $sdk->sdk->describeCustomMetric($request);

    if ($response->describeCustomMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDefaultAuthorizer

<p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDefaultAuthorizerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDefaultAuthorizerRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->describeDefaultAuthorizer($request);

    if ($response->describeDefaultAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDetectMitigationActionsTask

<p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDetectMitigationActionsTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDetectMitigationActionsTaskRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'illo';
    $request->taskId = 'corporis';

    $response = $sdk->sdk->describeDetectMitigationActionsTask($request);

    if ($response->describeDetectMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDimension

<p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDimensionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDimensionRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->name = 'Frank Krajcik';

    $response = $sdk->sdk->describeDimension($request);

    if ($response->describeDimensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDomainConfiguration

<p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDomainConfigurationRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->domainConfigurationName = 'rem';

    $response = $sdk->sdk->describeDomainConfiguration($request);

    if ($response->describeDomainConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoint

<p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointRequest();
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->endpointType = 'mollitia';

    $response = $sdk->sdk->describeEndpoint($request);

    if ($response->describeEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventConfigurations

<p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventConfigurationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventConfigurationsRequest();
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->describeEventConfigurations($request);

    if ($response->describeEventConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFleetMetric

<p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetMetricRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->metricName = 'molestiae';

    $response = $sdk->sdk->describeFleetMetric($request);

    if ($response->describeFleetMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIndex

<p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIndexRequest();
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';
    $request->indexName = 'nemo';

    $response = $sdk->sdk->describeIndex($request);

    if ($response->describeIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJob

<p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'provident';
    $request->jobId = 'aspernatur';

    $response = $sdk->sdk->describeJob($request);

    if ($response->describeJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobExecution

<p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobExecutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobExecutionRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'possimus';
    $request->executionNumber = 659177;
    $request->jobId = 'ex';
    $request->thingName = 'aliquid';

    $response = $sdk->sdk->describeJobExecution($request);

    if ($response->describeJobExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobTemplate

Returns information about a job template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobTemplateRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'earum';
    $request->jobTemplateId = 'officia';

    $response = $sdk->sdk->describeJobTemplate($request);

    if ($response->describeJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeManagedJobTemplate

View details of a managed job template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeManagedJobTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeManagedJobTemplateRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->templateName = 'cumque';
    $request->templateVersion = 'vitae';

    $response = $sdk->sdk->describeManagedJobTemplate($request);

    if ($response->describeManagedJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMitigationAction

<p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMitigationActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMitigationActionRequest();
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'quae';
    $request->actionName = 'perferendis';

    $response = $sdk->sdk->describeMitigationAction($request);

    if ($response->describeMitigationActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisioningTemplate

<p>Returns information about a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisioningTemplateRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'impedit';
    $request->templateName = 'eos';

    $response = $sdk->sdk->describeProvisioningTemplate($request);

    if ($response->describeProvisioningTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProvisioningTemplateVersion

<p>Returns information about a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProvisioningTemplateVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProvisioningTemplateVersionRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'provident';
    $request->templateName = 'earum';
    $request->versionId = 745398;

    $response = $sdk->sdk->describeProvisioningTemplateVersion($request);

    if ($response->describeProvisioningTemplateVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRoleAlias

<p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRoleAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRoleAliasRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'debitis';
    $request->roleAlias = 'aliquid';

    $response = $sdk->sdk->describeRoleAlias($request);

    if ($response->describeRoleAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeScheduledAudit

<p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeScheduledAuditRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeScheduledAuditRequest();
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'ratione';
    $request->scheduledAuditName = 'animi';

    $response = $sdk->sdk->describeScheduledAudit($request);

    if ($response->describeScheduledAuditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSecurityProfile

<p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecurityProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSecurityProfileRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'natus';
    $request->securityProfileName = 'occaecati';

    $response = $sdk->sdk->describeSecurityProfile($request);

    if ($response->describeSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStream

<p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStreamRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->streamId = 'ipsa';

    $response = $sdk->sdk->describeStream($request);

    if ($response->describeStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeThing

<p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeThingRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->thingName = 'maiores';

    $response = $sdk->sdk->describeThing($request);

    if ($response->describeThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeThingGroup

<p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeThingGroupRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'odio';
    $request->thingGroupName = 'tempora';

    $response = $sdk->sdk->describeThingGroup($request);

    if ($response->describeThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeThingRegistrationTask

<p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThingRegistrationTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeThingRegistrationTaskRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'sunt';
    $request->taskId = 'nostrum';

    $response = $sdk->sdk->describeThingRegistrationTask($request);

    if ($response->describeThingRegistrationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeThingType

<p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeThingTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeThingTypeRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->thingTypeName = 'eum';

    $response = $sdk->sdk->describeThingType($request);

    if ($response->describeThingTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachPolicy

<p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachPolicyRequest();
    $request->requestBody = new DetachPolicyRequestBody();
    $request->requestBody->target = 'voluptas';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->policyName = 'laborum';

    $response = $sdk->sdk->detachPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~detachPrincipalPolicy~~

<p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachPrincipalPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachPrincipalPolicyRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'ex';
    $request->policyName = 'quo';
    $request->xAmznIotPrincipal = 'ex';

    $response = $sdk->sdk->detachPrincipalPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachSecurityProfile

<p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachSecurityProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachSecurityProfileRequest();
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->securityProfileName = 'beatae';
    $request->securityProfileTargetArn = 'voluptatum';

    $response = $sdk->sdk->detachSecurityProfile($request);

    if ($response->detachSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachThingPrincipal

<p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachThingPrincipalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachThingPrincipalRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->thingName = 'officiis';
    $request->xAmznPrincipal = 'architecto';

    $response = $sdk->sdk->detachThingPrincipal($request);

    if ($response->detachThingPrincipalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableTopicRule

<p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableTopicRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableTopicRuleRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'earum';
    $request->ruleName = 'ex';

    $response = $sdk->sdk->disableTopicRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableTopicRule

<p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableTopicRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableTopicRuleRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ullam';
    $request->ruleName = 'perferendis';

    $response = $sdk->sdk->enableTopicRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBehaviorModelTrainingSummaries

<p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBehaviorModelTrainingSummariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBehaviorModelTrainingSummariesRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'culpa';
    $request->maxResults = 222864;
    $request->nextToken = 'aliquam';
    $request->securityProfileName = 'inventore';

    $response = $sdk->sdk->getBehaviorModelTrainingSummaries($request);

    if ($response->getBehaviorModelTrainingSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBucketsAggregation

<p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsAggregationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsAggregationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsAggregationRequestBodyBucketsAggregationType;
use \OpenAPI\OpenAPI\Models\Shared\TermsAggregation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketsAggregationRequest();
    $request->requestBody = new GetBucketsAggregationRequestBody();
    $request->requestBody->aggregationField = 'deleniti';
    $request->requestBody->bucketsAggregationType = new GetBucketsAggregationRequestBodyBucketsAggregationType();
    $request->requestBody->bucketsAggregationType->termsAggregation = new TermsAggregation();
    $request->requestBody->bucketsAggregationType->termsAggregation->maxBuckets = 85311;
    $request->requestBody->indexName = 'tempora';
    $request->requestBody->queryString = 'dolor';
    $request->requestBody->queryVersion = 'consequatur';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getBucketsAggregation($request);

    if ($response->getBucketsAggregationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCardinality

<p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCardinalityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCardinalityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCardinalityRequest();
    $request->requestBody = new GetCardinalityRequestBody();
    $request->requestBody->aggregationField = 'dolor';
    $request->requestBody->indexName = 'fugiat';
    $request->requestBody->queryString = 'ipsam';
    $request->requestBody->queryVersion = 'consequuntur';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getCardinality($request);

    if ($response->getCardinalityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEffectivePolicies

<p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectivePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectivePoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEffectivePoliciesRequest();
    $request->requestBody = new GetEffectivePoliciesRequestBody();
    $request->requestBody->cognitoIdentityPoolId = 'sed';
    $request->requestBody->principal = 'veniam';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->thingName = 'ab';

    $response = $sdk->sdk->getEffectivePolicies($request);

    if ($response->getEffectivePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndexingConfiguration

<p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIndexingConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndexingConfigurationRequest();
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->getIndexingConfiguration($request);

    if ($response->getIndexingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobDocument

<p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobDocumentRequest();
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'est';
    $request->jobId = 'harum';

    $response = $sdk->sdk->getJobDocument($request);

    if ($response->getJobDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoggingOptions

<p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoggingOptionsRequest();
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getLoggingOptions($request);

    if ($response->getLoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOTAUpdate

<p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOTAUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOTAUpdateRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'eius';
    $request->otaUpdateId = 'aspernatur';

    $response = $sdk->sdk->getOTAUpdate($request);

    if ($response->getOTAUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPercentiles

<p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPercentilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPercentilesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPercentilesRequest();
    $request->requestBody = new GetPercentilesRequestBody();
    $request->requestBody->aggregationField = 'ducimus';
    $request->requestBody->indexName = 'nesciunt';
    $request->requestBody->percents = [
        5140.54,
        2773.4,
        974.93,
    ];
    $request->requestBody->queryString = 'rem';
    $request->requestBody->queryVersion = 'fugiat';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getPercentiles($request);

    if ($response->getPercentilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicy

<p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyRequest();
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'magni';
    $request->policyName = 'inventore';

    $response = $sdk->sdk->getPolicy($request);

    if ($response->getPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicyVersion

<p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyVersionRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'minima';
    $request->policyName = 'praesentium';
    $request->policyVersionId = 'maxime';

    $response = $sdk->sdk->getPolicyVersion($request);

    if ($response->getPolicyVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistrationCode

<p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistrationCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistrationCodeRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getRegistrationCode($request);

    if ($response->getRegistrationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatistics

<p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsRequest();
    $request->requestBody = new GetStatisticsRequestBody();
    $request->requestBody->aggregationField = 'earum';
    $request->requestBody->indexName = 'modi';
    $request->requestBody->queryString = 'nam';
    $request->requestBody->queryVersion = 'vero';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getStatistics($request);

    if ($response->getStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTopicRule

<p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTopicRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTopicRuleRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->ruleName = 'est';

    $response = $sdk->sdk->getTopicRule($request);

    if ($response->getTopicRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTopicRuleDestination

<p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTopicRuleDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTopicRuleDestinationRequest();
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->arn = 'ex';

    $response = $sdk->sdk->getTopicRuleDestination($request);

    if ($response->getTopicRuleDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2LoggingOptions

<p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetV2LoggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2LoggingOptionsRequest();
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getV2LoggingOptions($request);

    if ($response->getV2LoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActiveViolations

<p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActiveViolationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListActiveViolationsBehaviorCriteriaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListActiveViolationsVerificationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActiveViolationsRequest();
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'soluta';
    $request->behaviorCriteriaType = ListActiveViolationsBehaviorCriteriaTypeEnum::MACHINE_LEARNING;
    $request->listSuppressedAlerts = false;
    $request->maxResults = 721430;
    $request->nextToken = 'dolore';
    $request->securityProfileName = 'iusto';
    $request->thingName = 'voluptate';
    $request->verificationState = ListActiveViolationsVerificationStateEnum::FALSE_POSITIVE;

    $response = $sdk->sdk->listActiveViolations($request);

    if ($response->listActiveViolationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAttachedPolicies

<p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAttachedPoliciesRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odit';
    $request->marker = 'voluptatibus';
    $request->pageSize = 426904;
    $request->recursive = false;
    $request->target = 'magnam';

    $response = $sdk->sdk->listAttachedPolicies($request);

    if ($response->listAttachedPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuditFindings

<p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditFindingsRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuditFindingsRequest();
    $request->requestBody = new ListAuditFindingsRequestBody();
    $request->requestBody->checkName = 'quibusdam';
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T10:01:41.504Z');
    $request->requestBody->listSuppressedFindings = false;
    $request->requestBody->maxResults = 726878;
    $request->requestBody->nextToken = 'architecto';
    $request->requestBody->resourceIdentifier = new ListAuditFindingsRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'voluptatibus';
    $request->requestBody->resourceIdentifier->caCertificateId = 'quia';
    $request->requestBody->resourceIdentifier->clientId = 'porro';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'aliquam';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'velit';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'illo';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'accusantium';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'vel';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'ea';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'beatae';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'vero';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'excepturi';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'eum';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T07:24:19.034Z');
    $request->requestBody->taskId = 'perspiciatis';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'alias';
    $request->maxResults = 'nisi';
    $request->nextToken = 'itaque';

    $response = $sdk->sdk->listAuditFindings($request);

    if ($response->listAuditFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuditMitigationActionsExecutions

<p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditMitigationActionsExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditMitigationActionsExecutionsActionStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuditMitigationActionsExecutionsRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->actionStatus = ListAuditMitigationActionsExecutionsActionStatusEnum::IN_PROGRESS;
    $request->findingId = 'officia';
    $request->maxResults = 927403;
    $request->nextToken = 'ea';
    $request->taskId = 'quidem';

    $response = $sdk->sdk->listAuditMitigationActionsExecutions($request);

    if ($response->listAuditMitigationActionsExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuditMitigationActionsTasks

<p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditMitigationActionsTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditMitigationActionsTasksTaskStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuditMitigationActionsTasksRequest();
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'a';
    $request->auditTaskId = 'voluptate';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T22:18:26.553Z');
    $request->findingId = 'necessitatibus';
    $request->maxResults = 654082;
    $request->nextToken = 'impedit';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T12:57:35.673Z');
    $request->taskStatus = ListAuditMitigationActionsTasksTaskStatusEnum::FAILED;

    $response = $sdk->sdk->listAuditMitigationActionsTasks($request);

    if ($response->listAuditMitigationActionsTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuditSuppressions

<p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditSuppressionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditSuppressionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditSuppressionsRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuditSuppressionsRequest();
    $request->requestBody = new ListAuditSuppressionsRequestBody();
    $request->requestBody->ascendingOrder = false;
    $request->requestBody->checkName = 'error';
    $request->requestBody->maxResults = 456885;
    $request->requestBody->nextToken = 'labore';
    $request->requestBody->resourceIdentifier = new ListAuditSuppressionsRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'veritatis';
    $request->requestBody->resourceIdentifier->caCertificateId = 'vero';
    $request->requestBody->resourceIdentifier->clientId = 'consectetur';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'vitae';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'inventore';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'dolorem';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'ad';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'qui';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'iste';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'ex';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'nemo';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'soluta';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'libero';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'vel';
    $request->maxResults = 'quae';
    $request->nextToken = 'quae';

    $response = $sdk->sdk->listAuditSuppressions($request);

    if ($response->listAuditSuppressionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuditTasks

<p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditTasksTaskStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAuditTasksTaskTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuditTasksRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'unde';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T18:12:20.087Z');
    $request->maxResults = 802894;
    $request->nextToken = 'quia';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T02:52:30.806Z');
    $request->taskStatus = ListAuditTasksTaskStatusEnum::FAILED;
    $request->taskType = ListAuditTasksTaskTypeEnum::SCHEDULED_AUDIT_TASK;

    $response = $sdk->sdk->listAuditTasks($request);

    if ($response->listAuditTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuthorizers

<p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorizersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorizersStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuthorizersRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'placeat';
    $request->isAscendingOrder = false;
    $request->marker = 'sit';
    $request->pageSize = 479385;
    $request->status = ListAuthorizersStatusEnum::ACTIVE;

    $response = $sdk->sdk->listAuthorizers($request);

    if ($response->listAuthorizersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBillingGroups

<p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBillingGroupsRequest();
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->maxResults = 32273;
    $request->namePrefixFilter = 'autem';
    $request->nextToken = 'esse';

    $response = $sdk->sdk->listBillingGroups($request);

    if ($response->listBillingGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCACertificates

<p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCACertificatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCACertificatesRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->isAscendingOrder = false;
    $request->marker = 'provident';
    $request->pageSize = 882284;
    $request->templateName = 'necessitatibus';

    $response = $sdk->sdk->listCACertificates($request);

    if ($response->listCACertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificates

<p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificatesRequest();
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->isAscendingOrder = false;
    $request->marker = 'corporis';
    $request->pageSize = 889060;

    $response = $sdk->sdk->listCertificates($request);

    if ($response->listCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificatesByCA

<p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesByCARequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificatesByCARequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fuga';
    $request->caCertificateId = 'repudiandae';
    $request->isAscendingOrder = false;
    $request->marker = 'accusantium';
    $request->pageSize = 710456;

    $response = $sdk->sdk->listCertificatesByCA($request);

    if ($response->listCertificatesByCAResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomMetrics

<p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomMetricsRequest();
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->maxResults = 358995;
    $request->nextToken = 'error';

    $response = $sdk->sdk->listCustomMetrics($request);

    if ($response->listCustomMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDetectMitigationActionsExecutions

<p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDetectMitigationActionsExecutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDetectMitigationActionsExecutionsRequest();
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'quis';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T22:08:06.673Z');
    $request->maxResults = 476946;
    $request->nextToken = 'delectus';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T02:31:13.378Z');
    $request->taskId = 'numquam';
    $request->thingName = 'numquam';
    $request->violationId = 'nesciunt';

    $response = $sdk->sdk->listDetectMitigationActionsExecutions($request);

    if ($response->listDetectMitigationActionsExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDetectMitigationActionsTasks

<p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDetectMitigationActionsTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDetectMitigationActionsTasksRequest();
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'qui';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-08T03:38:46.630Z');
    $request->maxResults = 587375;
    $request->nextToken = 'minima';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T09:15:40.360Z');

    $response = $sdk->sdk->listDetectMitigationActionsTasks($request);

    if ($response->listDetectMitigationActionsTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDimensions

<p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDimensionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDimensionsRequest();
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 914971;
    $request->nextToken = 'maiores';

    $response = $sdk->sdk->listDimensions($request);

    if ($response->listDimensionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomainConfigurations

<p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainConfigurationsServiceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainConfigurationsRequest();
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->marker = 'voluptas';
    $request->pageSize = 779180;
    $request->serviceType = ListDomainConfigurationsServiceTypeEnum::DATA;

    $response = $sdk->sdk->listDomainConfigurations($request);

    if ($response->listDomainConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFleetMetrics

<p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFleetMetricsRequest();
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempore';
    $request->maxResults = 878601;
    $request->nextToken = 'odit';

    $response = $sdk->sdk->listFleetMetrics($request);

    if ($response->listFleetMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIndices

<p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIndicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIndicesRequest();
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'minima';
    $request->maxResults = 448369;
    $request->nextToken = 'ducimus';

    $response = $sdk->sdk->listIndices($request);

    if ($response->listIndicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobExecutionsForJob

<p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobExecutionsForJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobExecutionsForJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobExecutionsForJobRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->jobId = 'itaque';
    $request->maxResults = 627735;
    $request->nextToken = 'optio';
    $request->status = ListJobExecutionsForJobStatusEnum::FAILED;

    $response = $sdk->sdk->listJobExecutionsForJob($request);

    if ($response->listJobExecutionsForJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobExecutionsForThing

<p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobExecutionsForThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobExecutionsForThingStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobExecutionsForThingRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'quam';
    $request->jobId = 'dolorem';
    $request->maxResults = 264619;
    $request->namespaceId = 'ipsa';
    $request->nextToken = 'sint';
    $request->status = ListJobExecutionsForThingStatusEnum::CANCELED;
    $request->thingName = 'sequi';

    $response = $sdk->sdk->listJobExecutionsForThing($request);

    if ($response->listJobExecutionsForThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobTemplates

<p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobTemplatesRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'dolores';
    $request->maxResults = 724994;
    $request->nextToken = 'dicta';

    $response = $sdk->sdk->listJobTemplates($request);

    if ($response->listJobTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

<p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsTargetSelectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->maxResults = 96450;
    $request->namespaceId = 'laboriosam';
    $request->nextToken = 'pariatur';
    $request->status = ListJobsStatusEnum::DELETION_IN_PROGRESS;
    $request->targetSelection = ListJobsTargetSelectionEnum::SNAPSHOT;
    $request->thingGroupId = 'occaecati';
    $request->thingGroupName = 'nemo';

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManagedJobTemplates

Returns a list of managed job templates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedJobTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManagedJobTemplatesRequest();
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'hic';
    $request->maxResults = 657319;
    $request->nextToken = 'quas';
    $request->templateName = 'totam';

    $response = $sdk->sdk->listManagedJobTemplates($request);

    if ($response->listManagedJobTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMetricValues

Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMetricValuesDimensionValueOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMetricValuesRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'iste';
    $request->dimensionName = 'assumenda';
    $request->dimensionValueOperator = ListMetricValuesDimensionValueOperatorEnum::NOT_IN;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:33:05.731Z');
    $request->maxResults = 38557;
    $request->metricName = 'delectus';
    $request->nextToken = 'impedit';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T16:25:58.578Z');
    $request->thingName = 'adipisci';

    $response = $sdk->sdk->listMetricValues($request);

    if ($response->listMetricValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMitigationActions

<p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMitigationActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMitigationActionsActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMitigationActionsRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'architecto';
    $request->actionType = ListMitigationActionsActionTypeEnum::REPLACE_DEFAULT_POLICY_VERSION;
    $request->maxResults = 475589;
    $request->nextToken = 'eligendi';

    $response = $sdk->sdk->listMitigationActions($request);

    if ($response->listMitigationActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOTAUpdates

<p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOTAUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOTAUpdatesOTAUpdateStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOTAUpdatesRequest();
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'veniam';
    $request->maxResults = 164532;
    $request->nextToken = 'facere';
    $request->otaUpdateStatus = ListOTAUpdatesOTAUpdateStatusEnum::CREATE_FAILED;

    $response = $sdk->sdk->listOTAUpdates($request);

    if ($response->listOTAUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOutgoingCertificates

<p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingCertificatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOutgoingCertificatesRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'facilis';
    $request->isAscendingOrder = false;
    $request->marker = 'tempore';
    $request->pageSize = 395233;

    $response = $sdk->sdk->listOutgoingCertificates($request);

    if ($response->listOutgoingCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPolicies

<p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPoliciesRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nisi';
    $request->isAscendingOrder = false;
    $request->marker = 'libero';
    $request->pageSize = 794507;

    $response = $sdk->sdk->listPolicies($request);

    if ($response->listPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPolicyPrincipals~~

<p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyPrincipalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPolicyPrincipalsRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->isAscendingOrder = false;
    $request->marker = 'debitis';
    $request->pageSize = 290841;
    $request->xAmznIotPolicy = 'rerum';

    $response = $sdk->sdk->listPolicyPrincipals($request);

    if ($response->listPolicyPrincipalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPolicyVersions

<p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPolicyVersionsRequest();
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'rem';
    $request->policyName = 'eligendi';

    $response = $sdk->sdk->listPolicyVersions($request);

    if ($response->listPolicyVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listPrincipalPolicies~~

<p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPrincipalPoliciesRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'error';
    $request->isAscendingOrder = false;
    $request->marker = 'porro';
    $request->pageSize = 111496;
    $request->xAmznIotPrincipal = 'dignissimos';

    $response = $sdk->sdk->listPrincipalPolicies($request);

    if ($response->listPrincipalPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrincipalThings

<p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPrincipalThingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPrincipalThingsRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'iusto';
    $request->maxResults = 491201;
    $request->nextToken = 'libero';
    $request->xAmznPrincipal = 'illo';

    $response = $sdk->sdk->listPrincipalThings($request);

    if ($response->listPrincipalThingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisioningTemplateVersions

<p>A list of provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningTemplateVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisioningTemplateVersionsRequest();
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'eos';
    $request->maxResults = 970079;
    $request->nextToken = 'earum';
    $request->templateName = 'reprehenderit';

    $response = $sdk->sdk->listProvisioningTemplateVersions($request);

    if ($response->listProvisioningTemplateVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisioningTemplates

<p>Lists the provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisioningTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisioningTemplatesRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->maxResults = 75566;
    $request->nextToken = 'labore';

    $response = $sdk->sdk->listProvisioningTemplates($request);

    if ($response->listProvisioningTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRelatedResourcesForAuditFinding

<p>The related resources of an Audit finding. The following resources can be returned from calling this API:</p> <ul> <li> <p>DEVICE_CERTIFICATE</p> </li> <li> <p>CA_CERTIFICATE</p> </li> <li> <p>IOT_POLICY</p> </li> <li> <p>COGNITO_IDENTITY_POOL</p> </li> <li> <p>CLIENT_ID</p> </li> <li> <p>ACCOUNT_SETTINGS</p> </li> <li> <p>ROLE_ALIAS</p> </li> <li> <p>IAM_ROLE</p> </li> <li> <p>ISSUER_CERTIFICATE</p> </li> </ul> <note> <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a> but provides pagination and is not limited to 10 resources. When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRelatedResourcesForAuditFindingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRelatedResourcesForAuditFindingRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->findingId = 'maxime';
    $request->maxResults = 136357;
    $request->nextToken = 'nam';

    $response = $sdk->sdk->listRelatedResourcesForAuditFinding($request);

    if ($response->listRelatedResourcesForAuditFindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoleAliases

<p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRoleAliasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoleAliasesRequest();
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'corporis';
    $request->isAscendingOrder = false;
    $request->marker = 'vero';
    $request->pageSize = 629377;

    $response = $sdk->sdk->listRoleAliases($request);

    if ($response->listRoleAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScheduledAudits

<p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScheduledAuditsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScheduledAuditsRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 32055;
    $request->nextToken = 'ad';

    $response = $sdk->sdk->listScheduledAudits($request);

    if ($response->listScheduledAuditsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityProfiles

<p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityProfilesRequest();
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'amet';
    $request->dimensionName = 'quasi';
    $request->maxResults = 118126;
    $request->metricName = 'laudantium';
    $request->nextToken = 'doloremque';

    $response = $sdk->sdk->listSecurityProfiles($request);

    if ($response->listSecurityProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityProfilesForTarget

<p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityProfilesForTargetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityProfilesForTargetRequest();
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'provident';
    $request->maxResults = 920272;
    $request->nextToken = 'consequatur';
    $request->recursive = false;
    $request->securityProfileTargetArn = 'nemo';

    $response = $sdk->sdk->listSecurityProfilesForTarget($request);

    if ($response->listSecurityProfilesForTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreams

<p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamsRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->isAscendingOrder = false;
    $request->maxResults = 178635;
    $request->nextToken = 'totam';

    $response = $sdk->sdk->listStreams($request);

    if ($response->listStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolor';
    $request->nextToken = 'occaecati';
    $request->resourceArn = 'atque';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetsForPolicy

<p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsForPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetsForPolicyRequest();
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->marker = 'rerum';
    $request->pageSize = 411615;
    $request->policyName = 'aperiam';

    $response = $sdk->sdk->listTargetsForPolicy($request);

    if ($response->listTargetsForPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetsForSecurityProfile

<p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsForSecurityProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetsForSecurityProfileRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->maxResults = 490110;
    $request->nextToken = 'consectetur';
    $request->securityProfileName = 'soluta';

    $response = $sdk->sdk->listTargetsForSecurityProfile($request);

    if ($response->listTargetsForSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingGroups

<p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingGroupsRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'quo';
    $request->maxResults = 931077;
    $request->namePrefixFilter = 'illum';
    $request->nextToken = 'laborum';
    $request->parentGroup = 'dignissimos';
    $request->recursive = false;

    $response = $sdk->sdk->listThingGroups($request);

    if ($response->listThingGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingGroupsForThing

<p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingGroupsForThingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingGroupsForThingRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->maxResults = 471457;
    $request->nextToken = 'non';
    $request->thingName = 'ab';

    $response = $sdk->sdk->listThingGroupsForThing($request);

    if ($response->listThingGroupsForThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingPrincipals

<p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingPrincipalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingPrincipalsRequest();
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'in';
    $request->maxResults = 349993;
    $request->nextToken = 'labore';
    $request->thingName = 'numquam';

    $response = $sdk->sdk->listThingPrincipals($request);

    if ($response->listThingPrincipalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingRegistrationTaskReports

Information about the thing registration tasks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingRegistrationTaskReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListThingRegistrationTaskReportsReportTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingRegistrationTaskReportsRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->maxResults = 141817;
    $request->nextToken = 'deleniti';
    $request->reportType = ListThingRegistrationTaskReportsReportTypeEnum::ERRORS;
    $request->taskId = 'voluptate';

    $response = $sdk->sdk->listThingRegistrationTaskReports($request);

    if ($response->listThingRegistrationTaskReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingRegistrationTasks

<p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingRegistrationTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListThingRegistrationTasksStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingRegistrationTasksRequest();
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 199529;
    $request->nextToken = 'mollitia';
    $request->status = ListThingRegistrationTasksStatusEnum::FAILED;

    $response = $sdk->sdk->listThingRegistrationTasks($request);

    if ($response->listThingRegistrationTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingTypes

<p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingTypesRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'modi';
    $request->maxResults = 13865;
    $request->nextToken = 'aut';
    $request->thingTypeName = 'eveniet';

    $response = $sdk->sdk->listThingTypes($request);

    if ($response->listThingTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThings

<p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer Guide</i>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingsRequest();
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->attributeName = 'nesciunt';
    $request->attributeValue = 'quaerat';
    $request->maxResults = 929476;
    $request->nextToken = 'minus';
    $request->thingTypeName = 'sunt';
    $request->usePrefixAttributeValue = false;

    $response = $sdk->sdk->listThings($request);

    if ($response->listThingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingsInBillingGroup

<p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingsInBillingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingsInBillingGroupRequest();
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'autem';
    $request->billingGroupName = 'fuga';
    $request->maxResults = 5310;
    $request->nextToken = 'rem';

    $response = $sdk->sdk->listThingsInBillingGroup($request);

    if ($response->listThingsInBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThingsInThingGroup

<p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThingsInThingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThingsInThingGroupRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'eaque';
    $request->maxResults = 904827;
    $request->nextToken = 'delectus';
    $request->recursive = false;
    $request->thingGroupName = 'mollitia';

    $response = $sdk->sdk->listThingsInThingGroup($request);

    if ($response->listThingsInThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTopicRuleDestinations

<p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTopicRuleDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTopicRuleDestinationsRequest();
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'hic';
    $request->maxResults = 27982;
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listTopicRuleDestinations($request);

    if ($response->listTopicRuleDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTopicRules

<p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTopicRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTopicRulesRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 264649;
    $request->nextToken = 'optio';
    $request->ruleDisabled = false;
    $request->topic = 'voluptatibus';

    $response = $sdk->sdk->listTopicRules($request);

    if ($response->listTopicRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listV2LoggingLevels

<p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListV2LoggingLevelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListV2LoggingLevelsTargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListV2LoggingLevelsRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'ea';
    $request->maxResults = 774501;
    $request->nextToken = 'ducimus';
    $request->targetType = ListV2LoggingLevelsTargetTypeEnum::DEFAULT;

    $response = $sdk->sdk->listV2LoggingLevels($request);

    if ($response->listV2LoggingLevelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listViolationEvents

<p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListViolationEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListViolationEventsBehaviorCriteriaTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListViolationEventsVerificationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListViolationEventsRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->behaviorCriteriaType = ListViolationEventsBehaviorCriteriaTypeEnum::STATIC;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-20T04:30:16.157Z');
    $request->listSuppressedAlerts = false;
    $request->maxResults = 924840;
    $request->nextToken = 'voluptates';
    $request->securityProfileName = 'non';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-07T17:52:27.595Z');
    $request->thingName = 'ullam';
    $request->verificationState = ListViolationEventsVerificationStateEnum::UNKNOWN;

    $response = $sdk->sdk->listViolationEvents($request);

    if ($response->listViolationEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putVerificationStateOnViolation

Set a verification state and provide a description of that verification state on a violation (detect alarm).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutVerificationStateOnViolationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutVerificationStateOnViolationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutVerificationStateOnViolationRequestBodyVerificationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutVerificationStateOnViolationRequest();
    $request->requestBody = new PutVerificationStateOnViolationRequestBody();
    $request->requestBody->verificationState = PutVerificationStateOnViolationRequestBodyVerificationStateEnum::FALSE_POSITIVE;
    $request->requestBody->verificationStateDescription = 'voluptatibus';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'optio';
    $request->violationId = 'rem';

    $response = $sdk->sdk->putVerificationStateOnViolation($request);

    if ($response->putVerificationStateOnViolationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCACertificate

<p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCACertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCACertificateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCACertificateRequestBodyCertificateModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCACertificateRequestBodyRegistrationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterCACertificateRequest();
    $request->requestBody = new RegisterCACertificateRequestBody();
    $request->requestBody->caCertificate = 'perferendis';
    $request->requestBody->certificateMode = RegisterCACertificateRequestBodyCertificateModeEnum::SNI_ONLY;
    $request->requestBody->registrationConfig = new RegisterCACertificateRequestBodyRegistrationConfig();
    $request->requestBody->registrationConfig->roleArn = 'reiciendis';
    $request->requestBody->registrationConfig->templateBody = 'a';
    $request->requestBody->registrationConfig->templateName = 'iste';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->verificationCertificate = 'quos';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->allowAutoRegistration = false;
    $request->setAsActive = false;

    $response = $sdk->sdk->registerCACertificate($request);

    if ($response->registerCACertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCertificate

<p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterCertificateRequest();
    $request->requestBody = new RegisterCertificateRequestBody();
    $request->requestBody->caCertificatePem = 'assumenda';
    $request->requestBody->certificatePem = 'vero';
    $request->requestBody->status = RegisterCertificateRequestBodyStatusEnum::PENDING_ACTIVATION;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'sint';
    $request->setAsActive = false;

    $response = $sdk->sdk->registerCertificate($request);

    if ($response->registerCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCertificateWithoutCA

Register a certificate that does not have a certificate authority (CA). For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateWithoutCARequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateWithoutCARequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateWithoutCARequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterCertificateWithoutCARequest();
    $request->requestBody = new RegisterCertificateWithoutCARequestBody();
    $request->requestBody->certificatePem = 'nihil';
    $request->requestBody->status = RegisterCertificateWithoutCARequestBodyStatusEnum::REVOKED;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->registerCertificateWithoutCA($request);

    if ($response->registerCertificateWithoutCAResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerThing

<p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterThingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterThingRequest();
    $request->requestBody = new RegisterThingRequestBody();
    $request->requestBody->parameters = [
        'consequuntur' => 'officia',
        'reprehenderit' => 'distinctio',
    ];
    $request->requestBody->templateBody = 'eius';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->registerThing($request);

    if ($response->registerThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectCertificateTransfer

<p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectCertificateTransferRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectCertificateTransferRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectCertificateTransferRequest();
    $request->requestBody = new RejectCertificateTransferRequestBody();
    $request->requestBody->rejectReason = 'facere';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'velit';
    $request->certificateId = 'vitae';

    $response = $sdk->sdk->rejectCertificateTransfer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeThingFromBillingGroup

<p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveThingFromBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveThingFromBillingGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveThingFromBillingGroupRequest();
    $request->requestBody = new RemoveThingFromBillingGroupRequestBody();
    $request->requestBody->billingGroupArn = 'nesciunt';
    $request->requestBody->billingGroupName = 'similique';
    $request->requestBody->thingArn = 'illo';
    $request->requestBody->thingName = 'repellat';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->removeThingFromBillingGroup($request);

    if ($response->removeThingFromBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeThingFromThingGroup

<p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveThingFromThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveThingFromThingGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveThingFromThingGroupRequest();
    $request->requestBody = new RemoveThingFromThingGroupRequestBody();
    $request->requestBody->thingArn = 'cupiditate';
    $request->requestBody->thingGroupArn = 'optio';
    $request->requestBody->thingGroupName = 'alias';
    $request->requestBody->thingName = 'quidem';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->removeThingFromThingGroup($request);

    if ($response->removeThingFromThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replaceTopicRule

<p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceTopicRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceTopicRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceTopicRuleRequestBodyTopicRulePayload;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchAlarmAction;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchLogsAction;
use \OpenAPI\OpenAPI\Models\Shared\CloudwatchMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBAction;
use \OpenAPI\OpenAPI\Models\Shared\DynamoKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBv2Action;
use \OpenAPI\OpenAPI\Models\Shared\PutItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ElasticsearchAction;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpAction;
use \OpenAPI\OpenAPI\Models\Shared\HttpAuthorization;
use \OpenAPI\OpenAPI\Models\Shared\SigV4Authorization;
use \OpenAPI\OpenAPI\Models\Shared\HttpActionHeader;
use \OpenAPI\OpenAPI\Models\Shared\IotAnalyticsAction;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsAction;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseAction;
use \OpenAPI\OpenAPI\Models\Shared\PutAssetPropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyTimestamp;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyVariant;
use \OpenAPI\OpenAPI\Models\Shared\KafkaAction;
use \OpenAPI\OpenAPI\Models\Shared\KinesisAction;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAction;
use \OpenAPI\OpenAPI\Models\Shared\LocationAction;
use \OpenAPI\OpenAPI\Models\Shared\LocationTimestamp;
use \OpenAPI\OpenAPI\Models\Shared\OpenSearchAction;
use \OpenAPI\OpenAPI\Models\Shared\RepublishAction;
use \OpenAPI\OpenAPI\Models\Shared\MqttHeaders;
use \OpenAPI\OpenAPI\Models\Shared\UserProperty;
use \OpenAPI\OpenAPI\Models\Shared\S3Action;
use \OpenAPI\OpenAPI\Models\Shared\CannedAccessControlListEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceAction;
use \OpenAPI\OpenAPI\Models\Shared\SnsAction;
use \OpenAPI\OpenAPI\Models\Shared\MessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Shared\StepFunctionsAction;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamAction;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamDimension;
use \OpenAPI\OpenAPI\Models\Shared\TimestreamTimestamp;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplaceTopicRuleRequest();
    $request->requestBody = new ReplaceTopicRuleRequestBody();
    $request->requestBody->topicRulePayload = new ReplaceTopicRuleRequestBodyTopicRulePayload();
    $request->requestBody->topicRulePayload->actions = [
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->requestBody->topicRulePayload->awsIotSqlVersion = 'ut';
    $request->requestBody->topicRulePayload->description = 'numquam';
    $request->requestBody->topicRulePayload->errorAction = new Action();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm = new CloudwatchAlarmAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->alarmName = 'tenetur';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->roleArn = 'adipisci';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->stateReason = 'libero';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchAlarm->stateValue = 'in';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs = new CloudwatchLogsAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->logGroupName = 'minima';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchLogs->roleArn = 'ex';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric = new CloudwatchMetricAction();
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricName = 'minus';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricNamespace = 'ab';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricTimestamp = 'beatae';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricUnit = 'hic';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->metricValue = 'nisi';
    $request->requestBody->topicRulePayload->errorAction->cloudwatchMetric->roleArn = 'quisquam';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB = new DynamoDBAction();
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyField = 'dolor';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyType = DynamoKeyTypeEnum::STRING;
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->hashKeyValue = 'fuga';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->operation = 'minima';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->payloadField = 'architecto';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyField = 'qui';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyType = DynamoKeyTypeEnum::STRING;
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->rangeKeyValue = 'magni';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->roleArn = 'incidunt';
    $request->requestBody->topicRulePayload->errorAction->dynamoDB->tableName = 'adipisci';
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2 = new DynamoDBv2Action();
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->putItem = new PutItemInput();
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->putItem->tableName = 'praesentium';
    $request->requestBody->topicRulePayload->errorAction->dynamoDBv2->roleArn = 'dolor';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch = new ElasticsearchAction();
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->endpoint = 'exercitationem';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->id = 'bbc05a23-a45c-4efc-9fde-10a0ce2169e5';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->index = 'architecto';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->roleArn = 'accusantium';
    $request->requestBody->topicRulePayload->errorAction->elasticsearch->type = 'perferendis';
    $request->requestBody->topicRulePayload->errorAction->firehose = new FirehoseAction();
    $request->requestBody->topicRulePayload->errorAction->firehose->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->firehose->deliveryStreamName = 'veritatis';
    $request->requestBody->topicRulePayload->errorAction->firehose->roleArn = 'provident';
    $request->requestBody->topicRulePayload->errorAction->firehose->separator = 'cumque';
    $request->requestBody->topicRulePayload->errorAction->http = new HttpAction();
    $request->requestBody->topicRulePayload->errorAction->http->auth = new HttpAuthorization();
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4 = new SigV4Authorization();
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->roleArn = 'iure';
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->serviceName = 'quibusdam';
    $request->requestBody->topicRulePayload->errorAction->http->auth->sigv4->signingRegion = 'quod';
    $request->requestBody->topicRulePayload->errorAction->http->confirmationUrl = 'nemo';
    $request->requestBody->topicRulePayload->errorAction->http->headers = [
        new HttpActionHeader(),
        new HttpActionHeader(),
        new HttpActionHeader(),
        new HttpActionHeader(),
    ];
    $request->requestBody->topicRulePayload->errorAction->http->url = 'velit';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics = new IotAnalyticsAction();
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->channelArn = 'magnam';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->channelName = 'dignissimos';
    $request->requestBody->topicRulePayload->errorAction->iotAnalytics->roleArn = 'laboriosam';
    $request->requestBody->topicRulePayload->errorAction->iotEvents = new IotEventsAction();
    $request->requestBody->topicRulePayload->errorAction->iotEvents->batchMode = false;
    $request->requestBody->topicRulePayload->errorAction->iotEvents->inputName = 'sed';
    $request->requestBody->topicRulePayload->errorAction->iotEvents->messageId = 'odio';
    $request->requestBody->topicRulePayload->errorAction->iotEvents->roleArn = 'natus';
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise = new IotSiteWiseAction();
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise->putAssetPropertyValueEntries = [
        new PutAssetPropertyValueEntry(),
        new PutAssetPropertyValueEntry(),
        new PutAssetPropertyValueEntry(),
    ];
    $request->requestBody->topicRulePayload->errorAction->iotSiteWise->roleArn = 'cum';
    $request->requestBody->topicRulePayload->errorAction->kafka = new KafkaAction();
    $request->requestBody->topicRulePayload->errorAction->kafka->clientProperties = [
        'facilis' => 'quidem',
        'itaque' => 'laboriosam',
        'unde' => 'modi',
        'perspiciatis' => 'hic',
    ];
    $request->requestBody->topicRulePayload->errorAction->kafka->destinationArn = 'cum';
    $request->requestBody->topicRulePayload->errorAction->kafka->key = 'aspernatur';
    $request->requestBody->topicRulePayload->errorAction->kafka->partition = 'libero';
    $request->requestBody->topicRulePayload->errorAction->kafka->topic = 'nam';
    $request->requestBody->topicRulePayload->errorAction->kinesis = new KinesisAction();
    $request->requestBody->topicRulePayload->errorAction->kinesis->partitionKey = 'incidunt';
    $request->requestBody->topicRulePayload->errorAction->kinesis->roleArn = 'recusandae';
    $request->requestBody->topicRulePayload->errorAction->kinesis->streamName = 'quod';
    $request->requestBody->topicRulePayload->errorAction->lambda = new LambdaAction();
    $request->requestBody->topicRulePayload->errorAction->lambda->functionArn = 'id';
    $request->requestBody->topicRulePayload->errorAction->location = new LocationAction();
    $request->requestBody->topicRulePayload->errorAction->location->deviceId = 'saepe';
    $request->requestBody->topicRulePayload->errorAction->location->latitude = 'autem';
    $request->requestBody->topicRulePayload->errorAction->location->longitude = 'quo';
    $request->requestBody->topicRulePayload->errorAction->location->roleArn = 'nesciunt';
    $request->requestBody->topicRulePayload->errorAction->location->timestamp = new LocationTimestamp();
    $request->requestBody->topicRulePayload->errorAction->location->timestamp->unit = 'illum';
    $request->requestBody->topicRulePayload->errorAction->location->timestamp->value = 'nemo';
    $request->requestBody->topicRulePayload->errorAction->location->trackerName = 'illum';
    $request->requestBody->topicRulePayload->errorAction->openSearch = new OpenSearchAction();
    $request->requestBody->topicRulePayload->errorAction->openSearch->endpoint = 'facilis';
    $request->requestBody->topicRulePayload->errorAction->openSearch->id = '3adebd5d-aea4-4c50-aa8a-a94c02644cf5';
    $request->requestBody->topicRulePayload->errorAction->openSearch->index = 'officiis';
    $request->requestBody->topicRulePayload->errorAction->openSearch->roleArn = 'unde';
    $request->requestBody->topicRulePayload->errorAction->openSearch->type = 'nulla';
    $request->requestBody->topicRulePayload->errorAction->republish = new RepublishAction();
    $request->requestBody->topicRulePayload->errorAction->republish->headers = new MqttHeaders();
    $request->requestBody->topicRulePayload->errorAction->republish->headers->contentType = 'error';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->correlationData = 'mollitia';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->messageExpiry = 'magnam';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->payloadFormatIndicator = 'nostrum';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->responseTopic = 'esse';
    $request->requestBody->topicRulePayload->errorAction->republish->headers->userProperties = [
        new UserProperty(),
        new UserProperty(),
        new UserProperty(),
    ];
    $request->requestBody->topicRulePayload->errorAction->republish->qos = 684799;
    $request->requestBody->topicRulePayload->errorAction->republish->roleArn = 'facere';
    $request->requestBody->topicRulePayload->errorAction->republish->topic = 'impedit';
    $request->requestBody->topicRulePayload->errorAction->s3 = new S3Action();
    $request->requestBody->topicRulePayload->errorAction->s3->bucketName = 'quasi';
    $request->requestBody->topicRulePayload->errorAction->s3->cannedAcl = CannedAccessControlListEnum::BUCKET_OWNER_READ;
    $request->requestBody->topicRulePayload->errorAction->s3->key = 'quod';
    $request->requestBody->topicRulePayload->errorAction->s3->roleArn = 'laboriosam';
    $request->requestBody->topicRulePayload->errorAction->salesforce = new SalesforceAction();
    $request->requestBody->topicRulePayload->errorAction->salesforce->token = 'doloremque';
    $request->requestBody->topicRulePayload->errorAction->salesforce->url = 'voluptatem';
    $request->requestBody->topicRulePayload->errorAction->sns = new SnsAction();
    $request->requestBody->topicRulePayload->errorAction->sns->messageFormat = MessageFormatEnum::JSON;
    $request->requestBody->topicRulePayload->errorAction->sns->roleArn = 'necessitatibus';
    $request->requestBody->topicRulePayload->errorAction->sns->targetArn = 'maxime';
    $request->requestBody->topicRulePayload->errorAction->sqs = new SqsAction();
    $request->requestBody->topicRulePayload->errorAction->sqs->queueUrl = 'consequatur';
    $request->requestBody->topicRulePayload->errorAction->sqs->roleArn = 'eaque';
    $request->requestBody->topicRulePayload->errorAction->sqs->useBase64 = false;
    $request->requestBody->topicRulePayload->errorAction->stepFunctions = new StepFunctionsAction();
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->executionNamePrefix = 'architecto';
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->roleArn = 'similique';
    $request->requestBody->topicRulePayload->errorAction->stepFunctions->stateMachineName = 'porro';
    $request->requestBody->topicRulePayload->errorAction->timestream = new TimestreamAction();
    $request->requestBody->topicRulePayload->errorAction->timestream->databaseName = 'blanditiis';
    $request->requestBody->topicRulePayload->errorAction->timestream->dimensions = [
        new TimestreamDimension(),
    ];
    $request->requestBody->topicRulePayload->errorAction->timestream->roleArn = 'magni';
    $request->requestBody->topicRulePayload->errorAction->timestream->tableName = 'officiis';
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp = new TimestreamTimestamp();
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp->unit = 'sed';
    $request->requestBody->topicRulePayload->errorAction->timestream->timestamp->value = 'necessitatibus';
    $request->requestBody->topicRulePayload->ruleDisabled = false;
    $request->requestBody->topicRulePayload->sql = 'impedit';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'alias';
    $request->ruleName = 'asperiores';

    $response = $sdk->sdk->replaceTopicRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchIndex

<p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchIndexRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchIndexRequest();
    $request->requestBody = new SearchIndexRequestBody();
    $request->requestBody->indexName = 'rem';
    $request->requestBody->maxResults = 118615;
    $request->requestBody->nextToken = 'suscipit';
    $request->requestBody->queryString = 'earum';
    $request->requestBody->queryVersion = 'doloribus';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->searchIndex($request);

    if ($response->searchIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDefaultAuthorizer

<p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultAuthorizerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDefaultAuthorizerRequest();
    $request->requestBody = new SetDefaultAuthorizerRequestBody();
    $request->requestBody->authorizerName = 'vero';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->setDefaultAuthorizer($request);

    if ($response->setDefaultAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDefaultPolicyVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDefaultPolicyVersionRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->policyName = 'id';
    $request->policyVersionId = 'laboriosam';

    $response = $sdk->sdk->setDefaultPolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setLoggingOptions

<p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetLoggingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetLoggingOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetLoggingOptionsRequestBodyLoggingOptionsPayload;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetLoggingOptionsRequest();
    $request->requestBody = new SetLoggingOptionsRequestBody();
    $request->requestBody->loggingOptionsPayload = new SetLoggingOptionsRequestBodyLoggingOptionsPayload();
    $request->requestBody->loggingOptionsPayload->logLevel = LogLevelEnum::ERROR;
    $request->requestBody->loggingOptionsPayload->roleArn = 'quas';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->setLoggingOptions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setV2LoggingLevel

<p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingLevelRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingLevelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingLevelRequestBodyLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingLevelRequestBodyLogTarget;
use \OpenAPI\OpenAPI\Models\Shared\LogTargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetV2LoggingLevelRequest();
    $request->requestBody = new SetV2LoggingLevelRequestBody();
    $request->requestBody->logLevel = SetV2LoggingLevelRequestBodyLogLevelEnum::WARN;
    $request->requestBody->logTarget = new SetV2LoggingLevelRequestBodyLogTarget();
    $request->requestBody->logTarget->targetName = 'delectus';
    $request->requestBody->logTarget->targetType = LogTargetTypeEnum::SOURCE_IP;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->setV2LoggingLevel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setV2LoggingOptions

<p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetV2LoggingOptionsRequest();
    $request->requestBody = new SetV2LoggingOptionsRequestBody();
    $request->requestBody->defaultLogLevel = SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum::DISABLED;
    $request->requestBody->disableAllLogs = false;
    $request->requestBody->roleArn = 'laudantium';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->setV2LoggingOptions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAuditMitigationActionsTask

<p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAuditMitigationActionsTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAuditMitigationActionsTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartAuditMitigationActionsTaskRequestBodyTarget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAuditMitigationActionsTaskRequest();
    $request->requestBody = new StartAuditMitigationActionsTaskRequestBody();
    $request->requestBody->auditCheckToActionsMapping = [
        'molestiae' => [
            'asperiores',
            'a',
        ],
        'nobis' => [
            'accusantium',
            'dicta',
            'minus',
        ],
        'commodi' => [
            'porro',
            'tempore',
            'quidem',
            'modi',
        ],
    ];
    $request->requestBody->clientRequestToken = 'voluptates';
    $request->requestBody->target = new StartAuditMitigationActionsTaskRequestBodyTarget();
    $request->requestBody->target->auditCheckToReasonCodeFilter = [
        'eius' => [
            'eligendi',
        ],
    ];
    $request->requestBody->target->auditTaskId = 'asperiores';
    $request->requestBody->target->findingIds = [
        'blanditiis',
        'sint',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->taskId = 'corporis';

    $response = $sdk->sdk->startAuditMitigationActionsTask($request);

    if ($response->startAuditMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDetectMitigationActionsTask

<p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectMitigationActionsTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectMitigationActionsTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectMitigationActionsTaskRequestBodyTarget;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDetectMitigationActionsTaskRequest();
    $request->requestBody = new StartDetectMitigationActionsTaskRequestBody();
    $request->requestBody->actions = [
        'officiis',
    ];
    $request->requestBody->clientRequestToken = 'enim';
    $request->requestBody->includeOnlyActiveViolations = false;
    $request->requestBody->includeSuppressedAlerts = false;
    $request->requestBody->target = new StartDetectMitigationActionsTaskRequestBodyTarget();
    $request->requestBody->target->behaviorName = 'officia';
    $request->requestBody->target->securityProfileName = 'saepe';
    $request->requestBody->target->violationIds = [
        'repudiandae',
        'accusantium',
    ];
    $request->requestBody->violationEventOccurrenceRange = new StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange();
    $request->requestBody->violationEventOccurrenceRange->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-17T19:21:18.605Z');
    $request->requestBody->violationEventOccurrenceRange->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T17:33:17.808Z');
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quia';
    $request->taskId = 'magnam';

    $response = $sdk->sdk->startDetectMitigationActionsTask($request);

    if ($response->startDetectMitigationActionsTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startOnDemandAuditTask

<p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandAuditTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandAuditTaskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartOnDemandAuditTaskRequest();
    $request->requestBody = new StartOnDemandAuditTaskRequestBody();
    $request->requestBody->targetCheckNames = [
        'quod',
        'quos',
    ];
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->startOnDemandAuditTask($request);

    if ($response->startOnDemandAuditTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startThingRegistrationTask

<p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartThingRegistrationTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartThingRegistrationTaskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartThingRegistrationTaskRequest();
    $request->requestBody = new StartThingRegistrationTaskRequestBody();
    $request->requestBody->inputFileBucket = 'necessitatibus';
    $request->requestBody->inputFileKey = 'architecto';
    $request->requestBody->roleArn = 'molestias';
    $request->requestBody->templateBody = 'dolore';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->startThingRegistrationTask($request);

    if ($response->startThingRegistrationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopThingRegistrationTask

<p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopThingRegistrationTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopThingRegistrationTaskRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->taskId = 'quis';

    $response = $sdk->sdk->stopThingRegistrationTask($request);

    if ($response->stopThingRegistrationTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceArn = 'quibusdam';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testAuthorization

<p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestAuthorizationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AuthInfo;
use \OpenAPI\OpenAPI\Models\Shared\ActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestAuthorizationRequest();
    $request->requestBody = new TestAuthorizationRequestBody();
    $request->requestBody->authInfos = [
        new AuthInfo(),
        new AuthInfo(),
        new AuthInfo(),
        new AuthInfo(),
    ];
    $request->requestBody->cognitoIdentityPoolId = 'sed';
    $request->requestBody->policyNamesToAdd = [
        'repellat',
        'repudiandae',
        'architecto',
        'adipisci',
    ];
    $request->requestBody->policyNamesToSkip = [
        'harum',
        'dolore',
        'voluptatibus',
        'iure',
    ];
    $request->requestBody->principal = 'explicabo';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'error';
    $request->clientId = 'non';

    $response = $sdk->sdk->testAuthorization($request);

    if ($response->testAuthorizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testInvokeAuthorizer

<p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestInvokeAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestInvokeAuthorizerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TestInvokeAuthorizerRequestBodyHttpContext;
use \OpenAPI\OpenAPI\Models\Operations\TestInvokeAuthorizerRequestBodyMqttContext;
use \OpenAPI\OpenAPI\Models\Operations\TestInvokeAuthorizerRequestBodyTlsContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestInvokeAuthorizerRequest();
    $request->requestBody = new TestInvokeAuthorizerRequestBody();
    $request->requestBody->httpContext = new TestInvokeAuthorizerRequestBodyHttpContext();
    $request->requestBody->httpContext->headers = [
        'mollitia' => 'accusamus',
    ];
    $request->requestBody->httpContext->queryString = 'harum';
    $request->requestBody->mqttContext = new TestInvokeAuthorizerRequestBodyMqttContext();
    $request->requestBody->mqttContext->clientId = 'cumque';
    $request->requestBody->mqttContext->password = 'doloremque';
    $request->requestBody->mqttContext->username = 'Merritt64';
    $request->requestBody->tlsContext = new TestInvokeAuthorizerRequestBodyTlsContext();
    $request->requestBody->tlsContext->serverName = 'aliquid';
    $request->requestBody->token = 'excepturi';
    $request->requestBody->tokenSignature = 'magni';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'optio';
    $request->authorizerName = 'delectus';

    $response = $sdk->sdk->testInvokeAuthorizer($request);

    if ($response->testInvokeAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferCertificate

<p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferCertificateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCertificateRequest();
    $request->requestBody = new TransferCertificateRequestBody();
    $request->requestBody->transferMessage = 'minus';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->certificateId = 'illo';
    $request->targetAwsAccount = 'aut';

    $response = $sdk->sdk->transferCertificate($request);

    if ($response->transferCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'doloribus';
    $request->requestBody->tagKeys = [
        'at',
        'possimus',
    ];
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountAuditConfiguration

<p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountAuditConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountAuditConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AuditCheckConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AuditNotificationTarget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountAuditConfigurationRequest();
    $request->requestBody = new UpdateAccountAuditConfigurationRequestBody();
    $request->requestBody->auditCheckConfigurations = [
        'non' => new AuditCheckConfiguration(),
    ];
    $request->requestBody->auditNotificationTargetConfigurations = [
        'ad' => new AuditNotificationTarget(),
        'aliquam' => new AuditNotificationTarget(),
        'quisquam' => new AuditNotificationTarget(),
        'quas' => new AuditNotificationTarget(),
    ];
    $request->requestBody->roleArn = 'consequuntur';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->updateAccountAuditConfiguration($request);

    if ($response->updateAccountAuditConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAuditSuppression

 Updates a Device Defender audit suppression. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuditSuppressionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuditSuppressionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuditSuppressionRequestBodyResourceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IssuerCertificateIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\PolicyVersionIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAuditSuppressionRequest();
    $request->requestBody = new UpdateAuditSuppressionRequestBody();
    $request->requestBody->checkName = 'consectetur';
    $request->requestBody->description = 'cumque';
    $request->requestBody->expirationDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-11T18:26:16.165Z');
    $request->requestBody->resourceIdentifier = new UpdateAuditSuppressionRequestBodyResourceIdentifier();
    $request->requestBody->resourceIdentifier->account = 'ducimus';
    $request->requestBody->resourceIdentifier->caCertificateId = 'adipisci';
    $request->requestBody->resourceIdentifier->clientId = 'recusandae';
    $request->requestBody->resourceIdentifier->cognitoIdentityPoolId = 'tempora';
    $request->requestBody->resourceIdentifier->deviceCertificateArn = 'blanditiis';
    $request->requestBody->resourceIdentifier->deviceCertificateId = 'numquam';
    $request->requestBody->resourceIdentifier->iamRoleArn = 'sequi';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier = new IssuerCertificateIdentifier();
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSerialNumber = 'voluptatum';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerCertificateSubject = 'sit';
    $request->requestBody->resourceIdentifier->issuerCertificateIdentifier->issuerId = 'rerum';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier = new PolicyVersionIdentifier();
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyName = 'veritatis';
    $request->requestBody->resourceIdentifier->policyVersionIdentifier->policyVersionId = 'tenetur';
    $request->requestBody->resourceIdentifier->roleAliasArn = 'autem';
    $request->requestBody->suppressIndefinitely = false;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->updateAuditSuppression($request);

    if ($response->updateAuditSuppressionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAuthorizer

<p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthorizerRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAuthorizerRequest();
    $request->requestBody = new UpdateAuthorizerRequestBody();
    $request->requestBody->authorizerFunctionArn = 'animi';
    $request->requestBody->enableCachingForHttp = false;
    $request->requestBody->status = UpdateAuthorizerRequestBodyStatusEnum::ACTIVE;
    $request->requestBody->tokenKeyName = 'alias';
    $request->requestBody->tokenSigningPublicKeys = [
        'aut' => 'dolore',
        'maxime' => 'aliquam',
        'iste' => 'ullam',
    ];
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'nihil';
    $request->authorizerName = 'inventore';

    $response = $sdk->sdk->updateAuthorizer($request);

    if ($response->updateAuthorizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBillingGroup

<p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequestBodyBillingGroupProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBillingGroupRequest();
    $request->requestBody = new UpdateBillingGroupRequestBody();
    $request->requestBody->billingGroupProperties = new UpdateBillingGroupRequestBodyBillingGroupProperties();
    $request->requestBody->billingGroupProperties->billingGroupDescription = 'libero';
    $request->requestBody->expectedVersion = 371287;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'beatae';
    $request->billingGroupName = 'cumque';

    $response = $sdk->sdk->updateBillingGroup($request);

    if ($response->updateBillingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCACertificate

<p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCACertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCACertificateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCACertificateRequestBodyRegistrationConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCACertificateNewAutoRegistrationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCACertificateNewStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCACertificateRequest();
    $request->requestBody = new UpdateCACertificateRequestBody();
    $request->requestBody->registrationConfig = new UpdateCACertificateRequestBodyRegistrationConfig();
    $request->requestBody->registrationConfig->roleArn = 'delectus';
    $request->requestBody->registrationConfig->templateBody = 'labore';
    $request->requestBody->registrationConfig->templateName = 'expedita';
    $request->requestBody->removeAutoRegistration = false;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->caCertificateId = 'quo';
    $request->newAutoRegistrationStatus = UpdateCACertificateNewAutoRegistrationStatusEnum::ENABLE;
    $request->newStatus = UpdateCACertificateNewStatusEnum::INACTIVE;

    $response = $sdk->sdk->updateCACertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificate

<p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateNewStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateRequest();
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quo';
    $request->certificateId = 'esse';
    $request->newStatus = UpdateCertificateNewStatusEnum::PENDING_ACTIVATION;

    $response = $sdk->sdk->updateCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomMetric

<p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomMetricRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomMetricRequest();
    $request->requestBody = new UpdateCustomMetricRequestBody();
    $request->requestBody->displayName = 'maxime';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->metricName = 'aut';

    $response = $sdk->sdk->updateCustomMetric($request);

    if ($response->updateCustomMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDimension

<p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDimensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDimensionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDimensionRequest();
    $request->requestBody = new UpdateDimensionRequestBody();
    $request->requestBody->stringValues = [
        'iusto',
        'dolor',
        'voluptates',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'at';
    $request->name = 'Melinda Lemke';

    $response = $sdk->sdk->updateDimension($request);

    if ($response->updateDimensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainConfiguration

<p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigurationRequestBodyAuthorizerConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainConfigurationRequest();
    $request->requestBody = new UpdateDomainConfigurationRequestBody();
    $request->requestBody->authorizerConfig = new UpdateDomainConfigurationRequestBodyAuthorizerConfig();
    $request->requestBody->authorizerConfig->allowAuthorizerOverride = false;
    $request->requestBody->authorizerConfig->defaultAuthorizerName = 'atque';
    $request->requestBody->domainConfigurationStatus = UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum::DISABLED;
    $request->requestBody->removeAuthorizerConfig = false;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'enim';
    $request->domainConfigurationName = 'rem';

    $response = $sdk->sdk->updateDomainConfiguration($request);

    if ($response->updateDomainConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDynamicThingGroup

<p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDynamicThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDynamicThingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDynamicThingGroupRequestBodyThingGroupProperties;
use \OpenAPI\OpenAPI\Models\Shared\AttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDynamicThingGroupRequest();
    $request->requestBody = new UpdateDynamicThingGroupRequestBody();
    $request->requestBody->expectedVersion = 168142;
    $request->requestBody->indexName = 'quae';
    $request->requestBody->queryString = 'quas';
    $request->requestBody->queryVersion = 'placeat';
    $request->requestBody->thingGroupProperties = new UpdateDynamicThingGroupRequestBodyThingGroupProperties();
    $request->requestBody->thingGroupProperties->attributePayload = new AttributePayload();
    $request->requestBody->thingGroupProperties->attributePayload->attributes = [
        'labore' => 'sapiente',
        'saepe' => 'delectus',
    ];
    $request->requestBody->thingGroupProperties->attributePayload->merge = false;
    $request->requestBody->thingGroupProperties->thingGroupDescription = 'officia';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'officiis';
    $request->thingGroupName = 'mollitia';

    $response = $sdk->sdk->updateDynamicThingGroup($request);

    if ($response->updateDynamicThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEventConfigurations

<p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventConfigurationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEventConfigurationsRequest();
    $request->requestBody = new UpdateEventConfigurationsRequestBody();
    $request->requestBody->eventConfigurations = [
        'quis' => new Configuration(),
        'enim' => new Configuration(),
        'eum' => new Configuration(),
        'nemo' => new Configuration(),
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->updateEventConfigurations($request);

    if ($response->updateEventConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFleetMetric

<p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetricRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetricRequestBodyAggregationType;
use \OpenAPI\OpenAPI\Models\Shared\AggregationTypeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetricRequestBodyUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetMetricRequest();
    $request->requestBody = new UpdateFleetMetricRequestBody();
    $request->requestBody->aggregationField = 'voluptates';
    $request->requestBody->aggregationType = new UpdateFleetMetricRequestBodyAggregationType();
    $request->requestBody->aggregationType->name = AggregationTypeNameEnum::PERCENTILES;
    $request->requestBody->aggregationType->values = [
        'fugit',
    ];
    $request->requestBody->description = 'sit';
    $request->requestBody->expectedVersion = 396234;
    $request->requestBody->indexName = 'necessitatibus';
    $request->requestBody->period = 148975;
    $request->requestBody->queryString = 'deleniti';
    $request->requestBody->queryVersion = 'sunt';
    $request->requestBody->unit = UpdateFleetMetricRequestBodyUnitEnum::MEGABYTES;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'impedit';
    $request->metricName = 'eius';

    $response = $sdk->sdk->updateFleetMetric($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIndexingConfiguration

<p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexingConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThingGroupIndexingModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceDefenderIndexingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IndexingFilter;
use \OpenAPI\OpenAPI\Models\Shared\NamedShadowIndexingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThingConnectivityIndexingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThingIndexingModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIndexingConfigurationRequest();
    $request->requestBody = new UpdateIndexingConfigurationRequestBody();
    $request->requestBody->thingGroupIndexingConfiguration = new UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration();
    $request->requestBody->thingGroupIndexingConfiguration->customFields = [
        new Field(),
        new Field(),
        new Field(),
    ];
    $request->requestBody->thingGroupIndexingConfiguration->managedFields = [
        new Field(),
    ];
    $request->requestBody->thingGroupIndexingConfiguration->thingGroupIndexingMode = ThingGroupIndexingModeEnum::ON;
    $request->requestBody->thingIndexingConfiguration = new UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration();
    $request->requestBody->thingIndexingConfiguration->customFields = [
        new Field(),
    ];
    $request->requestBody->thingIndexingConfiguration->deviceDefenderIndexingMode = DeviceDefenderIndexingModeEnum::VIOLATIONS;
    $request->requestBody->thingIndexingConfiguration->filter = new IndexingFilter();
    $request->requestBody->thingIndexingConfiguration->filter->namedShadowNames = [
        'inventore',
    ];
    $request->requestBody->thingIndexingConfiguration->managedFields = [
        new Field(),
    ];
    $request->requestBody->thingIndexingConfiguration->namedShadowIndexingMode = NamedShadowIndexingModeEnum::OFF;
    $request->requestBody->thingIndexingConfiguration->thingConnectivityIndexingMode = ThingConnectivityIndexingModeEnum::STATUS;
    $request->requestBody->thingIndexingConfiguration->thingIndexingMode = ThingIndexingModeEnum::REGISTRY_AND_SHADOW;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->updateIndexingConfiguration($request);

    if ($response->updateIndexingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJob

<p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBodyAbortConfig;
use \OpenAPI\OpenAPI\Models\Shared\AbortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\AbortActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobExecutionFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBodyJobExecutionsRetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\RetryCriteria;
use \OpenAPI\OpenAPI\Models\Shared\RetryableFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBodyJobExecutionsRolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialRolloutRate;
use \OpenAPI\OpenAPI\Models\Shared\RateIncreaseCriteria;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBodyPresignedUrlConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequestBodyTimeoutConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobRequest();
    $request->requestBody = new UpdateJobRequestBody();
    $request->requestBody->abortConfig = new UpdateJobRequestBodyAbortConfig();
    $request->requestBody->abortConfig->criteriaList = [
        new AbortCriteria(),
    ];
    $request->requestBody->description = 'magnam';
    $request->requestBody->jobExecutionsRetryConfig = new UpdateJobRequestBodyJobExecutionsRetryConfig();
    $request->requestBody->jobExecutionsRetryConfig->criteriaList = [
        new RetryCriteria(),
        new RetryCriteria(),
        new RetryCriteria(),
        new RetryCriteria(),
    ];
    $request->requestBody->jobExecutionsRolloutConfig = new UpdateJobRequestBodyJobExecutionsRolloutConfig();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate = new ExponentialRolloutRate();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->baseRatePerMinute = 255064;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->incrementFactor = 7602.79;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria = new RateIncreaseCriteria();
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfNotifiedThings = 750537;
    $request->requestBody->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfSucceededThings = 404422;
    $request->requestBody->jobExecutionsRolloutConfig->maximumPerMinute = 998023;
    $request->requestBody->presignedUrlConfig = new UpdateJobRequestBodyPresignedUrlConfig();
    $request->requestBody->presignedUrlConfig->expiresInSec = 65118;
    $request->requestBody->presignedUrlConfig->roleArn = 'deleniti';
    $request->requestBody->timeoutConfig = new UpdateJobRequestBodyTimeoutConfig();
    $request->requestBody->timeoutConfig->inProgressTimeoutInMinutes = 711615;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'ea';
    $request->jobId = 'animi';
    $request->namespaceId = 'dolore';

    $response = $sdk->sdk->updateJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMitigationAction

<p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMitigationActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMitigationActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMitigationActionRequestBodyActionParams;
use \OpenAPI\OpenAPI\Models\Shared\AddThingsToThingGroupParams;
use \OpenAPI\OpenAPI\Models\Shared\EnableIoTLoggingParams;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishFindingToSnsParams;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceDefaultPolicyVersionParams;
use \OpenAPI\OpenAPI\Models\Shared\PolicyTemplateNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCACertificateParams;
use \OpenAPI\OpenAPI\Models\Shared\CACertificateUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceCertificateParams;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCertificateUpdateActionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMitigationActionRequest();
    $request->requestBody = new UpdateMitigationActionRequestBody();
    $request->requestBody->actionParams = new UpdateMitigationActionRequestBodyActionParams();
    $request->requestBody->actionParams->addThingsToThingGroupParams = new AddThingsToThingGroupParams();
    $request->requestBody->actionParams->addThingsToThingGroupParams->overrideDynamicGroups = false;
    $request->requestBody->actionParams->addThingsToThingGroupParams->thingGroupNames = [
        'dignissimos',
        'esse',
        'animi',
        'laudantium',
    ];
    $request->requestBody->actionParams->enableIoTLoggingParams = new EnableIoTLoggingParams();
    $request->requestBody->actionParams->enableIoTLoggingParams->logLevel = LogLevelEnum::ERROR;
    $request->requestBody->actionParams->enableIoTLoggingParams->roleArnForLogging = 'eveniet';
    $request->requestBody->actionParams->publishFindingToSnsParams = new PublishFindingToSnsParams();
    $request->requestBody->actionParams->publishFindingToSnsParams->topicArn = 'earum';
    $request->requestBody->actionParams->replaceDefaultPolicyVersionParams = new ReplaceDefaultPolicyVersionParams();
    $request->requestBody->actionParams->replaceDefaultPolicyVersionParams->templateName = PolicyTemplateNameEnum::BLANK_POLICY;
    $request->requestBody->actionParams->updateCACertificateParams = new UpdateCACertificateParams();
    $request->requestBody->actionParams->updateCACertificateParams->action = CACertificateUpdateActionEnum::DEACTIVATE;
    $request->requestBody->actionParams->updateDeviceCertificateParams = new UpdateDeviceCertificateParams();
    $request->requestBody->actionParams->updateDeviceCertificateParams->action = DeviceCertificateUpdateActionEnum::DEACTIVATE;
    $request->requestBody->roleArn = 'velit';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->actionName = 'impedit';

    $response = $sdk->sdk->updateMitigationAction($request);

    if ($response->updateMitigationActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProvisioningTemplate

<p>Updates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisioningTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisioningTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProvisioningTemplateRequestBodyPreProvisioningHook;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProvisioningTemplateRequest();
    $request->requestBody = new UpdateProvisioningTemplateRequestBody();
    $request->requestBody->defaultVersionId = 397014;
    $request->requestBody->description = 'quis';
    $request->requestBody->enabled = false;
    $request->requestBody->preProvisioningHook = new UpdateProvisioningTemplateRequestBodyPreProvisioningHook();
    $request->requestBody->preProvisioningHook->payloadVersion = 'facilis';
    $request->requestBody->preProvisioningHook->targetArn = 'ipsum';
    $request->requestBody->provisioningRoleArn = 'ut';
    $request->requestBody->removePreProvisioningHook = false;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'libero';
    $request->templateName = 'iste';

    $response = $sdk->sdk->updateProvisioningTemplate($request);

    if ($response->updateProvisioningTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoleAlias

<p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleAliasRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoleAliasRequest();
    $request->requestBody = new UpdateRoleAliasRequestBody();
    $request->requestBody->credentialDurationSeconds = 74921;
    $request->requestBody->roleArn = 'minus';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->roleAlias = 'voluptates';

    $response = $sdk->sdk->updateRoleAlias($request);

    if ($response->updateRoleAliasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScheduledAudit

<p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduledAuditRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduledAuditRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduledAuditRequestBodyDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduledAuditRequestBodyFrequencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScheduledAuditRequest();
    $request->requestBody = new UpdateScheduledAuditRequestBody();
    $request->requestBody->dayOfMonth = 'laudantium';
    $request->requestBody->dayOfWeek = UpdateScheduledAuditRequestBodyDayOfWeekEnum::MON;
    $request->requestBody->frequency = UpdateScheduledAuditRequestBodyFrequencyEnum::DAILY;
    $request->requestBody->targetCheckNames = [
        'illum',
        'rem',
        'tenetur',
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'maiores';
    $request->scheduledAuditName = 'sequi';

    $response = $sdk->sdk->updateScheduledAudit($request);

    if ($response->updateScheduledAuditResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecurityProfile

<p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricToRetain;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlertTarget;
use \OpenAPI\OpenAPI\Models\Shared\Behavior;
use \OpenAPI\OpenAPI\Models\Shared\BehaviorCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachineLearningDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidenceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecurityProfileRequest();
    $request->requestBody = new UpdateSecurityProfileRequestBody();
    $request->requestBody->additionalMetricsToRetain = [
        'consequatur',
        'esse',
        'debitis',
        'facere',
    ];
    $request->requestBody->additionalMetricsToRetainV2 = [
        new MetricToRetain(),
        new MetricToRetain(),
        new MetricToRetain(),
        new MetricToRetain(),
    ];
    $request->requestBody->alertTargets = [
        'aliquam' => new AlertTarget(),
        'dolorum' => new AlertTarget(),
        'deserunt' => new AlertTarget(),
        'ad' => new AlertTarget(),
    ];
    $request->requestBody->behaviors = [
        new Behavior(),
        new Behavior(),
        new Behavior(),
        new Behavior(),
    ];
    $request->requestBody->deleteAdditionalMetricsToRetain = false;
    $request->requestBody->deleteAlertTargets = false;
    $request->requestBody->deleteBehaviors = false;
    $request->requestBody->securityProfileDescription = 'sequi';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->expectedVersion = 642804;
    $request->securityProfileName = 'cupiditate';

    $response = $sdk->sdk->updateSecurityProfile($request);

    if ($response->updateSecurityProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStream

<p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StreamFile;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStreamRequest();
    $request->requestBody = new UpdateStreamRequestBody();
    $request->requestBody->description = 'reprehenderit';
    $request->requestBody->files = [
        new StreamFile(),
    ];
    $request->requestBody->roleArn = 'necessitatibus';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'sed';
    $request->streamId = 'odit';

    $response = $sdk->sdk->updateStream($request);

    if ($response->updateStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThing

<p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRequestBodyAttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThingRequest();
    $request->requestBody = new UpdateThingRequestBody();
    $request->requestBody->attributePayload = new UpdateThingRequestBodyAttributePayload();
    $request->requestBody->attributePayload->attributes = [
        'expedita' => 'eos',
        'repellendus' => 'nesciunt',
    ];
    $request->requestBody->attributePayload->merge = false;
    $request->requestBody->expectedVersion = 57909;
    $request->requestBody->removeThingType = false;
    $request->requestBody->thingTypeName = 'sint';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'est';
    $request->thingName = 'aliquam';

    $response = $sdk->sdk->updateThing($request);

    if ($response->updateThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThingGroup

<p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingGroupRequestBodyThingGroupProperties;
use \OpenAPI\OpenAPI\Models\Shared\AttributePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThingGroupRequest();
    $request->requestBody = new UpdateThingGroupRequestBody();
    $request->requestBody->expectedVersion = 964201;
    $request->requestBody->thingGroupProperties = new UpdateThingGroupRequestBodyThingGroupProperties();
    $request->requestBody->thingGroupProperties->attributePayload = new AttributePayload();
    $request->requestBody->thingGroupProperties->attributePayload->attributes = [
        'voluptatum' => 'iusto',
        'quod' => 'voluptatibus',
        'voluptas' => 'non',
    ];
    $request->requestBody->thingGroupProperties->attributePayload->merge = false;
    $request->requestBody->thingGroupProperties->thingGroupDescription = 'ullam';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'non';
    $request->thingGroupName = 'necessitatibus';

    $response = $sdk->sdk->updateThingGroup($request);

    if ($response->updateThingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThingGroupsForThing

<p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingGroupsForThingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingGroupsForThingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThingGroupsForThingRequest();
    $request->requestBody = new UpdateThingGroupsForThingRequestBody();
    $request->requestBody->overrideDynamicGroups = false;
    $request->requestBody->thingGroupsToAdd = [
        'maiores',
        'laboriosam',
        'voluptatem',
    ];
    $request->requestBody->thingGroupsToRemove = [
        'sequi',
        'sunt',
        'vitae',
        'voluptatibus',
    ];
    $request->requestBody->thingName = 'doloremque';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->updateThingGroupsForThing($request);

    if ($response->updateThingGroupsForThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTopicRuleDestination

<p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTopicRuleDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTopicRuleDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTopicRuleDestinationRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTopicRuleDestinationRequest();
    $request->requestBody = new UpdateTopicRuleDestinationRequestBody();
    $request->requestBody->arn = 'dolor';
    $request->requestBody->status = UpdateTopicRuleDestinationRequestBodyStatusEnum::IN_PROGRESS;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->updateTopicRuleDestination($request);

    if ($response->updateTopicRuleDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateSecurityProfileBehaviors

<p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateSecurityProfileBehaviorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateSecurityProfileBehaviorsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Behavior;
use \OpenAPI\OpenAPI\Models\Shared\BehaviorCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachineLearningDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfidenceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;
use \OpenAPI\OpenAPI\Models\Shared\MetricDimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateSecurityProfileBehaviorsRequest();
    $request->requestBody = new ValidateSecurityProfileBehaviorsRequestBody();
    $request->requestBody->behaviors = [
        new Behavior(),
        new Behavior(),
        new Behavior(),
        new Behavior(),
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->validateSecurityProfileBehaviors($request);

    if ($response->validateSecurityProfileBehaviorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
