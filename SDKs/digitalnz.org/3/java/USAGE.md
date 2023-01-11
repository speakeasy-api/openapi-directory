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
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetRecordsFormatRequest req = new GetRecordsFormatRequest() {{
                pathParams = new GetRecordsFormatPathParams() {{
                    format = "xml";
                }};
                queryParams = new GetRecordsFormatQueryParams() {{
                    andCategory = "Audio";
                    andCentury = "praesentium";
                    andCollection = "sint";
                    andContentPartner = "qui";
                    andCreator = "atque";
                    andDate = "iusto";
                    andDcType = "rem";
                    andDecade = "dolorum";
                    andFormat = "ut";
                    andHasLargeThumbnailUrl = "Y";
                    andHasLatLng = false;
                    andIsCommercialUse = true;
                    andOrFilterField = "maiores";
                    andPlacename = "ab";
                    andPrimaryCollection = "amet";
                    andSubject = "fugiat";
                    andTitle = "est";
                    andUsage = "Share";
                    andYear = "consequatur";
                    apiKey = "quia";
                    direction = "asc";
                    excludeFiltersFromFacets = false;
                    facets = new openapisdk.models.shared.FieldsEnum2[]() {{
                        add("creator"),
                        add("century"),
                    }};
                    facetsPage = 7749255547755295069;
                    facetsPerPage = 2063540456602819;
                    fields = "corporis";
                    geoBbox = "quaerat";
                    page = 693839712308138010;
                    perPage = 5270800729784320551;
                    sort = "syndication_date";
                    text = "quam";
                    withoutFilterField = "autem";
                }};
            }};

            GetRecordsFormatResponse res = sdk.apiCalls.getRecordsFormat(req);

            if (res.getRecordsFormat200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->