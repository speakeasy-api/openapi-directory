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
import org.openapis.openapi.models.operations.CancelJobRunRequest;
import org.openapis.openapi.models.operations.CancelJobRunResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRunRequest req = new CancelJobRunRequest("provident", "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            CancelJobRunResponse res = sdk.cancelJobRun(req);

            if (res.cancelJobRunResponse != null) {
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

* [cancelJobRun](docs/sdk/README.md#canceljobrun) - Cancels a job run.
* [createApplication](docs/sdk/README.md#createapplication) - Creates an application.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* [getApplication](docs/sdk/README.md#getapplication) - Displays detailed information about a specified application.
* [getDashboardForJobRun](docs/sdk/README.md#getdashboardforjobrun) - Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.
* [getJobRun](docs/sdk/README.md#getjobrun) - Displays detailed information about a job run.
* [listApplications](docs/sdk/README.md#listapplications) - Lists applications based on a set of parameters.
* [listJobRuns](docs/sdk/README.md#listjobruns) - Lists job runs based on a set of parameters.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to the resources.
* [startApplication](docs/sdk/README.md#startapplication) - Starts a specified application and initializes initial capacity if configured.
* [startJobRun](docs/sdk/README.md#startjobrun) - Starts a job run.
* [stopApplication](docs/sdk/README.md#stopapplication) - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from resources.
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates a specified application. An application has to be in a stopped or created state in order to be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
