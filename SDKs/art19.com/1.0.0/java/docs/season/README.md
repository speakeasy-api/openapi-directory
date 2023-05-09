# season

### Available Operations

* [getSeasons](#getseasons) - Get a list of seasons
* [getSeasonsId](#getseasonsid) - Get a specific season

## getSeasons

When retrieving a list of seasons, the result is automatically filtered depending on the
privileges the used credential holds. If there are no specific privileges to a series or network,
only active seasons for active series are included.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeasonsRequest;
import org.openapis.openapi.models.operations.GetSeasonsResponse;
import org.openapis.openapi.models.operations.GetSeasonsSecurity;
import org.openapis.openapi.models.operations.GetSeasonsSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeasonsRequest req = new GetSeasonsRequest() {{
                ids = new String[]{{
                    add("5b08b618-91ba-4a0f-a1ad-e008e6f8c5f3"),
                    add("50d8cdb5-a341-4814-b010-421813d5208e"),
                }};
                pageNumber = 773456L;
                pageSize = 884952L;
                q = "esse";
                seriesId = "e253b668-451c-46c6-a205-e16deab3fec9";
                sort = new org.openapis.openapi.models.operations.GetSeasonsSortEnum[]{{
                    add(GetSeasonsSortEnum.SORT_TITLE),
                    add(GetSeasonsSortEnum.TITLE),
                }};
            }};            

            GetSeasonsResponse res = sdk.season.getSeasons(req, new GetSeasonsSecurity("officia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSeasons200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSeasonsId

Get a specific season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeasonsIdRequest;
import org.openapis.openapi.models.operations.GetSeasonsIdResponse;
import org.openapis.openapi.models.operations.GetSeasonsIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeasonsIdRequest req = new GetSeasonsIdRequest("64584273-a841-48d1-a230-9fb0929921ae");            

            GetSeasonsIdResponse res = sdk.season.getSeasonsId(req, new GetSeasonsIdSecurity("voluptatibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSeasonsId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
