# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/elastic-inference/2017-07-25/python
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


req = operations.DescribeAcceleratorOfferingsRequest(
    request_body=operations.DescribeAcceleratorOfferingsRequestBody(
        accelerator_types=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        location_type="availability-zone",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.describe_accelerator_offerings(req)

if res.describe_accelerator_offerings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `describe_accelerator_offerings` -  Describes the locations in which a given accelerator type or set of types is present in a given region. 
* `describe_accelerator_types` -  Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput. 
* `describe_accelerators` -  Describes information over a provided set of accelerators belonging to an account. 
* `list_tags_for_resource` -  Returns all tags of an Elastic Inference Accelerator. 
* `tag_resource` -  Adds the specified tags to an Elastic Inference Accelerator. 
* `untag_resource` -  Removes the specified tags from an Elastic Inference Accelerator. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
