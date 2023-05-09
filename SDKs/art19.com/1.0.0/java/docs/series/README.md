# series

### Available Operations

* [getSeries](#getseries) - Get a list of series
* [getSeriesId](#getseriesid) - Get a specific series

## getSeries

When retrieving a list of series, the result is automatically filtered depending on the
privileges the used credential holds. All credentials will have access to active series
with a public page enabled (on ART19). Utilizing a filter to limit the result to series
associated with your account is recommended.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeriesRequest;
import org.openapis.openapi.models.operations.GetSeriesResponse;
import org.openapis.openapi.models.operations.GetSeriesSecurity;
import org.openapis.openapi.models.operations.GetSeriesSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeriesRequest req = new GetSeriesRequest() {{
                adRepAccountId = "b9f58c4d-86e6-48e4-be05-6013f59da757";
                ids = new String[]{{
                    add("59ecfef6-6ef1-4caa-b383-c2beb477373c"),
                    add("8d72f64d-1db1-4f2c-8310-661e96349e1c"),
                    add("f9e06e3a-4370-400a-a6b6-bc9b8f759eac"),
                }};
                networkId = "55a9741d-3113-4529-a5bb-8a7202611435";
                pageNumber = 932394L;
                pageSize = 88248L;
                q = "ipsum";
                sort = new org.openapis.openapi.models.operations.GetSeriesSortEnum[]{{
                    add(GetSeriesSortEnum.UPDATED_AT),
                    add(GetSeriesSortEnum.TITLE),
                    add(GetSeriesSortEnum.UPDATED_AT),
                }};
            }};            

            GetSeriesResponse res = sdk.series.getSeries(req, new GetSeriesSecurity("quia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSeries200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSeriesId

Get a specific series

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSeriesIdRequest;
import org.openapis.openapi.models.operations.GetSeriesIdResponse;
import org.openapis.openapi.models.operations.GetSeriesIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSeriesIdRequest req = new GetSeriesIdRequest("259b1abd-a8c0-470e-9084-cb0672d1ad87");            

            GetSeriesIdResponse res = sdk.series.getSeriesId(req, new GetSeriesIdSecurity("provident") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getSeriesId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
