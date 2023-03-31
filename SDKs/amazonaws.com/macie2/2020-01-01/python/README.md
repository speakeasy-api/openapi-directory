# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/macie2/2020-01-01/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcceptInvitationRequest(
    request_body=operations.AcceptInvitationRequestBody(
        administrator_account_id="corrupti",
        invitation_id="provident",
        master_account="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
)
    
res = s.accept_invitation(req)

if res.accept_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `accept_invitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `batch_get_custom_data_identifiers` - Retrieves information about one or more custom data identifiers.
* `create_allow_list` - Creates and defines the settings for an allow list.
* `create_classification_job` - Creates and defines the settings for a classification job.
* `create_custom_data_identifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `create_findings_filter` - Creates and defines the criteria and other settings for a findings filter.
* `create_invitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `create_member` - Associates an account with an Amazon Macie administrator account.
* `create_sample_findings` - Creates sample findings.
* `decline_invitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `delete_allow_list` - Deletes an allow list.
* `delete_custom_data_identifier` - Soft deletes a custom data identifier.
* `delete_findings_filter` - Deletes a findings filter.
* `delete_invitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `delete_member` - Deletes the association between an Amazon Macie administrator account and an account.
* `describe_buckets` - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* `describe_classification_job` - Retrieves the status and settings for a classification job.
* `describe_organization_configuration` - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* `disable_macie` - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* `disable_organization_admin_account` - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `disassociate_from_administrator_account` - Disassociates a member account from its Amazon Macie administrator account.
* `disassociate_from_master_account` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `disassociate_member` - Disassociates an Amazon Macie administrator account from a member account.
* `enable_macie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `enable_organization_admin_account` - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* `get_administrator_account` - Retrieves information about the Amazon Macie administrator account for an account.
* `get_allow_list` - Retrieves the settings and status of an allow list.
* `get_automated_discovery_configuration` - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* `get_bucket_statistics` - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* `get_classification_export_configuration` - Retrieves the configuration settings for storing data classification results.
* `get_classification_scope` - Retrieves the classification scope settings for an account.
* `get_custom_data_identifier` - Retrieves the criteria and other settings for a custom data identifier.
* `get_finding_statistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `get_findings` - Retrieves the details of one or more findings.
* `get_findings_filter` - Retrieves the criteria and other settings for a findings filter.
* `get_findings_publication_configuration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `get_invitations_count` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `get_macie_session` - Retrieves the status and configuration settings for an Amazon Macie account.
* `get_master_account` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `get_member` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `get_resource_profile` - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* `get_reveal_configuration` - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `get_sensitive_data_occurrences` - Retrieves occurrences of sensitive data reported by a finding.
* `get_sensitive_data_occurrences_availability` - Checks whether occurrences of sensitive data can be retrieved for a finding.
* `get_sensitivity_inspection_template` -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* `get_usage_statistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `get_usage_totals` - Retrieves (queries) aggregated usage data for an account.
* `list_allow_lists` - Retrieves a subset of information about all the allow lists for an account.
* `list_classification_jobs` - Retrieves a subset of information about one or more classification jobs.
* `list_classification_scopes` - Retrieves a subset of information about the classification scope for an account.
* `list_custom_data_identifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `list_findings` - Retrieves a subset of information about one or more findings.
* `list_findings_filters` - Retrieves a subset of information about all the findings filters for an account.
* `list_invitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `list_managed_data_identifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `list_members` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `list_organization_admin_accounts` - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* `list_resource_profile_artifacts` - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* `list_resource_profile_detections` - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* `list_sensitivity_inspection_templates` -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* `list_tags_for_resource` - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* `put_classification_export_configuration` - Creates or updates the configuration settings for storing data classification results.
* `put_findings_publication_configuration` - Updates the configuration settings for publishing findings to Security Hub.
* `search_resources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `tag_resource` - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* `test_custom_data_identifier` - Tests a custom data identifier.
* `untag_resource` - Removes one or more tags (keys and values) from an Amazon Macie resource.
* `update_allow_list` - Updates the settings for an allow list.
* `update_automated_discovery_configuration` - Enables or disables automated sensitive data discovery for an account.
* `update_classification_job` - Changes the status of a classification job.
* `update_classification_scope` - Updates the classification scope settings for an account.
* `update_findings_filter` - Updates the criteria and other settings for a findings filter.
* `update_macie_session` - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* `update_member_session` - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* `update_organization_configuration` - Updates the Amazon Macie configuration settings for an organization in Organizations.
* `update_resource_profile` - Updates the sensitivity score for an S3 bucket.
* `update_resource_profile_detections` - Updates the sensitivity scoring settings for an S3 bucket.
* `update_reveal_configuration` - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* `update_sensitivity_inspection_template` -  <p>Updates the settings for the sensitivity inspection template for an account.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
