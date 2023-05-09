# Customers

### Available Operations

* [CustomerAddCustomerAddressForm](#customeraddcustomeraddressform) - Adds a new address to a customer
* [CustomerAddCustomerAddressJSON](#customeraddcustomeraddressjson) - Adds a new address to a customer
* [CustomerAddCustomerAddressRaw](#customeraddcustomeraddressraw) - Adds a new address to a customer
* [CustomerCreateForm](#customercreateform) - Creates a new customer
* [CustomerCreateJSON](#customercreatejson) - Creates a new customer
* [CustomerCreateRaw](#customercreateraw) - Creates a new customer
* [CustomerGetAll](#customergetall) - Get a list of all customers
* [CustomerGetCustomerAddress](#customergetcustomeraddress) - Queries a single address from a customer
* [CustomerGetCustomerAddresses](#customergetcustomeraddresses) - Queries a list of addresses from a customer
* [CustomerGetCustomerOrders](#customergetcustomerorders) - Queries a list of orders from a customer
* [CustomerGetOne](#customergetone) - Queries a single customer by id
* [CustomerPatchAddress](#customerpatchaddress) - Updates one or more fields of an address
* [CustomerUpdateAddressForm](#customerupdateaddressform) - Updates all fields of an address
* [CustomerUpdateAddressJSON](#customerupdateaddressjson) - Updates all fields of an address
* [CustomerUpdateAddressRaw](#customerupdateaddressraw) - Updates all fields of an address
* [CustomerUpdateForm](#customerupdateform) - Updates a customer by id
* [CustomerUpdateJSON](#customerupdatejson) - Updates a customer by id
* [CustomerUpdateRaw](#customerupdateraw) - Updates a customer by id
* [SearchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## CustomerAddCustomerAddressForm

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

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
    res, err := s.Customers.CustomerAddCustomerAddressForm(ctx, operations.CustomerAddCustomerAddressFormRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("accusamus"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2022-10-22T18:12:12.288Z"),
            City: sdk.String("Lake Kennedi"),
            Company: sdk.String("Streich - Gleason"),
            CountryCode: sdk.String("LB"),
            CustomerID: sdk.Int64(523248),
            Email: sdk.String("Aurelia.Waelchi@hotmail.com"),
            Fax: sdk.String("itaque"),
            FirstName: sdk.String("Drew"),
            Housenumber: sdk.String("enim"),
            ID: sdk.Int64(9356),
            LastName: sdk.String("Orn"),
            Name2: sdk.String("quibusdam"),
            RestoredAt: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
            State: sdk.String("distinctio"),
            Street: sdk.String("221 Kyler Mission"),
            Tel1: sdk.String("perferendis"),
            Tel2: sdk.String("magni"),
            Zip: sdk.String("assumenda"),
        },
        ID: 369808,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddCustomerAddressJSON

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

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
    res, err := s.Customers.CustomerAddCustomerAddressJSON(ctx, operations.CustomerAddCustomerAddressJSONRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("alias"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
            City: sdk.String("Lake Mustafa"),
            Company: sdk.String("Windler and Sons"),
            CountryCode: sdk.String("DZ"),
            CustomerID: sdk.Int64(756107),
            Email: sdk.String("Grace_Medhurst63@yahoo.com"),
            Fax: sdk.String("dolor"),
            FirstName: sdk.String("Sim"),
            Housenumber: sdk.String("a"),
            ID: sdk.Int64(680056),
            LastName: sdk.String("King"),
            Name2: sdk.String("in"),
            RestoredAt: types.MustTimeFromString("2020-01-25T11:09:22.009Z"),
            State: sdk.String("rerum"),
            Street: sdk.String("27843 Thompson Fields"),
            Tel1: sdk.String("occaecati"),
            Tel2: sdk.String("enim"),
            Zip: sdk.String("accusamus"),
        },
        ID: 965417,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerAddCustomerAddressRaw

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

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
    res, err := s.Customers.CustomerAddCustomerAddressRaw(ctx, operations.CustomerAddCustomerAddressRawRequest{
        RequestBody: []byte("quidem"),
        ID: 588465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerCreateForm

Creates a new customer

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
    res, err := s.Customers.CustomerCreateForm(ctx, shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput{
        Address: &shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("nam"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumTwo.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2021-12-07T18:13:34.827Z"),
            City: sdk.String("Dayton"),
            Company: sdk.String("Huels - Kassulke"),
            CountryCode: sdk.String("MV"),
            CustomerID: sdk.Int64(606393),
            Email: sdk.String("Aileen71@yahoo.com"),
            Fax: sdk.String("id"),
            FirstName: sdk.String("Edward"),
            Housenumber: sdk.String("labore"),
            ID: sdk.Int64(383462),
            LastName: sdk.String("Mosciski"),
            Name2: sdk.String("nobis"),
            RestoredAt: types.MustTimeFromString("2022-02-14T08:45:31.579Z"),
            State: sdk.String("aspernatur"),
            Street: sdk.String("20535 Marvin Burg"),
            Tel1: sdk.String("mollitia"),
            Tel2: sdk.String("reiciendis"),
            Zip: sdk.String("mollitia"),
        },
        ArchivedAt: types.MustTimeFromString("2022-07-27T12:46:27.682Z"),
        DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(221262),
            SubType: sdk.String("necessitatibus"),
            TypeID: sdk.Int64(141264),
            Value: sdk.String("nemo"),
        },
        DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(97260),
            SubType: sdk.String("iure"),
            TypeID: sdk.Int64(984043),
            Value: sdk.String("debitis"),
        },
        DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(260341),
            SubType: sdk.String("maxime"),
            TypeID: sdk.Int64(537023),
            Value: sdk.String("facilis"),
        },
        DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(447926),
            SubType: sdk.String("architecto"),
            TypeID: sdk.Int64(99569),
            Value: sdk.String("repudiandae"),
        },
        DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(352312),
            SubType: sdk.String("expedita"),
            TypeID: sdk.Int64(469249),
            Value: sdk.String("repellat"),
        },
        DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(841140),
            SubType: sdk.String("sed"),
            TypeID: sdk.Int64(904648),
            Value: sdk.String("pariatur"),
        },
        Email: sdk.String("Carroll.Lang@gmail.com"),
        ID: sdk.Int64(123820),
        LanguageID: sdk.Int(779051),
        MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(864934),
                SubType: sdk.String("maxime"),
                TypeID: sdk.Int64(411397),
                Value: sdk.String("excepturi"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(139972),
                SubType: sdk.String("ea"),
                TypeID: sdk.Int64(33222),
                Value: sdk.String("ab"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(982575),
                SubType: sdk.String("quidem"),
                TypeID: sdk.Int64(373291),
                Value: sdk.String("voluptate"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(420075),
                SubType: sdk.String("nam"),
                TypeID: sdk.Int64(50588),
                Value: sdk.String("pariatur"),
            },
        },
        Name: sdk.String("Camille Armstrong"),
        Number: sdk.Int(11714),
        PriceGroupID: sdk.Int64(764912),
        RestoredAt: types.MustTimeFromString("2022-01-21T09:28:40.593Z"),
        Tel1: sdk.String("libero"),
        Tel2: sdk.String("nobis"),
        Type: sdk.Int(171629),
        VatID: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerCreateJSON

Creates a new customer

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
    res, err := s.Customers.CustomerCreateJSON(ctx, shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput{
        Address: &shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("totam"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2022-08-30T06:29:24.707Z"),
            City: sdk.String("East Aidanville"),
            Company: sdk.String("Kohler, Fadel and Swift"),
            CountryCode: sdk.String("GN"),
            CustomerID: sdk.Int64(944120),
            Email: sdk.String("Leo.Purdy@hotmail.com"),
            Fax: sdk.String("porro"),
            FirstName: sdk.String("Casimer"),
            Housenumber: sdk.String("blanditiis"),
            ID: sdk.Int64(621479),
            LastName: sdk.String("Beatty"),
            Name2: sdk.String("occaecati"),
            RestoredAt: types.MustTimeFromString("2022-07-11T08:07:03.616Z"),
            State: sdk.String("asperiores"),
            Street: sdk.String("266 Stracke Overpass"),
            Tel1: sdk.String("nobis"),
            Tel2: sdk.String("libero"),
            Zip: sdk.String("delectus"),
        },
        ArchivedAt: types.MustTimeFromString("2022-06-12T16:50:10.090Z"),
        DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(398221),
            SubType: sdk.String("dolorem"),
            TypeID: sdk.Int64(209843),
            Value: sdk.String("dolor"),
        },
        DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(186193),
            SubType: sdk.String("ipsum"),
            TypeID: sdk.Int64(944373),
            Value: sdk.String("excepturi"),
        },
        DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(739551),
            SubType: sdk.String("voluptate"),
            TypeID: sdk.Int64(490459),
            Value: sdk.String("reiciendis"),
        },
        DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(227414),
            SubType: sdk.String("dolorum"),
            TypeID: sdk.Int64(254356),
            Value: sdk.String("veritatis"),
        },
        DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(58029),
            SubType: sdk.String("ipsa"),
            TypeID: sdk.Int64(434417),
            Value: sdk.String("odio"),
        },
        DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            ID: sdk.Int64(311796),
            SubType: sdk.String("accusamus"),
            TypeID: sdk.Int64(696344),
            Value: sdk.String("voluptatibus"),
        },
        Email: sdk.String("Liam.Daugherty@yahoo.com"),
        ID: sdk.Int64(854614),
        LanguageID: sdk.Int(67249),
        MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(679393),
                SubType: sdk.String("iusto"),
                TypeID: sdk.Int64(453697),
                Value: sdk.String("dolorum"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(536579),
                SubType: sdk.String("omnis"),
                TypeID: sdk.Int64(896672),
                Value: sdk.String("distinctio"),
            },
            shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(990339),
                SubType: sdk.String("nihil"),
                TypeID: sdk.Int64(216897),
                Value: sdk.String("voluptate"),
            },
        },
        Name: sdk.String("Elbert Gislason I"),
        Number: sdk.Int(758379),
        PriceGroupID: sdk.Int64(881586),
        RestoredAt: types.MustTimeFromString("2022-02-04T21:14:13.821Z"),
        Tel1: sdk.String("suscipit"),
        Tel2: sdk.String("deserunt"),
        Type: sdk.Int(588317),
        VatID: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerCreateRaw

Creates a new customer

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
    res, err := s.Customers.CustomerCreateRaw(ctx, []byte("repellendus"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerGetAll

Get a list of all customers

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
    res, err := s.Customers.CustomerGetAll(ctx, operations.CustomerGetAllRequest{
        Page: sdk.Int(519711),
        PageSize: sdk.Int(628982),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerGetCustomerAddress

Queries a single address from a customer

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
    res, err := s.Customers.CustomerGetCustomerAddress(ctx, operations.CustomerGetCustomerAddressRequest{
        ID: 55,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerGetCustomerAddresses

Queries a list of addresses from a customer

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
    res, err := s.Customers.CustomerGetCustomerAddresses(ctx, operations.CustomerGetCustomerAddressesRequest{
        ID: 872651,
        Page: sdk.Int(311860),
        PageSize: sdk.Int(273542),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerGetCustomerOrders

Queries a list of orders from a customer

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
    res, err := s.Customers.CustomerGetCustomerOrders(ctx, operations.CustomerGetCustomerOrdersRequest{
        ID: 425451,
        Page: sdk.Int(798047),
        PageSize: sdk.Int(885338),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersAPIOrder != nil {
        // handle response
    }
}
```

## CustomerGetOne

Queries a single customer by id

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
    res, err := s.Customers.CustomerGetOne(ctx, operations.CustomerGetOneRequest{
        ID: 185636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerPatchAddress

Id and CustomerId cannot be changed

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
    res, err := s.Customers.CustomerPatchAddress(ctx, operations.CustomerPatchAddressRequest{
        RequestBody: map[string]interface{}{
            "a": "esse",
            "harum": "iusto",
            "ipsum": "quisquam",
        },
        ID: 947371,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateAddressForm

Id and CustomerId cannot be changed. Fields you do not send will become empty.

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
    res, err := s.Customers.CustomerUpdateAddressForm(ctx, operations.CustomerUpdateAddressFormRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("amet"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumTwo.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2022-03-28T22:24:48.068Z"),
            City: sdk.String("East Vernice"),
            Company: sdk.String("Kozey - Balistreri"),
            CountryCode: sdk.String("PK"),
            CustomerID: sdk.Int64(207470),
            Email: sdk.String("Hermann_Renner@gmail.com"),
            Fax: sdk.String("quam"),
            FirstName: sdk.String("Cristobal"),
            Housenumber: sdk.String("incidunt"),
            ID: sdk.Int64(186458),
            LastName: sdk.String("McGlynn"),
            Name2: sdk.String("maxime"),
            RestoredAt: types.MustTimeFromString("2020-10-04T22:45:05.165Z"),
            State: sdk.String("dicta"),
            Street: sdk.String("521 Mikayla Ranch"),
            Tel1: sdk.String("aliquid"),
            Tel2: sdk.String("quam"),
            Zip: sdk.String("molestias"),
        },
        ID: 840429,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateAddressJSON

Id and CustomerId cannot be changed. Fields you do not send will become empty.

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
    res, err := s.Customers.CustomerUpdateAddressJSON(ctx, operations.CustomerUpdateAddressJSONRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel{
            AddressAddition: sdk.String("qui"),
            AddressType: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnumOne.ToPointer(),
            ArchivedAt: types.MustTimeFromString("2022-11-01T18:57:36.196Z"),
            City: sdk.String("Bradybury"),
            Company: sdk.String("Weimann, Bartell and Runolfsdottir"),
            CountryCode: sdk.String("QA"),
            CustomerID: sdk.Int64(748664),
            Email: sdk.String("Stone74@gmail.com"),
            Fax: sdk.String("quos"),
            FirstName: sdk.String("Mose"),
            Housenumber: sdk.String("cupiditate"),
            ID: sdk.Int64(45614),
            LastName: sdk.String("Willms"),
            Name2: sdk.String("dolorem"),
            RestoredAt: types.MustTimeFromString("2022-09-18T06:37:26.413Z"),
            State: sdk.String("adipisci"),
            Street: sdk.String("100 Ward Avenue"),
            Tel1: sdk.String("est"),
            Tel2: sdk.String("repellendus"),
            Zip: sdk.String("porro"),
        },
        ID: 984330,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateAddressRaw

Id and CustomerId cannot be changed. Fields you do not send will become empty.

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
    res, err := s.Customers.CustomerUpdateAddressRaw(ctx, operations.CustomerUpdateAddressRawRequest{
        RequestBody: []byte("ut"),
        ID: 703495,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateForm

Updates a customer by id

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
    res, err := s.Customers.CustomerUpdateForm(ctx, operations.CustomerUpdateFormRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput: shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput{
            ArchivedAt: types.MustTimeFromString("2022-08-21T09:49:15.782Z"),
            DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(63955),
                SubType: sdk.String("laudantium"),
                TypeID: sdk.Int64(485628),
                Value: sdk.String("occaecati"),
            },
            DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(977496),
                SubType: sdk.String("quisquam"),
                TypeID: sdk.Int64(876506),
                Value: sdk.String("omnis"),
            },
            DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(338159),
                SubType: sdk.String("ipsum"),
                TypeID: sdk.Int64(961571),
                Value: sdk.String("voluptate"),
            },
            DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(231701),
                SubType: sdk.String("vero"),
                TypeID: sdk.Int64(949319),
                Value: sdk.String("dignissimos"),
            },
            DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(941378),
                SubType: sdk.String("distinctio"),
                TypeID: sdk.Int64(799203),
                Value: sdk.String("odio"),
            },
            DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(630448),
                SubType: sdk.String("facilis"),
                TypeID: sdk.Int64(874288),
                Value: sdk.String("ducimus"),
            },
            Email: sdk.String("Rosalinda61@gmail.com"),
            ID: sdk.Int64(773326),
            LanguageID: sdk.Int(13236),
            MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(347233),
                    SubType: sdk.String("nulla"),
                    TypeID: sdk.Int64(148141),
                    Value: sdk.String("porro"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(981830),
                    SubType: sdk.String("doloribus"),
                    TypeID: sdk.Int64(478370),
                    Value: sdk.String("eligendi"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(497391),
                    SubType: sdk.String("alias"),
                    TypeID: sdk.Int64(639473),
                    Value: sdk.String("tempora"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(368584),
                    SubType: sdk.String("ea"),
                    TypeID: sdk.Int64(136900),
                    Value: sdk.String("vel"),
                },
            },
            Name: sdk.String("Clifford Dickens"),
            Number: sdk.Int(120657),
            PriceGroupID: sdk.Int64(224317),
            RestoredAt: types.MustTimeFromString("2022-09-15T20:38:47.955Z"),
            Tel1: sdk.String("ex"),
            Tel2: sdk.String("nulla"),
            Type: sdk.Int(569211),
            VatID: sdk.String("voluptatibus"),
        },
        ID: 343605,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateJSON

Updates a customer by id

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
    res, err := s.Customers.CustomerUpdateJSON(ctx, operations.CustomerUpdateJSONRequest{
        BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput: shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput{
            ArchivedAt: types.MustTimeFromString("2020-08-20T04:25:24.387Z"),
            DefaultCommercialMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(906556),
                SubType: sdk.String("ea"),
                TypeID: sdk.Int64(774048),
                Value: sdk.String("corporis"),
            },
            DefaultFax: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(333145),
                SubType: sdk.String("aliquid"),
                TypeID: sdk.Int64(81101),
                Value: sdk.String("magnam"),
            },
            DefaultMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(407241),
                SubType: sdk.String("quo"),
                TypeID: sdk.Int64(232234),
                Value: sdk.String("recusandae"),
            },
            DefaultPhone1: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(132487),
                SubType: sdk.String("minima"),
                TypeID: sdk.Int64(53427),
                Value: sdk.String("a"),
            },
            DefaultPhone2: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(725595),
                SubType: sdk.String("aut"),
                TypeID: sdk.Int64(11427),
                Value: sdk.String("deleniti"),
            },
            DefaultStatusUpdatesMailAddress: &shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                ID: sdk.Int64(770581),
                SubType: sdk.String("aliquam"),
                TypeID: sdk.Int64(146946),
                Value: sdk.String("accusamus"),
            },
            Email: sdk.String("Demarcus_Borer81@gmail.com"),
            ID: sdk.Int64(245367),
            LanguageID: sdk.Int(432148),
            MetaData: []shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(752135),
                    SubType: sdk.String("quas"),
                    TypeID: sdk.Int64(829603),
                    Value: sdk.String("nulla"),
                },
                shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput{
                    ID: sdk.Int64(379034),
                    SubType: sdk.String("libero"),
                    TypeID: sdk.Int64(96549),
                    Value: sdk.String("tempora"),
                },
            },
            Name: sdk.String("Ms. Janice McLaughlin"),
            Number: sdk.Int(487935),
            PriceGroupID: sdk.Int64(262118),
            RestoredAt: types.MustTimeFromString("2022-07-18T12:12:30.628Z"),
            Tel1: sdk.String("rem"),
            Tel2: sdk.String("fuga"),
            Type: sdk.Int(442015),
            VatID: sdk.String("quidem"),
        },
        ID: 852635,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
        // handle response
    }
}
```

## CustomerUpdateRaw

Updates a customer by id

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
    res, err := s.Customers.CustomerUpdateRaw(ctx, operations.CustomerUpdateRawRequest{
        RequestBody: []byte("ut"),
        ID: 433439,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel != nil {
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
    res, err := s.Customers.SearchSearchForm(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumOne.ToPointer(),
        Term: sdk.String("assumenda"),
        Type: []string{
            "praesentium",
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
    res, err := s.Customers.SearchSearchJSON(ctx, shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModel{
        SearchMode: shared.RechnungsdruckWebAppControllersAPISearchControllerSearchModelSearchModeEnumThree.ToPointer(),
        Term: sdk.String("veritatis"),
        Type: []string{
            "id",
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
    res, err := s.Customers.SearchSearchRaw(ctx, []byte("quidem"))
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultRechnungsdruckWebAppControllersAPISearchControllerSearchResultsModel != nil {
        // handle response
    }
}
```
