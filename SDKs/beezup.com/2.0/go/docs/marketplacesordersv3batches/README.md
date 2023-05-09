# MarketplacesOrdersV3Batches

### Available Operations

* [ChangeOrderListV2](#changeorderlistv2) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [ChangeOrderListV3](#changeorderlistv3) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [ClearMerchantOrderInfoListV3](#clearmerchantorderinfolistv3) - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* [SetMerchantOrderInfoListV3](#setmerchantorderinfolistv3) - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

## ChangeOrderListV2

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


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
    res, err := s.MarketplacesOrdersV3Batches.ChangeOrderListV2(ctx, operations.ChangeOrderListV2Request{
        ChangeOrderListRequestV2: shared.ChangeOrderListRequestV2{
            ChangeOrders: []shared.ChangeOrderListRequestItemV2{
                shared.ChangeOrderListRequestItemV2{
                    ChangeOrderRequest: map[string]string{
                        "accusantium": "beatae",
                    },
                    Order: shared.OrderIdentifier{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
                shared.ChangeOrderListRequestItemV2{
                    ChangeOrderRequest: map[string]string{
                        "enim": "laboriosam",
                    },
                    Order: shared.OrderIdentifier{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
                shared.ChangeOrderListRequestItemV2{
                    ChangeOrderRequest: map[string]string{
                        "a": "molestias",
                    },
                    Order: shared.OrderIdentifier{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
                shared.ChangeOrderListRequestItemV2{
                    ChangeOrderRequest: map[string]string{
                        "saepe": "consequuntur",
                        "occaecati": "officiis",
                    },
                    Order: shared.OrderIdentifier{
                        AccountID: 1234,
                        BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                        MarketplaceTechnicalCode: "Amazon",
                    },
                },
            },
        },
        ChangeOrderType: "perspiciatis",
        TestMode: sdk.Bool(false),
        UserName: "Isabelle_Ferry16",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```

## ChangeOrderListV3

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


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
    res, err := s.MarketplacesOrdersV3Batches.ChangeOrderListV3(ctx, operations.ChangeOrderListV3Request{
        ChangeOrderListRequest: shared.ChangeOrderListRequest{
            ChangeOrders: []shared.ChangeOrderListRequestItem{
                shared.ChangeOrderListRequestItem{
                    ChangeOrderRequest: map[string]string{
                        "quis": "reprehenderit",
                        "error": "illo",
                        "corporis": "quidem",
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
        TestMode: sdk.Bool(false),
        UserName: "Tamara.Franey43",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```

## ClearMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

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
    res, err := s.MarketplacesOrdersV3Batches.ClearMerchantOrderInfoListV3(ctx, operations.ClearMerchantOrderInfoListV3Request{
        ClearMerchantOrderInfoListRequest: shared.ClearMerchantOrderInfoListRequest{
            Orders: []shared.OrderIdentifier{
                shared.OrderIdentifier{
                    AccountID: 1234,
                    BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                    MarketplaceTechnicalCode: "Amazon",
                },
            },
        },
        TestMode: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```

## SetMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

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
    res, err := s.MarketplacesOrdersV3Batches.SetMerchantOrderInfoListV3(ctx, operations.SetMerchantOrderInfoListV3Request{
        SetMerchantOrderInfoListRequest: shared.SetMerchantOrderInfoListRequest{
            OrderMerchantECommerceSoftwareName: "Prestashop",
            OrderMerchantECommerceSoftwareVersion: "123.0.1",
            Orders: []shared.SetMerchantOrderInfoListRequestItem{
                shared.SetMerchantOrderInfoListRequestItem{
                    AccountID: 1234,
                    BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                    MarketplaceTechnicalCode: "Amazon",
                    OrderMerchantOrderID: "MyOrderMerchantId",
                },
                shared.SetMerchantOrderInfoListRequestItem{
                    AccountID: 1234,
                    BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                    MarketplaceTechnicalCode: "Amazon",
                    OrderMerchantOrderID: "MyOrderMerchantId",
                },
                shared.SetMerchantOrderInfoListRequestItem{
                    AccountID: 1234,
                    BeezUPOrderID: "00000000000000000000000000000000000000000000000",
                    MarketplaceTechnicalCode: "Amazon",
                    OrderMerchantOrderID: "MyOrderMerchantId",
                },
            },
        },
        TestMode: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchOrderOperationResponse != nil {
        // handle response
    }
}
```
