<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRecordsFormatPathParams;
import org.openapis.openapi.models.operations.GetRecordsFormatAndCategoryEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatAndHasLargeThumbnailUrlEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatAndHasLatLngEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatAndUsageEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatDirectionEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatFacetsEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatSortEnum;
import org.openapis.openapi.models.operations.GetRecordsFormatQueryParams;
import org.openapis.openapi.models.operations.GetRecordsFormatHeaders;
import org.openapis.openapi.models.operations.GetRecordsFormatRequest;
import org.openapis.openapi.models.operations.GetRecordsFormatResponse;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetRecordsFormatRequest req = new GetRecordsFormatRequest() {{
                pathParams = new GetRecordsFormatPathParams() {{
                    format = "xml";
                }};
                queryParams = new GetRecordsFormatQueryParams() {{
                    andCategory = "Research papers";
                    andCentury = "distinctio";
                    andCollection = "quibusdam";
                    andContentPartner = "unde";
                    andCreator = "nulla";
                    andDate = "corrupti";
                    andDcType = "illum";
                    andDecade = "vel";
                    andFormat = "error";
                    andHasLargeThumbnailUrl = "Y";
                    andHasLatLng = "false";
                    andIsCommercialUse = false;
                    andOrFilterField = "suscipit";
                    andPlacename = "iure";
                    andPrimaryCollection = "magnam";
                    andSubject = "debitis";
                    andTitle = "ipsa";
                    andUsage = "Unknown";
                    andYear = "tempora";
                    direction = "asc";
                    excludeFiltersFromFacets = false;
                    facets = new org.openapis.openapi.models.operations.GetRecordsFormatFacetsEnum[]{{
                        add("copyright"),
                        add("copyright"),
                    }};
                    facetsPage = 528895;
                    facetsPerPage = 479977;
                    fields = "excepturi";
                    geoBbox = "nisi";
                    page = 925597;
                    perPage = 836079;
                    sort = "syndication_date";
                    text = "quis";
                    withoutFilterField = "veritatis";
                }};
                headers = new GetRecordsFormatHeaders() {{
                    authenticationToken = "deserunt";
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