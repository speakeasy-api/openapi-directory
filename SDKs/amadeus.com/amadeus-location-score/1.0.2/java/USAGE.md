<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCategoryRatedAreasRequest;
import org.openapis.openapi.models.operations.GetCategoryRatedAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCategoryRatedAreasRequest req = new GetCategoryRatedAreasRequest() {{
                latitude = 5488.14;
                longitude = 5928.45;
            }}            

            GetCategoryRatedAreasResponse res = sdk.categoryRatedAreas.getCategoryRatedAreas(req);

            if (res.getCategoryRatedAreas200ApplicationVndAmadeusPlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->