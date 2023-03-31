# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/cdcgov.local/prime-data-hub/0.2.0-oas3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteSettingsOrganizationsOrganizationNameRequest(
    organization_name="corrupti",
)
    
res = s.delete_settings_organizations_organization_name_(req, operations.DeleteSettingsOrganizationsOrganizationNameSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.organization is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_settings_organizations_organization_name_` - Delete an organization (and the associated receivers and senders)
* `delete_settings_organizations_organization_name_receivers_receiver_name_` - Delete a receiver
* `delete_settings_organizations_organization_name_senders_sender_name_` - Delete a sender
* `get_settings_organizations` - The settings for all organizations of the system. Must have admin access.
* `get_settings_organizations_organization_name_` - A single organization settings
* `get_settings_organizations_organization_name_receivers` - A list of receivers and their current settings
* `get_settings_organizations_organization_name_receivers_receiver_name_` - The settings of a single of receiver
* `get_settings_organizations_organization_name_senders` - A list of senders
* `get_settings_organizations_organization_name_senders_sender_name_` - The settings of a single of sender
* `head_settings_organizations` - Retrived the last modified for all settings of the system. Must have admin access.
* `post_reports` - Post a report to the data hub
* `put_settings_organizations_organization_name_` - Create or update the direct settings associated with an organization
* `put_settings_organizations_organization_name_receivers_receiver_name_` - Update a single reciever
* `put_settings_organizations_organization_name_senders_sender_name_` - Update a single sender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
