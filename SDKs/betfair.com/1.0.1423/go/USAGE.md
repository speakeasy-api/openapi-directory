<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostRequestRequest{
        Request: shared.AllRequestTypesExample{
            Authentication: &shared.AuthenticationMessage{
                AppKey: "unde",
                ID: 592845,
                Op: "porro",
                Session: "nulla",
            },
            Heartbeat: &shared.HeartbeatMessage{
                ID: 602763,
                Op: "vero",
            },
            MarketSubscription: &shared.MarketSubscriptionMessage{
                Clk: "perspiciatis",
                ConflateMs: 847252,
                HeartbeatMs: 423655,
                ID: 623564,
                InitialClk: "facilis",
                MarketDataFilter: &shared.MarketDataFilter{
                    Fields: []shared.MarketDataFilterFieldsEnum{
                        "EX_TRADED",
                        "EX_ALL_OFFERS",
                    },
                    LadderLevels: 891773,
                },
                MarketFilter: &shared.MarketFilter{
                    BettingTypes: []shared.MarketFilterBettingTypesEnum{
                        "ASIAN_HANDICAP_SINGLE_LINE",
                    },
                    BspMarket: false,
                    CountryCodes: []string{
                        "eum",
                        "voluptatum",
                    },
                    EventIds: []string{
                        "vel",
                        "non",
                        "deleniti",
                        "similique",
                    },
                    EventTypeIds: []string{
                        "molestiae",
                        "quo",
                    },
                    MarketIds: []string{
                        "laboriosam",
                    },
                    MarketTypes: []string{
                        "est",
                    },
                    RaceTypes: []string{
                        "consequatur",
                    },
                    TurnInPlayEnabled: false,
                    Venues: []string{
                        "a",
                        "omnis",
                        "eos",
                        "accusamus",
                    },
                },
                Op: "accusamus",
                SegmentationEnabled: false,
            },
            OpTypes: "orderSubscription",
            OrderSubscriptionMessage: &shared.OrderSubscriptionMessage{
                Clk: "rem",
                ConflateMs: 799159,
                HeartbeatMs: 800911,
                ID: 461479,
                InitialClk: "occaecati",
                Op: "dolor",
                OrderFilter: &shared.OrderFilter{
                    AccountIds: []int64{
                        118274,
                        720633,
                        639921,
                    },
                    CustomerStrategyRefs: []string{
                        "qui",
                        "sed",
                        "rerum",
                    },
                    IncludeOverallPosition: false,
                    PartitionMatchedByStrategyRef: false,
                },
                SegmentationEnabled: false,
            },
        },
    }

    ctx := context.Background()
    res, err := s.PostRequest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->