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

import org.openapis.openapi.models.operations.GetCategoryRatedAreasQueryParams;
import org.openapis.openapi.models.operations.GetCategoryRatedAreasRequest;
import org.openapis.openapi.models.operations.GetCategoryRatedAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoryRatedAreasRequest req = new GetCategoryRatedAreasRequest() {{
                queryParams = new GetCategoryRatedAreasQueryParams() {{
                    latitude = 5488.14;
                    longitude = 5928.45;
                }};
            }};            

            GetCategoryRatedAreasResponse res = sdk.categoryRatedAreas.getCategoryRatedAreas(req);

            if (res.getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### categoryRatedAreas

* `getCategoryRatedAreas` - GET category rated areas
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
