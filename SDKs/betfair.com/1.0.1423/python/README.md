# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/betfair.com/1.0.1423/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AllRequestTypesExample(
    authentication=shared.AuthenticationMessage(
        app_key="corrupti",
        id=592845,
        op="distinctio",
        session="quibusdam",
    ),
    heartbeat=shared.HeartbeatMessage(
        id=602763,
        op="nulla",
    ),
    market_subscription=shared.MarketSubscriptionMessage(
        clk="corrupti",
        conflate_ms=847252,
        heartbeat_ms=423655,
        id=623564,
        initial_clk="deserunt",
        market_data_filter=shared.MarketDataFilter(
            fields_=[
                "EX_TRADED",
                "EX_ALL_OFFERS",
            ],
            ladder_levels=891773,
        ),
        market_filter=shared.MarketFilter(
            betting_types=[
                "ASIAN_HANDICAP_SINGLE_LINE",
            ],
            bsp_market=False,
            country_codes=[
                "suscipit",
                "molestiae",
            ],
            event_ids=[
                "placeat",
                "voluptatum",
                "iusto",
                "excepturi",
            ],
            event_type_ids=[
                "recusandae",
                "temporibus",
            ],
            market_ids=[
                "quis",
            ],
            market_types=[
                "deserunt",
            ],
            race_types=[
                "ipsam",
            ],
            turn_in_play_enabled=False,
            venues=[
                "sapiente",
                "quo",
                "odit",
                "at",
            ],
        ),
        op="at",
        segmentation_enabled=False,
    ),
    op_types="orderSubscription",
    order_subscription_message=shared.OrderSubscriptionMessage(
        clk="molestiae",
        conflate_ms=799159,
        heartbeat_ms=800911,
        id=461479,
        initial_clk="totam",
        op="porro",
        order_filter=shared.OrderFilter(
            account_ids=[
                118274,
                720633,
                639921,
            ],
            customer_strategy_refs=[
                "fugit",
                "deleniti",
                "hic",
            ],
            include_overall_position=False,
            partition_matched_by_strategy_ref=False,
        ),
        segmentation_enabled=False,
    ),
)
    
res = s.post_request(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `post_request` - This is a socket protocol delimited by CRLF (not http)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
