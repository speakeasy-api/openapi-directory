# Shipments

### Available Operations

* [ShipmentGetList](#shipmentgetlist) - Get a list of all shipments optionally filtered by date. All parameters are optional.
* [ShipmentGetPing](#shipmentgetping)
* [ShipmentGetShippingCarrier](#shipmentgetshippingcarrier) - Queries the currently available shipping carriers.
* [ShipmentGetShippingproviders](#shipmentgetshippingproviders) - Query all defined shipping providers
* [ShipmentPostShipmentForm](#shipmentpostshipmentform) - Creates a new shipment with the selected Shippingprovider
* [ShipmentPostShipmentJSON](#shipmentpostshipmentjson) - Creates a new shipment with the selected Shippingprovider
* [ShipmentPostShipmentRaw](#shipmentpostshipmentraw) - Creates a new shipment with the selected Shippingprovider
* [ShipmentShipWithLabelForm](#shipmentshipwithlabelform) - Creates a shipment for an order in billbee
* [ShipmentShipWithLabelJSON](#shipmentshipwithlabeljson) - Creates a shipment for an order in billbee
* [ShipmentShipWithLabelRaw](#shipmentshipwithlabelraw) - Creates a shipment for an order in billbee

## ShipmentGetList

Get a list of all shipments optionally filtered by date. All parameters are optional.

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
    res, err := s.Shipments.ShipmentGetList(ctx, operations.ShipmentGetListRequest{
        CreatedAtMax: types.MustTimeFromString("2022-12-31T04:26:39.100Z"),
        CreatedAtMin: types.MustTimeFromString("2022-05-30T14:43:40.138Z"),
        MinimumShipmentID: sdk.Int64(413086),
        OrderID: sdk.Int64(287141),
        Page: sdk.Int(710059),
        PageSize: sdk.Int(446737),
        ShippingProviderID: sdk.Int64(789870),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment != nil {
        // handle response
    }
}
```

## ShipmentGetPing

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
    res, err := s.Shipments.ShipmentGetPing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentGetPing200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentGetShippingCarrier

Queries the currently available shipping carriers.

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
    res, err := s.Shipments.ShipmentGetShippingCarrier(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentGetShippingCarrier200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentGetShippingproviders

Query all defined shipping providers

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
    res, err := s.Shipments.ShipmentGetShippingproviders(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentGetShippingproviders200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentPostShipmentForm

Creates a new shipment with the selected Shippingprovider

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentPostShipmentForm(ctx, shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput{
        ClientReference: sdk.String("sunt"),
        Content: sdk.String("enim"),
        CustomerNumber: sdk.String("nulla"),
        Dimension: &shared.BillbeeInterfacesShippingShipmentDataDimensions{
            Height: sdk.Float64(9792.71),
            Length: sdk.Float64(7156.22),
            Width: sdk.Float64(6496.57),
        },
        OrderCurrencyCode: sdk.String("impedit"),
        OrderSum: sdk.Float64(8809.98),
        PrinterIDForExportDocs: sdk.Int64(91120),
        PrinterName: sdk.String("quas"),
        ProductCode: sdk.String("blanditiis"),
        ProviderName: sdk.String("cum"),
        ReceiverAddress: &shared.BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput{
            AddressAddition: sdk.String("dicta"),
            City: sdk.String("Goodwinside"),
            Company: sdk.String("Corwin, Rutherford and Macejkovic"),
            CountryCode: sdk.String("SA"),
            CountryCodeIso3: sdk.String("vel"),
            Email: sdk.String("Theresia8@hotmail.com"),
            FirstName: sdk.String("Willow"),
            Housenumber: sdk.String("itaque"),
            IsExportCountry: sdk.Bool(false),
            LastName: sdk.String("Terry"),
            Name2: sdk.String("quidem"),
            State: sdk.String("illo"),
            Street: sdk.String("477 Ritchie Hill"),
            Telephone: sdk.String("saepe"),
            Zip: sdk.String("earum"),
        },
        ShipDate: types.MustTimeFromString("2021-08-04T19:13:24.542Z"),
        TotalNet: sdk.Float64(3109.3),
        WeightInGram: sdk.Float64(2159.59),
        ShippingCarrier: shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnumNine.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentPostShipmentForm200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentPostShipmentJSON

Creates a new shipment with the selected Shippingprovider

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentPostShipmentJSON(ctx, shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput{
        ClientReference: sdk.String("laudantium"),
        Content: sdk.String("rerum"),
        CustomerNumber: sdk.String("deserunt"),
        Dimension: &shared.BillbeeInterfacesShippingShipmentDataDimensions{
            Height: sdk.Float64(1384.36),
            Length: sdk.Float64(3194.19),
            Width: sdk.Float64(1939.9),
        },
        OrderCurrencyCode: sdk.String("beatae"),
        OrderSum: sdk.Float64(4810.42),
        PrinterIDForExportDocs: sdk.Int64(456865),
        PrinterName: sdk.String("magnam"),
        ProductCode: sdk.String("odio"),
        ProviderName: sdk.String("nulla"),
        ReceiverAddress: &shared.BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput{
            AddressAddition: sdk.String("impedit"),
            City: sdk.String("Antoninabury"),
            Company: sdk.String("Stanton, Corkery and Schneider"),
            CountryCode: sdk.String("NU"),
            CountryCodeIso3: sdk.String("repellat"),
            Email: sdk.String("Rosemarie.Sporer@yahoo.com"),
            FirstName: sdk.String("Brandyn"),
            Housenumber: sdk.String("consectetur"),
            IsExportCountry: sdk.Bool(false),
            LastName: sdk.String("Spencer"),
            Name2: sdk.String("optio"),
            State: sdk.String("ipsa"),
            Street: sdk.String("369 Victor Estate"),
            Telephone: sdk.String("officia"),
            Zip: sdk.String("suscipit"),
        },
        ShipDate: types.MustTimeFromString("2022-01-03T11:57:21.616Z"),
        TotalNet: sdk.Float64(424.54),
        WeightInGram: sdk.Float64(201.41),
        ShippingCarrier: shared.BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnumNine.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentPostShipmentJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentPostShipmentRaw

Creates a new shipment with the selected Shippingprovider

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentPostShipmentRaw(ctx, []byte("iusto"))
    if err != nil {
        log.Fatal(err)
    }

    if res.ShipmentPostShipmentRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShipmentShipWithLabelForm

Creates a shipment for an order in billbee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentShipWithLabelForm(ctx, shared.RechnungsdruckWebAppControllersAPIShipmentWithLabel{
        ChangeStateToSend: sdk.Bool(false),
        ClientReference: sdk.String("corrupti"),
        Dimension: &shared.BillbeeInterfacesShippingShipmentDataDimensions{
            Height: sdk.Float64(4748.85),
            Length: sdk.Float64(3401.01),
            Width: sdk.Float64(4358.83),
        },
        OrderID: sdk.Int64(68596),
        PrinterName: sdk.String("quaerat"),
        ProductID: sdk.Int64(228907),
        ProviderID: sdk.Int64(956942),
        ShipDate: types.MustTimeFromString("2022-05-02T21:47:38.474Z"),
        WeightInGram: sdk.Int(435142),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPIShipmentWithLabelResult != nil {
        // handle response
    }
}
```

## ShipmentShipWithLabelJSON

Creates a shipment for an order in billbee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentShipWithLabelJSON(ctx, shared.RechnungsdruckWebAppControllersAPIShipmentWithLabel{
        ChangeStateToSend: sdk.Bool(false),
        ClientReference: sdk.String("quisquam"),
        Dimension: &shared.BillbeeInterfacesShippingShipmentDataDimensions{
            Height: sdk.Float64(5909.27),
            Length: sdk.Float64(5155.95),
            Width: sdk.Float64(7223.92),
        },
        OrderID: sdk.Int64(366147),
        PrinterName: sdk.String("enim"),
        ProductID: sdk.Int64(371213),
        ProviderID: sdk.Int64(328954),
        ShipDate: types.MustTimeFromString("2022-12-24T19:30:03.350Z"),
        WeightInGram: sdk.Int(546963),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPIShipmentWithLabelResult != nil {
        // handle response
    }
}
```

## ShipmentShipWithLabelRaw

Creates a shipment for an order in billbee

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shipments.ShipmentShipWithLabelRaw(ctx, []byte("doloremque"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPIShipmentWithLabelResult != nil {
        // handle response
    }
}
```
