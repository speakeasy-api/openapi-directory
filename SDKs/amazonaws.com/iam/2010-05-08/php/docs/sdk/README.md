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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddClientIDToOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddClientIDToOpenIDConnectProviderRequest();
    $request->action = GETAddClientIDToOpenIDConnectProviderActionEnum::ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER;
    $request->clientID = 'error';
    $request->openIDConnectProviderArn = 'deserunt';
    $request->version = GETAddClientIDToOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getAddClientIDToOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddRoleToInstanceProfileRequest();
    $request->action = GETAddRoleToInstanceProfileActionEnum::ADD_ROLE_TO_INSTANCE_PROFILE;
    $request->instanceProfileName = 'suscipit';
    $request->roleName = 'molestiae';
    $request->version = GETAddRoleToInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getAddRoleToInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddUserToGroup

Adds the specified user to the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddUserToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddUserToGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddUserToGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddUserToGroupRequest();
    $request->action = GETAddUserToGroupActionEnum::ADD_USER_TO_GROUP;
    $request->groupName = 'temporibus';
    $request->userName = 'Antonetta64';
    $request->version = GETAddUserToGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getAddUserToGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachGroupPolicyRequest();
    $request->action = GETAttachGroupPolicyActionEnum::ATTACH_GROUP_POLICY;
    $request->groupName = 'at';
    $request->policyArn = 'maiores';
    $request->version = GETAttachGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getAttachGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachRolePolicyRequest();
    $request->action = GETAttachRolePolicyActionEnum::ATTACH_ROLE_POLICY;
    $request->policyArn = 'dicta';
    $request->roleName = 'nam';
    $request->version = GETAttachRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getAttachRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachUserPolicyRequest();
    $request->action = GETAttachUserPolicyActionEnum::ATTACH_USER_POLICY;
    $request->policyArn = 'beatae';
    $request->userName = 'Haskell18';
    $request->version = GETAttachUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getAttachUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETChangePasswordActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETChangePasswordVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChangePasswordRequest();
    $request->action = GETChangePasswordActionEnum::CHANGE_PASSWORD;
    $request->newPassword = 'ad';
    $request->oldPassword = 'natus';
    $request->version = GETChangePasswordVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getChangePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateAccessKeyRequest();
    $request->action = GETCreateAccessKeyActionEnum::CREATE_ACCESS_KEY;
    $request->userName = 'Marisa_Kirlin';
    $request->version = GETCreateAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getCreateAccessKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccountAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccountAliasActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAccountAliasVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateAccountAliasRequest();
    $request->accountAlias = 'mollitia';
    $request->action = GETCreateAccountAliasActionEnum::CREATE_ACCOUNT_ALIAS;
    $request->version = GETCreateAccountAliasVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getCreateAccountAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateGroupRequest();
    $request->action = GETCreateGroupActionEnum::CREATE_GROUP;
    $request->groupName = 'omnis';
    $request->path = 'nemo';
    $request->version = GETCreateGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getCreateGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateLoginProfileRequest();
    $request->action = GETCreateLoginProfileActionEnum::CREATE_LOGIN_PROFILE;
    $request->password = 'architecto';
    $request->passwordResetRequired = false;
    $request->userName = 'Macy.Durgan';
    $request->version = GETCreateLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getCreateLoginProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreatePolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreatePolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreatePolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreatePolicyVersionRequest();
    $request->action = GETCreatePolicyVersionActionEnum::CREATE_POLICY_VERSION;
    $request->policyArn = 'velit';
    $request->policyDocument = 'error';
    $request->setAsDefault = false;
    $request->version = GETCreatePolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getCreatePolicyVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceLinkedRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceLinkedRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceLinkedRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateServiceLinkedRoleRequest();
    $request->awsServiceName = 'quo';
    $request->action = GETCreateServiceLinkedRoleActionEnum::CREATE_SERVICE_LINKED_ROLE;
    $request->customSuffix = 'sequi';
    $request->description = 'tenetur';
    $request->version = GETCreateServiceLinkedRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getCreateServiceLinkedRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateServiceSpecificCredentialRequest();
    $request->action = GETCreateServiceSpecificCredentialActionEnum::CREATE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->serviceName = 'laborum';
    $request->userName = 'Austyn_Witting46';
    $request->version = GETCreateServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getCreateServiceSpecificCredential($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeactivateMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeactivateMFADeviceRequest();
    $request->action = GETDeactivateMFADeviceActionEnum::DEACTIVATE_MFA_DEVICE;
    $request->serialNumber = 'doloremque';
    $request->userName = 'Iliana.Grady35';
    $request->version = GETDeactivateMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getDeactivateMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAccessKeyRequest();
    $request->accessKeyId = 'repudiandae';
    $request->action = GETDeleteAccessKeyActionEnum::DELETE_ACCESS_KEY;
    $request->userName = 'Anissa_Emmerich56';
    $request->version = GETDeleteAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getDeleteAccessKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountAliasActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountAliasVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAccountAliasRequest();
    $request->accountAlias = 'sint';
    $request->action = GETDeleteAccountAliasActionEnum::DELETE_ACCOUNT_ALIAS;
    $request->version = GETDeleteAccountAliasVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->getDeleteAccountAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteAccountPasswordPolicyRequest();
    $request->action = GETDeleteAccountPasswordPolicyActionEnum::DELETE_ACCOUNT_PASSWORD_POLICY;
    $request->version = GETDeleteAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getDeleteAccountPasswordPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteGroupRequest();
    $request->action = GETDeleteGroupActionEnum::DELETE_GROUP;
    $request->groupName = 'aliquid';
    $request->version = GETDeleteGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getDeleteGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteGroupPolicyRequest();
    $request->action = GETDeleteGroupPolicyActionEnum::DELETE_GROUP_POLICY;
    $request->groupName = 'fugit';
    $request->policyName = 'dolorum';
    $request->version = GETDeleteGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getDeleteGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteInstanceProfileRequest();
    $request->action = GETDeleteInstanceProfileActionEnum::DELETE_INSTANCE_PROFILE;
    $request->instanceProfileName = 'non';
    $request->version = GETDeleteInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->getDeleteInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLoginProfileRequest();
    $request->action = GETDeleteLoginProfileActionEnum::DELETE_LOGIN_PROFILE;
    $request->userName = 'Damien_Toy44';
    $request->version = GETDeleteLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->getDeleteLoginProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteOpenIDConnectProviderRequest();
    $request->action = GETDeleteOpenIDConnectProviderActionEnum::DELETE_OPEN_ID_CONNECT_PROVIDER;
    $request->openIDConnectProviderArn = 'facere';
    $request->version = GETDeleteOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDeleteOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeletePolicyRequest();
    $request->action = GETDeletePolicyActionEnum::DELETE_POLICY;
    $request->policyArn = 'accusamus';
    $request->version = GETDeletePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getDeletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeletePolicyVersionRequest();
    $request->action = GETDeletePolicyVersionActionEnum::DELETE_POLICY_VERSION;
    $request->policyArn = 'sapiente';
    $request->version = GETDeletePolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->versionId = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getDeletePolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteRoleRequest();
    $request->action = GETDeleteRoleActionEnum::DELETE_ROLE;
    $request->roleName = 'nihil';
    $request->version = GETDeleteRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDeleteRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteRolePermissionsBoundaryRequest();
    $request->action = GETDeleteRolePermissionsBoundaryActionEnum::DELETE_ROLE_PERMISSIONS_BOUNDARY;
    $request->roleName = 'nobis';
    $request->version = GETDeleteRolePermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDeleteRolePermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteRolePolicyRequest();
    $request->action = GETDeleteRolePolicyActionEnum::DELETE_ROLE_POLICY;
    $request->policyName = 'ullam';
    $request->roleName = 'provident';
    $request->version = GETDeleteRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->getDeleteRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSAMLProviderRequest();
    $request->action = GETDeleteSAMLProviderActionEnum::DELETE_SAML_PROVIDER;
    $request->samlProviderArn = 'eum';
    $request->version = GETDeleteSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->getDeleteSAMLProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSSHPublicKeyRequest();
    $request->action = GETDeleteSSHPublicKeyActionEnum::DELETE_SSH_PUBLIC_KEY;
    $request->sshPublicKeyId = 'debitis';
    $request->userName = 'Devante_Schoen';
    $request->version = GETDeleteSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDeleteSSHPublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteServerCertificateRequest();
    $request->action = GETDeleteServerCertificateActionEnum::DELETE_SERVER_CERTIFICATE;
    $request->serverCertificateName = 'repellat';
    $request->version = GETDeleteServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getDeleteServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceLinkedRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceLinkedRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceLinkedRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteServiceLinkedRoleRequest();
    $request->action = GETDeleteServiceLinkedRoleActionEnum::DELETE_SERVICE_LINKED_ROLE;
    $request->roleName = 'natus';
    $request->version = GETDeleteServiceLinkedRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getDeleteServiceLinkedRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteServiceSpecificCredentialRequest();
    $request->action = GETDeleteServiceSpecificCredentialActionEnum::DELETE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->serviceSpecificCredentialId = 'excepturi';
    $request->userName = 'Brook6';
    $request->version = GETDeleteServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->getDeleteServiceSpecificCredential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteSigningCertificateRequest();
    $request->action = GETDeleteSigningCertificateActionEnum::DELETE_SIGNING_CERTIFICATE;
    $request->certificateId = 'pariatur';
    $request->userName = 'Freddie85';
    $request->version = GETDeleteSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDeleteSigningCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUserRequest();
    $request->action = GETDeleteUserActionEnum::DELETE_USER;
    $request->userName = 'Celestine.Hayes';
    $request->version = GETDeleteUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->getDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUserPermissionsBoundaryRequest();
    $request->action = GETDeleteUserPermissionsBoundaryActionEnum::DELETE_USER_PERMISSIONS_BOUNDARY;
    $request->userName = 'Jalyn.Fadel94';
    $request->version = GETDeleteUserPermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->getDeleteUserPermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteUserPolicyRequest();
    $request->action = GETDeleteUserPolicyActionEnum::DELETE_USER_POLICY;
    $request->policyName = 'blanditiis';
    $request->userName = 'Lillie_Beatty';
    $request->version = GETDeleteUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getDeleteUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVirtualMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVirtualMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVirtualMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteVirtualMFADeviceRequest();
    $request->action = GETDeleteVirtualMFADeviceActionEnum::DELETE_VIRTUAL_MFA_DEVICE;
    $request->serialNumber = 'pariatur';
    $request->version = GETDeleteVirtualMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDeleteVirtualMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachGroupPolicyRequest();
    $request->action = GETDetachGroupPolicyActionEnum::DETACH_GROUP_POLICY;
    $request->groupName = 'dolorem';
    $request->policyArn = 'dolorem';
    $request->version = GETDetachGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDetachGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachRolePolicyRequest();
    $request->action = GETDetachRolePolicyActionEnum::DETACH_ROLE_POLICY;
    $request->policyArn = 'dignissimos';
    $request->roleName = 'reiciendis';
    $request->version = GETDetachRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->getDetachRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachUserPolicyRequest();
    $request->action = GETDetachUserPolicyActionEnum::DETACH_USER_POLICY;
    $request->policyArn = 'odio';
    $request->userName = 'Elvie_Thompson37';
    $request->version = GETDetachUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->getDetachUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableMFADeviceRequest();
    $request->action = GETEnableMFADeviceActionEnum::ENABLE_MFA_DEVICE;
    $request->authenticationCode1 = 'dolorum';
    $request->authenticationCode2 = 'iusto';
    $request->serialNumber = 'voluptate';
    $request->userName = 'Marianna_Leuschke';
    $request->version = GETEnableMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getEnableMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateCredentialReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateCredentialReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateCredentialReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenerateCredentialReportRequest();
    $request->action = GETGenerateCredentialReportActionEnum::GENERATE_CREDENTIAL_REPORT;
    $request->version = GETGenerateCredentialReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->getGenerateCredentialReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateOrganizationsAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateOrganizationsAccessReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateOrganizationsAccessReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenerateOrganizationsAccessReportRequest();
    $request->action = GETGenerateOrganizationsAccessReportActionEnum::GENERATE_ORGANIZATIONS_ACCESS_REPORT;
    $request->entityPath = 'saepe';
    $request->organizationsPolicyId = 'suscipit';
    $request->version = GETGenerateOrganizationsAccessReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getGenerateOrganizationsAccessReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateServiceLastAccessedDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateServiceLastAccessedDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateServiceLastAccessedDetailsGranularityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGenerateServiceLastAccessedDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenerateServiceLastAccessedDetailsRequest();
    $request->action = GETGenerateServiceLastAccessedDetailsActionEnum::GENERATE_SERVICE_LAST_ACCESSED_DETAILS;
    $request->arn = 'at';
    $request->granularity = GETGenerateServiceLastAccessedDetailsGranularityEnum::SERVICE_LEVEL;
    $request->version = GETGenerateServiceLastAccessedDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getGenerateServiceLastAccessedDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccessKeyLastUsedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccessKeyLastUsedActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccessKeyLastUsedVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAccessKeyLastUsedRequest();
    $request->accessKeyId = 'esse';
    $request->action = GETGETAccessKeyLastUsedActionEnum::GET_ACCESS_KEY_LAST_USED;
    $request->version = GETGETAccessKeyLastUsedVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->getGETAccessKeyLastUsed($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountAuthorizationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountAuthorizationDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountAuthorizationDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAccountAuthorizationDetailsRequest();
    $request->action = GETGETAccountAuthorizationDetailsActionEnum::GET_ACCOUNT_AUTHORIZATION_DETAILS;
    $request->filter = [
        EntityTypeEnum::ROLE,
        EntityTypeEnum::ROLE,
        EntityTypeEnum::ROLE,
        EntityTypeEnum::AWS_MANAGED_POLICY,
    ];
    $request->marker = 'totam';
    $request->maxItems = 471752;
    $request->version = GETGETAccountAuthorizationDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->getGETAccountAuthorizationDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAccountPasswordPolicyRequest();
    $request->action = GETGETAccountPasswordPolicyActionEnum::GET_ACCOUNT_PASSWORD_POLICY;
    $request->version = GETGETAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->getGETAccountPasswordPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSummaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSummaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAccountSummaryRequest();
    $request->action = GETGETAccountSummaryActionEnum::GET_ACCOUNT_SUMMARY;
    $request->version = GETGETAccountSummaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getGETAccountSummary($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForCustomPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForCustomPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForCustomPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETContextKeysForCustomPolicyRequest();
    $request->action = GETGETContextKeysForCustomPolicyActionEnum::GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY;
    $request->policyInputList = [
        'distinctio',
    ];
    $request->version = GETGETContextKeysForCustomPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->getGETContextKeysForCustomPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForPrincipalPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForPrincipalPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETContextKeysForPrincipalPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETContextKeysForPrincipalPolicyRequest();
    $request->action = GETGETContextKeysForPrincipalPolicyActionEnum::GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY;
    $request->policyInputList = [
        'magni',
    ];
    $request->policySourceArn = 'odio';
    $request->version = GETGETContextKeysForPrincipalPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->getGETContextKeysForPrincipalPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCredentialReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCredentialReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCredentialReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETCredentialReportRequest();
    $request->action = GETGETCredentialReportActionEnum::GET_CREDENTIAL_REPORT;
    $request->version = GETGETCredentialReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->getGETCredentialReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETGroupRequest();
    $request->action = GETGETGroupActionEnum::GET_GROUP;
    $request->groupName = 'tempore';
    $request->marker = 'cupiditate';
    $request->maxItems = 45614;
    $request->version = GETGETGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getGETGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETGroupPolicyRequest();
    $request->action = GETGETGroupPolicyActionEnum::GET_GROUP_POLICY;
    $request->groupName = 'quae';
    $request->policyName = 'aut';
    $request->version = GETGETGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->getGETGroupPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETInstanceProfileRequest();
    $request->action = GETGETInstanceProfileActionEnum::GET_INSTANCE_PROFILE;
    $request->instanceProfileName = 'ut';
    $request->version = GETGETInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getGETInstanceProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETLoginProfileRequest();
    $request->action = GETGETLoginProfileActionEnum::GET_LOGIN_PROFILE;
    $request->userName = 'Wilbert_Schaefer33';
    $request->version = GETGETLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->getGETLoginProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETOpenIDConnectProviderRequest();
    $request->action = GETGETOpenIDConnectProviderActionEnum::GET_OPEN_ID_CONNECT_PROVIDER;
    $request->openIDConnectProviderArn = 'hic';
    $request->version = GETGETOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->getGETOpenIDConnectProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOrganizationsAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOrganizationsAccessReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOrganizationsAccessReportSortKeyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETOrganizationsAccessReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETOrganizationsAccessReportRequest();
    $request->action = GETGETOrganizationsAccessReportActionEnum::GET_ORGANIZATIONS_ACCESS_REPORT;
    $request->jobId = 'dolore';
    $request->marker = 'quibusdam';
    $request->maxItems = 848944;
    $request->sortKey = GETGETOrganizationsAccessReportSortKeyEnum::SERVICE_NAMESPACE_ASCENDING;
    $request->version = GETGETOrganizationsAccessReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->getGETOrganizationsAccessReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETPolicyRequest();
    $request->action = GETGETPolicyActionEnum::GET_POLICY;
    $request->policyArn = 'porro';
    $request->version = GETGETPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->getGETPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETPolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETPolicyVersionRequest();
    $request->action = GETGETPolicyVersionActionEnum::GET_POLICY_VERSION;
    $request->policyArn = 'tempora';
    $request->version = GETGETPolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->versionId = 'ipsam';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getGETPolicyVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETRoleRequest();
    $request->action = GETGETRoleActionEnum::GET_ROLE;
    $request->roleName = 'laudantium';
    $request->version = GETGETRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getGETRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETRolePolicyRequest();
    $request->action = GETGETRolePolicyActionEnum::GET_ROLE_POLICY;
    $request->policyName = 'voluptatibus';
    $request->roleName = 'nostrum';
    $request->version = GETGETRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';

    $response = $sdk->sdk->getGETRolePolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETSAMLProviderRequest();
    $request->action = GETGETSAMLProviderActionEnum::GET_SAML_PROVIDER;
    $request->samlProviderArn = 'aliquid';
    $request->version = GETGETSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getGETSAMLProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSSHPublicKeyEncodingEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETSSHPublicKeyRequest();
    $request->action = GETGETSSHPublicKeyActionEnum::GET_SSH_PUBLIC_KEY;
    $request->encoding = GETGETSSHPublicKeyEncodingEnum::SSH;
    $request->sshPublicKeyId = 'eaque';
    $request->userName = 'Veda1';
    $request->version = GETGETSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getGETSSHPublicKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETServerCertificateRequest();
    $request->action = GETGETServerCertificateActionEnum::GET_SERVER_CERTIFICATE;
    $request->serverCertificateName = 'et';
    $request->version = GETGETServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getGETServerCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETServiceLastAccessedDetailsRequest();
    $request->action = GETGETServiceLastAccessedDetailsActionEnum::GET_SERVICE_LAST_ACCESSED_DETAILS;
    $request->jobId = 'quas';
    $request->marker = 'assumenda';
    $request->maxItems = 860552;
    $request->version = GETGETServiceLastAccessedDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getGETServiceLastAccessedDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsWithEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsWithEntitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETServiceLastAccessedDetailsWithEntitiesRequest();
    $request->action = GETGETServiceLastAccessedDetailsWithEntitiesActionEnum::GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES;
    $request->jobId = 'ipsa';
    $request->marker = 'molestiae';
    $request->maxItems = 301598;
    $request->serviceNamespace = 'odio';
    $request->version = GETGETServiceLastAccessedDetailsWithEntitiesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getGETServiceLastAccessedDetailsWithEntities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLinkedRoleDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLinkedRoleDeletionStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETServiceLinkedRoleDeletionStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETServiceLinkedRoleDeletionStatusRequest();
    $request->action = GETGETServiceLinkedRoleDeletionStatusActionEnum::GET_SERVICE_LINKED_ROLE_DELETION_STATUS;
    $request->deletionTaskId = 'fugiat';
    $request->version = GETGETServiceLinkedRoleDeletionStatusVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->getGETServiceLinkedRoleDeletionStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETUserRequest();
    $request->action = GETGETUserActionEnum::GET_USER;
    $request->userName = 'Asa_Bednar';
    $request->version = GETGETUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getGETUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETUserPolicyRequest();
    $request->action = GETGETUserPolicyActionEnum::GET_USER_POLICY;
    $request->policyName = 'voluptas';
    $request->userName = 'Ansley27';
    $request->version = GETGETUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getGETUserPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccessKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccessKeysActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccessKeysVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAccessKeysRequest();
    $request->action = GETListAccessKeysActionEnum::LIST_ACCESS_KEYS;
    $request->marker = 'aperiam';
    $request->maxItems = 715179;
    $request->userName = 'Polly46';
    $request->version = GETListAccessKeysVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getListAccessKeys($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccountAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccountAliasesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAccountAliasesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAccountAliasesRequest();
    $request->action = GETListAccountAliasesActionEnum::LIST_ACCOUNT_ALIASES;
    $request->marker = 'dolores';
    $request->maxItems = 645570;
    $request->version = GETListAccountAliasesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->getListAccountAliases($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedGroupPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedGroupPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAttachedGroupPoliciesRequest();
    $request->action = GETListAttachedGroupPoliciesActionEnum::LIST_ATTACHED_GROUP_POLICIES;
    $request->groupName = 'deleniti';
    $request->marker = 'fugit';
    $request->maxItems = 681393;
    $request->pathPrefix = 'mollitia';
    $request->version = GETListAttachedGroupPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getListAttachedGroupPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedRolePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedRolePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedRolePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAttachedRolePoliciesRequest();
    $request->action = GETListAttachedRolePoliciesActionEnum::LIST_ATTACHED_ROLE_POLICIES;
    $request->marker = 'consequuntur';
    $request->maxItems = 187131;
    $request->pathPrefix = 'explicabo';
    $request->roleName = 'saepe';
    $request->version = GETListAttachedRolePoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->getListAttachedRolePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedUserPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedUserPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAttachedUserPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAttachedUserPoliciesRequest();
    $request->action = GETListAttachedUserPoliciesActionEnum::LIST_ATTACHED_USER_POLICIES;
    $request->marker = 'esse';
    $request->maxItems = 800379;
    $request->pathPrefix = 'nam';
    $request->userName = 'Serena90';
    $request->version = GETListAttachedUserPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->getListAttachedUserPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListEntitiesForPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListEntitiesForPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListEntitiesForPolicyEntityFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListEntitiesForPolicyPolicyUsageFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListEntitiesForPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListEntitiesForPolicyRequest();
    $request->action = GETListEntitiesForPolicyActionEnum::LIST_ENTITIES_FOR_POLICY;
    $request->entityFilter = GETListEntitiesForPolicyEntityFilterEnum::LOCAL_MANAGED_POLICY;
    $request->marker = 'sit';
    $request->maxItems = 636061;
    $request->pathPrefix = 'tempore';
    $request->policyArn = 'adipisci';
    $request->policyUsageFilter = GETListEntitiesForPolicyPolicyUsageFilterEnum::PERMISSIONS_BOUNDARY;
    $request->version = GETListEntitiesForPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getListEntitiesForPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListGroupPoliciesRequest();
    $request->action = GETListGroupPoliciesActionEnum::LIST_GROUP_POLICIES;
    $request->groupName = 'blanditiis';
    $request->marker = 'provident';
    $request->maxItems = 953722;
    $request->version = GETListGroupPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getListGroupPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListGroupsRequest();
    $request->action = GETListGroupsActionEnum::LIST_GROUPS;
    $request->marker = 'pariatur';
    $request->maxItems = 820767;
    $request->pathPrefix = 'quia';
    $request->version = GETListGroupsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->getListGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsForUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListGroupsForUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListGroupsForUserRequest();
    $request->action = GETListGroupsForUserActionEnum::LIST_GROUPS_FOR_USER;
    $request->marker = 'culpa';
    $request->maxItems = 398434;
    $request->userName = 'Ursula.Berge44';
    $request->version = GETListGroupsForUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getListGroupsForUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfileTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfileTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfileTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListInstanceProfileTagsRequest();
    $request->action = GETListInstanceProfileTagsActionEnum::LIST_INSTANCE_PROFILE_TAGS;
    $request->instanceProfileName = 'dicta';
    $request->marker = 'ullam';
    $request->maxItems = 443879;
    $request->version = GETListInstanceProfileTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getListInstanceProfileTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListInstanceProfilesRequest();
    $request->action = GETListInstanceProfilesActionEnum::LIST_INSTANCE_PROFILES;
    $request->marker = 'deleniti';
    $request->maxItems = 929292;
    $request->pathPrefix = 'dolorum';
    $request->version = GETListInstanceProfilesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getListInstanceProfiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesForRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesForRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListInstanceProfilesForRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListInstanceProfilesForRoleRequest();
    $request->action = GETListInstanceProfilesForRoleActionEnum::LIST_INSTANCE_PROFILES_FOR_ROLE;
    $request->marker = 'ipsa';
    $request->maxItems = 326701;
    $request->roleName = 'veritatis';
    $request->version = GETListInstanceProfilesForRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->getListInstanceProfilesForRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADeviceTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADeviceTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADeviceTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListMFADeviceTagsRequest();
    $request->action = GETListMFADeviceTagsActionEnum::LIST_MFA_DEVICE_TAGS;
    $request->marker = 'laudantium';
    $request->maxItems = 428796;
    $request->serialNumber = 'mollitia';
    $request->version = GETListMFADeviceTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getListMFADeviceTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADevicesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListMFADevicesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListMFADevicesRequest();
    $request->action = GETListMFADevicesActionEnum::LIST_MFA_DEVICES;
    $request->marker = 'impedit';
    $request->maxItems = 131055;
    $request->userName = 'Garrison.Anderson';
    $request->version = GETListMFADevicesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->getListMFADevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProviderTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProviderTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProviderTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListOpenIDConnectProviderTagsRequest();
    $request->action = GETListOpenIDConnectProviderTagsActionEnum::LIST_OPEN_ID_CONNECT_PROVIDER_TAGS;
    $request->marker = 'ea';
    $request->maxItems = 310067;
    $request->openIDConnectProviderArn = 'consequuntur';
    $request->version = GETListOpenIDConnectProviderTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getListOpenIDConnectProviderTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProvidersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListOpenIDConnectProvidersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListOpenIDConnectProvidersRequest();
    $request->action = GETListOpenIDConnectProvidersActionEnum::LIST_OPEN_ID_CONNECT_PROVIDERS;
    $request->version = GETListOpenIDConnectProvidersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->getListOpenIDConnectProviders($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesPolicyUsageFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListPoliciesRequest();
    $request->action = GETListPoliciesActionEnum::LIST_POLICIES;
    $request->marker = 'fuga';
    $request->maxItems = 662505;
    $request->onlyAttached = false;
    $request->pathPrefix = 'suscipit';
    $request->policyUsageFilter = GETListPoliciesPolicyUsageFilterEnum::PERMISSIONS_POLICY;
    $request->scope = GETListPoliciesScopeEnum::AWS;
    $request->version = GETListPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->getListPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesGrantingServiceAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesGrantingServiceAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPoliciesGrantingServiceAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListPoliciesGrantingServiceAccessRequest();
    $request->action = GETListPoliciesGrantingServiceAccessActionEnum::LIST_POLICIES_GRANTING_SERVICE_ACCESS;
    $request->arn = 'vel';
    $request->marker = 'labore';
    $request->serviceNamespaces = [
        'facilis',
        'cum',
        'commodi',
        'in',
    ];
    $request->version = GETListPoliciesGrantingServiceAccessVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->getListPoliciesGrantingServiceAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListPolicyTagsRequest();
    $request->action = GETListPolicyTagsActionEnum::LIST_POLICY_TAGS;
    $request->marker = 'cum';
    $request->maxItems = 232627;
    $request->policyArn = 'in';
    $request->version = GETListPolicyTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getListPolicyTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListPolicyVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListPolicyVersionsRequest();
    $request->action = GETListPolicyVersionsActionEnum::LIST_POLICY_VERSIONS;
    $request->marker = 'quidem';
    $request->maxItems = 904949;
    $request->policyArn = 'necessitatibus';
    $request->version = GETListPolicyVersionsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->getListPolicyVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListRolePoliciesRequest();
    $request->action = GETListRolePoliciesActionEnum::LIST_ROLE_POLICIES;
    $request->marker = 'dignissimos';
    $request->maxItems = 950953;
    $request->roleName = 'debitis';
    $request->version = GETListRolePoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->getListRolePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListRoleTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListRoleTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListRoleTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListRoleTagsRequest();
    $request->action = GETListRoleTagsActionEnum::LIST_ROLE_TAGS;
    $request->marker = 'vitae';
    $request->maxItems = 881721;
    $request->roleName = 'similique';
    $request->version = GETListRoleTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getListRoleTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListRolesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListRolesRequest();
    $request->action = GETListRolesActionEnum::LIST_ROLES;
    $request->marker = 'dolorum';
    $request->maxItems = 237807;
    $request->pathPrefix = 'minus';
    $request->version = GETListRolesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getListRoles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProviderTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProviderTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProviderTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListSAMLProviderTagsRequest();
    $request->action = GETListSAMLProviderTagsActionEnum::LIST_SAML_PROVIDER_TAGS;
    $request->marker = 'ullam';
    $request->maxItems = 237742;
    $request->samlProviderArn = 'cum';
    $request->version = GETListSAMLProviderTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->getListSAMLProviderTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProvidersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListSAMLProvidersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListSAMLProvidersRequest();
    $request->action = GETListSAMLProvidersActionEnum::LIST_SAML_PROVIDERS;
    $request->version = GETListSAMLProvidersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getListSAMLProviders($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListSSHPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListSSHPublicKeysActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListSSHPublicKeysVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListSSHPublicKeysRequest();
    $request->action = GETListSSHPublicKeysActionEnum::LIST_SSH_PUBLIC_KEYS;
    $request->marker = 'reiciendis';
    $request->maxItems = 131852;
    $request->userName = 'Zane_Quigley';
    $request->version = GETListSSHPublicKeysVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getListSSHPublicKeys($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificateTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificateTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificateTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListServerCertificateTagsRequest();
    $request->action = GETListServerCertificateTagsActionEnum::LIST_SERVER_CERTIFICATE_TAGS;
    $request->marker = 'quidem';
    $request->maxItems = 131289;
    $request->serverCertificateName = 'voluptas';
    $request->version = GETListServerCertificateTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getListServerCertificateTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListServerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListServerCertificatesRequest();
    $request->action = GETListServerCertificatesActionEnum::LIST_SERVER_CERTIFICATES;
    $request->marker = 'perferendis';
    $request->maxItems = 546885;
    $request->pathPrefix = 'maiores';
    $request->version = GETListServerCertificatesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getListServerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListServiceSpecificCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListServiceSpecificCredentialsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListServiceSpecificCredentialsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListServiceSpecificCredentialsRequest();
    $request->action = GETListServiceSpecificCredentialsActionEnum::LIST_SERVICE_SPECIFIC_CREDENTIALS;
    $request->serviceName = 'occaecati';
    $request->userName = 'Katrina27';
    $request->version = GETListServiceSpecificCredentialsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getListServiceSpecificCredentials($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListSigningCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListSigningCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListSigningCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListSigningCertificatesRequest();
    $request->action = GETListSigningCertificatesActionEnum::LIST_SIGNING_CERTIFICATES;
    $request->marker = 'facilis';
    $request->maxItems = 310381;
    $request->userName = 'Drew_Hintz2';
    $request->version = GETListSigningCertificatesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->getListSigningCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListUserPoliciesRequest();
    $request->action = GETListUserPoliciesActionEnum::LIST_USER_POLICIES;
    $request->marker = 'magni';
    $request->maxItems = 48690;
    $request->userName = 'Stephany44';
    $request->version = GETListUserPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->getListUserPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListUserTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListUserTagsRequest();
    $request->action = GETListUserTagsActionEnum::LIST_USER_TAGS;
    $request->marker = 'dolorum';
    $request->maxItems = 530089;
    $request->userName = 'Lilyan_Welch20';
    $request->version = GETListUserTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getListUserTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListUsersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListUsersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListUsersRequest();
    $request->action = GETListUsersActionEnum::LIST_USERS;
    $request->marker = 'atque';
    $request->maxItems = 148268;
    $request->pathPrefix = 'ut';
    $request->version = GETListUsersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getListUsers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListVirtualMFADevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListVirtualMFADevicesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListVirtualMFADevicesAssignmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListVirtualMFADevicesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListVirtualMFADevicesRequest();
    $request->action = GETListVirtualMFADevicesActionEnum::LIST_VIRTUAL_MFA_DEVICES;
    $request->assignmentStatus = GETListVirtualMFADevicesAssignmentStatusEnum::UNASSIGNED;
    $request->marker = 'sit';
    $request->maxItems = 530537;
    $request->version = GETListVirtualMFADevicesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getListVirtualMFADevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutGroupPolicyRequest();
    $request->action = GETPutGroupPolicyActionEnum::PUT_GROUP_POLICY;
    $request->groupName = 'sit';
    $request->policyDocument = 'vel';
    $request->policyName = 'nostrum';
    $request->version = GETPutGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->getPutGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutRolePermissionsBoundaryRequest();
    $request->action = GETPutRolePermissionsBoundaryActionEnum::PUT_ROLE_PERMISSIONS_BOUNDARY;
    $request->permissionsBoundary = 'dicta';
    $request->roleName = 'architecto';
    $request->version = GETPutRolePermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->getPutRolePermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutRolePolicyRequest();
    $request->action = GETPutRolePolicyActionEnum::PUT_ROLE_POLICY;
    $request->policyDocument = 'laboriosam';
    $request->policyName = 'alias';
    $request->roleName = 'amet';
    $request->version = GETPutRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getPutRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutUserPermissionsBoundaryRequest();
    $request->action = GETPutUserPermissionsBoundaryActionEnum::PUT_USER_PERMISSIONS_BOUNDARY;
    $request->permissionsBoundary = 'voluptates';
    $request->userName = 'Agustin.Orn81';
    $request->version = GETPutUserPermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getPutUserPermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutUserPolicyRequest();
    $request->action = GETPutUserPolicyActionEnum::PUT_USER_POLICY;
    $request->policyDocument = 'quasi';
    $request->policyName = 'atque';
    $request->userName = 'Ima.Zboncak';
    $request->version = GETPutUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getPutUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveClientIDFromOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveClientIDFromOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveClientIDFromOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveClientIDFromOpenIDConnectProviderRequest();
    $request->action = GETRemoveClientIDFromOpenIDConnectProviderActionEnum::REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER;
    $request->clientID = 'atque';
    $request->openIDConnectProviderArn = 'error';
    $request->version = GETRemoveClientIDFromOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getRemoveClientIDFromOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveRoleFromInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveRoleFromInstanceProfileRequest();
    $request->action = GETRemoveRoleFromInstanceProfileActionEnum::REMOVE_ROLE_FROM_INSTANCE_PROFILE;
    $request->instanceProfileName = 'maiores';
    $request->roleName = 'corrupti';
    $request->version = GETRemoveRoleFromInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->getRemoveRoleFromInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveUserFromGroup

Removes the specified user from the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveUserFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveUserFromGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveUserFromGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveUserFromGroupRequest();
    $request->action = GETRemoveUserFromGroupActionEnum::REMOVE_USER_FROM_GROUP;
    $request->groupName = 'sunt';
    $request->userName = 'Theresia.Parisian96';
    $request->version = GETRemoveUserFromGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getRemoveUserFromGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETResetServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETResetServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETResetServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETResetServiceSpecificCredentialRequest();
    $request->action = GETResetServiceSpecificCredentialActionEnum::RESET_SERVICE_SPECIFIC_CREDENTIAL;
    $request->serviceSpecificCredentialId = 'laboriosam';
    $request->userName = 'Delbert.Wilderman';
    $request->version = GETResetServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->getResetServiceSpecificCredential($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETResyncMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETResyncMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETResyncMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETResyncMFADeviceRequest();
    $request->action = GETResyncMFADeviceActionEnum::RESYNC_MFA_DEVICE;
    $request->authenticationCode1 = 'eveniet';
    $request->authenticationCode2 = 'occaecati';
    $request->serialNumber = 'consequuntur';
    $request->userName = 'Buster.Olson';
    $request->version = GETResyncMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'illo';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getResyncMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDefaultPolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDefaultPolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetDefaultPolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetDefaultPolicyVersionRequest();
    $request->action = GETSetDefaultPolicyVersionActionEnum::SET_DEFAULT_POLICY_VERSION;
    $request->policyArn = 'doloremque';
    $request->version = GETSetDefaultPolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->versionId = 'iure';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->getSetDefaultPolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityTokenServicePreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityTokenServicePreferencesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityTokenServicePreferencesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetSecurityTokenServicePreferencesRequest();
    $request->action = GETSetSecurityTokenServicePreferencesActionEnum::SET_SECURITY_TOKEN_SERVICE_PREFERENCES;
    $request->globalEndpointTokenVersion = GETSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum::V1_TOKEN;
    $request->version = GETSetSecurityTokenServicePreferencesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->getSetSecurityTokenServicePreferences($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagInstanceProfileRequest();
    $request->action = GETUntagInstanceProfileActionEnum::UNTAG_INSTANCE_PROFILE;
    $request->instanceProfileName = 'ad';
    $request->tagKeys = [
        'alias',
        'corporis',
        'perspiciatis',
        'nihil',
    ];
    $request->version = GETUntagInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->getUntagInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagMFADeviceRequest();
    $request->action = GETUntagMFADeviceActionEnum::UNTAG_MFA_DEVICE;
    $request->serialNumber = 'minima';
    $request->tagKeys = [
        'dolorum',
        'nesciunt',
    ];
    $request->version = GETUntagMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->getUntagMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagOpenIDConnectProviderRequest();
    $request->action = GETUntagOpenIDConnectProviderActionEnum::UNTAG_OPEN_ID_CONNECT_PROVIDER;
    $request->openIDConnectProviderArn = 'culpa';
    $request->tagKeys = [
        'debitis',
    ];
    $request->version = GETUntagOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getUntagOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagPolicyRequest();
    $request->action = GETUntagPolicyActionEnum::UNTAG_POLICY;
    $request->policyArn = 'eum';
    $request->tagKeys = [
        'provident',
        'aspernatur',
        'ullam',
        'quasi',
    ];
    $request->version = GETUntagPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getUntagPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagRoleRequest();
    $request->action = GETUntagRoleActionEnum::UNTAG_ROLE;
    $request->roleName = 'aliquid';
    $request->tagKeys = [
        'repellat',
    ];
    $request->version = GETUntagRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getUntagRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagSAMLProviderRequest();
    $request->action = GETUntagSAMLProviderActionEnum::UNTAG_SAML_PROVIDER;
    $request->samlProviderArn = 'placeat';
    $request->tagKeys = [
        'voluptatibus',
        'molestias',
    ];
    $request->version = GETUntagSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getUntagSAMLProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagServerCertificateRequest();
    $request->action = GETUntagServerCertificateActionEnum::UNTAG_SERVER_CERTIFICATE;
    $request->serverCertificateName = 'inventore';
    $request->tagKeys = [
        'cumque',
    ];
    $request->version = GETUntagServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->getUntagServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUntagUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUntagUserRequest();
    $request->action = GETUntagUserActionEnum::UNTAG_USER;
    $request->tagKeys = [
        'impedit',
        'eos',
        'sapiente',
        'eum',
    ];
    $request->userName = 'Bianka58';
    $request->version = GETUntagUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->getUntagUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccessKeyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateAccessKeyRequest();
    $request->accessKeyId = 'perspiciatis';
    $request->action = GETUpdateAccessKeyActionEnum::UPDATE_ACCESS_KEY;
    $request->status = GETUpdateAccessKeyStatusEnum::INACTIVE;
    $request->userName = 'Sim.Jacobs21';
    $request->version = GETUpdateAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->getUpdateAccessKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateAccountPasswordPolicyRequest();
    $request->action = GETUpdateAccountPasswordPolicyActionEnum::UPDATE_ACCOUNT_PASSWORD_POLICY;
    $request->allowUsersToChangePassword = false;
    $request->hardExpiry = false;
    $request->maxPasswordAge = 8931;
    $request->minimumPasswordLength = 97258;
    $request->passwordReusePrevention = 90233;
    $request->requireLowercaseCharacters = false;
    $request->requireNumbers = false;
    $request->requireSymbols = false;
    $request->requireUppercaseCharacters = false;
    $request->version = GETUpdateAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->getUpdateAccountPasswordPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAssumeRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAssumeRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAssumeRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateAssumeRolePolicyRequest();
    $request->action = GETUpdateAssumeRolePolicyActionEnum::UPDATE_ASSUME_ROLE_POLICY;
    $request->policyDocument = 'doloribus';
    $request->roleName = 'nulla';
    $request->version = GETUpdateAssumeRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getUpdateAssumeRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateGroupRequest();
    $request->action = GETUpdateGroupActionEnum::UPDATE_GROUP;
    $request->groupName = 'esse';
    $request->newGroupName = 'praesentium';
    $request->newPath = 'maiores';
    $request->version = GETUpdateGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->getUpdateGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateLoginProfileRequest();
    $request->action = GETUpdateLoginProfileActionEnum::UPDATE_LOGIN_PROFILE;
    $request->password = 'tempora';
    $request->passwordResetRequired = false;
    $request->userName = 'Jaden39';
    $request->version = GETUpdateLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getUpdateLoginProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateOpenIDConnectProviderThumbprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateOpenIDConnectProviderThumbprintActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateOpenIDConnectProviderThumbprintVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateOpenIDConnectProviderThumbprintRequest();
    $request->action = GETUpdateOpenIDConnectProviderThumbprintActionEnum::UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT;
    $request->openIDConnectProviderArn = 'officia';
    $request->thumbprintList = [
        'aliquid',
        'perferendis',
    ];
    $request->version = GETUpdateOpenIDConnectProviderThumbprintVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->getUpdateOpenIDConnectProviderThumbprint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateRole

Updates the description or maximum session duration setting of a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateRoleRequest();
    $request->action = GETUpdateRoleActionEnum::UPDATE_ROLE;
    $request->description = 'voluptates';
    $request->maxSessionDuration = 653421;
    $request->roleName = 'laborum';
    $request->version = GETUpdateRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->getUpdateRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleDescriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateRoleDescriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateRoleDescriptionRequest();
    $request->action = GETUpdateRoleDescriptionActionEnum::UPDATE_ROLE_DESCRIPTION;
    $request->description = 'quo';
    $request->roleName = 'ex';
    $request->version = GETUpdateRoleDescriptionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getUpdateRoleDescription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateSAMLProviderRequest();
    $request->action = GETUpdateSAMLProviderActionEnum::UPDATE_SAML_PROVIDER;
    $request->samlMetadataDocument = 'beatae';
    $request->samlProviderArn = 'voluptatum';
    $request->version = GETUpdateSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getUpdateSAMLProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSSHPublicKeyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateSSHPublicKeyRequest();
    $request->action = GETUpdateSSHPublicKeyActionEnum::UPDATE_SSH_PUBLIC_KEY;
    $request->sshPublicKeyId = 'officiis';
    $request->status = GETUpdateSSHPublicKeyStatusEnum::ACTIVE;
    $request->userName = 'Marisol.Stroman0';
    $request->version = GETUpdateSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->getUpdateSSHPublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateServerCertificateRequest();
    $request->action = GETUpdateServerCertificateActionEnum::UPDATE_SERVER_CERTIFICATE;
    $request->newPath = 'asperiores';
    $request->newServerCertificateName = 'ratione';
    $request->serverCertificateName = 'ullam';
    $request->version = GETUpdateServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getUpdateServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateServiceSpecificCredentialRequest();
    $request->action = GETUpdateServiceSpecificCredentialActionEnum::UPDATE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->serviceSpecificCredentialId = 'culpa';
    $request->status = GETUpdateServiceSpecificCredentialStatusEnum::ACTIVE;
    $request->userName = 'Elody.Bode';
    $request->version = GETUpdateServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->getUpdateServiceSpecificCredential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSigningCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateSigningCertificateRequest();
    $request->action = GETUpdateSigningCertificateActionEnum::UPDATE_SIGNING_CERTIFICATE;
    $request->certificateId = 'ab';
    $request->status = GETUpdateSigningCertificateStatusEnum::INACTIVE;
    $request->userName = 'Anna.Fadel16';
    $request->version = GETUpdateSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getUpdateSigningCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateUserRequest();
    $request->action = GETUpdateUserActionEnum::UPDATE_USER;
    $request->newPath = 'sed';
    $request->newUserName = 'veniam';
    $request->userName = 'Coby.Ratke';
    $request->version = GETUpdateUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getUpdateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUploadSSHPublicKeyRequest();
    $request->action = GETUploadSSHPublicKeyActionEnum::UPLOAD_SSH_PUBLIC_KEY;
    $request->sshPublicKeyBody = 'laboriosam';
    $request->userName = 'Timmothy35';
    $request->version = GETUploadSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->getUploadSSHPublicKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUploadSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUploadSigningCertificateRequest();
    $request->action = GETUploadSigningCertificateActionEnum::UPLOAD_SIGNING_CERTIFICATE;
    $request->certificateBody = 'sequi';
    $request->userName = 'Xander_VonRueden36';
    $request->version = GETUploadSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->getUploadSigningCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddClientIDToOpenIDConnectProvider

<p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddClientIDToOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddClientIDToOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddClientIDToOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddClientIDToOpenIDConnectProviderRequest();
    $request->action = POSTAddClientIDToOpenIDConnectProviderActionEnum::ADD_CLIENT_ID_TO_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'eius';
    $request->version = POSTAddClientIDToOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postAddClientIDToOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddRoleToInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddRoleToInstanceProfileRequest();
    $request->action = POSTAddRoleToInstanceProfileActionEnum::ADD_ROLE_TO_INSTANCE_PROFILE;
    $request->requestBody = 'rem';
    $request->version = POSTAddRoleToInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->postAddRoleToInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddUserToGroup

Adds the specified user to the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddUserToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddUserToGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddUserToGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddUserToGroupRequest();
    $request->action = POSTAddUserToGroupActionEnum::ADD_USER_TO_GROUP;
    $request->requestBody = 'reiciendis';
    $request->version = POSTAddUserToGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->postAddUserToGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachGroupPolicyRequest();
    $request->action = POSTAttachGroupPolicyActionEnum::ATTACH_GROUP_POLICY;
    $request->requestBody = 'inventore';
    $request->version = POSTAttachGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postAttachGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachRolePolicyRequest();
    $request->action = POSTAttachRolePolicyActionEnum::ATTACH_ROLE_POLICY;
    $request->requestBody = 'praesentium';
    $request->version = POSTAttachRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postAttachRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachUserPolicyRequest();
    $request->action = POSTAttachUserPolicyActionEnum::ATTACH_USER_POLICY;
    $request->requestBody = 'totam';
    $request->version = POSTAttachUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postAttachUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTChangePasswordActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTChangePasswordVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTChangePasswordRequest();
    $request->action = POSTChangePasswordActionEnum::CHANGE_PASSWORD;
    $request->requestBody = 'alias';
    $request->version = POSTChangePasswordVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->postChangePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateAccessKeyRequest();
    $request->action = POSTCreateAccessKeyActionEnum::CREATE_ACCESS_KEY;
    $request->requestBody = 'esse';
    $request->version = POSTCreateAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postCreateAccessKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccountAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccountAliasActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAccountAliasVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateAccountAliasRequest();
    $request->action = POSTCreateAccountAliasActionEnum::CREATE_ACCOUNT_ALIAS;
    $request->requestBody = 'hic';
    $request->version = POSTCreateAccountAliasVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postCreateAccountAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateGroupRequest();
    $request->action = POSTCreateGroupActionEnum::CREATE_GROUP;
    $request->requestBody = 'minus';
    $request->version = POSTCreateGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postCreateGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateInstanceProfile

<p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using roles for applications on Amazon EC2</a> in the <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateInstanceProfileRequest();
    $request->action = POSTCreateInstanceProfileActionEnum::CREATE_INSTANCE_PROFILE;
    $request->requestBody = 'magni';
    $request->version = POSTCreateInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->postCreateInstanceProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLoginProfileRequest();
    $request->action = POSTCreateLoginProfileActionEnum::CREATE_LOGIN_PROFILE;
    $request->requestBody = 'dignissimos';
    $request->version = POSTCreateLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postCreateLoginProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateOpenIDConnectProvider

<p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider.</p> <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the <i>IAM User Guide</i>.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of tags that are attached to the specified IAM OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP you want to use to access Amazon Web Services.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateOpenIDConnectProviderRequest();
    $request->action = POSTCreateOpenIDConnectProviderActionEnum::CREATE_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'vel';
    $request->version = POSTCreateOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postCreateOpenIDConnectProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreatePolicy

<p>Creates a new managed policy for your Amazon Web Services account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreatePolicyRequest();
    $request->action = POSTCreatePolicyActionEnum::CREATE_POLICY;
    $request->requestBody = 'quia';
    $request->version = POSTCreatePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postCreatePolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreatePolicyVersionRequest();
    $request->action = POSTCreatePolicyVersionActionEnum::CREATE_POLICY_VERSION;
    $request->requestBody = 'beatae';
    $request->version = POSTCreatePolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postCreatePolicyVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateRole

Creates a new role for your Amazon Web Services account. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM roles</a>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateRoleRequest();
    $request->action = POSTCreateRoleActionEnum::CREATE_ROLE;
    $request->requestBody = 'dicta';
    $request->version = POSTCreateRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'itaque';

    $response = $sdk->sdk->postCreateRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateSAMLProvider

<p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateSAMLProviderRequest();
    $request->action = POSTCreateSAMLProviderActionEnum::CREATE_SAML_PROVIDER;
    $request->requestBody = 'velit';
    $request->version = POSTCreateSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->postCreateSAMLProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceLinkedRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceLinkedRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceLinkedRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateServiceLinkedRoleRequest();
    $request->action = POSTCreateServiceLinkedRoleActionEnum::CREATE_SERVICE_LINKED_ROLE;
    $request->requestBody = 'officia';
    $request->version = POSTCreateServiceLinkedRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'perspiciatis';

    $response = $sdk->sdk->postCreateServiceLinkedRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateServiceSpecificCredentialRequest();
    $request->action = POSTCreateServiceSpecificCredentialActionEnum::CREATE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->requestBody = 'expedita';
    $request->version = POSTCreateServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->postCreateServiceSpecificCredential($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateUser

<p>Creates a new IAM user for your Amazon Web Services account.</p> <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateUserRequest();
    $request->action = POSTCreateUserActionEnum::CREATE_USER;
    $request->requestBody = 'impedit';
    $request->version = POSTCreateUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->postCreateUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateVirtualMFADevice

<p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateVirtualMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateVirtualMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateVirtualMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateVirtualMFADeviceRequest();
    $request->action = POSTCreateVirtualMFADeviceActionEnum::CREATE_VIRTUAL_MFA_DEVICE;
    $request->requestBody = 'vero';
    $request->version = POSTCreateVirtualMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->postCreateVirtualMFADevice($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeactivateMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeactivateMFADeviceRequest();
    $request->action = POSTDeactivateMFADeviceActionEnum::DEACTIVATE_MFA_DEVICE;
    $request->requestBody = 'ex';
    $request->version = POSTDeactivateMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postDeactivateMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAccessKeyRequest();
    $request->action = POSTDeleteAccessKeyActionEnum::DELETE_ACCESS_KEY;
    $request->requestBody = 'alias';
    $request->version = POSTDeleteAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postDeleteAccessKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountAliasActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountAliasVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAccountAliasRequest();
    $request->action = POSTDeleteAccountAliasActionEnum::DELETE_ACCOUNT_ALIAS;
    $request->requestBody = 'itaque';
    $request->version = POSTDeleteAccountAliasVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->postDeleteAccountAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteAccountPasswordPolicyRequest();
    $request->action = POSTDeleteAccountPasswordPolicyActionEnum::DELETE_ACCOUNT_PASSWORD_POLICY;
    $request->version = POSTDeleteAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postDeleteAccountPasswordPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteGroupRequest();
    $request->action = POSTDeleteGroupActionEnum::DELETE_GROUP;
    $request->requestBody = 'fugiat';
    $request->version = POSTDeleteGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->postDeleteGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteGroupPolicyRequest();
    $request->action = POSTDeleteGroupPolicyActionEnum::DELETE_GROUP_POLICY;
    $request->requestBody = 'inventore';
    $request->version = POSTDeleteGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->postDeleteGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteInstanceProfileRequest();
    $request->action = POSTDeleteInstanceProfileActionEnum::DELETE_INSTANCE_PROFILE;
    $request->requestBody = 'esse';
    $request->version = POSTDeleteInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->postDeleteInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLoginProfileRequest();
    $request->action = POSTDeleteLoginProfileActionEnum::DELETE_LOGIN_PROFILE;
    $request->requestBody = 'provident';
    $request->version = POSTDeleteLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postDeleteLoginProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteOpenIDConnectProviderRequest();
    $request->action = POSTDeleteOpenIDConnectProviderActionEnum::DELETE_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'rerum';
    $request->version = POSTDeleteOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postDeleteOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeletePolicyRequest();
    $request->action = POSTDeletePolicyActionEnum::DELETE_POLICY;
    $request->requestBody = 'quia';
    $request->version = POSTDeletePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->postDeletePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeletePolicyVersionRequest();
    $request->action = POSTDeletePolicyVersionActionEnum::DELETE_POLICY_VERSION;
    $request->requestBody = 'quibusdam';
    $request->version = POSTDeletePolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postDeletePolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteRoleRequest();
    $request->action = POSTDeleteRoleActionEnum::DELETE_ROLE;
    $request->requestBody = 'adipisci';
    $request->version = POSTDeleteRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'unde';

    $response = $sdk->sdk->postDeleteRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteRolePermissionsBoundaryRequest();
    $request->action = POSTDeleteRolePermissionsBoundaryActionEnum::DELETE_ROLE_PERMISSIONS_BOUNDARY;
    $request->requestBody = 'molestiae';
    $request->version = POSTDeleteRolePermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->postDeleteRolePermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteRolePolicyRequest();
    $request->action = POSTDeleteRolePolicyActionEnum::DELETE_ROLE_POLICY;
    $request->requestBody = 'officia';
    $request->version = POSTDeleteRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->postDeleteRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSAMLProviderRequest();
    $request->action = POSTDeleteSAMLProviderActionEnum::DELETE_SAML_PROVIDER;
    $request->requestBody = 'cupiditate';
    $request->version = POSTDeleteSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postDeleteSAMLProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSSHPublicKeyRequest();
    $request->action = POSTDeleteSSHPublicKeyActionEnum::DELETE_SSH_PUBLIC_KEY;
    $request->requestBody = 'modi';
    $request->version = POSTDeleteSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postDeleteSSHPublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteServerCertificateRequest();
    $request->action = POSTDeleteServerCertificateActionEnum::DELETE_SERVER_CERTIFICATE;
    $request->requestBody = 'ratione';
    $request->version = POSTDeleteServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postDeleteServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceLinkedRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceLinkedRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceLinkedRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteServiceLinkedRoleRequest();
    $request->action = POSTDeleteServiceLinkedRoleActionEnum::DELETE_SERVICE_LINKED_ROLE;
    $request->requestBody = 'fuga';
    $request->version = POSTDeleteServiceLinkedRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->postDeleteServiceLinkedRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteServiceSpecificCredentialRequest();
    $request->action = POSTDeleteServiceSpecificCredentialActionEnum::DELETE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->requestBody = 'repellat';
    $request->version = POSTDeleteServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postDeleteServiceSpecificCredential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteSigningCertificateRequest();
    $request->action = POSTDeleteSigningCertificateActionEnum::DELETE_SIGNING_CERTIFICATE;
    $request->requestBody = 'ducimus';
    $request->version = POSTDeleteSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postDeleteSigningCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUserRequest();
    $request->action = POSTDeleteUserActionEnum::DELETE_USER;
    $request->requestBody = 'itaque';
    $request->version = POSTDeleteUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUserPermissionsBoundaryRequest();
    $request->action = POSTDeleteUserPermissionsBoundaryActionEnum::DELETE_USER_PERMISSIONS_BOUNDARY;
    $request->requestBody = 'quidem';
    $request->version = POSTDeleteUserPermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postDeleteUserPermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteUserPolicyRequest();
    $request->action = POSTDeleteUserPolicyActionEnum::DELETE_USER_POLICY;
    $request->requestBody = 'sequi';
    $request->version = POSTDeleteUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->postDeleteUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVirtualMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVirtualMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVirtualMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteVirtualMFADeviceRequest();
    $request->action = POSTDeleteVirtualMFADeviceActionEnum::DELETE_VIRTUAL_MFA_DEVICE;
    $request->requestBody = 'nam';
    $request->version = POSTDeleteVirtualMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postDeleteVirtualMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachGroupPolicyRequest();
    $request->action = POSTDetachGroupPolicyActionEnum::DETACH_GROUP_POLICY;
    $request->requestBody = 'veritatis';
    $request->version = POSTDetachGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->postDetachGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachRolePolicyRequest();
    $request->action = POSTDetachRolePolicyActionEnum::DETACH_ROLE_POLICY;
    $request->requestBody = 'aliquam';
    $request->version = POSTDetachRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->postDetachRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachUserPolicyRequest();
    $request->action = POSTDetachUserPolicyActionEnum::DETACH_USER_POLICY;
    $request->requestBody = 'quas';
    $request->version = POSTDetachUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postDetachUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableMFADeviceRequest();
    $request->action = POSTEnableMFADeviceActionEnum::ENABLE_MFA_DEVICE;
    $request->requestBody = 'iste';
    $request->version = POSTEnableMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postEnableMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateCredentialReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateCredentialReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateCredentialReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGenerateCredentialReportRequest();
    $request->action = POSTGenerateCredentialReportActionEnum::GENERATE_CREDENTIAL_REPORT;
    $request->version = POSTGenerateCredentialReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->postGenerateCredentialReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateOrganizationsAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateOrganizationsAccessReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateOrganizationsAccessReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGenerateOrganizationsAccessReportRequest();
    $request->action = POSTGenerateOrganizationsAccessReportActionEnum::GENERATE_ORGANIZATIONS_ACCESS_REPORT;
    $request->requestBody = 'veniam';
    $request->version = POSTGenerateOrganizationsAccessReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postGenerateOrganizationsAccessReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateServiceLastAccessedDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateServiceLastAccessedDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGenerateServiceLastAccessedDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGenerateServiceLastAccessedDetailsRequest();
    $request->action = POSTGenerateServiceLastAccessedDetailsActionEnum::GENERATE_SERVICE_LAST_ACCESSED_DETAILS;
    $request->requestBody = 'magnam';
    $request->version = POSTGenerateServiceLastAccessedDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postGenerateServiceLastAccessedDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccessKeyLastUsedRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccessKeyLastUsedActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccessKeyLastUsedVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAccessKeyLastUsedRequest();
    $request->action = POSTGetAccessKeyLastUsedActionEnum::GET_ACCESS_KEY_LAST_USED;
    $request->requestBody = 'odit';
    $request->version = POSTGetAccessKeyLastUsedVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->postGetAccessKeyLastUsed($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountAuthorizationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountAuthorizationDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountAuthorizationDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAccountAuthorizationDetailsRequest();
    $request->action = POSTGetAccountAuthorizationDetailsActionEnum::GET_ACCOUNT_AUTHORIZATION_DETAILS;
    $request->marker = 'nisi';
    $request->maxItems = 'voluptatibus';
    $request->requestBody = 'quaerat';
    $request->version = POSTGetAccountAuthorizationDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postGetAccountAuthorizationDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAccountPasswordPolicyRequest();
    $request->action = POSTGetAccountPasswordPolicyActionEnum::GET_ACCOUNT_PASSWORD_POLICY;
    $request->version = POSTGetAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postGetAccountPasswordPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSummaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSummaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAccountSummaryRequest();
    $request->action = POSTGetAccountSummaryActionEnum::GET_ACCOUNT_SUMMARY;
    $request->version = POSTGetAccountSummaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->postGetAccountSummary($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForCustomPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForCustomPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForCustomPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetContextKeysForCustomPolicyRequest();
    $request->action = POSTGetContextKeysForCustomPolicyActionEnum::GET_CONTEXT_KEYS_FOR_CUSTOM_POLICY;
    $request->requestBody = 'iusto';
    $request->version = POSTGetContextKeysForCustomPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->postGetContextKeysForCustomPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForPrincipalPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForPrincipalPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetContextKeysForPrincipalPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetContextKeysForPrincipalPolicyRequest();
    $request->action = POSTGetContextKeysForPrincipalPolicyActionEnum::GET_CONTEXT_KEYS_FOR_PRINCIPAL_POLICY;
    $request->requestBody = 'dolor';
    $request->version = POSTGetContextKeysForPrincipalPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->postGetContextKeysForPrincipalPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCredentialReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCredentialReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCredentialReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetCredentialReportRequest();
    $request->action = POSTGetCredentialReportActionEnum::GET_CREDENTIAL_REPORT;
    $request->version = POSTGetCredentialReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postGetCredentialReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetGroupRequest();
    $request->action = POSTGetGroupActionEnum::GET_GROUP;
    $request->marker = 'illo';
    $request->maxItems = 'ab';
    $request->requestBody = 'incidunt';
    $request->version = POSTGetGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postGetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetGroupPolicyRequest();
    $request->action = POSTGetGroupPolicyActionEnum::GET_GROUP_POLICY;
    $request->requestBody = 'reprehenderit';
    $request->version = POSTGetGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postGetGroupPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetInstanceProfileRequest();
    $request->action = POSTGetInstanceProfileActionEnum::GET_INSTANCE_PROFILE;
    $request->requestBody = 'illo';
    $request->version = POSTGetInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postGetInstanceProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetLoginProfileRequest();
    $request->action = POSTGetLoginProfileActionEnum::GET_LOGIN_PROFILE;
    $request->requestBody = 'consequatur';
    $request->version = POSTGetLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postGetLoginProfile($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetOpenIDConnectProviderRequest();
    $request->action = POSTGetOpenIDConnectProviderActionEnum::GET_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'rerum';
    $request->version = POSTGetOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->postGetOpenIDConnectProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOrganizationsAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOrganizationsAccessReportActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetOrganizationsAccessReportVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetOrganizationsAccessReportRequest();
    $request->action = POSTGetOrganizationsAccessReportActionEnum::GET_ORGANIZATIONS_ACCESS_REPORT;
    $request->requestBody = 'commodi';
    $request->version = POSTGetOrganizationsAccessReportVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postGetOrganizationsAccessReport($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetPolicyRequest();
    $request->action = POSTGetPolicyActionEnum::GET_POLICY;
    $request->requestBody = 'illum';
    $request->version = POSTGetPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postGetPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetPolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetPolicyVersionRequest();
    $request->action = POSTGetPolicyVersionActionEnum::GET_POLICY_VERSION;
    $request->requestBody = 'doloremque';
    $request->version = POSTGetPolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postGetPolicyVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetRoleRequest();
    $request->action = POSTGetRoleActionEnum::GET_ROLE;
    $request->requestBody = 'repudiandae';
    $request->version = POSTGetRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postGetRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetRolePolicyRequest();
    $request->action = POSTGetRolePolicyActionEnum::GET_ROLE_POLICY;
    $request->requestBody = 'sint';
    $request->version = POSTGetRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->postGetRolePolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetSAMLProviderRequest();
    $request->action = POSTGetSAMLProviderActionEnum::GET_SAML_PROVIDER;
    $request->requestBody = 'sunt';
    $request->version = POSTGetSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postGetSAMLProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetSSHPublicKeyRequest();
    $request->action = POSTGetSSHPublicKeyActionEnum::GET_SSH_PUBLIC_KEY;
    $request->requestBody = 'minus';
    $request->version = POSTGetSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->postGetSSHPublicKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetServerCertificateRequest();
    $request->action = POSTGetServerCertificateActionEnum::GET_SERVER_CERTIFICATE;
    $request->requestBody = 'repellat';
    $request->version = POSTGetServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postGetServerCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetServiceLastAccessedDetailsRequest();
    $request->action = POSTGetServiceLastAccessedDetailsActionEnum::GET_SERVICE_LAST_ACCESSED_DETAILS;
    $request->requestBody = 'soluta';
    $request->version = POSTGetServiceLastAccessedDetailsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->postGetServiceLastAccessedDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsWithEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetServiceLastAccessedDetailsWithEntitiesRequest();
    $request->action = POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum::GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES;
    $request->requestBody = 'itaque';
    $request->version = POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->postGetServiceLastAccessedDetailsWithEntities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLinkedRoleDeletionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLinkedRoleDeletionStatusActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetServiceLinkedRoleDeletionStatusVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetServiceLinkedRoleDeletionStatusRequest();
    $request->action = POSTGetServiceLinkedRoleDeletionStatusActionEnum::GET_SERVICE_LINKED_ROLE_DELETION_STATUS;
    $request->requestBody = 'explicabo';
    $request->version = POSTGetServiceLinkedRoleDeletionStatusVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postGetServiceLinkedRoleDeletionStatus($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetUserRequest();
    $request->action = POSTGetUserActionEnum::GET_USER;
    $request->requestBody = 'deserunt';
    $request->version = POSTGetUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postGetUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetUserPolicyRequest();
    $request->action = POSTGetUserPolicyActionEnum::GET_USER_POLICY;
    $request->requestBody = 'repudiandae';
    $request->version = POSTGetUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->postGetUserPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccessKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccessKeysActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccessKeysVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAccessKeysRequest();
    $request->action = POSTListAccessKeysActionEnum::LIST_ACCESS_KEYS;
    $request->marker = 'deleniti';
    $request->maxItems = 'enim';
    $request->requestBody = 'voluptate';
    $request->version = POSTListAccessKeysVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->postListAccessKeys($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccountAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccountAliasesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAccountAliasesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAccountAliasesRequest();
    $request->action = POSTListAccountAliasesActionEnum::LIST_ACCOUNT_ALIASES;
    $request->marker = 'nesciunt';
    $request->maxItems = 'mollitia';
    $request->requestBody = 'dignissimos';
    $request->version = POSTListAccountAliasesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->postListAccountAliases($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedGroupPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedGroupPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAttachedGroupPoliciesRequest();
    $request->action = POSTListAttachedGroupPoliciesActionEnum::LIST_ATTACHED_GROUP_POLICIES;
    $request->marker = 'aut';
    $request->maxItems = 'aut';
    $request->requestBody = 'eveniet';
    $request->version = POSTListAttachedGroupPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postListAttachedGroupPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedRolePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedRolePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedRolePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAttachedRolePoliciesRequest();
    $request->action = POSTListAttachedRolePoliciesActionEnum::LIST_ATTACHED_ROLE_POLICIES;
    $request->marker = 'nesciunt';
    $request->maxItems = 'quaerat';
    $request->requestBody = 'itaque';
    $request->version = POSTListAttachedRolePoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postListAttachedRolePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedUserPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedUserPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAttachedUserPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAttachedUserPoliciesRequest();
    $request->action = POSTListAttachedUserPoliciesActionEnum::LIST_ATTACHED_USER_POLICIES;
    $request->marker = 'amet';
    $request->maxItems = 'autem';
    $request->requestBody = 'fuga';
    $request->version = POSTListAttachedUserPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->postListAttachedUserPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListEntitiesForPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListEntitiesForPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListEntitiesForPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListEntitiesForPolicyRequest();
    $request->action = POSTListEntitiesForPolicyActionEnum::LIST_ENTITIES_FOR_POLICY;
    $request->marker = 'quae';
    $request->maxItems = 'eaque';
    $request->requestBody = 'saepe';
    $request->version = POSTListEntitiesForPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postListEntitiesForPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListGroupPoliciesRequest();
    $request->action = POSTListGroupPoliciesActionEnum::LIST_GROUP_POLICIES;
    $request->marker = 'eveniet';
    $request->maxItems = 'hic';
    $request->requestBody = 'voluptatem';
    $request->version = POSTListGroupPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postListGroupPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListGroupsRequest();
    $request->action = POSTListGroupsActionEnum::LIST_GROUPS;
    $request->marker = 'aliquid';
    $request->maxItems = 'modi';
    $request->requestBody = 'optio';
    $request->version = POSTListGroupsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postListGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsForUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListGroupsForUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListGroupsForUserRequest();
    $request->action = POSTListGroupsForUserActionEnum::LIST_GROUPS_FOR_USER;
    $request->marker = 'ea';
    $request->maxItems = 'impedit';
    $request->requestBody = 'ducimus';
    $request->version = POSTListGroupsForUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postListGroupsForUser($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfileTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfileTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfileTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListInstanceProfileTagsRequest();
    $request->action = POSTListInstanceProfileTagsActionEnum::LIST_INSTANCE_PROFILE_TAGS;
    $request->requestBody = 'accusamus';
    $request->version = POSTListInstanceProfileTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postListInstanceProfileTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListInstanceProfilesRequest();
    $request->action = POSTListInstanceProfilesActionEnum::LIST_INSTANCE_PROFILES;
    $request->marker = 'quia';
    $request->maxItems = 'ullam';
    $request->requestBody = 'quisquam';
    $request->version = POSTListInstanceProfilesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postListInstanceProfiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesForRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesForRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListInstanceProfilesForRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListInstanceProfilesForRoleRequest();
    $request->action = POSTListInstanceProfilesForRoleActionEnum::LIST_INSTANCE_PROFILES_FOR_ROLE;
    $request->marker = 'enim';
    $request->maxItems = 'optio';
    $request->requestBody = 'rem';
    $request->version = POSTListInstanceProfilesForRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postListInstanceProfilesForRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADeviceTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADeviceTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADeviceTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListMFADeviceTagsRequest();
    $request->action = POSTListMFADeviceTagsActionEnum::LIST_MFA_DEVICE_TAGS;
    $request->requestBody = 'ullam';
    $request->version = POSTListMFADeviceTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->postListMFADeviceTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADevicesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListMFADevicesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListMFADevicesRequest();
    $request->action = POSTListMFADevicesActionEnum::LIST_MFA_DEVICES;
    $request->marker = 'vero';
    $request->maxItems = 'doloribus';
    $request->requestBody = 'impedit';
    $request->version = POSTListMFADevicesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->postListMFADevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProviderTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProviderTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProviderTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListOpenIDConnectProviderTagsRequest();
    $request->action = POSTListOpenIDConnectProviderTagsActionEnum::LIST_OPEN_ID_CONNECT_PROVIDER_TAGS;
    $request->requestBody = 'esse';
    $request->version = POSTListOpenIDConnectProviderTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postListOpenIDConnectProviderTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProvidersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListOpenIDConnectProvidersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListOpenIDConnectProvidersRequest();
    $request->action = POSTListOpenIDConnectProvidersActionEnum::LIST_OPEN_ID_CONNECT_PROVIDERS;
    $request->requestBody = 'voluptas';
    $request->version = POSTListOpenIDConnectProvidersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->postListOpenIDConnectProviders($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPoliciesRequest();
    $request->action = POSTListPoliciesActionEnum::LIST_POLICIES;
    $request->marker = 'maiores';
    $request->maxItems = 'accusantium';
    $request->requestBody = 'veniam';
    $request->version = POSTListPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->postListPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesGrantingServiceAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesGrantingServiceAccessActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPoliciesGrantingServiceAccessVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPoliciesGrantingServiceAccessRequest();
    $request->action = POSTListPoliciesGrantingServiceAccessActionEnum::LIST_POLICIES_GRANTING_SERVICE_ACCESS;
    $request->requestBody = 'est';
    $request->version = POSTListPoliciesGrantingServiceAccessVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->postListPoliciesGrantingServiceAccess($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPolicyTagsRequest();
    $request->action = POSTListPolicyTagsActionEnum::LIST_POLICY_TAGS;
    $request->requestBody = 'nemo';
    $request->version = POSTListPolicyTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->postListPolicyTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPolicyVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPolicyVersionsRequest();
    $request->action = POSTListPolicyVersionsActionEnum::LIST_POLICY_VERSIONS;
    $request->marker = 'optio';
    $request->maxItems = 'alias';
    $request->requestBody = 'quidem';
    $request->version = POSTListPolicyVersionsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postListPolicyVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolePoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolePoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListRolePoliciesRequest();
    $request->action = POSTListRolePoliciesActionEnum::LIST_ROLE_POLICIES;
    $request->marker = 'sint';
    $request->maxItems = 'ut';
    $request->requestBody = 'numquam';
    $request->version = POSTListRolePoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postListRolePolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRoleTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRoleTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRoleTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListRoleTagsRequest();
    $request->action = POSTListRoleTagsActionEnum::LIST_ROLE_TAGS;
    $request->requestBody = 'ab';
    $request->version = POSTListRoleTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postListRoleTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListRolesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListRolesRequest();
    $request->action = POSTListRolesActionEnum::LIST_ROLES;
    $request->marker = 'minima';
    $request->maxItems = 'architecto';
    $request->requestBody = 'qui';
    $request->version = POSTListRolesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postListRoles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProviderTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProviderTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProviderTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListSAMLProviderTagsRequest();
    $request->action = POSTListSAMLProviderTagsActionEnum::LIST_SAML_PROVIDER_TAGS;
    $request->requestBody = 'expedita';
    $request->version = POSTListSAMLProviderTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postListSAMLProviderTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProvidersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSAMLProvidersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListSAMLProvidersRequest();
    $request->action = POSTListSAMLProvidersActionEnum::LIST_SAML_PROVIDERS;
    $request->requestBody = 'deserunt';
    $request->version = POSTListSAMLProvidersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->postListSAMLProviders($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSSHPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSSHPublicKeysActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSSHPublicKeysVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListSSHPublicKeysRequest();
    $request->action = POSTListSSHPublicKeysActionEnum::LIST_SSH_PUBLIC_KEYS;
    $request->marker = 'doloribus';
    $request->maxItems = 'assumenda';
    $request->requestBody = 'officiis';
    $request->version = POSTListSSHPublicKeysVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->postListSSHPublicKeys($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificateTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificateTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificateTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListServerCertificateTagsRequest();
    $request->action = POSTListServerCertificateTagsActionEnum::LIST_SERVER_CERTIFICATE_TAGS;
    $request->requestBody = 'dicta';
    $request->version = POSTListServerCertificateTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->postListServerCertificateTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListServerCertificatesRequest();
    $request->action = POSTListServerCertificatesActionEnum::LIST_SERVER_CERTIFICATES;
    $request->marker = 'veritatis';
    $request->maxItems = 'provident';
    $request->requestBody = 'cumque';
    $request->version = POSTListServerCertificatesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postListServerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServiceSpecificCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServiceSpecificCredentialsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListServiceSpecificCredentialsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListServiceSpecificCredentialsRequest();
    $request->action = POSTListServiceSpecificCredentialsActionEnum::LIST_SERVICE_SPECIFIC_CREDENTIALS;
    $request->requestBody = 'dignissimos';
    $request->version = POSTListServiceSpecificCredentialsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->postListServiceSpecificCredentials($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSigningCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSigningCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListSigningCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListSigningCertificatesRequest();
    $request->action = POSTListSigningCertificatesActionEnum::LIST_SIGNING_CERTIFICATES;
    $request->marker = 'facilis';
    $request->maxItems = 'quidem';
    $request->requestBody = 'itaque';
    $request->version = POSTListSigningCertificatesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postListSigningCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListUserPoliciesRequest();
    $request->action = POSTListUserPoliciesActionEnum::LIST_USER_POLICIES;
    $request->marker = 'libero';
    $request->maxItems = 'nam';
    $request->requestBody = 'incidunt';
    $request->version = POSTListUserPoliciesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->postListUserPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUserTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListUserTagsRequest();
    $request->action = POSTListUserTagsActionEnum::LIST_USER_TAGS;
    $request->marker = 'illum';
    $request->maxItems = 'nemo';
    $request->requestBody = 'illum';
    $request->version = POSTListUserTagsVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postListUserTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUsersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListUsersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListUsersRequest();
    $request->action = POSTListUsersActionEnum::LIST_USERS;
    $request->marker = 'ad';
    $request->maxItems = 'facere';
    $request->requestBody = 'laborum';
    $request->version = POSTListUsersVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postListUsers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVirtualMFADevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVirtualMFADevicesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVirtualMFADevicesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListVirtualMFADevicesRequest();
    $request->action = POSTListVirtualMFADevicesActionEnum::LIST_VIRTUAL_MFA_DEVICES;
    $request->marker = 'deserunt';
    $request->maxItems = 'molestias';
    $request->requestBody = 'laborum';
    $request->version = POSTListVirtualMFADevicesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postListVirtualMFADevices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutGroupPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutGroupPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutGroupPolicyRequest();
    $request->action = POSTPutGroupPolicyActionEnum::PUT_GROUP_POLICY;
    $request->requestBody = 'magnam';
    $request->version = POSTPutGroupPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postPutGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutRolePermissionsBoundaryRequest();
    $request->action = POSTPutRolePermissionsBoundaryActionEnum::PUT_ROLE_PERMISSIONS_BOUNDARY;
    $request->requestBody = 'error';
    $request->version = POSTPutRolePermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postPutRolePermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutRolePolicyRequest();
    $request->action = POSTPutRolePolicyActionEnum::PUT_ROLE_POLICY;
    $request->requestBody = 'impedit';
    $request->version = POSTPutRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postPutRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPermissionsBoundaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPermissionsBoundaryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPermissionsBoundaryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutUserPermissionsBoundaryRequest();
    $request->action = POSTPutUserPermissionsBoundaryActionEnum::PUT_USER_PERMISSIONS_BOUNDARY;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTPutUserPermissionsBoundaryVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postPutUserPermissionsBoundary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutUserPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutUserPolicyRequest();
    $request->action = POSTPutUserPolicyActionEnum::PUT_USER_POLICY;
    $request->requestBody = 'quae';
    $request->version = POSTPutUserPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postPutUserPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveClientIDFromOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveClientIDFromOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveClientIDFromOpenIDConnectProviderRequest();
    $request->action = POSTRemoveClientIDFromOpenIDConnectProviderActionEnum::REMOVE_CLIENT_ID_FROM_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'a';
    $request->version = POSTRemoveClientIDFromOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postRemoveClientIDFromOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveRoleFromInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveRoleFromInstanceProfileRequest();
    $request->action = POSTRemoveRoleFromInstanceProfileActionEnum::REMOVE_ROLE_FROM_INSTANCE_PROFILE;
    $request->requestBody = 'suscipit';
    $request->version = POSTRemoveRoleFromInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postRemoveRoleFromInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveUserFromGroup

Removes the specified user from the specified group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveUserFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveUserFromGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveUserFromGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveUserFromGroupRequest();
    $request->action = POSTRemoveUserFromGroupActionEnum::REMOVE_USER_FROM_GROUP;
    $request->requestBody = 'quasi';
    $request->version = POSTRemoveUserFromGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->postRemoveUserFromGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetServiceSpecificCredentialRequest();
    $request->action = POSTResetServiceSpecificCredentialActionEnum::RESET_SERVICE_SPECIFIC_CREDENTIAL;
    $request->requestBody = 'incidunt';
    $request->version = POSTResetServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postResetServiceSpecificCredential($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResyncMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResyncMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResyncMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResyncMFADeviceRequest();
    $request->action = POSTResyncMFADeviceActionEnum::RESYNC_MFA_DEVICE;
    $request->requestBody = 'accusantium';
    $request->version = POSTResyncMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postResyncMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDefaultPolicyVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDefaultPolicyVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetDefaultPolicyVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetDefaultPolicyVersionRequest();
    $request->action = POSTSetDefaultPolicyVersionActionEnum::SET_DEFAULT_POLICY_VERSION;
    $request->requestBody = 'similique';
    $request->version = POSTSetDefaultPolicyVersionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postSetDefaultPolicyVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityTokenServicePreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityTokenServicePreferencesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityTokenServicePreferencesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetSecurityTokenServicePreferencesRequest();
    $request->action = POSTSetSecurityTokenServicePreferencesActionEnum::SET_SECURITY_TOKEN_SERVICE_PREFERENCES;
    $request->requestBody = 'nesciunt';
    $request->version = POSTSetSecurityTokenServicePreferencesVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postSetSecurityTokenServicePreferences($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSimulateCustomPolicy

<p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulateCustomPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulateCustomPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulateCustomPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSimulateCustomPolicyRequest();
    $request->action = POSTSimulateCustomPolicyActionEnum::SIMULATE_CUSTOM_POLICY;
    $request->marker = 'velit';
    $request->maxItems = 'reiciendis';
    $request->requestBody = 'amet';
    $request->version = POSTSimulateCustomPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postSimulateCustomPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSimulatePrincipalPolicy

<p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulatePrincipalPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulatePrincipalPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSimulatePrincipalPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSimulatePrincipalPolicyRequest();
    $request->action = POSTSimulatePrincipalPolicyActionEnum::SIMULATE_PRINCIPAL_POLICY;
    $request->marker = 'asperiores';
    $request->maxItems = 'a';
    $request->requestBody = 'nobis';
    $request->version = POSTSimulatePrincipalPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->postSimulatePrincipalPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagInstanceProfile

<p>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagInstanceProfileRequest();
    $request->action = POSTTagInstanceProfileActionEnum::TAG_INSTANCE_PROFILE;
    $request->requestBody = 'tempore';
    $request->version = POSTTagInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postTagInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagMFADevice

<p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagMFADeviceRequest();
    $request->action = POSTTagMFADeviceActionEnum::TAG_MFA_DEVICE;
    $request->requestBody = 'asperiores';
    $request->version = POSTTagMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postTagMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagOpenIDConnectProvider

<p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagOpenIDConnectProviderRequest();
    $request->action = POSTTagOpenIDConnectProviderActionEnum::TAG_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'itaque';
    $request->version = POSTTagOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postTagOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagPolicy

<p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagPolicyRequest();
    $request->action = POSTTagPolicyActionEnum::TAG_POLICY;
    $request->requestBody = 'saepe';
    $request->version = POSTTagPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postTagPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagRole

<p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagRoleRequest();
    $request->action = POSTTagRoleActionEnum::TAG_ROLE;
    $request->requestBody = 'eius';
    $request->version = POSTTagRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postTagRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagSAMLProvider

<p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagSAMLProviderRequest();
    $request->action = POSTTagSAMLProviderActionEnum::TAG_SAML_PROVIDER;
    $request->requestBody = 'reprehenderit';
    $request->version = POSTTagSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postTagSAMLProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagServerCertificate

<p>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagServerCertificateRequest();
    $request->action = POSTTagServerCertificateActionEnum::TAG_SERVER_CERTIFICATE;
    $request->requestBody = 'modi';
    $request->version = POSTTagServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postTagServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagUser

<p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTagUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTagUserRequest();
    $request->action = POSTTagUserActionEnum::TAG_USER;
    $request->requestBody = 'neque';
    $request->version = POSTTagUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'veniam';

    $response = $sdk->sdk->postTagUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagInstanceProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagInstanceProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagInstanceProfileRequest();
    $request->action = POSTUntagInstanceProfileActionEnum::UNTAG_INSTANCE_PROFILE;
    $request->requestBody = 'nihil';
    $request->version = POSTUntagInstanceProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postUntagInstanceProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagMFADeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagMFADeviceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagMFADeviceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagMFADeviceRequest();
    $request->action = POSTUntagMFADeviceActionEnum::UNTAG_MFA_DEVICE;
    $request->requestBody = 'pariatur';
    $request->version = POSTUntagMFADeviceVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postUntagMFADevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagOpenIDConnectProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagOpenIDConnectProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagOpenIDConnectProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagOpenIDConnectProviderRequest();
    $request->action = POSTUntagOpenIDConnectProviderActionEnum::UNTAG_OPEN_ID_CONNECT_PROVIDER;
    $request->requestBody = 'possimus';
    $request->version = POSTUntagOpenIDConnectProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->postUntagOpenIDConnectProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagPolicyRequest();
    $request->action = POSTUntagPolicyActionEnum::UNTAG_POLICY;
    $request->requestBody = 'voluptatibus';
    $request->version = POSTUntagPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postUntagPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagRoleRequest();
    $request->action = POSTUntagRoleActionEnum::UNTAG_ROLE;
    $request->requestBody = 'praesentium';
    $request->version = POSTUntagRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->postUntagRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagSAMLProviderRequest();
    $request->action = POSTUntagSAMLProviderActionEnum::UNTAG_SAML_PROVIDER;
    $request->requestBody = 'doloremque';
    $request->version = POSTUntagSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->postUntagSAMLProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagServerCertificateRequest();
    $request->action = POSTUntagServerCertificateActionEnum::UNTAG_SERVER_CERTIFICATE;
    $request->requestBody = 'tempora';
    $request->version = POSTUntagServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postUntagServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUntagUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUntagUserRequest();
    $request->action = POSTUntagUserActionEnum::UNTAG_USER;
    $request->requestBody = 'minus';
    $request->version = POSTUntagUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postUntagUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccessKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccessKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccessKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAccessKeyRequest();
    $request->action = POSTUpdateAccessKeyActionEnum::UPDATE_ACCESS_KEY;
    $request->requestBody = 'illo';
    $request->version = POSTUpdateAccessKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postUpdateAccessKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountPasswordPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountPasswordPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountPasswordPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAccountPasswordPolicyRequest();
    $request->action = POSTUpdateAccountPasswordPolicyActionEnum::UPDATE_ACCOUNT_PASSWORD_POLICY;
    $request->requestBody = 'vel';
    $request->version = POSTUpdateAccountPasswordPolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->postUpdateAccountPasswordPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAssumeRolePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAssumeRolePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAssumeRolePolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAssumeRolePolicyRequest();
    $request->action = POSTUpdateAssumeRolePolicyActionEnum::UPDATE_ASSUME_ROLE_POLICY;
    $request->requestBody = 'ad';
    $request->version = POSTUpdateAssumeRolePolicyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postUpdateAssumeRolePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateGroupRequest();
    $request->action = POSTUpdateGroupActionEnum::UPDATE_GROUP;
    $request->requestBody = 'laudantium';
    $request->version = POSTUpdateGroupVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->postUpdateGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateLoginProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateLoginProfileActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateLoginProfileVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateLoginProfileRequest();
    $request->action = POSTUpdateLoginProfileActionEnum::UPDATE_LOGIN_PROFILE;
    $request->requestBody = 'ducimus';
    $request->version = POSTUpdateLoginProfileVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->postUpdateLoginProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateOpenIDConnectProviderThumbprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateOpenIDConnectProviderThumbprintActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateOpenIDConnectProviderThumbprintVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateOpenIDConnectProviderThumbprintRequest();
    $request->action = POSTUpdateOpenIDConnectProviderThumbprintActionEnum::UPDATE_OPEN_ID_CONNECT_PROVIDER_THUMBPRINT;
    $request->requestBody = 'sit';
    $request->version = POSTUpdateOpenIDConnectProviderThumbprintVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'autem';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->postUpdateOpenIDConnectProviderThumbprint($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateRole

Updates the description or maximum session duration setting of a role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateRoleRequest();
    $request->action = POSTUpdateRoleActionEnum::UPDATE_ROLE;
    $request->requestBody = 'deserunt';
    $request->version = POSTUpdateRoleVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->postUpdateRole($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleDescriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateRoleDescriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateRoleDescriptionRequest();
    $request->action = POSTUpdateRoleDescriptionActionEnum::UPDATE_ROLE_DESCRIPTION;
    $request->requestBody = 'aut';
    $request->version = POSTUpdateRoleDescriptionVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postUpdateRoleDescription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSAMLProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSAMLProviderActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSAMLProviderVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateSAMLProviderRequest();
    $request->action = POSTUpdateSAMLProviderActionEnum::UPDATE_SAML_PROVIDER;
    $request->requestBody = 'voluptas';
    $request->version = POSTUpdateSAMLProviderVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->postUpdateSAMLProvider($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateSSHPublicKeyRequest();
    $request->action = POSTUpdateSSHPublicKeyActionEnum::UPDATE_SSH_PUBLIC_KEY;
    $request->requestBody = 'quasi';
    $request->version = POSTUpdateSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->postUpdateSSHPublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateServerCertificateRequest();
    $request->action = POSTUpdateServerCertificateActionEnum::UPDATE_SERVER_CERTIFICATE;
    $request->requestBody = 'delectus';
    $request->version = POSTUpdateServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->postUpdateServerCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceSpecificCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceSpecificCredentialActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateServiceSpecificCredentialVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateServiceSpecificCredentialRequest();
    $request->action = POSTUpdateServiceSpecificCredentialActionEnum::UPDATE_SERVICE_SPECIFIC_CREDENTIAL;
    $request->requestBody = 'pariatur';
    $request->version = POSTUpdateServiceSpecificCredentialVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postUpdateServiceSpecificCredential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateSigningCertificateRequest();
    $request->action = POSTUpdateSigningCertificateActionEnum::UPDATE_SIGNING_CERTIFICATE;
    $request->requestBody = 'excepturi';
    $request->version = POSTUpdateSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postUpdateSigningCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateUserActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateUserVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateUserRequest();
    $request->action = POSTUpdateUserActionEnum::UPDATE_USER;
    $request->requestBody = 'soluta';
    $request->version = POSTUpdateUserVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postUpdateUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSSHPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSSHPublicKeyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSSHPublicKeyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUploadSSHPublicKeyRequest();
    $request->action = POSTUploadSSHPublicKeyActionEnum::UPLOAD_SSH_PUBLIC_KEY;
    $request->requestBody = 'iusto';
    $request->version = POSTUploadSSHPublicKeyVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->postUploadSSHPublicKey($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUploadServerCertificate

<p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadServerCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadServerCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadServerCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUploadServerCertificateRequest();
    $request->action = POSTUploadServerCertificateActionEnum::UPLOAD_SERVER_CERTIFICATE;
    $request->requestBody = 'eum';
    $request->version = POSTUploadServerCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'atque';

    $response = $sdk->sdk->postUploadServerCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSigningCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUploadSigningCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUploadSigningCertificateRequest();
    $request->action = POSTUploadSigningCertificateActionEnum::UPLOAD_SIGNING_CERTIFICATE;
    $request->requestBody = 'rerum';
    $request->version = POSTUploadSigningCertificateVersionEnum::TWO_THOUSAND_AND_TEN0508;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->postUploadSigningCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
