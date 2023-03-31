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

import org.openapis.openapi.models.operations.PostRequestRequest;
import org.openapis.openapi.models.operations.PostRequestResponse;
import org.openapis.openapi.models.shared.AllRequestTypesExampleOpTypesEnum;
import org.openapis.openapi.models.shared.AllRequestTypesExample;
import org.openapis.openapi.models.shared.OrderSubscriptionMessage;
import org.openapis.openapi.models.shared.OrderFilter;
import org.openapis.openapi.models.shared.MarketSubscriptionMessage;
import org.openapis.openapi.models.shared.MarketFilterBettingTypesEnum;
import org.openapis.openapi.models.shared.MarketFilter;
import org.openapis.openapi.models.shared.MarketDataFilterFieldsEnum;
import org.openapis.openapi.models.shared.MarketDataFilter;
import org.openapis.openapi.models.shared.HeartbeatMessage;
import org.openapis.openapi.models.shared.AuthenticationMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRequestRequest req = new PostRequestRequest() {{
                request = new AllRequestTypesExample() {{
                    authentication = new AuthenticationMessage() {{
                        appKey = "corrupti";
                        id = 592845;
                        op = "distinctio";
                        session = "quibusdam";
                    }};
                    heartbeat = new HeartbeatMessage() {{
                        id = 602763;
                        op = "nulla";
                    }};
                    marketSubscription = new MarketSubscriptionMessage() {{
                        clk = "corrupti";
                        conflateMs = 847252;
                        heartbeatMs = 423655;
                        id = 623564;
                        initialClk = "deserunt";
                        marketDataFilter = new MarketDataFilter() {{
                            fields = new org.openapis.openapi.models.shared.MarketDataFilterFieldsEnum[]{{
                                add("EX_TRADED"),
                                add("EX_ALL_OFFERS"),
                            }};
                            ladderLevels = 891773;
                        }};
                        marketFilter = new MarketFilter() {{
                            bettingTypes = new org.openapis.openapi.models.shared.MarketFilterBettingTypesEnum[]{{
                                add("ASIAN_HANDICAP_SINGLE_LINE"),
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
                        }};
                        op = "at";
                        segmentationEnabled = false;
                    }};
                    opTypes = "orderSubscription";
                    orderSubscriptionMessage = new OrderSubscriptionMessage() {{
                        clk = "molestiae";
                        conflateMs = 799159;
                        heartbeatMs = 800911;
                        id = 461479;
                        initialClk = "totam";
                        op = "porro";
                        orderFilter = new OrderFilter() {{
                            accountIds = new Long[]{{
                                add(118274),
                                add(720633),
                                add(639921),
                            }};
                            customerStrategyRefs = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                            includeOverallPosition = false;
                            partitionMatchedByStrategyRef = false;
                        }};
                        segmentationEnabled = false;
                    }};
                }};
            }};            

            PostRequestResponse res = sdk.postRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `postRequest` - This is a socket protocol delimited by CRLF (not http)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
