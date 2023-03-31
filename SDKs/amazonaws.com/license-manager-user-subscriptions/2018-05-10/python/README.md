# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/license-manager-user-subscriptions/2018-05-10/python
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


req = operations.AssociateUserRequest(
    request_body=operations.AssociateUserRequestBody(
        domain="corrupti",
        identity_provider=operations.AssociateUserRequestBodyIdentityProvider(
            active_directory_identity_provider=shared.ActiveDirectoryIdentityProvider(
                directory_id="provident",
            ),
        ),
        instance_id="distinctio",
        username="Rosalinda_Mitchell84",
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
)
    
res = s.associate_user(req)

if res.associate_user_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_user` - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* `deregister_identity_provider` - Deregisters the identity provider from providing user-based subscriptions.
* `disassociate_user` - Disassociates the user from an EC2 instance providing user-based subscriptions.
* `list_identity_providers` - Lists the identity providers for user-based subscriptions.
* `list_instances` - Lists the EC2 instances providing user-based subscriptions.
* `list_product_subscriptions` - Lists the user-based subscription products available from an identity provider.
* `list_user_associations` - Lists user associations for an identity provider.
* `register_identity_provider` - Registers an identity provider for user-based subscriptions.
* `start_product_subscription` - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* `stop_product_subscription` - Stops a product subscription for a user with the specified identity provider.
* `update_identity_provider_settings` - Updates additional product configuration settings for the registered identity provider.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
