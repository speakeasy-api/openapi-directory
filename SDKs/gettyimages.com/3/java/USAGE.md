<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetV3AffiliatesSearchImagesRequest req = new GetV3AffiliatesSearchImagesRequest() {{
                queryParams = new GetV3AffiliatesSearchImagesQueryParams() {{
                    phrase = "sit";
                    style = "photography";
                }};
                headers = new GetV3AffiliatesSearchImagesHeaders() {{
                    acceptLanguage = "culpa";
                }};
            }};

            GetV3AffiliatesSearchImagesResponse res = sdk.affiliateSearch.getV3AffiliatesSearchImages(req);

            if (res.affiliateImageSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->