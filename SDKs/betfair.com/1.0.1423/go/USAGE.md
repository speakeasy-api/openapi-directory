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

    req := shared.AllRequestTypesExample{
        Authentication: &shared.AuthenticationMessage{
            AppKey: "corrupti",
            ID: 592845,
            Op: "distinctio",
            Session: "quibusdam",
        },
        Heartbeat: &shared.HeartbeatMessage{
            ID: 602763,
            Op: "nulla",
        },
        MarketSubscription: &shared.MarketSubscriptionMessage{
            Clk: "corrupti",
            ConflateMs: 847252,
            HeartbeatMs: 423655,
            ID: 623564,
            InitialClk: "deserunt",
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
                    "suscipit",
                    "molestiae",
                },
                EventIds: []string{
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                },
                EventTypeIds: []string{
                    "recusandae",
                    "temporibus",
                },
                MarketIds: []string{
                    "quis",
                },
                MarketTypes: []string{
                    "deserunt",
                },
                RaceTypes: []string{
                    "ipsam",
                },
                TurnInPlayEnabled: false,
                Venues: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
            },
            Op: "at",
            SegmentationEnabled: false,
        },
        OpTypes: "orderSubscription",
        OrderSubscriptionMessage: &shared.OrderSubscriptionMessage{
            Clk: "molestiae",
            ConflateMs: 799159,
            HeartbeatMs: 800911,
            ID: 461479,
            InitialClk: "totam",
            Op: "porro",
            OrderFilter: &shared.OrderFilter{
                AccountIds: []int64{
                    118274,
                    720633,
                    639921,
                },
                CustomerStrategyRefs: []string{
                    "fugit",
                    "deleniti",
                    "hic",
                },
                IncludeOverallPosition: false,
                PartitionMatchedByStrategyRef: false,
            },
            SegmentationEnabled: false,
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