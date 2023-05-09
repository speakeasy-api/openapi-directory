<!-- Start SDK Example Usage -->
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
                    appKey = "corrupti";
                    id = 592845;
                    op = "distinctio";
                    session = "quibusdam";
                }};;
                heartbeat = new HeartbeatMessage() {{
                    id = 602763;
                    op = "nulla";
                }};;
                marketSubscription = new MarketSubscriptionMessage() {{
                    clk = "corrupti";
                    conflateMs = 847252L;
                    heartbeatMs = 423655L;
                    id = 623564;
                    initialClk = "deserunt";
                    marketDataFilter = new MarketDataFilter() {{
                        fields = new org.openapis.openapi.models.shared.MarketDataFilterFieldsEnum[]{{
                            add(MarketDataFilterFieldsEnum.EX_TRADED),
                            add(MarketDataFilterFieldsEnum.EX_ALL_OFFERS),
                        }};
                        ladderLevels = 891773;
                    }};;
                    marketFilter = new MarketFilter() {{
                        bettingTypes = new org.openapis.openapi.models.shared.MarketFilterBettingTypesEnum[]{{
                            add(MarketFilterBettingTypesEnum.ASIAN_HANDICAP_SINGLE_LINE),
                        }};
                        bspMarket = false;
                        countryCodes = new String[]{{
                            add("suscipit"),
                            add("molestiae"),
                        }};
                        eventIds = new String[]{{
                            add("placeat"),
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                        }};
                        eventTypeIds = new String[]{{
                            add("recusandae"),
                            add("temporibus"),
                        }};
                        marketIds = new String[]{{
                            add("quis"),
                        }};
                        marketTypes = new String[]{{
                            add("deserunt"),
                        }};
                        raceTypes = new String[]{{
                            add("ipsam"),
                        }};
                        turnInPlayEnabled = false;
                        venues = new String[]{{
                            add("sapiente"),
                            add("quo"),
                            add("odit"),
                            add("at"),
                        }};
                    }};;
                    op = "at";
                    segmentationEnabled = false;
                }};;
                opTypes = AllRequestTypesExampleOpTypesEnum.ORDER_SUBSCRIPTION;
                orderSubscriptionMessage = new OrderSubscriptionMessage() {{
                    clk = "molestiae";
                    conflateMs = 799159L;
                    heartbeatMs = 800911L;
                    id = 461479;
                    initialClk = "totam";
                    op = "porro";
                    orderFilter = new OrderFilter() {{
                        accountIds = new Long[]{{
                            add(118274L),
                            add(720633L),
                            add(639921L),
                        }};
                        customerStrategyRefs = new String[]{{
                            add("fugit"),
                            add("deleniti"),
                            add("hic"),
                        }};
                        includeOverallPosition = false;
                        partitionMatchedByStrategyRef = false;
                    }};;
                    segmentationEnabled = false;
                }};;
            }};            

            PostRequestResponse res = sdk.postRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->