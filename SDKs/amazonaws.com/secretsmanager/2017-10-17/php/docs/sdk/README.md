# SDK

## Overview

<fullname>Amazon Web Services Secrets Manager</fullname> <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p> <p>This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p> <p>For a list of endpoints, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/asm_access.html#endpoints">Amazon Web Services Secrets Manager endpoints</a>.</p> <p> <b>Support and Feedback for Amazon Web Services Secrets Manager</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Logging API Requests</b> </p> <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information that's collected by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services CloudTrail, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>. To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/secretsmanager/>
### Available Operations

* [cancelRotateSecret](#cancelrotatesecret) - <p>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.</p> <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. You might need to remove the staging label <code>AWSPENDING</code> from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>. To determine which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use <a>UpdateSecretVersionStage</a> to change staging labels. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p> <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CancelRotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [createSecret](#createsecret) - <p>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>. </p> <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p> <p>To create a secret, you can provide the secret value to be encrypted in either the <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to it.</p> <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of a database secret</a>.</p> <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CreateSecret</code>. If you include tags in the secret, you also need <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p> <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>
* [deleteResourcePolicy](#deleteresourcepolicy) - <p>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use <a>PutResourcePolicy</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [deleteSecret](#deletesecret) - <p>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret. When you delete a replica, it is deleted immediately.</p> <p>You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background.</p> <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html"> Monitor secrets scheduled for deletion</a>.</p> <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [describeSecret](#describesecret) - <p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DescribeSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [getRandomPassword](#getrandompassword) - <p>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetRandomPassword</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [getResourcePolicy](#getresourcepolicy) - <p>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions policies attached to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [getSecretValue](#getsecretvalue) - <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p>We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for your applications</a>.</p> <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetSecretValue</code>. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [listSecretVersionIds](#listsecretversionids) - <p>Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version"> Secrets Manager concepts: Versions</a>.</p> <p>To list the secrets in the account, use <a>ListSecrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecretVersionIds</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [listSecrets](#listsecrets) - <p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p> <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes. To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p> <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p> <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>, call <a>GetSecretValue</a>.</p> <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecrets</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [putResourcePolicy](#putresourcepolicy) - <p>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a> </p> <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a permissions policy to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [putSecretValue](#putsecretvalue) - <p>Creates a new version with a new encrypted secret value and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p> <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>. If you don't include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to it. If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutSecretValue</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [removeRegionsFromReplication](#removeregionsfromreplication) - <p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RemoveRegionsFromReplication</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [replicateSecretToRegions](#replicatesecrettoregions) - <p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ReplicateSecretToRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [restoreSecret](#restoresecret) - <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. You can access a secret again after it has been restored.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RestoreSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [rotateSecret](#rotatesecret) - <p>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p> <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any version. If the <code>AWSPENDING</code> staging label is present but not attached to the same version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html"> Permissions for rotation</a>.</p>
* [stopReplicationToReplica](#stopreplicationtoreplica) - <p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p> <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:StopReplicationToReplica</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [tagResource](#tagresource) - <p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [untagResource](#untagresource) - <p>Removes specific tags from a secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UntagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [updateSecret](#updatesecret) - <p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p> <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p> <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new version. Then it attaches the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's <code>VersionId</code>, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See <a>UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions on the key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html"> Secret encryption and decryption</a>.</p>
* [updateSecretVersionStage](#updatesecretversionstage) - <p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels for the version. </p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecretVersionStage</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
* [validateResourcePolicy](#validateresourcepolicy) - <p>Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets.</p> <p>The API performs three checks when validating the policy:</p> <ul> <li> <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.</p> </li> <li> <p>Checks for correct syntax in a policy.</p> </li> <li> <p>Verifies the policy does not lock out a caller.</p> </li> </ul> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ValidateResourcePolicy</code> and <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

## cancelRotateSecret

<p>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.</p> <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. You might need to remove the staging label <code>AWSPENDING</code> from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>. To determine which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use <a>UpdateSecretVersionStage</a> to change staging labels. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p> <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CancelRotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelRotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelRotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelRotateSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelRotateSecretRequest();
    $request->cancelRotateSecretRequest = new CancelRotateSecretRequest();
    $request->cancelRotateSecretRequest->secretId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CancelRotateSecretXAmzTargetEnum::SECRETSMANAGER_CANCEL_ROTATE_SECRET;

    $response = $sdk->sdk->cancelRotateSecret($request);

    if ($response->cancelRotateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecret

<p>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>. </p> <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p> <p>To create a secret, you can provide the secret value to be encrypted in either the <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to it.</p> <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of a database secret</a>.</p> <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CreateSecret</code>. If you include tags in the secret, you also need <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p> <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaRegionType;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecretRequest();
    $request->createSecretRequest = new CreateSecretRequest();
    $request->createSecretRequest->addReplicaRegions = [
        new ReplicaRegionType(),
        new ReplicaRegionType(),
        new ReplicaRegionType(),
        new ReplicaRegionType(),
    ];
    $request->createSecretRequest->clientRequestToken = 'tempora';
    $request->createSecretRequest->description = 'suscipit';
    $request->createSecretRequest->forceOverwriteReplicaSecret = false;
    $request->createSecretRequest->kmsKeyId = 'molestiae';
    $request->createSecretRequest->name = 'Irving Lehner';
    $request->createSecretRequest->secretBinary = 'nisi';
    $request->createSecretRequest->secretString = 'recusandae';
    $request->createSecretRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = CreateSecretXAmzTargetEnum::SECRETSMANAGER_CREATE_SECRET;

    $response = $sdk->sdk->createSecret($request);

    if ($response->createSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

<p>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use <a>PutResourcePolicy</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->secretId = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::SECRETSMANAGER_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecret

<p>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret. When you delete a replica, it is deleted immediately.</p> <p>You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background.</p> <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html"> Monitor secrets scheduled for deletion</a>.</p> <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecretRequest();
    $request->deleteSecretRequest = new DeleteSecretRequest();
    $request->deleteSecretRequest->forceDeleteWithoutRecovery = false;
    $request->deleteSecretRequest->recoveryWindowInDays = 800911;
    $request->deleteSecretRequest->secretId = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteSecretXAmzTargetEnum::SECRETSMANAGER_DELETE_SECRET;

    $response = $sdk->sdk->deleteSecret($request);

    if ($response->deleteSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSecret

<p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DescribeSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSecretRequest();
    $request->describeSecretRequest = new DescribeSecretRequest();
    $request->describeSecretRequest->secretId = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeSecretXAmzTargetEnum::SECRETSMANAGER_DESCRIBE_SECRET;

    $response = $sdk->sdk->describeSecret($request);

    if ($response->describeSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRandomPassword

<p>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetRandomPassword</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRandomPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRandomPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRandomPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRandomPasswordRequest();
    $request->getRandomPasswordRequest = new GetRandomPasswordRequest();
    $request->getRandomPasswordRequest->excludeCharacters = 'modi';
    $request->getRandomPasswordRequest->excludeLowercase = false;
    $request->getRandomPasswordRequest->excludeNumbers = false;
    $request->getRandomPasswordRequest->excludePunctuation = false;
    $request->getRandomPasswordRequest->excludeUppercase = false;
    $request->getRandomPasswordRequest->includeSpace = false;
    $request->getRandomPasswordRequest->passwordLength = 186332;
    $request->getRandomPasswordRequest->requireEachIncludedType = false;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetRandomPasswordXAmzTargetEnum::SECRETSMANAGER_GET_RANDOM_PASSWORD;

    $response = $sdk->sdk->getRandomPassword($request);

    if ($response->getRandomPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

<p>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions policies attached to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest->secretId = 'ad';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = GetResourcePolicyXAmzTargetEnum::SECRETSMANAGER_GET_RESOURCE_POLICY;

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecretValue

<p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p>We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for your applications</a>.</p> <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetSecretValue</code>. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSecretValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecretValueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecretValueRequest();
    $request->getSecretValueRequest = new GetSecretValueRequest();
    $request->getSecretValueRequest->secretId = 'saepe';
    $request->getSecretValueRequest->versionId = 'fuga';
    $request->getSecretValueRequest->versionStage = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = GetSecretValueXAmzTargetEnum::SECRETSMANAGER_GET_SECRET_VALUE;

    $response = $sdk->sdk->getSecretValue($request);

    if ($response->getSecretValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecretVersionIds

<p>Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version"> Secrets Manager concepts: Versions</a>.</p> <p>To list the secrets in the account, use <a>ListSecrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecretVersionIds</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecretVersionIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecretVersionIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSecretVersionIdsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecretVersionIdsRequest();
    $request->listSecretVersionIdsRequest = new ListSecretVersionIdsRequest();
    $request->listSecretVersionIdsRequest->includeDeprecated = false;
    $request->listSecretVersionIdsRequest->maxResults = 969810;
    $request->listSecretVersionIdsRequest->nextToken = 'est';
    $request->listSecretVersionIdsRequest->secretId = 'mollitia';
    $request->maxResults = 'laborum';
    $request->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = ListSecretVersionIdsXAmzTargetEnum::SECRETSMANAGER_LIST_SECRET_VERSION_IDS;

    $response = $sdk->sdk->listSecretVersionIds($request);

    if ($response->listSecretVersionIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecrets

<p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p> <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes. To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p> <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p> <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>, call <a>GetSecretValue</a>.</p> <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecrets</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecretsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecretsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterNameStringTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSecretsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecretsRequest();
    $request->listSecretsRequest = new ListSecretsRequest();
    $request->listSecretsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listSecretsRequest->includePlannedDeletion = false;
    $request->listSecretsRequest->maxResults = 570197;
    $request->listSecretsRequest->nextToken = 'accusantium';
    $request->listSecretsRequest->sortOrder = SortOrderTypeEnum::ASC;
    $request->maxResults = 'culpa';
    $request->nextToken = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = ListSecretsXAmzTargetEnum::SECRETSMANAGER_LIST_SECRETS;

    $response = $sdk->sdk->listSecrets($request);

    if ($response->listSecretsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

<p>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a> </p> <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a permissions policy to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->blockPublicPolicy = false;
    $request->putResourcePolicyRequest->resourcePolicy = 'mollitia';
    $request->putResourcePolicyRequest->secretId = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::SECRETSMANAGER_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSecretValue

<p>Creates a new version with a new encrypted secret value and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p> <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>. If you don't include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to it. If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutSecretValue</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSecretValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutSecretValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSecretValueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSecretValueRequest();
    $request->putSecretValueRequest = new PutSecretValueRequest();
    $request->putSecretValueRequest->clientRequestToken = 'quis';
    $request->putSecretValueRequest->secretBinary = 'vitae';
    $request->putSecretValueRequest->secretId = 'laborum';
    $request->putSecretValueRequest->secretString = 'animi';
    $request->putSecretValueRequest->versionStages = [
        'odit',
        'quo',
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = PutSecretValueXAmzTargetEnum::SECRETSMANAGER_PUT_SECRET_VALUE;

    $response = $sdk->sdk->putSecretValue($request);

    if ($response->putSecretValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeRegionsFromReplication

<p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RemoveRegionsFromReplication</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRegionsFromReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveRegionsFromReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRegionsFromReplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRegionsFromReplicationRequest();
    $request->removeRegionsFromReplicationRequest = new RemoveRegionsFromReplicationRequest();
    $request->removeRegionsFromReplicationRequest->removeReplicaRegions = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->removeRegionsFromReplicationRequest->secretId = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = RemoveRegionsFromReplicationXAmzTargetEnum::SECRETSMANAGER_REMOVE_REGIONS_FROM_REPLICATION;

    $response = $sdk->sdk->removeRegionsFromReplication($request);

    if ($response->removeRegionsFromReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replicateSecretToRegions

<p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ReplicateSecretToRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplicateSecretToRegionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicateSecretToRegionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaRegionType;
use \OpenAPI\OpenAPI\Models\Operations\ReplicateSecretToRegionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplicateSecretToRegionsRequest();
    $request->replicateSecretToRegionsRequest = new ReplicateSecretToRegionsRequest();
    $request->replicateSecretToRegionsRequest->addReplicaRegions = [
        new ReplicaRegionType(),
        new ReplicaRegionType(),
    ];
    $request->replicateSecretToRegionsRequest->forceOverwriteReplicaSecret = false;
    $request->replicateSecretToRegionsRequest->secretId = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ReplicateSecretToRegionsXAmzTargetEnum::SECRETSMANAGER_REPLICATE_SECRET_TO_REGIONS;

    $response = $sdk->sdk->replicateSecretToRegions($request);

    if ($response->replicateSecretToRegionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreSecret

<p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. You can access a secret again after it has been restored.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RestoreSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreSecretRequest();
    $request->restoreSecretRequest = new RestoreSecretRequest();
    $request->restoreSecretRequest->secretId = 'dolore';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = RestoreSecretXAmzTargetEnum::SECRETSMANAGER_RESTORE_SECRET;

    $response = $sdk->sdk->restoreSecret($request);

    if ($response->restoreSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotateSecret

<p>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p> <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any version. If the <code>AWSPENDING</code> staging label is present but not attached to the same version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html"> Permissions for rotation</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\RotateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\RotationRulesType;
use \OpenAPI\OpenAPI\Models\Operations\RotateSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotateSecretRequest();
    $request->rotateSecretRequest = new RotateSecretRequest();
    $request->rotateSecretRequest->clientRequestToken = 'quae';
    $request->rotateSecretRequest->rotateImmediately = false;
    $request->rotateSecretRequest->rotationLambdaARN = 'ipsum';
    $request->rotateSecretRequest->rotationRules = new RotationRulesType();
    $request->rotateSecretRequest->rotationRules->automaticallyAfterDays = 692472;
    $request->rotateSecretRequest->rotationRules->duration = 'molestias';
    $request->rotateSecretRequest->rotationRules->scheduleExpression = 'excepturi';
    $request->rotateSecretRequest->secretId = 'pariatur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = RotateSecretXAmzTargetEnum::SECRETSMANAGER_ROTATE_SECRET;

    $response = $sdk->sdk->rotateSecret($request);

    if ($response->rotateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopReplicationToReplica

<p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p> <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:StopReplicationToReplica</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationToReplicaRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopReplicationToReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopReplicationToReplicaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopReplicationToReplicaRequest();
    $request->stopReplicationToReplicaRequest = new StopReplicationToReplicaRequest();
    $request->stopReplicationToReplicaRequest->secretId = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = StopReplicationToReplicaXAmzTargetEnum::SECRETSMANAGER_STOP_REPLICATION_TO_REPLICA;

    $response = $sdk->sdk->stopReplicationToReplica($request);

    if ($response->stopReplicationToReplicaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->secretId = 'deserunt';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::SECRETSMANAGER_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes specific tags from a secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UntagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->secretId = 'perferendis';
    $request->untagResourceRequest->tagKeys = [
        'assumenda',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::SECRETSMANAGER_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecret

<p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p> <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p> <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new version. Then it attaches the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's <code>VersionId</code>, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See <a>UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions on the key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html"> Secret encryption and decryption</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSecretRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecretRequest();
    $request->updateSecretRequest = new UpdateSecretRequest();
    $request->updateSecretRequest->clientRequestToken = 'tempore';
    $request->updateSecretRequest->description = 'labore';
    $request->updateSecretRequest->kmsKeyId = 'delectus';
    $request->updateSecretRequest->secretBinary = 'eum';
    $request->updateSecretRequest->secretId = 'non';
    $request->updateSecretRequest->secretString = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = UpdateSecretXAmzTargetEnum::SECRETSMANAGER_UPDATE_SECRET;

    $response = $sdk->sdk->updateSecret($request);

    if ($response->updateSecretResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecretVersionStage

<p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels for the version. </p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecretVersionStage</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretVersionStageRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSecretVersionStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecretVersionStageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecretVersionStageRequest();
    $request->updateSecretVersionStageRequest = new UpdateSecretVersionStageRequest();
    $request->updateSecretVersionStageRequest->moveToVersionId = 'debitis';
    $request->updateSecretVersionStageRequest->removeFromVersionId = 'a';
    $request->updateSecretVersionStageRequest->secretId = 'dolorum';
    $request->updateSecretVersionStageRequest->versionStage = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = UpdateSecretVersionStageXAmzTargetEnum::SECRETSMANAGER_UPDATE_SECRET_VERSION_STAGE;

    $response = $sdk->sdk->updateSecretVersionStage($request);

    if ($response->updateSecretVersionStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateResourcePolicy

<p>Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets.</p> <p>The API performs three checks when validating the policy:</p> <ul> <li> <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.</p> </li> <li> <p>Checks for correct syntax in a policy.</p> </li> <li> <p>Verifies the policy does not lock out a caller.</p> </li> </ul> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ValidateResourcePolicy</code> and <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValidateResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateResourcePolicyRequest();
    $request->validateResourcePolicyRequest = new ValidateResourcePolicyRequest();
    $request->validateResourcePolicyRequest->resourcePolicy = 'facere';
    $request->validateResourcePolicyRequest->secretId = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ValidateResourcePolicyXAmzTargetEnum::SECRETSMANAGER_VALIDATE_RESOURCE_POLICY;

    $response = $sdk->sdk->validateResourcePolicy($request);

    if ($response->validateResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
