# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/cur/2017-01-06/python
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


req = operations.DeleteReportDefinitionRequest(
    delete_report_definition_request=shared.DeleteReportDefinitionRequest(
        report_name="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="AWSOrigamiServiceGatewayService.DeleteReportDefinition",
)
    
res = s.delete_report_definition(req)

if res.delete_report_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_report_definition` - Deletes the specified report.
* `describe_report_definitions` - Lists the AWS Cost and Usage reports available to this account.
* `modify_report_definition` - Allows you to programatically update your report preferences.
* `put_report_definition` - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
