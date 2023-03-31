# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/workspaces-web/2020-07-08/python
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


req = operations.AssociateBrowserSettingsRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    browser_settings_arn="illum",
    portal_arn="vel",
)
    
res = s.associate_browser_settings(req)

if res.associate_browser_settings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_browser_settings` - Associates a browser settings resource with a web portal.
* `associate_network_settings` - Associates a network settings resource with a web portal.
* `associate_trust_store` - Associates a trust store with a web portal.
* `associate_user_access_logging_settings` - Associates a user access logging settings resource with a web portal.
* `associate_user_settings` - Associates a user settings resource with a web portal.
* `create_browser_settings` - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* `create_identity_provider` - Creates an identity provider resource that is then associated with a web portal.
* `create_network_settings` - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* `create_portal` - Creates a web portal.
* `create_trust_store` - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* `create_user_access_logging_settings` - Creates a user access logging settings resource that can be associated with a web portal.
* `create_user_settings` - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* `delete_browser_settings` - Deletes browser settings.
* `delete_identity_provider` - Deletes the identity provider.
* `delete_network_settings` - Deletes network settings.
* `delete_portal` - Deletes a web portal.
* `delete_trust_store` - Deletes the trust store.
* `delete_user_access_logging_settings` - Deletes user access logging settings.
* `delete_user_settings` - Deletes user settings.
* `disassociate_browser_settings` - Disassociates browser settings from a web portal.
* `disassociate_network_settings` - Disassociates network settings from a web portal.
* `disassociate_trust_store` - Disassociates a trust store from a web portal.
* `disassociate_user_access_logging_settings` - Disassociates user access logging settings from a web portal.
* `disassociate_user_settings` - Disassociates user settings from a web portal.
* `get_browser_settings` - Gets browser settings.
* `get_identity_provider` - Gets the identity provider.
* `get_network_settings` - Gets the network settings.
* `get_portal` - Gets the web portal.
* `get_portal_service_provider_metadata` - Gets the service provider metadata.
* `get_trust_store` - Gets the trust store.
* `get_trust_store_certificate` - Gets the trust store certificate.
* `get_user_access_logging_settings` - Gets user access logging settings.
* `get_user_settings` - Gets user settings.
* `list_browser_settings` - Retrieves a list of browser settings.
* `list_identity_providers` - Retrieves a list of identity providers for a specific web portal.
* `list_network_settings` - Retrieves a list of network settings.
* `list_portals` - Retrieves a list or web portals.
* `list_tags_for_resource` - Retrieves a list of tags for a resource.
* `list_trust_store_certificates` - Retrieves a list of trust store certificates.
* `list_trust_stores` - Retrieves a list of trust stores.
* `list_user_access_logging_settings` - Retrieves a list of user access logging settings.
* `list_user_settings` - Retrieves a list of user settings.
* `tag_resource` - Adds or overwrites one or more tags for the specified resource.
* `untag_resource` - Removes one or more tags from the specified resource.
* `update_browser_settings` - Updates browser settings.
* `update_identity_provider` - Updates the identity provider. 
* `update_network_settings` - Updates network settings.
* `update_portal` - Updates a web portal.
* `update_trust_store` - Updates the trust store.
* `update_user_access_logging_settings` - Updates the user access logging settings.
* `update_user_settings` - Updates the user settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
