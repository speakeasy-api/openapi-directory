# typeTypePointPboPositionTimeSeries

## Overview

Search API for 'PBO Position Time Series' entry type

### Available Operations

* [searchTypePointPboPositionTimeSeries](#searchtypepointpbopositiontimeseries) - Search API for 'PBO Position Time Series' entry type

## searchTypePointPboPositionTimeSeries

API to search for entries of type PBO Position Time Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointPboPositionTimeSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypePointPboPositionTimeSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointPboPositionTimeSeriesRequest req = new SearchTypePointPboPositionTimeSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-13T23:07:49.934Z");
                changedateTo = OffsetDateTime.parse("2020-11-06T21:53:41.627Z");
                createdateFrom = OffsetDateTime.parse("2022-06-01T15:55:43.983Z");
                createdateTo = OffsetDateTime.parse("2022-11-28T15:54:56.449Z");
                description = "accusamus";
                filesuffix = "excepturi";
                fromdate = OffsetDateTime.parse("2022-11-04T03:46:01.468Z");
                group = "perspiciatis";
                max = 18173L;
                maxlatitude = 3581.57;
                maxlongitude = 3525.96;
                minlatitude = 4754.03;
                minlongitude = 2405.45;
                name = "Enrique Ruecker";
                searchTypePointPboPositionTimeSeriesFormatVersion = "nam";
                searchTypePointPboPositionTimeSeriesFourCharId = "id";
                searchTypePointPboPositionTimeSeriesProcessingCenter = "cumque";
                searchTypePointPboPositionTimeSeriesReferenceFrame = "in";
                searchTypePointPboPositionTimeSeriesStationName = "a";
                skip = 844799L;
                text = "culpa";
                todate = OffsetDateTime.parse("2022-06-04T03:04:36.464Z");
            }};            

            SearchTypePointPboPositionTimeSeriesResponse res = sdk.typeTypePointPboPositionTimeSeries.searchTypePointPboPositionTimeSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
