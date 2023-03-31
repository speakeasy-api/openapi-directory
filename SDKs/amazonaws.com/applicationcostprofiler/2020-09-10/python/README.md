# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/applicationcostprofiler/2020-09-10/python
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
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    report_id="illum",
)
    
res = s.delete_report_definition(req)

if res.delete_report_definition_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_report_definition` - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
* `get_report_definition` - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
* `import_application_usage` - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
* `list_report_definitions` - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
* `put_report_definition` - Creates the report definition for a report in Application Cost Profiler.
* `update_report_definition` - Updates existing report in AWS Application Cost Profiler.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
