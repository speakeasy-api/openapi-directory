# MarketplacesOrdersBatches

### Available Operations

* [~~ChangeOrderList~~](#changeorderlist) - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call) :warning: **Deprecated**
* [~~ClearMerchantOrderInfoList~~](#clearmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call) :warning: **Deprecated**
* [~~SetMerchantOrderInfoList~~](#setmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call) :warning: **Deprecated**

## ~~ChangeOrderList~~

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersBatches.ChangeOrderList(ctx, operations.ChangeOrderListRequest{
        ChangeOrderListRequest: shared.ChangeOrderListRequest{
            ChangeOrders: []shared.ChangeOrderListRequestItem{
                shared.ChangeOrderListRequestItem{
                    ChangeOrderRequest: map[string]string{
                        "accusantium": "rem",
                        "aut": "laudantium",
                        "eum": "mollitia",
                        "ab": "corrupti",
                    },
                    Order: shared.OrderIdentifierWithETag{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        Etag: ""ca071a4580129f932a03971968ffef69"",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
                shared.ChangeOrderListRequestItem{
                    ChangeOrderRequest: map[string]string{
                        "voluptatem": "dolor",
                        "occaecati": "numquam",
                    },
                    Order: shared.OrderIdentifierWithETag{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        Etag: ""ca071a4580129f932a03971968ffef69"",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
                shared.ChangeOrderListRequestItem{
                    ChangeOrderRequest: map[string]string{
                        "explicabo": "voluptas",
                        "aut": "dignissimos",
                        "dicta": "maiores",
                        "natus": "velit",
                    },
                    Order: shared.OrderIdentifierWithETag{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        Etag: ""ca071a4580129f932a03971968ffef69"",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
            },
        },
        ChangeOrderType: "voluptatibus",
        TestMode: sdk.Bool(false),
        UserName: "Garland40",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```

## ~~ClearMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.MarketplacesOrdersBatches.ClearMerchantOrderInfoList(ctx, shared.ClearMerchantOrderInfoListRequest{
        Orders: []shared.OrderIdentifier{
            shared.OrderIdentifier{
                AccountID: 1234,
                BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                MarketplaceTechnicalCode: "Amazon",
            },
            shared.OrderIdentifier{
                AccountID: 1234,
                BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                MarketplaceTechnicalCode: "Amazon",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```

## ~~SetMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.MarketplacesOrdersBatches.SetMerchantOrderInfoList(ctx, shared.SetMerchantOrderInfoListRequest{
        OrderMerchantECommerceSoftwareName: "Prestashop",
        OrderMerchantECommerceSoftwareVersion: "123.0.1",
        Orders: []shared.SetMerchantOrderInfoListRequestItem{
            shared.SetMerchantOrderInfoListRequestItem{
                AccountID: 1234,
                BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                MarketplaceTechnicalCode: "Amazon",
                OrderMerchantOrderID: "MyOrderMerchantId",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```
