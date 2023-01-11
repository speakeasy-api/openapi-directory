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
                    format = "json";
                }};
                queryParams = new GetRecordsFormatQueryParams() {{
                    andCategory = "Manuscripts";
                    andCentury = "culpa";
                    andCollection = "expedita";
                    andContentPartner = "consequuntur";
                    andCreator = "dolor";
                    andDate = "expedita";
                    andDcType = "voluptas";
                    andDecade = "fugit";
                    andFormat = "et";
                    andHasLargeThumbnailUrl = "Y";
                    andHasLatLng = true;
                    andIsCommercialUse = false;
                    andOrFilterField = "debitis";
                    andPlacename = "voluptatum";
                    andPrimaryCollection = "et";
                    andSubject = "ut";
                    andTitle = "dolorem";
                    andUsage = "Share";
                    andYear = "voluptate";
                    apiKey = "iste";
                    direction = "asc";
                    excludeFiltersFromFacets = true;
                    facets = new openapisdk.models.shared.FieldsEnum2[]() {{
                        add("usage"),
                    }};
                    facetsPage = 6392442863481646880;
                    facetsPerPage = 3706853784096366226;
                    fields = "odio";
                    geoBbox = "dolore";
                    page = 4035568504096476779;
                    perPage = 959367522974354090;
                    sort = "syndication_date";
                    text = "totam";
                    withoutFilterField = "commodi";
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