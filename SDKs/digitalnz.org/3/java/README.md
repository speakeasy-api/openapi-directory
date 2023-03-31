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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apiCalls

* `getRecordsFormat` - Run queries against DigitalNZ metadata search service.
* `getRecordsRecordIdFormat` - View metadata associated with a single record.
* `getRecordsRecordIdMoreLikeThisFormat` - The "More Like This" call returns similar records to the specified ID.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
