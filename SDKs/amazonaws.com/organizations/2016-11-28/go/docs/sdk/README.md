# SDK

## Overview

<p>Organizations is a web service that enables you to consolidate your multiple Amazon Web Services accounts into an <i>organization</i> and centrally manage your accounts and their resources.</p> <p>This guide provides descriptions of the Organizations operations. For more information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p> <p> <b>Support and feedback for Organizations</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Endpoint to call When using the CLI or the Amazon Web Services SDK</b> </p> <p>For the current release of Organizations, specify the <code>us-east-1</code> region for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of China. If calling from one of the Amazon Web Services Regions in China, then specify <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters and commands:</p> <ul> <li> <p>Use the following parameter with each command to specify both the endpoint and its region:</p> <p> <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>--endpoint-url https://organizations.cn-northwest-1.amazonaws.com.cn</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> <li> <p>Use the default endpoint, but configure your default region with this command:</p> <p> <code>aws configure set default.region us-east-1</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>aws configure set default.region cn-northwest-1</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> <li> <p>Use the following parameter with each command to specify the endpoint:</p> <p> <code>--region us-east-1</code> <i>(from commercial Amazon Web Services Regions outside of China)</i> </p> <p>or</p> <p> <code>--region cn-northwest-1</code> <i>(from Amazon Web Services Regions in China)</i> </p> </li> </ul> <p> <b>Recording API Requests</b> </p> <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the Organizations service received, who made the request and when, and so on. For more about Organizations and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging Organizations Events with CloudTrail</a> in the <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/organizations/>
### Available Operations

* [AcceptHandshake](#accepthandshake) - <p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.</p> <p>You can only call this operation by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account.</p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the management account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an Amazon Web Services account to join your organization</a> in the <i>Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
* [AttachPolicy](#attachpolicy) - <p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the <i>Organizations User Guide</i> for information about each policy type:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>
* [CancelHandshake](#cancelhandshake) - <p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>.</p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
* [CloseAccount](#closeaccount) - <p>Closes an Amazon Web Services member account within an organization. You can close an account when <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features are enabled </a>. You can't close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CloseAccount</code> operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code> request to provide as a parameter to the <a>DescribeAccount</a> operation. </p> <p>While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. </p> </li> <li> <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <note> <ul> <li> <p>You can close only 10% of member accounts, between 10 and 200, within a rolling 30 day period. This quota is not bound by a calendar month, but starts when you close an account.</p> <p>After you reach this limit, you can close additional accounts in the Billing console. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html">Closing an account</a> in the Amazon Web Services Billing and Cost Management User Guide.</p> </li> <li> <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. </p> </li> <li> <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the <code>CloseAccount</code> request will close both accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html"> Closing an Amazon Web Services GovCloud (US) account</a> in the <i> Amazon Web Services GovCloud User Guide</i>.</p> </li> </ul> </note> <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide.</i> </p>
* [CreateAccount](#createaccount) - <p>Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization's management account.</p> <p>This operation can be called only from the organization's management account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
* [CreateGovCloudAccount](#creategovcloudaccount) - <p>This action is available if all of the following are true:</p> <ul> <li> <p>You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>Amazon Web Services GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region.</p> </li> <li> <p>You call this action from the management account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. </p> </li> </ul> <p>Organizations automatically creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide.</i> </p> <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an Amazon S3 bucket for CloudTrail log storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>. </p> </li> </ul> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud account exists.</p> <p>You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is <i>not</i> automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
* [CreateOrganization](#createorganization) - <p>Creates an Amazon Web Services organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can't use organization policies</p>
* [CreateOrganizationalUnit](#createorganizationalunit) - <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.</p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>Organizations User Guide.</i> </p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>
* [CreatePolicy](#createpolicy) - <p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>
* [DeclineHandshake](#declinehandshake) - <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
* [DeleteOrganization](#deleteorganization) - Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts.
* [DeleteOrganizationalUnit](#deleteorganizationalunit) - <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's management account.</p>
* [DeletePolicy](#deletepolicy) - <p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's management account.</p>
* [DeleteResourcePolicy](#deleteresourcepolicy) - <p>Deletes the resource policy from your organization.</p> <p>You can only call this operation from the organization's management account.</p>
* [DeregisterDelegatedAdministrator](#deregisterdelegatedadministrator) - <p>Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service.</p> <important> <p>Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts.</p> </important> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>
* [DescribeAccount](#describeaccount) - <p>Retrieves Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DescribeCreateAccountStatus](#describecreateaccountstatus) - <p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DescribeEffectivePolicy](#describeeffectivepolicy) - <p>Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account.</p> <p>This operation applies only to policy types <i>other</i> than service control policies (SCPs).</p> <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DescribeHandshake](#describehandshake) - <p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>
* [DescribeOrganization](#describeorganization) - <p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>
* [DescribeOrganizationalUnit](#describeorganizationalunit) - <p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DescribePolicy](#describepolicy) - <p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DescribeResourcePolicy](#describeresourcepolicy) - <p>Retrieves information about a resource policy.</p> <p>You can only call this operation from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [DetachPolicy](#detachpolicy) - <p>Detaches a policy from a target root, organizational unit (OU), or account.</p> <important> <p>If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate.</p> </important> <p>Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p> <p>This operation can be called only from the organization's management account.</p>
* [DisableAWSServiceAccess](#disableawsserviceaccess) - <p>Disables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you disable integration, the specified service no longer can create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations.</p> <important> <p>We <b> <i>strongly recommend</i> </b> that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. </p> <p>For information about how to disable trusted service access to your organization using the trusted service, see the <b>Learn more</b> link under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services services that you can use with Organizations</a>. on this page.</p> <p>If you disable access by using this command, it causes the following actions to occur:</p> <ul> <li> <p>The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. </p> </li> <li> <p>The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant.</p> </li> <li> <p>Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration.</p> </li> </ul> <p>Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. </p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts </p> <p>For more information about integrating other services with Organizations, including the list of services that work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>
* [DisablePolicyType](#disablepolicytype) - <p>Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
* [EnableAWSServiceAccess](#enableawsserviceaccess) - <p>Enables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service.</p> </important> <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>You can only call this operation from the organization's management account and only if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>
* [EnableAllFeatures](#enableallfeatures) - <p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the management account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The management account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's management account.</p>
* [EnablePolicyType](#enablepolicytype) - <p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
* [InviteAccountToOrganization](#inviteaccounttoorganization) - <p>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite Amazon Web Services accounts only from the same seller as the management account. For example, if your organization's management account was created by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you can invite only other AISPL accounts to your organization. You can't combine accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> </ul> </important> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>
* [LeaveOrganization](#leaveorganization) - <p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization.</p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn't appear.</p> <ul> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide.</i> </p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> <li> <p>A newly created account has a waiting period before it can be removed from its organization. If you get an error that indicates that a wait period is required, then try again in a few days.</p> </li> </ul> </important>
* [ListAWSServiceAccessForOrganization](#listawsserviceaccessfororganization) - <p>Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListAccounts](#listaccounts) - <p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListAccountsForParent](#listaccountsforparent) - <p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListChildren](#listchildren) - <p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListCreateAccountStatus](#listcreateaccountstatus) - <p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListDelegatedAdministrators](#listdelegatedadministrators) - <p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListDelegatedServicesForAccount](#listdelegatedservicesforaccount) - <p>List the Amazon Web Services services for which the specified account is a delegated administrator.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListHandshakesForAccount](#listhandshakesforaccount) - <p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called from any account in the organization.</p>
* [ListHandshakesForOrganization](#listhandshakesfororganization) - <p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListOrganizationalUnitsForParent](#listorganizationalunitsforparent) - <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListParents](#listparents) - <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>In the current release, a child can have only a single parent.</p> </note>
* [ListPolicies](#listpolicies) - <p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListPoliciesForTarget](#listpoliciesfortarget) - <p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListRoots](#listroots) - <p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>
* [ListTagsForResource](#listtagsforresource) - <p>Lists tags that are attached to the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [ListTargetsForPolicy](#listtargetsforpolicy) - <p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
* [MoveAccount](#moveaccount) - <p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's management account.</p>
* [PutResourcePolicy](#putresourcepolicy) - <p>Creates or updates a resource policy.</p> <p>You can only call this operation from the organization's management account.</p>
* [RegisterDelegatedAdministrator](#registerdelegatedadministrator) - <p>Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service.</p> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>
* [RemoveAccountFromOrganization](#removeaccountfromorganization) - <p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <ul> <li> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must choose a support plan, provide and verify the required contact information, and provide a current payment method. Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> </ul> </important>
* [TagResource](#tagresource) - <p>Adds one or more tags to the specified resource.</p> <p>Currently, you can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>
* [UntagResource](#untagresource) - <p>Removes any tags with the specified keys from the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>
* [UpdateOrganizationalUnit](#updateorganizationalunit) - <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.</p> <p>This operation can be called only from the organization's management account.</p>
* [UpdatePolicy](#updatepolicy) - <p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's management account.</p>

## AcceptHandshake

<p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request.</p> <p>You can only call this operation by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account.</p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the management account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an Amazon Web Services account to join your organization</a> in the <i>Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

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
    res, err := s.SDK.AcceptHandshake(ctx, operations.AcceptHandshakeRequest{
        AcceptHandshakeRequest: shared.AcceptHandshakeRequest{
            HandshakeID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AcceptHandshakeXAmzTargetEnumAwsOrganizationsV20161128AcceptHandshake,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptHandshakeResponse != nil {
        // handle response
    }
}
```

## AttachPolicy

<p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy. Refer to the <i>Organizations User Guide</i> for information about each policy type:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a> </p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.AttachPolicy(ctx, operations.AttachPolicyRequest{
        AttachPolicyRequest: shared.AttachPolicyRequest{
            PolicyID: "delectus",
            TargetID: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.AttachPolicyXAmzTargetEnumAwsOrganizationsV20161128AttachPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelHandshake

<p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>.</p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

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
    res, err := s.SDK.CancelHandshake(ctx, operations.CancelHandshakeRequest{
        CancelHandshakeRequest: shared.CancelHandshakeRequest{
            HandshakeID: "nisi",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CancelHandshakeXAmzTargetEnumAwsOrganizationsV20161128CancelHandshake,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelHandshakeResponse != nil {
        // handle response
    }
}
```

## CloseAccount

<p>Closes an Amazon Web Services member account within an organization. You can close an account when <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features are enabled </a>. You can't close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CloseAccount</code> operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code> request to provide as a parameter to the <a>DescribeAccount</a> operation. </p> <p>While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. </p> </li> <li> <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <note> <ul> <li> <p>You can close only 10% of member accounts, between 10 and 200, within a rolling 30 day period. This quota is not bound by a calendar month, but starts when you close an account.</p> <p>After you reach this limit, you can close additional accounts in the Billing console. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/close-account.html">Closing an account</a> in the Amazon Web Services Billing and Cost Management User Guide.</p> </li> <li> <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. </p> </li> <li> <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the <code>CloseAccount</code> request will close both accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html"> Closing an Amazon Web Services GovCloud (US) account</a> in the <i> Amazon Web Services GovCloud User Guide</i>.</p> </li> </ul> </note> <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide.</i> </p>

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
    res, err := s.SDK.CloseAccount(ctx, operations.CloseAccountRequest{
        CloseAccountRequest: shared.CloseAccountRequest{
            AccountID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.CloseAccountXAmzTargetEnumAwsOrganizationsV20161128CloseAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAccount

<p>Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide</i>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization's management account.</p> <p>This operation can be called only from the organization's management account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>

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
    res, err := s.SDK.CreateAccount(ctx, operations.CreateAccountRequest{
        CreateAccountRequest: shared.CreateAccountRequest{
            AccountName: "molestiae",
            Email: "quod",
            IamUserAccessToBilling: shared.IAMUserAccessToBillingEnumDeny.ToPointer(),
            RoleName: sdk.String("esse"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "porro",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "dicta",
                    Value: "nam",
                },
                shared.Tag{
                    Key: "officia",
                    Value: "occaecati",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateAccountXAmzTargetEnumAwsOrganizationsV20161128CreateAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccountResponse != nil {
        // handle response
    }
}
```

## CreateGovCloudAccount

<p>This action is available if all of the following are true:</p> <ul> <li> <p>You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>Amazon Web Services GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region.</p> </li> <li> <p>You call this action from the management account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. </p> </li> </ul> <p>Organizations automatically creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the <i>Organizations User Guide.</i> </p> <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an Amazon S3 bucket for CloudTrail log storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>. </p> </li> </ul> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud account exists.</p> <p>You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the <i>Amazon Web Services GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is <i>not</i> automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an Amazon Web Services account</a> in the <i>Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>

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
    res, err := s.SDK.CreateGovCloudAccount(ctx, operations.CreateGovCloudAccountRequest{
        CreateGovCloudAccountRequest: shared.CreateGovCloudAccountRequest{
            AccountName: "molestiae",
            Email: "modi",
            IamUserAccessToBilling: shared.IAMUserAccessToBillingEnumAllow.ToPointer(),
            RoleName: sdk.String("impedit"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "esse",
                    Value: "ipsum",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "aspernatur",
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: "ad",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateGovCloudAccountXAmzTargetEnumAwsOrganizationsV20161128CreateGovCloudAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGovCloudAccountResponse != nil {
        // handle response
    }
}
```

## CreateOrganization

<p>Creates an Amazon Web Services organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can't use organization policies</p>

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
    res, err := s.SDK.CreateOrganization(ctx, operations.CreateOrganizationRequest{
        CreateOrganizationRequest: shared.CreateOrganizationRequest{
            FeatureSet: shared.OrganizationFeatureSetEnumConsolidatedBilling.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.CreateOrganizationXAmzTargetEnumAwsOrganizationsV20161128CreateOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationResponse != nil {
        // handle response
    }
}
```

## CreateOrganizationalUnit

<p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.</p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>Organizations User Guide.</i> </p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.CreateOrganizationalUnit(ctx, operations.CreateOrganizationalUnitRequest{
        CreateOrganizationalUnitRequest: shared.CreateOrganizationalUnitRequest{
            Name: "Brenda Wisozk",
            ParentID: "laborum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "corporis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128CreateOrganizationalUnit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationalUnitResponse != nil {
        // handle response
    }
}
```

## CreatePolicy

<p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual Amazon Web Services account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

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
        CreatePolicyRequest: shared.CreatePolicyRequest{
            Content: "accusantium",
            Description: "iure",
            Name: "Miss Aubrey Williamson",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequuntur",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "mollitia",
                    Value: "occaecati",
                },
                shared.Tag{
                    Key: "numquam",
                    Value: "commodi",
                },
            },
            Type: shared.PolicyTypeEnumTagPolicy,
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.CreatePolicyXAmzTargetEnumAwsOrganizationsV20161128CreatePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePolicyResponse != nil {
        // handle response
    }
}
```

## DeclineHandshake

<p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>

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
    res, err := s.SDK.DeclineHandshake(ctx, operations.DeclineHandshakeRequest{
        DeclineHandshakeRequest: shared.DeclineHandshakeRequest{
            HandshakeID: "animi",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DeclineHandshakeXAmzTargetEnumAwsOrganizationsV20161128DeclineHandshake,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeclineHandshakeResponse != nil {
        // handle response
    }
}
```

## DeleteOrganization

Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOrganization(ctx, operations.DeleteOrganizationRequest{
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DeleteOrganizationXAmzTargetEnumAwsOrganizationsV20161128DeleteOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationalUnit

<p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.DeleteOrganizationalUnit(ctx, operations.DeleteOrganizationalUnitRequest{
        DeleteOrganizationalUnitRequest: shared.DeleteOrganizationalUnitRequest{
            OrganizationalUnitID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DeleteOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128DeleteOrganizationalUnit,
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

<p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's management account.</p>

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
            PolicyID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DeletePolicyXAmzTargetEnumAwsOrganizationsV20161128DeletePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteResourcePolicy

<p>Deletes the resource policy from your organization.</p> <p>You can only call this operation from the organization's management account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumAwsOrganizationsV20161128DeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterDelegatedAdministrator

<p>Removes the specified member Amazon Web Services account as a delegated administrator for the specified Amazon Web Services service.</p> <important> <p>Deregistering a delegated administrator can have unintended impacts on the functionality of the enabled Amazon Web Services service. See the documentation for the enabled service before you deregister a delegated administrator so that you understand any potential impacts.</p> </important> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.DeregisterDelegatedAdministrator(ctx, operations.DeregisterDelegatedAdministratorRequest{
        DeregisterDelegatedAdministratorRequest: shared.DeregisterDelegatedAdministratorRequest{
            AccountID: "commodi",
            ServicePrincipal: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeregisterDelegatedAdministratorXAmzTargetEnumAwsOrganizationsV20161128DeregisterDelegatedAdministrator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAccount

<p>Retrieves Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.DescribeAccount(ctx, operations.DescribeAccountRequest{
        DescribeAccountRequest: shared.DescribeAccountRequest{
            AccountID: "praesentium",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DescribeAccountXAmzTargetEnumAwsOrganizationsV20161128DescribeAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountResponse != nil {
        // handle response
    }
}
```

## DescribeCreateAccountStatus

<p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.DescribeCreateAccountStatus(ctx, operations.DescribeCreateAccountStatusRequest{
        DescribeCreateAccountStatusRequest: shared.DescribeCreateAccountStatusRequest{
            CreateAccountRequestID: "incidunt",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeCreateAccountStatusXAmzTargetEnumAwsOrganizationsV20161128DescribeCreateAccountStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCreateAccountStatusResponse != nil {
        // handle response
    }
}
```

## DescribeEffectivePolicy

<p>Returns the contents of the effective policy for specified policy type and account. The effective policy is the aggregation of any policies of the specified type that the account inherits, plus any policy of that type that is directly attached to the account.</p> <p>This operation applies only to policy types <i>other</i> than service control policies (SCPs).</p> <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.DescribeEffectivePolicy(ctx, operations.DescribeEffectivePolicyRequest{
        DescribeEffectivePolicyRequest: shared.DescribeEffectivePolicyRequest{
            PolicyType: shared.EffectivePolicyTypeEnumAiservicesOptOutPolicy,
            TargetID: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DescribeEffectivePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribeEffectivePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEffectivePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeHandshake

<p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>

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
    res, err := s.SDK.DescribeHandshake(ctx, operations.DescribeHandshakeRequest{
        DescribeHandshakeRequest: shared.DescribeHandshakeRequest{
            HandshakeID: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeHandshakeXAmzTargetEnumAwsOrganizationsV20161128DescribeHandshake,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHandshakeResponse != nil {
        // handle response
    }
}
```

## DescribeOrganization

<p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeOrganization(ctx, operations.DescribeOrganizationRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DescribeOrganizationXAmzTargetEnumAwsOrganizationsV20161128DescribeOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationResponse != nil {
        // handle response
    }
}
```

## DescribeOrganizationalUnit

<p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.DescribeOrganizationalUnit(ctx, operations.DescribeOrganizationalUnitRequest{
        DescribeOrganizationalUnitRequest: shared.DescribeOrganizationalUnitRequest{
            OrganizationalUnitID: "aliquid",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.DescribeOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128DescribeOrganizationalUnit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationalUnitResponse != nil {
        // handle response
    }
}
```

## DescribePolicy

<p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.DescribePolicy(ctx, operations.DescribePolicyRequest{
        DescribePolicyRequest: shared.DescribePolicyRequest{
            PolicyID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DescribePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeResourcePolicy

<p>Retrieves information about a resource policy.</p> <p>You can only call this operation from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeResourcePolicy(ctx, operations.DescribeResourcePolicyRequest{
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.DescribeResourcePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribeResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DetachPolicy

<p>Detaches a policy from a target root, organizational unit (OU), or account.</p> <important> <p>If the policy being detached is a service control policy (SCP), the changes to permissions for Identity and Access Management (IAM) users and roles in affected accounts are immediate.</p> </important> <p>Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with an SCP that limits the permissions that can be delegated, you must attach the replacement SCP before you can remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.DetachPolicy(ctx, operations.DetachPolicyRequest{
        DetachPolicyRequest: shared.DetachPolicyRequest{
            PolicyID: "occaecati",
            TargetID: "enim",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.DetachPolicyXAmzTargetEnumAwsOrganizationsV20161128DetachPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableAWSServiceAccess

<p>Disables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you disable integration, the specified service no longer can create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations.</p> <important> <p>We <b> <i>strongly recommend</i> </b> that you don't use this command to disable integration between Organizations and the specified Amazon Web Services service. Instead, use the console or commands that are provided by the specified service. This lets the trusted service perform any required initialization when enabling trusted access, such as creating any required resources and any required clean up of resources when disabling trusted access. </p> <p>For information about how to disable trusted service access to your organization using the trusted service, see the <b>Learn more</b> link under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services services that you can use with Organizations</a>. on this page.</p> <p>If you disable access by using this command, it causes the following actions to occur:</p> <ul> <li> <p>The service can no longer create a service-linked role in the accounts in your organization. This means that the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from Organizations. </p> </li> <li> <p>The service can no longer perform tasks in the member accounts in the organization, unless those operations are explicitly permitted by the IAM policies that are attached to your roles. This includes any data aggregation from the member accounts to the management account, or to a delegated administrator account, where relevant.</p> </li> <li> <p>Some services detect this and clean up any remaining data or resources related to the integration, while other services stop accessing the organization but leave any historical data and configuration in place to support a possible re-enabling of the integration.</p> </li> </ul> <p>Using the other service's console or commands to disable the integration ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service. </p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts </p> <p>For more information about integrating other services with Organizations, including the list of services that work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.DisableAWSServiceAccess(ctx, operations.DisableAWSServiceAccessRequest{
        DisableAWSServiceAccessRequest: shared.DisableAWSServiceAccessRequest{
            ServicePrincipal: "deleniti",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DisableAWSServiceAccessXAmzTargetEnumAwsOrganizationsV20161128DisableAwsServiceAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisablePolicyType

<p>Disables an organizational policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>

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
    res, err := s.SDK.DisablePolicyType(ctx, operations.DisablePolicyTypeRequest{
        DisablePolicyTypeRequest: shared.DisablePolicyTypeRequest{
            PolicyType: shared.PolicyTypeEnumTagPolicy,
            RootID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.DisablePolicyTypeXAmzTargetEnumAwsOrganizationsV20161128DisablePolicyType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisablePolicyTypeResponse != nil {
        // handle response
    }
}
```

## EnableAWSServiceAccess

<p>Enables the integration of an Amazon Web Services service (the service that is specified by <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other Amazon Web Services service.</p> </important> <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>You can only call this operation from the organization's management account and only if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>

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
    res, err := s.SDK.EnableAWSServiceAccess(ctx, operations.EnableAWSServiceAccessRequest{
        EnableAWSServiceAccessRequest: shared.EnableAWSServiceAccessRequest{
            ServicePrincipal: "natus",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.EnableAWSServiceAccessXAmzTargetEnumAwsOrganizationsV20161128EnableAwsServiceAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableAllFeatures

<p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the management account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The management account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's management account.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableAllFeatures(ctx, operations.EnableAllFeaturesRequest{
        RequestBody: map[string]interface{}{
            "ullam": "provident",
            "quos": "sint",
            "accusantium": "mollitia",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.EnableAllFeaturesXAmzTargetEnumAwsOrganizationsV20161128EnableAllFeatures,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableAllFeaturesResponse != nil {
        // handle response
    }
}
```

## EnablePolicyType

<p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation.</p> <p>This operation can be called only from the organization's management account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>

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
    res, err := s.SDK.EnablePolicyType(ctx, operations.EnablePolicyTypeRequest{
        EnablePolicyTypeRequest: shared.EnablePolicyTypeRequest{
            PolicyType: shared.PolicyTypeEnumTagPolicy,
            RootID: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.EnablePolicyTypeXAmzTargetEnumAwsOrganizationsV20161128EnablePolicyType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnablePolicyTypeResponse != nil {
        // handle response
    }
}
```

## InviteAccountToOrganization

<p>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite Amazon Web Services accounts only from the same seller as the management account. For example, if your organization's management account was created by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you can invite only other AISPL accounts to your organization. You can't combine accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p> </li> </ul> </important> <p>If the request includes tags, then the requester must have the <code>organizations:TagResource</code> permission.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.InviteAccountToOrganization(ctx, operations.InviteAccountToOrganizationRequest{
        InviteAccountToOrganizationRequest: shared.InviteAccountToOrganizationRequest{
            Notes: sdk.String("in"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "architecto",
                    Value: "repudiandae",
                },
            },
            Target: shared.HandshakeParty{
                ID: "ullam",
                Type: shared.HandshakePartyTypeEnumEmail,
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.InviteAccountToOrganizationXAmzTargetEnumAwsOrganizationsV20161128InviteAccountToOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InviteAccountToOrganizationResponse != nil {
        // handle response
    }
}
```

## LeaveOrganization

<p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization.</p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn't appear.</p> <ul> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>Amazon Web Services Billing and Cost Management User Guide.</i> </p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> <li> <p>A newly created account has a waiting period before it can be removed from its organization. If you get an error that indicates that a wait period is required, then try again in a few days.</p> </li> </ul> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.LeaveOrganization(ctx, operations.LeaveOrganizationRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.LeaveOrganizationXAmzTargetEnumAwsOrganizationsV20161128LeaveOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListAWSServiceAccessForOrganization

<p>Returns a list of the Amazon Web Services services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with Organizations, including the list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other Amazon Web Services Services</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListAWSServiceAccessForOrganization(ctx, operations.ListAWSServiceAccessForOrganizationRequest{
        ListAWSServiceAccessForOrganizationRequest: shared.ListAWSServiceAccessForOrganizationRequest{
            MaxResults: sdk.Int64(864934),
            NextToken: sdk.String("maxime"),
        },
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListAWSServiceAccessForOrganizationXAmzTargetEnumAwsOrganizationsV20161128ListAwsServiceAccessForOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAWSServiceAccessForOrganizationResponse != nil {
        // handle response
    }
}
```

## ListAccounts

<p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListAccounts(ctx, operations.ListAccountsRequest{
        ListAccountsRequest: shared.ListAccountsRequest{
            MaxResults: sdk.Int64(453543),
            NextToken: sdk.String("autem"),
        },
        MaxResults: sdk.String("nam"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListAccountsXAmzTargetEnumAwsOrganizationsV20161128ListAccounts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```

## ListAccountsForParent

<p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListAccountsForParent(ctx, operations.ListAccountsForParentRequest{
        ListAccountsForParentRequest: shared.ListAccountsForParentRequest{
            MaxResults: sdk.Int64(764912),
            NextToken: sdk.String("corporis"),
            ParentID: "hic",
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.ListAccountsForParentXAmzTargetEnumAwsOrganizationsV20161128ListAccountsForParent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsForParentResponse != nil {
        // handle response
    }
}
```

## ListChildren

<p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListChildren(ctx, operations.ListChildrenRequest{
        ListChildrenRequest: shared.ListChildrenRequest{
            ChildType: shared.ChildTypeEnumAccount,
            MaxResults: sdk.Int64(18521),
            NextToken: sdk.String("dolores"),
            ParentID: "minus",
        },
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("dolor"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ListChildrenXAmzTargetEnumAwsOrganizationsV20161128ListChildren,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChildrenResponse != nil {
        // handle response
    }
}
```

## ListCreateAccountStatus

<p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListCreateAccountStatus(ctx, operations.ListCreateAccountStatusRequest{
        ListCreateAccountStatusRequest: shared.ListCreateAccountStatusRequest{
            MaxResults: sdk.Int64(31838),
            NextToken: sdk.String("porro"),
            States: []shared.CreateAccountStateEnum{
                shared.CreateAccountStateEnumSucceeded,
            },
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.ListCreateAccountStatusXAmzTargetEnumAwsOrganizationsV20161128ListCreateAccountStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreateAccountStatusResponse != nil {
        // handle response
    }
}
```

## ListDelegatedAdministrators

<p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListDelegatedAdministrators(ctx, operations.ListDelegatedAdministratorsRequest{
        ListDelegatedAdministratorsRequest: shared.ListDelegatedAdministratorsRequest{
            MaxResults: sdk.Int64(679091),
            NextToken: sdk.String("deleniti"),
            ServicePrincipal: sdk.String("pariatur"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListDelegatedAdministratorsXAmzTargetEnumAwsOrganizationsV20161128ListDelegatedAdministrators,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDelegatedAdministratorsResponse != nil {
        // handle response
    }
}
```

## ListDelegatedServicesForAccount

<p>List the Amazon Web Services services for which the specified account is a delegated administrator.</p> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListDelegatedServicesForAccount(ctx, operations.ListDelegatedServicesForAccountRequest{
        ListDelegatedServicesForAccountRequest: shared.ListDelegatedServicesForAccountRequest{
            AccountID: "dolor",
            MaxResults: sdk.Int64(186193),
            NextToken: sdk.String("ipsum"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.ListDelegatedServicesForAccountXAmzTargetEnumAwsOrganizationsV20161128ListDelegatedServicesForAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDelegatedServicesForAccountResponse != nil {
        // handle response
    }
}
```

## ListHandshakesForAccount

<p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called from any account in the organization.</p>

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
    res, err := s.SDK.ListHandshakesForAccount(ctx, operations.ListHandshakesForAccountRequest{
        ListHandshakesForAccountRequest: shared.ListHandshakesForAccountRequest{
            Filter: &shared.HandshakeFilter{
                ActionType: shared.ActionTypeEnumInvite.ToPointer(),
                ParentHandshakeID: sdk.String("ipsa"),
            },
            MaxResults: sdk.Int64(56418),
            NextToken: sdk.String("iure"),
        },
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.ListHandshakesForAccountXAmzTargetEnumAwsOrganizationsV20161128ListHandshakesForAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHandshakesForAccountResponse != nil {
        // handle response
    }
}
```

## ListHandshakesForOrganization

<p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListHandshakesForOrganization(ctx, operations.ListHandshakesForOrganizationRequest{
        ListHandshakesForOrganizationRequest: shared.ListHandshakesForOrganizationRequest{
            Filter: &shared.HandshakeFilter{
                ActionType: shared.ActionTypeEnumInvite.ToPointer(),
                ParentHandshakeID: sdk.String("fugiat"),
            },
            MaxResults: sdk.Int64(67249),
            NextToken: sdk.String("soluta"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("iusto"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListHandshakesForOrganizationXAmzTargetEnumAwsOrganizationsV20161128ListHandshakesForOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHandshakesForOrganizationResponse != nil {
        // handle response
    }
}
```

## ListOrganizationalUnitsForParent

<p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListOrganizationalUnitsForParent(ctx, operations.ListOrganizationalUnitsForParentRequest{
        ListOrganizationalUnitsForParentRequest: shared.ListOrganizationalUnitsForParentRequest{
            MaxResults: sdk.Int64(469497),
            NextToken: sdk.String("ipsum"),
            ParentID: "voluptate",
        },
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.ListOrganizationalUnitsForParentXAmzTargetEnumAwsOrganizationsV20161128ListOrganizationalUnitsForParent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationalUnitsForParentResponse != nil {
        // handle response
    }
}
```

## ListParents

<p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>In the current release, a child can have only a single parent.</p> </note>

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
    res, err := s.SDK.ListParents(ctx, operations.ListParentsRequest{
        ListParentsRequest: shared.ListParentsRequest{
            ChildID: "saepe",
            MaxResults: sdk.Int64(383464),
            NextToken: sdk.String("deserunt"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("minima"),
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListParentsXAmzTargetEnumAwsOrganizationsV20161128ListParents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListParentsResponse != nil {
        // handle response
    }
}
```

## ListPolicies

<p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListPolicies(ctx, operations.ListPoliciesRequest{
        ListPoliciesRequest: shared.ListPoliciesRequest{
            Filter: shared.PolicyTypeEnumTagPolicy,
            MaxResults: sdk.Int64(798047),
            NextToken: sdk.String("officiis"),
        },
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("dolorum"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.ListPoliciesXAmzTargetEnumAwsOrganizationsV20161128ListPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesResponse != nil {
        // handle response
    }
}
```

## ListPoliciesForTarget

<p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListPoliciesForTarget(ctx, operations.ListPoliciesForTargetRequest{
        ListPoliciesForTargetRequest: shared.ListPoliciesForTargetRequest{
            Filter: shared.PolicyTypeEnumServiceControlPolicy,
            MaxResults: sdk.Int64(730856),
            NextToken: sdk.String("accusamus"),
            TargetID: "numquam",
        },
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("dolorem"),
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.ListPoliciesForTargetXAmzTargetEnumAwsOrganizationsV20161128ListPoliciesForTarget,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesForTargetResponse != nil {
        // handle response
    }
}
```

## ListRoots

<p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>

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
    res, err := s.SDK.ListRoots(ctx, operations.ListRootsRequest{
        ListRootsRequest: shared.ListRootsRequest{
            MaxResults: sdk.Int64(424685),
            NextToken: sdk.String("libero"),
        },
        MaxResults: sdk.String("voluptas"),
        NextToken: sdk.String("deserunt"),
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListRootsXAmzTargetEnumAwsOrganizationsV20161128ListRoots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRootsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists tags that are attached to the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            NextToken: sdk.String("soluta"),
            ResourceID: "dicta",
        },
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsOrganizationsV20161128ListTagsForResource,
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

<p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>

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
    res, err := s.SDK.ListTargetsForPolicy(ctx, operations.ListTargetsForPolicyRequest{
        ListTargetsForPolicyRequest: shared.ListTargetsForPolicyRequest{
            MaxResults: sdk.Int64(463150),
            NextToken: sdk.String("molestias"),
            PolicyID: "temporibus",
        },
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("neque"),
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.ListTargetsForPolicyXAmzTargetEnumAwsOrganizationsV20161128ListTargetsForPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsForPolicyResponse != nil {
        // handle response
    }
}
```

## MoveAccount

<p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.MoveAccount(ctx, operations.MoveAccountRequest{
        MoveAccountRequest: shared.MoveAccountRequest{
            AccountID: "voluptatem",
            DestinationParentID: "cumque",
            SourceParentID: "soluta",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.MoveAccountXAmzTargetEnumAwsOrganizationsV20161128MoveAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutResourcePolicy

<p>Creates or updates a resource policy.</p> <p>You can only call this operation from the organization's management account.</p>

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            Content: "tempore",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aperiam",
                    Value: "delectus",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "dolore",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "adipisci",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumAwsOrganizationsV20161128PutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## RegisterDelegatedAdministrator

<p>Enables the specified member account to administer the Organizations features of the specified Amazon Web Services service. It grants read-only access to Organizations service data. The account still requires IAM permissions to access and administer the Amazon Web Services service.</p> <p>You can run this action only for Amazon Web Services services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with Organizations</a> in the <i>Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.RegisterDelegatedAdministrator(ctx, operations.RegisterDelegatedAdministratorRequest{
        RegisterDelegatedAdministratorRequest: shared.RegisterDelegatedAdministratorRequest{
            AccountID: "est",
            ServicePrincipal: "repellendus",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.RegisterDelegatedAdministratorXAmzTargetEnumAwsOrganizationsV20161128RegisterDelegatedAdministrator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAccountFromOrganization

<p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <ul> <li> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must choose a support plan, provide and verify the required contact information, and provide a current payment method. Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>Organizations User Guide.</i> </p> </li> <li> <p>The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization.</p> </li> <li> <p>After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</p> </li> </ul> </important>

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
    res, err := s.SDK.RemoveAccountFromOrganization(ctx, operations.RemoveAccountFromOrganizationRequest{
        RemoveAccountFromOrganizationRequest: shared.RemoveAccountFromOrganizationRequest{
            AccountID: "laudantium",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.RemoveAccountFromOrganizationXAmzTargetEnumAwsOrganizationsV20161128RemoveAccountFromOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

<p>Adds one or more tags to the specified resource.</p> <p>Currently, you can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

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
        TagResourceRequest: shared.TagResourceRequest{
            ResourceID: "ipsum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptate",
                    Value: "consectetur",
                },
                shared.Tag{
                    Key: "vero",
                    Value: "tenetur",
                },
                shared.Tag{
                    Key: "dignissimos",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "quod",
                },
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsOrganizationsV20161128TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

<p>Removes any tags with the specified keys from the specified resource.</p> <p>You can attach tags to the following resources in Organizations.</p> <ul> <li> <p>Amazon Web Services account</p> </li> <li> <p>Organization root</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Policy (any type)</p> </li> </ul> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceID: "illum",
            TagKeys: []string{
                "natus",
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsOrganizationsV20161128UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateOrganizationalUnit

<p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.UpdateOrganizationalUnit(ctx, operations.UpdateOrganizationalUnitRequest{
        UpdateOrganizationalUnitRequest: shared.UpdateOrganizationalUnitRequest{
            Name: sdk.String("Domingo Kris"),
            OrganizationalUnitID: "alias",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.UpdateOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128UpdateOrganizationalUnit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationalUnitResponse != nil {
        // handle response
    }
}
```

## UpdatePolicy

<p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.UpdatePolicy(ctx, operations.UpdatePolicyRequest{
        UpdatePolicyRequest: shared.UpdatePolicyRequest{
            Content: sdk.String("magnam"),
            Description: sdk.String("ratione"),
            Name: sdk.String("Mabel Cartwright"),
            PolicyID: "quasi",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.UpdatePolicyXAmzTargetEnumAwsOrganizationsV20161128UpdatePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePolicyResponse != nil {
        // handle response
    }
}
```
