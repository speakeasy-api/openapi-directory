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

import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBodyFile;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequestBody;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsRequest;
import org.openapis.openapi.models.operations.FilterFileDataStoppingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilterFileDataStoppingsRequest req = new FilterFileDataStoppingsRequest() {{
                requestBody = new FilterFileDataStoppingsRequestBody() {{
                    file = new FilterFileDataStoppingsRequestBodyFile() {{
                        content = "corrupti".getBytes();
                        file = "provident";
                    }};
                }};
                type = "distinctio";
            }}            

            FilterFileDataStoppingsResponse res = sdk.exude.filterFileDataStoppings(req);

            if (res.exudeResponseBean.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### exude

* `filterFileDataStoppings` - Filter the stopping words from the provided input file
* `filterStoppings` - Filter the stopping words from the provided input data or links
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
