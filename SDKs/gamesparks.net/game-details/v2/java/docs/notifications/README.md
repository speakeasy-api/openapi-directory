# notifications

## Overview

Log Summary Restv 2 Controller

### Available Operations

* [getGameSummaryUsingGET](#getgamesummaryusingget) - getGameSummary

## getGameSummaryUsingGET

getGameSummary

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGameSummaryUsingGETRequest;
import org.openapis.openapi.models.operations.GETGameSummaryUsingGETResponse;
import org.openapis.openapi.models.operations.GETGameSummaryUsingGETStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGameSummaryUsingGETRequest req = new GETGameSummaryUsingGETRequest("eum", LocalDate.parse("2022-03-31"), GETGameSummaryUsingGETStageEnum.PREVIEW, LocalDate.parse("2022-05-29"));            

            GETGameSummaryUsingGETResponse res = sdk.notifications.getGameSummaryUsingGET(req);

            if (res.gameSummaryModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
