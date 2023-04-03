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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `PostRequest` - This is a socket protocol delimited by CRLF (not http)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
