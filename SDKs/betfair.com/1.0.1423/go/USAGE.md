<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PostRequest(ctx, shared.AllRequestTypesExample{
        Authentication: &shared.AuthenticationMessage{
            AppKey: sdk.String("corrupti"),
            ID: sdk.Int(592845),
            Op: sdk.String("distinctio"),
            Session: sdk.String("quibusdam"),
        },
        Heartbeat: &shared.HeartbeatMessage{
            ID: sdk.Int(602763),
            Op: sdk.String("nulla"),
        },
        MarketSubscription: &shared.MarketSubscriptionMessage{
            Clk: sdk.String("corrupti"),
            ConflateMs: sdk.Int64(847252),
            HeartbeatMs: sdk.Int64(423655),
            ID: sdk.Int(623564),
            InitialClk: sdk.String("deserunt"),
            MarketDataFilter: &shared.MarketDataFilter{
                Fields: []shared.MarketDataFilterFieldsEnum{
                    shared.MarketDataFilterFieldsEnumExTraded,
                    shared.MarketDataFilterFieldsEnumExAllOffers,
                },
                LadderLevels: sdk.Int(891773),
            },
            MarketFilter: &shared.MarketFilter{
                BettingTypes: []shared.MarketFilterBettingTypesEnum{
                    shared.MarketFilterBettingTypesEnumAsianHandicapSingleLine,
                },
                BspMarket: sdk.Bool(false),
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
                TurnInPlayEnabled: sdk.Bool(false),
                Venues: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
            },
            Op: sdk.String("at"),
            SegmentationEnabled: sdk.Bool(false),
        },
        OpTypes: shared.AllRequestTypesExampleOpTypesEnumOrderSubscription.ToPointer(),
        OrderSubscriptionMessage: &shared.OrderSubscriptionMessage{
            Clk: sdk.String("molestiae"),
            ConflateMs: sdk.Int64(799159),
            HeartbeatMs: sdk.Int64(800911),
            ID: sdk.Int(461479),
            InitialClk: sdk.String("totam"),
            Op: sdk.String("porro"),
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
                IncludeOverallPosition: sdk.Bool(false),
                PartitionMatchedByStrategyRef: sdk.Bool(false),
            },
            SegmentationEnabled: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->