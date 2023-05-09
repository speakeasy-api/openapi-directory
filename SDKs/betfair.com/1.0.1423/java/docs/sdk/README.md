# SDK

## Overview

API to receive streamed updates. This is an ssl socket connection of CRLF delimited json messages (see RequestMessage & ResponseMessage)

### Available Operations

* [postRequest](#postrequest) - This is a socket protocol delimited by CRLF (not http)

## postRequest

This is a socket protocol delimited by CRLF (not http)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRequestResponse;
import org.openapis.openapi.models.shared.AllRequestTypesExample;
import org.openapis.openapi.models.shared.AllRequestTypesExampleOpTypesEnum;
import org.openapis.openapi.models.shared.AuthenticationMessage;
import org.openapis.openapi.models.shared.HeartbeatMessage;
import org.openapis.openapi.models.shared.MarketDataFilter;
import org.openapis.openapi.models.shared.MarketDataFilterFieldsEnum;
import org.openapis.openapi.models.shared.MarketFilter;
import org.openapis.openapi.models.shared.MarketFilterBettingTypesEnum;
import org.openapis.openapi.models.shared.MarketSubscriptionMessage;
import org.openapis.openapi.models.shared.OrderFilter;
import org.openapis.openapi.models.shared.OrderSubscriptionMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AllRequestTypesExample req = new AllRequestTypesExample() {{
                authentication = new AuthenticationMessage() {{
                    appKey = "optio";
                    id = 521848;
                    op = "beatae";
                    session = "commodi";
                }};;
                heartbeat = new HeartbeatMessage() {{
                    id = 473600;
                    op = "modi";
                }};;
                marketSubscription = new MarketSubscriptionMessage() {{
                    clk = "qui";
                    conflateMs = 774234L;
                    heartbeatMs = 736918L;
                    id = 456150;
                    initialClk = "ipsum";
                    marketDataFilter = new MarketDataFilter() {{
                        fields = new org.openapis.openapi.models.shared.MarketDataFilterFieldsEnum[]{{
                            add(MarketDataFilterFieldsEnum.EX_BEST_OFFERS),
                            add(MarketDataFilterFieldsEnum.EX_BEST_OFFERS_DISP),
                            add(MarketDataFilterFieldsEnum.EX_ALL_OFFERS),
                        }};
                        ladderLevels = 617636;
                    }};;
                    marketFilter = new MarketFilter() {{
                        bettingTypes = new org.openapis.openapi.models.shared.MarketFilterBettingTypesEnum[]{{
                            add(MarketFilterBettingTypesEnum.ASIAN_HANDICAP_DOUBLE_LINE),
                        }};
                        bspMarket = false;
                        countryCodes = new String[]{{
                            add("natus"),
                        }};
                        eventIds = new String[]{{
                            add("hic"),
                            add("saepe"),
                        }};
                        eventTypeIds = new String[]{{
                            add("in"),
                            add("corporis"),
                            add("iste"),
                        }};
                        marketIds = new String[]{{
                            add("saepe"),
                            add("quidem"),
                        }};
                        marketTypes = new String[]{{
                            add("ipsa"),
                        }};
                        raceTypes = new String[]{{
                            add("est"),
                            add("mollitia"),
                            add("laborum"),
                            add("dolores"),
                        }};
                        turnInPlayEnabled = false;
                        venues = new String[]{{
                            add("corporis"),
                        }};
                    }};;
                    op = "explicabo";
                    segmentationEnabled = false;
                }};;
                opTypes = AllRequestTypesExampleOpTypesEnum.ORDER_SUBSCRIPTION;
                orderSubscriptionMessage = new OrderSubscriptionMessage() {{
                    clk = "enim";
                    conflateMs = 607831L;
                    heartbeatMs = 363711L;
                    id = 325047;
                    initialClk = "excepturi";
                    op = "accusantium";
                    orderFilter = new OrderFilter() {{
                        accountIds = new Long[]{{
                            add(634274L),
                            add(988374L),
                        }};
                        customerStrategyRefs = new String[]{{
                            add("architecto"),
                            add("mollitia"),
                            add("dolorem"),
                            add("culpa"),
                        }};
                        includeOverallPosition = false;
                        partitionMatchedByStrategyRef = false;
                    }};;
                    segmentationEnabled = false;
                }};;
            }};            

            PostRequestResponse res = sdk.sdk.postRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
