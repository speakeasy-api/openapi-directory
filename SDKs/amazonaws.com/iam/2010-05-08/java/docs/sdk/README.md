# SDK

## Overview

<fullname>Identity and Access Management</fullname> <p>Identity and Access Management (IAM) is a web service for securely controlling access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which Amazon Web Services resources users and applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iam/>
### Available Operations

* [getAddClientIDToOpenIDConnectProvider](#getaddclientidtoopenidconnectprovider) - <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
* [getAddRoleToInstanceProfile](#getaddroletoinstanceprofile) - <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [getAddUserToGroup](#getaddusertogroup) - Adds the specified user to the specified group.
* [getAttachGroupPolicy](#getattachgrouppolicy) - <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getAttachRolePolicy](#getattachrolepolicy) - <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>
* [getAttachUserPolicy](#getattachuserpolicy) - <p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getChangePassword](#getchangepassword) - <p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [getCreateAccessKey](#getcreateaccesskey) - <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
* [getCreateAccountAlias](#getcreateaccountalias) - Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [getCreateGroup](#getcreategroup) - <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [getCreateLoginProfile](#getcreateloginprofile) - <p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [getCreatePolicyVersion](#getcreatepolicyversion) - <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [getCreateServiceLinkedRole](#getcreateservicelinkedrole) - <p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>
* [getCreateServiceSpecificCredential](#getcreateservicespecificcredential) - <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>
* [getDeactivateMFADevice](#getdeactivatemfadevice) - <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteAccessKey](#getdeleteaccesskey) - <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [getDeleteAccountAlias](#getdeleteaccountalias) -  Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [getDeleteAccountPasswordPolicy](#getdeleteaccountpasswordpolicy) - Deletes the password policy for the Amazon Web Services account. There are no parameters.
* [getDeleteGroup](#getdeletegroup) - Deletes the specified IAM group. The group must not contain any users or have any attached policies.
* [getDeleteGroupPolicy](#getdeletegrouppolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteInstanceProfile](#getdeleteinstanceprofile) - <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [getDeleteLoginProfile](#getdeleteloginprofile) - <p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>
* [getDeleteOpenIDConnectProvider](#getdeleteopenidconnectprovider) - <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
* [getDeletePolicy](#getdeletepolicy) - <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDeletePolicyVersion](#getdeletepolicyversion) - <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteRole](#getdeleterole) - <p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
* [getDeleteRolePermissionsBoundary](#getdeleterolepermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>
* [getDeleteRolePolicy](#getdeleterolepolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteSAMLProvider](#getdeletesamlprovider) - <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [getDeleteSSHPublicKey](#getdeletesshpublickey) - <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [getDeleteServerCertificate](#getdeleteservercertificate) - <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
* [getDeleteServiceLinkedRole](#getdeleteservicelinkedrole) - <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteServiceSpecificCredential](#getdeleteservicespecificcredential) - Deletes the specified service-specific credential.
* [getDeleteSigningCertificate](#getdeletesigningcertificate) - <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>
* [getDeleteUser](#getdeleteuser) - <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
* [getDeleteUserPermissionsBoundary](#getdeleteuserpermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
* [getDeleteUserPolicy](#getdeleteuserpolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDeleteVirtualMFADevice](#getdeletevirtualmfadevice) - <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
* [getDetachGroupPolicy](#getdetachgrouppolicy) - <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDetachRolePolicy](#getdetachrolepolicy) - <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getDetachUserPolicy](#getdetachuserpolicy) - <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getEnableMFADevice](#getenablemfadevice) - Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
* [getGenerateCredentialReport](#getgeneratecredentialreport) -  Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [getGenerateOrganizationsAccessReport](#getgenerateorganizationsaccessreport) - <p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>
* [getGenerateServiceLastAccessedDetails](#getgenerateservicelastaccesseddetails) - <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [getGETAccessKeyLastUsed](#getgetaccesskeylastused) - Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.
* [getGETAccountAuthorizationDetails](#getgetaccountauthorizationdetails) - <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getGETAccountPasswordPolicy](#getgetaccountpasswordpolicy) - Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.
* [getGETAccountSummary](#getgetaccountsummary) - <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [getGETContextKeysForCustomPolicy](#getgetcontextkeysforcustompolicy) - <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
* [getGETContextKeysForPrincipalPolicy](#getgetcontextkeysforprincipalpolicy) - <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
* [getGETCredentialReport](#getgetcredentialreport) -  Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [getGETGroup](#getgetgroup) -  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
* [getGETGroupPolicy](#getgetgrouppolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getGETInstanceProfile](#getgetinstanceprofile) -  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.
* [getGETLoginProfile](#getgetloginprofile) - <p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>
* [getGETOpenIDConnectProvider](#getgetopenidconnectprovider) - Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
* [getGETOrganizationsAccessReport](#getgetorganizationsaccessreport) - <p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
* [getGETPolicy](#getgetpolicy) - <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getGETPolicyVersion](#getgetpolicyversion) - <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [getGETRole](#getgetrole) - <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
* [getGETRolePolicy](#getgetrolepolicy) - <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>
* [getGETSAMLProvider](#getgetsamlprovider) - <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [getGETSSHPublicKey](#getgetsshpublickey) - <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [getGETServerCertificate](#getgetservercertificate) - <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>
* [getGETServiceLastAccessedDetails](#getgetservicelastaccesseddetails) - <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [getGETServiceLastAccessedDetailsWithEntities](#getgetservicelastaccesseddetailswithentities) - <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
* [getGETServiceLinkedRoleDeletionStatus](#getgetservicelinkedroledeletionstatus) - Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.
* [getGETUser](#getgetuser) - <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>
* [getGETUserPolicy](#getgetuserpolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getListAccessKeys](#getlistaccesskeys) - <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>
* [getListAccountAliases](#getlistaccountaliases) - Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [getListAttachedGroupPolicies](#getlistattachedgrouppolicies) - <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [getListAttachedRolePolicies](#getlistattachedrolepolicies) - <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
* [getListAttachedUserPolicies](#getlistattacheduserpolicies) - <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [getListEntitiesForPolicy](#getlistentitiesforpolicy) - <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListGroupPolicies](#getlistgrouppolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
* [getListGroups](#getlistgroups) - <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListGroupsForUser](#getlistgroupsforuser) - <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListInstanceProfileTags](#getlistinstanceprofiletags) - Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getListInstanceProfiles](#getlistinstanceprofiles) - <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListInstanceProfilesForRole](#getlistinstanceprofilesforrole) - <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListMFADeviceTags](#getlistmfadevicetags) - Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getListMFADevices](#getlistmfadevices) - <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListOpenIDConnectProviderTags](#getlistopenidconnectprovidertags) - <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [getListOpenIDConnectProviders](#getlistopenidconnectproviders) - <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>
* [getListPolicies](#getlistpolicies) - <p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>
* [getListPoliciesGrantingServiceAccess](#getlistpoliciesgrantingserviceaccess) - <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
* [getListPolicyTags](#getlistpolicytags) - Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getListPolicyVersions](#getlistpolicyversions) - <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getListRolePolicies](#getlistrolepolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
* [getListRoleTags](#getlistroletags) - Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getListRoles](#getlistroles) - <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListSAMLProviderTags](#getlistsamlprovidertags) - <p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [getListSAMLProviders](#getlistsamlproviders) - <p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>
* [getListSSHPublicKeys](#getlistsshpublickeys) - <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListServerCertificateTags](#getlistservercertificatetags) - <p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [getListServerCertificates](#getlistservercertificates) - <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>
* [getListServiceSpecificCredentials](#getlistservicespecificcredentials) - Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.
* [getListSigningCertificates](#getlistsigningcertificates) - <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [getListUserPolicies](#getlistuserpolicies) - <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
* [getListUserTags](#getlistusertags) - Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getListUsers](#getlistusers) - <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getListVirtualMFADevices](#getlistvirtualmfadevices) - <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [getPutGroupPolicy](#getputgrouppolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [getPutRolePermissionsBoundary](#getputrolepermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [getPutRolePolicy](#getputrolepolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [getPutUserPermissionsBoundary](#getputuserpermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [getPutUserPolicy](#getputuserpolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [getRemoveClientIDFromOpenIDConnectProvider](#getremoveclientidfromopenidconnectprovider) - <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
* [getRemoveRoleFromInstanceProfile](#getremoverolefrominstanceprofile) - <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [getRemoveUserFromGroup](#getremoveuserfromgroup) - Removes the specified user from the specified group.
* [getResetServiceSpecificCredential](#getresetservicespecificcredential) - Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
* [getResyncMFADevice](#getresyncmfadevice) - <p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>
* [getSetDefaultPolicyVersion](#getsetdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [getSetSecurityTokenServicePreferences](#getsetsecuritytokenservicepreferences) - <p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
* [getUntagInstanceProfile](#getuntaginstanceprofile) - Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagMFADevice](#getuntagmfadevice) - Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagOpenIDConnectProvider](#getuntagopenidconnectprovider) - Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagPolicy](#getuntagpolicy) - Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagRole](#getuntagrole) - Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagSAMLProvider](#getuntagsamlprovider) - Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUntagServerCertificate](#getuntagservercertificate) - <p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [getUntagUser](#getuntaguser) - Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [getUpdateAccessKey](#getupdateaccesskey) - <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>
* [getUpdateAccountPasswordPolicy](#getupdateaccountpasswordpolicy) - <p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>
* [getUpdateAssumeRolePolicy](#getupdateassumerolepolicy) - Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.
* [getUpdateGroup](#getupdategroup) - <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>
* [getUpdateLoginProfile](#getupdateloginprofile) - <p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [getUpdateOpenIDConnectProviderThumbprint](#getupdateopenidconnectproviderthumbprint) - <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
* [getUpdateRole](#getupdaterole) - Updates the description or maximum session duration setting of a role.
* [getUpdateRoleDescription](#getupdateroledescription) - <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
* [getUpdateSAMLProvider](#getupdatesamlprovider) - <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [getUpdateSSHPublicKey](#getupdatesshpublickey) - <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [getUpdateServerCertificate](#getupdateservercertificate) - <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>
* [getUpdateServiceSpecificCredential](#getupdateservicespecificcredential) - Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.
* [getUpdateSigningCertificate](#getupdatesigningcertificate) - <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [getUpdateUser](#getupdateuser) - <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>
* [getUploadSSHPublicKey](#getuploadsshpublickey) - <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [getUploadSigningCertificate](#getuploadsigningcertificate) - <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [postAddClientIDToOpenIDConnectProvider](#postaddclientidtoopenidconnectprovider) - <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
* [postAddRoleToInstanceProfile](#postaddroletoinstanceprofile) - <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [postAddUserToGroup](#postaddusertogroup) - Adds the specified user to the specified group.
* [postAttachGroupPolicy](#postattachgrouppolicy) - <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postAttachRolePolicy](#postattachrolepolicy) - <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>
* [postAttachUserPolicy](#postattachuserpolicy) - <p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postChangePassword](#postchangepassword) - <p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [postCreateAccessKey](#postcreateaccesskey) - <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
* [postCreateAccountAlias](#postcreateaccountalias) - Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [postCreateGroup](#postcreategroup) - <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [postCreateInstanceProfile](#postcreateinstanceprofile) - <p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using roles for applications on Amazon EC2</a> in the <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object quotas</a> in the <i>IAM User Guide</i>.</p>
* [postCreateLoginProfile](#postcreateloginprofile) - <p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [postCreateOpenIDConnectProvider](#postcreateopenidconnectprovider) - <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider.</p> <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the <i>IAM User Guide</i>.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of tags that are attached to the specified IAM OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP you want to use to access Amazon Web Services.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>
* [postCreatePolicy](#postcreatepolicy) - <p>Creates a new managed policy for your Amazon Web Services account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postCreatePolicyVersion](#postcreatepolicyversion) - <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [postCreateRole](#postcreaterole) - Creates a new role for your Amazon Web Services account. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM roles</a>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.
* [postCreateSAMLProvider](#postcreatesamlprovider) - <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a> in the <i>IAM User Guide</i>.</p>
* [postCreateServiceLinkedRole](#postcreateservicelinkedrole) - <p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>
* [postCreateServiceSpecificCredential](#postcreateservicespecificcredential) - <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>
* [postCreateUser](#postcreateuser) - <p>Creates a new IAM user for your Amazon Web Services account.</p> <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [postCreateVirtualMFADevice](#postcreatevirtualmfadevice) - <p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>
* [postDeactivateMFADevice](#postdeactivatemfadevice) - <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteAccessKey](#postdeleteaccesskey) - <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [postDeleteAccountAlias](#postdeleteaccountalias) -  Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [postDeleteAccountPasswordPolicy](#postdeleteaccountpasswordpolicy) - Deletes the password policy for the Amazon Web Services account. There are no parameters.
* [postDeleteGroup](#postdeletegroup) - Deletes the specified IAM group. The group must not contain any users or have any attached policies.
* [postDeleteGroupPolicy](#postdeletegrouppolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteInstanceProfile](#postdeleteinstanceprofile) - <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [postDeleteLoginProfile](#postdeleteloginprofile) - <p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>
* [postDeleteOpenIDConnectProvider](#postdeleteopenidconnectprovider) - <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
* [postDeletePolicy](#postdeletepolicy) - <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDeletePolicyVersion](#postdeletepolicyversion) - <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteRole](#postdeleterole) - <p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
* [postDeleteRolePermissionsBoundary](#postdeleterolepermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>
* [postDeleteRolePolicy](#postdeleterolepolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteSAMLProvider](#postdeletesamlprovider) - <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [postDeleteSSHPublicKey](#postdeletesshpublickey) - <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [postDeleteServerCertificate](#postdeleteservercertificate) - <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
* [postDeleteServiceLinkedRole](#postdeleteservicelinkedrole) - <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteServiceSpecificCredential](#postdeleteservicespecificcredential) - Deletes the specified service-specific credential.
* [postDeleteSigningCertificate](#postdeletesigningcertificate) - <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>
* [postDeleteUser](#postdeleteuser) - <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
* [postDeleteUserPermissionsBoundary](#postdeleteuserpermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
* [postDeleteUserPolicy](#postdeleteuserpolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDeleteVirtualMFADevice](#postdeletevirtualmfadevice) - <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
* [postDetachGroupPolicy](#postdetachgrouppolicy) - <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDetachRolePolicy](#postdetachrolepolicy) - <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postDetachUserPolicy](#postdetachuserpolicy) - <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postEnableMFADevice](#postenablemfadevice) - Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
* [postGenerateCredentialReport](#postgeneratecredentialreport) -  Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [postGenerateOrganizationsAccessReport](#postgenerateorganizationsaccessreport) - <p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>
* [postGenerateServiceLastAccessedDetails](#postgenerateservicelastaccesseddetails) - <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [postGetAccessKeyLastUsed](#postgetaccesskeylastused) - Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.
* [postGetAccountAuthorizationDetails](#postgetaccountauthorizationdetails) - <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postGetAccountPasswordPolicy](#postgetaccountpasswordpolicy) - Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.
* [postGetAccountSummary](#postgetaccountsummary) - <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [postGetContextKeysForCustomPolicy](#postgetcontextkeysforcustompolicy) - <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
* [postGetContextKeysForPrincipalPolicy](#postgetcontextkeysforprincipalpolicy) - <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
* [postGetCredentialReport](#postgetcredentialreport) -  Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [postGetGroup](#postgetgroup) -  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
* [postGetGroupPolicy](#postgetgrouppolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postGetInstanceProfile](#postgetinstanceprofile) -  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.
* [postGetLoginProfile](#postgetloginprofile) - <p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>
* [postGetOpenIDConnectProvider](#postgetopenidconnectprovider) - Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
* [postGetOrganizationsAccessReport](#postgetorganizationsaccessreport) - <p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
* [postGetPolicy](#postgetpolicy) - <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postGetPolicyVersion](#postgetpolicyversion) - <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [postGetRole](#postgetrole) - <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
* [postGetRolePolicy](#postgetrolepolicy) - <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>
* [postGetSAMLProvider](#postgetsamlprovider) - <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [postGetSSHPublicKey](#postgetsshpublickey) - <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [postGetServerCertificate](#postgetservercertificate) - <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>
* [postGetServiceLastAccessedDetails](#postgetservicelastaccesseddetails) - <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [postGetServiceLastAccessedDetailsWithEntities](#postgetservicelastaccesseddetailswithentities) - <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
* [postGetServiceLinkedRoleDeletionStatus](#postgetservicelinkedroledeletionstatus) - Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.
* [postGetUser](#postgetuser) - <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>
* [postGetUserPolicy](#postgetuserpolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postListAccessKeys](#postlistaccesskeys) - <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>
* [postListAccountAliases](#postlistaccountaliases) - Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [postListAttachedGroupPolicies](#postlistattachedgrouppolicies) - <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [postListAttachedRolePolicies](#postlistattachedrolepolicies) - <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
* [postListAttachedUserPolicies](#postlistattacheduserpolicies) - <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [postListEntitiesForPolicy](#postlistentitiesforpolicy) - <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListGroupPolicies](#postlistgrouppolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
* [postListGroups](#postlistgroups) - <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListGroupsForUser](#postlistgroupsforuser) - <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListInstanceProfileTags](#postlistinstanceprofiletags) - Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postListInstanceProfiles](#postlistinstanceprofiles) - <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListInstanceProfilesForRole](#postlistinstanceprofilesforrole) - <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListMFADeviceTags](#postlistmfadevicetags) - Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postListMFADevices](#postlistmfadevices) - <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListOpenIDConnectProviderTags](#postlistopenidconnectprovidertags) - <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [postListOpenIDConnectProviders](#postlistopenidconnectproviders) - <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>
* [postListPolicies](#postlistpolicies) - <p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>
* [postListPoliciesGrantingServiceAccess](#postlistpoliciesgrantingserviceaccess) - <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
* [postListPolicyTags](#postlistpolicytags) - Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postListPolicyVersions](#postlistpolicyversions) - <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postListRolePolicies](#postlistrolepolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
* [postListRoleTags](#postlistroletags) - Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postListRoles](#postlistroles) - <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListSAMLProviderTags](#postlistsamlprovidertags) - <p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [postListSAMLProviders](#postlistsamlproviders) - <p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>
* [postListSSHPublicKeys](#postlistsshpublickeys) - <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListServerCertificateTags](#postlistservercertificatetags) - <p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [postListServerCertificates](#postlistservercertificates) - <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>
* [postListServiceSpecificCredentials](#postlistservicespecificcredentials) - Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.
* [postListSigningCertificates](#postlistsigningcertificates) - <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [postListUserPolicies](#postlistuserpolicies) - <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
* [postListUserTags](#postlistusertags) - Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postListUsers](#postlistusers) - <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postListVirtualMFADevices](#postlistvirtualmfadevices) - <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [postPutGroupPolicy](#postputgrouppolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [postPutRolePermissionsBoundary](#postputrolepermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [postPutRolePolicy](#postputrolepolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [postPutUserPermissionsBoundary](#postputuserpermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [postPutUserPolicy](#postputuserpolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [postRemoveClientIDFromOpenIDConnectProvider](#postremoveclientidfromopenidconnectprovider) - <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
* [postRemoveRoleFromInstanceProfile](#postremoverolefrominstanceprofile) - <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [postRemoveUserFromGroup](#postremoveuserfromgroup) - Removes the specified user from the specified group.
* [postResetServiceSpecificCredential](#postresetservicespecificcredential) - Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
* [postResyncMFADevice](#postresyncmfadevice) - <p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>
* [postSetDefaultPolicyVersion](#postsetdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [postSetSecurityTokenServicePreferences](#postsetsecuritytokenservicepreferences) - <p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
* [postSimulateCustomPolicy](#postsimulatecustompolicy) - <p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>
* [postSimulatePrincipalPolicy](#postsimulateprincipalpolicy) - <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>
* [postTagInstanceProfile](#posttaginstanceprofile) - <p>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagMFADevice](#posttagmfadevice) - <p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagOpenIDConnectProvider](#posttagopenidconnectprovider) - <p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagPolicy](#posttagpolicy) - <p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagRole](#posttagrole) - <p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>
* [postTagSAMLProvider](#posttagsamlprovider) - <p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagServerCertificate](#posttagservercertificate) - <p>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [postTagUser](#posttaguser) - <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>
* [postUntagInstanceProfile](#postuntaginstanceprofile) - Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagMFADevice](#postuntagmfadevice) - Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagOpenIDConnectProvider](#postuntagopenidconnectprovider) - Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagPolicy](#postuntagpolicy) - Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagRole](#postuntagrole) - Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagSAMLProvider](#postuntagsamlprovider) - Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUntagServerCertificate](#postuntagservercertificate) - <p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [postUntagUser](#postuntaguser) - Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [postUpdateAccessKey](#postupdateaccesskey) - <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>
* [postUpdateAccountPasswordPolicy](#postupdateaccountpasswordpolicy) - <p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>
* [postUpdateAssumeRolePolicy](#postupdateassumerolepolicy) - Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.
* [postUpdateGroup](#postupdategroup) - <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>
* [postUpdateLoginProfile](#postupdateloginprofile) - <p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [postUpdateOpenIDConnectProviderThumbprint](#postupdateopenidconnectproviderthumbprint) - <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
* [postUpdateRole](#postupdaterole) - Updates the description or maximum session duration setting of a role.
* [postUpdateRoleDescription](#postupdateroledescription) - <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
* [postUpdateSAMLProvider](#postupdatesamlprovider) - <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [postUpdateSSHPublicKey](#postupdatesshpublickey) - <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [postUpdateServerCertificate](#postupdateservercertificate) - <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>
* [postUpdateServiceSpecificCredential](#postupdateservicespecificcredential) - Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.
* [postUpdateSigningCertificate](#postupdatesigningcertificate) - <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [postUpdateUser](#postupdateuser) - <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>
* [postUploadSSHPublicKey](#postuploadsshpublickey) - <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [postUploadServerCertificate](#postuploadservercertificate) - <p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [postUploadSigningCertificate](#postuploadsigningcertificate) - <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

## getAddClientIDToOpenIDConnectProvider

<p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETAddClientIDToOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddClientIDToOpenIDConnectProviderRequest req = new GETAddClientIDToOpenIDConnectProviderRequest(GETAddClientIDToOpenIDConnectProviderActionEnum.ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER, "suscipit", "iure", GETAddClientIDToOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETAddClientIDToOpenIDConnectProviderResponse res = sdk.sdk.getAddClientIDToOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddRoleToInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToInstanceProfileRequest;
import org.openapis.openapi.models.operations.GETAddRoleToInstanceProfileResponse;
import org.openapis.openapi.models.operations.GETAddRoleToInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddRoleToInstanceProfileRequest req = new GETAddRoleToInstanceProfileRequest(GETAddRoleToInstanceProfileActionEnum.ADD_ROLE_TO_INSTANCE_PROFILE, "placeat", "voluptatum", GETAddRoleToInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            GETAddRoleToInstanceProfileResponse res = sdk.sdk.getAddRoleToInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddUserToGroup

Adds the specified user to the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddUserToGroupActionEnum;
import org.openapis.openapi.models.operations.GETAddUserToGroupRequest;
import org.openapis.openapi.models.operations.GETAddUserToGroupResponse;
import org.openapis.openapi.models.operations.GETAddUserToGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddUserToGroupRequest req = new GETAddUserToGroupRequest(GETAddUserToGroupActionEnum.ADD_USER_TO_GROUP, "deserunt", "perferendis", GETAddUserToGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            GETAddUserToGroupResponse res = sdk.sdk.getAddUserToGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.GETAttachGroupPolicyRequest;
import org.openapis.openapi.models.operations.GETAttachGroupPolicyResponse;
import org.openapis.openapi.models.operations.GETAttachGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachGroupPolicyRequest req = new GETAttachGroupPolicyRequest(GETAttachGroupPolicyActionEnum.ATTACH_GROUP_POLICY, "molestiae", "quod", GETAttachGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            GETAttachGroupPolicyResponse res = sdk.sdk.getAttachGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETAttachRolePolicyRequest;
import org.openapis.openapi.models.operations.GETAttachRolePolicyResponse;
import org.openapis.openapi.models.operations.GETAttachRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachRolePolicyRequest req = new GETAttachRolePolicyRequest(GETAttachRolePolicyActionEnum.ATTACH_ROLE_POLICY, "occaecati", "fugit", GETAttachRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETAttachRolePolicyResponse res = sdk.sdk.getAttachRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachUserPolicyActionEnum;
import org.openapis.openapi.models.operations.GETAttachUserPolicyRequest;
import org.openapis.openapi.models.operations.GETAttachUserPolicyResponse;
import org.openapis.openapi.models.operations.GETAttachUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachUserPolicyRequest req = new GETAttachUserPolicyRequest(GETAttachUserPolicyActionEnum.ATTACH_USER_POLICY, "qui", "impedit", GETAttachUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            GETAttachUserPolicyResponse res = sdk.sdk.getAttachUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETChangePasswordActionEnum;
import org.openapis.openapi.models.operations.GETChangePasswordRequest;
import org.openapis.openapi.models.operations.GETChangePasswordResponse;
import org.openapis.openapi.models.operations.GETChangePasswordVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETChangePasswordRequest req = new GETChangePasswordRequest(GETChangePasswordActionEnum.CHANGE_PASSWORD, "sed", "iste", GETChangePasswordVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            GETChangePasswordResponse res = sdk.sdk.getChangePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateAccessKeyActionEnum;
import org.openapis.openapi.models.operations.GETCreateAccessKeyRequest;
import org.openapis.openapi.models.operations.GETCreateAccessKeyResponse;
import org.openapis.openapi.models.operations.GETCreateAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateAccessKeyRequest req = new GETCreateAccessKeyRequest(GETCreateAccessKeyActionEnum.CREATE_ACCESS_KEY, GETCreateAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Leslie_Kertzmann9";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETCreateAccessKeyResponse res = sdk.sdk.getCreateAccessKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateAccountAliasActionEnum;
import org.openapis.openapi.models.operations.GETCreateAccountAliasRequest;
import org.openapis.openapi.models.operations.GETCreateAccountAliasResponse;
import org.openapis.openapi.models.operations.GETCreateAccountAliasVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateAccountAliasRequest req = new GETCreateAccountAliasRequest("explicabo", GETCreateAccountAliasActionEnum.CREATE_ACCOUNT_ALIAS, GETCreateAccountAliasVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETCreateAccountAliasResponse res = sdk.sdk.getCreateAccountAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateGroupRequest;
import org.openapis.openapi.models.operations.GETCreateGroupResponse;
import org.openapis.openapi.models.operations.GETCreateGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateGroupRequest req = new GETCreateGroupRequest(GETCreateGroupActionEnum.CREATE_GROUP, "culpa", GETCreateGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                path = "doloribus";
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "mollitia";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellat";
            }};            

            GETCreateGroupResponse res = sdk.sdk.getCreateGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateLoginProfileActionEnum;
import org.openapis.openapi.models.operations.GETCreateLoginProfileRequest;
import org.openapis.openapi.models.operations.GETCreateLoginProfileResponse;
import org.openapis.openapi.models.operations.GETCreateLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateLoginProfileRequest req = new GETCreateLoginProfileRequest(GETCreateLoginProfileActionEnum.CREATE_LOGIN_PROFILE, "occaecati", "numquam", GETCreateLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                passwordResetRequired = false;
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            GETCreateLoginProfileResponse res = sdk.sdk.getCreateLoginProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreatePolicyVersionActionEnum;
import org.openapis.openapi.models.operations.GETCreatePolicyVersionRequest;
import org.openapis.openapi.models.operations.GETCreatePolicyVersionResponse;
import org.openapis.openapi.models.operations.GETCreatePolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreatePolicyVersionRequest req = new GETCreatePolicyVersionRequest(GETCreatePolicyVersionActionEnum.CREATE_POLICY_VERSION, "laborum", "animi", GETCreatePolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                setAsDefault = false;
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            GETCreatePolicyVersionResponse res = sdk.sdk.getCreatePolicyVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateServiceLinkedRoleActionEnum;
import org.openapis.openapi.models.operations.GETCreateServiceLinkedRoleRequest;
import org.openapis.openapi.models.operations.GETCreateServiceLinkedRoleResponse;
import org.openapis.openapi.models.operations.GETCreateServiceLinkedRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateServiceLinkedRoleRequest req = new GETCreateServiceLinkedRoleRequest("aut", GETCreateServiceLinkedRoleActionEnum.CREATE_SERVICE_LINKED_ROLE, GETCreateServiceLinkedRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                customSuffix = "quasi";
                description = "error";
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            GETCreateServiceLinkedRoleResponse res = sdk.sdk.getCreateServiceLinkedRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.GETCreateServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.GETCreateServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.GETCreateServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateServiceSpecificCredentialRequest req = new GETCreateServiceSpecificCredentialRequest(GETCreateServiceSpecificCredentialActionEnum.CREATE_SERVICE_SPECIFIC_CREDENTIAL, "voluptatibus", "ipsa", GETCreateServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            GETCreateServiceSpecificCredentialResponse res = sdk.sdk.getCreateServiceSpecificCredential(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeactivateMFADeviceActionEnum;
import org.openapis.openapi.models.operations.GETDeactivateMFADeviceRequest;
import org.openapis.openapi.models.operations.GETDeactivateMFADeviceResponse;
import org.openapis.openapi.models.operations.GETDeactivateMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeactivateMFADeviceRequest req = new GETDeactivateMFADeviceRequest(GETDeactivateMFADeviceActionEnum.DEACTIVATE_MFA_DEVICE, "dicta", "corporis", GETDeactivateMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            GETDeactivateMFADeviceResponse res = sdk.sdk.getDeactivateMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAccessKeyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAccessKeyRequest;
import org.openapis.openapi.models.operations.GETDeleteAccessKeyResponse;
import org.openapis.openapi.models.operations.GETDeleteAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAccessKeyRequest req = new GETDeleteAccessKeyRequest("quae", GETDeleteAccessKeyActionEnum.DELETE_ACCESS_KEY, GETDeleteAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Curt_Pouros";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GETDeleteAccessKeyResponse res = sdk.sdk.getDeleteAccessKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAccountAliasActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAccountAliasRequest;
import org.openapis.openapi.models.operations.GETDeleteAccountAliasResponse;
import org.openapis.openapi.models.operations.GETDeleteAccountAliasVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAccountAliasRequest req = new GETDeleteAccountAliasRequest("veritatis", GETDeleteAccountAliasActionEnum.DELETE_ACCOUNT_ALIAS, GETDeleteAccountAliasVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GETDeleteAccountAliasResponse res = sdk.sdk.getDeleteAccountAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAccountPasswordPolicyRequest req = new GETDeleteAccountPasswordPolicyRequest(GETDeleteAccountPasswordPolicyActionEnum.DELETE_ACCOUNT_PASSWORD_POLICY, GETDeleteAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETDeleteAccountPasswordPolicyResponse res = sdk.sdk.getDeleteAccountPasswordPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGroupRequest req = new GETDeleteGroupRequest(GETDeleteGroupActionEnum.DELETE_GROUP, "perferendis", GETDeleteGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDeleteGroupResponse res = sdk.sdk.getDeleteGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteGroupPolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteGroupPolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteGroupPolicyRequest req = new GETDeleteGroupPolicyRequest(GETDeleteGroupPolicyActionEnum.DELETE_GROUP_POLICY, "facilis", "tempore", GETDeleteGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETDeleteGroupPolicyResponse res = sdk.sdk.getDeleteGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.GETDeleteInstanceProfileRequest;
import org.openapis.openapi.models.operations.GETDeleteInstanceProfileResponse;
import org.openapis.openapi.models.operations.GETDeleteInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteInstanceProfileRequest req = new GETDeleteInstanceProfileRequest(GETDeleteInstanceProfileActionEnum.DELETE_INSTANCE_PROFILE, "necessitatibus", GETDeleteInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            GETDeleteInstanceProfileResponse res = sdk.sdk.getDeleteInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLoginProfileActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLoginProfileRequest;
import org.openapis.openapi.models.operations.GETDeleteLoginProfileResponse;
import org.openapis.openapi.models.operations.GETDeleteLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLoginProfileRequest req = new GETDeleteLoginProfileRequest(GETDeleteLoginProfileActionEnum.DELETE_LOGIN_PROFILE, "illum", GETDeleteLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            GETDeleteLoginProfileResponse res = sdk.sdk.getDeleteLoginProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETDeleteOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETDeleteOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETDeleteOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteOpenIDConnectProviderRequest req = new GETDeleteOpenIDConnectProviderRequest(GETDeleteOpenIDConnectProviderActionEnum.DELETE_OPEN_ID_CONNECT_PROVIDER, "laborum", GETDeleteOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            GETDeleteOpenIDConnectProviderResponse res = sdk.sdk.getDeleteOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeletePolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeletePolicyRequest;
import org.openapis.openapi.models.operations.GETDeletePolicyResponse;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeletePolicyRequest req = new GETDeletePolicyRequest(GETDeletePolicyActionEnum.DELETE_POLICY, "nam", GETDeletePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            GETDeletePolicyResponse res = sdk.sdk.getDeletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionActionEnum;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionRequest;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionResponse;
import org.openapis.openapi.models.operations.GETDeletePolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeletePolicyVersionRequest req = new GETDeletePolicyVersionRequest(GETDeletePolicyVersionActionEnum.DELETE_POLICY_VERSION, "natus", GETDeletePolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508, "omnis") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            GETDeletePolicyVersionResponse res = sdk.sdk.getDeletePolicyVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteRoleActionEnum;
import org.openapis.openapi.models.operations.GETDeleteRoleRequest;
import org.openapis.openapi.models.operations.GETDeleteRoleResponse;
import org.openapis.openapi.models.operations.GETDeleteRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteRoleRequest req = new GETDeleteRoleRequest(GETDeleteRoleActionEnum.DELETE_ROLE, "suscipit", GETDeleteRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            GETDeleteRoleResponse res = sdk.sdk.getDeleteRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteRolePermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.GETDeleteRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.GETDeleteRolePermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.GETDeleteRolePermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteRolePermissionsBoundaryRequest req = new GETDeleteRolePermissionsBoundaryRequest(GETDeleteRolePermissionsBoundaryActionEnum.DELETE_ROLE_PERMISSIONS_BOUNDARY, "excepturi", GETDeleteRolePermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETDeleteRolePermissionsBoundaryResponse res = sdk.sdk.getDeleteRolePermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteRolePolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteRolePolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteRolePolicyRequest req = new GETDeleteRolePolicyRequest(GETDeleteRolePolicyActionEnum.DELETE_ROLE_POLICY, "ad", "eum", GETDeleteRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
            }};            

            GETDeleteRolePolicyResponse res = sdk.sdk.getDeleteRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSAMLProviderRequest;
import org.openapis.openapi.models.operations.GETDeleteSAMLProviderResponse;
import org.openapis.openapi.models.operations.GETDeleteSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSAMLProviderRequest req = new GETDeleteSAMLProviderRequest(GETDeleteSAMLProviderActionEnum.DELETE_SAML_PROVIDER, "eius", GETDeleteSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GETDeleteSAMLProviderResponse res = sdk.sdk.getDeleteSAMLProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.GETDeleteSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.GETDeleteSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSSHPublicKeyRequest req = new GETDeleteSSHPublicKeyRequest(GETDeleteSSHPublicKeyActionEnum.DELETE_SSH_PUBLIC_KEY, "expedita", "nihil", GETDeleteSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDeleteSSHPublicKeyResponse res = sdk.sdk.getDeleteSSHPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteServerCertificateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteServerCertificateRequest;
import org.openapis.openapi.models.operations.GETDeleteServerCertificateResponse;
import org.openapis.openapi.models.operations.GETDeleteServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteServerCertificateRequest req = new GETDeleteServerCertificateRequest(GETDeleteServerCertificateActionEnum.DELETE_SERVER_CERTIFICATE, "natus", GETDeleteServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GETDeleteServerCertificateResponse res = sdk.sdk.getDeleteServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteServiceLinkedRoleActionEnum;
import org.openapis.openapi.models.operations.GETDeleteServiceLinkedRoleRequest;
import org.openapis.openapi.models.operations.GETDeleteServiceLinkedRoleResponse;
import org.openapis.openapi.models.operations.GETDeleteServiceLinkedRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteServiceLinkedRoleRequest req = new GETDeleteServiceLinkedRoleRequest(GETDeleteServiceLinkedRoleActionEnum.DELETE_SERVICE_LINKED_ROLE, "odit", GETDeleteServiceLinkedRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ab";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDeleteServiceLinkedRoleResponse res = sdk.sdk.getDeleteServiceLinkedRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.GETDeleteServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.GETDeleteServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.GETDeleteServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteServiceSpecificCredentialRequest req = new GETDeleteServiceSpecificCredentialRequest(GETDeleteServiceSpecificCredentialActionEnum.DELETE_SERVICE_SPECIFIC_CREDENTIAL, "nam", GETDeleteServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Ambrose_Streich";
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            GETDeleteServiceSpecificCredentialResponse res = sdk.sdk.getDeleteServiceSpecificCredential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteSigningCertificateRequest;
import org.openapis.openapi.models.operations.GETDeleteSigningCertificateResponse;
import org.openapis.openapi.models.operations.GETDeleteSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteSigningCertificateRequest req = new GETDeleteSigningCertificateRequest(GETDeleteSigningCertificateActionEnum.DELETE_SIGNING_CERTIFICATE, "nobis", GETDeleteSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Celestine.Hayes";
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            GETDeleteSigningCertificateResponse res = sdk.sdk.getDeleteSigningCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUserActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUserRequest;
import org.openapis.openapi.models.operations.GETDeleteUserResponse;
import org.openapis.openapi.models.operations.GETDeleteUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUserRequest req = new GETDeleteUserRequest(GETDeleteUserActionEnum.DELETE_USER, "dolor", GETDeleteUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GETDeleteUserResponse res = sdk.sdk.getDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUserPermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.GETDeleteUserPermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.GETDeleteUserPermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUserPermissionsBoundaryRequest req = new GETDeleteUserPermissionsBoundaryRequest(GETDeleteUserPermissionsBoundaryActionEnum.DELETE_USER_PERMISSIONS_BOUNDARY, "porro", GETDeleteUserPermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            GETDeleteUserPermissionsBoundaryResponse res = sdk.sdk.getDeleteUserPermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteUserPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteUserPolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteUserPolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteUserPolicyRequest req = new GETDeleteUserPolicyRequest(GETDeleteUserPolicyActionEnum.DELETE_USER_POLICY, "earum", "modi", GETDeleteUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "libero";
            }};            

            GETDeleteUserPolicyResponse res = sdk.sdk.getDeleteUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteVirtualMFADeviceActionEnum;
import org.openapis.openapi.models.operations.GETDeleteVirtualMFADeviceRequest;
import org.openapis.openapi.models.operations.GETDeleteVirtualMFADeviceResponse;
import org.openapis.openapi.models.operations.GETDeleteVirtualMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteVirtualMFADeviceRequest req = new GETDeleteVirtualMFADeviceRequest(GETDeleteVirtualMFADeviceActionEnum.DELETE_VIRTUAL_MFA_DEVICE, "quaerat", GETDeleteVirtualMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDeleteVirtualMFADeviceResponse res = sdk.sdk.getDeleteVirtualMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDetachGroupPolicyRequest;
import org.openapis.openapi.models.operations.GETDetachGroupPolicyResponse;
import org.openapis.openapi.models.operations.GETDetachGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachGroupPolicyRequest req = new GETDetachGroupPolicyRequest(GETDetachGroupPolicyActionEnum.DETACH_GROUP_POLICY, "excepturi", "cum", GETDetachGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            GETDetachGroupPolicyResponse res = sdk.sdk.getDetachGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETDetachRolePolicyRequest;
import org.openapis.openapi.models.operations.GETDetachRolePolicyResponse;
import org.openapis.openapi.models.operations.GETDetachRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachRolePolicyRequest req = new GETDetachRolePolicyRequest(GETDetachRolePolicyActionEnum.DETACH_ROLE_POLICY, "ipsa", "iure", GETDetachRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            GETDetachRolePolicyResponse res = sdk.sdk.getDetachRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachUserPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDetachUserPolicyRequest;
import org.openapis.openapi.models.operations.GETDetachUserPolicyResponse;
import org.openapis.openapi.models.operations.GETDetachUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachUserPolicyRequest req = new GETDetachUserPolicyRequest(GETDetachUserPolicyActionEnum.DETACH_USER_POLICY, "atque", "sit", GETDetachUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDetachUserPolicyResponse res = sdk.sdk.getDetachUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableMFADeviceActionEnum;
import org.openapis.openapi.models.operations.GETEnableMFADeviceRequest;
import org.openapis.openapi.models.operations.GETEnableMFADeviceResponse;
import org.openapis.openapi.models.operations.GETEnableMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableMFADeviceRequest req = new GETEnableMFADeviceRequest(GETEnableMFADeviceActionEnum.ENABLE_MFA_DEVICE, "omnis", "necessitatibus", "distinctio", "asperiores", GETEnableMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "voluptate";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GETEnableMFADeviceResponse res = sdk.sdk.getEnableMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenerateCredentialReportActionEnum;
import org.openapis.openapi.models.operations.GETGenerateCredentialReportRequest;
import org.openapis.openapi.models.operations.GETGenerateCredentialReportResponse;
import org.openapis.openapi.models.operations.GETGenerateCredentialReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGenerateCredentialReportRequest req = new GETGenerateCredentialReportRequest(GETGenerateCredentialReportActionEnum.GENERATE_CREDENTIAL_REPORT, GETGenerateCredentialReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETGenerateCredentialReportResponse res = sdk.sdk.getGenerateCredentialReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenerateOrganizationsAccessReportActionEnum;
import org.openapis.openapi.models.operations.GETGenerateOrganizationsAccessReportRequest;
import org.openapis.openapi.models.operations.GETGenerateOrganizationsAccessReportResponse;
import org.openapis.openapi.models.operations.GETGenerateOrganizationsAccessReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGenerateOrganizationsAccessReportRequest req = new GETGenerateOrganizationsAccessReportRequest(GETGenerateOrganizationsAccessReportActionEnum.GENERATE_ORGANIZATIONS_ACCESS_REPORT, "minima", GETGenerateOrganizationsAccessReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                organizationsPolicyId = "repellendus";
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
            }};            

            GETGenerateOrganizationsAccessReportResponse res = sdk.sdk.getGenerateOrganizationsAccessReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenerateServiceLastAccessedDetailsActionEnum;
import org.openapis.openapi.models.operations.GETGenerateServiceLastAccessedDetailsGranularityEnum;
import org.openapis.openapi.models.operations.GETGenerateServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.operations.GETGenerateServiceLastAccessedDetailsResponse;
import org.openapis.openapi.models.operations.GETGenerateServiceLastAccessedDetailsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGenerateServiceLastAccessedDetailsRequest req = new GETGenerateServiceLastAccessedDetailsRequest(GETGenerateServiceLastAccessedDetailsActionEnum.GENERATE_SERVICE_LAST_ACCESSED_DETAILS, "officiis", GETGenerateServiceLastAccessedDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                granularity = GETGenerateServiceLastAccessedDetailsGranularityEnum.SERVICE_LEVEL;
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
            }};            

            GETGenerateServiceLastAccessedDetailsResponse res = sdk.sdk.getGenerateServiceLastAccessedDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAccessKeyLastUsedActionEnum;
import org.openapis.openapi.models.operations.GETGETAccessKeyLastUsedRequest;
import org.openapis.openapi.models.operations.GETGETAccessKeyLastUsedResponse;
import org.openapis.openapi.models.operations.GETGETAccessKeyLastUsedVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAccessKeyLastUsedRequest req = new GETGETAccessKeyLastUsedRequest("amet", GETGETAccessKeyLastUsedActionEnum.GET_ACCESS_KEY_LAST_USED, GETGETAccessKeyLastUsedVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            GETGETAccessKeyLastUsedResponse res = sdk.sdk.getGETAccessKeyLastUsed(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAccountAuthorizationDetailsActionEnum;
import org.openapis.openapi.models.operations.GETGETAccountAuthorizationDetailsRequest;
import org.openapis.openapi.models.operations.GETGETAccountAuthorizationDetailsResponse;
import org.openapis.openapi.models.operations.GETGETAccountAuthorizationDetailsVersionEnum;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAccountAuthorizationDetailsRequest req = new GETGETAccountAuthorizationDetailsRequest(GETGETAccountAuthorizationDetailsActionEnum.GET_ACCOUNT_AUTHORIZATION_DETAILS, GETGETAccountAuthorizationDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                filter = new org.openapis.openapi.models.shared.EntityTypeEnum[]{{
                    add(EntityTypeEnum.LOCAL_MANAGED_POLICY),
                }};
                marker = "neque";
                maxItems = 153694L;
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "libero";
                xAmzCredential = "voluptas";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "incidunt";
            }};            

            GETGETAccountAuthorizationDetailsResponse res = sdk.sdk.getGETAccountAuthorizationDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.GETGETAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.GETGETAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAccountPasswordPolicyRequest req = new GETGETAccountPasswordPolicyRequest(GETGETAccountPasswordPolicyActionEnum.GET_ACCOUNT_PASSWORD_POLICY, GETGETAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
            }};            

            GETGETAccountPasswordPolicyResponse res = sdk.sdk.getGETAccountPasswordPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAccountSummaryActionEnum;
import org.openapis.openapi.models.operations.GETGETAccountSummaryRequest;
import org.openapis.openapi.models.operations.GETGETAccountSummaryResponse;
import org.openapis.openapi.models.operations.GETGETAccountSummaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAccountSummaryRequest req = new GETGETAccountSummaryRequest(GETGETAccountSummaryActionEnum.GET_ACCOUNT_SUMMARY, GETGETAccountSummaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "distinctio";
                xAmzDate = "facilis";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestias";
            }};            

            GETGETAccountSummaryResponse res = sdk.sdk.getGETAccountSummary(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETContextKeysForCustomPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETContextKeysForCustomPolicyRequest;
import org.openapis.openapi.models.operations.GETGETContextKeysForCustomPolicyResponse;
import org.openapis.openapi.models.operations.GETGETContextKeysForCustomPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETContextKeysForCustomPolicyRequest req = new GETGETContextKeysForCustomPolicyRequest(GETGETContextKeysForCustomPolicyActionEnum.GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY,                 new String[]{{
                                add("neque"),
                            }}, GETGETContextKeysForCustomPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            GETGETContextKeysForCustomPolicyResponse res = sdk.sdk.getGETContextKeysForCustomPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETContextKeysForPrincipalPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETContextKeysForPrincipalPolicyRequest;
import org.openapis.openapi.models.operations.GETGETContextKeysForPrincipalPolicyResponse;
import org.openapis.openapi.models.operations.GETGETContextKeysForPrincipalPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETContextKeysForPrincipalPolicyRequest req = new GETGETContextKeysForPrincipalPolicyRequest(GETGETContextKeysForPrincipalPolicyActionEnum.GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY, "cumque", GETGETContextKeysForPrincipalPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                policyInputList = new String[]{{
                    add("nobis"),
                    add("et"),
                    add("saepe"),
                }};
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            GETGETContextKeysForPrincipalPolicyResponse res = sdk.sdk.getGETContextKeysForPrincipalPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETCredentialReportActionEnum;
import org.openapis.openapi.models.operations.GETGETCredentialReportRequest;
import org.openapis.openapi.models.operations.GETGETCredentialReportResponse;
import org.openapis.openapi.models.operations.GETGETCredentialReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETCredentialReportRequest req = new GETGETCredentialReportRequest(GETGETCredentialReportActionEnum.GET_CREDENTIAL_REPORT, GETGETCredentialReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            GETGETCredentialReportResponse res = sdk.sdk.getGETCredentialReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETGroupActionEnum;
import org.openapis.openapi.models.operations.GETGETGroupRequest;
import org.openapis.openapi.models.operations.GETGETGroupResponse;
import org.openapis.openapi.models.operations.GETGETGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETGroupRequest req = new GETGETGroupRequest(GETGETGroupActionEnum.GET_GROUP, "quas", GETGETGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "itaque";
                maxItems = 9240L;
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETGETGroupResponse res = sdk.sdk.getGETGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETGroupPolicyRequest;
import org.openapis.openapi.models.operations.GETGETGroupPolicyResponse;
import org.openapis.openapi.models.operations.GETGETGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETGroupPolicyRequest req = new GETGETGroupPolicyRequest(GETGETGroupPolicyActionEnum.GET_GROUP_POLICY, "quae", "laudantium", GETGETGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            GETGETGroupPolicyResponse res = sdk.sdk.getGETGroupPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.GETGETInstanceProfileRequest;
import org.openapis.openapi.models.operations.GETGETInstanceProfileResponse;
import org.openapis.openapi.models.operations.GETGETInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETInstanceProfileRequest req = new GETGETInstanceProfileRequest(GETGETInstanceProfileActionEnum.GET_INSTANCE_PROFILE, "delectus", GETGETInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vero";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETGETInstanceProfileResponse res = sdk.sdk.getGETInstanceProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETLoginProfileActionEnum;
import org.openapis.openapi.models.operations.GETGETLoginProfileRequest;
import org.openapis.openapi.models.operations.GETGETLoginProfileResponse;
import org.openapis.openapi.models.operations.GETGETLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETLoginProfileRequest req = new GETGETLoginProfileRequest(GETGETLoginProfileActionEnum.GET_LOGIN_PROFILE, "odio", GETGETLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
            }};            

            GETGETLoginProfileResponse res = sdk.sdk.getGETLoginProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETGETOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETGETOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETGETOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETOpenIDConnectProviderRequest req = new GETGETOpenIDConnectProviderRequest(GETGETOpenIDConnectProviderActionEnum.GET_OPEN_ID_CONNECT_PROVIDER, "natus", GETGETOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            GETGETOpenIDConnectProviderResponse res = sdk.sdk.getGETOpenIDConnectProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETOrganizationsAccessReportActionEnum;
import org.openapis.openapi.models.operations.GETGETOrganizationsAccessReportRequest;
import org.openapis.openapi.models.operations.GETGETOrganizationsAccessReportResponse;
import org.openapis.openapi.models.operations.GETGETOrganizationsAccessReportSortKeyEnum;
import org.openapis.openapi.models.operations.GETGETOrganizationsAccessReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETOrganizationsAccessReportRequest req = new GETGETOrganizationsAccessReportRequest(GETGETOrganizationsAccessReportActionEnum.GET_ORGANIZATIONS_ACCESS_REPORT, "doloribus", GETGETOrganizationsAccessReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "iusto";
                maxItems = 753570L;
                sortKey = GETGETOrganizationsAccessReportSortKeyEnum.SERVICE_NAMESPACE_DESCENDING;
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            GETGETOrganizationsAccessReportResponse res = sdk.sdk.getGETOrganizationsAccessReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETPolicyRequest;
import org.openapis.openapi.models.operations.GETGETPolicyResponse;
import org.openapis.openapi.models.operations.GETGETPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETPolicyRequest req = new GETGETPolicyRequest(GETGETPolicyActionEnum.GET_POLICY, "magnam", GETGETPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "ex";
                xAmzCredential = "laudantium";
                xAmzDate = "dicta";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quasi";
            }};            

            GETGETPolicyResponse res = sdk.sdk.getGETPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETPolicyVersionActionEnum;
import org.openapis.openapi.models.operations.GETGETPolicyVersionRequest;
import org.openapis.openapi.models.operations.GETGETPolicyVersionResponse;
import org.openapis.openapi.models.operations.GETGETPolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETPolicyVersionRequest req = new GETGETPolicyVersionRequest(GETGETPolicyVersionActionEnum.GET_POLICY_VERSION, "nulla", GETGETPolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508, "excepturi") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            GETGETPolicyVersionResponse res = sdk.sdk.getGETPolicyVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETRoleActionEnum;
import org.openapis.openapi.models.operations.GETGETRoleRequest;
import org.openapis.openapi.models.operations.GETGETRoleResponse;
import org.openapis.openapi.models.operations.GETGETRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETRoleRequest req = new GETGETRoleRequest(GETGETRoleActionEnum.GET_ROLE, "veniam", GETGETRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            GETGETRoleResponse res = sdk.sdk.getGETRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETRolePolicyRequest;
import org.openapis.openapi.models.operations.GETGETRolePolicyResponse;
import org.openapis.openapi.models.operations.GETGETRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETRolePolicyRequest req = new GETGETRolePolicyRequest(GETGETRolePolicyActionEnum.GET_ROLE_POLICY, "minima", "eaque", GETGETRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "libero";
                xAmzCredential = "aut";
                xAmzDate = "aut";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aliquam";
            }};            

            GETGETRolePolicyResponse res = sdk.sdk.getGETRolePolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.GETGETSAMLProviderRequest;
import org.openapis.openapi.models.operations.GETGETSAMLProviderResponse;
import org.openapis.openapi.models.operations.GETGETSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETSAMLProviderRequest req = new GETGETSAMLProviderRequest(GETGETSAMLProviderActionEnum.GET_SAML_PROVIDER, "accusamus", GETGETSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
            }};            

            GETGETSAMLProviderResponse res = sdk.sdk.getGETSAMLProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.GETGETSSHPublicKeyEncodingEnum;
import org.openapis.openapi.models.operations.GETGETSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.GETGETSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.GETGETSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETSSHPublicKeyRequest req = new GETGETSSHPublicKeyRequest(GETGETSSHPublicKeyActionEnum.GET_SSH_PUBLIC_KEY, GETGETSSHPublicKeyEncodingEnum.SSH, "nobis", "quas", GETGETSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            GETGETSSHPublicKeyResponse res = sdk.sdk.getGETSSHPublicKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETServerCertificateActionEnum;
import org.openapis.openapi.models.operations.GETGETServerCertificateRequest;
import org.openapis.openapi.models.operations.GETGETServerCertificateResponse;
import org.openapis.openapi.models.operations.GETGETServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETServerCertificateRequest req = new GETGETServerCertificateRequest(GETGETServerCertificateActionEnum.GET_SERVER_CERTIFICATE, "provident", GETGETServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "magnam";
                xAmzDate = "odio";
                xAmzSecurityToken = "eius";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "esse";
            }};            

            GETGETServerCertificateResponse res = sdk.sdk.getGETServerCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsActionEnum;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsResponse;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETServiceLastAccessedDetailsRequest req = new GETGETServiceLastAccessedDetailsRequest(GETGETServiceLastAccessedDetailsActionEnum.GET_SERVICE_LAST_ACCESSED_DETAILS, "fuga", GETGETServiceLastAccessedDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "reprehenderit";
                maxItems = 695626L;
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETGETServiceLastAccessedDetailsResponse res = sdk.sdk.getGETServiceLastAccessedDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsWithEntitiesActionEnum;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsWithEntitiesRequest;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsWithEntitiesResponse;
import org.openapis.openapi.models.operations.GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETServiceLastAccessedDetailsWithEntitiesRequest req = new GETGETServiceLastAccessedDetailsWithEntitiesRequest(GETGETServiceLastAccessedDetailsWithEntitiesActionEnum.GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES, "veritatis", "ipsa", GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "id";
                maxItems = 696997L;
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "quo";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "eos";
            }};            

            GETGETServiceLastAccessedDetailsWithEntitiesResponse res = sdk.sdk.getGETServiceLastAccessedDetailsWithEntities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETServiceLinkedRoleDeletionStatusActionEnum;
import org.openapis.openapi.models.operations.GETGETServiceLinkedRoleDeletionStatusRequest;
import org.openapis.openapi.models.operations.GETGETServiceLinkedRoleDeletionStatusResponse;
import org.openapis.openapi.models.operations.GETGETServiceLinkedRoleDeletionStatusVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETServiceLinkedRoleDeletionStatusRequest req = new GETGETServiceLinkedRoleDeletionStatusRequest(GETGETServiceLinkedRoleDeletionStatusActionEnum.GET_SERVICE_LINKED_ROLE_DELETION_STATUS, "ab", GETGETServiceLinkedRoleDeletionStatusVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "tempora";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "sequi";
            }};            

            GETGETServiceLinkedRoleDeletionStatusResponse res = sdk.sdk.getGETServiceLinkedRoleDeletionStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETUserActionEnum;
import org.openapis.openapi.models.operations.GETGETUserRequest;
import org.openapis.openapi.models.operations.GETGETUserResponse;
import org.openapis.openapi.models.operations.GETGETUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETUserRequest req = new GETGETUserRequest(GETGETUserActionEnum.GET_USER, GETGETUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Jaida71";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            GETGETUserResponse res = sdk.sdk.getGETUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETUserPolicyActionEnum;
import org.openapis.openapi.models.operations.GETGETUserPolicyRequest;
import org.openapis.openapi.models.operations.GETGETUserPolicyResponse;
import org.openapis.openapi.models.operations.GETGETUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETUserPolicyRequest req = new GETGETUserPolicyRequest(GETGETUserPolicyActionEnum.GET_USER_POLICY, "occaecati", "commodi", GETGETUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
            }};            

            GETGETUserPolicyResponse res = sdk.sdk.getGETUserPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAccessKeysActionEnum;
import org.openapis.openapi.models.operations.GETListAccessKeysRequest;
import org.openapis.openapi.models.operations.GETListAccessKeysResponse;
import org.openapis.openapi.models.operations.GETListAccessKeysVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAccessKeysRequest req = new GETListAccessKeysRequest(GETListAccessKeysActionEnum.LIST_ACCESS_KEYS, GETListAccessKeysVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "praesentium";
                maxItems = 159867L;
                userName = "Kailyn_Considine27";
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETListAccessKeysResponse res = sdk.sdk.getListAccessKeys(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAccountAliasesActionEnum;
import org.openapis.openapi.models.operations.GETListAccountAliasesRequest;
import org.openapis.openapi.models.operations.GETListAccountAliasesResponse;
import org.openapis.openapi.models.operations.GETListAccountAliasesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAccountAliasesRequest req = new GETListAccountAliasesRequest(GETListAccountAliasesActionEnum.LIST_ACCOUNT_ALIASES, GETListAccountAliasesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "explicabo";
                maxItems = 903984L;
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            GETListAccountAliasesResponse res = sdk.sdk.getListAccountAliases(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAttachedGroupPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListAttachedGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GETListAttachedGroupPoliciesResponse;
import org.openapis.openapi.models.operations.GETListAttachedGroupPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAttachedGroupPoliciesRequest req = new GETListAttachedGroupPoliciesRequest(GETListAttachedGroupPoliciesActionEnum.LIST_ATTACHED_GROUP_POLICIES, "quod", GETListAttachedGroupPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "nam";
                maxItems = 877131L;
                pathPrefix = "aliquid";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETListAttachedGroupPoliciesResponse res = sdk.sdk.getListAttachedGroupPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAttachedRolePoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListAttachedRolePoliciesRequest;
import org.openapis.openapi.models.operations.GETListAttachedRolePoliciesResponse;
import org.openapis.openapi.models.operations.GETListAttachedRolePoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAttachedRolePoliciesRequest req = new GETListAttachedRolePoliciesRequest(GETListAttachedRolePoliciesActionEnum.LIST_ATTACHED_ROLE_POLICIES, "distinctio", GETListAttachedRolePoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "eligendi";
                maxItems = 27069L;
                pathPrefix = "culpa";
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cumque";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quaerat";
            }};            

            GETListAttachedRolePoliciesResponse res = sdk.sdk.getListAttachedRolePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAttachedUserPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListAttachedUserPoliciesRequest;
import org.openapis.openapi.models.operations.GETListAttachedUserPoliciesResponse;
import org.openapis.openapi.models.operations.GETListAttachedUserPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAttachedUserPoliciesRequest req = new GETListAttachedUserPoliciesRequest(GETListAttachedUserPoliciesActionEnum.LIST_ATTACHED_USER_POLICIES, "consectetur", GETListAttachedUserPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "esse";
                maxItems = 503427L;
                pathPrefix = "provident";
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "quas";
                xAmzDate = "esse";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "a";
                xAmzSignedHeaders = "error";
            }};            

            GETListAttachedUserPoliciesResponse res = sdk.sdk.getListAttachedUserPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyActionEnum;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyEntityFilterEnum;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyPolicyUsageFilterEnum;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyRequest;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyResponse;
import org.openapis.openapi.models.operations.GETListEntitiesForPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListEntitiesForPolicyRequest req = new GETListEntitiesForPolicyRequest(GETListEntitiesForPolicyActionEnum.LIST_ENTITIES_FOR_POLICY, "pariatur", GETListEntitiesForPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                entityFilter = GETListEntitiesForPolicyEntityFilterEnum.AWS_MANAGED_POLICY;
                marker = "quia";
                maxItems = 908844L;
                pathPrefix = "asperiores";
                policyUsageFilter = GETListEntitiesForPolicyPolicyUsageFilterEnum.PERMISSIONS_BOUNDARY;
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "quasi";
                xAmzDate = "similique";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETListEntitiesForPolicyResponse res = sdk.sdk.getListEntitiesForPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListGroupPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GETListGroupPoliciesResponse;
import org.openapis.openapi.models.operations.GETListGroupPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListGroupPoliciesRequest req = new GETListGroupPoliciesRequest(GETListGroupPoliciesActionEnum.LIST_GROUP_POLICIES, "earum", GETListGroupPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "vel";
                maxItems = 447378L;
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETListGroupPoliciesResponse res = sdk.sdk.getListGroupPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListGroupsActionEnum;
import org.openapis.openapi.models.operations.GETListGroupsRequest;
import org.openapis.openapi.models.operations.GETListGroupsResponse;
import org.openapis.openapi.models.operations.GETListGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListGroupsRequest req = new GETListGroupsRequest(GETListGroupsActionEnum.LIST_GROUPS, GETListGroupsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "ullam";
                maxItems = 443879L;
                pathPrefix = "ullam";
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETListGroupsResponse res = sdk.sdk.getListGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListGroupsForUserActionEnum;
import org.openapis.openapi.models.operations.GETListGroupsForUserRequest;
import org.openapis.openapi.models.operations.GETListGroupsForUserResponse;
import org.openapis.openapi.models.operations.GETListGroupsForUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListGroupsForUserRequest req = new GETListGroupsForUserRequest(GETListGroupsForUserActionEnum.LIST_GROUPS_FOR_USER, "dolorum", GETListGroupsForUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "architecto";
                maxItems = 609178L;
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "at";
                xAmzDate = "et";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "minima";
            }};            

            GETListGroupsForUserResponse res = sdk.sdk.getListGroupsForUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListInstanceProfileTagsActionEnum;
import org.openapis.openapi.models.operations.GETListInstanceProfileTagsRequest;
import org.openapis.openapi.models.operations.GETListInstanceProfileTagsResponse;
import org.openapis.openapi.models.operations.GETListInstanceProfileTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListInstanceProfileTagsRequest req = new GETListInstanceProfileTagsRequest(GETListInstanceProfileTagsActionEnum.LIST_INSTANCE_PROFILE_TAGS, "consectetur", GETListInstanceProfileTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "adipisci";
                maxItems = 614465L;
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "rem";
                xAmzDate = "aut";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "mollitia";
            }};            

            GETListInstanceProfileTagsResponse res = sdk.sdk.getListInstanceProfileTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListInstanceProfilesActionEnum;
import org.openapis.openapi.models.operations.GETListInstanceProfilesRequest;
import org.openapis.openapi.models.operations.GETListInstanceProfilesResponse;
import org.openapis.openapi.models.operations.GETListInstanceProfilesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListInstanceProfilesRequest req = new GETListInstanceProfilesRequest(GETListInstanceProfilesActionEnum.LIST_INSTANCE_PROFILES, GETListInstanceProfilesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "corrupti";
                maxItems = 251941L;
                pathPrefix = "voluptatem";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "impedit";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "aut";
            }};            

            GETListInstanceProfilesResponse res = sdk.sdk.getListInstanceProfiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListInstanceProfilesForRoleActionEnum;
import org.openapis.openapi.models.operations.GETListInstanceProfilesForRoleRequest;
import org.openapis.openapi.models.operations.GETListInstanceProfilesForRoleResponse;
import org.openapis.openapi.models.operations.GETListInstanceProfilesForRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListInstanceProfilesForRoleRequest req = new GETListInstanceProfilesForRoleRequest(GETListInstanceProfilesForRoleActionEnum.LIST_INSTANCE_PROFILES_FOR_ROLE, "dicta", GETListInstanceProfilesForRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "maiores";
                maxItems = 618480L;
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quaerat";
            }};            

            GETListInstanceProfilesForRoleResponse res = sdk.sdk.getListInstanceProfilesForRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListMFADeviceTagsActionEnum;
import org.openapis.openapi.models.operations.GETListMFADeviceTagsRequest;
import org.openapis.openapi.models.operations.GETListMFADeviceTagsResponse;
import org.openapis.openapi.models.operations.GETListMFADeviceTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListMFADeviceTagsRequest req = new GETListMFADeviceTagsRequest(GETListMFADeviceTagsActionEnum.LIST_MFA_DEVICE_TAGS, "repellendus", GETListMFADeviceTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "officia";
                maxItems = 807023L;
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
            }};            

            GETListMFADeviceTagsResponse res = sdk.sdk.getListMFADeviceTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListMFADevicesActionEnum;
import org.openapis.openapi.models.operations.GETListMFADevicesRequest;
import org.openapis.openapi.models.operations.GETListMFADevicesResponse;
import org.openapis.openapi.models.operations.GETListMFADevicesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListMFADevicesRequest req = new GETListMFADevicesRequest(GETListMFADevicesActionEnum.LIST_MFA_DEVICES, GETListMFADevicesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "labore";
                maxItems = 70447L;
                userName = "Dayton.Paucek";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "est";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "totam";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "vel";
            }};            

            GETListMFADevicesResponse res = sdk.sdk.getListMFADevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProviderTagsActionEnum;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProviderTagsRequest;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProviderTagsResponse;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProviderTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListOpenIDConnectProviderTagsRequest req = new GETListOpenIDConnectProviderTagsRequest(GETListOpenIDConnectProviderTagsActionEnum.LIST_OPEN_ID_CONNECT_PROVIDER_TAGS, "quos", GETListOpenIDConnectProviderTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "vel";
                maxItems = 287051L;
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cum";
                xAmzDate = "commodi";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETListOpenIDConnectProviderTagsResponse res = sdk.sdk.getListOpenIDConnectProviderTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProvidersActionEnum;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProvidersRequest;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProvidersResponse;
import org.openapis.openapi.models.operations.GETListOpenIDConnectProvidersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListOpenIDConnectProvidersRequest req = new GETListOpenIDConnectProvidersRequest(GETListOpenIDConnectProvidersActionEnum.LIST_OPEN_ID_CONNECT_PROVIDERS, GETListOpenIDConnectProvidersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aliquid";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "cum";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "in";
            }};            

            GETListOpenIDConnectProvidersResponse res = sdk.sdk.getListOpenIDConnectProviders(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListPoliciesPolicyUsageFilterEnum;
import org.openapis.openapi.models.operations.GETListPoliciesRequest;
import org.openapis.openapi.models.operations.GETListPoliciesResponse;
import org.openapis.openapi.models.operations.GETListPoliciesScopeEnum;
import org.openapis.openapi.models.operations.GETListPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListPoliciesRequest req = new GETListPoliciesRequest(GETListPoliciesActionEnum.LIST_POLICIES, GETListPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "earum";
                maxItems = 814967L;
                onlyAttached = false;
                pathPrefix = "numquam";
                policyUsageFilter = GETListPoliciesPolicyUsageFilterEnum.PERMISSIONS_BOUNDARY;
                scope = GETListPoliciesScopeEnum.AWS;
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "saepe";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "asperiores";
            }};            

            GETListPoliciesResponse res = sdk.sdk.getListPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListPoliciesGrantingServiceAccessActionEnum;
import org.openapis.openapi.models.operations.GETListPoliciesGrantingServiceAccessRequest;
import org.openapis.openapi.models.operations.GETListPoliciesGrantingServiceAccessResponse;
import org.openapis.openapi.models.operations.GETListPoliciesGrantingServiceAccessVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListPoliciesGrantingServiceAccessRequest req = new GETListPoliciesGrantingServiceAccessRequest(GETListPoliciesGrantingServiceAccessActionEnum.LIST_POLICIES_GRANTING_SERVICE_ACCESS, "non",                 new String[]{{
                                add("beatae"),
                            }}, GETListPoliciesGrantingServiceAccessVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "dignissimos";
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "consectetur";
                xAmzDate = "corporis";
                xAmzSecurityToken = "harum";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "ipsa";
            }};            

            GETListPoliciesGrantingServiceAccessResponse res = sdk.sdk.getListPoliciesGrantingServiceAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListPolicyTagsActionEnum;
import org.openapis.openapi.models.operations.GETListPolicyTagsRequest;
import org.openapis.openapi.models.operations.GETListPolicyTagsResponse;
import org.openapis.openapi.models.operations.GETListPolicyTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListPolicyTagsRequest req = new GETListPolicyTagsRequest(GETListPolicyTagsActionEnum.LIST_POLICY_TAGS, "libero", GETListPolicyTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "vitae";
                maxItems = 881721L;
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            GETListPolicyTagsResponse res = sdk.sdk.getListPolicyTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListPolicyVersionsActionEnum;
import org.openapis.openapi.models.operations.GETListPolicyVersionsRequest;
import org.openapis.openapi.models.operations.GETListPolicyVersionsResponse;
import org.openapis.openapi.models.operations.GETListPolicyVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListPolicyVersionsRequest req = new GETListPolicyVersionsRequest(GETListPolicyVersionsActionEnum.LIST_POLICY_VERSIONS, "dolorum", GETListPolicyVersionsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "adipisci";
                maxItems = 795535L;
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "in";
                xAmzDate = "dolore";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "temporibus";
            }};            

            GETListPolicyVersionsResponse res = sdk.sdk.getListPolicyVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListRolePoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListRolePoliciesRequest;
import org.openapis.openapi.models.operations.GETListRolePoliciesResponse;
import org.openapis.openapi.models.operations.GETListRolePoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListRolePoliciesRequest req = new GETListRolePoliciesRequest(GETListRolePoliciesActionEnum.LIST_ROLE_POLICIES, "adipisci", GETListRolePoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "cum";
                maxItems = 502389L;
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "hic";
                xAmzCredential = "nesciunt";
                xAmzDate = "culpa";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "totam";
            }};            

            GETListRolePoliciesResponse res = sdk.sdk.getListRolePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListRoleTagsActionEnum;
import org.openapis.openapi.models.operations.GETListRoleTagsRequest;
import org.openapis.openapi.models.operations.GETListRoleTagsResponse;
import org.openapis.openapi.models.operations.GETListRoleTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListRoleTagsRequest req = new GETListRoleTagsRequest(GETListRoleTagsActionEnum.LIST_ROLE_TAGS, "exercitationem", GETListRoleTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "nobis";
                maxItems = 24619L;
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETListRoleTagsResponse res = sdk.sdk.getListRoleTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListRolesActionEnum;
import org.openapis.openapi.models.operations.GETListRolesRequest;
import org.openapis.openapi.models.operations.GETListRolesResponse;
import org.openapis.openapi.models.operations.GETListRolesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListRolesRequest req = new GETListRolesRequest(GETListRolesActionEnum.LIST_ROLES, GETListRolesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "ab";
                maxItems = 611749L;
                pathPrefix = "dolore";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "in";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "voluptas";
            }};            

            GETListRolesResponse res = sdk.sdk.getListRoles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListSAMLProviderTagsActionEnum;
import org.openapis.openapi.models.operations.GETListSAMLProviderTagsRequest;
import org.openapis.openapi.models.operations.GETListSAMLProviderTagsResponse;
import org.openapis.openapi.models.operations.GETListSAMLProviderTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListSAMLProviderTagsRequest req = new GETListSAMLProviderTagsRequest(GETListSAMLProviderTagsActionEnum.LIST_SAML_PROVIDER_TAGS, "architecto", GETListSAMLProviderTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "suscipit";
                maxItems = 960257L;
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "illo";
                xAmzCredential = "reiciendis";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "incidunt";
            }};            

            GETListSAMLProviderTagsResponse res = sdk.sdk.getListSAMLProviderTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListSAMLProvidersActionEnum;
import org.openapis.openapi.models.operations.GETListSAMLProvidersRequest;
import org.openapis.openapi.models.operations.GETListSAMLProvidersResponse;
import org.openapis.openapi.models.operations.GETListSAMLProvidersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListSAMLProvidersRequest req = new GETListSAMLProvidersRequest(GETListSAMLProvidersActionEnum.LIST_SAML_PROVIDERS, GETListSAMLProvidersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            GETListSAMLProvidersResponse res = sdk.sdk.getListSAMLProviders(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListSSHPublicKeysActionEnum;
import org.openapis.openapi.models.operations.GETListSSHPublicKeysRequest;
import org.openapis.openapi.models.operations.GETListSSHPublicKeysResponse;
import org.openapis.openapi.models.operations.GETListSSHPublicKeysVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListSSHPublicKeysRequest req = new GETListSSHPublicKeysRequest(GETListSSHPublicKeysActionEnum.LIST_SSH_PUBLIC_KEYS, GETListSSHPublicKeysVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "tempora";
                maxItems = 273009L;
                userName = "Jacklyn.Wisozk";
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "praesentium";
                xAmzDate = "facilis";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "ipsam";
            }};            

            GETListSSHPublicKeysResponse res = sdk.sdk.getListSSHPublicKeys(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListServerCertificateTagsActionEnum;
import org.openapis.openapi.models.operations.GETListServerCertificateTagsRequest;
import org.openapis.openapi.models.operations.GETListServerCertificateTagsResponse;
import org.openapis.openapi.models.operations.GETListServerCertificateTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListServerCertificateTagsRequest req = new GETListServerCertificateTagsRequest(GETListServerCertificateTagsActionEnum.LIST_SERVER_CERTIFICATE_TAGS, "rem", GETListServerCertificateTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "sit";
                maxItems = 750595L;
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "minima";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "magni";
            }};            

            GETListServerCertificateTagsResponse res = sdk.sdk.getListServerCertificateTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListServerCertificatesActionEnum;
import org.openapis.openapi.models.operations.GETListServerCertificatesRequest;
import org.openapis.openapi.models.operations.GETListServerCertificatesResponse;
import org.openapis.openapi.models.operations.GETListServerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListServerCertificatesRequest req = new GETListServerCertificatesRequest(GETListServerCertificatesActionEnum.LIST_SERVER_CERTIFICATES, GETListServerCertificatesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "saepe";
                maxItems = 253642L;
                pathPrefix = "veniam";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "beatae";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "cum";
            }};            

            GETListServerCertificatesResponse res = sdk.sdk.getListServerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListServiceSpecificCredentialsActionEnum;
import org.openapis.openapi.models.operations.GETListServiceSpecificCredentialsRequest;
import org.openapis.openapi.models.operations.GETListServiceSpecificCredentialsResponse;
import org.openapis.openapi.models.operations.GETListServiceSpecificCredentialsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListServiceSpecificCredentialsRequest req = new GETListServiceSpecificCredentialsRequest(GETListServiceSpecificCredentialsActionEnum.LIST_SERVICE_SPECIFIC_CREDENTIALS, GETListServiceSpecificCredentialsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                serviceName = "dolorum";
                userName = "Justice_Mueller89";
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "nostrum";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "accusamus";
            }};            

            GETListServiceSpecificCredentialsResponse res = sdk.sdk.getListServiceSpecificCredentials(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListSigningCertificatesActionEnum;
import org.openapis.openapi.models.operations.GETListSigningCertificatesRequest;
import org.openapis.openapi.models.operations.GETListSigningCertificatesResponse;
import org.openapis.openapi.models.operations.GETListSigningCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListSigningCertificatesRequest req = new GETListSigningCertificatesRequest(GETListSigningCertificatesActionEnum.LIST_SIGNING_CERTIFICATES, GETListSigningCertificatesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "atque";
                maxItems = 148268L;
                userName = "Easter63";
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "consequatur";
                xAmzDate = "esse";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "voluptatum";
            }};            

            GETListSigningCertificatesResponse res = sdk.sdk.getListSigningCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListUserPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListUserPoliciesRequest;
import org.openapis.openapi.models.operations.GETListUserPoliciesResponse;
import org.openapis.openapi.models.operations.GETListUserPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListUserPoliciesRequest req = new GETListUserPoliciesRequest(GETListUserPoliciesActionEnum.LIST_USER_POLICIES, "repudiandae", GETListUserPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "corporis";
                maxItems = 89494L;
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sed";
                xAmzDate = "sit";
                xAmzSecurityToken = "vel";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "saepe";
            }};            

            GETListUserPoliciesResponse res = sdk.sdk.getListUserPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListUserTagsActionEnum;
import org.openapis.openapi.models.operations.GETListUserTagsRequest;
import org.openapis.openapi.models.operations.GETListUserTagsResponse;
import org.openapis.openapi.models.operations.GETListUserTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListUserTagsRequest req = new GETListUserTagsRequest(GETListUserTagsActionEnum.LIST_USER_TAGS, "consequatur", GETListUserTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "incidunt";
                maxItems = 968865L;
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "harum";
                xAmzCredential = "dicta";
                xAmzDate = "architecto";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "quidem";
            }};            

            GETListUserTagsResponse res = sdk.sdk.getListUserTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListUsersActionEnum;
import org.openapis.openapi.models.operations.GETListUsersRequest;
import org.openapis.openapi.models.operations.GETListUsersResponse;
import org.openapis.openapi.models.operations.GETListUsersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListUsersRequest req = new GETListUsersRequest(GETListUsersActionEnum.LIST_USERS, GETListUsersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "laborum";
                maxItems = 724148L;
                pathPrefix = "tenetur";
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETListUsersResponse res = sdk.sdk.getListUsers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListVirtualMFADevicesActionEnum;
import org.openapis.openapi.models.operations.GETListVirtualMFADevicesAssignmentStatusEnum;
import org.openapis.openapi.models.operations.GETListVirtualMFADevicesRequest;
import org.openapis.openapi.models.operations.GETListVirtualMFADevicesResponse;
import org.openapis.openapi.models.operations.GETListVirtualMFADevicesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListVirtualMFADevicesRequest req = new GETListVirtualMFADevicesRequest(GETListVirtualMFADevicesActionEnum.LIST_VIRTUAL_MFA_DEVICES, GETListVirtualMFADevicesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                assignmentStatus = GETListVirtualMFADevicesAssignmentStatusEnum.ANY;
                marker = "delectus";
                maxItems = 914791L;
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "quidem";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "facere";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETListVirtualMFADevicesResponse res = sdk.sdk.getListVirtualMFADevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.GETPutGroupPolicyRequest;
import org.openapis.openapi.models.operations.GETPutGroupPolicyResponse;
import org.openapis.openapi.models.operations.GETPutGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutGroupPolicyRequest req = new GETPutGroupPolicyRequest(GETPutGroupPolicyActionEnum.PUT_GROUP_POLICY, "veniam", "voluptatem", "quisquam", GETPutGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "atque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETPutGroupPolicyResponse res = sdk.sdk.getPutGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutRolePermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.GETPutRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.GETPutRolePermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.GETPutRolePermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutRolePermissionsBoundaryRequest req = new GETPutRolePermissionsBoundaryRequest(GETPutRolePermissionsBoundaryActionEnum.PUT_ROLE_PERMISSIONS_BOUNDARY, "maxime", "et", GETPutRolePermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            GETPutRolePermissionsBoundaryResponse res = sdk.sdk.getPutRolePermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETPutRolePolicyRequest;
import org.openapis.openapi.models.operations.GETPutRolePolicyResponse;
import org.openapis.openapi.models.operations.GETPutRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutRolePolicyRequest req = new GETPutRolePolicyRequest(GETPutRolePolicyActionEnum.PUT_ROLE_POLICY, "accusamus", "natus", "minima", GETPutRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ex";
                xAmzCredential = "maiores";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "at";
                xAmzSignature = "error";
                xAmzSignedHeaders = "blanditiis";
            }};            

            GETPutRolePolicyResponse res = sdk.sdk.getPutRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutUserPermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.GETPutUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.GETPutUserPermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.GETPutUserPermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutUserPermissionsBoundaryRequest req = new GETPutUserPermissionsBoundaryRequest(GETPutUserPermissionsBoundaryActionEnum.PUT_USER_PERMISSIONS_BOUNDARY, "repudiandae", "atque", GETPutUserPermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "recusandae";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETPutUserPermissionsBoundaryResponse res = sdk.sdk.getPutUserPermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutUserPolicyActionEnum;
import org.openapis.openapi.models.operations.GETPutUserPolicyRequest;
import org.openapis.openapi.models.operations.GETPutUserPolicyResponse;
import org.openapis.openapi.models.operations.GETPutUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutUserPolicyRequest req = new GETPutUserPolicyRequest(GETPutUserPolicyActionEnum.PUT_USER_POLICY, "repudiandae", "dicta", "accusantium", GETPutUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "enim";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "velit";
                xAmzSignature = "a";
                xAmzSignedHeaders = "molestias";
            }};            

            GETPutUserPolicyResponse res = sdk.sdk.getPutUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveClientIDFromOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETRemoveClientIDFromOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETRemoveClientIDFromOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETRemoveClientIDFromOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveClientIDFromOpenIDConnectProviderRequest req = new GETRemoveClientIDFromOpenIDConnectProviderRequest(GETRemoveClientIDFromOpenIDConnectProviderActionEnum.REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER, "saepe", "consequuntur", GETRemoveClientIDFromOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "in";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETRemoveClientIDFromOpenIDConnectProviderResponse res = sdk.sdk.getRemoveClientIDFromOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveRoleFromInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.GETRemoveRoleFromInstanceProfileRequest;
import org.openapis.openapi.models.operations.GETRemoveRoleFromInstanceProfileResponse;
import org.openapis.openapi.models.operations.GETRemoveRoleFromInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveRoleFromInstanceProfileRequest req = new GETRemoveRoleFromInstanceProfileRequest(GETRemoveRoleFromInstanceProfileActionEnum.REMOVE_ROLE_FROM_INSTANCE_PROFILE, "fugit", "id", GETRemoveRoleFromInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "error";
                xAmzDate = "illo";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "eveniet";
            }};            

            GETRemoveRoleFromInstanceProfileResponse res = sdk.sdk.getRemoveRoleFromInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveUserFromGroup

Removes the specified user from the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveUserFromGroupActionEnum;
import org.openapis.openapi.models.operations.GETRemoveUserFromGroupRequest;
import org.openapis.openapi.models.operations.GETRemoveUserFromGroupResponse;
import org.openapis.openapi.models.operations.GETRemoveUserFromGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveUserFromGroupRequest req = new GETRemoveUserFromGroupRequest(GETRemoveUserFromGroupActionEnum.REMOVE_USER_FROM_GROUP, "vero", "doloremque", GETRemoveUserFromGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "totam";
                xAmzDate = "quae";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "qui";
            }};            

            GETRemoveUserFromGroupResponse res = sdk.sdk.getRemoveUserFromGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETResetServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.GETResetServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.GETResetServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.GETResetServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETResetServiceSpecificCredentialRequest req = new GETResetServiceSpecificCredentialRequest(GETResetServiceSpecificCredentialActionEnum.RESET_SERVICE_SPECIFIC_CREDENTIAL, "iure", GETResetServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Stan_Dibbert52";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "ad";
                xAmzDate = "repellat";
                xAmzSecurityToken = "alias";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            GETResetServiceSpecificCredentialResponse res = sdk.sdk.getResetServiceSpecificCredential(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETResyncMFADeviceActionEnum;
import org.openapis.openapi.models.operations.GETResyncMFADeviceRequest;
import org.openapis.openapi.models.operations.GETResyncMFADeviceResponse;
import org.openapis.openapi.models.operations.GETResyncMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETResyncMFADeviceRequest req = new GETResyncMFADeviceRequest(GETResyncMFADeviceActionEnum.RESYNC_MFA_DEVICE, "mollitia", "voluptas", "alias", "maiores", GETResyncMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "id";
                xAmzDate = "minima";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "nesciunt";
            }};            

            GETResyncMFADeviceResponse res = sdk.sdk.getResyncMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetDefaultPolicyVersionActionEnum;
import org.openapis.openapi.models.operations.GETSetDefaultPolicyVersionRequest;
import org.openapis.openapi.models.operations.GETSetDefaultPolicyVersionResponse;
import org.openapis.openapi.models.operations.GETSetDefaultPolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetDefaultPolicyVersionRequest req = new GETSetDefaultPolicyVersionRequest(GETSetDefaultPolicyVersionActionEnum.SET_DEFAULT_POLICY_VERSION, "recusandae", GETSetDefaultPolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508, "omnis") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "ex";
                xAmzDate = "ut";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "debitis";
            }};            

            GETSetDefaultPolicyVersionResponse res = sdk.sdk.getSetDefaultPolicyVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetSecurityTokenServicePreferencesActionEnum;
import org.openapis.openapi.models.operations.GETSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;
import org.openapis.openapi.models.operations.GETSetSecurityTokenServicePreferencesRequest;
import org.openapis.openapi.models.operations.GETSetSecurityTokenServicePreferencesResponse;
import org.openapis.openapi.models.operations.GETSetSecurityTokenServicePreferencesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetSecurityTokenServicePreferencesRequest req = new GETSetSecurityTokenServicePreferencesRequest(GETSetSecurityTokenServicePreferencesActionEnum.SET_SECURITY_TOKEN_SERVICE_PREFERENCES, GETSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum.V1_TOKEN, GETSetSecurityTokenServicePreferencesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "esse";
                xAmzDate = "provident";
                xAmzSecurityToken = "quis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETSetSecurityTokenServicePreferencesResponse res = sdk.sdk.getSetSecurityTokenServicePreferences(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.GETUntagInstanceProfileRequest;
import org.openapis.openapi.models.operations.GETUntagInstanceProfileResponse;
import org.openapis.openapi.models.operations.GETUntagInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagInstanceProfileRequest req = new GETUntagInstanceProfileRequest(GETUntagInstanceProfileActionEnum.UNTAG_INSTANCE_PROFILE, "aspernatur",                 new String[]{{
                                add("quasi"),
                                add("animi"),
                            }}, GETUntagInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "provident";
                xAmzDate = "possimus";
                xAmzSecurityToken = "animi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETUntagInstanceProfileResponse res = sdk.sdk.getUntagInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagMFADeviceActionEnum;
import org.openapis.openapi.models.operations.GETUntagMFADeviceRequest;
import org.openapis.openapi.models.operations.GETUntagMFADeviceResponse;
import org.openapis.openapi.models.operations.GETUntagMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagMFADeviceRequest req = new GETUntagMFADeviceRequest(GETUntagMFADeviceActionEnum.UNTAG_MFA_DEVICE, "repellat",                 new String[]{{
                                add("ullam"),
                                add("in"),
                                add("nam"),
                                add("earum"),
                            }}, GETUntagMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "modi";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "officiis";
            }};            

            GETUntagMFADeviceResponse res = sdk.sdk.getUntagMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.GETUntagOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.GETUntagOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.GETUntagOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagOpenIDConnectProviderRequest req = new GETUntagOpenIDConnectProviderRequest(GETUntagOpenIDConnectProviderActionEnum.UNTAG_OPEN_ID_CONNECT_PROVIDER, "cumque",                 new String[]{{
                                add("rerum"),
                            }}, GETUntagOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "quis";
                xAmzCredential = "inventore";
                xAmzDate = "fugit";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETUntagOpenIDConnectProviderResponse res = sdk.sdk.getUntagOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagPolicyActionEnum;
import org.openapis.openapi.models.operations.GETUntagPolicyRequest;
import org.openapis.openapi.models.operations.GETUntagPolicyResponse;
import org.openapis.openapi.models.operations.GETUntagPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagPolicyRequest req = new GETUntagPolicyRequest(GETUntagPolicyActionEnum.UNTAG_POLICY, "aspernatur",                 new String[]{{
                                add("eius"),
                                add("rem"),
                            }}, GETUntagPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "eos";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "minima";
            }};            

            GETUntagPolicyResponse res = sdk.sdk.getUntagPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagRoleActionEnum;
import org.openapis.openapi.models.operations.GETUntagRoleRequest;
import org.openapis.openapi.models.operations.GETUntagRoleResponse;
import org.openapis.openapi.models.operations.GETUntagRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagRoleRequest req = new GETUntagRoleRequest(GETUntagRoleActionEnum.UNTAG_ROLE, "cupiditate",                 new String[]{{
                                add("earum"),
                                add("soluta"),
                                add("hic"),
                            }}, GETUntagRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "earum";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETUntagRoleResponse res = sdk.sdk.getUntagRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.GETUntagSAMLProviderRequest;
import org.openapis.openapi.models.operations.GETUntagSAMLProviderResponse;
import org.openapis.openapi.models.operations.GETUntagSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagSAMLProviderRequest req = new GETUntagSAMLProviderRequest(GETUntagSAMLProviderActionEnum.UNTAG_SAML_PROVIDER, "suscipit",                 new String[]{{
                                add("fugit"),
                            }}, GETUntagSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "ratione";
                xAmzDate = "animi";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "consequatur";
            }};            

            GETUntagSAMLProviderResponse res = sdk.sdk.getUntagSAMLProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagServerCertificateActionEnum;
import org.openapis.openapi.models.operations.GETUntagServerCertificateRequest;
import org.openapis.openapi.models.operations.GETUntagServerCertificateResponse;
import org.openapis.openapi.models.operations.GETUntagServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagServerCertificateRequest req = new GETUntagServerCertificateRequest(GETUntagServerCertificateActionEnum.UNTAG_SERVER_CERTIFICATE, "et",                 new String[]{{
                                add("natus"),
                                add("occaecati"),
                            }}, GETUntagServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "quasi";
                xAmzDate = "magni";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETUntagServerCertificateResponse res = sdk.sdk.getUntagServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUntagUserActionEnum;
import org.openapis.openapi.models.operations.GETUntagUserRequest;
import org.openapis.openapi.models.operations.GETUntagUserResponse;
import org.openapis.openapi.models.operations.GETUntagUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUntagUserRequest req = new GETUntagUserRequest(GETUntagUserActionEnum.UNTAG_USER,                 new String[]{{
                                add("nihil"),
                                add("molestiae"),
                            }}, "dicta", GETUntagUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "esse";
                xAmzCredential = "praesentium";
                xAmzDate = "maiores";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "architecto";
            }};            

            GETUntagUserResponse res = sdk.sdk.getUntagUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAccessKeyActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAccessKeyRequest;
import org.openapis.openapi.models.operations.GETUpdateAccessKeyResponse;
import org.openapis.openapi.models.operations.GETUpdateAccessKeyStatusEnum;
import org.openapis.openapi.models.operations.GETUpdateAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAccessKeyRequest req = new GETUpdateAccessKeyRequest("doloremque", GETUpdateAccessKeyActionEnum.UPDATE_ACCESS_KEY, GETUpdateAccessKeyStatusEnum.ACTIVE, GETUpdateAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Jayson.Goldner";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "ipsa";
                xAmzDate = "laborum";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "fugiat";
            }};            

            GETUpdateAccessKeyResponse res = sdk.sdk.getUpdateAccessKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.GETUpdateAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.GETUpdateAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAccountPasswordPolicyRequest req = new GETUpdateAccountPasswordPolicyRequest(GETUpdateAccountPasswordPolicyActionEnum.UPDATE_ACCOUNT_PASSWORD_POLICY, GETUpdateAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                allowUsersToChangePassword = false;
                hardExpiry = false;
                maxPasswordAge = 399667L;
                minimumPasswordLength = 639187L;
                passwordReusePrevention = 381397L;
                requireLowercaseCharacters = false;
                requireNumbers = false;
                requireSymbols = false;
                requireUppercaseCharacters = false;
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "eum";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "iste";
                xAmzSignature = "id";
                xAmzSignedHeaders = "ab";
            }};            

            GETUpdateAccountPasswordPolicyResponse res = sdk.sdk.getUpdateAccountPasswordPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAssumeRolePolicyActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAssumeRolePolicyRequest;
import org.openapis.openapi.models.operations.GETUpdateAssumeRolePolicyResponse;
import org.openapis.openapi.models.operations.GETUpdateAssumeRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAssumeRolePolicyRequest req = new GETUpdateAssumeRolePolicyRequest(GETUpdateAssumeRolePolicyActionEnum.UPDATE_ASSUME_ROLE_POLICY, "possimus", "voluptates", GETUpdateAssumeRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "libero";
                xAmzDate = "ad";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "vitae";
            }};            

            GETUpdateAssumeRolePolicyResponse res = sdk.sdk.getUpdateAssumeRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateGroupActionEnum;
import org.openapis.openapi.models.operations.GETUpdateGroupRequest;
import org.openapis.openapi.models.operations.GETUpdateGroupResponse;
import org.openapis.openapi.models.operations.GETUpdateGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateGroupRequest req = new GETUpdateGroupRequest(GETUpdateGroupActionEnum.UPDATE_GROUP, "ex", GETUpdateGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                newGroupName = "quo";
                newPath = "ex";
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "ad";
                xAmzCredential = "expedita";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETUpdateGroupResponse res = sdk.sdk.getUpdateGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateLoginProfileActionEnum;
import org.openapis.openapi.models.operations.GETUpdateLoginProfileRequest;
import org.openapis.openapi.models.operations.GETUpdateLoginProfileResponse;
import org.openapis.openapi.models.operations.GETUpdateLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateLoginProfileRequest req = new GETUpdateLoginProfileRequest(GETUpdateLoginProfileActionEnum.UPDATE_LOGIN_PROFILE, "voluptatum", GETUpdateLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                password = "omnis";
                passwordResetRequired = false;
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "est";
                xAmzDate = "culpa";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "officiis";
            }};            

            GETUpdateLoginProfileResponse res = sdk.sdk.getUpdateLoginProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateOpenIDConnectProviderThumbprintActionEnum;
import org.openapis.openapi.models.operations.GETUpdateOpenIDConnectProviderThumbprintRequest;
import org.openapis.openapi.models.operations.GETUpdateOpenIDConnectProviderThumbprintResponse;
import org.openapis.openapi.models.operations.GETUpdateOpenIDConnectProviderThumbprintVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateOpenIDConnectProviderThumbprintRequest req = new GETUpdateOpenIDConnectProviderThumbprintRequest(GETUpdateOpenIDConnectProviderThumbprintActionEnum.UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT, "fuga",                 new String[]{{
                                add("debitis"),
                                add("voluptatem"),
                                add("alias"),
                                add("deleniti"),
                            }}, GETUpdateOpenIDConnectProviderThumbprintVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sapiente";
                xAmzDate = "rem";
                xAmzSecurityToken = "minus";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "asperiores";
            }};            

            GETUpdateOpenIDConnectProviderThumbprintResponse res = sdk.sdk.getUpdateOpenIDConnectProviderThumbprint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateRole

Updates the description or maximum session duration setting of a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateRoleActionEnum;
import org.openapis.openapi.models.operations.GETUpdateRoleRequest;
import org.openapis.openapi.models.operations.GETUpdateRoleResponse;
import org.openapis.openapi.models.operations.GETUpdateRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateRoleRequest req = new GETUpdateRoleRequest(GETUpdateRoleActionEnum.UPDATE_ROLE, "ullam", GETUpdateRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                description = "perferendis";
                maxSessionDuration = 848341L;
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "quibusdam";
                xAmzDate = "nam";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "dolor";
            }};            

            GETUpdateRoleResponse res = sdk.sdk.getUpdateRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateRoleDescriptionActionEnum;
import org.openapis.openapi.models.operations.GETUpdateRoleDescriptionRequest;
import org.openapis.openapi.models.operations.GETUpdateRoleDescriptionResponse;
import org.openapis.openapi.models.operations.GETUpdateRoleDescriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateRoleDescriptionRequest req = new GETUpdateRoleDescriptionRequest(GETUpdateRoleDescriptionActionEnum.UPDATE_ROLE_DESCRIPTION, "inventore", "deleniti", GETUpdateRoleDescriptionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "dolor";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "modi";
            }};            

            GETUpdateRoleDescriptionResponse res = sdk.sdk.getUpdateRoleDescription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.GETUpdateSAMLProviderRequest;
import org.openapis.openapi.models.operations.GETUpdateSAMLProviderResponse;
import org.openapis.openapi.models.operations.GETUpdateSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateSAMLProviderRequest req = new GETUpdateSAMLProviderRequest(GETUpdateSAMLProviderActionEnum.UPDATE_SAML_PROVIDER, "ab", "laudantium", GETUpdateSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "fugiat";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "quas";
            }};            

            GETUpdateSAMLProviderResponse res = sdk.sdk.getUpdateSAMLProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.GETUpdateSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.GETUpdateSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.GETUpdateSSHPublicKeyStatusEnum;
import org.openapis.openapi.models.operations.GETUpdateSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateSSHPublicKeyRequest req = new GETUpdateSSHPublicKeyRequest(GETUpdateSSHPublicKeyActionEnum.UPDATE_SSH_PUBLIC_KEY, "impedit", GETUpdateSSHPublicKeyStatusEnum.INACTIVE, "esse", GETUpdateSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "veniam";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vel";
            }};            

            GETUpdateSSHPublicKeyResponse res = sdk.sdk.getUpdateSSHPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateServerCertificateActionEnum;
import org.openapis.openapi.models.operations.GETUpdateServerCertificateRequest;
import org.openapis.openapi.models.operations.GETUpdateServerCertificateResponse;
import org.openapis.openapi.models.operations.GETUpdateServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateServerCertificateRequest req = new GETUpdateServerCertificateRequest(GETUpdateServerCertificateActionEnum.UPDATE_SERVER_CERTIFICATE, "magnam", GETUpdateServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                newPath = "exercitationem";
                newServerCertificateName = "ab";
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nobis";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "voluptatem";
            }};            

            GETUpdateServerCertificateResponse res = sdk.sdk.getUpdateServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.GETUpdateServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.GETUpdateServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.GETUpdateServiceSpecificCredentialStatusEnum;
import org.openapis.openapi.models.operations.GETUpdateServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateServiceSpecificCredentialRequest req = new GETUpdateServiceSpecificCredentialRequest(GETUpdateServiceSpecificCredentialActionEnum.UPDATE_SERVICE_SPECIFIC_CREDENTIAL, "necessitatibus", GETUpdateServiceSpecificCredentialStatusEnum.ACTIVE, GETUpdateServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Gladys_Swaniawski69";
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "repudiandae";
                xAmzDate = "optio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETUpdateServiceSpecificCredentialResponse res = sdk.sdk.getUpdateServiceSpecificCredential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.GETUpdateSigningCertificateRequest;
import org.openapis.openapi.models.operations.GETUpdateSigningCertificateResponse;
import org.openapis.openapi.models.operations.GETUpdateSigningCertificateStatusEnum;
import org.openapis.openapi.models.operations.GETUpdateSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateSigningCertificateRequest req = new GETUpdateSigningCertificateRequest(GETUpdateSigningCertificateActionEnum.UPDATE_SIGNING_CERTIFICATE, "officia", GETUpdateSigningCertificateStatusEnum.ACTIVE, GETUpdateSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Deontae.Hickle";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "nesciunt";
                xAmzDate = "fuga";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "quasi";
            }};            

            GETUpdateSigningCertificateResponse res = sdk.sdk.getUpdateSigningCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateUserActionEnum;
import org.openapis.openapi.models.operations.GETUpdateUserRequest;
import org.openapis.openapi.models.operations.GETUpdateUserResponse;
import org.openapis.openapi.models.operations.GETUpdateUserVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateUserRequest req = new GETUpdateUserRequest(GETUpdateUserActionEnum.UPDATE_USER, "fugiat", GETUpdateUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                newPath = "dicta";
                newUserName = "nisi";
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "aperiam";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "alias";
            }};            

            GETUpdateUserResponse res = sdk.sdk.getUpdateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUploadSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.GETUploadSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.GETUploadSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.GETUploadSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUploadSSHPublicKeyRequest req = new GETUploadSSHPublicKeyRequest(GETUploadSSHPublicKeyActionEnum.UPLOAD_SSH_PUBLIC_KEY, "eos", "occaecati", GETUploadSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "magni";
                xAmzCredential = "inventore";
                xAmzDate = "fuga";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETUploadSSHPublicKeyResponse res = sdk.sdk.getUploadSSHPublicKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUploadSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.GETUploadSigningCertificateRequest;
import org.openapis.openapi.models.operations.GETUploadSigningCertificateResponse;
import org.openapis.openapi.models.operations.GETUploadSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUploadSigningCertificateRequest req = new GETUploadSigningCertificateRequest(GETUploadSigningCertificateActionEnum.UPLOAD_SIGNING_CERTIFICATE, "delectus", GETUploadSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                userName = "Erling.Lang83";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "itaque";
                xAmzDate = "commodi";
                xAmzSecurityToken = "totam";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            GETUploadSigningCertificateResponse res = sdk.sdk.getUploadSigningCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddClientIDToOpenIDConnectProvider

<p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddClientIDToOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTAddClientIDToOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTAddClientIDToOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTAddClientIDToOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.AddClientIDToOpenIDConnectProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddClientIDToOpenIDConnectProviderRequest req = new POSTAddClientIDToOpenIDConnectProviderRequest(POSTAddClientIDToOpenIDConnectProviderActionEnum.ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER, POSTAddClientIDToOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "vero".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "vel";
                xAmzDate = "alias";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "non";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTAddClientIDToOpenIDConnectProviderResponse res = sdk.sdk.postAddClientIDToOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddRoleToInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTAddRoleToInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTAddRoleToInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTAddRoleToInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.AddRoleToInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddRoleToInstanceProfileRequest req = new POSTAddRoleToInstanceProfileRequest(POSTAddRoleToInstanceProfileActionEnum.ADD_ROLE_TO_INSTANCE_PROFILE, POSTAddRoleToInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "esse";
                xAmzDate = "nemo";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quis";
            }};            

            POSTAddRoleToInstanceProfileResponse res = sdk.sdk.postAddRoleToInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddUserToGroup

Adds the specified user to the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddUserToGroupActionEnum;
import org.openapis.openapi.models.operations.POSTAddUserToGroupRequest;
import org.openapis.openapi.models.operations.POSTAddUserToGroupResponse;
import org.openapis.openapi.models.operations.POSTAddUserToGroupVersionEnum;
import org.openapis.openapi.models.shared.AddUserToGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddUserToGroupRequest req = new POSTAddUserToGroupRequest(POSTAddUserToGroupActionEnum.ADD_USER_TO_GROUP, POSTAddUserToGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "hic";
                xAmzCredential = "necessitatibus";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "ex";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTAddUserToGroupResponse res = sdk.sdk.postAddUserToGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTAttachGroupPolicyRequest;
import org.openapis.openapi.models.operations.POSTAttachGroupPolicyResponse;
import org.openapis.openapi.models.operations.POSTAttachGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.AttachGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachGroupPolicyRequest req = new POSTAttachGroupPolicyRequest(POSTAttachGroupPolicyActionEnum.ATTACH_GROUP_POLICY, POSTAttachGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "laborum";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "velit";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTAttachGroupPolicyResponse res = sdk.sdk.postAttachGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTAttachRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTAttachRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTAttachRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.AttachRolePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachRolePolicyRequest req = new POSTAttachRolePolicyRequest(POSTAttachRolePolicyActionEnum.ATTACH_ROLE_POLICY, POSTAttachRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "nam";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "sequi";
            }};            

            POSTAttachRolePolicyResponse res = sdk.sdk.postAttachRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachUserPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTAttachUserPolicyRequest;
import org.openapis.openapi.models.operations.POSTAttachUserPolicyResponse;
import org.openapis.openapi.models.operations.POSTAttachUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.AttachUserPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachUserPolicyRequest req = new POSTAttachUserPolicyRequest(POSTAttachUserPolicyActionEnum.ATTACH_USER_POLICY, POSTAttachUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "quibusdam";
                xAmzDate = "iure";
                xAmzSecurityToken = "odit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vel";
            }};            

            POSTAttachUserPolicyResponse res = sdk.sdk.postAttachUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTChangePasswordActionEnum;
import org.openapis.openapi.models.operations.POSTChangePasswordRequest;
import org.openapis.openapi.models.operations.POSTChangePasswordResponse;
import org.openapis.openapi.models.operations.POSTChangePasswordVersionEnum;
import org.openapis.openapi.models.shared.ChangePasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTChangePasswordRequest req = new POSTChangePasswordRequest(POSTChangePasswordActionEnum.CHANGE_PASSWORD, POSTChangePasswordVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quibusdam".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "facere";
                xAmzCredential = "libero";
                xAmzDate = "architecto";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "porro";
            }};            

            POSTChangePasswordResponse res = sdk.sdk.postChangePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateAccessKeyActionEnum;
import org.openapis.openapi.models.operations.POSTCreateAccessKeyRequest;
import org.openapis.openapi.models.operations.POSTCreateAccessKeyResponse;
import org.openapis.openapi.models.operations.POSTCreateAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.CreateAccessKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateAccessKeyRequest req = new POSTCreateAccessKeyRequest(POSTCreateAccessKeyActionEnum.CREATE_ACCESS_KEY, POSTCreateAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "vel";
                xAmzDate = "ea";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "excepturi";
            }};            

            POSTCreateAccessKeyResponse res = sdk.sdk.postCreateAccessKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateAccountAliasActionEnum;
import org.openapis.openapi.models.operations.POSTCreateAccountAliasRequest;
import org.openapis.openapi.models.operations.POSTCreateAccountAliasResponse;
import org.openapis.openapi.models.operations.POSTCreateAccountAliasVersionEnum;
import org.openapis.openapi.models.shared.CreateAccountAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateAccountAliasRequest req = new POSTCreateAccountAliasRequest(POSTCreateAccountAliasActionEnum.CREATE_ACCOUNT_ALIAS, POSTCreateAccountAliasVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "earum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "iste";
            }};            

            POSTCreateAccountAliasResponse res = sdk.sdk.postCreateAccountAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateGroupRequest req = new POSTCreateGroupRequest(POSTCreateGroupActionEnum.CREATE_GROUP, POSTCreateGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "velit";
                xAmzDate = "laborum";
                xAmzSecurityToken = "non";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTCreateGroupResponse res = sdk.sdk.postCreateGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateInstanceProfile

<p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using roles for applications on Amazon EC2</a> in the <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTCreateInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTCreateInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTCreateInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.CreateInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateInstanceProfileRequest req = new POSTCreateInstanceProfileRequest(POSTCreateInstanceProfileActionEnum.CREATE_INSTANCE_PROFILE, POSTCreateInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "doloremque".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "officia";
                xAmzCredential = "recusandae";
                xAmzDate = "ea";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "facilis";
            }};            

            POSTCreateInstanceProfileResponse res = sdk.sdk.postCreateInstanceProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLoginProfileActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLoginProfileRequest;
import org.openapis.openapi.models.operations.POSTCreateLoginProfileResponse;
import org.openapis.openapi.models.operations.POSTCreateLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.CreateLoginProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLoginProfileRequest req = new POSTCreateLoginProfileRequest(POSTCreateLoginProfileActionEnum.CREATE_LOGIN_PROFILE, POSTCreateLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "perspiciatis".getBytes();
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "a";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            POSTCreateLoginProfileResponse res = sdk.sdk.postCreateLoginProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateOpenIDConnectProvider

<p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider.</p> <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the <i>IAM User Guide</i>.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of tags that are attached to the specified IAM OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP you want to use to access Amazon Web Services.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTCreateOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTCreateOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTCreateOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.CreateOpenIDConnectProviderRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOpenIDConnectProviderRequest req = new POSTCreateOpenIDConnectProviderRequest(POSTCreateOpenIDConnectProviderActionEnum.CREATE_OPEN_ID_CONNECT_PROVIDER, POSTCreateOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "est";
                xAmzDate = "error";
                xAmzSecurityToken = "esse";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTCreateOpenIDConnectProviderResponse res = sdk.sdk.postCreateOpenIDConnectProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreatePolicy

<p>Creates a new managed policy for your Amazon Web Services account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreatePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTCreatePolicyRequest;
import org.openapis.openapi.models.operations.POSTCreatePolicyResponse;
import org.openapis.openapi.models.operations.POSTCreatePolicyVersionEnum;
import org.openapis.openapi.models.shared.CreatePolicyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreatePolicyRequest req = new POSTCreatePolicyRequest(POSTCreatePolicyActionEnum.CREATE_POLICY, POSTCreatePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "consectetur".getBytes();
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "dolorem";
                xAmzDate = "ad";
                xAmzSecurityToken = "qui";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "ex";
            }};            

            POSTCreatePolicyResponse res = sdk.sdk.postCreatePolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreatePolicyVersionActionEnum;
import org.openapis.openapi.models.operations.POSTCreatePolicyVersionRequest;
import org.openapis.openapi.models.operations.POSTCreatePolicyVersionResponse;
import org.openapis.openapi.models.operations.POSTCreatePolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.CreatePolicyVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreatePolicyVersionRequest req = new POSTCreatePolicyVersionRequest(POSTCreatePolicyVersionActionEnum.CREATE_POLICY_VERSION, POSTCreatePolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "soluta".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "rem";
                xAmzCredential = "dolorum";
                xAmzDate = "odio";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "magni";
            }};            

            POSTCreatePolicyVersionResponse res = sdk.sdk.postCreatePolicyVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateRole

Creates a new role for your Amazon Web Services account. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM roles</a>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateRoleActionEnum;
import org.openapis.openapi.models.operations.POSTCreateRoleRequest;
import org.openapis.openapi.models.operations.POSTCreateRoleResponse;
import org.openapis.openapi.models.operations.POSTCreateRoleVersionEnum;
import org.openapis.openapi.models.shared.CreateRoleRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateRoleRequest req = new POSTCreateRoleRequest(POSTCreateRoleActionEnum.CREATE_ROLE, POSTCreateRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "neque";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTCreateRoleResponse res = sdk.sdk.postCreateRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateSAMLProvider

<p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTCreateSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTCreateSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTCreateSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.CreateSAMLProviderRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateSAMLProviderRequest req = new POSTCreateSAMLProviderRequest(POSTCreateSAMLProviderActionEnum.CREATE_SAML_PROVIDER, POSTCreateSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nulla".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "quia";
                xAmzDate = "quia";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "libero";
            }};            

            POSTCreateSAMLProviderResponse res = sdk.sdk.postCreateSAMLProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateServiceLinkedRoleActionEnum;
import org.openapis.openapi.models.operations.POSTCreateServiceLinkedRoleRequest;
import org.openapis.openapi.models.operations.POSTCreateServiceLinkedRoleResponse;
import org.openapis.openapi.models.operations.POSTCreateServiceLinkedRoleVersionEnum;
import org.openapis.openapi.models.shared.CreateServiceLinkedRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateServiceLinkedRoleRequest req = new POSTCreateServiceLinkedRoleRequest(POSTCreateServiceLinkedRoleActionEnum.CREATE_SERVICE_LINKED_ROLE, POSTCreateServiceLinkedRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "id".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "officia";
                xAmzDate = "quos";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTCreateServiceLinkedRoleResponse res = sdk.sdk.postCreateServiceLinkedRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.POSTCreateServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.POSTCreateServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.POSTCreateServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.CreateServiceSpecificCredentialRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateServiceSpecificCredentialRequest req = new POSTCreateServiceSpecificCredentialRequest(POSTCreateServiceSpecificCredentialActionEnum.CREATE_SERVICE_SPECIFIC_CREDENTIAL, POSTCreateServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "voluptates".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "totam";
                xAmzDate = "dolore";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "voluptatem";
            }};            

            POSTCreateServiceSpecificCredentialResponse res = sdk.sdk.postCreateServiceSpecificCredential(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateUser

<p>Creates a new IAM user for your Amazon Web Services account.</p> <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateUserActionEnum;
import org.openapis.openapi.models.operations.POSTCreateUserRequest;
import org.openapis.openapi.models.operations.POSTCreateUserResponse;
import org.openapis.openapi.models.operations.POSTCreateUserVersionEnum;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateUserRequest req = new POSTCreateUserRequest(POSTCreateUserActionEnum.CREATE_USER, POSTCreateUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "beatae";
                xAmzDate = "est";
                xAmzSecurityToken = "facere";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTCreateUserResponse res = sdk.sdk.postCreateUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateVirtualMFADevice

<p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateVirtualMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTCreateVirtualMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTCreateVirtualMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTCreateVirtualMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.CreateVirtualMFADeviceRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateVirtualMFADeviceRequest req = new POSTCreateVirtualMFADeviceRequest(POSTCreateVirtualMFADeviceActionEnum.CREATE_VIRTUAL_MFA_DEVICE, POSTCreateVirtualMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "sint";
                xAmzDate = "ea";
                xAmzSecurityToken = "autem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTCreateVirtualMFADeviceResponse res = sdk.sdk.postCreateVirtualMFADevice(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeactivateMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTDeactivateMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTDeactivateMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTDeactivateMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.DeactivateMFADeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeactivateMFADeviceRequest req = new POSTDeactivateMFADeviceRequest(POSTDeactivateMFADeviceActionEnum.DEACTIVATE_MFA_DEVICE, POSTDeactivateMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "cum";
                xAmzDate = "at";
                xAmzSecurityToken = "alias";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDeactivateMFADeviceResponse res = sdk.sdk.postDeactivateMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAccessKeyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAccessKeyRequest;
import org.openapis.openapi.models.operations.POSTDeleteAccessKeyResponse;
import org.openapis.openapi.models.operations.POSTDeleteAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.DeleteAccessKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAccessKeyRequest req = new POSTDeleteAccessKeyRequest(POSTDeleteAccessKeyActionEnum.DELETE_ACCESS_KEY, POSTDeleteAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "repudiandae".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "officiis";
                xAmzDate = "eos";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTDeleteAccessKeyResponse res = sdk.sdk.postDeleteAccessKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAccountAliasActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAccountAliasRequest;
import org.openapis.openapi.models.operations.POSTDeleteAccountAliasResponse;
import org.openapis.openapi.models.operations.POSTDeleteAccountAliasVersionEnum;
import org.openapis.openapi.models.shared.DeleteAccountAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAccountAliasRequest req = new POSTDeleteAccountAliasRequest(POSTDeleteAccountAliasActionEnum.DELETE_ACCOUNT_ALIAS, POSTDeleteAccountAliasVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "error";
                xAmzCredential = "earum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "ut";
            }};            

            POSTDeleteAccountAliasResponse res = sdk.sdk.postDeleteAccountAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteAccountPasswordPolicyRequest req = new POSTDeleteAccountPasswordPolicyRequest(POSTDeleteAccountPasswordPolicyActionEnum.DELETE_ACCOUNT_PASSWORD_POLICY, POSTDeleteAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "unde";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTDeleteAccountPasswordPolicyResponse res = sdk.sdk.postDeleteAccountPasswordPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGroupRequest req = new POSTDeleteGroupRequest(POSTDeleteGroupActionEnum.DELETE_GROUP, POSTDeleteGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "at";
                xAmzCredential = "officia";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "optio";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "corporis";
            }};            

            POSTDeleteGroupResponse res = sdk.sdk.postDeleteGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteGroupPolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteGroupPolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.DeleteGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteGroupPolicyRequest req = new POSTDeleteGroupPolicyRequest(POSTDeleteGroupPolicyActionEnum.DELETE_GROUP_POLICY, POSTDeleteGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "minima";
                xAmzDate = "placeat";
                xAmzSecurityToken = "enim";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "in";
            }};            

            POSTDeleteGroupPolicyResponse res = sdk.sdk.postDeleteGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTDeleteInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTDeleteInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.DeleteInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteInstanceProfileRequest req = new POSTDeleteInstanceProfileRequest(POSTDeleteInstanceProfileActionEnum.DELETE_INSTANCE_PROFILE, POSTDeleteInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "magnam";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTDeleteInstanceProfileResponse res = sdk.sdk.postDeleteInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLoginProfileActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLoginProfileRequest;
import org.openapis.openapi.models.operations.POSTDeleteLoginProfileResponse;
import org.openapis.openapi.models.operations.POSTDeleteLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.DeleteLoginProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLoginProfileRequest req = new POSTDeleteLoginProfileRequest(POSTDeleteLoginProfileActionEnum.DELETE_LOGIN_PROFILE, POSTDeleteLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "ratione".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "totam";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "quo";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "minus";
            }};            

            POSTDeleteLoginProfileResponse res = sdk.sdk.postDeleteLoginProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTDeleteOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTDeleteOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.DeleteOpenIDConnectProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteOpenIDConnectProviderRequest req = new POSTDeleteOpenIDConnectProviderRequest(POSTDeleteOpenIDConnectProviderActionEnum.DELETE_OPEN_ID_CONNECT_PROVIDER, POSTDeleteOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "delectus";
                xAmzDate = "tempore";
                xAmzSecurityToken = "vero";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "repellat";
            }};            

            POSTDeleteOpenIDConnectProviderResponse res = sdk.sdk.postDeleteOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeletePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeletePolicyRequest;
import org.openapis.openapi.models.operations.POSTDeletePolicyResponse;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionEnum;
import org.openapis.openapi.models.shared.DeletePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeletePolicyRequest req = new POSTDeletePolicyRequest(POSTDeletePolicyActionEnum.DELETE_POLICY, POSTDeletePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "odio";
                xAmzDate = "minima";
                xAmzSecurityToken = "in";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "excepturi";
            }};            

            POSTDeletePolicyResponse res = sdk.sdk.postDeletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionActionEnum;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionRequest;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionResponse;
import org.openapis.openapi.models.operations.POSTDeletePolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.DeletePolicyVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeletePolicyVersionRequest req = new POSTDeletePolicyVersionRequest(POSTDeletePolicyVersionActionEnum.DELETE_POLICY_VERSION, POSTDeletePolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "voluptate";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "optio";
            }};            

            POSTDeletePolicyVersionResponse res = sdk.sdk.postDeletePolicyVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteRoleActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteRoleRequest;
import org.openapis.openapi.models.operations.POSTDeleteRoleResponse;
import org.openapis.openapi.models.operations.POSTDeleteRoleVersionEnum;
import org.openapis.openapi.models.shared.DeleteRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteRoleRequest req = new POSTDeleteRoleRequest(POSTDeleteRoleActionEnum.DELETE_ROLE, POSTDeleteRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "placeat";
                xAmzDate = "quidem";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTDeleteRoleResponse res = sdk.sdk.postDeleteRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteRolePermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.POSTDeleteRolePermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.POSTDeleteRolePermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.DeleteRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteRolePermissionsBoundaryRequest req = new POSTDeleteRolePermissionsBoundaryRequest(POSTDeleteRolePermissionsBoundaryActionEnum.DELETE_ROLE_PERMISSIONS_BOUNDARY, POSTDeleteRolePermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "vero";
                xAmzCredential = "sequi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "cum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "earum";
            }};            

            POSTDeleteRolePermissionsBoundaryResponse res = sdk.sdk.postDeleteRolePermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.DeleteRolePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteRolePolicyRequest req = new POSTDeleteRolePolicyRequest(POSTDeleteRolePolicyActionEnum.DELETE_ROLE_POLICY, POSTDeleteRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "animi".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "nam";
                xAmzCredential = "dicta";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDeleteRolePolicyResponse res = sdk.sdk.postDeleteRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTDeleteSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTDeleteSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.DeleteSAMLProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSAMLProviderRequest req = new POSTDeleteSAMLProviderRequest(POSTDeleteSAMLProviderActionEnum.DELETE_SAML_PROVIDER, POSTDeleteSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "laboriosam";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "libero";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDeleteSAMLProviderResponse res = sdk.sdk.postDeleteSAMLProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.POSTDeleteSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.POSTDeleteSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.DeleteSSHPublicKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSSHPublicKeyRequest req = new POSTDeleteSSHPublicKeyRequest(POSTDeleteSSHPublicKeyActionEnum.DELETE_SSH_PUBLIC_KEY, POSTDeleteSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "enim";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "animi";
            }};            

            POSTDeleteSSHPublicKeyResponse res = sdk.sdk.postDeleteSSHPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTDeleteServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTDeleteServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.DeleteServerCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteServerCertificateRequest req = new POSTDeleteServerCertificateRequest(POSTDeleteServerCertificateActionEnum.DELETE_SERVER_CERTIFICATE, POSTDeleteServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eaque";
                xAmzDate = "saepe";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "iste";
            }};            

            POSTDeleteServerCertificateResponse res = sdk.sdk.postDeleteServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteServiceLinkedRoleActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteServiceLinkedRoleRequest;
import org.openapis.openapi.models.operations.POSTDeleteServiceLinkedRoleResponse;
import org.openapis.openapi.models.operations.POSTDeleteServiceLinkedRoleVersionEnum;
import org.openapis.openapi.models.shared.DeleteServiceLinkedRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteServiceLinkedRoleRequest req = new POSTDeleteServiceLinkedRoleRequest(POSTDeleteServiceLinkedRoleActionEnum.DELETE_SERVICE_LINKED_ROLE, POSTDeleteServiceLinkedRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "tempore".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "velit";
                xAmzCredential = "doloremque";
                xAmzDate = "delectus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTDeleteServiceLinkedRoleResponse res = sdk.sdk.postDeleteServiceLinkedRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.POSTDeleteServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.POSTDeleteServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.DeleteServiceSpecificCredentialRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteServiceSpecificCredentialRequest req = new POSTDeleteServiceSpecificCredentialRequest(POSTDeleteServiceSpecificCredentialActionEnum.DELETE_SERVICE_SPECIFIC_CREDENTIAL, POSTDeleteServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "quis";
                xAmzDate = "veniam";
                xAmzSecurityToken = "libero";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "cupiditate";
            }};            

            POSTDeleteServiceSpecificCredentialResponse res = sdk.sdk.postDeleteServiceSpecificCredential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteSigningCertificateRequest;
import org.openapis.openapi.models.operations.POSTDeleteSigningCertificateResponse;
import org.openapis.openapi.models.operations.POSTDeleteSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.DeleteSigningCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteSigningCertificateRequest req = new POSTDeleteSigningCertificateRequest(POSTDeleteSigningCertificateActionEnum.DELETE_SIGNING_CERTIFICATE, POSTDeleteSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "non";
                xAmzCredential = "magnam";
                xAmzDate = "itaque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "veniam";
            }};            

            POSTDeleteSigningCertificateResponse res = sdk.sdk.postDeleteSigningCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUserActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUserRequest;
import org.openapis.openapi.models.operations.POSTDeleteUserResponse;
import org.openapis.openapi.models.operations.POSTDeleteUserVersionEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUserRequest req = new POSTDeleteUserRequest(POSTDeleteUserActionEnum.DELETE_USER, POSTDeleteUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "facere".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odit";
                xAmzCredential = "pariatur";
                xAmzDate = "amet";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "velit";
            }};            

            POSTDeleteUserResponse res = sdk.sdk.postDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUserPermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.POSTDeleteUserPermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.POSTDeleteUserPermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.DeleteUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUserPermissionsBoundaryRequest req = new POSTDeleteUserPermissionsBoundaryRequest(POSTDeleteUserPermissionsBoundaryActionEnum.DELETE_USER_PERMISSIONS_BOUNDARY, POSTDeleteUserPermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "tempore".getBytes();
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quaerat";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "quis";
            }};            

            POSTDeleteUserPermissionsBoundaryResponse res = sdk.sdk.postDeleteUserPermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteUserPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteUserPolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteUserPolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.DeleteUserPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteUserPolicyRequest req = new POSTDeleteUserPolicyRequest(POSTDeleteUserPolicyActionEnum.DELETE_USER_POLICY, POSTDeleteUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "facere";
                xAmzCredential = "facilis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ad";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            POSTDeleteUserPolicyResponse res = sdk.sdk.postDeleteUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteVirtualMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteVirtualMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTDeleteVirtualMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTDeleteVirtualMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.DeleteVirtualMFADeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteVirtualMFADeviceRequest req = new POSTDeleteVirtualMFADeviceRequest(POSTDeleteVirtualMFADeviceActionEnum.DELETE_VIRTUAL_MFA_DEVICE, POSTDeleteVirtualMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "eos";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTDeleteVirtualMFADeviceResponse res = sdk.sdk.postDeleteVirtualMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDetachGroupPolicyRequest;
import org.openapis.openapi.models.operations.POSTDetachGroupPolicyResponse;
import org.openapis.openapi.models.operations.POSTDetachGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.DetachGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachGroupPolicyRequest req = new POSTDetachGroupPolicyRequest(POSTDetachGroupPolicyActionEnum.DETACH_GROUP_POLICY, POSTDetachGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "unde";
                xAmzDate = "officiis";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDetachGroupPolicyResponse res = sdk.sdk.postDetachGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDetachRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTDetachRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTDetachRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.DetachRolePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachRolePolicyRequest req = new POSTDetachRolePolicyRequest(POSTDetachRolePolicyActionEnum.DETACH_ROLE_POLICY, POSTDetachRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "esse";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ad";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "enim";
            }};            

            POSTDetachRolePolicyResponse res = sdk.sdk.postDetachRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachUserPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDetachUserPolicyRequest;
import org.openapis.openapi.models.operations.POSTDetachUserPolicyResponse;
import org.openapis.openapi.models.operations.POSTDetachUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.DetachUserPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachUserPolicyRequest req = new POSTDetachUserPolicyRequest(POSTDetachUserPolicyActionEnum.DETACH_USER_POLICY, POSTDetachUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "iusto".getBytes();
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illo";
                xAmzDate = "ab";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTDetachUserPolicyResponse res = sdk.sdk.postDetachUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTEnableMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTEnableMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTEnableMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.EnableMFADeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableMFADeviceRequest req = new POSTEnableMFADeviceRequest(POSTEnableMFADeviceActionEnum.ENABLE_MFA_DEVICE, POSTEnableMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "veniam".getBytes();
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "earum";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "repellat";
            }};            

            POSTEnableMFADeviceResponse res = sdk.sdk.postEnableMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGenerateCredentialReportActionEnum;
import org.openapis.openapi.models.operations.POSTGenerateCredentialReportRequest;
import org.openapis.openapi.models.operations.POSTGenerateCredentialReportResponse;
import org.openapis.openapi.models.operations.POSTGenerateCredentialReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGenerateCredentialReportRequest req = new POSTGenerateCredentialReportRequest(POSTGenerateCredentialReportActionEnum.GENERATE_CREDENTIAL_REPORT, POSTGenerateCredentialReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "deleniti";
                xAmzDate = "illo";
                xAmzSecurityToken = "labore";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTGenerateCredentialReportResponse res = sdk.sdk.postGenerateCredentialReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGenerateOrganizationsAccessReportActionEnum;
import org.openapis.openapi.models.operations.POSTGenerateOrganizationsAccessReportRequest;
import org.openapis.openapi.models.operations.POSTGenerateOrganizationsAccessReportResponse;
import org.openapis.openapi.models.operations.POSTGenerateOrganizationsAccessReportVersionEnum;
import org.openapis.openapi.models.shared.GenerateOrganizationsAccessReportRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGenerateOrganizationsAccessReportRequest req = new POSTGenerateOrganizationsAccessReportRequest(POSTGenerateOrganizationsAccessReportActionEnum.GENERATE_ORGANIZATIONS_ACCESS_REPORT, POSTGenerateOrganizationsAccessReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "consequatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "expedita";
            }};            

            POSTGenerateOrganizationsAccessReportResponse res = sdk.sdk.postGenerateOrganizationsAccessReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGenerateServiceLastAccessedDetailsActionEnum;
import org.openapis.openapi.models.operations.POSTGenerateServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.operations.POSTGenerateServiceLastAccessedDetailsResponse;
import org.openapis.openapi.models.operations.POSTGenerateServiceLastAccessedDetailsVersionEnum;
import org.openapis.openapi.models.shared.AccessAdvisorUsageGranularityTypeEnum;
import org.openapis.openapi.models.shared.GenerateServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGenerateServiceLastAccessedDetailsRequest req = new POSTGenerateServiceLastAccessedDetailsRequest(POSTGenerateServiceLastAccessedDetailsActionEnum.GENERATE_SERVICE_LAST_ACCESSED_DETAILS, POSTGenerateServiceLastAccessedDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dignissimos";
                xAmzDate = "corporis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "repellendus";
            }};            

            POSTGenerateServiceLastAccessedDetailsResponse res = sdk.sdk.postGenerateServiceLastAccessedDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAccessKeyLastUsedActionEnum;
import org.openapis.openapi.models.operations.POSTGetAccessKeyLastUsedRequest;
import org.openapis.openapi.models.operations.POSTGetAccessKeyLastUsedResponse;
import org.openapis.openapi.models.operations.POSTGetAccessKeyLastUsedVersionEnum;
import org.openapis.openapi.models.shared.GetAccessKeyLastUsedRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAccessKeyLastUsedRequest req = new POSTGetAccessKeyLastUsedRequest(POSTGetAccessKeyLastUsedActionEnum.GET_ACCESS_KEY_LAST_USED, POSTGetAccessKeyLastUsedVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "commodi";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "quae";
            }};            

            POSTGetAccessKeyLastUsedResponse res = sdk.sdk.postGetAccessKeyLastUsed(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAccountAuthorizationDetailsActionEnum;
import org.openapis.openapi.models.operations.POSTGetAccountAuthorizationDetailsRequest;
import org.openapis.openapi.models.operations.POSTGetAccountAuthorizationDetailsResponse;
import org.openapis.openapi.models.operations.POSTGetAccountAuthorizationDetailsVersionEnum;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.GetAccountAuthorizationDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAccountAuthorizationDetailsRequest req = new POSTGetAccountAuthorizationDetailsRequest(POSTGetAccountAuthorizationDetailsActionEnum.GET_ACCOUNT_AUTHORIZATION_DETAILS, POSTGetAccountAuthorizationDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "illum";
                maxItems = "praesentium";
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "amet";
                xAmzCredential = "quasi";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "earum";
            }};            

            POSTGetAccountAuthorizationDetailsResponse res = sdk.sdk.postGetAccountAuthorizationDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAccountPasswordPolicyRequest req = new POSTGetAccountPasswordPolicyRequest(POSTGetAccountPasswordPolicyActionEnum.GET_ACCOUNT_PASSWORD_POLICY, POSTGetAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "provident";
                xAmzCredential = "dolorum";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "provident";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "consequatur";
            }};            

            POSTGetAccountPasswordPolicyResponse res = sdk.sdk.postGetAccountPasswordPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAccountSummaryActionEnum;
import org.openapis.openapi.models.operations.POSTGetAccountSummaryRequest;
import org.openapis.openapi.models.operations.POSTGetAccountSummaryResponse;
import org.openapis.openapi.models.operations.POSTGetAccountSummaryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAccountSummaryRequest req = new POSTGetAccountSummaryRequest(POSTGetAccountSummaryActionEnum.GET_ACCOUNT_SUMMARY, POSTGetAccountSummaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "facilis";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTGetAccountSummaryResponse res = sdk.sdk.postGetAccountSummary(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetContextKeysForCustomPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetContextKeysForCustomPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetContextKeysForCustomPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetContextKeysForCustomPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetContextKeysForCustomPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetContextKeysForCustomPolicyRequest req = new POSTGetContextKeysForCustomPolicyRequest(POSTGetContextKeysForCustomPolicyActionEnum.GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY, POSTGetContextKeysForCustomPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "velit";
                xAmzDate = "dolor";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolor";
            }};            

            POSTGetContextKeysForCustomPolicyResponse res = sdk.sdk.postGetContextKeysForCustomPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetContextKeysForPrincipalPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetContextKeysForPrincipalPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetContextKeysForPrincipalPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetContextKeysForPrincipalPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetContextKeysForPrincipalPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetContextKeysForPrincipalPolicyRequest req = new POSTGetContextKeysForPrincipalPolicyRequest(POSTGetContextKeysForPrincipalPolicyActionEnum.GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY, POSTGetContextKeysForPrincipalPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "at";
                xAmzCredential = "labore";
                xAmzDate = "minus";
                xAmzSecurityToken = "esse";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTGetContextKeysForPrincipalPolicyResponse res = sdk.sdk.postGetContextKeysForPrincipalPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetCredentialReportActionEnum;
import org.openapis.openapi.models.operations.POSTGetCredentialReportRequest;
import org.openapis.openapi.models.operations.POSTGetCredentialReportResponse;
import org.openapis.openapi.models.operations.POSTGetCredentialReportVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetCredentialReportRequest req = new POSTGetCredentialReportRequest(POSTGetCredentialReportActionEnum.GET_CREDENTIAL_REPORT, POSTGetCredentialReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "dignissimos";
                xAmzDate = "repellat";
                xAmzSecurityToken = "velit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "provident";
            }};            

            POSTGetCredentialReportResponse res = sdk.sdk.postGetCredentialReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTGetGroupRequest;
import org.openapis.openapi.models.operations.POSTGetGroupResponse;
import org.openapis.openapi.models.operations.POSTGetGroupVersionEnum;
import org.openapis.openapi.models.shared.GetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetGroupRequest req = new POSTGetGroupRequest(POSTGetGroupActionEnum.GET_GROUP, POSTGetGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "eligendi";
                maxItems = "dignissimos";
                requestBody = "consectetur".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "natus";
                xAmzCredential = "temporibus";
                xAmzDate = "officia";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTGetGroupResponse res = sdk.sdk.postGetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetGroupPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetGroupPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetGroupPolicyRequest req = new POSTGetGroupPolicyRequest(POSTGetGroupPolicyActionEnum.GET_GROUP_POLICY, POSTGetGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "itaque".getBytes();
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dignissimos";
                xAmzDate = "vero";
                xAmzSecurityToken = "qui";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "repellat";
            }};            

            POSTGetGroupPolicyResponse res = sdk.sdk.postGetGroupPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTGetInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTGetInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTGetInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.GetInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetInstanceProfileRequest req = new POSTGetInstanceProfileRequest(POSTGetInstanceProfileActionEnum.GET_INSTANCE_PROFILE, POSTGetInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "non";
                xAmzDate = "ab";
                xAmzSecurityToken = "illo";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "deserunt";
            }};            

            POSTGetInstanceProfileResponse res = sdk.sdk.postGetInstanceProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetLoginProfileActionEnum;
import org.openapis.openapi.models.operations.POSTGetLoginProfileRequest;
import org.openapis.openapi.models.operations.POSTGetLoginProfileResponse;
import org.openapis.openapi.models.operations.POSTGetLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.GetLoginProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetLoginProfileRequest req = new POSTGetLoginProfileRequest(POSTGetLoginProfileActionEnum.GET_LOGIN_PROFILE, POSTGetLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "in";
                xAmzCredential = "exercitationem";
                xAmzDate = "labore";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "modi";
            }};            

            POSTGetLoginProfileResponse res = sdk.sdk.postGetLoginProfile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTGetOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTGetOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTGetOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.GetOpenIDConnectProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetOpenIDConnectProviderRequest req = new POSTGetOpenIDConnectProviderRequest(POSTGetOpenIDConnectProviderActionEnum.GET_OPEN_ID_CONNECT_PROVIDER, POSTGetOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "rem";
                xAmzCredential = "aperiam";
                xAmzDate = "odit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "voluptate";
            }};            

            POSTGetOpenIDConnectProviderResponse res = sdk.sdk.postGetOpenIDConnectProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetOrganizationsAccessReportActionEnum;
import org.openapis.openapi.models.operations.POSTGetOrganizationsAccessReportRequest;
import org.openapis.openapi.models.operations.POSTGetOrganizationsAccessReportResponse;
import org.openapis.openapi.models.operations.POSTGetOrganizationsAccessReportVersionEnum;
import org.openapis.openapi.models.shared.GetOrganizationsAccessReportRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortKeyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetOrganizationsAccessReportRequest req = new POSTGetOrganizationsAccessReportRequest(POSTGetOrganizationsAccessReportActionEnum.GET_ORGANIZATIONS_ACCESS_REPORT, POSTGetOrganizationsAccessReportVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "sit";
                xAmzDate = "modi";
                xAmzSecurityToken = "eum";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTGetOrganizationsAccessReportResponse res = sdk.sdk.postGetOrganizationsAccessReport(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetPolicyRequest req = new POSTGetPolicyRequest(POSTGetPolicyActionEnum.GET_POLICY, POSTGetPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "veniam";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ab";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "aut";
            }};            

            POSTGetPolicyResponse res = sdk.sdk.postGetPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetPolicyVersionActionEnum;
import org.openapis.openapi.models.operations.POSTGetPolicyVersionRequest;
import org.openapis.openapi.models.operations.POSTGetPolicyVersionResponse;
import org.openapis.openapi.models.operations.POSTGetPolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.GetPolicyVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetPolicyVersionRequest req = new POSTGetPolicyVersionRequest(POSTGetPolicyVersionActionEnum.GET_POLICY_VERSION, POSTGetPolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eveniet".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "numquam";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTGetPolicyVersionResponse res = sdk.sdk.postGetPolicyVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetRoleActionEnum;
import org.openapis.openapi.models.operations.POSTGetRoleRequest;
import org.openapis.openapi.models.operations.POSTGetRoleResponse;
import org.openapis.openapi.models.operations.POSTGetRoleVersionEnum;
import org.openapis.openapi.models.shared.GetRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetRoleRequest req = new POSTGetRoleRequest(POSTGetRoleActionEnum.GET_ROLE, POSTGetRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "minus";
                xAmzCredential = "sunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "et";
            }};            

            POSTGetRoleResponse res = sdk.sdk.postGetRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTGetRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTGetRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.GetRolePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetRolePolicyRequest req = new POSTGetRolePolicyRequest(POSTGetRolePolicyActionEnum.GET_ROLE_POLICY, POSTGetRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "alias";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTGetRolePolicyResponse res = sdk.sdk.postGetRolePolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTGetSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTGetSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTGetSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.GetSAMLProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetSAMLProviderRequest req = new POSTGetSAMLProviderRequest(POSTGetSAMLProviderActionEnum.GET_SAML_PROVIDER, POSTGetSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "saepe";
                xAmzDate = "delectus";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "officia";
            }};            

            POSTGetSAMLProviderResponse res = sdk.sdk.postGetSAMLProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.POSTGetSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.POSTGetSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.POSTGetSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.EncodingTypeEnum;
import org.openapis.openapi.models.shared.GetSSHPublicKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetSSHPublicKeyRequest req = new POSTGetSSHPublicKeyRequest(POSTGetSSHPublicKeyActionEnum.GET_SSH_PUBLIC_KEY, POSTGetSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "qui";
            }};            

            POSTGetSSHPublicKeyResponse res = sdk.sdk.postGetSSHPublicKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTGetServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTGetServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTGetServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.GetServerCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetServerCertificateRequest req = new POSTGetServerCertificateRequest(POSTGetServerCertificateActionEnum.GET_SERVER_CERTIFICATE, POSTGetServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "harum".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "aliquid";
                xAmzDate = "modi";
                xAmzSecurityToken = "optio";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "molestias";
            }};            

            POSTGetServerCertificateResponse res = sdk.sdk.postGetServerCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsActionEnum;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsResponse;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsVersionEnum;
import org.openapis.openapi.models.shared.GetServiceLastAccessedDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetServiceLastAccessedDetailsRequest req = new POSTGetServiceLastAccessedDetailsRequest(POSTGetServiceLastAccessedDetailsActionEnum.GET_SERVICE_LAST_ACCESSED_DETAILS, POSTGetServiceLastAccessedDetailsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "libero".getBytes();
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "aliquid";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "odit";
            }};            

            POSTGetServiceLastAccessedDetailsResponse res = sdk.sdk.postGetServiceLastAccessedDetails(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsWithEntitiesRequest;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsWithEntitiesResponse;
import org.openapis.openapi.models.operations.POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
import org.openapis.openapi.models.shared.GetServiceLastAccessedDetailsWithEntitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetServiceLastAccessedDetailsWithEntitiesRequest req = new POSTGetServiceLastAccessedDetailsWithEntitiesRequest(POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum.GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES, POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "laborum";
                xAmzDate = "natus";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "nisi";
            }};            

            POSTGetServiceLastAccessedDetailsWithEntitiesResponse res = sdk.sdk.postGetServiceLastAccessedDetailsWithEntities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetServiceLinkedRoleDeletionStatusActionEnum;
import org.openapis.openapi.models.operations.POSTGetServiceLinkedRoleDeletionStatusRequest;
import org.openapis.openapi.models.operations.POSTGetServiceLinkedRoleDeletionStatusResponse;
import org.openapis.openapi.models.operations.POSTGetServiceLinkedRoleDeletionStatusVersionEnum;
import org.openapis.openapi.models.shared.GetServiceLinkedRoleDeletionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetServiceLinkedRoleDeletionStatusRequest req = new POSTGetServiceLinkedRoleDeletionStatusRequest(POSTGetServiceLinkedRoleDeletionStatusActionEnum.GET_SERVICE_LINKED_ROLE_DELETION_STATUS, POSTGetServiceLinkedRoleDeletionStatusVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "non";
                xAmzCredential = "rem";
                xAmzDate = "quia";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTGetServiceLinkedRoleDeletionStatusResponse res = sdk.sdk.postGetServiceLinkedRoleDeletionStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetUserActionEnum;
import org.openapis.openapi.models.operations.POSTGetUserRequest;
import org.openapis.openapi.models.operations.POSTGetUserResponse;
import org.openapis.openapi.models.operations.POSTGetUserVersionEnum;
import org.openapis.openapi.models.shared.GetUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetUserRequest req = new POSTGetUserRequest(POSTGetUserActionEnum.GET_USER, POSTGetUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "enim";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "rem";
            }};            

            POSTGetUserResponse res = sdk.sdk.postGetUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetUserPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTGetUserPolicyRequest;
import org.openapis.openapi.models.operations.POSTGetUserPolicyResponse;
import org.openapis.openapi.models.operations.POSTGetUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.GetUserPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetUserPolicyRequest req = new POSTGetUserPolicyRequest(POSTGetUserPolicyActionEnum.GET_USER_POLICY, POSTGetUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "a";
                xAmzCredential = "iste";
                xAmzDate = "dicta";
                xAmzSecurityToken = "quos";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTGetUserPolicyResponse res = sdk.sdk.postGetUserPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAccessKeysActionEnum;
import org.openapis.openapi.models.operations.POSTListAccessKeysRequest;
import org.openapis.openapi.models.operations.POSTListAccessKeysResponse;
import org.openapis.openapi.models.operations.POSTListAccessKeysVersionEnum;
import org.openapis.openapi.models.shared.ListAccessKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAccessKeysRequest req = new POSTListAccessKeysRequest(POSTListAccessKeysActionEnum.LIST_ACCESS_KEYS, POSTListAccessKeysVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "itaque";
                maxItems = "maxime";
                requestBody = "modi".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "vero";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTListAccessKeysResponse res = sdk.sdk.postListAccessKeys(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAccountAliasesActionEnum;
import org.openapis.openapi.models.operations.POSTListAccountAliasesRequest;
import org.openapis.openapi.models.operations.POSTListAccountAliasesResponse;
import org.openapis.openapi.models.operations.POSTListAccountAliasesVersionEnum;
import org.openapis.openapi.models.shared.ListAccountAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAccountAliasesRequest req = new POSTListAccountAliasesRequest(POSTListAccountAliasesActionEnum.LIST_ACCOUNT_ALIASES, POSTListAccountAliasesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "reiciendis";
                maxItems = "ab";
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "esse";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "vel";
            }};            

            POSTListAccountAliasesResponse res = sdk.sdk.postListAccountAliases(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAttachedGroupPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListAttachedGroupPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListAttachedGroupPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListAttachedGroupPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListAttachedGroupPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAttachedGroupPoliciesRequest req = new POSTListAttachedGroupPoliciesRequest(POSTListAttachedGroupPoliciesActionEnum.LIST_ATTACHED_GROUP_POLICIES, POSTListAttachedGroupPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "corporis";
                maxItems = "voluptas";
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "distinctio";
                xAmzDate = "eius";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTListAttachedGroupPoliciesResponse res = sdk.sdk.postListAttachedGroupPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAttachedRolePoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListAttachedRolePoliciesRequest;
import org.openapis.openapi.models.operations.POSTListAttachedRolePoliciesResponse;
import org.openapis.openapi.models.operations.POSTListAttachedRolePoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListAttachedRolePoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAttachedRolePoliciesRequest req = new POSTListAttachedRolePoliciesRequest(POSTListAttachedRolePoliciesActionEnum.LIST_ATTACHED_ROLE_POLICIES, POSTListAttachedRolePoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "veniam";
                maxItems = "saepe";
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "quos";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "est";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTListAttachedRolePoliciesResponse res = sdk.sdk.postListAttachedRolePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAttachedUserPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListAttachedUserPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListAttachedUserPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListAttachedUserPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListAttachedUserPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAttachedUserPoliciesRequest req = new POSTListAttachedUserPoliciesRequest(POSTListAttachedUserPoliciesActionEnum.LIST_ATTACHED_USER_POLICIES, POSTListAttachedUserPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "vitae";
                maxItems = "nesciunt";
                requestBody = "similique".getBytes();
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "nemo";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "incidunt";
            }};            

            POSTListAttachedUserPoliciesResponse res = sdk.sdk.postListAttachedUserPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListEntitiesForPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTListEntitiesForPolicyRequest;
import org.openapis.openapi.models.operations.POSTListEntitiesForPolicyResponse;
import org.openapis.openapi.models.operations.POSTListEntitiesForPolicyVersionEnum;
import org.openapis.openapi.models.shared.EntityTypeEnum;
import org.openapis.openapi.models.shared.ListEntitiesForPolicyRequest;
import org.openapis.openapi.models.shared.PolicyUsageTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListEntitiesForPolicyRequest req = new POSTListEntitiesForPolicyRequest(POSTListEntitiesForPolicyActionEnum.LIST_ENTITIES_FOR_POLICY, POSTListEntitiesForPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "ipsam";
                maxItems = "cupiditate";
                requestBody = "optio".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "nesciunt";
                xAmzDate = "commodi";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "veniam";
            }};            

            POSTListEntitiesForPolicyResponse res = sdk.sdk.postListEntitiesForPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListGroupPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListGroupPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListGroupPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListGroupPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListGroupPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListGroupPoliciesRequest req = new POSTListGroupPoliciesRequest(POSTListGroupPoliciesActionEnum.LIST_GROUP_POLICIES, POSTListGroupPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "officia";
                maxItems = "sint";
                requestBody = "ut".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "adipisci";
                xAmzDate = "libero";
                xAmzSecurityToken = "in";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "ex";
            }};            

            POSTListGroupPoliciesResponse res = sdk.sdk.postListGroupPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTListGroupsRequest;
import org.openapis.openapi.models.operations.POSTListGroupsResponse;
import org.openapis.openapi.models.operations.POSTListGroupsVersionEnum;
import org.openapis.openapi.models.shared.ListGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListGroupsRequest req = new POSTListGroupsRequest(POSTListGroupsActionEnum.LIST_GROUPS, POSTListGroupsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "ab";
                maxItems = "beatae";
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "dolor";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTListGroupsResponse res = sdk.sdk.postListGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListGroupsForUserActionEnum;
import org.openapis.openapi.models.operations.POSTListGroupsForUserRequest;
import org.openapis.openapi.models.operations.POSTListGroupsForUserResponse;
import org.openapis.openapi.models.operations.POSTListGroupsForUserVersionEnum;
import org.openapis.openapi.models.shared.ListGroupsForUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListGroupsForUserRequest req = new POSTListGroupsForUserRequest(POSTListGroupsForUserActionEnum.LIST_GROUPS_FOR_USER, POSTListGroupsForUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "aliquid";
                maxItems = "magni";
                requestBody = "incidunt".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "dolor";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "impedit";
            }};            

            POSTListGroupsForUserResponse res = sdk.sdk.postListGroupsForUser(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListInstanceProfileTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListInstanceProfileTagsRequest;
import org.openapis.openapi.models.operations.POSTListInstanceProfileTagsResponse;
import org.openapis.openapi.models.operations.POSTListInstanceProfileTagsVersionEnum;
import org.openapis.openapi.models.shared.ListInstanceProfileTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListInstanceProfileTagsRequest req = new POSTListInstanceProfileTagsRequest(POSTListInstanceProfileTagsActionEnum.LIST_INSTANCE_PROFILE_TAGS, POSTListInstanceProfileTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "modi";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "quod";
            }};            

            POSTListInstanceProfileTagsResponse res = sdk.sdk.postListInstanceProfileTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesActionEnum;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesRequest;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesResponse;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesVersionEnum;
import org.openapis.openapi.models.shared.ListInstanceProfilesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListInstanceProfilesRequest req = new POSTListInstanceProfilesRequest(POSTListInstanceProfilesActionEnum.LIST_INSTANCE_PROFILES, POSTListInstanceProfilesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "a";
                maxItems = "quisquam";
                requestBody = "enim".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "officiis";
                xAmzDate = "architecto";
                xAmzSecurityToken = "alias";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTListInstanceProfilesResponse res = sdk.sdk.postListInstanceProfiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesForRoleActionEnum;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesForRoleRequest;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesForRoleResponse;
import org.openapis.openapi.models.operations.POSTListInstanceProfilesForRoleVersionEnum;
import org.openapis.openapi.models.shared.ListInstanceProfilesForRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListInstanceProfilesForRoleRequest req = new POSTListInstanceProfilesForRoleRequest(POSTListInstanceProfilesForRoleActionEnum.LIST_INSTANCE_PROFILES_FOR_ROLE, POSTListInstanceProfilesForRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "necessitatibus";
                maxItems = "quia";
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "debitis";
                xAmzDate = "ullam";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTListInstanceProfilesForRoleResponse res = sdk.sdk.postListInstanceProfilesForRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListMFADeviceTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListMFADeviceTagsRequest;
import org.openapis.openapi.models.operations.POSTListMFADeviceTagsResponse;
import org.openapis.openapi.models.operations.POSTListMFADeviceTagsVersionEnum;
import org.openapis.openapi.models.shared.ListMFADeviceTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListMFADeviceTagsRequest req = new POSTListMFADeviceTagsRequest(POSTListMFADeviceTagsActionEnum.LIST_MFA_DEVICE_TAGS, POSTListMFADeviceTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "iure";
                xAmzCredential = "quibusdam";
                xAmzDate = "quod";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "velit";
            }};            

            POSTListMFADeviceTagsResponse res = sdk.sdk.postListMFADeviceTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListMFADevicesActionEnum;
import org.openapis.openapi.models.operations.POSTListMFADevicesRequest;
import org.openapis.openapi.models.operations.POSTListMFADevicesResponse;
import org.openapis.openapi.models.operations.POSTListMFADevicesVersionEnum;
import org.openapis.openapi.models.shared.ListMFADevicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListMFADevicesRequest req = new POSTListMFADevicesRequest(POSTListMFADevicesActionEnum.LIST_MFA_DEVICES, POSTListMFADevicesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "dignissimos";
                maxItems = "laboriosam";
                requestBody = "sed".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "natus";
                xAmzCredential = "provident";
                xAmzDate = "cum";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTListMFADevicesResponse res = sdk.sdk.postListMFADevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProviderTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProviderTagsRequest;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProviderTagsResponse;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProviderTagsVersionEnum;
import org.openapis.openapi.models.shared.ListOpenIDConnectProviderTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListOpenIDConnectProviderTagsRequest req = new POSTListOpenIDConnectProviderTagsRequest(POSTListOpenIDConnectProviderTagsActionEnum.LIST_OPEN_ID_CONNECT_PROVIDER_TAGS, POSTListOpenIDConnectProviderTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "modi";
                xAmzCredential = "perspiciatis";
                xAmzDate = "hic";
                xAmzSecurityToken = "cum";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "libero";
            }};            

            POSTListOpenIDConnectProviderTagsResponse res = sdk.sdk.postListOpenIDConnectProviderTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProvidersActionEnum;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProvidersRequest;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProvidersResponse;
import org.openapis.openapi.models.operations.POSTListOpenIDConnectProvidersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListOpenIDConnectProvidersRequest req = new POSTListOpenIDConnectProvidersRequest(POSTListOpenIDConnectProvidersActionEnum.LIST_OPEN_ID_CONNECT_PROVIDERS, POSTListOpenIDConnectProvidersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "incidunt".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "autem";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "nesciunt";
            }};            

            POSTListOpenIDConnectProvidersResponse res = sdk.sdk.postListOpenIDConnectProviders(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListPoliciesRequest;
import org.openapis.openapi.models.shared.PolicyScopeTypeEnum;
import org.openapis.openapi.models.shared.PolicyUsageTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPoliciesRequest req = new POSTListPoliciesRequest(POSTListPoliciesActionEnum.LIST_POLICIES, POSTListPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "nemo";
                maxItems = "illum";
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "assumenda";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "ad";
            }};            

            POSTListPoliciesResponse res = sdk.sdk.postListPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPoliciesGrantingServiceAccessActionEnum;
import org.openapis.openapi.models.operations.POSTListPoliciesGrantingServiceAccessRequest;
import org.openapis.openapi.models.operations.POSTListPoliciesGrantingServiceAccessResponse;
import org.openapis.openapi.models.operations.POSTListPoliciesGrantingServiceAccessVersionEnum;
import org.openapis.openapi.models.shared.ListPoliciesGrantingServiceAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPoliciesGrantingServiceAccessRequest req = new POSTListPoliciesGrantingServiceAccessRequest(POSTListPoliciesGrantingServiceAccessActionEnum.LIST_POLICIES_GRANTING_SERVICE_ACCESS, POSTListPoliciesGrantingServiceAccessVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "incidunt";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "suscipit";
            }};            

            POSTListPoliciesGrantingServiceAccessResponse res = sdk.sdk.postListPoliciesGrantingServiceAccess(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPolicyTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListPolicyTagsRequest;
import org.openapis.openapi.models.operations.POSTListPolicyTagsResponse;
import org.openapis.openapi.models.operations.POSTListPolicyTagsVersionEnum;
import org.openapis.openapi.models.shared.ListPolicyTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPolicyTagsRequest req = new POSTListPolicyTagsRequest(POSTListPolicyTagsActionEnum.LIST_POLICY_TAGS, POSTListPolicyTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "molestias".getBytes();
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "est";
                xAmzCredential = "occaecati";
                xAmzDate = "labore";
                xAmzSecurityToken = "quo";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTListPolicyTagsResponse res = sdk.sdk.postListPolicyTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPolicyVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTListPolicyVersionsRequest;
import org.openapis.openapi.models.operations.POSTListPolicyVersionsResponse;
import org.openapis.openapi.models.operations.POSTListPolicyVersionsVersionEnum;
import org.openapis.openapi.models.shared.ListPolicyVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPolicyVersionsRequest req = new POSTListPolicyVersionsRequest(POSTListPolicyVersionsActionEnum.LIST_POLICY_VERSIONS, POSTListPolicyVersionsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "magnam";
                maxItems = "quaerat";
                requestBody = "eligendi".getBytes();
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "officiis";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "error";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTListPolicyVersionsResponse res = sdk.sdk.postListPolicyVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListRolePoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListRolePoliciesRequest;
import org.openapis.openapi.models.operations.POSTListRolePoliciesResponse;
import org.openapis.openapi.models.operations.POSTListRolePoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListRolePoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListRolePoliciesRequest req = new POSTListRolePoliciesRequest(POSTListRolePoliciesActionEnum.LIST_ROLE_POLICIES, POSTListRolePoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "nostrum";
                maxItems = "esse";
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "facere";
                xAmzCredential = "impedit";
                xAmzDate = "quasi";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "laboriosam";
            }};            

            POSTListRolePoliciesResponse res = sdk.sdk.postListRolePolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListRoleTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListRoleTagsRequest;
import org.openapis.openapi.models.operations.POSTListRoleTagsResponse;
import org.openapis.openapi.models.operations.POSTListRoleTagsVersionEnum;
import org.openapis.openapi.models.shared.ListRoleTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListRoleTagsRequest req = new POSTListRoleTagsRequest(POSTListRoleTagsActionEnum.LIST_ROLE_TAGS, POSTListRoleTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "voluptatem".getBytes();
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "maxime";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "similique";
            }};            

            POSTListRoleTagsResponse res = sdk.sdk.postListRoleTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListRolesActionEnum;
import org.openapis.openapi.models.operations.POSTListRolesRequest;
import org.openapis.openapi.models.operations.POSTListRolesResponse;
import org.openapis.openapi.models.operations.POSTListRolesVersionEnum;
import org.openapis.openapi.models.shared.ListRolesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListRolesRequest req = new POSTListRolesRequest(POSTListRolesActionEnum.LIST_ROLES, POSTListRolesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "blanditiis";
                maxItems = "quae";
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "sed";
                xAmzCredential = "necessitatibus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "a";
            }};            

            POSTListRolesResponse res = sdk.sdk.postListRoles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListSAMLProviderTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListSAMLProviderTagsRequest;
import org.openapis.openapi.models.operations.POSTListSAMLProviderTagsResponse;
import org.openapis.openapi.models.operations.POSTListSAMLProviderTagsVersionEnum;
import org.openapis.openapi.models.shared.ListSAMLProviderTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListSAMLProviderTagsRequest req = new POSTListSAMLProviderTagsRequest(POSTListSAMLProviderTagsActionEnum.LIST_SAML_PROVIDER_TAGS, POSTListSAMLProviderTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "laudantium".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "alias";
                xAmzCredential = "asperiores";
                xAmzDate = "rem";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "earum";
            }};            

            POSTListSAMLProviderTagsResponse res = sdk.sdk.postListSAMLProviderTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListSAMLProvidersActionEnum;
import org.openapis.openapi.models.operations.POSTListSAMLProvidersRequest;
import org.openapis.openapi.models.operations.POSTListSAMLProvidersResponse;
import org.openapis.openapi.models.operations.POSTListSAMLProvidersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListSAMLProvidersRequest req = new POSTListSAMLProvidersRequest(POSTListSAMLProvidersActionEnum.LIST_SAML_PROVIDERS, POSTListSAMLProvidersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "in";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "vero";
            }};            

            POSTListSAMLProvidersResponse res = sdk.sdk.postListSAMLProviders(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListSSHPublicKeysActionEnum;
import org.openapis.openapi.models.operations.POSTListSSHPublicKeysRequest;
import org.openapis.openapi.models.operations.POSTListSSHPublicKeysResponse;
import org.openapis.openapi.models.operations.POSTListSSHPublicKeysVersionEnum;
import org.openapis.openapi.models.shared.ListSSHPublicKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListSSHPublicKeysRequest req = new POSTListSSHPublicKeysRequest(POSTListSSHPublicKeysActionEnum.LIST_SSH_PUBLIC_KEYS, POSTListSSHPublicKeysVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "accusantium";
                maxItems = "qui";
                requestBody = "impedit".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "dicta";
                xAmzDate = "odit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "alias";
            }};            

            POSTListSSHPublicKeysResponse res = sdk.sdk.postListSSHPublicKeys(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListServerCertificateTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListServerCertificateTagsRequest;
import org.openapis.openapi.models.operations.POSTListServerCertificateTagsResponse;
import org.openapis.openapi.models.operations.POSTListServerCertificateTagsVersionEnum;
import org.openapis.openapi.models.shared.ListServerCertificateTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListServerCertificateTagsRequest req = new POSTListServerCertificateTagsRequest(POSTListServerCertificateTagsActionEnum.LIST_SERVER_CERTIFICATE_TAGS, POSTListServerCertificateTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "id";
                xAmzCredential = "laboriosam";
                xAmzDate = "ex";
                xAmzSecurityToken = "quas";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ullam";
            }};            

            POSTListServerCertificateTagsResponse res = sdk.sdk.postListServerCertificateTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListServerCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTListServerCertificatesRequest;
import org.openapis.openapi.models.operations.POSTListServerCertificatesResponse;
import org.openapis.openapi.models.operations.POSTListServerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.ListServerCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListServerCertificatesRequest req = new POSTListServerCertificatesRequest(POSTListServerCertificatesActionEnum.LIST_SERVER_CERTIFICATES, POSTListServerCertificatesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "similique";
                maxItems = "incidunt";
                requestBody = "quam".getBytes();
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "delectus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "sed";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "maxime";
            }};            

            POSTListServerCertificatesResponse res = sdk.sdk.postListServerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListServiceSpecificCredentialsActionEnum;
import org.openapis.openapi.models.operations.POSTListServiceSpecificCredentialsRequest;
import org.openapis.openapi.models.operations.POSTListServiceSpecificCredentialsResponse;
import org.openapis.openapi.models.operations.POSTListServiceSpecificCredentialsVersionEnum;
import org.openapis.openapi.models.shared.ListServiceSpecificCredentialsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListServiceSpecificCredentialsRequest req = new POSTListServiceSpecificCredentialsRequest(POSTListServiceSpecificCredentialsActionEnum.LIST_SERVICE_SPECIFIC_CREDENTIALS, POSTListServiceSpecificCredentialsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "cupiditate".getBytes();
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "maiores";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "velit";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            POSTListServiceSpecificCredentialsResponse res = sdk.sdk.postListServiceSpecificCredentials(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListSigningCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTListSigningCertificatesRequest;
import org.openapis.openapi.models.operations.POSTListSigningCertificatesResponse;
import org.openapis.openapi.models.operations.POSTListSigningCertificatesVersionEnum;
import org.openapis.openapi.models.shared.ListSigningCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListSigningCertificatesRequest req = new POSTListSigningCertificatesRequest(POSTListSigningCertificatesActionEnum.LIST_SIGNING_CERTIFICATES, POSTListSigningCertificatesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "ipsa";
                maxItems = "quisquam";
                requestBody = "tenetur".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "aliquid";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "a";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            POSTListSigningCertificatesResponse res = sdk.sdk.postListSigningCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListUserPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListUserPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListUserPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListUserPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListUserPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListUserPoliciesRequest req = new POSTListUserPoliciesRequest(POSTListUserPoliciesActionEnum.LIST_USER_POLICIES, POSTListUserPoliciesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "dicta";
                maxItems = "minus";
                requestBody = "commodi".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "porro";
                xAmzCredential = "tempore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "modi";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTListUserPoliciesResponse res = sdk.sdk.postListUserPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListUserTagsActionEnum;
import org.openapis.openapi.models.operations.POSTListUserTagsRequest;
import org.openapis.openapi.models.operations.POSTListUserTagsResponse;
import org.openapis.openapi.models.operations.POSTListUserTagsVersionEnum;
import org.openapis.openapi.models.shared.ListUserTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListUserTagsRequest req = new POSTListUserTagsRequest(POSTListUserTagsActionEnum.LIST_USER_TAGS, POSTListUserTagsVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "sequi";
                maxItems = "eligendi";
                requestBody = "asperiores".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "sint";
                xAmzDate = "repellat";
                xAmzSecurityToken = "a";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTListUserTagsResponse res = sdk.sdk.postListUserTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListUsersActionEnum;
import org.openapis.openapi.models.operations.POSTListUsersRequest;
import org.openapis.openapi.models.operations.POSTListUsersResponse;
import org.openapis.openapi.models.operations.POSTListUsersVersionEnum;
import org.openapis.openapi.models.shared.ListUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListUsersRequest req = new POSTListUsersRequest(POSTListUsersActionEnum.LIST_USERS, POSTListUsersVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "nulla";
                maxItems = "deserunt";
                requestBody = "corporis".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "enim";
                xAmzDate = "officia";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTListUsersResponse res = sdk.sdk.postListUsers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListVirtualMFADevicesActionEnum;
import org.openapis.openapi.models.operations.POSTListVirtualMFADevicesRequest;
import org.openapis.openapi.models.operations.POSTListVirtualMFADevicesResponse;
import org.openapis.openapi.models.operations.POSTListVirtualMFADevicesVersionEnum;
import org.openapis.openapi.models.shared.AssignmentStatusTypeEnum;
import org.openapis.openapi.models.shared.ListVirtualMFADevicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListVirtualMFADevicesRequest req = new POSTListVirtualMFADevicesRequest(POSTListVirtualMFADevicesActionEnum.LIST_VIRTUAL_MFA_DEVICES, POSTListVirtualMFADevicesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "officia";
                maxItems = "impedit";
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "quisquam";
                xAmzDate = "eos";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minus";
            }};            

            POSTListVirtualMFADevicesResponse res = sdk.sdk.postListVirtualMFADevices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutGroupPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTPutGroupPolicyRequest;
import org.openapis.openapi.models.operations.POSTPutGroupPolicyResponse;
import org.openapis.openapi.models.operations.POSTPutGroupPolicyVersionEnum;
import org.openapis.openapi.models.shared.PutGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutGroupPolicyRequest req = new POSTPutGroupPolicyRequest(POSTPutGroupPolicyActionEnum.PUT_GROUP_POLICY, POSTPutGroupPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quos";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "amet";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "amet";
            }};            

            POSTPutGroupPolicyResponse res = sdk.sdk.postPutGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutRolePermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.POSTPutRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.POSTPutRolePermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.POSTPutRolePermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.PutRolePermissionsBoundaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutRolePermissionsBoundaryRequest req = new POSTPutRolePermissionsBoundaryRequest(POSTPutRolePermissionsBoundaryActionEnum.PUT_ROLE_PERMISSIONS_BOUNDARY, POSTPutRolePermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "modi".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "architecto";
                xAmzDate = "molestias";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTPutRolePermissionsBoundaryResponse res = sdk.sdk.postPutRolePermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTPutRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTPutRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTPutRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.PutRolePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutRolePolicyRequest req = new POSTPutRolePolicyRequest(POSTPutRolePolicyActionEnum.PUT_ROLE_POLICY, POSTPutRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "odit".getBytes();
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "ipsam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTPutRolePolicyResponse res = sdk.sdk.postPutRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutUserPermissionsBoundaryActionEnum;
import org.openapis.openapi.models.operations.POSTPutUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.operations.POSTPutUserPermissionsBoundaryResponse;
import org.openapis.openapi.models.operations.POSTPutUserPermissionsBoundaryVersionEnum;
import org.openapis.openapi.models.shared.PutUserPermissionsBoundaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutUserPermissionsBoundaryRequest req = new POSTPutUserPermissionsBoundaryRequest(POSTPutUserPermissionsBoundaryActionEnum.PUT_USER_PERMISSIONS_BOUNDARY, POSTPutUserPermissionsBoundaryVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nisi".getBytes();
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quis";
                xAmzCredential = "quibusdam";
                xAmzDate = "nemo";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "sit";
            }};            

            POSTPutUserPermissionsBoundaryResponse res = sdk.sdk.postPutUserPermissionsBoundary(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutUserPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTPutUserPolicyRequest;
import org.openapis.openapi.models.operations.POSTPutUserPolicyResponse;
import org.openapis.openapi.models.operations.POSTPutUserPolicyVersionEnum;
import org.openapis.openapi.models.shared.PutUserPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutUserPolicyRequest req = new POSTPutUserPolicyRequest(POSTPutUserPolicyActionEnum.PUT_USER_POLICY, POSTPutUserPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "repellendus".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "id";
                xAmzCredential = "sapiente";
                xAmzDate = "sed";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTPutUserPolicyResponse res = sdk.sdk.postPutUserPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveClientIDFromOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveClientIDFromOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTRemoveClientIDFromOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.RemoveClientIDFromOpenIDConnectProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveClientIDFromOpenIDConnectProviderRequest req = new POSTRemoveClientIDFromOpenIDConnectProviderRequest(POSTRemoveClientIDFromOpenIDConnectProviderActionEnum.REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER, POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "harum";
                xAmzCredential = "dolore";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "iure";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minus";
            }};            

            POSTRemoveClientIDFromOpenIDConnectProviderResponse res = sdk.sdk.postRemoveClientIDFromOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTRemoveRoleFromInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.RemoveRoleFromInstanceProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveRoleFromInstanceProfileRequest req = new POSTRemoveRoleFromInstanceProfileRequest(POSTRemoveRoleFromInstanceProfileActionEnum.REMOVE_ROLE_FROM_INSTANCE_PROFILE, POSTRemoveRoleFromInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "dolorum".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "earum";
                xAmzCredential = "praesentium";
                xAmzDate = "error";
                xAmzSecurityToken = "non";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTRemoveRoleFromInstanceProfileResponse res = sdk.sdk.postRemoveRoleFromInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveUserFromGroup

Removes the specified user from the specified group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveUserFromGroupActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveUserFromGroupRequest;
import org.openapis.openapi.models.operations.POSTRemoveUserFromGroupResponse;
import org.openapis.openapi.models.operations.POSTRemoveUserFromGroupVersionEnum;
import org.openapis.openapi.models.shared.RemoveUserFromGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveUserFromGroupRequest req = new POSTRemoveUserFromGroupRequest(POSTRemoveUserFromGroupActionEnum.REMOVE_USER_FROM_GROUP, POSTRemoveUserFromGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "harum".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "expedita";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "aliquid";
            }};            

            POSTRemoveUserFromGroupResponse res = sdk.sdk.postRemoveUserFromGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.POSTResetServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.POSTResetServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.POSTResetServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.ResetServiceSpecificCredentialRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetServiceSpecificCredentialRequest req = new POSTResetServiceSpecificCredentialRequest(POSTResetServiceSpecificCredentialActionEnum.RESET_SERVICE_SPECIFIC_CREDENTIAL, POSTResetServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "magni".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "dolor";
                xAmzDate = "rerum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "optio";
            }};            

            POSTResetServiceSpecificCredentialResponse res = sdk.sdk.postResetServiceSpecificCredential(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResyncMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTResyncMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTResyncMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTResyncMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.ResyncMFADeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResyncMFADeviceRequest req = new POSTResyncMFADeviceRequest(POSTResyncMFADeviceActionEnum.RESYNC_MFA_DEVICE, POSTResyncMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "quos";
                xAmzCredential = "asperiores";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iste";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTResyncMFADeviceResponse res = sdk.sdk.postResyncMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetDefaultPolicyVersionActionEnum;
import org.openapis.openapi.models.operations.POSTSetDefaultPolicyVersionRequest;
import org.openapis.openapi.models.operations.POSTSetDefaultPolicyVersionResponse;
import org.openapis.openapi.models.operations.POSTSetDefaultPolicyVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetDefaultPolicyVersionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetDefaultPolicyVersionRequest req = new POSTSetDefaultPolicyVersionRequest(POSTSetDefaultPolicyVersionActionEnum.SET_DEFAULT_POLICY_VERSION, POSTSetDefaultPolicyVersionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "at";
                xAmzDate = "possimus";
                xAmzSecurityToken = "neque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "vel";
            }};            

            POSTSetDefaultPolicyVersionResponse res = sdk.sdk.postSetDefaultPolicyVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetSecurityTokenServicePreferencesActionEnum;
import org.openapis.openapi.models.operations.POSTSetSecurityTokenServicePreferencesRequest;
import org.openapis.openapi.models.operations.POSTSetSecurityTokenServicePreferencesResponse;
import org.openapis.openapi.models.operations.POSTSetSecurityTokenServicePreferencesVersionEnum;
import org.openapis.openapi.models.shared.GlobalEndpointTokenVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetSecurityTokenServicePreferencesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetSecurityTokenServicePreferencesRequest req = new POSTSetSecurityTokenServicePreferencesRequest(POSTSetSecurityTokenServicePreferencesActionEnum.SET_SECURITY_TOKEN_SERVICE_PREFERENCES, POSTSetSecurityTokenServicePreferencesVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aperiam";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTSetSecurityTokenServicePreferencesResponse res = sdk.sdk.postSetSecurityTokenServicePreferences(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSimulateCustomPolicy

<p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSimulateCustomPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTSimulateCustomPolicyRequest;
import org.openapis.openapi.models.operations.POSTSimulateCustomPolicyResponse;
import org.openapis.openapi.models.operations.POSTSimulateCustomPolicyVersionEnum;
import org.openapis.openapi.models.shared.ContextEntry;
import org.openapis.openapi.models.shared.ContextKeyTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulateCustomPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSimulateCustomPolicyRequest req = new POSTSimulateCustomPolicyRequest(POSTSimulateCustomPolicyActionEnum.SIMULATE_CUSTOM_POLICY, POSTSimulateCustomPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "quas";
                maxItems = "consequuntur";
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laudantium";
                xAmzDate = "est";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTSimulateCustomPolicyResponse res = sdk.sdk.postSimulateCustomPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSimulatePrincipalPolicy

<p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSimulatePrincipalPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTSimulatePrincipalPolicyRequest;
import org.openapis.openapi.models.operations.POSTSimulatePrincipalPolicyResponse;
import org.openapis.openapi.models.operations.POSTSimulatePrincipalPolicyVersionEnum;
import org.openapis.openapi.models.shared.ContextEntry;
import org.openapis.openapi.models.shared.ContextKeyTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimulatePrincipalPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSimulatePrincipalPolicyRequest req = new POSTSimulatePrincipalPolicyRequest(POSTSimulatePrincipalPolicyActionEnum.SIMULATE_PRINCIPAL_POLICY, POSTSimulatePrincipalPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                marker = "rem";
                maxItems = "voluptatum";
                requestBody = "ducimus".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "tempora";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "voluptatum";
            }};            

            POSTSimulatePrincipalPolicyResponse res = sdk.sdk.postSimulatePrincipalPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagInstanceProfile

<p>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTTagInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTTagInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTTagInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagInstanceProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagInstanceProfileRequest req = new POSTTagInstanceProfileRequest(POSTTagInstanceProfileActionEnum.TAG_INSTANCE_PROFILE, POSTTagInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "rerum".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "autem";
                xAmzDate = "quidem";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "deserunt";
            }};            

            POSTTagInstanceProfileResponse res = sdk.sdk.postTagInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagMFADevice

<p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTTagMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTTagMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTTagMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagMFADeviceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagMFADeviceRequest req = new POSTTagMFADeviceRequest(POSTTagMFADeviceActionEnum.TAG_MFA_DEVICE, POSTTagMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nihil".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "animi";
                xAmzCredential = "commodi";
                xAmzDate = "alias";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "dolore";
            }};            

            POSTTagMFADeviceResponse res = sdk.sdk.postTagMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagOpenIDConnectProvider

<p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTTagOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTTagOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTTagOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagOpenIDConnectProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagOpenIDConnectProviderRequest req = new POSTTagOpenIDConnectProviderRequest(POSTTagOpenIDConnectProviderActionEnum.TAG_OPEN_ID_CONNECT_PROVIDER, POSTTagOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "eligendi";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "unde";
            }};            

            POSTTagOpenIDConnectProviderResponse res = sdk.sdk.postTagOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagPolicy

<p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTTagPolicyRequest;
import org.openapis.openapi.models.operations.POSTTagPolicyResponse;
import org.openapis.openapi.models.operations.POSTTagPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagPolicyRequest req = new POSTTagPolicyRequest(POSTTagPolicyActionEnum.TAG_POLICY, POSTTagPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nihil".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "libero";
                xAmzCredential = "ipsam";
                xAmzDate = "quasi";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
            }};            

            POSTTagPolicyResponse res = sdk.sdk.postTagPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagRole

<p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagRoleActionEnum;
import org.openapis.openapi.models.operations.POSTTagRoleRequest;
import org.openapis.openapi.models.operations.POSTTagRoleResponse;
import org.openapis.openapi.models.operations.POSTTagRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagRoleRequest req = new POSTTagRoleRequest(POSTTagRoleActionEnum.TAG_ROLE, POSTTagRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "delectus";
                xAmzDate = "labore";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "rem";
            }};            

            POSTTagRoleResponse res = sdk.sdk.postTagRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagSAMLProvider

<p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTTagSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTTagSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTTagSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagSAMLProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagSAMLProviderRequest req = new POSTTagSAMLProviderRequest(POSTTagSAMLProviderActionEnum.TAG_SAML_PROVIDER, POSTTagSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "officiis".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "minus";
            }};            

            POSTTagSAMLProviderResponse res = sdk.sdk.postTagSAMLProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagServerCertificate

<p>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTTagServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTTagServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTTagServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagServerCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagServerCertificateRequest req = new POSTTagServerCertificateRequest(POSTTagServerCertificateActionEnum.TAG_SERVER_CERTIFICATE, POSTTagServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "id".getBytes();
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "libero";
                xAmzDate = "quo";
                xAmzSecurityToken = "esse";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "maxime";
            }};            

            POSTTagServerCertificateResponse res = sdk.sdk.postTagServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagUser

<p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTagUserActionEnum;
import org.openapis.openapi.models.operations.POSTTagUserRequest;
import org.openapis.openapi.models.operations.POSTTagUserResponse;
import org.openapis.openapi.models.operations.POSTTagUserVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTagUserRequest req = new POSTTagUserRequest(POSTTagUserActionEnum.TAG_USER, POSTTagUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "soluta".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "eligendi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTTagUserResponse res = sdk.sdk.postTagUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagInstanceProfileActionEnum;
import org.openapis.openapi.models.operations.POSTUntagInstanceProfileRequest;
import org.openapis.openapi.models.operations.POSTUntagInstanceProfileResponse;
import org.openapis.openapi.models.operations.POSTUntagInstanceProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagInstanceProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagInstanceProfileRequest req = new POSTUntagInstanceProfileRequest(POSTUntagInstanceProfileActionEnum.UNTAG_INSTANCE_PROFILE, POSTUntagInstanceProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "magni";
                xAmzDate = "rerum";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "eum";
            }};            

            POSTUntagInstanceProfileResponse res = sdk.sdk.postUntagInstanceProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagMFADeviceActionEnum;
import org.openapis.openapi.models.operations.POSTUntagMFADeviceRequest;
import org.openapis.openapi.models.operations.POSTUntagMFADeviceResponse;
import org.openapis.openapi.models.operations.POSTUntagMFADeviceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagMFADeviceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagMFADeviceRequest req = new POSTUntagMFADeviceRequest(POSTUntagMFADeviceActionEnum.UNTAG_MFA_DEVICE, POSTUntagMFADeviceVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "blanditiis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "atque";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "deserunt";
            }};            

            POSTUntagMFADeviceResponse res = sdk.sdk.postUntagMFADevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagOpenIDConnectProviderActionEnum;
import org.openapis.openapi.models.operations.POSTUntagOpenIDConnectProviderRequest;
import org.openapis.openapi.models.operations.POSTUntagOpenIDConnectProviderResponse;
import org.openapis.openapi.models.operations.POSTUntagOpenIDConnectProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagOpenIDConnectProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagOpenIDConnectProviderRequest req = new POSTUntagOpenIDConnectProviderRequest(POSTUntagOpenIDConnectProviderActionEnum.UNTAG_OPEN_ID_CONNECT_PROVIDER, POSTUntagOpenIDConnectProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "est";
                xAmzDate = "enim";
                xAmzSecurityToken = "rem";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "quae";
            }};            

            POSTUntagOpenIDConnectProviderResponse res = sdk.sdk.postUntagOpenIDConnectProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTUntagPolicyRequest;
import org.openapis.openapi.models.operations.POSTUntagPolicyResponse;
import org.openapis.openapi.models.operations.POSTUntagPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagPolicyRequest req = new POSTUntagPolicyRequest(POSTUntagPolicyActionEnum.UNTAG_POLICY, POSTUntagPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "placeat".getBytes();
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "labore";
                xAmzCredential = "sapiente";
                xAmzDate = "saepe";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "natus";
            }};            

            POSTUntagPolicyResponse res = sdk.sdk.postUntagPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagRoleActionEnum;
import org.openapis.openapi.models.operations.POSTUntagRoleRequest;
import org.openapis.openapi.models.operations.POSTUntagRoleResponse;
import org.openapis.openapi.models.operations.POSTUntagRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagRoleRequest req = new POSTUntagRoleRequest(POSTUntagRoleActionEnum.UNTAG_ROLE, POSTUntagRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "natus".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "quia";
                xAmzDate = "officiis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "quis";
            }};            

            POSTUntagRoleResponse res = sdk.sdk.postUntagRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTUntagSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTUntagSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTUntagSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagSAMLProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagSAMLProviderRequest req = new POSTUntagSAMLProviderRequest(POSTUntagSAMLProviderActionEnum.UNTAG_SAML_PROVIDER, POSTUntagSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "nesciunt";
                xAmzDate = "sit";
                xAmzSecurityToken = "odio";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "asperiores";
            }};            

            POSTUntagSAMLProviderResponse res = sdk.sdk.postUntagSAMLProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTUntagServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTUntagServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTUntagServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagServerCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagServerCertificateRequest req = new POSTUntagServerCertificateRequest(POSTUntagServerCertificateActionEnum.UNTAG_SERVER_CERTIFICATE, POSTUntagServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "voluptates".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "fugit";
                xAmzDate = "sit";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sed";
            }};            

            POSTUntagServerCertificateResponse res = sdk.sdk.postUntagServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUntagUserActionEnum;
import org.openapis.openapi.models.operations.POSTUntagUserRequest;
import org.openapis.openapi.models.operations.POSTUntagUserResponse;
import org.openapis.openapi.models.operations.POSTUntagUserVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUntagUserRequest req = new POSTUntagUserRequest(POSTUntagUserActionEnum.UNTAG_USER, POSTUntagUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "laborum";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "sunt";
            }};            

            POSTUntagUserResponse res = sdk.sdk.postUntagUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAccessKeyActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAccessKeyRequest;
import org.openapis.openapi.models.operations.POSTUpdateAccessKeyResponse;
import org.openapis.openapi.models.operations.POSTUpdateAccessKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusTypeEnum;
import org.openapis.openapi.models.shared.UpdateAccessKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAccessKeyRequest req = new POSTUpdateAccessKeyRequest(POSTUpdateAccessKeyActionEnum.UPDATE_ACCESS_KEY, POSTUpdateAccessKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "at";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "inventore";
            }};            

            POSTUpdateAccessKeyResponse res = sdk.sdk.postUpdateAccessKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAccountPasswordPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAccountPasswordPolicyRequest;
import org.openapis.openapi.models.operations.POSTUpdateAccountPasswordPolicyResponse;
import org.openapis.openapi.models.operations.POSTUpdateAccountPasswordPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccountPasswordPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAccountPasswordPolicyRequest req = new POSTUpdateAccountPasswordPolicyRequest(POSTUpdateAccountPasswordPolicyActionEnum.UPDATE_ACCOUNT_PASSWORD_POLICY, POSTUpdateAccountPasswordPolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "hic";
                xAmzCredential = "eaque";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTUpdateAccountPasswordPolicyResponse res = sdk.sdk.postUpdateAccountPasswordPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAssumeRolePolicyActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAssumeRolePolicyRequest;
import org.openapis.openapi.models.operations.POSTUpdateAssumeRolePolicyResponse;
import org.openapis.openapi.models.operations.POSTUpdateAssumeRolePolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAssumeRolePolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAssumeRolePolicyRequest req = new POSTUpdateAssumeRolePolicyRequest(POSTUpdateAssumeRolePolicyActionEnum.UPDATE_ASSUME_ROLE_POLICY, POSTUpdateAssumeRolePolicyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "enim".getBytes();
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "delectus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "optio";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "ex";
            }};            

            POSTUpdateAssumeRolePolicyResponse res = sdk.sdk.postUpdateAssumeRolePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateGroupActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateGroupRequest;
import org.openapis.openapi.models.operations.POSTUpdateGroupResponse;
import org.openapis.openapi.models.operations.POSTUpdateGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateGroupRequest req = new POSTUpdateGroupRequest(POSTUpdateGroupActionEnum.UPDATE_GROUP, POSTUpdateGroupVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "beatae";
            }};            

            POSTUpdateGroupResponse res = sdk.sdk.postUpdateGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateLoginProfileActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateLoginProfileRequest;
import org.openapis.openapi.models.operations.POSTUpdateLoginProfileResponse;
import org.openapis.openapi.models.operations.POSTUpdateLoginProfileVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLoginProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateLoginProfileRequest req = new POSTUpdateLoginProfileRequest(POSTUpdateLoginProfileActionEnum.UPDATE_LOGIN_PROFILE, POSTUpdateLoginProfileVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "tenetur";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "esse";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTUpdateLoginProfileResponse res = sdk.sdk.postUpdateLoginProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateOpenIDConnectProviderThumbprintActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateOpenIDConnectProviderThumbprintRequest;
import org.openapis.openapi.models.operations.POSTUpdateOpenIDConnectProviderThumbprintResponse;
import org.openapis.openapi.models.operations.POSTUpdateOpenIDConnectProviderThumbprintVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateOpenIDConnectProviderThumbprintRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateOpenIDConnectProviderThumbprintRequest req = new POSTUpdateOpenIDConnectProviderThumbprintRequest(POSTUpdateOpenIDConnectProviderThumbprintActionEnum.UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT, POSTUpdateOpenIDConnectProviderThumbprintVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "eveniet".getBytes();
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "velit";
                xAmzCredential = "officiis";
                xAmzDate = "eius";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTUpdateOpenIDConnectProviderThumbprintResponse res = sdk.sdk.postUpdateOpenIDConnectProviderThumbprint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateRole

Updates the description or maximum session duration setting of a role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateRoleActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateRoleRequest;
import org.openapis.openapi.models.operations.POSTUpdateRoleResponse;
import org.openapis.openapi.models.operations.POSTUpdateRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateRoleRequest req = new POSTUpdateRoleRequest(POSTUpdateRoleActionEnum.UPDATE_ROLE, POSTUpdateRoleVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTUpdateRoleResponse res = sdk.sdk.postUpdateRole(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateRoleDescriptionActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateRoleDescriptionRequest;
import org.openapis.openapi.models.operations.POSTUpdateRoleDescriptionResponse;
import org.openapis.openapi.models.operations.POSTUpdateRoleDescriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRoleDescriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateRoleDescriptionRequest req = new POSTUpdateRoleDescriptionRequest(POSTUpdateRoleDescriptionActionEnum.UPDATE_ROLE_DESCRIPTION, POSTUpdateRoleDescriptionVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "expedita";
                xAmzDate = "libero";
                xAmzSecurityToken = "iste";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "minus";
            }};            

            POSTUpdateRoleDescriptionResponse res = sdk.sdk.postUpdateRoleDescription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateSAMLProviderActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateSAMLProviderRequest;
import org.openapis.openapi.models.operations.POSTUpdateSAMLProviderResponse;
import org.openapis.openapi.models.operations.POSTUpdateSAMLProviderVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSAMLProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateSAMLProviderRequest req = new POSTUpdateSAMLProviderRequest(POSTUpdateSAMLProviderActionEnum.UPDATE_SAML_PROVIDER, POSTUpdateSAMLProviderVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "temporibus".getBytes();
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTUpdateSAMLProviderResponse res = sdk.sdk.postUpdateSAMLProvider(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.POSTUpdateSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.POSTUpdateSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusTypeEnum;
import org.openapis.openapi.models.shared.UpdateSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateSSHPublicKeyRequest req = new POSTUpdateSSHPublicKeyRequest(POSTUpdateSSHPublicKeyActionEnum.UPDATE_SSH_PUBLIC_KEY, POSTUpdateSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "illum";
                xAmzCredential = "rem";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "earum";
            }};            

            POSTUpdateSSHPublicKeyResponse res = sdk.sdk.postUpdateSSHPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTUpdateServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTUpdateServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServerCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateServerCertificateRequest req = new POSTUpdateServerCertificateRequest(POSTUpdateServerCertificateActionEnum.UPDATE_SERVER_CERTIFICATE, POSTUpdateServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "sequi";
                xAmzDate = "saepe";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTUpdateServerCertificateResponse res = sdk.sdk.postUpdateServerCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateServiceSpecificCredentialActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateServiceSpecificCredentialRequest;
import org.openapis.openapi.models.operations.POSTUpdateServiceSpecificCredentialResponse;
import org.openapis.openapi.models.operations.POSTUpdateServiceSpecificCredentialVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusTypeEnum;
import org.openapis.openapi.models.shared.UpdateServiceSpecificCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateServiceSpecificCredentialRequest req = new POSTUpdateServiceSpecificCredentialRequest(POSTUpdateServiceSpecificCredentialActionEnum.UPDATE_SERVICE_SPECIFIC_CREDENTIAL, POSTUpdateServiceSpecificCredentialVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "dolorum";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "ad";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "sequi";
            }};            

            POSTUpdateServiceSpecificCredentialResponse res = sdk.sdk.postUpdateServiceSpecificCredential(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateSigningCertificateRequest;
import org.openapis.openapi.models.operations.POSTUpdateSigningCertificateResponse;
import org.openapis.openapi.models.operations.POSTUpdateSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatusTypeEnum;
import org.openapis.openapi.models.shared.UpdateSigningCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateSigningCertificateRequest req = new POSTUpdateSigningCertificateRequest(POSTUpdateSigningCertificateActionEnum.UPDATE_SIGNING_CERTIFICATE, POSTUpdateSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "omnis";
                xAmzDate = "aut";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "cupiditate";
            }};            

            POSTUpdateSigningCertificateResponse res = sdk.sdk.postUpdateSigningCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateUserActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateUserRequest;
import org.openapis.openapi.models.operations.POSTUpdateUserResponse;
import org.openapis.openapi.models.operations.POSTUpdateUserVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateUserRequest req = new POSTUpdateUserRequest(POSTUpdateUserActionEnum.UPDATE_USER, POSTUpdateUserVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "quia".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ad";
                xAmzDate = "nisi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTUpdateUserResponse res = sdk.sdk.postUpdateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUploadSSHPublicKeyActionEnum;
import org.openapis.openapi.models.operations.POSTUploadSSHPublicKeyRequest;
import org.openapis.openapi.models.operations.POSTUploadSSHPublicKeyResponse;
import org.openapis.openapi.models.operations.POSTUploadSSHPublicKeyVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadSSHPublicKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUploadSSHPublicKeyRequest req = new POSTUploadSSHPublicKeyRequest(POSTUploadSSHPublicKeyActionEnum.UPLOAD_SSH_PUBLIC_KEY, POSTUploadSSHPublicKeyVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "odit".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "eos";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "sint";
            }};            

            POSTUploadSSHPublicKeyResponse res = sdk.sdk.postUploadSSHPublicKey(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUploadServerCertificate

<p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUploadServerCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTUploadServerCertificateRequest;
import org.openapis.openapi.models.operations.POSTUploadServerCertificateResponse;
import org.openapis.openapi.models.operations.POSTUploadServerCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UploadServerCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUploadServerCertificateRequest req = new POSTUploadServerCertificateRequest(POSTUploadServerCertificateActionEnum.UPLOAD_SERVER_CERTIFICATE, POSTUploadServerCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "sapiente";
                xAmzDate = "quam";
                xAmzSecurityToken = "est";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "delectus";
            }};            

            POSTUploadServerCertificateResponse res = sdk.sdk.postUploadServerCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUploadSigningCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTUploadSigningCertificateRequest;
import org.openapis.openapi.models.operations.POSTUploadSigningCertificateResponse;
import org.openapis.openapi.models.operations.POSTUploadSigningCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UploadSigningCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUploadSigningCertificateRequest req = new POSTUploadSigningCertificateRequest(POSTUploadSigningCertificateActionEnum.UPLOAD_SIGNING_CERTIFICATE, POSTUploadSigningCertificateVersionEnum.TWO_THOUSAND_AND_TEN0508) {{
                requestBody = "voluptatum".getBytes();
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "quod";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "non";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "laborum";
            }};            

            POSTUploadSigningCertificateResponse res = sdk.sdk.postUploadSigningCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
