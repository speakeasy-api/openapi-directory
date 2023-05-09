# SDK

## Overview

API to receive streamed updates. This is an ssl socket connection of CRLF delimited json messages (see RequestMessage & ResponseMessage)

### Available Operations

* [PostRequest](#postrequest) - This is a socket protocol delimited by CRLF (not http)

## PostRequest

This is a socket protocol delimited by CRLF (not http)

### Example Usage

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
    res, err := s.SDK.PostRequest(ctx, shared.AllRequestTypesExample{
        Authentication: &shared.AuthenticationMessage{
            AppKey: sdk.String("optio"),
            ID: sdk.Int(521848),
            Op: sdk.String("beatae"),
            Session: sdk.String("commodi"),
        },
        Heartbeat: &shared.HeartbeatMessage{
            ID: sdk.Int(473600),
            Op: sdk.String("modi"),
        },
        MarketSubscription: &shared.MarketSubscriptionMessage{
            Clk: sdk.String("qui"),
            ConflateMs: sdk.Int64(774234),
            HeartbeatMs: sdk.Int64(736918),
            ID: sdk.Int(456150),
            InitialClk: sdk.String("ipsum"),
            MarketDataFilter: &shared.MarketDataFilter{
                Fields: []shared.MarketDataFilterFieldsEnum{
                    shared.MarketDataFilterFieldsEnumExBestOffers,
                    shared.MarketDataFilterFieldsEnumExBestOffersDisp,
                    shared.MarketDataFilterFieldsEnumExAllOffers,
                },
                LadderLevels: sdk.Int(617636),
            },
            MarketFilter: &shared.MarketFilter{
                BettingTypes: []shared.MarketFilterBettingTypesEnum{
                    shared.MarketFilterBettingTypesEnumAsianHandicapDoubleLine,
                },
                BspMarket: sdk.Bool(false),
                CountryCodes: []string{
                    "natus",
                },
                EventIds: []string{
                    "hic",
                    "saepe",
                },
                EventTypeIds: []string{
                    "in",
                    "corporis",
                    "iste",
                },
                MarketIds: []string{
                    "saepe",
                    "quidem",
                },
                MarketTypes: []string{
                    "ipsa",
                },
                RaceTypes: []string{
                    "est",
                    "mollitia",
                    "laborum",
                    "dolores",
                },
                TurnInPlayEnabled: sdk.Bool(false),
                Venues: []string{
                    "corporis",
                },
            },
            Op: sdk.String("explicabo"),
            SegmentationEnabled: sdk.Bool(false),
        },
        OpTypes: shared.AllRequestTypesExampleOpTypesEnumOrderSubscription.ToPointer(),
        OrderSubscriptionMessage: &shared.OrderSubscriptionMessage{
            Clk: sdk.String("enim"),
            ConflateMs: sdk.Int64(607831),
            HeartbeatMs: sdk.Int64(363711),
            ID: sdk.Int(325047),
            InitialClk: sdk.String("excepturi"),
            Op: sdk.String("accusantium"),
            OrderFilter: &shared.OrderFilter{
                AccountIds: []int64{
                    634274,
                    988374,
                },
                CustomerStrategyRefs: []string{
                    "architecto",
                    "mollitia",
                    "dolorem",
                    "culpa",
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
