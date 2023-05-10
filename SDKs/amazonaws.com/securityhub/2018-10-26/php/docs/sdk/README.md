# SDK

## Overview

<p>Security Hub provides you with a comprehensive view of the security state of your Amazon Web Services environment and resources. It also provides you with the readiness status of your environment based on controls from supported security standards. Security Hub collects security data from Amazon Web Services accounts, services, and integrated third-party products and helps you analyze security trends in your environment to identify the highest priority security issues. For more information about Security Hub, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">Security HubUser Guide</a>.</p> <p>When you use operations in the Security Hub API, the requests are executed only in the Amazon Web Services Region that is currently active or in the specific Amazon Web Services Region that you specify in your request. Any configuration or settings change that results from the operation is applied only to that Region. To make the same change in other Regions, run the same command for each Region in which you want to apply the change.</p> <p>For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of the member account with the administrator account is created only in the <code>us-west-2</code> Region. Security Hub must be enabled for the member account in the same Region that the invitation was sent from.</p> <p>The following throttling limits apply to using Security Hub API operations.</p> <ul> <li> <p> <code>BatchEnableStandards</code> - <code>RateLimit</code> of 1 request per second. <code>BurstLimit</code> of 1 request per second.</p> </li> <li> <p> <code>GetFindings</code> - <code>RateLimit</code> of 3 requests per second. <code>BurstLimit</code> of 6 requests per second.</p> </li> <li> <p> <code>BatchImportFindings</code> - <code>RateLimit</code> of 10 requests per second. <code>BurstLimit</code> of 30 requests per second.</p> </li> <li> <p> <code>BatchUpdateFindings</code> - <code>RateLimit</code> of 10 requests per second. <code>BurstLimit</code> of 30 requests per second.</p> </li> <li> <p> <code>UpdateStandardsControl</code> - <code>RateLimit</code> of 1 request per second. <code>BurstLimit</code> of 5 requests per second.</p> </li> <li> <p>All other operations - <code>RateLimit</code> of 10 requests per second. <code>BurstLimit</code> of 30 requests per second.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/securityhub/>
### Available Operations

* [acceptAdministratorInvitation](#acceptadministratorinvitation) - <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
* [~~acceptInvitation~~](#acceptinvitation) - <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p> <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p> <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p> :warning: **Deprecated**
* [batchDisableStandards](#batchdisablestandards) - <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
* [batchEnableStandards](#batchenablestandards) - <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code>DescribeStandards</code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
* [batchGetSecurityControls](#batchgetsecuritycontrols) -  Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region. 
* [batchGetStandardsControlAssociations](#batchgetstandardscontrolassociations) -  For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard. 
* [batchImportFindings](#batchimportfindings) - <p>Imports security findings generated by a finding provider into Security Hub. This action is requested by the finding provider to import its findings into Security Hub.</p> <p> <code>BatchImportFindings</code> must be called by one of the following:</p> <ul> <li> <p>The Amazon Web Services account that is associated with a finding if you are using the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-providers.html#securityhub-custom-providers-bfi-reqs">default product ARN</a> or are a partner sending findings from within a customer's Amazon Web Services account. In these cases, the identifier of the account that you are calling <code>BatchImportFindings</code> from needs to be the same as the <code>AwsAccountId</code> attribute for the finding.</p> </li> <li> <p>An Amazon Web Services account that Security Hub has allow-listed for an official partner integration. In this case, you can call <code>BatchImportFindings</code> from the allow-listed account and send findings from different customer accounts in the same batch.</p> </li> </ul> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> </ul> <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
* [batchUpdateFindings](#batchupdatefindings) - <p>Used by Security Hub customers to update information about their investigation into a finding. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.</p>
* [batchUpdateStandardsControlAssociations](#batchupdatestandardscontrolassociations) -  For a batch of security controls and standards, this operation updates the enablement status of a control in a standard. 
* [createActionTarget](#createactiontarget) - <p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
* [createFindingAggregator](#createfindingaggregator) - <p>Used to enable finding aggregation. Must be called from the aggregation Region.</p> <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>. </p>
* [createInsight](#createinsight) - <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>
* [createMembers](#createmembers) - <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account.</p> <p> <code>CreateMembers</code> is always used to add accounts that are not organization members.</p> <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used in the following cases:</p> <ul> <li> <p>Security Hub is not configured to automatically add new organization accounts.</p> </li> <li> <p>The account was disassociated or deleted in Security Hub.</p> </li> </ul> <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you can use the <code>EnableSecurityHub</code> operation.</p> <p>For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the <code>InviteMembers</code> operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub.</p> <p>Accounts that are managed using Organizations do not receive an invitation. They automatically become a member account in Security Hub.</p> <ul> <li> <p>If the organization account does not have Security Hub enabled, then Security Hub and the default standards are automatically enabled. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p> </li> <li> <p>For organization accounts that already have Security Hub enabled, Security Hub does not make any other changes to those accounts. It does not change their enabled standards or controls.</p> </li> </ul> <p>A permissions policy is added that permits the administrator account to view the findings generated in the member account.</p> <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
* [declineInvitations](#declineinvitations) - <p>Declines invitations to become a member account.</p> <p>A prospective member account uses this operation to decline an invitation to become a member.</p> <p>This operation is only called by member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>
* [deleteActionTarget](#deleteactiontarget) - <p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
* [deleteFindingAggregator](#deletefindingaggregator) - <p>Deletes a finding aggregator. When you delete the finding aggregator, you stop finding aggregation.</p> <p>When you stop finding aggregation, findings that were already aggregated to the aggregation Region are still visible from the aggregation Region. New findings and finding updates are not aggregated. </p>
* [deleteInsight](#deleteinsight) - Deletes the insight specified by the <code>InsightArn</code>.
* [deleteInvitations](#deleteinvitations) - <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p> <p>A Security Hub administrator account can use this operation to delete invitations sent to one or more member accounts.</p> <p>This operation is only used to delete invitations that are sent to member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>
* [deleteMembers](#deletemembers) - <p>Deletes the specified member accounts from Security Hub.</p> <p>Can be used to delete member accounts that belong to an organization as well as member accounts that were invited manually.</p>
* [describeActionTargets](#describeactiontargets) - Returns a list of the custom action targets in Security Hub in your account.
* [describeHub](#describehub) - Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - Returns information about the Organizations configuration for Security Hub. Can only be called from a Security Hub administrator account.
* [describeProducts](#describeproducts) - <p>Returns information about product integrations in Security Hub.</p> <p>You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration.</p> <p>If you do not provide an integration ARN, then the results include all of the available product integrations. </p>
* [describeStandards](#describestandards) - <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
* [describeStandardsControls](#describestandardscontrols) - <p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>
* [disableImportFindingsForProduct](#disableimportfindingsforproduct) - Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
* [disableOrganizationAdminAccount](#disableorganizationadminaccount) - Disables a Security Hub administrator account. Can only be called by the organization management account.
* [disableSecurityHub](#disablesecurityhub) - <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>
* [disassociateFromAdministratorAccount](#disassociatefromadministratoraccount) - <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
* [~~disassociateFromMasterAccount~~](#disassociatefrommasteraccount) - <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p> <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p> :warning: **Deprecated**
* [disassociateMembers](#disassociatemembers) - <p>Disassociates the specified member accounts from the associated administrator account.</p> <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</p>
* [enableImportFindingsForProduct](#enableimportfindingsforproduct) - <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>
* [enableOrganizationAdminAccount](#enableorganizationadminaccount) - Designates the Security Hub administrator account for an organization. Can only be called by the organization management account.
* [enableSecurityHub](#enablesecurityhub) - <p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards:</p> <ul> <li> <p>Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0</p> </li> <li> <p>Amazon Web Services Foundational Security Best Practices</p> </li> </ul> <p>Other standards are not automatically enabled. </p> <p>To opt out of automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the <code>BatchDisableStandards</code> operation.</p> <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
* [getAdministratorAccount](#getadministratoraccount) - <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
* [getEnabledStandards](#getenabledstandards) - Returns a list of the standards that are currently enabled.
* [getFindingAggregator](#getfindingaggregator) - Returns the current finding aggregation configuration.
* [getFindings](#getfindings) - <p>Returns a list of findings that match the specified criteria.</p> <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>
* [getInsightResults](#getinsightresults) - Lists the results of the Security Hub insight specified by the insight ARN.
* [getInsights](#getinsights) - Lists and describes insights for the specified insight ARNs.
* [getInvitationsCount](#getinvitationscount) - Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
* [~~getMasterAccount~~](#getmasteraccount) - <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p> <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p> :warning: **Deprecated**
* [getMembers](#getmembers) - <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p> <p>An administrator account can be either the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually.</p> <p>The results include both member accounts that are managed using Organizations and accounts that were invited manually.</p>
* [inviteMembers](#invitemembers) - <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that the invitation is sent from.</p> <p>This operation is only used to invite accounts that do not belong to an organization. Organization accounts do not receive invitations.</p> <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p> <p>When the account owner enables Security Hub and accepts the invitation to become a member account, the administrator account can view the findings generated from the member account.</p>
* [listEnabledProductsForImport](#listenabledproductsforimport) - Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
* [listFindingAggregators](#listfindingaggregators) - If finding aggregation is enabled, then <code>ListFindingAggregators</code> returns the ARN of the finding aggregator. You can run this operation from any Region.
* [listInvitations](#listinvitations) - <p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p> <p>This operation is only used by accounts that are managed by invitation. Accounts that are managed using the integration with Organizations do not receive invitations.</p>
* [listMembers](#listmembers) - <p>Lists details about all member accounts for the current Security Hub administrator account.</p> <p>The results include both member accounts that belong to an organization and member accounts that were invited manually.</p>
* [listOrganizationAdminAccounts](#listorganizationadminaccounts) - Lists the Security Hub administrator accounts. Can only be called by the organization management account.
* [listSecurityControlDefinitions](#listsecuritycontroldefinitions) -  Lists all of the security controls that apply to a specified standard. 
* [listStandardsControlAssociations](#liststandardscontrolassociations) -  Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account. 
* [listTagsForResource](#listtagsforresource) - Returns a list of tags associated with a resource.
* [tagResource](#tagresource) - Adds one or more tags to a resource.
* [untagResource](#untagresource) - Removes one or more tags from a resource.
* [updateActionTarget](#updateactiontarget) - Updates the name and description of a custom action target in Security Hub.
* [updateFindingAggregator](#updatefindingaggregator) - <p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p> <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region. </p>
* [updateFindings](#updatefindings) - <p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
* [updateInsight](#updateinsight) - Updates the Security Hub insight identified by the specified insight ARN.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Used to update the configuration related to Organizations. Can only be called from a Security Hub administrator account.
* [updateSecurityHubConfiguration](#updatesecurityhubconfiguration) - Updates configuration options for Security Hub.
* [updateStandardsControl](#updatestandardscontrol) - Used to control whether an individual security standard control is enabled or disabled.

## acceptAdministratorInvitation

<p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptAdministratorInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptAdministratorInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptAdministratorInvitationRequest();
    $request->requestBody = new AcceptAdministratorInvitationRequestBody();
    $request->requestBody->administratorId = 'error';
    $request->requestBody->invitationId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->acceptAdministratorInvitation($request);

    if ($response->acceptAdministratorInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~acceptInvitation~~

<p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p> <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p> <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptInvitationRequest();
    $request->requestBody = new AcceptInvitationRequestBody();
    $request->requestBody->invitationId = 'suscipit';
    $request->requestBody->masterId = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->acceptInvitation($request);

    if ($response->acceptInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisableStandards

<p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisableStandardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisableStandardsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisableStandardsRequest();
    $request->requestBody = new BatchDisableStandardsRequestBody();
    $request->requestBody->standardsSubscriptionArns = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->batchDisableStandards($request);

    if ($response->batchDisableStandardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchEnableStandards

<p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code>DescribeStandards</code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchEnableStandardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchEnableStandardsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StandardsSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchEnableStandardsRequest();
    $request->requestBody = new BatchEnableStandardsRequestBody();
    $request->requestBody->standardsSubscriptionRequests = [
        new StandardsSubscriptionRequest(),
        new StandardsSubscriptionRequest(),
        new StandardsSubscriptionRequest(),
        new StandardsSubscriptionRequest(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->batchEnableStandards($request);

    if ($response->batchEnableStandardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetSecurityControls

 Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSecurityControlsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetSecurityControlsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetSecurityControlsRequest();
    $request->requestBody = new BatchGetSecurityControlsRequestBody();
    $request->requestBody->securityControlIds = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->batchGetSecurityControls($request);

    if ($response->batchGetSecurityControlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetStandardsControlAssociations

 For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetStandardsControlAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetStandardsControlAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StandardsControlAssociationId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetStandardsControlAssociationsRequest();
    $request->requestBody = new BatchGetStandardsControlAssociationsRequestBody();
    $request->requestBody->standardsControlAssociationIds = [
        new StandardsControlAssociationId(),
        new StandardsControlAssociationId(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->batchGetStandardsControlAssociations($request);

    if ($response->batchGetStandardsControlAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchImportFindings

<p>Imports security findings generated by a finding provider into Security Hub. This action is requested by the finding provider to import its findings into Security Hub.</p> <p> <code>BatchImportFindings</code> must be called by one of the following:</p> <ul> <li> <p>The Amazon Web Services account that is associated with a finding if you are using the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-providers.html#securityhub-custom-providers-bfi-reqs">default product ARN</a> or are a partner sending findings from within a customer's Amazon Web Services account. In these cases, the identifier of the account that you are calling <code>BatchImportFindings</code> from needs to be the same as the <code>AwsAccountId</code> attribute for the finding.</p> </li> <li> <p>An Amazon Web Services account that Security Hub has allow-listed for an official partner integration. In this case, you can call <code>BatchImportFindings</code> from the allow-listed account and send findings from different customer accounts in the same batch.</p> </li> </ul> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> </ul> <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchImportFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchImportFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AwsSecurityFinding;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiCallAction;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiCallActionDomainDetails;
use \OpenAPI\OpenAPI\Models\Shared\ActionRemoteIpDetails;
use \OpenAPI\OpenAPI\Models\Shared\City;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\GeoLocation;
use \OpenAPI\OpenAPI\Models\Shared\IpOrganizationDetails;
use \OpenAPI\OpenAPI\Models\Shared\DnsRequestAction;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConnectionAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionLocalPortDetails;
use \OpenAPI\OpenAPI\Models\Shared\ActionRemotePortDetails;
use \OpenAPI\OpenAPI\Models\Shared\PortProbeAction;
use \OpenAPI\OpenAPI\Models\Shared\PortProbeDetail;
use \OpenAPI\OpenAPI\Models\Shared\ActionLocalIpDetails;
use \OpenAPI\OpenAPI\Models\Shared\Compliance;
use \OpenAPI\OpenAPI\Models\Shared\AssociatedStandard;
use \OpenAPI\OpenAPI\Models\Shared\ComplianceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusReason;
use \OpenAPI\OpenAPI\Models\Shared\FindingProviderFields;
use \OpenAPI\OpenAPI\Models\Shared\RelatedFinding;
use \OpenAPI\OpenAPI\Models\Shared\FindingProviderSeverity;
use \OpenAPI\OpenAPI\Models\Shared\SeverityLabelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Malware;
use \OpenAPI\OpenAPI\Models\Shared\MalwareStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MalwareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\NetworkDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPathComponent;
use \OpenAPI\OpenAPI\Models\Shared\NetworkHeader;
use \OpenAPI\OpenAPI\Models\Shared\NetworkPathComponentDetails;
use \OpenAPI\OpenAPI\Models\Shared\Note;
use \OpenAPI\OpenAPI\Models\Shared\PatchSummary;
use \OpenAPI\OpenAPI\Models\Shared\ProcessDetails;
use \OpenAPI\OpenAPI\Models\Shared\RecordStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Remediation;
use \OpenAPI\OpenAPI\Models\Shared\Recommendation;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\DataClassificationDetails;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationResult;
use \OpenAPI\OpenAPI\Models\Shared\CustomDataIdentifiersResult;
use \OpenAPI\OpenAPI\Models\Shared\CustomDataIdentifiersDetections;
use \OpenAPI\OpenAPI\Models\Shared\Occurrences;
use \OpenAPI\OpenAPI\Models\Shared\Cell;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\Record;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataResult;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveDataDetections;
use \OpenAPI\OpenAPI\Models\Shared\ClassificationStatus;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayRestApiDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayStageDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayAccessLogSettings;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayCanarySettings;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayMethodSettings;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayV2ApiDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCorsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayV2StageDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsApiGatewayV2RouteSettings;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingLaunchConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsAutoScalingLaunchConfigurationMetadataOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanBackupPlanDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanAdvancedBackupSettingsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanRuleCopyActionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupPlanLifecycleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupVaultDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupBackupVaultNotificationsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupRecoveryPointDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupRecoveryPointCalculatedLifecycleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupRecoveryPointCreatedByDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsBackupRecoveryPointLifecycleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateDomainValidationOption;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateExtendedKeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateKeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsCertificateManagerCertificateRenewalSummary;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFormationStackDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFormationStackDriftInformationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFormationStackOutputsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionCacheBehaviors;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionCacheBehavior;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionDefaultCacheBehavior;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionLogging;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginGroups;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginGroupFailover;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOrigins;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginItem;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginCustomOriginConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginSslProtocols;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionOriginS3OriginConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudFrontDistributionViewerCertificate;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudTrailTrailDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudWatchAlarmDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCloudWatchAlarmDimensionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectArtifactsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectEnvironmentRegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectLogsConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectLogsConfigS3LogsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectSource;
use \OpenAPI\OpenAPI\Models\Shared\AwsCodeBuildProjectVpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableBillingModeSummary;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableGlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableKeySchema;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableProjection;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableLocalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableReplica;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableReplicaGlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableProvisionedThroughputOverride;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableRestoreSummary;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableSseDescription;
use \OpenAPI\OpenAPI\Models\Shared\AwsDynamoDbTableStreamSpecification;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2EipDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2InstanceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2InstanceMetadataOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2InstanceMonitoringDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2InstanceNetworkInterfacesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataCpuOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataCreditSpecificationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataHibernationOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataLicenseSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataMetadataOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataMonitoringDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataPlacementDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkAclDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkAclAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkAclEntry;
use \OpenAPI\OpenAPI\Models\Shared\IcmpTypeCode;
use \OpenAPI\OpenAPI\Models\Shared\PortRangeFromTo;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkInterfaceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkInterfaceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkInterfaceIpV6AddressDetail;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkInterfacePrivateIpAddressDetail;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2NetworkInterfaceSecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2RouteTableDetails;
use \OpenAPI\OpenAPI\Models\Shared\AssociationSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AssociationStateDetails;
use \OpenAPI\OpenAPI\Models\Shared\PropagatingVgwSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\RouteSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupIpPermission;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupIpRange;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupIpv6Range;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupPrefixListId;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SecurityGroupUserIdGroupPair;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2SubnetDetails;
use \OpenAPI\OpenAPI\Models\Shared\Ipv6CidrBlockAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2TransitGatewayDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VolumeDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VolumeAttachment;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcDetails;
use \OpenAPI\OpenAPI\Models\Shared\CidrBlockAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcEndpointServiceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcEndpointServiceServiceTypeDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcPeeringConnectionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcPeeringConnectionVpcInfoDetails;
use \OpenAPI\OpenAPI\Models\Shared\VpcInfoCidrBlockSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\VpcInfoIpv6CidrBlockSetDetails;
use \OpenAPI\OpenAPI\Models\Shared\VpcInfoPeeringOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpcPeeringConnectionStatusDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpnConnectionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpnConnectionOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpnConnectionOptionsTunnelOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpnConnectionRoutesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2VpnConnectionVgwTelemetryDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrContainerImageDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrRepositoryDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrRepositoryImageScanningConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcrRepositoryLifecyclePolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterClusterSettingsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsClusterDefaultCapacityProviderStrategyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsContainerDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsMountPoint;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceCapacityProviderStrategyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceDeploymentConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceDeploymentControllerDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceLoadBalancersDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceNetworkConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServicePlacementConstraintsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServicePlacementStrategiesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsServiceServiceRegistriesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskVolumeDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskVolumeHostDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionInferenceAcceleratorsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionPlacementConstraintsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionProxyConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionVolumesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEcsTaskDefinitionVolumesHostDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEfsAccessPointDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEfsAccessPointPosixUserDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEfsAccessPointRootDirectoryDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEfsAccessPointRootDirectoryCreationInfoDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEksClusterDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEksClusterLoggingDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEksClusterLoggingClusterLoggingDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEksClusterResourcesVpcConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticBeanstalkEnvironmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticBeanstalkEnvironmentEnvironmentLink;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticBeanstalkEnvironmentOptionSetting;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticBeanstalkEnvironmentTier;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainDomainEndpointOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainElasticsearchClusterConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainEncryptionAtRestOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainLogPublishingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainLogPublishingOptionsLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainNodeToNodeEncryptionOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainServiceSoftwareOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElasticsearchDomainVPCOptions;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerBackendServerDescription;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerHealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerInstance;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerListenerDescription;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerListener;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerAttributes;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerAccessLog;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerAdditionalAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerConnectionDraining;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerConnectionSettings;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerCrossZoneLoadBalancing;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerPolicies;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbAppCookieStickinessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLbCookieStickinessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbLoadBalancerSourceSecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbv2LoadBalancerDetails;
use \OpenAPI\OpenAPI\Models\Shared\AvailabilityZone;
use \OpenAPI\OpenAPI\Models\Shared\AwsElbv2LoadBalancerAttribute;
use \OpenAPI\OpenAPI\Models\Shared\LoadBalancerState;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAccessKeyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAccessKeySessionContext;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAccessKeySessionContextAttributes;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAccessKeySessionContextSessionIssuer;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAccessKeyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamAttachedManagedPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamGroupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamPolicyVersion;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamRoleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamInstanceProfile;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamInstanceProfileRole;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamPermissionsBoundary;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamRolePolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamUserDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsIamUserPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AwsKinesisStreamDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsKinesisStreamStreamEncryptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsKmsKeyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionCode;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionDeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionEnvironmentError;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionLayer;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionTracingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaFunctionVpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\AwsLambdaLayerVersionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsNetworkFirewallFirewallDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsNetworkFirewallFirewallSubnetMappingsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsNetworkFirewallFirewallPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyStatefulRuleGroupReferencesDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyStatelessCustomActionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\StatelessCustomActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\StatelessCustomPublishMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\StatelessCustomPublishMetricActionDimension;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicyStatelessRuleGroupReferencesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsNetworkFirewallRuleGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupVariables;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupVariablesIpSetsDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupVariablesPortSetsDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSource;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceListDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatefulRulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatefulRulesHeaderDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatefulRulesOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRulesAndCustomActionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceCustomActionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleDefinition;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributes;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributesDestinations;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributesSourcePorts;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributesSources;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupSourceStatelessRuleMatchAttributesTcpFlags;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainMasterUserOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainClusterConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainLogPublishingOption;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsOpenSearchServiceDomainVpcOptionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbClusterDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbClusterAssociatedRole;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbClusterMember;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbClusterOptionGroupMembership;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbDomainMembership;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbInstanceVpcSecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbClusterSnapshotDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbInstanceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbInstanceAssociatedRole;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbParameterGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSubnetGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSubnetGroupSubnet;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSubnetGroupSubnetAvailabilityZone;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbInstanceEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbOptionGroupMembership;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbPendingModifiedValues;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsPendingCloudWatchLogsExports;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbProcessorFeature;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbStatusInfo;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSecurityGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSecurityGroupEc2SecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSecurityGroupIpRange;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsDbSnapshotDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRdsEventSubscriptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterClusterNode;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterClusterParameterGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterClusterParameterStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterClusterSecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterClusterSnapshotCopyStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterDeferredMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterElasticIpStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterEndpoint;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterHsmStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterIamRole;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterLoggingStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterPendingModifiedValues;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterResizeInfo;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterRestoreStatus;
use \OpenAPI\OpenAPI\Models\Shared\AwsRedshiftClusterVpcSecurityGroup;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3AccountPublicAccessBlockDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketLoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfigurationDetail;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfigurationFilter;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfigurationS3KeyFilter;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfigurationS3KeyFilterRule;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketBucketVersioningConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketWebsiteConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketWebsiteConfigurationRedirectTo;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketWebsiteConfigurationRoutingRule;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketObjectLockConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketObjectLockConfigurationRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketServerSideEncryptionRule;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3BucketServerSideEncryptionByDefault;
use \OpenAPI\OpenAPI\Models\Shared\AwsS3ObjectDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSageMakerNotebookInstanceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSecretsManagerSecretDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSecretsManagerSecretRotationRules;
use \OpenAPI\OpenAPI\Models\Shared\AwsSnsTopicDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSnsTopicSubscription;
use \OpenAPI\OpenAPI\Models\Shared\AwsSqsQueueDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSsmPatchComplianceDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsSsmPatch;
use \OpenAPI\OpenAPI\Models\Shared\AwsSsmComplianceSummary;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRateBasedRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRateBasedRuleMatchPredicate;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRateBasedRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRateBasedRuleMatchPredicate;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRulePredicateListDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRuleGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRuleGroupRulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalRuleGroupRulesActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalWebAclDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalWebAclRulesListDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalWebAclRulesListActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRegionalWebAclRulesListOverrideActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRuleDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRulePredicateListDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRuleGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRuleGroupRulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafRuleGroupRulesActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafWebAclDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafWebAclRule;
use \OpenAPI\OpenAPI\Models\Shared\WafAction;
use \OpenAPI\OpenAPI\Models\Shared\WafExcludedRule;
use \OpenAPI\OpenAPI\Models\Shared\WafOverrideAction;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2RuleGroupDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2RulesDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2RulesActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2ActionAllowDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2CustomRequestHandlingDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2CustomHttpHeader;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2ActionBlockDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2CustomResponseDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2RulesActionCaptchaDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2RulesActionCountDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2VisibilityConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2WebAclDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2WebAclCaptchaConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsWafv2WebAclActionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsXrayEncryptionConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDetails;
use \OpenAPI\OpenAPI\Models\Shared\VolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\PartitionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Severity;
use \OpenAPI\OpenAPI\Models\Shared\ThreatIntelIndicator;
use \OpenAPI\OpenAPI\Models\Shared\ThreatIntelIndicatorCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThreatIntelIndicatorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Threat;
use \OpenAPI\OpenAPI\Models\Shared\FilePaths;
use \OpenAPI\OpenAPI\Models\Shared\VerificationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Vulnerability;
use \OpenAPI\OpenAPI\Models\Shared\Cvss;
use \OpenAPI\OpenAPI\Models\Shared\Adjustment;
use \OpenAPI\OpenAPI\Models\Shared\VulnerabilityFixAvailableEnum;
use \OpenAPI\OpenAPI\Models\Shared\VulnerabilityVendor;
use \OpenAPI\OpenAPI\Models\Shared\SoftwarePackage;
use \OpenAPI\OpenAPI\Models\Shared\Workflow;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchImportFindingsRequest();
    $request->requestBody = new BatchImportFindingsRequestBody();
    $request->requestBody->findings = [
        new AwsSecurityFinding(),
        new AwsSecurityFinding(),
        new AwsSecurityFinding(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->batchImportFindings($request);

    if ($response->batchImportFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateFindings

<p>Used by Security Hub customers to update information about their investigation into a finding. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AwsSecurityFindingIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequestBodyNote;
use \OpenAPI\OpenAPI\Models\Shared\RelatedFinding;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequestBodySeverity;
use \OpenAPI\OpenAPI\Models\Shared\SeverityLabelEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequestBodyVerificationStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateFindingsRequestBodyWorkflow;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateFindingsRequest();
    $request->requestBody = new BatchUpdateFindingsRequestBody();
    $request->requestBody->confidence = 616934;
    $request->requestBody->criticality = 386489;
    $request->requestBody->findingIdentifiers = [
        new AwsSecurityFindingIdentifier(),
        new AwsSecurityFindingIdentifier(),
        new AwsSecurityFindingIdentifier(),
        new AwsSecurityFindingIdentifier(),
    ];
    $request->requestBody->note = new BatchUpdateFindingsRequestBodyNote();
    $request->requestBody->note->text = 'saepe';
    $request->requestBody->note->updatedBy = 'fuga';
    $request->requestBody->relatedFindings = [
        new RelatedFinding(),
        new RelatedFinding(),
    ];
    $request->requestBody->severity = new BatchUpdateFindingsRequestBodySeverity();
    $request->requestBody->severity->label = SeverityLabelEnum::LOW;
    $request->requestBody->severity->normalized = 613064;
    $request->requestBody->severity->product = 4370.32;
    $request->requestBody->types = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->requestBody->userDefinedFields = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->requestBody->verificationState = BatchUpdateFindingsRequestBodyVerificationStateEnum::BENIGN_POSITIVE;
    $request->requestBody->workflow = new BatchUpdateFindingsRequestBodyWorkflow();
    $request->requestBody->workflow->status = WorkflowStatusEnum::NOTIFIED;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->batchUpdateFindings($request);

    if ($response->batchUpdateFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateStandardsControlAssociations

 For a batch of security controls and standards, this operation updates the enablement status of a control in a standard. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateStandardsControlAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateStandardsControlAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StandardsControlAssociationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AssociationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateStandardsControlAssociationsRequest();
    $request->requestBody = new BatchUpdateStandardsControlAssociationsRequestBody();
    $request->requestBody->standardsControlAssociationUpdates = [
        new StandardsControlAssociationUpdate(),
        new StandardsControlAssociationUpdate(),
        new StandardsControlAssociationUpdate(),
        new StandardsControlAssociationUpdate(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->batchUpdateStandardsControlAssociations($request);

    if ($response->batchUpdateStandardsControlAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createActionTarget

<p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActionTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateActionTargetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActionTargetRequest();
    $request->requestBody = new CreateActionTargetRequestBody();
    $request->requestBody->description = 'mollitia';
    $request->requestBody->id = '94677392-51aa-452c-bf5a-d019da1ffe78';
    $request->requestBody->name = 'Jose Moen';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->createActionTarget($request);

    if ($response->createActionTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFindingAggregator

<p>Used to enable finding aggregation. Must be called from the aggregation Region.</p> <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFindingAggregatorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFindingAggregatorRequest();
    $request->requestBody = new CreateFindingAggregatorRequestBody();
    $request->requestBody->regionLinkingMode = 'dolore';
    $request->requestBody->regions = [
        'dicta',
        'harum',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->createFindingAggregator($request);

    if ($response->createFindingAggregatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsight

<p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilter;
use \OpenAPI\OpenAPI\Models\Shared\IpFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\BooleanFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightRequest();
    $request->requestBody = new CreateInsightRequestBody();
    $request->requestBody->filters = new CreateInsightRequestBodyFilters();
    $request->requestBody->filters->awsAccountId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->companyName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceAssociatedStandardsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceSecurityControlId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->confidence = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->createdAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->criticality = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->description = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsConfidence = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsCriticality = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityLabel = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityOriginal = [
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsTypes = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->firstObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->generatorId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->id = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->keyword = [
        new KeywordFilter(),
        new KeywordFilter(),
        new KeywordFilter(),
    ];
    $request->requestBody->filters->lastObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->malwareName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwarePath = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareState = [
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationDomain = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV6 = [
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationPort = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->networkDirection = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceDomain = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV4 = [
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV6 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceMac = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourcePort = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->noteText = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->noteUpdatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->noteUpdatedBy = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->processName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processParentPid = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->processPath = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processPid = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->processTerminatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->productArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->productFields = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->productName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recommendationText = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recordState = [
        new StringFilter(),
    ];
    $request->requestBody->filters->region = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIamInstanceProfileArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceImageId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV4Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV6Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceKeyName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceLaunchedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceVpcId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyCreatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyPrincipalName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyUserName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamUserUserName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceContainerName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceDetailsOther = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourcePartition = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceRegion = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceTags = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceType = [
        new StringFilter(),
    ];
    $request->requestBody->filters->sample = [
        new BooleanFilter(),
        new BooleanFilter(),
        new BooleanFilter(),
    ];
    $request->requestBody->filters->severityLabel = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->severityNormalized = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->severityProduct = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->sourceUrl = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorCategory = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorLastObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSource = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSourceUrl = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorValue = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->title = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->type = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->updatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->userDefinedFields = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->verificationState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowState = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->groupByAttribute = 'aspernatur';
    $request->requestBody->name = 'Danielle Bosco';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->createInsight($request);

    if ($response->createInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMembers

<p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account.</p> <p> <code>CreateMembers</code> is always used to add accounts that are not organization members.</p> <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used in the following cases:</p> <ul> <li> <p>Security Hub is not configured to automatically add new organization accounts.</p> </li> <li> <p>The account was disassociated or deleted in Security Hub.</p> </li> </ul> <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you can use the <code>EnableSecurityHub</code> operation.</p> <p>For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the <code>InviteMembers</code> operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub.</p> <p>Accounts that are managed using Organizations do not receive an invitation. They automatically become a member account in Security Hub.</p> <ul> <li> <p>If the organization account does not have Security Hub enabled, then Security Hub and the default standards are automatically enabled. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p> </li> <li> <p>For organization accounts that already have Security Hub enabled, Security Hub does not make any other changes to those accounts. It does not change their enabled standards or controls.</p> </li> </ul> <p>A permissions policy is added that permits the administrator account to view the findings generated in the member account.</p> <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMembersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AccountDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMembersRequest();
    $request->requestBody = new CreateMembersRequestBody();
    $request->requestBody->accountDetails = [
        new AccountDetails(),
        new AccountDetails(),
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->createMembers($request);

    if ($response->createMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## declineInvitations

<p>Declines invitations to become a member account.</p> <p>A prospective member account uses this operation to decline an invitation to become a member.</p> <p>This operation is only called by member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeclineInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeclineInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeclineInvitationsRequest();
    $request->requestBody = new DeclineInvitationsRequestBody();
    $request->requestBody->accountIds = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->declineInvitations($request);

    if ($response->declineInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteActionTarget

<p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActionTargetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActionTargetRequest();
    $request->actionTargetArn = 'nihil';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->deleteActionTarget($request);

    if ($response->deleteActionTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFindingAggregator

<p>Deletes a finding aggregator. When you delete the finding aggregator, you stop finding aggregation.</p> <p>When you stop finding aggregation, findings that were already aggregated to the aggregation Region are still visible from the aggregation Region. New findings and finding updates are not aggregated. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFindingAggregatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFindingAggregatorRequest();
    $request->findingAggregatorArn = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->deleteFindingAggregator($request);

    if ($response->deleteFindingAggregatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInsight

Deletes the insight specified by the <code>InsightArn</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInsightRequest();
    $request->insightArn = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->deleteInsight($request);

    if ($response->deleteInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInvitations

<p>Deletes invitations received by the Amazon Web Services account to become a member account.</p> <p>A Security Hub administrator account can use this operation to delete invitations sent to one or more member accounts.</p> <p>This operation is only used to delete invitations that are sent to member accounts that aren't part of an organization. Organization accounts don't receive invitations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvitationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvitationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInvitationsRequest();
    $request->requestBody = new DeleteInvitationsRequestBody();
    $request->requestBody->accountIds = [
        'voluptate',
        'autem',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->deleteInvitations($request);

    if ($response->deleteInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMembers

<p>Deletes the specified member accounts from Security Hub.</p> <p>Can be used to delete member accounts that belong to an organization as well as member accounts that were invited manually.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMembersRequest();
    $request->requestBody = new DeleteMembersRequestBody();
    $request->requestBody->accountIds = [
        'aut',
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->deleteMembers($request);

    if ($response->deleteMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeActionTargets

Returns a list of the custom action targets in Security Hub in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActionTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActionTargetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeActionTargetsRequest();
    $request->maxResults = 'totam';
    $request->nextToken = 'dignissimos';
    $request->requestBody = new DescribeActionTargetsRequestBody();
    $request->requestBody->actionTargetArns = [
        'quis',
    ];
    $request->requestBody->maxResults = 199996;
    $request->requestBody->nextToken = 'eos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->describeActionTargets($request);

    if ($response->describeActionTargetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHub

Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHubRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHubRequest();
    $request->hubArn = 'hic';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->describeHub($request);

    if ($response->describeHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationConfiguration

Returns information about the Organizations configuration for Security Hub. Can only be called from a Security Hub administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationConfigurationRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->describeOrganizationConfiguration($request);

    if ($response->describeOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProducts

<p>Returns information about product integrations in Security Hub.</p> <p>You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration.</p> <p>If you do not provide an integration ARN, then the results include all of the available product integrations. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProductsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProductsRequest();
    $request->maxResults = 934214;
    $request->nextToken = 'modi';
    $request->productArn = 'iste';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->describeProducts($request);

    if ($response->describeProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStandards

<p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStandardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStandardsRequest();
    $request->maxResults = 311945;
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->describeStandards($request);

    if ($response->describeStandardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStandardsControls

<p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStandardsControlsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStandardsControlsRequest();
    $request->maxResults = 569574;
    $request->nextToken = 'cum';
    $request->standardsSubscriptionArn = 'voluptate';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->describeStandardsControls($request);

    if ($response->describeStandardsControlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableImportFindingsForProduct

Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableImportFindingsForProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableImportFindingsForProductRequest();
    $request->productSubscriptionArn = 'ipsa';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->disableImportFindingsForProduct($request);

    if ($response->disableImportFindingsForProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableOrganizationAdminAccount

Disables a Security Hub administrator account. Can only be called by the organization management account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableOrganizationAdminAccountRequest();
    $request->requestBody = new DisableOrganizationAdminAccountRequestBody();
    $request->requestBody->adminAccountId = 'natus';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->disableOrganizationAdminAccount($request);

    if ($response->disableOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableSecurityHub

<p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableSecurityHubRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableSecurityHubRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->disableSecurityHub($request);

    if ($response->disableSecurityHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFromAdministratorAccount

<p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFromAdministratorAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFromAdministratorAccountRequest();
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->disassociateFromAdministratorAccount($request);

    if ($response->disassociateFromAdministratorAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~disassociateFromMasterAccount~~

<p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p> <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFromMasterAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFromMasterAccountRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->disassociateFromMasterAccount($request);

    if ($response->disassociateFromMasterAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMembers

<p>Disassociates the specified member accounts from the associated administrator account.</p> <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMembersRequest();
    $request->requestBody = new DisassociateMembersRequestBody();
    $request->requestBody->accountIds = [
        'deserunt',
        'provident',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->disassociateMembers($request);

    if ($response->disassociateMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableImportFindingsForProduct

<p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableImportFindingsForProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableImportFindingsForProductRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableImportFindingsForProductRequest();
    $request->requestBody = new EnableImportFindingsForProductRequestBody();
    $request->requestBody->productArn = 'tempora';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->enableImportFindingsForProduct($request);

    if ($response->enableImportFindingsForProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableOrganizationAdminAccount

Designates the Security Hub administrator account for an organization. Can only be called by the organization management account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableOrganizationAdminAccountRequest();
    $request->requestBody = new EnableOrganizationAdminAccountRequestBody();
    $request->requestBody->adminAccountId = 'harum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->enableOrganizationAdminAccount($request);

    if ($response->enableOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableSecurityHub

<p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards:</p> <ul> <li> <p>Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0</p> </li> <li> <p>Amazon Web Services Foundational Security Best Practices</p> </li> </ul> <p>Other standards are not automatically enabled. </p> <p>To opt out of automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the <code>BatchDisableStandards</code> operation.</p> <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableSecurityHubRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableSecurityHubRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\EnableSecurityHubRequestBodyControlFindingGeneratorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableSecurityHubRequest();
    $request->requestBody = new EnableSecurityHubRequestBody();
    $request->requestBody->controlFindingGenerator = EnableSecurityHubRequestBodyControlFindingGeneratorEnum::STANDARD_CONTROL;
    $request->requestBody->enableDefaultStandards = false;
    $request->requestBody->tags = [
        'dolorem' => 'sapiente',
        'totam' => 'nihil',
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->enableSecurityHub($request);

    if ($response->enableSecurityHubResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdministratorAccount

<p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdministratorAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdministratorAccountRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->getAdministratorAccount($request);

    if ($response->getAdministratorAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnabledStandards

Returns a list of the standards that are currently enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnabledStandardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEnabledStandardsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnabledStandardsRequest();
    $request->maxResults = 'pariatur';
    $request->nextToken = 'soluta';
    $request->requestBody = new GetEnabledStandardsRequestBody();
    $request->requestBody->maxResults = 117531;
    $request->requestBody->nextToken = 'laborum';
    $request->requestBody->standardsSubscriptionArns = [
        'incidunt',
        'aspernatur',
        'dolores',
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getEnabledStandards($request);

    if ($response->getEnabledStandardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingAggregator

Returns the current finding aggregation configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingAggregatorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingAggregatorRequest();
    $request->findingAggregatorArn = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getFindingAggregator($request);

    if ($response->getFindingAggregatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindings

<p>Returns a list of findings that match the specified criteria.</p> <p>If finding aggregation is enabled, then when you call <code>GetFindings</code> from the aggregation Region, the results include all of the matching findings from both the aggregation Region and the linked Regions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilter;
use \OpenAPI\OpenAPI\Models\Shared\IpFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\BooleanFilter;
use \OpenAPI\OpenAPI\Models\Shared\SortCriterion;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsRequest();
    $request->maxResults = 'voluptatem';
    $request->nextToken = 'cumque';
    $request->requestBody = new GetFindingsRequestBody();
    $request->requestBody->filters = new GetFindingsRequestBodyFilters();
    $request->requestBody->filters->awsAccountId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->companyName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceAssociatedStandardsId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceSecurityControlId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceStatus = [
        new StringFilter(),
    ];
    $request->requestBody->filters->confidence = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->createdAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->criticality = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->description = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsConfidence = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsCriticality = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsProductArn = [
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityLabel = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityOriginal = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsTypes = [
        new StringFilter(),
    ];
    $request->requestBody->filters->firstObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->generatorId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->id = [
        new StringFilter(),
    ];
    $request->requestBody->filters->keyword = [
        new KeywordFilter(),
    ];
    $request->requestBody->filters->lastObservedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->malwareName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwarePath = [
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationDomain = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV6 = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationPort = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->networkDirection = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkProtocol = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceDomain = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV6 = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceMac = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourcePort = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->noteText = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->noteUpdatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->noteUpdatedBy = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->processName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->processParentPid = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->processPath = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processPid = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->processTerminatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->productArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->productFields = [
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->productName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recommendationText = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recordState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->region = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIamInstanceProfileArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceImageId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV4Addresses = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV6Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceKeyName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceLaunchedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceVpcId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyCreatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyPrincipalName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyUserName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamUserUserName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceContainerName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceDetailsOther = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourcePartition = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceRegion = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceTags = [
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->sample = [
        new BooleanFilter(),
        new BooleanFilter(),
        new BooleanFilter(),
        new BooleanFilter(),
    ];
    $request->requestBody->filters->severityLabel = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->severityNormalized = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->severityProduct = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->sourceUrl = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorCategory = [
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorLastObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSource = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSourceUrl = [
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorValue = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->title = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->type = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->updatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->userDefinedFields = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->verificationState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowStatus = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->maxResults = 774048;
    $request->requestBody->nextToken = 'corporis';
    $request->requestBody->sortCriteria = [
        new SortCriterion(),
        new SortCriterion(),
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getFindings($request);

    if ($response->getFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightResults

Lists the results of the Security Hub insight specified by the insight ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightResultsRequest();
    $request->insightArn = 'aspernatur';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getInsightResults($request);

    if ($response->getInsightResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsights

Lists and describes insights for the specified insight ARNs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightsRequest();
    $request->maxResults = 'impedit';
    $request->nextToken = 'aliquam';
    $request->requestBody = new GetInsightsRequestBody();
    $request->requestBody->insightArns = [
        'accusamus',
    ];
    $request->requestBody->maxResults = 79522;
    $request->requestBody->nextToken = 'non';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->getInsights($request);

    if ($response->getInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvitationsCount

Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInvitationsCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvitationsCountRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getInvitationsCount($request);

    if ($response->getInvitationsCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getMasterAccount~~

<p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p> <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMasterAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMasterAccountRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getMasterAccount($request);

    if ($response->getMasterAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMembers

<p>Returns the details for the Security Hub member accounts for the specified account IDs.</p> <p>An administrator account can be either the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually.</p> <p>The results include both member accounts that are managed using Organizations and accounts that were invited manually.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMembersRequest();
    $request->requestBody = new GetMembersRequestBody();
    $request->requestBody->accountIds = [
        'eius',
        'esse',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';

    $response = $sdk->sdk->getMembers($request);

    if ($response->getMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inviteMembers

<p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that the invitation is sent from.</p> <p>This operation is only used to invite accounts that do not belong to an organization. Organization accounts do not receive invitations.</p> <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p> <p>When the account owner enables Security Hub and accepts the invitation to become a member account, the administrator account can view the findings generated from the member account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InviteMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\InviteMembersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InviteMembersRequest();
    $request->requestBody = new InviteMembersRequestBody();
    $request->requestBody->accountIds = [
        'suscipit',
        'assumenda',
    ];
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->inviteMembers($request);

    if ($response->inviteMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnabledProductsForImport

Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnabledProductsForImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnabledProductsForImportRequest();
    $request->maxResults = 206594;
    $request->nextToken = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->listEnabledProductsForImport($request);

    if ($response->listEnabledProductsForImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindingAggregators

If finding aggregation is enabled, then <code>ListFindingAggregators</code> returns the ARN of the finding aggregator. You can run this operation from any Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingAggregatorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingAggregatorsRequest();
    $request->maxResults = 587600;
    $request->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->listFindingAggregators($request);

    if ($response->listFindingAggregatorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInvitations

<p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p> <p>This operation is only used by accounts that are managed by invitation. Accounts that are managed using the integration with Organizations do not receive invitations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInvitationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInvitationsRequest();
    $request->maxResults = 925164;
    $request->nextToken = 'aperiam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->listInvitations($request);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMembers

<p>Lists details about all member accounts for the current Security Hub administrator account.</p> <p>The results include both member accounts that belong to an organization and member accounts that were invited manually.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMembersRequest();
    $request->maxResults = 306810;
    $request->nextToken = 'odio';
    $request->onlyAssociated = false;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->listMembers($request);

    if ($response->listMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationAdminAccounts

Lists the Security Hub administrator accounts. Can only be called by the organization management account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationAdminAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationAdminAccountsRequest();
    $request->maxResults = 783648;
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->listOrganizationAdminAccounts($request);

    if ($response->listOrganizationAdminAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityControlDefinitions

 Lists all of the security controls that apply to a specified standard. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityControlDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityControlDefinitionsRequest();
    $request->maxResults = 277596;
    $request->nextToken = 'atque';
    $request->standardsArn = 'explicabo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->listSecurityControlDefinitions($request);

    if ($response->listSecurityControlDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStandardsControlAssociations

 Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStandardsControlAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStandardsControlAssociationsRequest();
    $request->maxResults = 903984;
    $request->nextToken = 'occaecati';
    $request->securityControlId = 'atque';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->listStandardsControlAssociations($request);

    if ($response->listStandardsControlAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags associated with a resource.

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
    $request->resourceArn = 'nam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
        'sit' => 'culpa',
    ];
    $request->resourceArn = 'tempore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'consectetur';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'esse';
    $request->tagKeys = [
        'a',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateActionTarget

Updates the name and description of a custom action target in Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActionTargetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActionTargetRequest();
    $request->actionTargetArn = 'error';
    $request->requestBody = new UpdateActionTargetRequestBody();
    $request->requestBody->description = 'sint';
    $request->requestBody->name = 'Rufus Crona';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->updateActionTarget($request);

    if ($response->updateActionTargetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFindingAggregator

<p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p> <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingAggregatorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingAggregatorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFindingAggregatorRequest();
    $request->requestBody = new UpdateFindingAggregatorRequestBody();
    $request->requestBody->findingAggregatorArn = 'tenetur';
    $request->requestBody->regionLinkingMode = 'quae';
    $request->requestBody->regions = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->updateFindingAggregator($request);

    if ($response->updateFindingAggregatorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFindings

<p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilter;
use \OpenAPI\OpenAPI\Models\Shared\IpFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\BooleanFilter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsRequestBodyNote;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFindingsRequestBodyRecordStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFindingsRequest();
    $request->requestBody = new UpdateFindingsRequestBody();
    $request->requestBody->filters = new UpdateFindingsRequestBodyFilters();
    $request->requestBody->filters->awsAccountId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->companyName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceAssociatedStandardsId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceSecurityControlId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->confidence = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->createdAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->criticality = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->description = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsConfidence = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsCriticality = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityLabel = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityOriginal = [
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsTypes = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->firstObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->generatorId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->id = [
        new StringFilter(),
    ];
    $request->requestBody->filters->keyword = [
        new KeywordFilter(),
        new KeywordFilter(),
    ];
    $request->requestBody->filters->lastObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->malwareName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->malwarePath = [
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationDomain = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV6 = [
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationPort = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->networkDirection = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceDomain = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV6 = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceMac = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourcePort = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->noteText = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->noteUpdatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->noteUpdatedBy = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processLaunchedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->processName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processParentPid = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->processPath = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processPid = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->processTerminatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->productArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->productFields = [
        new MapFilter(),
    ];
    $request->requestBody->filters->productName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recommendationText = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recordState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->region = [
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIamInstanceProfileArn = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV4Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV6Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceKeyName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceSubnetId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceVpcId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyCreatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyPrincipalName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyUserName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamUserUserName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerLaunchedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceContainerName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceDetailsOther = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourcePartition = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceRegion = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceTags = [
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->sample = [
        new BooleanFilter(),
        new BooleanFilter(),
        new BooleanFilter(),
    ];
    $request->requestBody->filters->severityLabel = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->severityNormalized = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->severityProduct = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->sourceUrl = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorCategory = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorLastObservedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSource = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSourceUrl = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorValue = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->title = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->type = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->updatedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->userDefinedFields = [
        new MapFilter(),
    ];
    $request->requestBody->filters->verificationState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowState = [
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowStatus = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->note = new UpdateFindingsRequestBodyNote();
    $request->requestBody->note->text = 'exercitationem';
    $request->requestBody->note->updatedBy = 'earum';
    $request->requestBody->recordState = UpdateFindingsRequestBodyRecordStateEnum::ARCHIVED;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->updateFindings($request);

    if ($response->updateFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInsight

Updates the Security Hub insight identified by the specified insight ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateFilter;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeywordFilter;
use \OpenAPI\OpenAPI\Models\Shared\IpFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilter;
use \OpenAPI\OpenAPI\Models\Shared\MapFilterComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\BooleanFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInsightRequest();
    $request->insightArn = 'dolore';
    $request->requestBody = new UpdateInsightRequestBody();
    $request->requestBody->filters = new UpdateInsightRequestBodyFilters();
    $request->requestBody->filters->awsAccountId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->companyName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceAssociatedStandardsId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceSecurityControlId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->complianceStatus = [
        new StringFilter(),
    ];
    $request->requestBody->filters->confidence = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->createdAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->criticality = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->description = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsConfidence = [
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsCriticality = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsRelatedFindingsProductArn = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityLabel = [
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsSeverityOriginal = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->findingProviderFieldsTypes = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->firstObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->generatorId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->id = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->keyword = [
        new KeywordFilter(),
        new KeywordFilter(),
    ];
    $request->requestBody->filters->lastObservedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->malwareName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwarePath = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareState = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->malwareType = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationDomain = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV4 = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationIpV6 = [
        new IpFilter(),
    ];
    $request->requestBody->filters->networkDestinationPort = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->networkDirection = [
        new StringFilter(),
    ];
    $request->requestBody->filters->networkProtocol = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceDomain = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV4 = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceIpV6 = [
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->networkSourceMac = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->networkSourcePort = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->noteText = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->noteUpdatedAt = [
        new DateFilter(),
    ];
    $request->requestBody->filters->noteUpdatedBy = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->processName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->processParentPid = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->processPath = [
        new StringFilter(),
    ];
    $request->requestBody->filters->processPid = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->processTerminatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->productArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->productFields = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->productName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recommendationText = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->recordState = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->region = [
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->relatedFindingsProductArn = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIamInstanceProfileArn = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceImageId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV4Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceIpV6Addresses = [
        new IpFilter(),
        new IpFilter(),
        new IpFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceKeyName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceSubnetId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsEc2InstanceVpcId = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyCreatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyPrincipalName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyStatus = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamAccessKeyUserName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsIamUserUserName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceAwsS3BucketOwnerName = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageId = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerImageName = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceContainerLaunchedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->resourceContainerName = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceDetailsOther = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceId = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourcePartition = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceRegion = [
        new StringFilter(),
    ];
    $request->requestBody->filters->resourceTags = [
        new MapFilter(),
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->resourceType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->sample = [
        new BooleanFilter(),
        new BooleanFilter(),
    ];
    $request->requestBody->filters->severityLabel = [
        new StringFilter(),
    ];
    $request->requestBody->filters->severityNormalized = [
        new NumberFilter(),
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->severityProduct = [
        new NumberFilter(),
        new NumberFilter(),
    ];
    $request->requestBody->filters->sourceUrl = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorCategory = [
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorLastObservedAt = [
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSource = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorSourceUrl = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorType = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->threatIntelIndicatorValue = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->title = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->type = [
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->filters->updatedAt = [
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
        new DateFilter(),
    ];
    $request->requestBody->filters->userDefinedFields = [
        new MapFilter(),
        new MapFilter(),
    ];
    $request->requestBody->filters->verificationState = [
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowState = [
        new StringFilter(),
    ];
    $request->requestBody->filters->workflowStatus = [
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
        new StringFilter(),
    ];
    $request->requestBody->groupByAttribute = 'praesentium';
    $request->requestBody->name = 'Alex Gottlieb';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->updateInsight($request);

    if ($response->updateInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfiguration

Used to update the configuration related to Organizations. Can only be called from a Security Hub administrator account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigurationRequestBodyAutoEnableStandardsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigurationRequest();
    $request->requestBody = new UpdateOrganizationConfigurationRequestBody();
    $request->requestBody->autoEnable = false;
    $request->requestBody->autoEnableStandards = UpdateOrganizationConfigurationRequestBodyAutoEnableStandardsEnum::DEFAULT;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->updateOrganizationConfiguration($request);

    if ($response->updateOrganizationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSecurityHubConfiguration

Updates configuration options for Security Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityHubConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityHubConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSecurityHubConfigurationRequest();
    $request->requestBody = new UpdateSecurityHubConfigurationRequestBody();
    $request->requestBody->autoEnableControls = false;
    $request->requestBody->controlFindingGenerator = UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum::SECURITY_CONTROL;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->updateSecurityHubConfiguration($request);

    if ($response->updateSecurityHubConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStandardsControl

Used to control whether an individual security standard control is enabled or disabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStandardsControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStandardsControlRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStandardsControlRequestBodyControlStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStandardsControlRequest();
    $request->requestBody = new UpdateStandardsControlRequestBody();
    $request->requestBody->controlStatus = UpdateStandardsControlRequestBodyControlStatusEnum::DISABLED;
    $request->requestBody->disabledReason = 'error';
    $request->standardsControlArn = 'hic';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->updateStandardsControl($request);

    if ($response->updateStandardsControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
