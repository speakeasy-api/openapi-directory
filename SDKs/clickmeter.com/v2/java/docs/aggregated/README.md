# aggregated

### Available Operations

* [aggregatedGetConversionsSummary](#aggregatedgetconversionssummary) - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* [aggregatedGetDatapointsSummary](#aggregatedgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [aggregatedGetGroupsSummary](#aggregatedgetgroupssummary) - Retrieve statistics about a subset of groups for a timeframe with groups data
* [aggregatedGetStatisticsList](#aggregatedgetstatisticslist) - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* [aggregatedGetStatisticsSingle](#aggregatedgetstatisticssingle) - Retrieve statistics about this customer for a timeframe

## aggregatedGetConversionsSummary

Retrieve statistics about a subset of conversions for a timeframe with conversions data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AggregatedGetConversionsSummaryRequest;
import org.openapis.openapi.models.operations.AggregatedGetConversionsSummaryResponse;
import org.openapis.openapi.models.operations.AggregatedGetConversionsSummarySortDirectionEnum;
import org.openapis.openapi.models.operations.AggregatedGetConversionsSummaryStatusEnum;
import org.openapis.openapi.models.operations.AggregatedGetConversionsSummaryTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AggregatedGetConversionsSummaryRequest req = new AggregatedGetConversionsSummaryRequest(AggregatedGetConversionsSummaryTimeFrameEnum.LAST12MONTHS) {{
                fromDay = "a";
                limit = 456130;
                offset = 687488;
                sortBy = "iusto";
                sortDirection = AggregatedGetConversionsSummarySortDirectionEnum.ASC;
                status = AggregatedGetConversionsSummaryStatusEnum.ACTIVE;
                textSearch = "tenetur";
                toDay = "amet";
            }};            

            AggregatedGetConversionsSummaryResponse res = sdk.aggregated.aggregatedGetConversionsSummary(req);

            if (res.apiCoreDtoAggregatedAggregatedSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aggregatedGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummaryRequest;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummaryResponse;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummarySortDirectionEnum;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummaryStatusEnum;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummaryTimeFrameEnum;
import org.openapis.openapi.models.operations.AggregatedGetDatapointsSummaryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AggregatedGetDatapointsSummaryRequest req = new AggregatedGetDatapointsSummaryRequest(AggregatedGetDatapointsSummaryTimeFrameEnum.BEGINNING, AggregatedGetDatapointsSummaryTypeEnum.TP) {{
                favourite = false;
                fromDay = "enim";
                groupId = 213312L;
                limit = 957451;
                offset = 518201;
                sortBy = "nihil";
                sortDirection = AggregatedGetDatapointsSummarySortDirectionEnum.ASC;
                status = AggregatedGetDatapointsSummaryStatusEnum.PAUSED;
                tag = "neque";
                textSearch = "sed";
                toDay = "vel";
            }};            

            AggregatedGetDatapointsSummaryResponse res = sdk.aggregated.aggregatedGetDatapointsSummary(req);

            if (res.apiCoreDtoAggregatedAggregatedSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aggregatedGetGroupsSummary

Retrieve statistics about a subset of groups for a timeframe with groups data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AggregatedGetGroupsSummaryRequest;
import org.openapis.openapi.models.operations.AggregatedGetGroupsSummaryResponse;
import org.openapis.openapi.models.operations.AggregatedGetGroupsSummarySortDirectionEnum;
import org.openapis.openapi.models.operations.AggregatedGetGroupsSummaryStatusEnum;
import org.openapis.openapi.models.operations.AggregatedGetGroupsSummaryTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AggregatedGetGroupsSummaryRequest req = new AggregatedGetGroupsSummaryRequest(AggregatedGetGroupsSummaryTimeFrameEnum.CURRENTMONTH) {{
                favourite = false;
                fromDay = "deserunt";
                limit = 463575;
                offset = 214880;
                sortBy = "incidunt";
                sortDirection = AggregatedGetGroupsSummarySortDirectionEnum.ASC;
                status = AggregatedGetGroupsSummaryStatusEnum.ACTIVE;
                tag = "maxime";
                textSearch = "pariatur";
                toDay = "soluta";
            }};            

            AggregatedGetGroupsSummaryResponse res = sdk.aggregated.aggregatedGetGroupsSummary(req);

            if (res.apiCoreDtoAggregatedAggregatedSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aggregatedGetStatisticsList

Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsListGroupByEnum;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsListRequest;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsListResponse;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AggregatedGetStatisticsListRequest req = new AggregatedGetStatisticsListRequest(AggregatedGetStatisticsListTimeFrameEnum.LAST12MONTHS) {{
                fromDay = "totam";
                groupBy = AggregatedGetStatisticsListGroupByEnum.WEEK;
                toDay = "aspernatur";
            }};            

            AggregatedGetStatisticsListResponse res = sdk.aggregated.aggregatedGetStatisticsList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aggregatedGetStatisticsSingle

Retrieve statistics about this customer for a timeframe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsSingleRequest;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsSingleResponse;
import org.openapis.openapi.models.operations.AggregatedGetStatisticsSingleTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AggregatedGetStatisticsSingleRequest req = new AggregatedGetStatisticsSingleRequest(AggregatedGetStatisticsSingleTimeFrameEnum.LAST12MONTHS) {{
                fromDay = "facilis";
                hourly = false;
                onlyFavorites = "aliquid";
                toDay = "quam";
            }};            

            AggregatedGetStatisticsSingleResponse res = sdk.aggregated.aggregatedGetStatisticsSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
