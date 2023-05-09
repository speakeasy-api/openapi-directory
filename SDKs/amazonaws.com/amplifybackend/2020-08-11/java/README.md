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
import org.openapis.openapi.models.operations.CloneBackendRequest;
import org.openapis.openapi.models.operations.CloneBackendRequestBody;
import org.openapis.openapi.models.operations.CloneBackendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneBackendRequest req = new CloneBackendRequest(                new CloneBackendRequestBody("provident");, "distinctio", "quibusdam") {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            CloneBackendResponse res = sdk.cloneBackend(req);

            if (res.cloneBackendResponse != null) {
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

* [cloneBackend](docs/sdk/README.md#clonebackend) - This operation clones an existing backend.
* [createBackend](docs/sdk/README.md#createbackend) - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* [createBackendAPI](docs/sdk/README.md#createbackendapi) - Creates a new backend API resource.
* [createBackendAuth](docs/sdk/README.md#createbackendauth) - Creates a new backend authentication resource.
* [createBackendConfig](docs/sdk/README.md#createbackendconfig) - Creates a config object for a backend.
* [createBackendStorage](docs/sdk/README.md#createbackendstorage) - Creates a backend storage resource.
* [createToken](docs/sdk/README.md#createtoken) - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* [deleteBackend](docs/sdk/README.md#deletebackend) - Removes an existing environment from your Amplify project.
* [deleteBackendAPI](docs/sdk/README.md#deletebackendapi) - Deletes an existing backend API resource.
* [deleteBackendAuth](docs/sdk/README.md#deletebackendauth) - Deletes an existing backend authentication resource.
* [deleteBackendStorage](docs/sdk/README.md#deletebackendstorage) - Removes the specified backend storage resource.
* [deleteToken](docs/sdk/README.md#deletetoken) - Deletes the challenge token based on the given appId and sessionId.
* [generateBackendAPIModels](docs/sdk/README.md#generatebackendapimodels) - Generates a model schema for an existing backend API resource.
* [getBackend](docs/sdk/README.md#getbackend) - Provides project-level details for your Amplify UI project.
* [getBackendAPI](docs/sdk/README.md#getbackendapi) - Gets the details for a backend API.
* [getBackendAPIModels](docs/sdk/README.md#getbackendapimodels) - Gets a model introspection schema for an existing backend API resource.
* [getBackendAuth](docs/sdk/README.md#getbackendauth) - Gets a backend auth details.
* [getBackendJob](docs/sdk/README.md#getbackendjob) - Returns information about a specific job.
* [getBackendStorage](docs/sdk/README.md#getbackendstorage) - Gets details for a backend storage resource.
* [getToken](docs/sdk/README.md#gettoken) - Gets the challenge token based on the given appId and sessionId.
* [importBackendAuth](docs/sdk/README.md#importbackendauth) - Imports an existing backend authentication resource.
* [importBackendStorage](docs/sdk/README.md#importbackendstorage) - Imports an existing backend storage resource.
* [listBackendJobs](docs/sdk/README.md#listbackendjobs) - Lists the jobs for the backend of an Amplify app.
* [listS3Buckets](docs/sdk/README.md#lists3buckets) - The list of S3 buckets in your account.
* [removeAllBackends](docs/sdk/README.md#removeallbackends) - Removes all backend environments from your Amplify project.
* [removeBackendConfig](docs/sdk/README.md#removebackendconfig) - Removes the AWS resources required to access the Amplify Admin UI.
* [updateBackendAPI](docs/sdk/README.md#updatebackendapi) - Updates an existing backend API resource.
* [updateBackendAuth](docs/sdk/README.md#updatebackendauth) - Updates an existing backend authentication resource.
* [updateBackendConfig](docs/sdk/README.md#updatebackendconfig) - Updates the AWS resources required to access the Amplify Admin UI.
* [updateBackendJob](docs/sdk/README.md#updatebackendjob) - Updates a specific job.
* [updateBackendStorage](docs/sdk/README.md#updatebackendstorage) - Updates an existing backend storage resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
