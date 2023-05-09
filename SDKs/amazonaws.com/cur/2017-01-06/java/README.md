# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteReportDefinitionResponse;
import org.openapis.openapi.models.operations.DeleteReportDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest(                new DeleteReportDefinitionRequest() {{
                                reportName = "provident";
                            }};, DeleteReportDefinitionXAmzTargetEnum.AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteReportDefinitionResponse res = sdk.deleteReportDefinition(req);

            if (res.deleteReportDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [deleteReportDefinition](docs/sdk/README.md#deletereportdefinition) - Deletes the specified report.
* [describeReportDefinitions](docs/sdk/README.md#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [modifyReportDefinition](docs/sdk/README.md#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [putReportDefinition](docs/sdk/README.md#putreportdefinition) - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
