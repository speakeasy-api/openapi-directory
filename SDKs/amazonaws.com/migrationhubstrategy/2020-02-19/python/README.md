# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/migrationhubstrategy/2020-02-19/python
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


req = operations.GetApplicationComponentDetailsRequest(
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="provident",
    x_amz_credential="distinctio",
    x_amz_date="quibusdam",
    x_amz_security_token="unde",
    x_amz_signature="nulla",
    x_amz_signed_headers="corrupti",
    application_component_id="illum",
)
    
res = s.get_application_component_details(req)

if res.get_application_component_details_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_application_component_details` -  Retrieves details about an application component. 
* `get_application_component_strategies` -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* `get_assessment` -  Retrieves the status of an on-going assessment. 
* `get_import_file_task` -  Retrieves the details about a specific import task. 
* `get_latest_assessment_id` - Retrieve the latest ID of a specific assessment task.
* `get_portfolio_preferences` -  Retrieves your migration and modernization preferences. 
* `get_portfolio_summary` -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* `get_recommendation_report_details` -  Retrieves detailed information about the specified recommendation report. 
* `get_server_details` -  Retrieves detailed information about a specified server. 
* `get_server_strategies` -  Retrieves recommended strategies and tools for the specified server. 
* `list_application_components` -  Retrieves a list of all the application components (processes). 
* `list_collectors` -  Retrieves a list of all the installed collectors. 
* `list_import_file_task` -  Retrieves a list of all the imports performed. 
* `list_servers` -  Returns a list of all the servers. 
* `put_portfolio_preferences` -  Saves the specified migration and modernization preferences. 
* `start_assessment` -  Starts the assessment of an on-premises environment. 
* `start_import_file_task` -  Starts a file import. 
* `start_recommendation_report_generation` -  Starts generating a recommendation report. 
* `stop_assessment` -  Stops the assessment of an on-premises environment. 
* `update_application_component_config` -  Updates the configuration of an application component. 
* `update_server_config` -  Updates the configuration of the specified server. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
