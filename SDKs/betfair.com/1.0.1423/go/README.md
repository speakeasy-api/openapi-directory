# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/betfair.com/1.0.1423/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [PostRequest](docs/sdk/README.md#postrequest) - This is a socket protocol delimited by CRLF (not http)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
