# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/finspace/2021-03-12/python
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


req = operations.CreateEnvironmentRequest(
    request_body=operations.CreateEnvironmentRequestBody(
        data_bundles=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        description="unde",
        federation_mode="LOCAL",
        federation_parameters=operations.CreateEnvironmentRequestBodyFederationParameters(
            application_call_back_url="corrupti",
            attribute_map={
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            federation_provider_name="delectus",
            federation_urn="tempora",
            saml_metadata_document="suscipit",
            saml_metadata_url="molestiae",
        ),
        kms_key_id="minus",
        name="placeat",
        superuser_parameters=operations.CreateEnvironmentRequestBodySuperuserParameters(
            email_address="voluptatum",
            first_name="Jaycee",
            last_name="Mante",
        ),
        tags={
            "recusandae": "temporibus",
            "ab": "quis",
        },
    ),
    x_amz_algorithm="veritatis",
    x_amz_content_sha256="deserunt",
    x_amz_credential="perferendis",
    x_amz_date="ipsam",
    x_amz_security_token="repellendus",
    x_amz_signature="sapiente",
    x_amz_signed_headers="quo",
)
    
res = s.create_environment(req)

if res.create_environment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_environment` - Create a new FinSpace environment.
* `delete_environment` - Delete an FinSpace environment.
* `get_environment` - Returns the FinSpace environment object.
* `list_environments` - A list of all of your FinSpace environments.
* `list_tags_for_resource` - A list of all tags for a resource.
* `tag_resource` - Adds metadata tags to a FinSpace resource.
* `untag_resource` - Removes metadata tags from a FinSpace resource.
* `update_environment` - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
