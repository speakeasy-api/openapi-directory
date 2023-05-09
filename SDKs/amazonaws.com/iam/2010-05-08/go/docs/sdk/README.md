# SDK

## Overview

<fullname>Identity and Access Management</fullname> <p>Identity and Access Management (IAM) is a web service for securely controlling access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which Amazon Web Services resources users and applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iam/>
### Available Operations

* [GETAddClientIDToOpenIDConnectProvider](#getaddclientidtoopenidconnectprovider) - <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
* [GETAddRoleToInstanceProfile](#getaddroletoinstanceprofile) - <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [GETAddUserToGroup](#getaddusertogroup) - Adds the specified user to the specified group.
* [GETAttachGroupPolicy](#getattachgrouppolicy) - <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETAttachRolePolicy](#getattachrolepolicy) - <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>
* [GETAttachUserPolicy](#getattachuserpolicy) - <p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETChangePassword](#getchangepassword) - <p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [GETCreateAccessKey](#getcreateaccesskey) - <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
* [GETCreateAccountAlias](#getcreateaccountalias) - Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [GETCreateGroup](#getcreategroup) - <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [GETCreateLoginProfile](#getcreateloginprofile) - <p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [GETCreatePolicyVersion](#getcreatepolicyversion) - <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [GETCreateServiceLinkedRole](#getcreateservicelinkedrole) - <p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>
* [GETCreateServiceSpecificCredential](#getcreateservicespecificcredential) - <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>
* [GETDeactivateMFADevice](#getdeactivatemfadevice) - <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteAccessKey](#getdeleteaccesskey) - <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [GETDeleteAccountAlias](#getdeleteaccountalias) -  Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [GETDeleteAccountPasswordPolicy](#getdeleteaccountpasswordpolicy) - Deletes the password policy for the Amazon Web Services account. There are no parameters.
* [GETDeleteGroup](#getdeletegroup) - Deletes the specified IAM group. The group must not contain any users or have any attached policies.
* [GETDeleteGroupPolicy](#getdeletegrouppolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteInstanceProfile](#getdeleteinstanceprofile) - <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [GETDeleteLoginProfile](#getdeleteloginprofile) - <p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>
* [GETDeleteOpenIDConnectProvider](#getdeleteopenidconnectprovider) - <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
* [GETDeletePolicy](#getdeletepolicy) - <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDeletePolicyVersion](#getdeletepolicyversion) - <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteRole](#getdeleterole) - <p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
* [GETDeleteRolePermissionsBoundary](#getdeleterolepermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>
* [GETDeleteRolePolicy](#getdeleterolepolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteSAMLProvider](#getdeletesamlprovider) - <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [GETDeleteSSHPublicKey](#getdeletesshpublickey) - <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [GETDeleteServerCertificate](#getdeleteservercertificate) - <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
* [GETDeleteServiceLinkedRole](#getdeleteservicelinkedrole) - <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteServiceSpecificCredential](#getdeleteservicespecificcredential) - Deletes the specified service-specific credential.
* [GETDeleteSigningCertificate](#getdeletesigningcertificate) - <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>
* [GETDeleteUser](#getdeleteuser) - <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
* [GETDeleteUserPermissionsBoundary](#getdeleteuserpermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
* [GETDeleteUserPolicy](#getdeleteuserpolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDeleteVirtualMFADevice](#getdeletevirtualmfadevice) - <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
* [GETDetachGroupPolicy](#getdetachgrouppolicy) - <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDetachRolePolicy](#getdetachrolepolicy) - <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETDetachUserPolicy](#getdetachuserpolicy) - <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETEnableMFADevice](#getenablemfadevice) - Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
* [GETGenerateCredentialReport](#getgeneratecredentialreport) -  Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [GETGenerateOrganizationsAccessReport](#getgenerateorganizationsaccessreport) - <p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>
* [GETGenerateServiceLastAccessedDetails](#getgenerateservicelastaccesseddetails) - <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [GETGETAccessKeyLastUsed](#getgetaccesskeylastused) - Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.
* [GETGETAccountAuthorizationDetails](#getgetaccountauthorizationdetails) - <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETGETAccountPasswordPolicy](#getgetaccountpasswordpolicy) - Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.
* [GETGETAccountSummary](#getgetaccountsummary) - <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [GETGETContextKeysForCustomPolicy](#getgetcontextkeysforcustompolicy) - <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
* [GETGETContextKeysForPrincipalPolicy](#getgetcontextkeysforprincipalpolicy) - <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
* [GETGETCredentialReport](#getgetcredentialreport) -  Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [GETGETGroup](#getgetgroup) -  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
* [GETGETGroupPolicy](#getgetgrouppolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETGETInstanceProfile](#getgetinstanceprofile) -  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.
* [GETGETLoginProfile](#getgetloginprofile) - <p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>
* [GETGETOpenIDConnectProvider](#getgetopenidconnectprovider) - Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
* [GETGETOrganizationsAccessReport](#getgetorganizationsaccessreport) - <p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
* [GETGETPolicy](#getgetpolicy) - <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETGETPolicyVersion](#getgetpolicyversion) - <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [GETGETRole](#getgetrole) - <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
* [GETGETRolePolicy](#getgetrolepolicy) - <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>
* [GETGETSAMLProvider](#getgetsamlprovider) - <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [GETGETSSHPublicKey](#getgetsshpublickey) - <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [GETGETServerCertificate](#getgetservercertificate) - <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>
* [GETGETServiceLastAccessedDetails](#getgetservicelastaccesseddetails) - <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [GETGETServiceLastAccessedDetailsWithEntities](#getgetservicelastaccesseddetailswithentities) - <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
* [GETGETServiceLinkedRoleDeletionStatus](#getgetservicelinkedroledeletionstatus) - Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.
* [GETGETUser](#getgetuser) - <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>
* [GETGETUserPolicy](#getgetuserpolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETListAccessKeys](#getlistaccesskeys) - <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>
* [GETListAccountAliases](#getlistaccountaliases) - Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [GETListAttachedGroupPolicies](#getlistattachedgrouppolicies) - <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [GETListAttachedRolePolicies](#getlistattachedrolepolicies) - <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
* [GETListAttachedUserPolicies](#getlistattacheduserpolicies) - <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [GETListEntitiesForPolicy](#getlistentitiesforpolicy) - <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListGroupPolicies](#getlistgrouppolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
* [GETListGroups](#getlistgroups) - <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListGroupsForUser](#getlistgroupsforuser) - <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListInstanceProfileTags](#getlistinstanceprofiletags) - Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETListInstanceProfiles](#getlistinstanceprofiles) - <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListInstanceProfilesForRole](#getlistinstanceprofilesforrole) - <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListMFADeviceTags](#getlistmfadevicetags) - Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETListMFADevices](#getlistmfadevices) - <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListOpenIDConnectProviderTags](#getlistopenidconnectprovidertags) - <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [GETListOpenIDConnectProviders](#getlistopenidconnectproviders) - <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>
* [GETListPolicies](#getlistpolicies) - <p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>
* [GETListPoliciesGrantingServiceAccess](#getlistpoliciesgrantingserviceaccess) - <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
* [GETListPolicyTags](#getlistpolicytags) - Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETListPolicyVersions](#getlistpolicyversions) - <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETListRolePolicies](#getlistrolepolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
* [GETListRoleTags](#getlistroletags) - Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETListRoles](#getlistroles) - <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListSAMLProviderTags](#getlistsamlprovidertags) - <p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [GETListSAMLProviders](#getlistsamlproviders) - <p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>
* [GETListSSHPublicKeys](#getlistsshpublickeys) - <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListServerCertificateTags](#getlistservercertificatetags) - <p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETListServerCertificates](#getlistservercertificates) - <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>
* [GETListServiceSpecificCredentials](#getlistservicespecificcredentials) - Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.
* [GETListSigningCertificates](#getlistsigningcertificates) - <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [GETListUserPolicies](#getlistuserpolicies) - <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
* [GETListUserTags](#getlistusertags) - Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETListUsers](#getlistusers) - <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETListVirtualMFADevices](#getlistvirtualmfadevices) - <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [GETPutGroupPolicy](#getputgrouppolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETPutRolePermissionsBoundary](#getputrolepermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [GETPutRolePolicy](#getputrolepolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETPutUserPermissionsBoundary](#getputuserpermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [GETPutUserPolicy](#getputuserpolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETRemoveClientIDFromOpenIDConnectProvider](#getremoveclientidfromopenidconnectprovider) - <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
* [GETRemoveRoleFromInstanceProfile](#getremoverolefrominstanceprofile) - <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [GETRemoveUserFromGroup](#getremoveuserfromgroup) - Removes the specified user from the specified group.
* [GETResetServiceSpecificCredential](#getresetservicespecificcredential) - Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
* [GETResyncMFADevice](#getresyncmfadevice) - <p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>
* [GETSetDefaultPolicyVersion](#getsetdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [GETSetSecurityTokenServicePreferences](#getsetsecuritytokenservicepreferences) - <p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
* [GETUntagInstanceProfile](#getuntaginstanceprofile) - Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagMFADevice](#getuntagmfadevice) - Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagOpenIDConnectProvider](#getuntagopenidconnectprovider) - Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagPolicy](#getuntagpolicy) - Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagRole](#getuntagrole) - Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagSAMLProvider](#getuntagsamlprovider) - Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUntagServerCertificate](#getuntagservercertificate) - <p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETUntagUser](#getuntaguser) - Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [GETUpdateAccessKey](#getupdateaccesskey) - <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>
* [GETUpdateAccountPasswordPolicy](#getupdateaccountpasswordpolicy) - <p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>
* [GETUpdateAssumeRolePolicy](#getupdateassumerolepolicy) - Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.
* [GETUpdateGroup](#getupdategroup) - <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>
* [GETUpdateLoginProfile](#getupdateloginprofile) - <p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [GETUpdateOpenIDConnectProviderThumbprint](#getupdateopenidconnectproviderthumbprint) - <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
* [GETUpdateRole](#getupdaterole) - Updates the description or maximum session duration setting of a role.
* [GETUpdateRoleDescription](#getupdateroledescription) - <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
* [GETUpdateSAMLProvider](#getupdatesamlprovider) - <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [GETUpdateSSHPublicKey](#getupdatesshpublickey) - <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [GETUpdateServerCertificate](#getupdateservercertificate) - <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>
* [GETUpdateServiceSpecificCredential](#getupdateservicespecificcredential) - Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.
* [GETUpdateSigningCertificate](#getupdatesigningcertificate) - <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [GETUpdateUser](#getupdateuser) - <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>
* [GETUploadSSHPublicKey](#getuploadsshpublickey) - <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [GETUploadSigningCertificate](#getuploadsigningcertificate) - <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTAddClientIDToOpenIDConnectProvider](#postaddclientidtoopenidconnectprovider) - <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
* [POSTAddRoleToInstanceProfile](#postaddroletoinstanceprofile) - <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [POSTAddUserToGroup](#postaddusertogroup) - Adds the specified user to the specified group.
* [POSTAttachGroupPolicy](#postattachgrouppolicy) - <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTAttachRolePolicy](#postattachrolepolicy) - <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTAttachUserPolicy](#postattachuserpolicy) - <p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTChangePassword](#postchangepassword) - <p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateAccessKey](#postcreateaccesskey) - <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
* [POSTCreateAccountAlias](#postcreateaccountalias) - Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [POSTCreateGroup](#postcreategroup) - <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateInstanceProfile](#postcreateinstanceprofile) - <p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using roles for applications on Amazon EC2</a> in the <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object quotas</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateLoginProfile](#postcreateloginprofile) - <p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateOpenIDConnectProvider](#postcreateopenidconnectprovider) - <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider.</p> <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the <i>IAM User Guide</i>.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of tags that are attached to the specified IAM OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP you want to use to access Amazon Web Services.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>
* [POSTCreatePolicy](#postcreatepolicy) - <p>Creates a new managed policy for your Amazon Web Services account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreatePolicyVersion](#postcreatepolicyversion) - <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateRole](#postcreaterole) - Creates a new role for your Amazon Web Services account. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM roles</a>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.
* [POSTCreateSAMLProvider](#postcreatesamlprovider) - <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateServiceLinkedRole](#postcreateservicelinkedrole) - <p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>
* [POSTCreateServiceSpecificCredential](#postcreateservicespecificcredential) - <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateUser](#postcreateuser) - <p>Creates a new IAM user for your Amazon Web Services account.</p> <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [POSTCreateVirtualMFADevice](#postcreatevirtualmfadevice) - <p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>
* [POSTDeactivateMFADevice](#postdeactivatemfadevice) - <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteAccessKey](#postdeleteaccesskey) - <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [POSTDeleteAccountAlias](#postdeleteaccountalias) -  Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [POSTDeleteAccountPasswordPolicy](#postdeleteaccountpasswordpolicy) - Deletes the password policy for the Amazon Web Services account. There are no parameters.
* [POSTDeleteGroup](#postdeletegroup) - Deletes the specified IAM group. The group must not contain any users or have any attached policies.
* [POSTDeleteGroupPolicy](#postdeletegrouppolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteInstanceProfile](#postdeleteinstanceprofile) - <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [POSTDeleteLoginProfile](#postdeleteloginprofile) - <p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>
* [POSTDeleteOpenIDConnectProvider](#postdeleteopenidconnectprovider) - <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
* [POSTDeletePolicy](#postdeletepolicy) - <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeletePolicyVersion](#postdeletepolicyversion) - <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteRole](#postdeleterole) - <p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
* [POSTDeleteRolePermissionsBoundary](#postdeleterolepermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>
* [POSTDeleteRolePolicy](#postdeleterolepolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteSAMLProvider](#postdeletesamlprovider) - <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [POSTDeleteSSHPublicKey](#postdeletesshpublickey) - <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [POSTDeleteServerCertificate](#postdeleteservercertificate) - <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
* [POSTDeleteServiceLinkedRole](#postdeleteservicelinkedrole) - <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteServiceSpecificCredential](#postdeleteservicespecificcredential) - Deletes the specified service-specific credential.
* [POSTDeleteSigningCertificate](#postdeletesigningcertificate) - <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>
* [POSTDeleteUser](#postdeleteuser) - <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
* [POSTDeleteUserPermissionsBoundary](#postdeleteuserpermissionsboundary) - <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
* [POSTDeleteUserPolicy](#postdeleteuserpolicy) - <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDeleteVirtualMFADevice](#postdeletevirtualmfadevice) - <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
* [POSTDetachGroupPolicy](#postdetachgrouppolicy) - <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDetachRolePolicy](#postdetachrolepolicy) - <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTDetachUserPolicy](#postdetachuserpolicy) - <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTEnableMFADevice](#postenablemfadevice) - Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
* [POSTGenerateCredentialReport](#postgeneratecredentialreport) -  Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [POSTGenerateOrganizationsAccessReport](#postgenerateorganizationsaccessreport) - <p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>
* [POSTGenerateServiceLastAccessedDetails](#postgenerateservicelastaccesseddetails) - <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetAccessKeyLastUsed](#postgetaccesskeylastused) - Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.
* [POSTGetAccountAuthorizationDetails](#postgetaccountauthorizationdetails) - <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTGetAccountPasswordPolicy](#postgetaccountpasswordpolicy) - Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.
* [POSTGetAccountSummary](#postgetaccountsummary) - <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetContextKeysForCustomPolicy](#postgetcontextkeysforcustompolicy) - <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
* [POSTGetContextKeysForPrincipalPolicy](#postgetcontextkeysforprincipalpolicy) - <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
* [POSTGetCredentialReport](#postgetcredentialreport) -  Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.
* [POSTGetGroup](#postgetgroup) -  Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
* [POSTGetGroupPolicy](#postgetgrouppolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetInstanceProfile](#postgetinstanceprofile) -  Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.
* [POSTGetLoginProfile](#postgetloginprofile) - <p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>
* [POSTGetOpenIDConnectProvider](#postgetopenidconnectprovider) - Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
* [POSTGetOrganizationsAccessReport](#postgetorganizationsaccessreport) - <p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
* [POSTGetPolicy](#postgetpolicy) - <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetPolicyVersion](#postgetpolicyversion) - <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetRole](#postgetrole) - <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
* [POSTGetRolePolicy](#postgetrolepolicy) - <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>
* [POSTGetSAMLProvider](#postgetsamlprovider) - <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [POSTGetSSHPublicKey](#postgetsshpublickey) - <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [POSTGetServerCertificate](#postgetservercertificate) - <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>
* [POSTGetServiceLastAccessedDetails](#postgetservicelastaccesseddetails) - <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>
* [POSTGetServiceLastAccessedDetailsWithEntities](#postgetservicelastaccesseddetailswithentities) - <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
* [POSTGetServiceLinkedRoleDeletionStatus](#postgetservicelinkedroledeletionstatus) - Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.
* [POSTGetUser](#postgetuser) - <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>
* [POSTGetUserPolicy](#postgetuserpolicy) - <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTListAccessKeys](#postlistaccesskeys) - <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>
* [POSTListAccountAliases](#postlistaccountaliases) - Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.
* [POSTListAttachedGroupPolicies](#postlistattachedgrouppolicies) - <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [POSTListAttachedRolePolicies](#postlistattachedrolepolicies) - <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
* [POSTListAttachedUserPolicies](#postlistattacheduserpolicies) - <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
* [POSTListEntitiesForPolicy](#postlistentitiesforpolicy) - <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListGroupPolicies](#postlistgrouppolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
* [POSTListGroups](#postlistgroups) - <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListGroupsForUser](#postlistgroupsforuser) - <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListInstanceProfileTags](#postlistinstanceprofiletags) - Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTListInstanceProfiles](#postlistinstanceprofiles) - <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListInstanceProfilesForRole](#postlistinstanceprofilesforrole) - <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListMFADeviceTags](#postlistmfadevicetags) - Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTListMFADevices](#postlistmfadevices) - <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListOpenIDConnectProviderTags](#postlistopenidconnectprovidertags) - <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [POSTListOpenIDConnectProviders](#postlistopenidconnectproviders) - <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>
* [POSTListPolicies](#postlistpolicies) - <p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>
* [POSTListPoliciesGrantingServiceAccess](#postlistpoliciesgrantingserviceaccess) - <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
* [POSTListPolicyTags](#postlistpolicytags) - Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTListPolicyVersions](#postlistpolicyversions) - <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTListRolePolicies](#postlistrolepolicies) - <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
* [POSTListRoleTags](#postlistroletags) - Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTListRoles](#postlistroles) - <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListSAMLProviderTags](#postlistsamlprovidertags) - <p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>
* [POSTListSAMLProviders](#postlistsamlproviders) - <p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>
* [POSTListSSHPublicKeys](#postlistsshpublickeys) - <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListServerCertificateTags](#postlistservercertificatetags) - <p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTListServerCertificates](#postlistservercertificates) - <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>
* [POSTListServiceSpecificCredentials](#postlistservicespecificcredentials) - Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.
* [POSTListSigningCertificates](#postlistsigningcertificates) - <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [POSTListUserPolicies](#postlistuserpolicies) - <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
* [POSTListUserTags](#postlistusertags) - Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTListUsers](#postlistusers) - <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTListVirtualMFADevices](#postlistvirtualmfadevices) - <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
* [POSTPutGroupPolicy](#postputgrouppolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTPutRolePermissionsBoundary](#postputrolepermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [POSTPutRolePolicy](#postputrolepolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTPutUserPermissionsBoundary](#postputuserpermissionsboundary) - <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>
* [POSTPutUserPolicy](#postputuserpolicy) - <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTRemoveClientIDFromOpenIDConnectProvider](#postremoveclientidfromopenidconnectprovider) - <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
* [POSTRemoveRoleFromInstanceProfile](#postremoverolefrominstanceprofile) - <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>
* [POSTRemoveUserFromGroup](#postremoveuserfromgroup) - Removes the specified user from the specified group.
* [POSTResetServiceSpecificCredential](#postresetservicespecificcredential) - Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
* [POSTResyncMFADevice](#postresyncmfadevice) - <p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>
* [POSTSetDefaultPolicyVersion](#postsetdefaultpolicyversion) - <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>
* [POSTSetSecurityTokenServicePreferences](#postsetsecuritytokenservicepreferences) - <p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
* [POSTSimulateCustomPolicy](#postsimulatecustompolicy) - <p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>
* [POSTSimulatePrincipalPolicy](#postsimulateprincipalpolicy) - <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>
* [POSTTagInstanceProfile](#posttaginstanceprofile) - <p>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagMFADevice](#posttagmfadevice) - <p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagOpenIDConnectProvider](#posttagopenidconnectprovider) - <p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagPolicy](#posttagpolicy) - <p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagRole](#posttagrole) - <p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>
* [POSTTagSAMLProvider](#posttagsamlprovider) - <p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagServerCertificate](#posttagservercertificate) - <p>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>
* [POSTTagUser](#posttaguser) - <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>
* [POSTUntagInstanceProfile](#postuntaginstanceprofile) - Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagMFADevice](#postuntagmfadevice) - Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagOpenIDConnectProvider](#postuntagopenidconnectprovider) - Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagPolicy](#postuntagpolicy) - Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagRole](#postuntagrole) - Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagSAMLProvider](#postuntagsamlprovider) - Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUntagServerCertificate](#postuntagservercertificate) - <p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTUntagUser](#postuntaguser) - Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
* [POSTUpdateAccessKey](#postupdateaccesskey) - <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>
* [POSTUpdateAccountPasswordPolicy](#postupdateaccountpasswordpolicy) - <p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>
* [POSTUpdateAssumeRolePolicy](#postupdateassumerolepolicy) - Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.
* [POSTUpdateGroup](#postupdategroup) - <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>
* [POSTUpdateLoginProfile](#postupdateloginprofile) - <p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>
* [POSTUpdateOpenIDConnectProviderThumbprint](#postupdateopenidconnectproviderthumbprint) - <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
* [POSTUpdateRole](#postupdaterole) - Updates the description or maximum session duration setting of a role.
* [POSTUpdateRoleDescription](#postupdateroledescription) - <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
* [POSTUpdateSAMLProvider](#postupdatesamlprovider) - <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
* [POSTUpdateSSHPublicKey](#postupdatesshpublickey) - <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [POSTUpdateServerCertificate](#postupdateservercertificate) - <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTUpdateServiceSpecificCredential](#postupdateservicespecificcredential) - Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.
* [POSTUpdateSigningCertificate](#postupdatesigningcertificate) - <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>
* [POSTUpdateUser](#postupdateuser) - <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>
* [POSTUploadSSHPublicKey](#postuploadsshpublickey) - <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
* [POSTUploadServerCertificate](#postuploadservercertificate) - <p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query requests</a> in the <i>IAM User Guide</i>.</p> </note>
* [POSTUploadSigningCertificate](#postuploadsigningcertificate) - <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

## GETAddClientIDToOpenIDConnectProvider

<p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>

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
    res, err := s.SDK.GETAddClientIDToOpenIDConnectProvider(ctx, operations.GETAddClientIDToOpenIDConnectProviderRequest{
        Action: operations.GETAddClientIDToOpenIDConnectProviderActionEnumAddClientIDToOpenIDConnectProvider,
        ClientID: "error",
        OpenIDConnectProviderArn: "deserunt",
        Version: operations.GETAddClientIDToOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.GETAddRoleToInstanceProfile(ctx, operations.GETAddRoleToInstanceProfileRequest{
        Action: operations.GETAddRoleToInstanceProfileActionEnumAddRoleToInstanceProfile,
        InstanceProfileName: "suscipit",
        RoleName: "molestiae",
        Version: operations.GETAddRoleToInstanceProfileVersionEnumTwoThousandAndTen0508,
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAddUserToGroup

Adds the specified user to the specified group.

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
    res, err := s.SDK.GETAddUserToGroup(ctx, operations.GETAddUserToGroupRequest{
        Action: operations.GETAddUserToGroupActionEnumAddUserToGroup,
        GroupName: "temporibus",
        UserName: "Antonetta64",
        Version: operations.GETAddUserToGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETAttachGroupPolicy(ctx, operations.GETAttachGroupPolicyRequest{
        Action: operations.GETAttachGroupPolicyActionEnumAttachGroupPolicy,
        GroupName: "at",
        PolicyArn: "maiores",
        Version: operations.GETAttachGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETAttachRolePolicy(ctx, operations.GETAttachRolePolicyRequest{
        Action: operations.GETAttachRolePolicyActionEnumAttachRolePolicy,
        PolicyArn: "dicta",
        RoleName: "nam",
        Version: operations.GETAttachRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETAttachUserPolicy(ctx, operations.GETAttachUserPolicyRequest{
        Action: operations.GETAttachUserPolicyActionEnumAttachUserPolicy,
        PolicyArn: "beatae",
        UserName: "Haskell18",
        Version: operations.GETAttachUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETChangePassword(ctx, operations.GETChangePasswordRequest{
        Action: operations.GETChangePasswordActionEnumChangePassword,
        NewPassword: "ad",
        OldPassword: "natus",
        Version: operations.GETChangePasswordVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

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
    res, err := s.SDK.GETCreateAccessKey(ctx, operations.GETCreateAccessKeyRequest{
        Action: operations.GETCreateAccessKeyActionEnumCreateAccessKey,
        UserName: sdk.String("Marisa_Kirlin"),
        Version: operations.GETCreateAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETCreateAccountAlias(ctx, operations.GETCreateAccountAliasRequest{
        AccountAlias: "mollitia",
        Action: operations.GETCreateAccountAliasActionEnumCreateAccountAlias,
        Version: operations.GETCreateAccountAliasVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETCreateGroup(ctx, operations.GETCreateGroupRequest{
        Action: operations.GETCreateGroupActionEnumCreateGroup,
        GroupName: "omnis",
        Path: sdk.String("nemo"),
        Version: operations.GETCreateGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETCreateLoginProfile(ctx, operations.GETCreateLoginProfileRequest{
        Action: operations.GETCreateLoginProfileActionEnumCreateLoginProfile,
        Password: "architecto",
        PasswordResetRequired: sdk.Bool(false),
        UserName: "Macy.Durgan",
        Version: operations.GETCreateLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETCreatePolicyVersion(ctx, operations.GETCreatePolicyVersionRequest{
        Action: operations.GETCreatePolicyVersionActionEnumCreatePolicyVersion,
        PolicyArn: "velit",
        PolicyDocument: "error",
        SetAsDefault: sdk.Bool(false),
        Version: operations.GETCreatePolicyVersionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

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
    res, err := s.SDK.GETCreateServiceLinkedRole(ctx, operations.GETCreateServiceLinkedRoleRequest{
        AWSServiceName: "quo",
        Action: operations.GETCreateServiceLinkedRoleActionEnumCreateServiceLinkedRole,
        CustomSuffix: sdk.String("sequi"),
        Description: sdk.String("tenetur"),
        Version: operations.GETCreateServiceLinkedRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETCreateServiceSpecificCredential(ctx, operations.GETCreateServiceSpecificCredentialRequest{
        Action: operations.GETCreateServiceSpecificCredentialActionEnumCreateServiceSpecificCredential,
        ServiceName: "laborum",
        UserName: "Austyn_Witting46",
        Version: operations.GETCreateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeactivateMFADevice(ctx, operations.GETDeactivateMFADeviceRequest{
        Action: operations.GETDeactivateMFADeviceActionEnumDeactivateMfaDevice,
        SerialNumber: "doloremque",
        UserName: "Iliana.Grady35",
        Version: operations.GETDeactivateMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.GETDeleteAccessKey(ctx, operations.GETDeleteAccessKeyRequest{
        AccessKeyID: "repudiandae",
        Action: operations.GETDeleteAccessKeyActionEnumDeleteAccessKey,
        UserName: sdk.String("Anissa_Emmerich56"),
        Version: operations.GETDeleteAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETDeleteAccountAlias(ctx, operations.GETDeleteAccountAliasRequest{
        AccountAlias: "sint",
        Action: operations.GETDeleteAccountAliasActionEnumDeleteAccountAlias,
        Version: operations.GETDeleteAccountAliasVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
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

## GETDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

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
    res, err := s.SDK.GETDeleteAccountPasswordPolicy(ctx, operations.GETDeleteAccountPasswordPolicyRequest{
        Action: operations.GETDeleteAccountPasswordPolicyActionEnumDeleteAccountPasswordPolicy,
        Version: operations.GETDeleteAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
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

## GETDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

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
    res, err := s.SDK.GETDeleteGroup(ctx, operations.GETDeleteGroupRequest{
        Action: operations.GETDeleteGroupActionEnumDeleteGroup,
        GroupName: "aliquid",
        Version: operations.GETDeleteGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteGroupPolicy(ctx, operations.GETDeleteGroupPolicyRequest{
        Action: operations.GETDeleteGroupPolicyActionEnumDeleteGroupPolicy,
        GroupName: "fugit",
        PolicyName: "dolorum",
        Version: operations.GETDeleteGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.GETDeleteInstanceProfile(ctx, operations.GETDeleteInstanceProfileRequest{
        Action: operations.GETDeleteInstanceProfileActionEnumDeleteInstanceProfile,
        InstanceProfileName: "non",
        Version: operations.GETDeleteInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

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
    res, err := s.SDK.GETDeleteLoginProfile(ctx, operations.GETDeleteLoginProfileRequest{
        Action: operations.GETDeleteLoginProfileActionEnumDeleteLoginProfile,
        UserName: "Damien_Toy44",
        Version: operations.GETDeleteLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

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
    res, err := s.SDK.GETDeleteOpenIDConnectProvider(ctx, operations.GETDeleteOpenIDConnectProviderRequest{
        Action: operations.GETDeleteOpenIDConnectProviderActionEnumDeleteOpenIDConnectProvider,
        OpenIDConnectProviderArn: "facere",
        Version: operations.GETDeleteOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeletePolicy(ctx, operations.GETDeletePolicyRequest{
        Action: operations.GETDeletePolicyActionEnumDeletePolicy,
        PolicyArn: "accusamus",
        Version: operations.GETDeletePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeletePolicyVersion(ctx, operations.GETDeletePolicyVersionRequest{
        Action: operations.GETDeletePolicyVersionActionEnumDeletePolicyVersion,
        PolicyArn: "sapiente",
        Version: operations.GETDeletePolicyVersionVersionEnumTwoThousandAndTen0508,
        VersionID: "amet",
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

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
    res, err := s.SDK.GETDeleteRole(ctx, operations.GETDeleteRoleRequest{
        Action: operations.GETDeleteRoleActionEnumDeleteRole,
        RoleName: "nihil",
        Version: operations.GETDeleteRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

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
    res, err := s.SDK.GETDeleteRolePermissionsBoundary(ctx, operations.GETDeleteRolePermissionsBoundaryRequest{
        Action: operations.GETDeleteRolePermissionsBoundaryActionEnumDeleteRolePermissionsBoundary,
        RoleName: "nobis",
        Version: operations.GETDeleteRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteRolePolicy(ctx, operations.GETDeleteRolePolicyRequest{
        Action: operations.GETDeleteRolePolicyActionEnumDeleteRolePolicy,
        PolicyName: "ullam",
        RoleName: "provident",
        Version: operations.GETDeleteRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.GETDeleteSAMLProvider(ctx, operations.GETDeleteSAMLProviderRequest{
        Action: operations.GETDeleteSAMLProviderActionEnumDeleteSamlProvider,
        SAMLProviderArn: "eum",
        Version: operations.GETDeleteSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteSSHPublicKey(ctx, operations.GETDeleteSSHPublicKeyRequest{
        Action: operations.GETDeleteSSHPublicKeyActionEnumDeleteSSHPublicKey,
        SSHPublicKeyID: "debitis",
        UserName: "Devante_Schoen",
        Version: operations.GETDeleteSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

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
    res, err := s.SDK.GETDeleteServerCertificate(ctx, operations.GETDeleteServerCertificateRequest{
        Action: operations.GETDeleteServerCertificateActionEnumDeleteServerCertificate,
        ServerCertificateName: "repellat",
        Version: operations.GETDeleteServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteServiceLinkedRole(ctx, operations.GETDeleteServiceLinkedRoleRequest{
        Action: operations.GETDeleteServiceLinkedRoleActionEnumDeleteServiceLinkedRole,
        RoleName: "natus",
        Version: operations.GETDeleteServiceLinkedRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

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
    res, err := s.SDK.GETDeleteServiceSpecificCredential(ctx, operations.GETDeleteServiceSpecificCredentialRequest{
        Action: operations.GETDeleteServiceSpecificCredentialActionEnumDeleteServiceSpecificCredential,
        ServiceSpecificCredentialID: "excepturi",
        UserName: sdk.String("Brook6"),
        Version: operations.GETDeleteServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

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
    res, err := s.SDK.GETDeleteSigningCertificate(ctx, operations.GETDeleteSigningCertificateRequest{
        Action: operations.GETDeleteSigningCertificateActionEnumDeleteSigningCertificate,
        CertificateID: "pariatur",
        UserName: sdk.String("Freddie85"),
        Version: operations.GETDeleteSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

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
    res, err := s.SDK.GETDeleteUser(ctx, operations.GETDeleteUserRequest{
        Action: operations.GETDeleteUserActionEnumDeleteUser,
        UserName: "Celestine.Hayes",
        Version: operations.GETDeleteUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

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
    res, err := s.SDK.GETDeleteUserPermissionsBoundary(ctx, operations.GETDeleteUserPermissionsBoundaryRequest{
        Action: operations.GETDeleteUserPermissionsBoundaryActionEnumDeleteUserPermissionsBoundary,
        UserName: "Jalyn.Fadel94",
        Version: operations.GETDeleteUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDeleteUserPolicy(ctx, operations.GETDeleteUserPolicyRequest{
        Action: operations.GETDeleteUserPolicyActionEnumDeleteUserPolicy,
        PolicyName: "blanditiis",
        UserName: "Lillie_Beatty",
        Version: operations.GETDeleteUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

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
    res, err := s.SDK.GETDeleteVirtualMFADevice(ctx, operations.GETDeleteVirtualMFADeviceRequest{
        Action: operations.GETDeleteVirtualMFADeviceActionEnumDeleteVirtualMfaDevice,
        SerialNumber: "pariatur",
        Version: operations.GETDeleteVirtualMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDetachGroupPolicy(ctx, operations.GETDetachGroupPolicyRequest{
        Action: operations.GETDetachGroupPolicyActionEnumDetachGroupPolicy,
        GroupName: "dolorem",
        PolicyArn: "dolorem",
        Version: operations.GETDetachGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDetachRolePolicy(ctx, operations.GETDetachRolePolicyRequest{
        Action: operations.GETDetachRolePolicyActionEnumDetachRolePolicy,
        PolicyArn: "dignissimos",
        RoleName: "reiciendis",
        Version: operations.GETDetachRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETDetachUserPolicy(ctx, operations.GETDetachUserPolicyRequest{
        Action: operations.GETDetachUserPolicyActionEnumDetachUserPolicy,
        PolicyArn: "odio",
        UserName: "Elvie_Thompson37",
        Version: operations.GETDetachUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

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
    res, err := s.SDK.GETEnableMFADevice(ctx, operations.GETEnableMFADeviceRequest{
        Action: operations.GETEnableMFADeviceActionEnumEnableMfaDevice,
        AuthenticationCode1: "dolorum",
        AuthenticationCode2: "iusto",
        SerialNumber: "voluptate",
        UserName: "Marianna_Leuschke",
        Version: operations.GETEnableMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETGenerateCredentialReport(ctx, operations.GETGenerateCredentialReportRequest{
        Action: operations.GETGenerateCredentialReportActionEnumGenerateCredentialReport,
        Version: operations.GETGenerateCredentialReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGenerateOrganizationsAccessReport(ctx, operations.GETGenerateOrganizationsAccessReportRequest{
        Action: operations.GETGenerateOrganizationsAccessReportActionEnumGenerateOrganizationsAccessReport,
        EntityPath: "saepe",
        OrganizationsPolicyID: sdk.String("suscipit"),
        Version: operations.GETGenerateOrganizationsAccessReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGenerateServiceLastAccessedDetails(ctx, operations.GETGenerateServiceLastAccessedDetailsRequest{
        Action: operations.GETGenerateServiceLastAccessedDetailsActionEnumGenerateServiceLastAccessedDetails,
        Arn: "at",
        Granularity: operations.GETGenerateServiceLastAccessedDetailsGranularityEnumServiceLevel.ToPointer(),
        Version: operations.GETGenerateServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

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
    res, err := s.SDK.GETGETAccessKeyLastUsed(ctx, operations.GETGETAccessKeyLastUsedRequest{
        AccessKeyID: "esse",
        Action: operations.GETGETAccessKeyLastUsedActionEnumGetAccessKeyLastUsed,
        Version: operations.GETGETAccessKeyLastUsedVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETGETAccountAuthorizationDetails(ctx, operations.GETGETAccountAuthorizationDetailsRequest{
        Action: operations.GETGETAccountAuthorizationDetailsActionEnumGetAccountAuthorizationDetails,
        Filter: []shared.EntityTypeEnum{
            shared.EntityTypeEnumRole,
            shared.EntityTypeEnumRole,
            shared.EntityTypeEnumRole,
            shared.EntityTypeEnumAwsManagedPolicy,
        },
        Marker: sdk.String("totam"),
        MaxItems: sdk.Int64(471752),
        Version: operations.GETGETAccountAuthorizationDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

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
    res, err := s.SDK.GETGETAccountPasswordPolicy(ctx, operations.GETGETAccountPasswordPolicyRequest{
        Action: operations.GETGETAccountPasswordPolicyActionEnumGetAccountPasswordPolicy,
        Version: operations.GETGETAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETAccountSummary(ctx, operations.GETGETAccountSummaryRequest{
        Action: operations.GETGETAccountSummaryActionEnumGetAccountSummary,
        Version: operations.GETGETAccountSummaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

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
    res, err := s.SDK.GETGETContextKeysForCustomPolicy(ctx, operations.GETGETContextKeysForCustomPolicyRequest{
        Action: operations.GETGETContextKeysForCustomPolicyActionEnumGetContextKeysForCustomPolicy,
        PolicyInputList: []string{
            "distinctio",
        },
        Version: operations.GETGETContextKeysForCustomPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

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
    res, err := s.SDK.GETGETContextKeysForPrincipalPolicy(ctx, operations.GETGETContextKeysForPrincipalPolicyRequest{
        Action: operations.GETGETContextKeysForPrincipalPolicyActionEnumGetContextKeysForPrincipalPolicy,
        PolicyInputList: []string{
            "magni",
        },
        PolicySourceArn: "odio",
        Version: operations.GETGETContextKeysForPrincipalPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETGETCredentialReport(ctx, operations.GETGETCredentialReportRequest{
        Action: operations.GETGETCredentialReportActionEnumGetCredentialReport,
        Version: operations.GETGETCredentialReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

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
    res, err := s.SDK.GETGETGroup(ctx, operations.GETGETGroupRequest{
        Action: operations.GETGETGroupActionEnumGetGroup,
        GroupName: "tempore",
        Marker: sdk.String("cupiditate"),
        MaxItems: sdk.Int64(45614),
        Version: operations.GETGETGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETGroupPolicy(ctx, operations.GETGETGroupPolicyRequest{
        Action: operations.GETGETGroupPolicyActionEnumGetGroupPolicy,
        GroupName: "quae",
        PolicyName: "aut",
        Version: operations.GETGETGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETGETInstanceProfile(ctx, operations.GETGETInstanceProfileRequest{
        Action: operations.GETGETInstanceProfileActionEnumGetInstanceProfile,
        InstanceProfileName: "ut",
        Version: operations.GETGETInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

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
    res, err := s.SDK.GETGETLoginProfile(ctx, operations.GETGETLoginProfileRequest{
        Action: operations.GETGETLoginProfileActionEnumGetLoginProfile,
        UserName: "Wilbert_Schaefer33",
        Version: operations.GETGETLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

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
    res, err := s.SDK.GETGETOpenIDConnectProvider(ctx, operations.GETGETOpenIDConnectProviderRequest{
        Action: operations.GETGETOpenIDConnectProviderActionEnumGetOpenIDConnectProvider,
        OpenIDConnectProviderArn: "hic",
        Version: operations.GETGETOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

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
    res, err := s.SDK.GETGETOrganizationsAccessReport(ctx, operations.GETGETOrganizationsAccessReportRequest{
        Action: operations.GETGETOrganizationsAccessReportActionEnumGetOrganizationsAccessReport,
        JobID: "dolore",
        Marker: sdk.String("quibusdam"),
        MaxItems: sdk.Int64(848944),
        SortKey: operations.GETGETOrganizationsAccessReportSortKeyEnumServiceNamespaceAscending.ToPointer(),
        Version: operations.GETGETOrganizationsAccessReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETPolicy(ctx, operations.GETGETPolicyRequest{
        Action: operations.GETGETPolicyActionEnumGetPolicy,
        PolicyArn: "porro",
        Version: operations.GETGETPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETPolicyVersion(ctx, operations.GETGETPolicyVersionRequest{
        Action: operations.GETGETPolicyVersionActionEnumGetPolicyVersion,
        PolicyArn: "tempora",
        Version: operations.GETGETPolicyVersionVersionEnumTwoThousandAndTen0508,
        VersionID: "ipsam",
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

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
    res, err := s.SDK.GETGETRole(ctx, operations.GETGETRoleRequest{
        Action: operations.GETGETRoleActionEnumGetRole,
        RoleName: "laudantium",
        Version: operations.GETGETRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

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
    res, err := s.SDK.GETGETRolePolicy(ctx, operations.GETGETRolePolicyRequest{
        Action: operations.GETGETRolePolicyActionEnumGetRolePolicy,
        PolicyName: "voluptatibus",
        RoleName: "nostrum",
        Version: operations.GETGETRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.GETGETSAMLProvider(ctx, operations.GETGETSAMLProviderRequest{
        Action: operations.GETGETSAMLProviderActionEnumGetSamlProvider,
        SAMLProviderArn: "aliquid",
        Version: operations.GETGETSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.GETGETSSHPublicKey(ctx, operations.GETGETSSHPublicKeyRequest{
        Action: operations.GETGETSSHPublicKeyActionEnumGetSSHPublicKey,
        Encoding: operations.GETGETSSHPublicKeyEncodingEnumSSH,
        SSHPublicKeyID: "eaque",
        UserName: "Veda1",
        Version: operations.GETGETSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

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
    res, err := s.SDK.GETGETServerCertificate(ctx, operations.GETGETServerCertificateRequest{
        Action: operations.GETGETServerCertificateActionEnumGetServerCertificate,
        ServerCertificateName: "et",
        Version: operations.GETGETServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETServiceLastAccessedDetails(ctx, operations.GETGETServiceLastAccessedDetailsRequest{
        Action: operations.GETGETServiceLastAccessedDetailsActionEnumGetServiceLastAccessedDetails,
        JobID: "quas",
        Marker: sdk.String("assumenda"),
        MaxItems: sdk.Int64(860552),
        Version: operations.GETGETServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

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
    res, err := s.SDK.GETGETServiceLastAccessedDetailsWithEntities(ctx, operations.GETGETServiceLastAccessedDetailsWithEntitiesRequest{
        Action: operations.GETGETServiceLastAccessedDetailsWithEntitiesActionEnumGetServiceLastAccessedDetailsWithEntities,
        JobID: "ipsa",
        Marker: sdk.String("molestiae"),
        MaxItems: sdk.Int64(301598),
        ServiceNamespace: "odio",
        Version: operations.GETGETServiceLastAccessedDetailsWithEntitiesVersionEnumTwoThousandAndTen0508,
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

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

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
    res, err := s.SDK.GETGETServiceLinkedRoleDeletionStatus(ctx, operations.GETGETServiceLinkedRoleDeletionStatusRequest{
        Action: operations.GETGETServiceLinkedRoleDeletionStatusActionEnumGetServiceLinkedRoleDeletionStatus,
        DeletionTaskID: "fugiat",
        Version: operations.GETGETServiceLinkedRoleDeletionStatusVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

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
    res, err := s.SDK.GETGETUser(ctx, operations.GETGETUserRequest{
        Action: operations.GETGETUserActionEnumGetUser,
        UserName: sdk.String("Asa_Bednar"),
        Version: operations.GETGETUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETGETUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETGETUserPolicy(ctx, operations.GETGETUserPolicyRequest{
        Action: operations.GETGETUserPolicyActionEnumGetUserPolicy,
        PolicyName: "voluptas",
        UserName: "Ansley27",
        Version: operations.GETGETUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

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
    res, err := s.SDK.GETListAccessKeys(ctx, operations.GETListAccessKeysRequest{
        Action: operations.GETListAccessKeysActionEnumListAccessKeys,
        Marker: sdk.String("aperiam"),
        MaxItems: sdk.Int64(715179),
        UserName: sdk.String("Polly46"),
        Version: operations.GETListAccessKeysVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListAccountAliases(ctx, operations.GETListAccountAliasesRequest{
        Action: operations.GETListAccountAliasesActionEnumListAccountAliases,
        Marker: sdk.String("dolores"),
        MaxItems: sdk.Int64(645570),
        Version: operations.GETListAccountAliasesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListAttachedGroupPolicies(ctx, operations.GETListAttachedGroupPoliciesRequest{
        Action: operations.GETListAttachedGroupPoliciesActionEnumListAttachedGroupPolicies,
        GroupName: "deleniti",
        Marker: sdk.String("fugit"),
        MaxItems: sdk.Int64(681393),
        PathPrefix: sdk.String("mollitia"),
        Version: operations.GETListAttachedGroupPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListAttachedRolePolicies(ctx, operations.GETListAttachedRolePoliciesRequest{
        Action: operations.GETListAttachedRolePoliciesActionEnumListAttachedRolePolicies,
        Marker: sdk.String("consequuntur"),
        MaxItems: sdk.Int64(187131),
        PathPrefix: sdk.String("explicabo"),
        RoleName: "saepe",
        Version: operations.GETListAttachedRolePoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListAttachedUserPolicies(ctx, operations.GETListAttachedUserPoliciesRequest{
        Action: operations.GETListAttachedUserPoliciesActionEnumListAttachedUserPolicies,
        Marker: sdk.String("esse"),
        MaxItems: sdk.Int64(800379),
        PathPrefix: sdk.String("nam"),
        UserName: "Serena90",
        Version: operations.GETListAttachedUserPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListEntitiesForPolicy(ctx, operations.GETListEntitiesForPolicyRequest{
        Action: operations.GETListEntitiesForPolicyActionEnumListEntitiesForPolicy,
        EntityFilter: operations.GETListEntitiesForPolicyEntityFilterEnumLocalManagedPolicy.ToPointer(),
        Marker: sdk.String("sit"),
        MaxItems: sdk.Int64(636061),
        PathPrefix: sdk.String("tempore"),
        PolicyArn: "adipisci",
        PolicyUsageFilter: operations.GETListEntitiesForPolicyPolicyUsageFilterEnumPermissionsBoundary.ToPointer(),
        Version: operations.GETListEntitiesForPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListGroupPolicies(ctx, operations.GETListGroupPoliciesRequest{
        Action: operations.GETListGroupPoliciesActionEnumListGroupPolicies,
        GroupName: "blanditiis",
        Marker: sdk.String("provident"),
        MaxItems: sdk.Int64(953722),
        Version: operations.GETListGroupPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListGroups(ctx, operations.GETListGroupsRequest{
        Action: operations.GETListGroupsActionEnumListGroups,
        Marker: sdk.String("pariatur"),
        MaxItems: sdk.Int64(820767),
        PathPrefix: sdk.String("quia"),
        Version: operations.GETListGroupsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListGroupsForUser(ctx, operations.GETListGroupsForUserRequest{
        Action: operations.GETListGroupsForUserActionEnumListGroupsForUser,
        Marker: sdk.String("culpa"),
        MaxItems: sdk.Int64(398434),
        UserName: "Ursula.Berge44",
        Version: operations.GETListGroupsForUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListInstanceProfileTags(ctx, operations.GETListInstanceProfileTagsRequest{
        Action: operations.GETListInstanceProfileTagsActionEnumListInstanceProfileTags,
        InstanceProfileName: "dicta",
        Marker: sdk.String("ullam"),
        MaxItems: sdk.Int64(443879),
        Version: operations.GETListInstanceProfileTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListInstanceProfiles(ctx, operations.GETListInstanceProfilesRequest{
        Action: operations.GETListInstanceProfilesActionEnumListInstanceProfiles,
        Marker: sdk.String("deleniti"),
        MaxItems: sdk.Int64(929292),
        PathPrefix: sdk.String("dolorum"),
        Version: operations.GETListInstanceProfilesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListInstanceProfilesForRole(ctx, operations.GETListInstanceProfilesForRoleRequest{
        Action: operations.GETListInstanceProfilesForRoleActionEnumListInstanceProfilesForRole,
        Marker: sdk.String("ipsa"),
        MaxItems: sdk.Int64(326701),
        RoleName: "veritatis",
        Version: operations.GETListInstanceProfilesForRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListMFADeviceTags(ctx, operations.GETListMFADeviceTagsRequest{
        Action: operations.GETListMFADeviceTagsActionEnumListMfaDeviceTags,
        Marker: sdk.String("laudantium"),
        MaxItems: sdk.Int64(428796),
        SerialNumber: "mollitia",
        Version: operations.GETListMFADeviceTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListMFADevices(ctx, operations.GETListMFADevicesRequest{
        Action: operations.GETListMFADevicesActionEnumListMfaDevices,
        Marker: sdk.String("impedit"),
        MaxItems: sdk.Int64(131055),
        UserName: sdk.String("Garrison.Anderson"),
        Version: operations.GETListMFADevicesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETListOpenIDConnectProviderTags(ctx, operations.GETListOpenIDConnectProviderTagsRequest{
        Action: operations.GETListOpenIDConnectProviderTagsActionEnumListOpenIDConnectProviderTags,
        Marker: sdk.String("ea"),
        MaxItems: sdk.Int64(310067),
        OpenIDConnectProviderArn: "consequuntur",
        Version: operations.GETListOpenIDConnectProviderTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

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
    res, err := s.SDK.GETListOpenIDConnectProviders(ctx, operations.GETListOpenIDConnectProvidersRequest{
        Action: operations.GETListOpenIDConnectProvidersActionEnumListOpenIDConnectProviders,
        Version: operations.GETListOpenIDConnectProvidersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

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
    res, err := s.SDK.GETListPolicies(ctx, operations.GETListPoliciesRequest{
        Action: operations.GETListPoliciesActionEnumListPolicies,
        Marker: sdk.String("fuga"),
        MaxItems: sdk.Int64(662505),
        OnlyAttached: sdk.Bool(false),
        PathPrefix: sdk.String("suscipit"),
        PolicyUsageFilter: operations.GETListPoliciesPolicyUsageFilterEnumPermissionsPolicy.ToPointer(),
        Scope: operations.GETListPoliciesScopeEnumAws.ToPointer(),
        Version: operations.GETListPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

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
    res, err := s.SDK.GETListPoliciesGrantingServiceAccess(ctx, operations.GETListPoliciesGrantingServiceAccessRequest{
        Action: operations.GETListPoliciesGrantingServiceAccessActionEnumListPoliciesGrantingServiceAccess,
        Arn: "vel",
        Marker: sdk.String("labore"),
        ServiceNamespaces: []string{
            "facilis",
            "cum",
            "commodi",
            "in",
        },
        Version: operations.GETListPoliciesGrantingServiceAccessVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListPolicyTags(ctx, operations.GETListPolicyTagsRequest{
        Action: operations.GETListPolicyTagsActionEnumListPolicyTags,
        Marker: sdk.String("cum"),
        MaxItems: sdk.Int64(232627),
        PolicyArn: "in",
        Version: operations.GETListPolicyTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETListPolicyVersions(ctx, operations.GETListPolicyVersionsRequest{
        Action: operations.GETListPolicyVersionsActionEnumListPolicyVersions,
        Marker: sdk.String("quidem"),
        MaxItems: sdk.Int64(904949),
        PolicyArn: "necessitatibus",
        Version: operations.GETListPolicyVersionsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListRolePolicies(ctx, operations.GETListRolePoliciesRequest{
        Action: operations.GETListRolePoliciesActionEnumListRolePolicies,
        Marker: sdk.String("dignissimos"),
        MaxItems: sdk.Int64(950953),
        RoleName: "debitis",
        Version: operations.GETListRolePoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListRoleTags(ctx, operations.GETListRoleTagsRequest{
        Action: operations.GETListRoleTagsActionEnumListRoleTags,
        Marker: sdk.String("vitae"),
        MaxItems: sdk.Int64(881721),
        RoleName: "similique",
        Version: operations.GETListRoleTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListRoles(ctx, operations.GETListRolesRequest{
        Action: operations.GETListRolesActionEnumListRoles,
        Marker: sdk.String("dolorum"),
        MaxItems: sdk.Int64(237807),
        PathPrefix: sdk.String("minus"),
        Version: operations.GETListRolesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETListSAMLProviderTags(ctx, operations.GETListSAMLProviderTagsRequest{
        Action: operations.GETListSAMLProviderTagsActionEnumListSamlProviderTags,
        Marker: sdk.String("ullam"),
        MaxItems: sdk.Int64(237742),
        SAMLProviderArn: "cum",
        Version: operations.GETListSAMLProviderTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

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
    res, err := s.SDK.GETListSAMLProviders(ctx, operations.GETListSAMLProvidersRequest{
        Action: operations.GETListSAMLProvidersActionEnumListSamlProviders,
        Version: operations.GETListSAMLProvidersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListSSHPublicKeys(ctx, operations.GETListSSHPublicKeysRequest{
        Action: operations.GETListSSHPublicKeysActionEnumListSSHPublicKeys,
        Marker: sdk.String("reiciendis"),
        MaxItems: sdk.Int64(131852),
        UserName: sdk.String("Zane_Quigley"),
        Version: operations.GETListSSHPublicKeysVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETListServerCertificateTags(ctx, operations.GETListServerCertificateTagsRequest{
        Action: operations.GETListServerCertificateTagsActionEnumListServerCertificateTags,
        Marker: sdk.String("quidem"),
        MaxItems: sdk.Int64(131289),
        ServerCertificateName: "voluptas",
        Version: operations.GETListServerCertificateTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

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
    res, err := s.SDK.GETListServerCertificates(ctx, operations.GETListServerCertificatesRequest{
        Action: operations.GETListServerCertificatesActionEnumListServerCertificates,
        Marker: sdk.String("perferendis"),
        MaxItems: sdk.Int64(546885),
        PathPrefix: sdk.String("maiores"),
        Version: operations.GETListServerCertificatesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

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
    res, err := s.SDK.GETListServiceSpecificCredentials(ctx, operations.GETListServiceSpecificCredentialsRequest{
        Action: operations.GETListServiceSpecificCredentialsActionEnumListServiceSpecificCredentials,
        ServiceName: sdk.String("occaecati"),
        UserName: sdk.String("Katrina27"),
        Version: operations.GETListServiceSpecificCredentialsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.GETListSigningCertificates(ctx, operations.GETListSigningCertificatesRequest{
        Action: operations.GETListSigningCertificatesActionEnumListSigningCertificates,
        Marker: sdk.String("facilis"),
        MaxItems: sdk.Int64(310381),
        UserName: sdk.String("Drew_Hintz2"),
        Version: operations.GETListSigningCertificatesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

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
    res, err := s.SDK.GETListUserPolicies(ctx, operations.GETListUserPoliciesRequest{
        Action: operations.GETListUserPoliciesActionEnumListUserPolicies,
        Marker: sdk.String("magni"),
        MaxItems: sdk.Int64(48690),
        UserName: "Stephany44",
        Version: operations.GETListUserPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETListUserTags(ctx, operations.GETListUserTagsRequest{
        Action: operations.GETListUserTagsActionEnumListUserTags,
        Marker: sdk.String("dolorum"),
        MaxItems: sdk.Int64(530089),
        UserName: "Lilyan_Welch20",
        Version: operations.GETListUserTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListUsers(ctx, operations.GETListUsersRequest{
        Action: operations.GETListUsersActionEnumListUsers,
        Marker: sdk.String("atque"),
        MaxItems: sdk.Int64(148268),
        PathPrefix: sdk.String("ut"),
        Version: operations.GETListUsersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.GETListVirtualMFADevices(ctx, operations.GETListVirtualMFADevicesRequest{
        Action: operations.GETListVirtualMFADevicesActionEnumListVirtualMfaDevices,
        AssignmentStatus: operations.GETListVirtualMFADevicesAssignmentStatusEnumUnassigned.ToPointer(),
        Marker: sdk.String("sit"),
        MaxItems: sdk.Int64(530537),
        Version: operations.GETListVirtualMFADevicesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETPutGroupPolicy(ctx, operations.GETPutGroupPolicyRequest{
        Action: operations.GETPutGroupPolicyActionEnumPutGroupPolicy,
        GroupName: "sit",
        PolicyDocument: "vel",
        PolicyName: "nostrum",
        Version: operations.GETPutGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

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
    res, err := s.SDK.GETPutRolePermissionsBoundary(ctx, operations.GETPutRolePermissionsBoundaryRequest{
        Action: operations.GETPutRolePermissionsBoundaryActionEnumPutRolePermissionsBoundary,
        PermissionsBoundary: "dicta",
        RoleName: "architecto",
        Version: operations.GETPutRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETPutRolePolicy(ctx, operations.GETPutRolePolicyRequest{
        Action: operations.GETPutRolePolicyActionEnumPutRolePolicy,
        PolicyDocument: "laboriosam",
        PolicyName: "alias",
        RoleName: "amet",
        Version: operations.GETPutRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

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
    res, err := s.SDK.GETPutUserPermissionsBoundary(ctx, operations.GETPutUserPermissionsBoundaryRequest{
        Action: operations.GETPutUserPermissionsBoundaryActionEnumPutUserPermissionsBoundary,
        PermissionsBoundary: "voluptates",
        UserName: "Agustin.Orn81",
        Version: operations.GETPutUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETPutUserPolicy(ctx, operations.GETPutUserPolicyRequest{
        Action: operations.GETPutUserPolicyActionEnumPutUserPolicy,
        PolicyDocument: "quasi",
        PolicyName: "atque",
        UserName: "Ima.Zboncak",
        Version: operations.GETPutUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

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
    res, err := s.SDK.GETRemoveClientIDFromOpenIDConnectProvider(ctx, operations.GETRemoveClientIDFromOpenIDConnectProviderRequest{
        Action: operations.GETRemoveClientIDFromOpenIDConnectProviderActionEnumRemoveClientIDFromOpenIDConnectProvider,
        ClientID: "atque",
        OpenIDConnectProviderArn: "error",
        Version: operations.GETRemoveClientIDFromOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.GETRemoveRoleFromInstanceProfile(ctx, operations.GETRemoveRoleFromInstanceProfileRequest{
        Action: operations.GETRemoveRoleFromInstanceProfileActionEnumRemoveRoleFromInstanceProfile,
        InstanceProfileName: "maiores",
        RoleName: "corrupti",
        Version: operations.GETRemoveRoleFromInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRemoveUserFromGroup

Removes the specified user from the specified group.

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
    res, err := s.SDK.GETRemoveUserFromGroup(ctx, operations.GETRemoveUserFromGroupRequest{
        Action: operations.GETRemoveUserFromGroupActionEnumRemoveUserFromGroup,
        GroupName: "sunt",
        UserName: "Theresia.Parisian96",
        Version: operations.GETRemoveUserFromGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

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
    res, err := s.SDK.GETResetServiceSpecificCredential(ctx, operations.GETResetServiceSpecificCredentialRequest{
        Action: operations.GETResetServiceSpecificCredentialActionEnumResetServiceSpecificCredential,
        ServiceSpecificCredentialID: "laboriosam",
        UserName: sdk.String("Delbert.Wilderman"),
        Version: operations.GETResetServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETResyncMFADevice(ctx, operations.GETResyncMFADeviceRequest{
        Action: operations.GETResyncMFADeviceActionEnumResyncMfaDevice,
        AuthenticationCode1: "eveniet",
        AuthenticationCode2: "occaecati",
        SerialNumber: "consequuntur",
        UserName: "Buster.Olson",
        Version: operations.GETResyncMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETSetDefaultPolicyVersion(ctx, operations.GETSetDefaultPolicyVersionRequest{
        Action: operations.GETSetDefaultPolicyVersionActionEnumSetDefaultPolicyVersion,
        PolicyArn: "doloremque",
        Version: operations.GETSetDefaultPolicyVersionVersionEnumTwoThousandAndTen0508,
        VersionID: "iure",
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

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
    res, err := s.SDK.GETSetSecurityTokenServicePreferences(ctx, operations.GETSetSecurityTokenServicePreferencesRequest{
        Action: operations.GETSetSecurityTokenServicePreferencesActionEnumSetSecurityTokenServicePreferences,
        GlobalEndpointTokenVersion: operations.GETSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnumV1Token,
        Version: operations.GETSetSecurityTokenServicePreferencesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagInstanceProfile(ctx, operations.GETUntagInstanceProfileRequest{
        Action: operations.GETUntagInstanceProfileActionEnumUntagInstanceProfile,
        InstanceProfileName: "ad",
        TagKeys: []string{
            "alias",
            "corporis",
            "perspiciatis",
            "nihil",
        },
        Version: operations.GETUntagInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagMFADevice(ctx, operations.GETUntagMFADeviceRequest{
        Action: operations.GETUntagMFADeviceActionEnumUntagMfaDevice,
        SerialNumber: "minima",
        TagKeys: []string{
            "dolorum",
            "nesciunt",
        },
        Version: operations.GETUntagMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagOpenIDConnectProvider(ctx, operations.GETUntagOpenIDConnectProviderRequest{
        Action: operations.GETUntagOpenIDConnectProviderActionEnumUntagOpenIDConnectProvider,
        OpenIDConnectProviderArn: "culpa",
        TagKeys: []string{
            "debitis",
        },
        Version: operations.GETUntagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagPolicy(ctx, operations.GETUntagPolicyRequest{
        Action: operations.GETUntagPolicyActionEnumUntagPolicy,
        PolicyArn: "eum",
        TagKeys: []string{
            "provident",
            "aspernatur",
            "ullam",
            "quasi",
        },
        Version: operations.GETUntagPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagRole(ctx, operations.GETUntagRoleRequest{
        Action: operations.GETUntagRoleActionEnumUntagRole,
        RoleName: "aliquid",
        TagKeys: []string{
            "repellat",
        },
        Version: operations.GETUntagRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagSAMLProvider(ctx, operations.GETUntagSAMLProviderRequest{
        Action: operations.GETUntagSAMLProviderActionEnumUntagSamlProvider,
        SAMLProviderArn: "placeat",
        TagKeys: []string{
            "voluptatibus",
            "molestias",
        },
        Version: operations.GETUntagSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETUntagServerCertificate(ctx, operations.GETUntagServerCertificateRequest{
        Action: operations.GETUntagServerCertificateActionEnumUntagServerCertificate,
        ServerCertificateName: "inventore",
        TagKeys: []string{
            "cumque",
        },
        Version: operations.GETUntagServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.GETUntagUser(ctx, operations.GETUntagUserRequest{
        Action: operations.GETUntagUserActionEnumUntagUser,
        TagKeys: []string{
            "impedit",
            "eos",
            "sapiente",
            "eum",
        },
        UserName: "Bianka58",
        Version: operations.GETUntagUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETUpdateAccessKey(ctx, operations.GETUpdateAccessKeyRequest{
        AccessKeyID: "perspiciatis",
        Action: operations.GETUpdateAccessKeyActionEnumUpdateAccessKey,
        Status: operations.GETUpdateAccessKeyStatusEnumInactive,
        UserName: sdk.String("Sim.Jacobs21"),
        Version: operations.GETUpdateAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETUpdateAccountPasswordPolicy(ctx, operations.GETUpdateAccountPasswordPolicyRequest{
        Action: operations.GETUpdateAccountPasswordPolicyActionEnumUpdateAccountPasswordPolicy,
        AllowUsersToChangePassword: sdk.Bool(false),
        HardExpiry: sdk.Bool(false),
        MaxPasswordAge: sdk.Int64(8931),
        MinimumPasswordLength: sdk.Int64(97258),
        PasswordReusePrevention: sdk.Int64(90233),
        RequireLowercaseCharacters: sdk.Bool(false),
        RequireNumbers: sdk.Bool(false),
        RequireSymbols: sdk.Bool(false),
        RequireUppercaseCharacters: sdk.Bool(false),
        Version: operations.GETUpdateAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

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
    res, err := s.SDK.GETUpdateAssumeRolePolicy(ctx, operations.GETUpdateAssumeRolePolicyRequest{
        Action: operations.GETUpdateAssumeRolePolicyActionEnumUpdateAssumeRolePolicy,
        PolicyDocument: "doloribus",
        RoleName: "nulla",
        Version: operations.GETUpdateAssumeRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

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
    res, err := s.SDK.GETUpdateGroup(ctx, operations.GETUpdateGroupRequest{
        Action: operations.GETUpdateGroupActionEnumUpdateGroup,
        GroupName: "esse",
        NewGroupName: sdk.String("praesentium"),
        NewPath: sdk.String("maiores"),
        Version: operations.GETUpdateGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.GETUpdateLoginProfile(ctx, operations.GETUpdateLoginProfileRequest{
        Action: operations.GETUpdateLoginProfileActionEnumUpdateLoginProfile,
        Password: sdk.String("tempora"),
        PasswordResetRequired: sdk.Bool(false),
        UserName: "Jaden39",
        Version: operations.GETUpdateLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

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
    res, err := s.SDK.GETUpdateOpenIDConnectProviderThumbprint(ctx, operations.GETUpdateOpenIDConnectProviderThumbprintRequest{
        Action: operations.GETUpdateOpenIDConnectProviderThumbprintActionEnumUpdateOpenIDConnectProviderThumbprint,
        OpenIDConnectProviderArn: "officia",
        ThumbprintList: []string{
            "aliquid",
            "perferendis",
        },
        Version: operations.GETUpdateOpenIDConnectProviderThumbprintVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateRole

Updates the description or maximum session duration setting of a role.

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
    res, err := s.SDK.GETUpdateRole(ctx, operations.GETUpdateRoleRequest{
        Action: operations.GETUpdateRoleActionEnumUpdateRole,
        Description: sdk.String("voluptates"),
        MaxSessionDuration: sdk.Int64(653421),
        RoleName: "laborum",
        Version: operations.GETUpdateRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

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
    res, err := s.SDK.GETUpdateRoleDescription(ctx, operations.GETUpdateRoleDescriptionRequest{
        Action: operations.GETUpdateRoleDescriptionActionEnumUpdateRoleDescription,
        Description: "quo",
        RoleName: "ex",
        Version: operations.GETUpdateRoleDescriptionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.GETUpdateSAMLProvider(ctx, operations.GETUpdateSAMLProviderRequest{
        Action: operations.GETUpdateSAMLProviderActionEnumUpdateSamlProvider,
        SAMLMetadataDocument: "beatae",
        SAMLProviderArn: "voluptatum",
        Version: operations.GETUpdateSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.GETUpdateSSHPublicKey(ctx, operations.GETUpdateSSHPublicKeyRequest{
        Action: operations.GETUpdateSSHPublicKeyActionEnumUpdateSSHPublicKey,
        SSHPublicKeyID: "officiis",
        Status: operations.GETUpdateSSHPublicKeyStatusEnumActive,
        UserName: "Marisol.Stroman0",
        Version: operations.GETUpdateSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETUpdateServerCertificate(ctx, operations.GETUpdateServerCertificateRequest{
        Action: operations.GETUpdateServerCertificateActionEnumUpdateServerCertificate,
        NewPath: sdk.String("asperiores"),
        NewServerCertificateName: sdk.String("ratione"),
        ServerCertificateName: "ullam",
        Version: operations.GETUpdateServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

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
    res, err := s.SDK.GETUpdateServiceSpecificCredential(ctx, operations.GETUpdateServiceSpecificCredentialRequest{
        Action: operations.GETUpdateServiceSpecificCredentialActionEnumUpdateServiceSpecificCredential,
        ServiceSpecificCredentialID: "culpa",
        Status: operations.GETUpdateServiceSpecificCredentialStatusEnumActive,
        UserName: sdk.String("Elody.Bode"),
        Version: operations.GETUpdateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.GETUpdateSigningCertificate(ctx, operations.GETUpdateSigningCertificateRequest{
        Action: operations.GETUpdateSigningCertificateActionEnumUpdateSigningCertificate,
        CertificateID: "ab",
        Status: operations.GETUpdateSigningCertificateStatusEnumInactive,
        UserName: sdk.String("Anna.Fadel16"),
        Version: operations.GETUpdateSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("eveniet"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

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
    res, err := s.SDK.GETUpdateUser(ctx, operations.GETUpdateUserRequest{
        Action: operations.GETUpdateUserActionEnumUpdateUser,
        NewPath: sdk.String("sed"),
        NewUserName: sdk.String("veniam"),
        UserName: "Coby.Ratke",
        Version: operations.GETUpdateUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.GETUploadSSHPublicKey(ctx, operations.GETUploadSSHPublicKeyRequest{
        Action: operations.GETUploadSSHPublicKeyActionEnumUploadSSHPublicKey,
        SSHPublicKeyBody: "laboriosam",
        UserName: "Timmothy35",
        Version: operations.GETUploadSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.GETUploadSigningCertificate(ctx, operations.GETUploadSigningCertificateRequest{
        Action: operations.GETUploadSigningCertificateActionEnumUploadSigningCertificate,
        CertificateBody: "sequi",
        UserName: sdk.String("Xander_VonRueden36"),
        Version: operations.GETUploadSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddClientIDToOpenIDConnectProvider

<p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>

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
    res, err := s.SDK.POSTAddClientIDToOpenIDConnectProvider(ctx, operations.POSTAddClientIDToOpenIDConnectProviderRequest{
        Action: operations.POSTAddClientIDToOpenIDConnectProviderActionEnumAddClientIDToOpenIDConnectProvider,
        RequestBody: []byte("eius"),
        Version: operations.POSTAddClientIDToOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAddRoleToInstanceProfile

<p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this quota cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of Amazon Web Services because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this operation must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.POSTAddRoleToInstanceProfile(ctx, operations.POSTAddRoleToInstanceProfileRequest{
        Action: operations.POSTAddRoleToInstanceProfileActionEnumAddRoleToInstanceProfile,
        RequestBody: []byte("rem"),
        Version: operations.POSTAddRoleToInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAddUserToGroup

Adds the specified user to the specified group.

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
    res, err := s.SDK.POSTAddUserToGroup(ctx, operations.POSTAddUserToGroupRequest{
        Action: operations.POSTAddUserToGroupActionEnumAddUserToGroup,
        RequestBody: []byte("reiciendis"),
        Version: operations.POSTAddUserToGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAttachGroupPolicy

<p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTAttachGroupPolicy(ctx, operations.POSTAttachGroupPolicyRequest{
        Action: operations.POSTAttachGroupPolicyActionEnumAttachGroupPolicy,
        RequestBody: []byte("inventore"),
        Version: operations.POSTAttachGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAttachRolePolicy

<p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this operation to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTAttachRolePolicy(ctx, operations.POSTAttachRolePolicyRequest{
        Action: operations.POSTAttachRolePolicyActionEnumAttachRolePolicy,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTAttachRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAttachUserPolicy

<p>Attaches the specified managed policy to the specified user.</p> <p>You use this operation to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTAttachUserPolicy(ctx, operations.POSTAttachUserPolicyRequest{
        Action: operations.POSTAttachUserPolicyActionEnumAttachUserPolicy,
        RequestBody: []byte("totam"),
        Version: operations.POSTAttachUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTChangePassword

<p>Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the <b>My Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.</p> <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTChangePassword(ctx, operations.POSTChangePasswordRequest{
        Action: operations.POSTChangePasswordActionEnumChangePassword,
        RequestBody: []byte("alias"),
        Version: operations.POSTChangePasswordVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTCreateAccessKey

<p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials. This is true even if the Amazon Web Services account has no associated users.</p> <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>

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
    res, err := s.SDK.POSTCreateAccessKey(ctx, operations.POSTCreateAccessKeyRequest{
        Action: operations.POSTCreateAccessKeyActionEnumCreateAccessKey,
        RequestBody: []byte("esse"),
        Version: operations.POSTCreateAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateAccountAlias

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTCreateAccountAlias(ctx, operations.POSTCreateAccountAliasRequest{
        Action: operations.POSTCreateAccountAliasActionEnumCreateAccountAlias,
        RequestBody: []byte("hic"),
        Version: operations.POSTCreateAccountAliasVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTCreateGroup

<p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateGroup(ctx, operations.POSTCreateGroupRequest{
        Action: operations.POSTCreateGroupActionEnumCreateGroup,
        RequestBody: []byte("minus"),
        Version: operations.POSTCreateGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateInstanceProfile

<p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using roles for applications on Amazon EC2</a> in the <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateInstanceProfile(ctx, operations.POSTCreateInstanceProfileRequest{
        Action: operations.POSTCreateInstanceProfileActionEnumCreateInstanceProfile,
        RequestBody: []byte("magni"),
        Version: operations.POSTCreateInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateLoginProfile

<p>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to create a password for any IAM user. Use <a>ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateLoginProfile(ctx, operations.POSTCreateLoginProfileRequest{
        Action: operations.POSTCreateLoginProfileActionEnumCreateLoginProfile,
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTCreateLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateOpenIDConnectProvider

<p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider.</p> <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the <i>IAM User Guide</i>.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of tags that are attached to the specified IAM OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP you want to use to access Amazon Web Services.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>

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
    res, err := s.SDK.POSTCreateOpenIDConnectProvider(ctx, operations.POSTCreateOpenIDConnectProviderRequest{
        Action: operations.POSTCreateOpenIDConnectProviderActionEnumCreateOpenIDConnectProvider,
        RequestBody: []byte("vel"),
        Version: operations.POSTCreateOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreatePolicy

<p>Creates a new managed policy for your Amazon Web Services account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p> <p>As a best practice, you can validate your IAM policies. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreatePolicy(ctx, operations.POSTCreatePolicyRequest{
        Action: operations.POSTCreatePolicyActionEnumCreatePolicy,
        RequestBody: []byte("quia"),
        Version: operations.POSTCreatePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreatePolicyVersion

<p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreatePolicyVersion(ctx, operations.POSTCreatePolicyVersionRequest{
        Action: operations.POSTCreatePolicyVersionActionEnumCreatePolicyVersion,
        RequestBody: []byte("beatae"),
        Version: operations.POSTCreatePolicyVersionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateRole

Creates a new role for your Amazon Web Services account. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM roles</a>. For information about quotas for role names and the number of roles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTCreateRole(ctx, operations.POSTCreateRoleRequest{
        Action: operations.POSTCreateRoleActionEnumCreateRole,
        RequestBody: []byte("dicta"),
        Version: operations.POSTCreateRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateSAMLProvider

<p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateSAMLProvider(ctx, operations.POSTCreateSAMLProviderRequest{
        Action: operations.POSTCreateSAMLProviderActionEnumCreateSamlProvider,
        RequestBody: []byte("velit"),
        Version: operations.POSTCreateSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateServiceLinkedRole

<p>Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your Amazon Web Services resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the Amazon Web Services service that depends on this role.</p>

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
    res, err := s.SDK.POSTCreateServiceLinkedRole(ctx, operations.POSTCreateServiceLinkedRoleRequest{
        Action: operations.POSTCreateServiceLinkedRoleActionEnumCreateServiceLinkedRole,
        RequestBody: []byte("officia"),
        Version: operations.POSTCreateServiceLinkedRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateServiceSpecificCredential

<p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>You can create service-specific credentials for CodeCommit and Amazon Keyspaces (for Apache Cassandra).</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with CodeCommit: Git credentials, SSH keys, and Amazon Web Services access keys</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateServiceSpecificCredential(ctx, operations.POSTCreateServiceSpecificCredentialRequest{
        Action: operations.POSTCreateServiceSpecificCredentialActionEnumCreateServiceSpecificCredential,
        RequestBody: []byte("expedita"),
        Version: operations.POSTCreateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateUser

<p>Creates a new IAM user for your Amazon Web Services account.</p> <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTCreateUser(ctx, operations.POSTCreateUserRequest{
        Action: operations.POSTCreateUserActionEnumCreateUser,
        RequestBody: []byte("impedit"),
        Version: operations.POSTCreateUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateVirtualMFADevice

<p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your Amazon Web Services access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>

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
    res, err := s.SDK.POSTCreateVirtualMFADevice(ctx, operations.POSTCreateVirtualMFADeviceRequest{
        Action: operations.POSTCreateVirtualMFADeviceActionEnumCreateVirtualMfaDevice,
        RequestBody: []byte("vero"),
        Version: operations.POSTCreateVirtualMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeactivateMFADevice

<p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual multi-factor authentication (MFA) device</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeactivateMFADevice(ctx, operations.POSTDeactivateMFADeviceRequest{
        Action: operations.POSTDeactivateMFADeviceActionEnumDeactivateMfaDevice,
        RequestBody: []byte("ex"),
        Version: operations.POSTDeactivateMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteAccessKey

<p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.POSTDeleteAccessKey(ctx, operations.POSTDeleteAccessKeyRequest{
        Action: operations.POSTDeleteAccessKeyActionEnumDeleteAccessKey,
        RequestBody: []byte("alias"),
        Version: operations.POSTDeleteAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteAccountAlias

 Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTDeleteAccountAlias(ctx, operations.POSTDeleteAccountAliasRequest{
        Action: operations.POSTDeleteAccountAliasActionEnumDeleteAccountAlias,
        RequestBody: []byte("itaque"),
        Version: operations.POSTDeleteAccountAliasVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteAccountPasswordPolicy

Deletes the password policy for the Amazon Web Services account. There are no parameters.

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
    res, err := s.SDK.POSTDeleteAccountPasswordPolicy(ctx, operations.POSTDeleteAccountPasswordPolicyRequest{
        Action: operations.POSTDeleteAccountPasswordPolicyActionEnumDeleteAccountPasswordPolicy,
        Version: operations.POSTDeleteAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteGroup

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

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
    res, err := s.SDK.POSTDeleteGroup(ctx, operations.POSTDeleteGroupRequest{
        Action: operations.POSTDeleteGroupActionEnumDeleteGroup,
        RequestBody: []byte("fugiat"),
        Version: operations.POSTDeleteGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteGroupPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteGroupPolicy(ctx, operations.POSTDeleteGroupPolicyRequest{
        Action: operations.POSTDeleteGroupPolicyActionEnumDeleteGroupPolicy,
        RequestBody: []byte("inventore"),
        Version: operations.POSTDeleteGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteInstanceProfile

<p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.POSTDeleteInstanceProfile(ctx, operations.POSTDeleteInstanceProfileRequest{
        Action: operations.POSTDeleteInstanceProfileActionEnumDeleteInstanceProfile,
        RequestBody: []byte("esse"),
        Version: operations.POSTDeleteInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteLoginProfile

<p>Deletes the password for the specified IAM user, For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_admin-change-user.html">Managing passwords for IAM users</a>.</p> <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user. You can use <a>ChangePassword</a> to update, but not delete, your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <important> <p>Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>.</p> </important>

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
    res, err := s.SDK.POSTDeleteLoginProfile(ctx, operations.POSTDeleteLoginProfileRequest{
        Action: operations.POSTDeleteLoginProfileActionEnumDeleteLoginProfile,
        RequestBody: []byte("provident"),
        Version: operations.POSTDeleteLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteOpenIDConnectProvider

<p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>

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
    res, err := s.SDK.POSTDeleteOpenIDConnectProvider(ctx, operations.POSTDeleteOpenIDConnectProviderRequest{
        Action: operations.POSTDeleteOpenIDConnectProviderActionEnumDeleteOpenIDConnectProvider,
        RequestBody: []byte("rerum"),
        Version: operations.POSTDeleteOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeletePolicy

<p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this operation.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeletePolicy(ctx, operations.POSTDeletePolicyRequest{
        Action: operations.POSTDeletePolicyActionEnumDeletePolicy,
        RequestBody: []byte("quia"),
        Version: operations.POSTDeletePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeletePolicyVersion

<p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this operation. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeletePolicyVersion(ctx, operations.POSTDeletePolicyVersionRequest{
        Action: operations.POSTDeletePolicyVersionActionEnumDeletePolicyVersion,
        RequestBody: []byte("quibusdam"),
        Version: operations.POSTDeletePolicyVersionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteRole

<p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role programmatically, you must delete the items attached to the role manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the following attached items: </p> <ul> <li> <p>Inline policies (<a>DeleteRolePolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachRolePolicy</a>)</p> </li> <li> <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p> </li> <li> <p>Optional – Delete instance profile after detaching from role for resource clean up (<a>DeleteInstanceProfile</a>)</p> </li> </ul> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>

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
    res, err := s.SDK.POSTDeleteRole(ctx, operations.POSTDeleteRoleRequest{
        Action: operations.POSTDeleteRoleActionEnumDeleteRole,
        RequestBody: []byte("adipisci"),
        Version: operations.POSTDeleteRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteRolePermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM role. </p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies.</p> </important>

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
    res, err := s.SDK.POSTDeleteRolePermissionsBoundary(ctx, operations.POSTDeleteRolePermissionsBoundaryRequest{
        Action: operations.POSTDeleteRolePermissionsBoundaryActionEnumDeleteRolePermissionsBoundary,
        RequestBody: []byte("molestiae"),
        Version: operations.POSTDeleteRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteRolePolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteRolePolicy(ctx, operations.POSTDeleteRolePolicyRequest{
        Action: operations.POSTDeleteRolePolicyActionEnumDeleteRolePolicy,
        RequestBody: []byte("officia"),
        Version: operations.POSTDeleteRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteSAMLProvider

<p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.POSTDeleteSAMLProvider(ctx, operations.POSTDeleteSAMLProviderRequest{
        Action: operations.POSTDeleteSAMLProviderActionEnumDeleteSamlProvider,
        RequestBody: []byte("cupiditate"),
        Version: operations.POSTDeleteSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteSSHPublicKey

<p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteSSHPublicKey(ctx, operations.POSTDeleteSSHPublicKeyRequest{
        Action: operations.POSTDeleteSSHPublicKeyActionEnumDeleteSSHPublicKey,
        RequestBody: []byte("modi"),
        Version: operations.POSTDeleteSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteServerCertificate

<p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>

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
    res, err := s.SDK.POSTDeleteServerCertificate(ctx, operations.POSTDeleteServerCertificateRequest{
        Action: operations.POSTDeleteServerCertificateActionEnumDeleteServerCertificate,
        RequestBody: []byte("ratione"),
        Version: operations.POSTDeleteServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteServiceLinkedRole

<p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteServiceLinkedRole(ctx, operations.POSTDeleteServiceLinkedRoleRequest{
        Action: operations.POSTDeleteServiceLinkedRoleActionEnumDeleteServiceLinkedRole,
        RequestBody: []byte("fuga"),
        Version: operations.POSTDeleteServiceLinkedRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteServiceSpecificCredential

Deletes the specified service-specific credential.

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
    res, err := s.SDK.POSTDeleteServiceSpecificCredential(ctx, operations.POSTDeleteServiceSpecificCredentialRequest{
        Action: operations.POSTDeleteServiceSpecificCredentialActionEnumDeleteServiceSpecificCredential,
        RequestBody: []byte("repellat"),
        Version: operations.POSTDeleteServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteSigningCertificate

<p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated IAM users.</p>

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
    res, err := s.SDK.POSTDeleteSigningCertificate(ctx, operations.POSTDeleteSigningCertificateRequest{
        Action: operations.POSTDeleteSigningCertificateActionEnumDeleteSigningCertificate,
        RequestBody: []byte("ducimus"),
        Version: operations.POSTDeleteSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteUser

<p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM user</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>

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
    res, err := s.SDK.POSTDeleteUser(ctx, operations.POSTDeleteUserRequest{
        Action: operations.POSTDeleteUserActionEnumDeleteUser,
        RequestBody: []byte("itaque"),
        Version: operations.POSTDeleteUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteUserPermissionsBoundary

<p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>

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
    res, err := s.SDK.POSTDeleteUserPermissionsBoundary(ctx, operations.POSTDeleteUserPermissionsBoundaryRequest{
        Action: operations.POSTDeleteUserPermissionsBoundaryActionEnumDeleteUserPermissionsBoundary,
        RequestBody: []byte("quidem"),
        Version: operations.POSTDeleteUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteUserPolicy

<p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDeleteUserPolicy(ctx, operations.POSTDeleteUserPolicyRequest{
        Action: operations.POSTDeleteUserPolicyActionEnumDeleteUserPolicy,
        RequestBody: []byte("sequi"),
        Version: operations.POSTDeleteUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteVirtualMFADevice

<p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>

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
    res, err := s.SDK.POSTDeleteVirtualMFADevice(ctx, operations.POSTDeleteVirtualMFADeviceRequest{
        Action: operations.POSTDeleteVirtualMFADeviceActionEnumDeleteVirtualMfaDevice,
        RequestBody: []byte("nam"),
        Version: operations.POSTDeleteVirtualMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDetachGroupPolicy

<p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDetachGroupPolicy(ctx, operations.POSTDetachGroupPolicyRequest{
        Action: operations.POSTDetachGroupPolicyActionEnumDetachGroupPolicy,
        RequestBody: []byte("veritatis"),
        Version: operations.POSTDetachGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDetachRolePolicy

<p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDetachRolePolicy(ctx, operations.POSTDetachRolePolicyRequest{
        Action: operations.POSTDetachRolePolicyActionEnumDetachRolePolicy,
        RequestBody: []byte("aliquam"),
        Version: operations.POSTDetachRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDetachUserPolicy

<p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use <a>DeleteUserPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTDetachUserPolicy(ctx, operations.POSTDetachUserPolicyRequest{
        Action: operations.POSTDetachUserPolicyActionEnumDetachUserPolicy,
        RequestBody: []byte("quas"),
        Version: operations.POSTDetachUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTEnableMFADevice

Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.

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
    res, err := s.SDK.POSTEnableMFADevice(ctx, operations.POSTEnableMFADeviceRequest{
        Action: operations.POSTEnableMFADeviceActionEnumEnableMfaDevice,
        RequestBody: []byte("iste"),
        Version: operations.POSTEnableMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTGenerateCredentialReport

 Generates a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTGenerateCredentialReport(ctx, operations.POSTGenerateCredentialReportRequest{
        Action: operations.POSTGenerateCredentialReportActionEnumGenerateCredentialReport,
        Version: operations.POSTGenerateCredentialReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGenerateOrganizationsAccessReport

<p>Generates a report for service last accessed data for Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your Organizations management account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access Amazon Web Services, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the management account, because the management account is not limited by SCPs.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the management account, because the management account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>management account</b> – When you specify the management account, the resulting report lists all Amazon Web Services services, because the management account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the management account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing policy scope by viewing user activity</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGenerateOrganizationsAccessReport(ctx, operations.POSTGenerateOrganizationsAccessReportRequest{
        Action: operations.POSTGenerateOrganizationsAccessReportActionEnumGenerateOrganizationsAccessReport,
        RequestBody: []byte("veniam"),
        Version: operations.POSTGenerateOrganizationsAccessReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGenerateServiceLastAccessedDetails

<p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity usually appears within four hours. IAM reports activity for at least the last 400 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an Amazon Web Services API, not just the successful ones. This includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every Amazon Web Services service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific Amazon Web Services service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGenerateServiceLastAccessedDetails(ctx, operations.POSTGenerateServiceLastAccessedDetailsRequest{
        Action: operations.POSTGenerateServiceLastAccessedDetailsActionEnumGenerateServiceLastAccessedDetails,
        RequestBody: []byte("magnam"),
        Version: operations.POSTGenerateServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetAccessKeyLastUsed

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

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
    res, err := s.SDK.POSTGetAccessKeyLastUsed(ctx, operations.POSTGetAccessKeyLastUsedRequest{
        Action: operations.POSTGetAccessKeyLastUsedActionEnumGetAccessKeyLastUsed,
        RequestBody: []byte("odit"),
        Version: operations.POSTGetAccessKeyLastUsedVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetAccountAuthorizationDetails

<p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services account, including their relationships to one another. Use this operation to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTGetAccountAuthorizationDetails(ctx, operations.POSTGetAccountAuthorizationDetailsRequest{
        Action: operations.POSTGetAccountAuthorizationDetailsActionEnumGetAccountAuthorizationDetails,
        Marker: sdk.String("nisi"),
        MaxItems: sdk.String("voluptatibus"),
        RequestBody: []byte("quaerat"),
        Version: operations.POSTGetAccountAuthorizationDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetAccountPasswordPolicy

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a>.

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
    res, err := s.SDK.POSTGetAccountPasswordPolicy(ctx, operations.POSTGetAccountPasswordPolicyRequest{
        Action: operations.POSTGetAccountPasswordPolicyActionEnumGetAccountPasswordPolicy,
        Version: operations.POSTGetAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetAccountSummary

<p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services account.</p> <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetAccountSummary(ctx, operations.POSTGetAccountSummaryRequest{
        Action: operations.POSTGetAccountSummaryActionEnumGetAccountSummary,
        Version: operations.POSTGetAccountSummaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetContextKeysForCustomPolicy

<p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>

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
    res, err := s.SDK.POSTGetContextKeysForCustomPolicy(ctx, operations.POSTGetContextKeysForCustomPolicyRequest{
        Action: operations.POSTGetContextKeysForCustomPolicyActionEnumGetContextKeysForCustomPolicy,
        RequestBody: []byte("iusto"),
        Version: operations.POSTGetContextKeysForCustomPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetContextKeysForPrincipalPolicy

<p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>

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
    res, err := s.SDK.POSTGetContextKeysForPrincipalPolicy(ctx, operations.POSTGetContextKeysForPrincipalPolicyRequest{
        Action: operations.POSTGetContextKeysForPrincipalPolicyActionEnumGetContextKeysForPrincipalPolicy,
        RequestBody: []byte("dolor"),
        Version: operations.POSTGetContextKeysForPrincipalPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetCredentialReport

 Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTGetCredentialReport(ctx, operations.POSTGetCredentialReportRequest{
        Action: operations.POSTGetCredentialReportActionEnumGetCredentialReport,
        Version: operations.POSTGetCredentialReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetGroup

 Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.

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
    res, err := s.SDK.POSTGetGroup(ctx, operations.POSTGetGroupRequest{
        Action: operations.POSTGetGroupActionEnumGetGroup,
        Marker: sdk.String("illo"),
        MaxItems: sdk.String("ab"),
        RequestBody: []byte("incidunt"),
        Version: operations.POSTGetGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetGroupPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetGroupPolicy(ctx, operations.POSTGetGroupPolicyRequest{
        Action: operations.POSTGetGroupPolicyActionEnumGetGroupPolicy,
        RequestBody: []byte("reprehenderit"),
        Version: operations.POSTGetGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetInstanceProfile

 Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTGetInstanceProfile(ctx, operations.POSTGetInstanceProfileRequest{
        Action: operations.POSTGetInstanceProfileActionEnumGetInstanceProfile,
        RequestBody: []byte("illo"),
        Version: operations.POSTGetInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetLoginProfile

<p>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p> <p>If you create an IAM user with access to the console, the <code>CreateDate</code> reflects the date you created the initial password for the user.</p> <p>If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</p>

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
    res, err := s.SDK.POSTGetLoginProfile(ctx, operations.POSTGetLoginProfileRequest{
        Action: operations.POSTGetLoginProfileActionEnumGetLoginProfile,
        RequestBody: []byte("consequatur"),
        Version: operations.POSTGetLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetOpenIDConnectProvider

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

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
    res, err := s.SDK.POSTGetOpenIDConnectProvider(ctx, operations.POSTGetOpenIDConnectProviderRequest{
        Action: operations.POSTGetOpenIDConnectProviderActionEnumGetOpenIDConnectProvider,
        RequestBody: []byte("rerum"),
        Version: operations.POSTGetOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetOrganizationsAccessReport

<p>Retrieves the service last accessed data report for Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the management account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root user, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>

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
    res, err := s.SDK.POSTGetOrganizationsAccessReport(ctx, operations.POSTGetOrganizationsAccessReportRequest{
        Action: operations.POSTGetOrganizationsAccessReportActionEnumGetOrganizationsAccessReport,
        RequestBody: []byte("commodi"),
        Version: operations.POSTGetOrganizationsAccessReportVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetPolicy

<p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetPolicy(ctx, operations.POSTGetPolicyRequest{
        Action: operations.POSTGetPolicyActionEnumGetPolicy,
        RequestBody: []byte("illum"),
        Version: operations.POSTGetPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetPolicyVersion

<p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This operation retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetPolicyVersion(ctx, operations.POSTGetPolicyVersionRequest{
        Action: operations.POSTGetPolicyVersionActionEnumGetPolicyVersion,
        RequestBody: []byte("doloremque"),
        Version: operations.POSTGetPolicyVersionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetRole

<p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>

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
    res, err := s.SDK.POSTGetRole(ctx, operations.POSTGetRoleRequest{
        Action: operations.POSTGetRoleActionEnumGetRole,
        RequestBody: []byte("repudiandae"),
        Version: operations.POSTGetRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetRolePolicy

<p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p>

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
    res, err := s.SDK.POSTGetRolePolicy(ctx, operations.POSTGetRolePolicyRequest{
        Action: operations.POSTGetRolePolicyActionEnumGetRolePolicy,
        RequestBody: []byte("sint"),
        Version: operations.POSTGetRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetSAMLProvider

<p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.POSTGetSAMLProvider(ctx, operations.POSTGetSAMLProviderRequest{
        Action: operations.POSTGetSAMLProviderActionEnumGetSamlProvider,
        RequestBody: []byte("sunt"),
        Version: operations.POSTGetSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetSSHPublicKey

<p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetSSHPublicKey(ctx, operations.POSTGetSSHPublicKeyRequest{
        Action: operations.POSTGetSSHPublicKeyActionEnumGetSSHPublicKey,
        RequestBody: []byte("minus"),
        Version: operations.POSTGetSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetServerCertificate

<p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p>

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
    res, err := s.SDK.POSTGetServerCertificate(ctx, operations.POSTGetServerCertificateRequest{
        Action: operations.POSTGetServerCertificateActionEnumGetServerCertificate,
        RequestBody: []byte("repellat"),
        Version: operations.POSTGetServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetServiceLastAccessedDetails

<p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of Amazon Web Services services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing permissions using service last accessed data</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetServiceLastAccessedDetails(ctx, operations.POSTGetServiceLastAccessedDetailsRequest{
        Action: operations.POSTGetServiceLastAccessedDetailsActionEnumGetServiceLastAccessedDetails,
        RequestBody: []byte("soluta"),
        Version: operations.POSTGetServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetServiceLastAccessedDetailsWithEntities

<p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>

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
    res, err := s.SDK.POSTGetServiceLastAccessedDetailsWithEntities(ctx, operations.POSTGetServiceLastAccessedDetailsWithEntitiesRequest{
        Action: operations.POSTGetServiceLastAccessedDetailsWithEntitiesActionEnumGetServiceLastAccessedDetailsWithEntities,
        RequestBody: []byte("itaque"),
        Version: operations.POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetServiceLinkedRoleDeletionStatus

Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

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
    res, err := s.SDK.POSTGetServiceLinkedRoleDeletionStatus(ctx, operations.POSTGetServiceLinkedRoleDeletionStatusRequest{
        Action: operations.POSTGetServiceLinkedRoleDeletionStatusActionEnumGetServiceLinkedRoleDeletionStatus,
        RequestBody: []byte("explicabo"),
        Version: operations.POSTGetServiceLinkedRoleDeletionStatusVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetUser

<p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID used to sign the request to this operation.</p>

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
    res, err := s.SDK.POSTGetUser(ctx, operations.POSTGetUserRequest{
        Action: operations.POSTGetUserActionEnumGetUser,
        RequestBody: []byte("deserunt"),
        Version: operations.POSTGetUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTGetUserPolicy

<p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this operation are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTGetUserPolicy(ctx, operations.POSTGetUserPolicyRequest{
        Action: operations.POSTGetUserPolicyActionEnumGetUserPolicy,
        RequestBody: []byte("repudiandae"),
        Version: operations.POSTGetUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAccessKeys

<p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible only during key and user creation.</p> </note>

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
    res, err := s.SDK.POSTListAccessKeys(ctx, operations.POSTListAccessKeysRequest{
        Action: operations.POSTListAccessKeysActionEnumListAccessKeys,
        Marker: sdk.String("deleniti"),
        MaxItems: sdk.String("enim"),
        RequestBody: []byte("voluptate"),
        Version: operations.POSTListAccessKeysVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAccountAliases

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListAccountAliases(ctx, operations.POSTListAccountAliasesRequest{
        Action: operations.POSTListAccountAliasesActionEnumListAccountAliases,
        Marker: sdk.String("nesciunt"),
        MaxItems: sdk.String("mollitia"),
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTListAccountAliasesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAttachedGroupPolicies

<p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use <a>ListGroupPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListAttachedGroupPolicies(ctx, operations.POSTListAttachedGroupPoliciesRequest{
        Action: operations.POSTListAttachedGroupPoliciesActionEnumListAttachedGroupPolicies,
        Marker: sdk.String("aut"),
        MaxItems: sdk.String("aut"),
        RequestBody: []byte("eveniet"),
        Version: operations.POSTListAttachedGroupPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAttachedRolePolicies

<p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use <a>ListRolePolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListAttachedRolePolicies(ctx, operations.POSTListAttachedRolePoliciesRequest{
        Action: operations.POSTListAttachedRolePoliciesActionEnumListAttachedRolePolicies,
        Marker: sdk.String("nesciunt"),
        MaxItems: sdk.String("quaerat"),
        RequestBody: []byte("itaque"),
        Version: operations.POSTListAttachedRolePoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListAttachedUserPolicies

<p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use <a>ListUserPolicies</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListAttachedUserPolicies(ctx, operations.POSTListAttachedUserPoliciesRequest{
        Action: operations.POSTListAttachedUserPoliciesActionEnumListAttachedUserPolicies,
        Marker: sdk.String("amet"),
        MaxItems: sdk.String("autem"),
        RequestBody: []byte("fuga"),
        Version: operations.POSTListAttachedUserPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListEntitiesForPolicy

<p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListEntitiesForPolicy(ctx, operations.POSTListEntitiesForPolicyRequest{
        Action: operations.POSTListEntitiesForPolicyActionEnumListEntitiesForPolicy,
        Marker: sdk.String("quae"),
        MaxItems: sdk.String("eaque"),
        RequestBody: []byte("saepe"),
        Version: operations.POSTListEntitiesForPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListGroupPolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListGroupPolicies(ctx, operations.POSTListGroupPoliciesRequest{
        Action: operations.POSTListGroupPoliciesActionEnumListGroupPolicies,
        Marker: sdk.String("eveniet"),
        MaxItems: sdk.String("hic"),
        RequestBody: []byte("voluptatem"),
        Version: operations.POSTListGroupPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListGroups

<p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListGroups(ctx, operations.POSTListGroupsRequest{
        Action: operations.POSTListGroupsActionEnumListGroups,
        Marker: sdk.String("aliquid"),
        MaxItems: sdk.String("modi"),
        RequestBody: []byte("optio"),
        Version: operations.POSTListGroupsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListGroupsForUser

<p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListGroupsForUser(ctx, operations.POSTListGroupsForUserRequest{
        Action: operations.POSTListGroupsForUserActionEnumListGroupsForUser,
        Marker: sdk.String("ea"),
        MaxItems: sdk.String("impedit"),
        RequestBody: []byte("ducimus"),
        Version: operations.POSTListGroupsForUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListInstanceProfileTags

Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListInstanceProfileTags(ctx, operations.POSTListInstanceProfileTagsRequest{
        Action: operations.POSTListInstanceProfileTagsActionEnumListInstanceProfileTags,
        RequestBody: []byte("accusamus"),
        Version: operations.POSTListInstanceProfileTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListInstanceProfiles

<p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListInstanceProfiles(ctx, operations.POSTListInstanceProfilesRequest{
        Action: operations.POSTListInstanceProfilesActionEnumListInstanceProfiles,
        Marker: sdk.String("quia"),
        MaxItems: sdk.String("ullam"),
        RequestBody: []byte("quisquam"),
        Version: operations.POSTListInstanceProfilesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListInstanceProfilesForRole

<p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListInstanceProfilesForRole(ctx, operations.POSTListInstanceProfilesForRoleRequest{
        Action: operations.POSTListInstanceProfilesForRoleActionEnumListInstanceProfilesForRole,
        Marker: sdk.String("enim"),
        MaxItems: sdk.String("optio"),
        RequestBody: []byte("rem"),
        Version: operations.POSTListInstanceProfilesForRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListMFADeviceTags

Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListMFADeviceTags(ctx, operations.POSTListMFADeviceTagsRequest{
        Action: operations.POSTListMFADeviceTagsActionEnumListMfaDeviceTags,
        RequestBody: []byte("ullam"),
        Version: operations.POSTListMFADeviceTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListMFADevices

<p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services access key ID signing the request for this operation.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListMFADevices(ctx, operations.POSTListMFADevicesRequest{
        Action: operations.POSTListMFADevicesActionEnumListMfaDevices,
        Marker: sdk.String("vero"),
        MaxItems: sdk.String("doloribus"),
        RequestBody: []byte("impedit"),
        Version: operations.POSTListMFADevicesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListOpenIDConnectProviderTags

<p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTListOpenIDConnectProviderTags(ctx, operations.POSTListOpenIDConnectProviderTagsRequest{
        Action: operations.POSTListOpenIDConnectProviderTagsActionEnumListOpenIDConnectProviderTags,
        RequestBody: []byte("esse"),
        Version: operations.POSTListOpenIDConnectProviderTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListOpenIDConnectProviders

<p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p> </note>

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
    res, err := s.SDK.POSTListOpenIDConnectProviders(ctx, operations.POSTListOpenIDConnectProvidersRequest{
        Action: operations.POSTListOpenIDConnectProvidersActionEnumListOpenIDConnectProviders,
        RequestBody: []byte("voluptas"),
        Version: operations.POSTListOpenIDConnectProvidersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListPolicies

<p>Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to <code>Local</code>. To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see <a>GetPolicy</a>.</p> </note>

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
    res, err := s.SDK.POSTListPolicies(ctx, operations.POSTListPoliciesRequest{
        Action: operations.POSTListPoliciesActionEnumListPolicies,
        Marker: sdk.String("maiores"),
        MaxItems: sdk.String("accusantium"),
        RequestBody: []byte("veniam"),
        Version: operations.POSTListPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListPoliciesGrantingServiceAccess

<p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>

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
    res, err := s.SDK.POSTListPoliciesGrantingServiceAccess(ctx, operations.POSTListPoliciesGrantingServiceAccessRequest{
        Action: operations.POSTListPoliciesGrantingServiceAccessActionEnumListPoliciesGrantingServiceAccess,
        RequestBody: []byte("est"),
        Version: operations.POSTListPoliciesGrantingServiceAccessVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListPolicyTags

Lists the tags that are attached to the specified IAM customer managed policy. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListPolicyTags(ctx, operations.POSTListPolicyTagsRequest{
        Action: operations.POSTListPolicyTagsActionEnumListPolicyTags,
        RequestBody: []byte("nemo"),
        Version: operations.POSTListPolicyTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListPolicyVersions

<p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTListPolicyVersions(ctx, operations.POSTListPolicyVersionsRequest{
        Action: operations.POSTListPolicyVersionsActionEnumListPolicyVersions,
        Marker: sdk.String("optio"),
        MaxItems: sdk.String("alias"),
        RequestBody: []byte("quidem"),
        Version: operations.POSTListPolicyVersionsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListRolePolicies

<p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListRolePolicies(ctx, operations.POSTListRolePoliciesRequest{
        Action: operations.POSTListRolePoliciesActionEnumListRolePolicies,
        Marker: sdk.String("sint"),
        MaxItems: sdk.String("ut"),
        RequestBody: []byte("numquam"),
        Version: operations.POSTListRolePoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListRoleTags

Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListRoleTags(ctx, operations.POSTListRoleTagsRequest{
        Action: operations.POSTListRoleTagsActionEnumListRoleTags,
        RequestBody: []byte("ab"),
        Version: operations.POSTListRoleTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListRoles

<p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a role, see <a>GetRole</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListRoles(ctx, operations.POSTListRolesRequest{
        Action: operations.POSTListRolesActionEnumListRoles,
        Marker: sdk.String("minima"),
        MaxItems: sdk.String("architecto"),
        RequestBody: []byte("qui"),
        Version: operations.POSTListRolesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListSAMLProviderTags

<p>Lists the tags that are attached to the specified Security Assertion Markup Language (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation</a>.</p> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTListSAMLProviderTags(ctx, operations.POSTListSAMLProviderTagsRequest{
        Action: operations.POSTListSAMLProviderTagsActionEnumListSamlProviderTags,
        RequestBody: []byte("expedita"),
        Version: operations.POSTListSAMLProviderTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListSAMLProviders

<p>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p> <important> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </important>

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
    res, err := s.SDK.POSTListSAMLProviders(ctx, operations.POSTListSAMLProvidersRequest{
        Action: operations.POSTListSAMLProvidersActionEnumListSamlProviders,
        RequestBody: []byte("deserunt"),
        Version: operations.POSTListSAMLProvidersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListSSHPublicKeys

<p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListSSHPublicKeys(ctx, operations.POSTListSSHPublicKeysRequest{
        Action: operations.POSTListSSHPublicKeysActionEnumListSSHPublicKeys,
        Marker: sdk.String("doloribus"),
        MaxItems: sdk.String("assumenda"),
        RequestBody: []byte("officiis"),
        Version: operations.POSTListSSHPublicKeysVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListServerCertificateTags

<p>Lists the tags that are attached to the specified IAM server certificate. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTListServerCertificateTags(ctx, operations.POSTListServerCertificateTagsRequest{
        Action: operations.POSTListServerCertificateTagsActionEnumListServerCertificateTags,
        RequestBody: []byte("dicta"),
        Version: operations.POSTListServerCertificateTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListServerCertificates

<p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see <a>GetServerCertificate</a>.</p> </note>

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
    res, err := s.SDK.POSTListServerCertificates(ctx, operations.POSTListServerCertificatesRequest{
        Action: operations.POSTListServerCertificatesActionEnumListServerCertificates,
        Marker: sdk.String("veritatis"),
        MaxItems: sdk.String("provident"),
        RequestBody: []byte("cumque"),
        Version: operations.POSTListServerCertificatesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListServiceSpecificCredentials

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a> in the CodeCommit User Guide.

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
    res, err := s.SDK.POSTListServiceSpecificCredentials(ctx, operations.POSTListServiceSpecificCredentialsRequest{
        Action: operations.POSTListServiceSpecificCredentialsActionEnumListServiceSpecificCredentials,
        RequestBody: []byte("dignissimos"),
        Version: operations.POSTListServiceSpecificCredentialsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListSigningCertificates

<p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request for this operation. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.POSTListSigningCertificates(ctx, operations.POSTListSigningCertificatesRequest{
        Action: operations.POSTListSigningCertificatesActionEnumListSigningCertificates,
        Marker: sdk.String("facilis"),
        MaxItems: sdk.String("quidem"),
        RequestBody: []byte("itaque"),
        Version: operations.POSTListSigningCertificatesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListUserPolicies

<p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>

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
    res, err := s.SDK.POSTListUserPolicies(ctx, operations.POSTListUserPoliciesRequest{
        Action: operations.POSTListUserPoliciesActionEnumListUserPolicies,
        Marker: sdk.String("libero"),
        MaxItems: sdk.String("nam"),
        RequestBody: []byte("incidunt"),
        Version: operations.POSTListUserPoliciesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListUserTags

Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTListUserTags(ctx, operations.POSTListUserTagsRequest{
        Action: operations.POSTListUserTagsActionEnumListUserTags,
        Marker: sdk.String("illum"),
        MaxItems: sdk.String("nemo"),
        RequestBody: []byte("illum"),
        Version: operations.POSTListUserTagsVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListUsers

<p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the Amazon Web Services account. If there are none, the operation returns an empty list.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a user, see <a>GetUser</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListUsers(ctx, operations.POSTListUsersRequest{
        Action: operations.POSTListUsersActionEnumListUsers,
        Marker: sdk.String("ad"),
        MaxItems: sdk.String("facere"),
        RequestBody: []byte("laborum"),
        Version: operations.POSTListUsersVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListVirtualMFADevices

<p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <note> <p>IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p> </note> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>

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
    res, err := s.SDK.POSTListVirtualMFADevices(ctx, operations.POSTListVirtualMFADevicesRequest{
        Action: operations.POSTListVirtualMFADevicesActionEnumListVirtualMfaDevices,
        Marker: sdk.String("deserunt"),
        MaxItems: sdk.String("molestias"),
        RequestBody: []byte("laborum"),
        Version: operations.POSTListVirtualMFADevicesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPutGroupPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTPutGroupPolicy(ctx, operations.POSTPutGroupPolicyRequest{
        Action: operations.POSTPutGroupPolicyActionEnumPutGroupPolicy,
        RequestBody: []byte("magnam"),
        Version: operations.POSTPutGroupPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTPutRolePermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role.</p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

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
    res, err := s.SDK.POSTPutRolePermissionsBoundary(ctx, operations.POSTPutRolePermissionsBoundaryRequest{
        Action: operations.POSTPutRolePermissionsBoundaryActionEnumPutRolePermissionsBoundary,
        RequestBody: []byte("error"),
        Version: operations.POSTPutRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTPutRolePolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTPutRolePolicy(ctx, operations.POSTPutRolePolicyRequest{
        Action: operations.POSTPutRolePolicyActionEnumPutRolePolicy,
        RequestBody: []byte("impedit"),
        Version: operations.POSTPutRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTPutUserPermissionsBoundary

<p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the IAM User Guide. </p> </important>

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
    res, err := s.SDK.POSTPutUserPermissionsBoundary(ctx, operations.POSTPutUserPermissionsBoundaryRequest{
        Action: operations.POSTPutUserPermissionsBoundaryActionEnumPutUserPermissionsBoundary,
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTPutUserPermissionsBoundaryVersionEnumTwoThousandAndTen0508,
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTPutUserPolicy

<p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about the maximum number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTPutUserPolicy(ctx, operations.POSTPutUserPolicyRequest{
        Action: operations.POSTPutUserPolicyActionEnumPutUserPolicy,
        RequestBody: []byte("quae"),
        Version: operations.POSTPutUserPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTRemoveClientIDFromOpenIDConnectProvider

<p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>

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
    res, err := s.SDK.POSTRemoveClientIDFromOpenIDConnectProvider(ctx, operations.POSTRemoveClientIDFromOpenIDConnectProviderRequest{
        Action: operations.POSTRemoveClientIDFromOpenIDConnectProviderActionEnumRemoveClientIDFromOpenIDConnectProvider,
        RequestBody: []byte("a"),
        Version: operations.POSTRemoveClientIDFromOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTRemoveRoleFromInstanceProfile

<p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance profiles</a>.</p>

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
    res, err := s.SDK.POSTRemoveRoleFromInstanceProfile(ctx, operations.POSTRemoveRoleFromInstanceProfileRequest{
        Action: operations.POSTRemoveRoleFromInstanceProfileActionEnumRemoveRoleFromInstanceProfile,
        RequestBody: []byte("suscipit"),
        Version: operations.POSTRemoveRoleFromInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTRemoveUserFromGroup

Removes the specified user from the specified group.

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
    res, err := s.SDK.POSTRemoveUserFromGroup(ctx, operations.POSTRemoveUserFromGroupRequest{
        Action: operations.POSTRemoveUserFromGroupActionEnumRemoveUserFromGroup,
        RequestBody: []byte("quasi"),
        Version: operations.POSTRemoveUserFromGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTResetServiceSpecificCredential

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

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
    res, err := s.SDK.POSTResetServiceSpecificCredential(ctx, operations.POSTResetServiceSpecificCredentialRequest{
        Action: operations.POSTResetServiceSpecificCredentialActionEnumResetServiceSpecificCredential,
        RequestBody: []byte("incidunt"),
        Version: operations.POSTResetServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTResyncMFADevice

<p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services servers.</p> <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA device</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTResyncMFADevice(ctx, operations.POSTResyncMFADeviceRequest{
        Action: operations.POSTResyncMFADeviceActionEnumResyncMfaDevice,
        RequestBody: []byte("accusantium"),
        Version: operations.POSTResyncMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTSetDefaultPolicyVersion

<p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTSetDefaultPolicyVersion(ctx, operations.POSTSetDefaultPolicyVersionRequest{
        Action: operations.POSTSetDefaultPolicyVersionActionEnumSetDefaultPolicyVersion,
        RequestBody: []byte("similique"),
        Version: operations.POSTSetDefaultPolicyVersionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTSetSecurityTokenServicePreferences

<p>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account.</p> <p>By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">Security Token Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>

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
    res, err := s.SDK.POSTSetSecurityTokenServicePreferences(ctx, operations.POSTSetSecurityTokenServicePreferencesRequest{
        Action: operations.POSTSetSecurityTokenServicePreferencesActionEnumSetSecurityTokenServicePreferences,
        RequestBody: []byte("nesciunt"),
        Version: operations.POSTSetSecurityTokenServicePreferencesVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTSimulateCustomPolicy

<p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTSimulateCustomPolicy(ctx, operations.POSTSimulateCustomPolicyRequest{
        Action: operations.POSTSimulateCustomPolicyActionEnumSimulateCustomPolicy,
        Marker: sdk.String("velit"),
        MaxItems: sdk.String("reiciendis"),
        RequestBody: []byte("amet"),
        Version: operations.POSTSimulateCustomPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTSimulatePrincipalPolicy

<p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p> <note> <p>The IAM policy simulator evaluates statements in the identity-based policy and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM policies with the IAM policy simulator </a>in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTSimulatePrincipalPolicy(ctx, operations.POSTSimulatePrincipalPolicyRequest{
        Action: operations.POSTSimulatePrincipalPolicyActionEnumSimulatePrincipalPolicy,
        Marker: sdk.String("asperiores"),
        MaxItems: sdk.String("a"),
        RequestBody: []byte("nobis"),
        Version: operations.POSTSimulatePrincipalPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTTagInstanceProfile

<p>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagInstanceProfile(ctx, operations.POSTTagInstanceProfileRequest{
        Action: operations.POSTTagInstanceProfileActionEnumTagInstanceProfile,
        RequestBody: []byte("tempore"),
        Version: operations.POSTTagInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagMFADevice

<p>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagMFADevice(ctx, operations.POSTTagMFADeviceRequest{
        Action: operations.POSTTagMFADeviceActionEnumTagMfaDevice,
        RequestBody: []byte("asperiores"),
        Version: operations.POSTTagMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagOpenIDConnectProvider

<p>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagOpenIDConnectProvider(ctx, operations.POSTTagOpenIDConnectProviderRequest{
        Action: operations.POSTTagOpenIDConnectProviderActionEnumTagOpenIDConnectProvider,
        RequestBody: []byte("itaque"),
        Version: operations.POSTTagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagPolicy

<p>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagPolicy(ctx, operations.POSTTagPolicyRequest{
        Action: operations.POSTTagPolicyActionEnumTagPolicy,
        RequestBody: []byte("saepe"),
        Version: operations.POSTTagPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagRole

<p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTTagRole(ctx, operations.POSTTagRoleRequest{
        Action: operations.POSTTagRoleActionEnumTagRole,
        RequestBody: []byte("eius"),
        Version: operations.POSTTagRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagSAMLProvider

<p>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based federation </a>. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagSAMLProvider(ctx, operations.POSTTagSAMLProviderRequest{
        Action: operations.POSTTagSAMLProviderActionEnumTagSamlProvider,
        RequestBody: []byte("reprehenderit"),
        Version: operations.POSTTagSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagServerCertificate

<p>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note>

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
    res, err := s.SDK.POSTTagServerCertificate(ctx, operations.POSTTagServerCertificateRequest{
        Action: operations.POSTTagServerCertificateActionEnumTagServerCertificate,
        RequestBody: []byte("modi"),
        Version: operations.POSTTagServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTTagUser

<p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which Amazon Web Services resources.</p> </li> </ul> <note> <ul> <li> <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTTagUser(ctx, operations.POSTTagUserRequest{
        Action: operations.POSTTagUserActionEnumTagUser,
        RequestBody: []byte("neque"),
        Version: operations.POSTTagUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagInstanceProfile

Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagInstanceProfile(ctx, operations.POSTUntagInstanceProfileRequest{
        Action: operations.POSTUntagInstanceProfileActionEnumUntagInstanceProfile,
        RequestBody: []byte("nihil"),
        Version: operations.POSTUntagInstanceProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagMFADevice

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagMFADevice(ctx, operations.POSTUntagMFADeviceRequest{
        Action: operations.POSTUntagMFADeviceActionEnumUntagMfaDevice,
        RequestBody: []byte("pariatur"),
        Version: operations.POSTUntagMFADeviceVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagOpenIDConnectProvider

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagOpenIDConnectProvider(ctx, operations.POSTUntagOpenIDConnectProviderRequest{
        Action: operations.POSTUntagOpenIDConnectProviderActionEnumUntagOpenIDConnectProvider,
        RequestBody: []byte("possimus"),
        Version: operations.POSTUntagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagPolicy

Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagPolicy(ctx, operations.POSTUntagPolicyRequest{
        Action: operations.POSTUntagPolicyActionEnumUntagPolicy,
        RequestBody: []byte("voluptatibus"),
        Version: operations.POSTUntagPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagRole

Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagRole(ctx, operations.POSTUntagRoleRequest{
        Action: operations.POSTUntagRoleActionEnumUntagRole,
        RequestBody: []byte("praesentium"),
        Version: operations.POSTUntagRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagSAMLProvider

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagSAMLProvider(ctx, operations.POSTUntagSAMLProviderRequest{
        Action: operations.POSTUntagSAMLProviderActionEnumUntagSamlProvider,
        RequestBody: []byte("doloremque"),
        Version: operations.POSTUntagSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagServerCertificate

<p>Removes the specified tags from the IAM server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.</p> <note> <p>For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTUntagServerCertificate(ctx, operations.POSTUntagServerCertificateRequest{
        Action: operations.POSTUntagServerCertificateActionEnumUntagServerCertificate,
        RequestBody: []byte("tempora"),
        Version: operations.POSTUntagServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUntagUser

Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.

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
    res, err := s.SDK.POSTUntagUser(ctx, operations.POSTUntagUserRequest{
        Action: operations.POSTUntagUserActionEnumUntagUser,
        RequestBody: []byte("minus"),
        Version: operations.POSTUntagUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateAccessKey

<p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is used, then <code>UserName</code> is required. If a long-term key is assigned to the user, then <code>UserName</code> is not required. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing keys and certificates</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTUpdateAccessKey(ctx, operations.POSTUpdateAccessKeyRequest{
        Action: operations.POSTUpdateAccessKeyActionEnumUpdateAccessKey,
        RequestBody: []byte("illo"),
        Version: operations.POSTUpdateAccessKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateAccountPasswordPolicy

<p>Updates the password policy settings for the Amazon Web Services account.</p> <note> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password policy</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTUpdateAccountPasswordPolicy(ctx, operations.POSTUpdateAccountPasswordPolicyRequest{
        Action: operations.POSTUpdateAccountPasswordPolicyActionEnumUpdateAccountPasswordPolicy,
        RequestBody: []byte("vel"),
        Version: operations.POSTUpdateAccountPasswordPolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateAssumeRolePolicy

Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to delegate permissions and federate identities</a>.

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
    res, err := s.SDK.POSTUpdateAssumeRolePolicy(ctx, operations.POSTUpdateAssumeRolePolicyRequest{
        Action: operations.POSTUpdateAssumeRolePolicyActionEnumUpdateAssumeRolePolicy,
        RequestBody: []byte("ad"),
        Version: operations.POSTUpdateAssumeRolePolicyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateGroup

<p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>. </p> </note>

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
    res, err := s.SDK.POSTUpdateGroup(ctx, operations.POSTUpdateGroupRequest{
        Action: operations.POSTUpdateGroupActionEnumUpdateGroup,
        RequestBody: []byte("laudantium"),
        Version: operations.POSTUpdateGroupVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateLoginProfile

<p>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the <b>Users</b> page in the IAM console to change the password for any IAM user. Use <a>ChangePassword</a> to change your own password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p> <p>For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the <i>IAM User Guide</i>.</p>

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
    res, err := s.SDK.POSTUpdateLoginProfile(ctx, operations.POSTUpdateLoginProfileRequest{
        Action: operations.POSTUpdateLoginProfileActionEnumUpdateLoginProfile,
        RequestBody: []byte("ducimus"),
        Version: operations.POSTUpdateLoginProfileVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateOpenIDConnectProviderThumbprint

<p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our library of trusted certificate authorities (CAs) instead of using a certificate thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these cases, your legacy thumbprint remains in your configuration, but is no longer used for validation.</p> </note> <note> <p>Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>

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
    res, err := s.SDK.POSTUpdateOpenIDConnectProviderThumbprint(ctx, operations.POSTUpdateOpenIDConnectProviderThumbprintRequest{
        Action: operations.POSTUpdateOpenIDConnectProviderThumbprintActionEnumUpdateOpenIDConnectProviderThumbprint,
        RequestBody: []byte("sit"),
        Version: operations.POSTUpdateOpenIDConnectProviderThumbprintVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateRole

Updates the description or maximum session duration setting of a role.

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
    res, err := s.SDK.POSTUpdateRole(ctx, operations.POSTUpdateRoleRequest{
        Action: operations.POSTUpdateRoleActionEnumUpdateRole,
        RequestBody: []byte("deserunt"),
        Version: operations.POSTUpdateRoleVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateRoleDescription

<p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>

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
    res, err := s.SDK.POSTUpdateRoleDescription(ctx, operations.POSTUpdateRoleDescriptionRequest{
        Action: operations.POSTUpdateRoleDescriptionActionEnumUpdateRoleDescription,
        RequestBody: []byte("aut"),
        Version: operations.POSTUpdateRoleDescriptionVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateSAMLProvider

<p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>

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
    res, err := s.SDK.POSTUpdateSAMLProvider(ctx, operations.POSTUpdateSAMLProviderRequest{
        Action: operations.POSTUpdateSAMLProviderActionEnumUpdateSamlProvider,
        RequestBody: []byte("voluptas"),
        Version: operations.POSTUpdateSAMLProviderVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUpdateSSHPublicKey

<p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.POSTUpdateSSHPublicKey(ctx, operations.POSTUpdateSSHPublicKeyRequest{
        Action: operations.POSTUpdateSSHPublicKeyActionEnumUpdateSSHPublicKey,
        RequestBody: []byte("quasi"),
        Version: operations.POSTUpdateSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateServerCertificate

<p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTUpdateServerCertificate(ctx, operations.POSTUpdateServerCertificateRequest{
        Action: operations.POSTUpdateServerCertificateActionEnumUpdateServerCertificate,
        RequestBody: []byte("delectus"),
        Version: operations.POSTUpdateServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateServiceSpecificCredential

Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

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
    res, err := s.SDK.POSTUpdateServiceSpecificCredential(ctx, operations.POSTUpdateServiceSpecificCredentialRequest{
        Action: operations.POSTUpdateServiceSpecificCredentialActionEnumUpdateServiceSpecificCredential,
        RequestBody: []byte("pariatur"),
        Version: operations.POSTUpdateServiceSpecificCredentialVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateSigningCertificate

<p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p>

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
    res, err := s.SDK.POSTUpdateSigningCertificate(ctx, operations.POSTUpdateSigningCertificateRequest{
        Action: operations.POSTUpdateSigningCertificateActionEnumUpdateSigningCertificate,
        RequestBody: []byte("excepturi"),
        Version: operations.POSTUpdateSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUpdateUser

<p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p> </note>

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
    res, err := s.SDK.POSTUpdateUser(ctx, operations.POSTUpdateUserRequest{
        Action: operations.POSTUpdateUserActionEnumUpdateUser,
        RequestBody: []byte("soluta"),
        Version: operations.POSTUpdateUserVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTUploadSSHPublicKey

<p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an CodeCommit repository. For more information about using SSH keys to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>

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
    res, err := s.SDK.POSTUploadSSHPublicKey(ctx, operations.POSTUploadSSHPublicKeyRequest{
        Action: operations.POSTUploadSSHPublicKeyActionEnumUploadSSHPublicKey,
        RequestBody: []byte("iusto"),
        Version: operations.POSTUploadSSHPublicKeyVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUploadServerCertificate

<p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTUploadServerCertificate(ctx, operations.POSTUploadServerCertificateRequest{
        Action: operations.POSTUploadServerCertificateActionEnumUploadServerCertificate,
        RequestBody: []byte("eum"),
        Version: operations.POSTUploadServerCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTUploadSigningCertificate

<p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>For information about when you would use an X.509 signing certificate, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Managing server certificates in IAM</a> in the <i>IAM User Guide</i>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API requests</a> in the <i>Amazon Web Services General Reference</i>. For general information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the <i>IAM User Guide</i>.</p> </note>

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
    res, err := s.SDK.POSTUploadSigningCertificate(ctx, operations.POSTUploadSigningCertificateRequest{
        Action: operations.POSTUploadSigningCertificateActionEnumUploadSigningCertificate,
        RequestBody: []byte("rerum"),
        Version: operations.POSTUploadSigningCertificateVersionEnumTwoThousandAndTen0508,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
