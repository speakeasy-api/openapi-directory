# SDK

## Overview

Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs.

Amazon Web Services documentation
<https://docs.aws.amazon.com/outposts/>
### Available Operations

* [CancelOrder](#cancelorder) - Cancels the specified order for an Outpost.
* [CreateOrder](#createorder) - Creates an order for an Outpost.
* [CreateOutpost](#createoutpost) - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* [CreateSite](#createsite) -  Creates a site for an Outpost. 
* [DeleteOutpost](#deleteoutpost) - Deletes the specified Outpost.
* [DeleteSite](#deletesite) - Deletes the specified site.
* [GetCatalogItem](#getcatalogitem) - Gets information about the specified catalog item.
* [GetConnection](#getconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [GetOrder](#getorder) - Gets information about the specified order.
* [GetOutpost](#getoutpost) - Gets information about the specified Outpost.
* [GetOutpostInstanceTypes](#getoutpostinstancetypes) - Gets the instance types for the specified Outpost.
* [GetSite](#getsite) - Gets information about the specified Outpost site.
* [GetSiteAddress](#getsiteaddress) -  Gets the site address of the specified site. 
* [ListAssets](#listassets) - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListCatalogItems](#listcatalogitems) - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListOrders](#listorders) - Lists the Outpost orders for your Amazon Web Services account.
* [ListOutposts](#listoutposts) - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListSites](#listsites) - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [StartConnection](#startconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [TagResource](#tagresource) - Adds tags to the specified resource.
* [UntagResource](#untagresource) - Removes tags from the specified resource.
* [UpdateOutpost](#updateoutpost) -  Updates an Outpost. 
* [UpdateSite](#updatesite) - Updates the specified site.
* [UpdateSiteAddress](#updatesiteaddress) - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* [UpdateSiteRackPhysicalProperties](#updatesiterackphysicalproperties) - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

## CancelOrder

Cancels the specified order for an Outpost.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelOrder(ctx, operations.CancelOrderRequest{
        OrderID: "vel",
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelOrderOutput != nil {
        // handle response
    }
}
```

## CreateOrder

Creates an order for an Outpost.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateOrder(ctx, operations.CreateOrderRequest{
        RequestBody: operations.CreateOrderRequestBody{
            LineItems: []shared.LineItemRequest{
                shared.LineItemRequest{
                    CatalogItemID: sdk.String("tempora"),
                    Quantity: sdk.Int64(383441),
                },
                shared.LineItemRequest{
                    CatalogItemID: sdk.String("molestiae"),
                    Quantity: sdk.Int64(791725),
                },
                shared.LineItemRequest{
                    CatalogItemID: sdk.String("placeat"),
                    Quantity: sdk.Int64(528895),
                },
                shared.LineItemRequest{
                    CatalogItemID: sdk.String("iusto"),
                    Quantity: sdk.Int64(568045),
                },
            },
            OutpostIdentifier: "nisi",
            PaymentOption: operations.CreateOrderRequestBodyPaymentOptionEnumPartialUpfront,
            PaymentTerm: operations.CreateOrderRequestBodyPaymentTermEnumOneYear.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrderOutput != nil {
        // handle response
    }
}
```

## CreateOutpost

<p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateOutpost(ctx, operations.CreateOutpostRequest{
        RequestBody: operations.CreateOutpostRequestBody{
            AvailabilityZone: sdk.String("sapiente"),
            AvailabilityZoneID: sdk.String("quo"),
            Description: sdk.String("odit"),
            Name: "Wilfred Wolff",
            SiteID: "quod",
            SupportedHardwareType: operations.CreateOutpostRequestBodySupportedHardwareTypeEnumRack.ToPointer(),
            Tags: map[string]string{
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOutpostOutput != nil {
        // handle response
    }
}
```

## CreateSite

 Creates a site for an Outpost. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSite(ctx, operations.CreateSiteRequest{
        RequestBody: operations.CreateSiteRequestBody{
            Description: sdk.String("molestiae"),
            Name: "Norma Ryan",
            Notes: sdk.String("ipsum"),
            OperatingAddress: &operations.CreateSiteRequestBodyOperatingAddress{
                AddressLine1: sdk.String("excepturi"),
                AddressLine2: sdk.String("aspernatur"),
                AddressLine3: sdk.String("perferendis"),
                City: sdk.String("New Camden"),
                ContactName: sdk.String("iste"),
                ContactPhoneNumber: sdk.String("dolor"),
                CountryCode: sdk.String("MU"),
                DistrictOrCounty: sdk.String("laboriosam"),
                Municipality: sdk.String("hic"),
                PostalCode: sdk.String("64364-9600"),
                StateOrRegion: sdk.String("reiciendis"),
            },
            RackPhysicalProperties: &operations.CreateSiteRequestBodyRackPhysicalProperties{
                FiberOpticCableType: shared.FiberOpticCableTypeEnumMultiMode.ToPointer(),
                MaximumSupportedWeightLbs: shared.MaximumSupportedWeightLbsEnumMax1800Lbs.ToPointer(),
                OpticalStandard: shared.OpticalStandardEnumOptic100GbaseCwdm4.ToPointer(),
                PowerConnector: shared.PowerConnectorEnumL630P.ToPointer(),
                PowerDrawKva: shared.PowerDrawKvaEnumPower5Kva.ToPointer(),
                PowerFeedDrop: shared.PowerFeedDropEnumAboveRack.ToPointer(),
                PowerPhase: shared.PowerPhaseEnumSinglePhase.ToPointer(),
                UplinkCount: shared.UplinkCountEnumUplinkCount8.ToPointer(),
                UplinkGbps: shared.UplinkGbpsEnumUplink10G.ToPointer(),
            },
            ShippingAddress: &operations.CreateSiteRequestBodyShippingAddress{
                AddressLine1: sdk.String("omnis"),
                AddressLine2: sdk.String("nemo"),
                AddressLine3: sdk.String("minima"),
                City: sdk.String("Alisaport"),
                ContactName: sdk.String("culpa"),
                ContactPhoneNumber: sdk.String("doloribus"),
                CountryCode: sdk.String("VG"),
                DistrictOrCounty: sdk.String("architecto"),
                Municipality: sdk.String("mollitia"),
                PostalCode: sdk.String("61965"),
                StateOrRegion: sdk.String("numquam"),
            },
            Tags: map[string]string{
                "quam": "molestiae",
                "velit": "error",
            },
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSiteOutput != nil {
        // handle response
    }
}
```

## DeleteOutpost

Deletes the specified Outpost.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOutpost(ctx, operations.DeleteOutpostRequest{
        OutpostID: "quo",
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOutpostOutput != nil {
        // handle response
    }
}
```

## DeleteSite

Deletes the specified site.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSite(ctx, operations.DeleteSiteRequest{
        SiteID: "error",
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSiteOutput != nil {
        // handle response
    }
}
```

## GetCatalogItem

Gets information about the specified catalog item.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCatalogItem(ctx, operations.GetCatalogItemRequest{
        CatalogItemID: "praesentium",
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCatalogItemOutput != nil {
        // handle response
    }
}
```

## GetConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConnection(ctx, operations.GetConnectionRequest{
        ConnectionID: "reprehenderit",
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```

## GetOrder

Gets information about the specified order.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOrder(ctx, operations.GetOrderRequest{
        OrderID: "harum",
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderOutput != nil {
        // handle response
    }
}
```

## GetOutpost

Gets information about the specified Outpost.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOutpost(ctx, operations.GetOutpostRequest{
        OutpostID: "molestias",
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOutpostOutput != nil {
        // handle response
    }
}
```

## GetOutpostInstanceTypes

Gets the instance types for the specified Outpost.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOutpostInstanceTypes(ctx, operations.GetOutpostInstanceTypesRequest{
        MaxResults: sdk.Int64(921158),
        NextToken: sdk.String("sint"),
        OutpostID: "veritatis",
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOutpostInstanceTypesOutput != nil {
        // handle response
    }
}
```

## GetSite

Gets information about the specified Outpost site.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSite(ctx, operations.GetSiteRequest{
        SiteID: "deserunt",
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSiteOutput != nil {
        // handle response
    }
}
```

## GetSiteAddress

 Gets the site address of the specified site. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSiteAddress(ctx, operations.GetSiteAddressRequest{
        AddressType: operations.GetSiteAddressAddressTypeEnumOperatingAddress,
        SiteID: "perferendis",
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSiteAddressOutput != nil {
        // handle response
    }
}
```

## ListAssets

<p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssets(ctx, operations.ListAssetsRequest{
        HostIDFilter: []string{
            "facilis",
            "tempore",
        },
        MaxResults: sdk.Int64(288476),
        NextToken: sdk.String("delectus"),
        OutpostID: "eum",
        StatusFilter: []shared.AssetStateEnum{
            shared.AssetStateEnumRetiring,
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsOutput != nil {
        // handle response
    }
}
```

## ListCatalogItems

<p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCatalogItems(ctx, operations.ListCatalogItemsRequest{
        Ec2FamilyFilter: []string{
            "a",
            "dolorum",
            "in",
            "in",
        },
        ItemClassFilter: []shared.CatalogItemClassEnum{
            shared.CatalogItemClassEnumServer,
            shared.CatalogItemClassEnumServer,
            shared.CatalogItemClassEnumRack,
            shared.CatalogItemClassEnumRack,
        },
        MaxResults: sdk.Int64(767024),
        NextToken: sdk.String("facere"),
        SupportedStorageFilter: []shared.SupportedStorageEnumEnum{
            shared.SupportedStorageEnumEnumEbs,
            shared.SupportedStorageEnumEnumS3,
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCatalogItemsOutput != nil {
        // handle response
    }
}
```

## ListOrders

Lists the Outpost orders for your Amazon Web Services account.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOrders(ctx, operations.ListOrdersRequest{
        MaxResults: sdk.Int64(588465),
        NextToken: sdk.String("nam"),
        OutpostIdentifierFilter: sdk.String("id"),
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrdersOutput != nil {
        // handle response
    }
}
```

## ListOutposts

<p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOutposts(ctx, operations.ListOutpostsRequest{
        AvailabilityZoneFilter: []string{
            "omnis",
            "molestiae",
            "perferendis",
        },
        AvailabilityZoneIDFilter: []string{
            "magnam",
            "distinctio",
        },
        LifeCycleStatusFilter: []string{
            "labore",
            "labore",
            "suscipit",
        },
        MaxResults: sdk.Int64(618016),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOutpostsOutput != nil {
        // handle response
    }
}
```

## ListSites

<p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSites(ctx, operations.ListSitesRequest{
        MaxResults: sdk.Int64(354047),
        NextToken: sdk.String("provident"),
        OperatingAddressCityFilter: []string{
            "sint",
            "accusantium",
            "mollitia",
        },
        OperatingAddressCountryCodeFilter: []string{
            "mollitia",
            "ad",
            "eum",
            "dolor",
        },
        OperatingAddressStateOrRegionFilter: []string{
            "odit",
            "nemo",
            "quasi",
            "iure",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSitesOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "architecto",
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartConnection(ctx, operations.StartConnectionRequest{
        RequestBody: operations.StartConnectionRequestBody{
            AssetID: "sed",
            ClientPublicKey: "saepe",
            DeviceSerialNumber: "pariatur",
            NetworkInterfaceDeviceIndex: 37559,
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartConnectionResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to the specified resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
                "ab": "maiores",
            },
        },
        ResourceArn: "quidem",
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from the specified resource.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "voluptatibus",
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
        TagKeys: []string{
            "nobis",
            "dolores",
            "quis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateOutpost

 Updates an Outpost. 

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateOutpost(ctx, operations.UpdateOutpostRequest{
        OutpostID: "totam",
        RequestBody: operations.UpdateOutpostRequestBody{
            Description: sdk.String("dignissimos"),
            Name: sdk.String("Beatrice Dooley Sr."),
            SupportedHardwareType: operations.UpdateOutpostRequestBodySupportedHardwareTypeEnumServer.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOutpostOutput != nil {
        // handle response
    }
}
```

## UpdateSite

Updates the specified site.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSite(ctx, operations.UpdateSiteRequest{
        RequestBody: operations.UpdateSiteRequestBody{
            Description: sdk.String("facilis"),
            Name: sdk.String("George Sawayn"),
            Notes: sdk.String("error"),
        },
        SiteID: "eaque",
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSiteOutput != nil {
        // handle response
    }
}
```

## UpdateSiteAddress

<p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSiteAddress(ctx, operations.UpdateSiteAddressRequest{
        RequestBody: operations.UpdateSiteAddressRequestBody{
            Address: operations.UpdateSiteAddressRequestBodyAddress{
                AddressLine1: sdk.String("dolorum"),
                AddressLine2: sdk.String("deleniti"),
                AddressLine3: sdk.String("pariatur"),
                City: sdk.String("Nettiecester"),
                ContactName: sdk.String("delectus"),
                ContactPhoneNumber: sdk.String("quaerat"),
                CountryCode: sdk.String("MD"),
                DistrictOrCounty: sdk.String("aliquid"),
                Municipality: sdk.String("dolorem"),
                PostalCode: sdk.String("21295"),
                StateOrRegion: sdk.String("cum"),
            },
            AddressType: operations.UpdateSiteAddressRequestBodyAddressTypeEnumShippingAddress,
        },
        SiteID: "dignissimos",
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSiteAddressOutput != nil {
        // handle response
    }
}
```

## UpdateSiteRackPhysicalProperties

<p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSiteRackPhysicalProperties(ctx, operations.UpdateSiteRackPhysicalPropertiesRequest{
        RequestBody: operations.UpdateSiteRackPhysicalPropertiesRequestBody{
            FiberOpticCableType: operations.UpdateSiteRackPhysicalPropertiesRequestBodyFiberOpticCableTypeEnumSingleMode.ToPointer(),
            MaximumSupportedWeightLbs: operations.UpdateSiteRackPhysicalPropertiesRequestBodyMaximumSupportedWeightLbsEnumMax1600Lbs.ToPointer(),
            OpticalStandard: operations.UpdateSiteRackPhysicalPropertiesRequestBodyOpticalStandardEnumOptic40GbaseEsr.ToPointer(),
            PowerConnector: operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerConnectorEnumAh532P6W.ToPointer(),
            PowerDrawKva: operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerDrawKvaEnumPower15Kva.ToPointer(),
            PowerFeedDrop: operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerFeedDropEnumBelowRack.ToPointer(),
            PowerPhase: operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerPhaseEnumSinglePhase.ToPointer(),
            UplinkCount: operations.UpdateSiteRackPhysicalPropertiesRequestBodyUplinkCountEnumUplinkCount7.ToPointer(),
            UplinkGbps: operations.UpdateSiteRackPhysicalPropertiesRequestBodyUplinkGbpsEnumUplink1G.ToPointer(),
        },
        SiteID: "atque",
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSiteRackPhysicalPropertiesOutput != nil {
        // handle response
    }
}
```
