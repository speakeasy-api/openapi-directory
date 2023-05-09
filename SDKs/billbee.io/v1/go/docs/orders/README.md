# Orders

### Available Operations

* [LayoutAPIGetList](#layoutapigetlist)
* [OrderAPIAddShipmentForm](#orderapiaddshipmentform) - Add a shipment to a given order
* [OrderAPIAddShipmentJSON](#orderapiaddshipmentjson) - Add a shipment to a given order
* [OrderAPIAddShipmentRaw](#orderapiaddshipmentraw) - Add a shipment to a given order
* [OrderAPICreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [OrderAPICreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [~~OrderAPIFind~~](#orderapifind) - Find a single order by its external id (order number) :warning: **Deprecated**
* [OrderAPIGet](#orderapiget) - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* [OrderAPIGetByExtRef](#orderapigetbyextref) - Get a single order by its external order number
* [OrderAPIGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* [OrderAPIGetList](#orderapigetlist) - Get a list of all orders optionally filtered by date
* [OrderAPIGetPatchableFields](#orderapigetpatchablefields) - Returns a list of fields which can be updated with the orders/{id} patch call
* [OrderAPIParsePlaceholdersForm](#orderapiparseplaceholdersform) - Parses a text and replaces all placeholders
* [OrderAPIParsePlaceholdersJSON](#orderapiparseplaceholdersjson) - Parses a text and replaces all placeholders
* [OrderAPIParsePlaceholdersRaw](#orderapiparseplaceholdersraw) - Parses a text and replaces all placeholders
* [OrderAPIPatchOrder](#orderapipatchorder) - Updates one or more fields of an order
* [OrderAPIPostNewOrderForm](#orderapipostneworderform) - Creates a new order in the Billbee account
* [OrderAPIPostNewOrderJSON](#orderapipostneworderjson) - Creates a new order in the Billbee account
* [OrderAPIPostNewOrderRaw](#orderapipostneworderraw) - Creates a new order in the Billbee account
* [OrderAPISendMessageForm](#orderapisendmessageform) - Sends a message to the buyer
* [OrderAPISendMessageJSON](#orderapisendmessagejson) - Sends a message to the buyer
* [OrderAPISendMessageRaw](#orderapisendmessageraw) - Sends a message to the buyer
* [OrderAPITagsCreateForm](#orderapitagscreateform) - Attach one or more tags to an order
* [OrderAPITagsCreateJSON](#orderapitagscreatejson) - Attach one or more tags to an order
* [OrderAPITagsCreateRaw](#orderapitagscreateraw) - Attach one or more tags to an order
* [OrderAPITagsUpdateForm](#orderapitagsupdateform) - Sets the tags attached to an order
* [OrderAPITagsUpdateJSON](#orderapitagsupdatejson) - Sets the tags attached to an order
* [OrderAPITagsUpdateRaw](#orderapitagsupdateraw) - Sets the tags attached to an order
* [OrderAPITriggerEventForm](#orderapitriggereventform) - Triggers a rule event
* [OrderAPITriggerEventJSON](#orderapitriggereventjson) - Triggers a rule event
* [OrderAPITriggerEventRaw](#orderapitriggereventraw) - Triggers a rule event
* [OrderAPIUpdateStateForm](#orderapiupdatestateform) - Changes the main state of a single order
* [OrderAPIUpdateStateJSON](#orderapiupdatestatejson) - Changes the main state of a single order
* [OrderAPIUpdateStateRaw](#orderapiupdatestateraw) - Changes the main state of a single order
* [SearchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## LayoutAPIGetList

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.LayoutAPIGetList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate != nil {
        // handle response
    }
}
```

## OrderAPIAddShipmentForm

Add a shipment to a given order

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
    res, err := s.Orders.OrderAPIAddShipmentForm(ctx, operations.OrderAPIAddShipmentFormRequest{
        RechnungsdruckWebAppControllersAPIAPIAddShipmentToOrderModel: shared.RechnungsdruckWebAppControllersAPIAPIAddShipmentToOrderModel{
            CarrierID: sdk.Int(430402),
            Comment: sdk.String("quas"),
            OrderID: sdk.String("praesentium"),
            ShipmentType: sdk.Int(159867),
            ShippingID: sdk.String("deleniti"),
            ShippingProviderID: sdk.Int64(143829),
            ShippingProviderProductID: sdk.Int64(681393),
        },
        ID: 649463,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIAddShipmentForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIAddShipmentJSON

Add a shipment to a given order

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
    res, err := s.Orders.OrderAPIAddShipmentJSON(ctx, operations.OrderAPIAddShipmentJSONRequest{
        RechnungsdruckWebAppControllersAPIAPIAddShipmentToOrderModel: shared.RechnungsdruckWebAppControllersAPIAPIAddShipmentToOrderModel{
            CarrierID: sdk.Int(277596),
            Comment: sdk.String("atque"),
            OrderID: sdk.String("explicabo"),
            ShipmentType: sdk.Int(325685),
            ShippingID: sdk.String("nisi"),
            ShippingProviderID: sdk.Int64(147014),
            ShippingProviderProductID: sdk.Int64(956406),
        },
        ID: 159870,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIAddShipmentJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIAddShipmentRaw

Add a shipment to a given order

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
    res, err := s.Orders.OrderAPIAddShipmentRaw(ctx, operations.OrderAPIAddShipmentRawRequest{
        RequestBody: []byte("ratione"),
        ID: 129412,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIAddShipmentRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPICreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPICreateDeliveryNote(ctx, operations.OrderAPICreateDeliveryNoteRequest{
        ID: 903984,
        IncludePdf: sdk.Bool(false),
        SendToCloudID: sdk.Int64(578922),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPICreateDeliveryNote200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPICreateInvoice

Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPICreateInvoice(ctx, operations.OrderAPICreateInvoiceRequest{
        ID: 543806,
        IncludeInvoicePdf: sdk.Bool(false),
        SendToCloudID: sdk.Int64(92260),
        TemplateID: sdk.Int64(456911),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPIInvoice != nil {
        // handle response
    }
}
```

## ~~OrderAPIFind~~

Find a single order by its external id (order number)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIFind(ctx, operations.OrderAPIFindRequest{
        ID: "ee17cbe6-1e6b-47b9-9bc0-ab3c20c4f378",
        Partner: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIFind200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIGet

Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIGet(ctx, operations.OrderAPIGetRequest{
        ArticleTitleSource: operations.OrderAPIGetArticleTitleSourceEnumThree.ToPointer(),
        ID: 857723,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIGetByExtRef

Get a single order by its external order number

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIGetByExtRef(ctx, operations.OrderAPIGetByExtRefRequest{
        ExtRef: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIGetInvoiceList

Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIGetInvoiceList(ctx, operations.OrderAPIGetInvoiceListRequest{
        ExcludeTags: sdk.Bool(false),
        IncludePositions: sdk.Bool(false),
        MaxInvoiceDate: types.MustTimeFromString("2022-11-26T10:10:26.600Z"),
        MaxPayDate: types.MustTimeFromString("2021-02-19T06:17:20.977Z"),
        MinInvoiceDate: types.MustTimeFromString("2021-04-10T23:50:37.359Z"),
        MinPayDate: types.MustTimeFromString("2022-07-12T09:25:25.257Z"),
        OrderStateID: []int{
            992430,
            815524,
            85001,
            159414,
        },
        Page: sdk.Int(94458),
        PageSize: sdk.Int(628899),
        ShopID: []int64{
            398434,
            949298,
            62713,
        },
        Tag: []string{
            "vel",
            "in",
            "eius",
            "libero",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel != nil {
        // handle response
    }
}
```

## OrderAPIGetList

Get a list of all orders optionally filtered by date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIGetList(ctx, operations.OrderAPIGetListRequest{
        ArticleTitleSource: operations.OrderAPIGetListArticleTitleSourceEnumThree.ToPointer(),
        ExcludeTags: sdk.Bool(false),
        MaxOrderDate: types.MustTimeFromString("2022-12-07T16:30:09.640Z"),
        MinOrderDate: types.MustTimeFromString("2022-01-15T23:18:40.855Z"),
        MinimumBillBeeOrderID: sdk.Int64(119771),
        ModifiedAtMax: types.MustTimeFromString("2022-07-22T23:37:21.399Z"),
        ModifiedAtMin: types.MustTimeFromString("2022-08-11T00:03:24.347Z"),
        OrderStateID: []int{
            531849,
        },
        Page: sdk.Int(185232),
        PageSize: sdk.Int(845358),
        ShopID: []int64{
            536275,
            929292,
        },
        Tag: []string{
            "architecto",
            "omnis",
            "tenetur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIGetPatchableFields

Returns a list of fields which can be updated with the orders/{id} patch call

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIGetPatchableFields(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIGetPatchableFields200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIParsePlaceholdersForm

Parses a text and replaces all placeholders

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
    res, err := s.Orders.OrderAPIParsePlaceholdersForm(ctx, operations.OrderAPIParsePlaceholdersFormRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerParseTextContainer: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerParseTextContainer{
            IsHTML: sdk.Bool(false),
            Language: sdk.String("quasi"),
            TextToParse: sdk.String("at"),
            Trim: sdk.Bool(false),
        },
        ID: 92027,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIParsePlaceholdersForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIParsePlaceholdersJSON

Parses a text and replaces all placeholders

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
    res, err := s.Orders.OrderAPIParsePlaceholdersJSON(ctx, operations.OrderAPIParsePlaceholdersJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerParseTextContainer: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerParseTextContainer{
            IsHTML: sdk.Bool(false),
            Language: sdk.String("voluptate"),
            TextToParse: sdk.String("ipsa"),
            Trim: sdk.Bool(false),
        },
        ID: 326701,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIParsePlaceholdersJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIParsePlaceholdersRaw

Parses a text and replaces all placeholders

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
    res, err := s.Orders.OrderAPIParsePlaceholdersRaw(ctx, operations.OrderAPIParsePlaceholdersRawRequest{
        RequestBody: []byte("veritatis"),
        ID: 232744,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIParsePlaceholdersRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIPatchOrder

Updates one or more fields of an order

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIPatchOrder(ctx, operations.OrderAPIPatchOrderRequest{
        RequestBody: map[string]interface{}{
            "iste": "temporibus",
        },
        ID: 33074,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIPostNewOrderForm

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIPostNewOrderForm(ctx, operations.OrderAPIPostNewOrderFormRequest{
        BillbeeInterfacesBillbeeAPIModelOrderInput: shared.BillbeeInterfacesBillbeeAPIModelOrderInput{
            AcceptLossOfReturnRight: sdk.Bool(false),
            AdjustmentCost: sdk.Float64(5223.71),
            AdjustmentReason: sdk.String("aut"),
            APIAccountID: sdk.Int64(513075),
            APIAccountName: sdk.String("eum"),
            ArchivedAt: types.MustTimeFromString("2022-11-12T07:20:30.934Z"),
            BillBeeOrderID: sdk.Int64(544591),
            BillBeeParentOrderID: sdk.Int64(251941),
            Buyer: &shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput{
                BillbeeShopID: sdk.Int64(32465),
                BillbeeShopName: sdk.String("dolor"),
                Email: sdk.String("Dennis37@yahoo.com"),
                FirstName: sdk.String("Adolfo"),
                ID: sdk.String("71f93f5f-0642-4dac-baf5-15cc413aa63a"),
                LastName: sdk.String("O'Reilly"),
                Nick: sdk.String("recusandae"),
                Platform: sdk.String("totam"),
            },
            Comments: []shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                    Created: types.MustTimeFromString("2022-07-03T08:20:26.765Z"),
                    FromCustomer: sdk.Bool(false),
                    ID: sdk.Int64(554688),
                    Name: sdk.String("Clara Senger"),
                    Text: sdk.String("commodi"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                    Created: types.MustTimeFromString("2022-08-22T09:37:14.602Z"),
                    FromCustomer: sdk.Bool(false),
                    ID: sdk.Int64(968904),
                    Name: sdk.String("Corey Walsh DDS"),
                    Text: sdk.String("consectetur"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                    Created: types.MustTimeFromString("2022-08-26T18:58:12.703Z"),
                    FromCustomer: sdk.Bool(false),
                    ID: sdk.Int64(937285),
                    Name: sdk.String("Jesus Yost"),
                    Text: sdk.String("quidem"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                    Created: types.MustTimeFromString("2020-04-23T16:59:51.275Z"),
                    FromCustomer: sdk.Bool(false),
                    ID: sdk.Int64(296556),
                    Name: sdk.String("Ollie Flatley"),
                    Text: sdk.String("beatae"),
                },
            },
            ConfirmedAt: types.MustTimeFromString("2022-01-18T21:39:18.493Z"),
            CreatedAt: types.MustTimeFromString("2022-04-20T09:42:55.692Z"),
            Currency: sdk.String("corporis"),
            CustomInvoiceNote: sdk.String("harum"),
            Customer: &shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput{
                ArchivedAt: types.MustTimeFromString("2022-12-10T16:47:53.137Z"),
                DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(916727),
                    SubType: sdk.String("libero"),
                    TypeID: sdk.Int64(113816),
                    Value: sdk.String("accusamus"),
                },
                DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(631126),
                    SubType: sdk.String("tempora"),
                    TypeID: sdk.Int64(132815),
                    Value: sdk.String("voluptas"),
                },
                DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(374244),
                    SubType: sdk.String("voluptas"),
                    TypeID: sdk.Int64(324405),
                    Value: sdk.String("nobis"),
                },
                DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(680116),
                    SubType: sdk.String("adipisci"),
                    TypeID: sdk.Int64(795535),
                    Value: sdk.String("dolores"),
                },
                DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(503934),
                    SubType: sdk.String("in"),
                    TypeID: sdk.Int64(296242),
                    Value: sdk.String("aliquam"),
                },
                DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(885963),
                    SubType: sdk.String("temporibus"),
                    TypeID: sdk.Int64(351870),
                    Value: sdk.String("adipisci"),
                },
                Email: sdk.String("Jimmy.Luettgen63@hotmail.com"),
                ID: sdk.Int64(548519),
                LanguageID: sdk.Int(867290),
                MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(940210),
                        SubType: sdk.String("exercitationem"),
                        TypeID: sdk.Int64(750765),
                        Value: sdk.String("sit"),
                    },
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(699575),
                        SubType: sdk.String("sed"),
                        TypeID: sdk.Int64(967966),
                        Value: sdk.String("explicabo"),
                    },
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(994401),
                        SubType: sdk.String("facilis"),
                        TypeID: sdk.Int64(451822),
                        Value: sdk.String("expedita"),
                    },
                },
                Name: sdk.String("Margarita Greenholt"),
                Number: sdk.Int(447516),
                PriceGroupID: sdk.Int64(417486),
                RestoredAt: types.MustTimeFromString("2022-09-27T03:48:38.490Z"),
                Tel1: sdk.String("voluptas"),
                Tel2: sdk.String("unde"),
                Type: sdk.Int(100032),
                VatID: sdk.String("suscipit"),
            },
            CustomerNumber: sdk.String("sapiente"),
            CustomerVatID: sdk.String("debitis"),
            DeliverySourceCountryCode: sdk.String("illo"),
            DistributionCenter: sdk.String("reiciendis"),
            History: []shared.BillbeeInterfacesOrderHistoryEntry{
                shared.BillbeeInterfacesOrderHistoryEntry{
                    Created: types.MustTimeFromString("2021-01-15T21:52:35.790Z"),
                    EmployeeName: sdk.String("incidunt"),
                    EventTypeName: sdk.String("sed"),
                    Text: sdk.String("provident"),
                    TypeID: sdk.Int(258702),
                },
            },
            ID: sdk.String("e3698f44-7f60-43e8-b445-e80ca55efd20"),
            InvoiceAddress: &shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel{
                BillbeeID: sdk.Int64(901483),
                City: sdk.String("West Isabella"),
                Company: sdk.String("Braun, Langworth and Heidenreich"),
                Country: sdk.String("Lithuania"),
                CountryIso2: sdk.String("cum"),
                Email: sdk.String("Marilyne_Lehner@yahoo.com"),
                FirstName: sdk.String("Meredith"),
                HouseNumber: sdk.String("debitis"),
                LastName: sdk.String("Doyle"),
                Line2: sdk.String("dolorum"),
                NameAddition: sdk.String("nostrum"),
                Phone: sdk.String("1-758-451-2806 x7204"),
                State: sdk.String("ipsam"),
                Street: sdk.String("55930 Jaskolski Crescent"),
                Zip: sdk.String("sit"),
            },
            InvoiceDate: types.MustTimeFromString("2022-08-28T22:43:39.407Z"),
            InvoiceNumber: sdk.Int(906172),
            InvoiceNumberPostfix: sdk.String("error"),
            InvoiceNumberPrefix: sdk.String("consequatur"),
            IsCancelationFor: sdk.String("incidunt"),
            IsFromBillbeeAPI: sdk.Bool(false),
            LanguageCode: sdk.String("reiciendis"),
            LastModifiedAt: types.MustTimeFromString("2022-04-23T19:46:15.105Z"),
            MerchantVatID: sdk.String("dicta"),
            OrderItems: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                    Attributes: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("4b8abf60-3a79-4f9d-be0a-b7da8a50ce18"),
                            Name: sdk.String("Tabitha Leannon"),
                            Price: sdk.Float64(8066.7),
                            Value: sdk.String("et"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("73d689ee-e952-46f8-9986-e881ead4f0e1"),
                            Name: sdk.String("Teresa Daniel"),
                            Price: sdk.Float64(2465.35),
                            Value: sdk.String("a"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("94e29e97-3e92-42a5-ba15-be3e060807e2"),
                            Name: sdk.String("Elmer Treutel"),
                            Price: sdk.Float64(7152.08),
                            Value: sdk.String("voluptatum"),
                        },
                    },
                    BillbeeID: sdk.Int64(523006),
                    Discount: sdk.Float64(3044.46),
                    DontAdjustStock: sdk.Bool(false),
                    GetPriceFromArticleIfAny: sdk.Bool(false),
                    InvoiceSKU: sdk.String("ad"),
                    IsCoupon: sdk.Bool(false),
                    Product: &shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput{
                        BillbeeID: sdk.Int64(997963),
                        CountryOfOrigin: sdk.String("alias"),
                        Ean: sdk.String("corporis"),
                        ID: sdk.String("97a60ff2-a54a-431e-9476-4a3e865e7956"),
                        Images: []shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("provident"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(133439),
                                URL: sdk.String("ullam"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("quasi"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(657020),
                                URL: sdk.String("nostrum"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("mollitia"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(591027),
                                URL: sdk.String("possimus"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("animi"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(402767),
                                URL: sdk.String("aliquid"),
                            },
                        },
                        IsDigital: sdk.Bool(false),
                        OldID: sdk.String("accusantium"),
                        PlatformData: sdk.String("repellat"),
                        Sku: sdk.String("doloribus"),
                        TARICCode: sdk.String("ullam"),
                        Title: sdk.String("Ms."),
                        Type: sdk.Int(721407),
                        Weight: sdk.Int(937636),
                    },
                    Quantity: sdk.Float64(6375.83),
                    SerialNumber: sdk.String("laborum"),
                    ShippingProfileID: sdk.String("placeat"),
                    TaxAmount: sdk.Float64(2666.97),
                    TaxIndex: sdk.Int(976226),
                    TotalPrice: sdk.Float64(5640.64),
                    TransactionID: sdk.String("officiis"),
                    UnrebatedTotalPrice: sdk.Float64(9569.33),
                },
            },
            OrderNumber: sdk.String("cumque"),
            PaidAmount: sdk.Float64(1134.86),
            PayedAt: types.MustTimeFromString("2022-06-16T06:32:28.803Z"),
            PaymentInstruction: sdk.String("quis"),
            PaymentMethod: shared.BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnumTwentyFour.ToPointer(),
            PaymentReference: sdk.String("fugit"),
            PaymentTransactionID: sdk.String("cumque"),
            Payments: []shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                    BillbeeID: sdk.Int64(21688),
                    Name: sdk.String("Judy Kemmer"),
                    PayDate: types.MustTimeFromString("2020-09-06T11:21:50.907Z"),
                    PayValue: sdk.Float64(1794.1),
                    PaymentType: sdk.Int(958741),
                    Purpose: sdk.String("eum"),
                    SourceTechnology: sdk.String("dicta"),
                    SourceText: sdk.String("minima"),
                    TransactionID: sdk.String("beatae"),
                },
            },
            RestoredAt: types.MustTimeFromString("2021-10-27T12:32:54.445Z"),
            Seller: &shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput{
                BillbeeShopID: sdk.Int64(936469),
                BillbeeShopName: sdk.String("soluta"),
                Email: sdk.String("Rosendo_Bechtelar98@hotmail.com"),
                FirstName: sdk.String("Sim"),
                ID: sdk.String("6c632ca3-aed0-4117-9963-12fde0477177"),
                LastName: sdk.String("Lang"),
                Nick: sdk.String("maiores"),
                Platform: sdk.String("reiciendis"),
            },
            SellerComment: sdk.String("vel"),
            ShipWeightKg: sdk.Float64(999.58),
            ShippedAt: types.MustTimeFromString("2022-11-18T13:59:08.408Z"),
            ShippingAddress: &shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel{
                BillbeeID: sdk.Int64(117315),
                City: sdk.String("Donavonport"),
                Company: sdk.String("Feil - Jacobs"),
                Country: sdk.String("Azerbaijan"),
                CountryIso2: sdk.String("laborum"),
                Email: sdk.String("Evie.Stiedemann63@gmail.com"),
                FirstName: sdk.String("Georgiana"),
                HouseNumber: sdk.String("aliquid"),
                LastName: sdk.String("Bahringer"),
                Line2: sdk.String("eum"),
                NameAddition: sdk.String("voluptas"),
                Phone: sdk.String("(706) 896-6735 x3184"),
                State: sdk.String("quo"),
                Street: sdk.String("2370 Rippin Inlet"),
                Zip: sdk.String("beatae"),
            },
            ShippingCost: sdk.Float64(5308.6),
            ShippingIds: []shared.BillbeeInterfacesBillbeeAPIModelShipment{
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(85233),
                    Created: types.MustTimeFromString("2021-09-02T01:19:33.894Z"),
                    ShipmentType: sdk.Int(634786),
                    Shipper: sdk.String("voluptatem"),
                    ShippingCarrier: sdk.Int(959143),
                    ShippingID: sdk.String("officiis"),
                    ShippingProviderID: sdk.Int64(103298),
                    ShippingProviderProductID: sdk.Int64(682119),
                    TrackingURL: sdk.String("pariatur"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(891315),
                    Created: types.MustTimeFromString("2022-12-31T13:25:17.006Z"),
                    ShipmentType: sdk.Int(534917),
                    Shipper: sdk.String("earum"),
                    ShippingCarrier: sdk.Int(404244),
                    ShippingID: sdk.String("sapiente"),
                    ShippingProviderID: sdk.Int64(524184),
                    ShippingProviderProductID: sdk.Int64(796320),
                    TrackingURL: sdk.String("nemo"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(992074),
                    Created: types.MustTimeFromString("2022-08-24T08:13:37.314Z"),
                    ShipmentType: sdk.Int(19122),
                    Shipper: sdk.String("illum"),
                    ShippingCarrier: sdk.Int(518150),
                    ShippingID: sdk.String("impedit"),
                    ShippingProviderID: sdk.Int64(842777),
                    ShippingProviderProductID: sdk.Int64(720528),
                    TrackingURL: sdk.String("ipsam"),
                },
            },
            ShippingProfileID: sdk.String("culpa"),
            ShippingProfileName: sdk.String("dolor"),
            ShippingProviderID: sdk.Int64(307376),
            ShippingProviderName: sdk.String("inventore"),
            ShippingProviderProductID: sdk.Int64(537279),
            ShippingProviderProductName: sdk.String("veritatis"),
            State: shared.BillbeeInterfacesBillbeeAPIModelOrderStateEnumFive.ToPointer(),
            Tags: []string{
                "consequatur",
            },
            TaxRate1: sdk.Float64(1000.14),
            TaxRate2: sdk.Float64(249.44),
            TotalCost: sdk.Float64(2650.39),
            UpdatedAt: types.MustTimeFromString("2022-12-07T20:31:49.684Z"),
            VatID: sdk.String("laudantium"),
            VatMode: shared.BillbeeInterfacesBillbeeAPIModelOrderVatModeEnumZero.ToPointer(),
        },
        ShopID: sdk.Int64(222658),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIPostNewOrderJSON

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIPostNewOrderJSON(ctx, operations.OrderAPIPostNewOrderJSONRequest{
        BillbeeInterfacesBillbeeAPIModelOrderInput: shared.BillbeeInterfacesBillbeeAPIModelOrderInput{
            AcceptLossOfReturnRight: sdk.Bool(false),
            AdjustmentCost: sdk.Float64(8562.77),
            AdjustmentReason: sdk.String("ipsam"),
            APIAccountID: sdk.Int64(162120),
            APIAccountName: sdk.String("ipsa"),
            ArchivedAt: types.MustTimeFromString("2021-03-06T19:49:32.641Z"),
            BillBeeOrderID: sdk.Int64(773456),
            BillBeeParentOrderID: sdk.Int64(884952),
            Buyer: &shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput{
                BillbeeShopID: sdk.Int64(456410),
                BillbeeShopName: sdk.String("necessitatibus"),
                Email: sdk.String("Esta.Dooley42@gmail.com"),
                FirstName: sdk.String("Julius"),
                ID: sdk.String("451c6c6e-205e-416d-aab3-fec9578a6458"),
                LastName: sdk.String("Gibson"),
                Nick: sdk.String("aspernatur"),
                Platform: sdk.String("ducimus"),
            },
            Comments: []shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel{
                    Created: types.MustTimeFromString("2021-12-21T17:45:55.733Z"),
                    FromCustomer: sdk.Bool(false),
                    ID: sdk.Int64(277340),
                    Name: sdk.String("Mrs. Hilda Stark"),
                    Text: sdk.String("consectetur"),
                },
            },
            ConfirmedAt: types.MustTimeFromString("2022-06-01T07:36:53.765Z"),
            CreatedAt: types.MustTimeFromString("2020-10-05T05:08:23.872Z"),
            Currency: sdk.String("alias"),
            CustomInvoiceNote: sdk.String("omnis"),
            Customer: &shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput{
                ArchivedAt: types.MustTimeFromString("2022-06-03T15:51:42.244Z"),
                DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(612867),
                    SubType: sdk.String("magni"),
                    TypeID: sdk.Int64(81369),
                    Value: sdk.String("fuga"),
                },
                DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(881897),
                    SubType: sdk.String("voluptatibus"),
                    TypeID: sdk.Int64(719620),
                    Value: sdk.String("omnis"),
                },
                DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(966390),
                    SubType: sdk.String("minima"),
                    TypeID: sdk.Int64(507636),
                    Value: sdk.String("maxime"),
                },
                DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(300403),
                    SubType: sdk.String("temporibus"),
                    TypeID: sdk.Int64(549501),
                    Value: sdk.String("commodi"),
                },
                DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(930819),
                    SubType: sdk.String("commodi"),
                    TypeID: sdk.Int64(520761),
                    Value: sdk.String("earum"),
                },
                DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(267207),
                    SubType: sdk.String("nam"),
                    TypeID: sdk.Int64(877399),
                    Value: sdk.String("voluptatem"),
                },
                Email: sdk.String("Herminio24@yahoo.com"),
                ID: sdk.Int64(978548),
                LanguageID: sdk.Int(318233),
                MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(858778),
                        SubType: sdk.String("deserunt"),
                        TypeID: sdk.Int64(458503),
                        Value: sdk.String("nemo"),
                    },
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(444587),
                        SubType: sdk.String("est"),
                        TypeID: sdk.Int64(336102),
                        Value: sdk.String("sint"),
                    },
                    shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                        ID: sdk.Int64(880679),
                        SubType: sdk.String("impedit"),
                        TypeID: sdk.Int64(945027),
                        Value: sdk.String("necessitatibus"),
                    },
                },
                Name: sdk.String("Ruben Hodkiewicz"),
                Number: sdk.Int(65082),
                PriceGroupID: sdk.Int64(791880),
                RestoredAt: types.MustTimeFromString("2021-08-25T17:55:33.849Z"),
                Tel1: sdk.String("consectetur"),
                Tel2: sdk.String("velit"),
                Type: sdk.Int(538869),
                VatID: sdk.String("ipsum"),
            },
            CustomerNumber: sdk.String("impedit"),
            CustomerVatID: sdk.String("magni"),
            DeliverySourceCountryCode: sdk.String("soluta"),
            DistributionCenter: sdk.String("repudiandae"),
            History: []shared.BillbeeInterfacesOrderHistoryEntry{
                shared.BillbeeInterfacesOrderHistoryEntry{
                    Created: types.MustTimeFromString("2022-07-08T17:52:09.255Z"),
                    EmployeeName: sdk.String("voluptate"),
                    EventTypeName: sdk.String("sequi"),
                    Text: sdk.String("dignissimos"),
                    TypeID: sdk.Int(205566),
                },
                shared.BillbeeInterfacesOrderHistoryEntry{
                    Created: types.MustTimeFromString("2021-05-24T15:53:38.806Z"),
                    EmployeeName: sdk.String("quibusdam"),
                    EventTypeName: sdk.String("iure"),
                    Text: sdk.String("odit"),
                    TypeID: sdk.Int(974990),
                },
                shared.BillbeeInterfacesOrderHistoryEntry{
                    Created: types.MustTimeFromString("2022-09-13T04:46:56.015Z"),
                    EmployeeName: sdk.String("quibusdam"),
                    EventTypeName: sdk.String("inventore"),
                    Text: sdk.String("facere"),
                    TypeID: sdk.Int(726878),
                },
            },
            ID: sdk.String("1f2c4310-661e-4963-89e1-cf9e06e3a437"),
            InvoiceAddress: &shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel{
                BillbeeID: sdk.Int64(24753),
                City: sdk.String("North Lucieshire"),
                Company: sdk.String("Pouros - Hodkiewicz"),
                Country: sdk.String("Pitcairn Islands"),
                CountryIso2: sdk.String("placeat"),
                Email: sdk.String("Melvin.Lind35@yahoo.com"),
                FirstName: sdk.String("Layla"),
                HouseNumber: sdk.String("necessitatibus"),
                LastName: sdk.String("O'Keefe"),
                Line2: sdk.String("impedit"),
                NameAddition: sdk.String("ipsam"),
                Phone: sdk.String("(764) 408-2102 x316"),
                State: sdk.String("ex"),
                Street: sdk.String("7756 Bulah Alley"),
                Zip: sdk.String("magni"),
            },
            InvoiceDate: types.MustTimeFromString("2022-12-08T11:32:42.651Z"),
            InvoiceNumber: sdk.Int(63553),
            InvoiceNumberPostfix: sdk.String("modi"),
            InvoiceNumberPrefix: sdk.String("neque"),
            IsCancelationFor: sdk.String("exercitationem"),
            IsFromBillbeeAPI: sdk.Bool(false),
            LanguageCode: sdk.String("itaque"),
            LastModifiedAt: types.MustTimeFromString("2022-10-14T09:06:41.387Z"),
            MerchantVatID: sdk.String("unde"),
            OrderItems: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                    Attributes: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("c2259b1a-bda8-4c07-8e10-84cb0672d1ad"),
                            Name: sdk.String("Javier McKenzie"),
                            Price: sdk.Float64(7332.89),
                            Value: sdk.String("sint"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("665b85ef-bd02-4bae-8be2-d782259e3ea4"),
                            Name: sdk.String("Tim Breitenberg"),
                            Price: sdk.Float64(9631.98),
                            Value: sdk.String("cupiditate"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("2443da7c-e52b-4895-8537-c6454efb0b34"),
                            Name: sdk.String("Sergio Hirthe"),
                            Price: sdk.Float64(7955.91),
                            Value: sdk.String("fuga"),
                        },
                    },
                    BillbeeID: sdk.Int64(344530),
                    Discount: sdk.Float64(6692.37),
                    DontAdjustStock: sdk.Bool(false),
                    GetPriceFromArticleIfAny: sdk.Bool(false),
                    InvoiceSKU: sdk.String("impedit"),
                    IsCoupon: sdk.Bool(false),
                    Product: &shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput{
                        BillbeeID: sdk.Int64(963741),
                        CountryOfOrigin: sdk.String("tempore"),
                        Ean: sdk.String("vero"),
                        ID: sdk.String("2fd57075-7792-4917-bdea-c646ecb57340"),
                        Images: []shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("vero"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(194901),
                                URL: sdk.String("repudiandae"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("cum"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(120120),
                                URL: sdk.String("earum"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("veniam"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(659268),
                                URL: sdk.String("dolores"),
                            },
                        },
                        IsDigital: sdk.Bool(false),
                        OldID: sdk.String("nam"),
                        PlatformData: sdk.String("dicta"),
                        Sku: sdk.String("consequuntur"),
                        TARICCode: sdk.String("necessitatibus"),
                        Title: sdk.String("Miss"),
                        Type: sdk.Int(56877),
                        Weight: sdk.Int(497357),
                    },
                    Quantity: sdk.Float64(9804.86),
                    SerialNumber: sdk.String("veritatis"),
                    ShippingProfileID: sdk.String("quasi"),
                    TaxAmount: sdk.Float64(3864.47),
                    TaxIndex: sdk.Int(863471),
                    TotalPrice: sdk.Float64(7294.48),
                    TransactionID: sdk.String("excepturi"),
                    UnrebatedTotalPrice: sdk.Float64(5782.1),
                },
                shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                    Attributes: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("45fc95fa-8897-40e1-89db-b30fcb33ea05"),
                            Name: sdk.String("Jeannette Bradtke"),
                            Price: sdk.Float64(7566.54),
                            Value: sdk.String("possimus"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("44e2f52d-82d3-4513-bb6f-48b656bcdb35"),
                            Name: sdk.String("Courtney Crooks"),
                            Price: sdk.Float64(7009.28),
                            Value: sdk.String("eos"),
                        },
                    },
                    BillbeeID: sdk.Int64(440777),
                    Discount: sdk.Float64(3455.06),
                    DontAdjustStock: sdk.Bool(false),
                    GetPriceFromArticleIfAny: sdk.Bool(false),
                    InvoiceSKU: sdk.String("neque"),
                    IsCoupon: sdk.Bool(false),
                    Product: &shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput{
                        BillbeeID: sdk.Int64(480061),
                        CountryOfOrigin: sdk.String("est"),
                        Ean: sdk.String("rem"),
                        ID: sdk.String("cd9e7319-c177-4d52-9f77-b114eeb52ff7"),
                        Images: []shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("nemo"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(999809),
                                URL: sdk.String("quisquam"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("sequi"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(467119),
                                URL: sdk.String("deleniti"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("illo"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(290248),
                                URL: sdk.String("assumenda"),
                            },
                        },
                        IsDigital: sdk.Bool(false),
                        OldID: sdk.String("aliquam"),
                        PlatformData: sdk.String("quisquam"),
                        Sku: sdk.String("provident"),
                        TARICCode: sdk.String("laudantium"),
                        Title: sdk.String("Dr."),
                        Type: sdk.Int(9683),
                        Weight: sdk.Int(805264),
                    },
                    Quantity: sdk.Float64(1363.57),
                    SerialNumber: sdk.String("nam"),
                    ShippingProfileID: sdk.String("expedita"),
                    TaxAmount: sdk.Float64(5591.74),
                    TaxIndex: sdk.Int(590858),
                    TotalPrice: sdk.Float64(9222.99),
                    TransactionID: sdk.String("rerum"),
                    UnrebatedTotalPrice: sdk.Float64(4923.61),
                },
                shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                    Attributes: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("dad636c6-0050-43d8-bb31-180f739ae9e0"),
                            Name: sdk.String("Nellie Waters"),
                            Price: sdk.Float64(439.75),
                            Value: sdk.String("sint"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("e2810331-f398-41d4-8700-b607f3c93c73"),
                            Name: sdk.String("Jeremiah Spencer"),
                            Price: sdk.Float64(9485.41),
                            Value: sdk.String("aspernatur"),
                        },
                    },
                    BillbeeID: sdk.Int64(778276),
                    Discount: sdk.Float64(9310.77),
                    DontAdjustStock: sdk.Bool(false),
                    GetPriceFromArticleIfAny: sdk.Bool(false),
                    InvoiceSKU: sdk.String("illum"),
                    IsCoupon: sdk.Bool(false),
                    Product: &shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput{
                        BillbeeID: sdk.Int64(670762),
                        CountryOfOrigin: sdk.String("dignissimos"),
                        Ean: sdk.String("vero"),
                        ID: sdk.String("23f22574-11fa-4f4b-b544-e472e802857a"),
                        Images: []shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("libero"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(300189),
                                URL: sdk.String("sit"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("modi"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(430116),
                                URL: sdk.String("nesciunt"),
                            },
                        },
                        IsDigital: sdk.Bool(false),
                        OldID: sdk.String("mollitia"),
                        PlatformData: sdk.String("dignissimos"),
                        Sku: sdk.String("fugiat"),
                        TARICCode: sdk.String("nostrum"),
                        Title: sdk.String("Ms."),
                        Type: sdk.Int(330600),
                        Weight: sdk.Int(969206),
                    },
                    Quantity: sdk.Float64(662.07),
                    SerialNumber: sdk.String("modi"),
                    ShippingProfileID: sdk.String("aut"),
                    TaxAmount: sdk.Float64(135.08),
                    TaxIndex: sdk.Int(911657),
                    TotalPrice: sdk.Float64(4837.53),
                    TransactionID: sdk.String("commodi"),
                    UnrebatedTotalPrice: sdk.Float64(2561.14),
                },
                shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput{
                    Attributes: []shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("d7334ec1-b781-4b36-a080-88d100efada2"),
                            Name: sdk.String("Mary Vandervort II"),
                            Price: sdk.Float64(1854.48),
                            Value: sdk.String("qui"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("eb2164cf-9ab8-4366-8723-ffda9e06bee4"),
                            Name: sdk.String("Howard Hermann DVM"),
                            Price: sdk.Float64(7549.01),
                            Value: sdk.String("quae"),
                        },
                        shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute{
                            ID: sdk.String("e115c80b-ff91-4854-8ec4-2defcce8f197"),
                            Name: sdk.String("Charlene Kuhic"),
                            Price: sdk.Float64(4235.88),
                            Value: sdk.String("neque"),
                        },
                    },
                    BillbeeID: sdk.Int64(357758),
                    Discount: sdk.Float64(3753.5),
                    DontAdjustStock: sdk.Bool(false),
                    GetPriceFromArticleIfAny: sdk.Bool(false),
                    InvoiceSKU: sdk.String("consequuntur"),
                    IsCoupon: sdk.Bool(false),
                    Product: &shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput{
                        BillbeeID: sdk.Int64(641133),
                        CountryOfOrigin: sdk.String("reprehenderit"),
                        Ean: sdk.String("distinctio"),
                        ID: sdk.String("408f05e3-d48f-4daf-b13a-1f5fd94259c0"),
                        Images: []shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("nesciunt"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(412433),
                                URL: sdk.String("sapiente"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("consequuntur"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(330440),
                                URL: sdk.String("debitis"),
                            },
                            shared.BillbeeInterfacesBillbeeAPIModelProductImage{
                                ExternalID: sdk.String("officia"),
                                IsDefaultImage: sdk.Bool(false),
                                Position: sdk.Int(575062),
                                URL: sdk.String("ut"),
                            },
                        },
                        IsDigital: sdk.Bool(false),
                        OldID: sdk.String("numquam"),
                        PlatformData: sdk.String("tenetur"),
                        Sku: sdk.String("adipisci"),
                        TARICCode: sdk.String("libero"),
                        Title: sdk.String("Ms."),
                        Type: sdk.Int(329651),
                        Weight: sdk.Int(403147),
                    },
                    Quantity: sdk.Float64(7917.62),
                    SerialNumber: sdk.String("ab"),
                    ShippingProfileID: sdk.String("beatae"),
                    TaxAmount: sdk.Float64(9431.43),
                    TaxIndex: sdk.Int(392319),
                    TotalPrice: sdk.Float64(7869.54),
                    TransactionID: sdk.String("dolor"),
                    UnrebatedTotalPrice: sdk.Float64(4965.48),
                },
            },
            OrderNumber: sdk.String("fuga"),
            PaidAmount: sdk.Float64(3269.03),
            PayedAt: types.MustTimeFromString("2022-10-26T18:16:01.869Z"),
            PaymentInstruction: sdk.String("aliquid"),
            PaymentMethod: shared.BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnumThirtyFour.ToPointer(),
            PaymentReference: sdk.String("incidunt"),
            PaymentTransactionID: sdk.String("adipisci"),
            Payments: []shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                    BillbeeID: sdk.Int64(220528),
                    Name: sdk.String("Kristy Quigley II"),
                    PayDate: types.MustTimeFromString("2022-09-06T15:25:19.077Z"),
                    PayValue: sdk.Float64(2305.71),
                    PaymentType: sdk.Int(644734),
                    Purpose: sdk.String("modi"),
                    SourceTechnology: sdk.String("veniam"),
                    SourceText: sdk.String("quod"),
                    TransactionID: sdk.String("itaque"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                    BillbeeID: sdk.Int64(955569),
                    Name: sdk.String("Bill Yundt"),
                    PayDate: types.MustTimeFromString("2022-12-30T01:26:23.904Z"),
                    PayValue: sdk.Float64(6339.82),
                    PaymentType: sdk.Int(60335),
                    Purpose: sdk.String("nobis"),
                    SourceTechnology: sdk.String("necessitatibus"),
                    SourceText: sdk.String("quia"),
                    TransactionID: sdk.String("dicta"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment{
                    BillbeeID: sdk.Int64(426002),
                    Name: sdk.String("Mr. Darrel Hermann Jr."),
                    PayDate: types.MustTimeFromString("2021-06-20T22:36:53.570Z"),
                    PayValue: sdk.Float64(4355.31),
                    PaymentType: sdk.Int(842402),
                    Purpose: sdk.String("quod"),
                    SourceTechnology: sdk.String("nemo"),
                    SourceText: sdk.String("recusandae"),
                    TransactionID: sdk.String("velit"),
                },
            },
            RestoredAt: types.MustTimeFromString("2022-07-04T20:08:46.226Z"),
            Seller: &shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput{
                BillbeeShopID: sdk.Int64(388404),
                BillbeeShopName: sdk.String("sed"),
                Email: sdk.String("Lexie_McKenzie70@yahoo.com"),
                FirstName: sdk.String("Max"),
                ID: sdk.String("e6949fb2-bb4e-4cae-ac3d-5db3adebd5da"),
                LastName: sdk.String("Veum"),
                Nick: sdk.String("laborum"),
                Platform: sdk.String("incidunt"),
            },
            SellerComment: sdk.String("maxime"),
            ShipWeightKg: sdk.Float64(3695.23),
            ShippedAt: types.MustTimeFromString("2022-08-15T08:07:45.294Z"),
            ShippingAddress: &shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel{
                BillbeeID: sdk.Int64(647210),
                City: sdk.String("Margaritachester"),
                Company: sdk.String("Grant - Sanford"),
                Country: sdk.String("Andorra"),
                CountryIso2: sdk.String("fugit"),
                Email: sdk.String("Eliseo_Hackett34@yahoo.com"),
                FirstName: sdk.String("Shyanne"),
                HouseNumber: sdk.String("unde"),
                LastName: sdk.String("Stokes"),
                Line2: sdk.String("error"),
                NameAddition: sdk.String("mollitia"),
                Phone: sdk.String("445-787-0683 x008"),
                State: sdk.String("necessitatibus"),
                Street: sdk.String("001 Sawayn Lodge"),
                Zip: sdk.String("quae"),
            },
            ShippingCost: sdk.Float64(1698.19),
            ShippingIds: []shared.BillbeeInterfacesBillbeeAPIModelShipment{
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(148379),
                    Created: types.MustTimeFromString("2020-09-06T06:44:59.753Z"),
                    ShipmentType: sdk.Int(55981),
                    Shipper: sdk.String("excepturi"),
                    ShippingCarrier: sdk.Int(950956),
                    ShippingID: sdk.String("maiores"),
                    ShippingProviderID: sdk.Int64(514462),
                    ShippingProviderProductID: sdk.Int64(982248),
                    TrackingURL: sdk.String("alias"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(992667),
                    Created: types.MustTimeFromString("2022-10-06T09:51:21.294Z"),
                    ShipmentType: sdk.Int(380595),
                    Shipper: sdk.String("earum"),
                    ShippingCarrier: sdk.Int(985360),
                    ShippingID: sdk.String("velit"),
                    ShippingProviderID: sdk.Int64(260588),
                    ShippingProviderProductID: sdk.Int64(458212),
                    TrackingURL: sdk.String("in"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(757407),
                    Created: types.MustTimeFromString("2022-10-18T16:16:49.615Z"),
                    ShipmentType: sdk.Int(876649),
                    Shipper: sdk.String("excepturi"),
                    ShippingCarrier: sdk.Int(37534),
                    ShippingID: sdk.String("qui"),
                    ShippingProviderID: sdk.Int64(771241),
                    ShippingProviderProductID: sdk.Int64(104736),
                    TrackingURL: sdk.String("incidunt"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelShipment{
                    BillbeeID: sdk.Int64(116558),
                    Created: types.MustTimeFromString("2022-08-23T11:04:54.920Z"),
                    ShipmentType: sdk.Int(701441),
                    Shipper: sdk.String("alias"),
                    ShippingCarrier: sdk.Int(624498),
                    ShippingID: sdk.String("vel"),
                    ShippingProviderID: sdk.Int64(35581),
                    ShippingProviderProductID: sdk.Int64(664197),
                    TrackingURL: sdk.String("laboriosam"),
                },
            },
            ShippingProfileID: sdk.String("ex"),
            ShippingProfileName: sdk.String("quas"),
            ShippingProviderID: sdk.Int64(85794),
            ShippingProviderName: sdk.String("ullam"),
            ShippingProviderProductID: sdk.Int64(62688),
            ShippingProviderProductName: sdk.String("similique"),
            State: shared.BillbeeInterfacesBillbeeAPIModelOrderStateEnumFive.ToPointer(),
            Tags: []string{
                "magni",
                "deserunt",
            },
            TaxRate1: sdk.Float64(9650.95),
            TaxRate2: sdk.Float64(6095.37),
            TotalCost: sdk.Float64(1512.3),
            UpdatedAt: types.MustTimeFromString("2022-03-13T00:08:56.282Z"),
            VatID: sdk.String("quis"),
            VatMode: shared.BillbeeInterfacesBillbeeAPIModelOrderVatModeEnumThree.ToPointer(),
        },
        ShopID: sdk.Int64(303253),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPIPostNewOrderRaw

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrderAPIPostNewOrderRaw(ctx, operations.OrderAPIPostNewOrderRawRequest{
        RequestBody: []byte("excepturi"),
        ShopID: sdk.Int64(980410),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != nil {
        // handle response
    }
}
```

## OrderAPISendMessageForm

Sends a message to the buyer

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
    res, err := s.Orders.OrderAPISendMessageForm(ctx, operations.OrderAPISendMessageFormRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModel: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModel{
            AlternativeMail: sdk.String("laudantium"),
            Body: []shared.BillbeeInterfacesOrderMultiLanguageString{
                shared.BillbeeInterfacesOrderMultiLanguageString{
                    LanguageCode: sdk.String("reiciendis"),
                    Text: sdk.String("amet"),
                },
            },
            SendMode: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModelSendModeEnumOne.ToPointer(),
            Subject: []shared.BillbeeInterfacesOrderMultiLanguageString{
                shared.BillbeeInterfacesOrderMultiLanguageString{
                    LanguageCode: sdk.String("quisquam"),
                    Text: sdk.String("tenetur"),
                },
            },
        },
        ID: 555294,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPISendMessageForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPISendMessageJSON

Sends a message to the buyer

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
    res, err := s.Orders.OrderAPISendMessageJSON(ctx, operations.OrderAPISendMessageJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModel: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModel{
            AlternativeMail: sdk.String("molestiae"),
            Body: []shared.BillbeeInterfacesOrderMultiLanguageString{
                shared.BillbeeInterfacesOrderMultiLanguageString{
                    LanguageCode: sdk.String("asperiores"),
                    Text: sdk.String("a"),
                },
                shared.BillbeeInterfacesOrderMultiLanguageString{
                    LanguageCode: sdk.String("nobis"),
                    Text: sdk.String("perspiciatis"),
                },
            },
            SendMode: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerSendMessageModelSendModeEnumZero.ToPointer(),
            Subject: []shared.BillbeeInterfacesOrderMultiLanguageString{
                shared.BillbeeInterfacesOrderMultiLanguageString{
                    LanguageCode: sdk.String("minus"),
                    Text: sdk.String("commodi"),
                },
            },
        },
        ID: 908734,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPISendMessageJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPISendMessageRaw

Sends a message to the buyer

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
    res, err := s.Orders.OrderAPISendMessageRaw(ctx, operations.OrderAPISendMessageRawRequest{
        RequestBody: []byte("porro"),
        ID: 735740,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPISendMessageRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsCreateForm

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

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
    res, err := s.Orders.OrderAPITagsCreateForm(ctx, operations.OrderAPITagsCreateFormRequest{
        RechnungsdruckWebAppControllersAPIOrderTagCreate: shared.RechnungsdruckWebAppControllersAPIOrderTagCreate{
            Tags: []string{
                "modi",
                "voluptates",
                "fugit",
            },
        },
        ID: 259377,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsCreateForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsCreateJSON

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

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
    res, err := s.Orders.OrderAPITagsCreateJSON(ctx, operations.OrderAPITagsCreateJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderTagCreate: shared.RechnungsdruckWebAppControllersAPIOrderTagCreate{
            Tags: []string{
                "eligendi",
            },
        },
        ID: 992887,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsCreateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsCreateRaw

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

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
    res, err := s.Orders.OrderAPITagsCreateRaw(ctx, operations.OrderAPITagsCreateRawRequest{
        RequestBody: []byte("esse"),
        ID: 500021,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsCreateRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsUpdateForm

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

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
    res, err := s.Orders.OrderAPITagsUpdateForm(ctx, operations.OrderAPITagsUpdateFormRequest{
        RechnungsdruckWebAppControllersAPIOrderTagCreate: shared.RechnungsdruckWebAppControllersAPIOrderTagCreate{
            Tags: []string{
                "repellat",
                "a",
                "animi",
            },
        },
        ID: 979287,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsUpdateForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsUpdateJSON

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

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
    res, err := s.Orders.OrderAPITagsUpdateJSON(ctx, operations.OrderAPITagsUpdateJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderTagCreate: shared.RechnungsdruckWebAppControllersAPIOrderTagCreate{
            Tags: []string{
                "nulla",
                "deserunt",
                "corporis",
                "velit",
            },
        },
        ID: 887701,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsUpdateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITagsUpdateRaw

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

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
    res, err := s.Orders.OrderAPITagsUpdateRaw(ctx, operations.OrderAPITagsUpdateRawRequest{
        RequestBody: []byte("enim"),
        ID: 638609,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITagsUpdateRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITriggerEventForm

Triggers a rule event

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
    res, err := s.Orders.OrderAPITriggerEventForm(ctx, operations.OrderAPITriggerEventFormRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerTriggerEventContainer: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerTriggerEventContainer{
            DelayInMinutes: sdk.Int(902979),
            Name: sdk.String("Delia Barton"),
        },
        ID: 97896,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITriggerEventForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITriggerEventJSON

Triggers a rule event

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
    res, err := s.Orders.OrderAPITriggerEventJSON(ctx, operations.OrderAPITriggerEventJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderAPIControllerTriggerEventContainer: shared.RechnungsdruckWebAppControllersAPIOrderAPIControllerTriggerEventContainer{
            DelayInMinutes: sdk.Int(502106),
            Name: sdk.String("Adrienne Daugherty"),
        },
        ID: 793568,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITriggerEventJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPITriggerEventRaw

Triggers a rule event

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
    res, err := s.Orders.OrderAPITriggerEventRaw(ctx, operations.OrderAPITriggerEventRawRequest{
        RequestBody: []byte("quia"),
        ID: 300651,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPITriggerEventRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIUpdateStateForm

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

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
    res, err := s.Orders.OrderAPIUpdateStateForm(ctx, operations.OrderAPIUpdateStateFormRequest{
        RechnungsdruckWebAppControllersAPIOrderStateUpdate: shared.RechnungsdruckWebAppControllersAPIOrderStateUpdate{
            NewStateID: shared.RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumEight.ToPointer(),
        },
        ID: 800799,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIUpdateStateForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIUpdateStateJSON

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

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
    res, err := s.Orders.OrderAPIUpdateStateJSON(ctx, operations.OrderAPIUpdateStateJSONRequest{
        RechnungsdruckWebAppControllersAPIOrderStateUpdate: shared.RechnungsdruckWebAppControllersAPIOrderStateUpdate{
            NewStateID: shared.RechnungsdruckWebAppControllersAPIOrderStateUpdateNewStateIDEnumNine.ToPointer(),
        },
        ID: 548846,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIUpdateStateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrderAPIUpdateStateRaw

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

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
    res, err := s.Orders.OrderAPIUpdateStateRaw(ctx, operations.OrderAPIUpdateStateRawRequest{
        RequestBody: []byte("amet"),
        ID: 473326,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderAPIUpdateStateRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Orders.SearchSearchForm(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumOne.ToPointer(),
        Term: sdk.String("laborum"),
        Type: []string{
            "perferendis",
            "necessitatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```

## SearchSearchJSON

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Orders.SearchSearchJSON(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumZero.ToPointer(),
        Term: sdk.String("molestias"),
        Type: []string{
            "sunt",
            "maiores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```

## SearchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

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
    res, err := s.Orders.SearchSearchRaw(ctx, []byte("neque"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```
