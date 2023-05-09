# CustomerAddresses

### Available Operations

* [CustomerAddressesCreateForm](#customeraddressescreateform) - Creates a new customer address
* [CustomerAddressesCreateJSON](#customeraddressescreatejson) - Creates a new customer address
* [CustomerAddressesCreateRaw](#customeraddressescreateraw) - Creates a new customer address
* [CustomerAddressesGetAll](#customeraddressesgetall) - Get a list of all customer addresses
* [CustomerAddressesGetOne](#customeraddressesgetone) - Queries a single customer address by id
* [CustomerAddressesUpdateForm](#customeraddressesupdateform) - Updates a customer address by id
* [CustomerAddressesUpdateJSON](#customeraddressesupdatejson) - Updates a customer address by id
* [CustomerAddressesUpdateRaw](#customeraddressesupdateraw) - Updates a customer address by id

## CustomerAddressesCreateForm

Creates a new customer address

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
    res, err := s.CustomerAddresses.CustomerAddressesCreateForm(ctx, shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
        AddressAddition: sdk.String("corrupti"),
        AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumTwo.ToPointer(),
        ArchivedAt: types.MustTimeFromString("2021-04-24T16:27:50.833Z"),
        City: sdk.String("Stiedemannstad"),
        Company: sdk.String("Kassulke, Mueller and Oberbrunner"),
        CountryCode: sdk.String("HM"),
        CustomerID: sdk.Int64(437587),
        Email: sdk.String("Sim.Bednar38@gmail.com"),
        Fax: sdk.String("molestiae"),
        FirstName: sdk.String("Paxton"),
        Housenumber: sdk.String("placeat"),
        ID: sdk.Int64(528895),
        LastName: sdk.String("Kshlerin"),
        Name2: sdk.String("excepturi"),
        RestoredAt: types.MustTimeFromString("2022-01-28T03:46:24.500Z"),
        State: sdk.String("temporibus"),
        Street: sdk.String("30603 Will Shoals"),
        Tel1: sdk.String("odit"),
        Tel2: sdk.String("at"),
        Zip: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesCreateJSON

Creates a new customer address

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
    res, err := s.CustomerAddresses.CustomerAddressesCreateJSON(ctx, shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
        AddressAddition: sdk.String("maiores"),
        AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
        ArchivedAt: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
        City: sdk.String("Jovanfort"),
        Company: sdk.String("Carroll, Reichel and Nikolaus"),
        CountryCode: sdk.String("ML"),
        CustomerID: sdk.Int64(143353),
        Email: sdk.String("Tyrel.Rosenbaum@yahoo.com"),
        Fax: sdk.String("commodi"),
        FirstName: sdk.String("Jaren"),
        Housenumber: sdk.String("modi"),
        ID: sdk.Int64(186332),
        LastName: sdk.String("Ryan"),
        Name2: sdk.String("cum"),
        RestoredAt: types.MustTimeFromString("2022-10-13T23:01:07.168Z"),
        State: sdk.String("excepturi"),
        Street: sdk.String("03616 Lexie Hills"),
        Tel1: sdk.String("hic"),
        Tel2: sdk.String("saepe"),
        Zip: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesCreateRaw

Creates a new customer address

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
    res, err := s.CustomerAddresses.CustomerAddressesCreateRaw(ctx, []byte("in"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesGetAll

Get a list of all customer addresses

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
    res, err := s.CustomerAddresses.CustomerAddressesGetAll(ctx, operations.CustomerAddressesGetAllRequest{
        Page: sdk.Int(359508),
        PageSize: sdk.Int(613064),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesGetOne

Queries a single customer address by id

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
    res, err := s.CustomerAddresses.CustomerAddressesGetOne(ctx, operations.CustomerAddressesGetOneRequest{
        ID: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesUpdateForm

Updates a customer address by id

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
    res, err := s.CustomerAddresses.CustomerAddressesUpdateForm(ctx, operations.CustomerAddressesUpdateFormRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("saepe"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumTwo.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2022-12-10T00:25:28.749Z"),
            City: sdk.String("Parma"),
            Company: sdk.String("Osinski - Dach"),
            CountryCode: sdk.String("CW"),
            CustomerID: sdk.Int64(358152),
            Email: sdk.String("Nestor.Halvorson@gmail.com"),
            Fax: sdk.String("minima"),
            FirstName: sdk.String("Keyon"),
            Housenumber: sdk.String("accusantium"),
            ID: sdk.Int64(438601),
            LastName: sdk.String("Nicolas"),
            Name2: sdk.String("doloribus"),
            RestoredAt: types.MustTimeFromString("2022-09-11T06:15:44.019Z"),
            State: sdk.String("mollitia"),
            Street: sdk.String("61965 Harvey Landing"),
            Tel1: sdk.String("molestiae"),
            Tel2: sdk.String("velit"),
            Zip: sdk.String("error"),
        },
        ID: 158969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesUpdateJSON

Updates a customer address by id

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
    res, err := s.CustomerAddresses.CustomerAddressesUpdateJSON(ctx, operations.CustomerAddressesUpdateJSONRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("quis"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2021-09-08T21:06:19.630Z"),
            City: sdk.String("East Orlando"),
            Company: sdk.String("Wiegand and Sons"),
            CountryCode: sdk.String("NI"),
            CustomerID: sdk.Int64(820994),
            Email: sdk.String("Avery_Mueller9@gmail.com"),
            Fax: sdk.String("reiciendis"),
            FirstName: sdk.String("Weston"),
            Housenumber: sdk.String("vero"),
            ID: sdk.Int64(468651),
            LastName: sdk.String("Langosh"),
            Name2: sdk.String("voluptatibus"),
            RestoredAt: types.MustTimeFromString("2022-05-25T05:33:11.349Z"),
            State: sdk.String("voluptate"),
            Street: sdk.String("004 Wilfrid Course"),
            Tel1: sdk.String("corporis"),
            Tel2: sdk.String("dolore"),
            Zip: sdk.String("iusto"),
        },
        ID: 118727,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddressesUpdateRaw

Updates a customer address by id

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
    res, err := s.CustomerAddresses.CustomerAddressesUpdateRaw(ctx, operations.CustomerAddressesUpdateRawRequest{
        RequestBody: []byte("harum"),
        ID: 317983,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```
