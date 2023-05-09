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
import org.openapis.openapi.models.operations.CreateCliTokenRequest;
import org.openapis.openapi.models.operations.CreateCliTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCliTokenRequest req = new CreateCliTokenRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CreateCliTokenResponse res = sdk.createCliToken(req);

            if (res.createCliTokenResponse != null) {
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

* [createCliToken](docs/sdk/README.md#createclitoken) - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* [createEnvironment](docs/sdk/README.md#createenvironment) - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [createWebLoginToken](docs/sdk/README.md#createweblogintoken) - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [getEnvironment](docs/sdk/README.md#getenvironment) - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [listEnvironments](docs/sdk/README.md#listenvironments) - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* [publishMetrics](docs/sdk/README.md#publishmetrics) -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* [tagResource](docs/sdk/README.md#tagresource) - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* [untagResource](docs/sdk/README.md#untagresource) - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
