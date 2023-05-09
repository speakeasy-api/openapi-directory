# SDK

## Overview

Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. Private 5G provides the pre-configured hardware and software for mobile networks, helps automate setup, and scales capacity on demand to support additional devices as needed.

Amazon Web Services documentation
<https://docs.aws.amazon.com/private-networks/>
### Available Operations

* [AcknowledgeOrderReceipt](#acknowledgeorderreceipt) - Acknowledges that the specified network order was received.
* [ActivateDeviceIdentifier](#activatedeviceidentifier) - Activates the specified device identifier.
* [ActivateNetworkSite](#activatenetworksite) - Activates the specified network site.
* [ConfigureAccessPoint](#configureaccesspoint) - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* [CreateNetwork](#createnetwork) - Creates a network.
* [CreateNetworkSite](#createnetworksite) - Creates a network site.
* [DeactivateDeviceIdentifier](#deactivatedeviceidentifier) - Deactivates the specified device identifier.
* [DeleteNetwork](#deletenetwork) - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* [DeleteNetworkSite](#deletenetworksite) - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* [GetDeviceIdentifier](#getdeviceidentifier) - Gets the specified device identifier.
* [GetNetwork](#getnetwork) - Gets the specified network.
* [GetNetworkResource](#getnetworkresource) - Gets the specified network resource.
* [GetNetworkSite](#getnetworksite) - Gets the specified network site.
* [GetOrder](#getorder) - Gets the specified order.
* [ListDeviceIdentifiers](#listdeviceidentifiers) - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListNetworkResources](#listnetworkresources) - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListNetworkSites](#listnetworksites) - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* [ListNetworks](#listnetworks) - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* [ListOrders](#listorders) - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [Ping](#ping) - Checks the health of the service.
* [StartNetworkResourceUpdate](#startnetworkresourceupdate) - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* [TagResource](#tagresource) -  Adds tags to the specified resource. 
* [UntagResource](#untagresource) - Removes tags from the specified resource.
* [UpdateNetworkSite](#updatenetworksite) - Updates the specified network site.
* [UpdateNetworkSitePlan](#updatenetworksiteplan) - Updates the specified network site plan.

## AcknowledgeOrderReceipt

Acknowledges that the specified network order was received.

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
    res, err := s.SDK.AcknowledgeOrderReceipt(ctx, operations.AcknowledgeOrderReceiptRequest{
        RequestBody: operations.AcknowledgeOrderReceiptRequestBody{
            OrderArn: "vel",
        },
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

    if res.AcknowledgeOrderReceiptResponse != nil {
        // handle response
    }
}
```

## ActivateDeviceIdentifier

Activates the specified device identifier.

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
    res, err := s.SDK.ActivateDeviceIdentifier(ctx, operations.ActivateDeviceIdentifierRequest{
        RequestBody: operations.ActivateDeviceIdentifierRequestBody{
            ClientToken: sdk.String("delectus"),
            DeviceIdentifierArn: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateDeviceIdentifierResponse != nil {
        // handle response
    }
}
```

## ActivateNetworkSite

Activates the specified network site.

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
    res, err := s.SDK.ActivateNetworkSite(ctx, operations.ActivateNetworkSiteRequest{
        RequestBody: operations.ActivateNetworkSiteRequestBody{
            ClientToken: sdk.String("nisi"),
            NetworkSiteArn: "recusandae",
            ShippingAddress: operations.ActivateNetworkSiteRequestBodyShippingAddress{
                City: sdk.String("temporibus"),
                Company: sdk.String("ab"),
                Country: sdk.String("quis"),
                Name: sdk.String("veritatis"),
                PhoneNumber: sdk.String("deserunt"),
                PostalCode: sdk.String("perferendis"),
                StateOrProvince: sdk.String("ipsam"),
                Street1: sdk.String("repellendus"),
                Street2: sdk.String("sapiente"),
                Street3: sdk.String("quo"),
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateNetworkSiteResponse != nil {
        // handle response
    }
}
```

## ConfigureAccessPoint

<p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>

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
    res, err := s.SDK.ConfigureAccessPoint(ctx, operations.ConfigureAccessPointRequest{
        RequestBody: operations.ConfigureAccessPointRequestBody{
            AccessPointArn: "esse",
            CpiSecretKey: sdk.String("totam"),
            CpiUserID: sdk.String("porro"),
            CpiUserPassword: sdk.String("dolorum"),
            CpiUsername: sdk.String("dicta"),
            Position: &operations.ConfigureAccessPointRequestBodyPosition{
                Elevation: sdk.Float64(7206.33),
                ElevationReference: shared.ElevationReferenceEnumAmsl.ToPointer(),
                ElevationUnit: shared.ElevationUnitEnumFeet.ToPointer(),
                Latitude: sdk.Float64(5820.2),
                Longitude: sdk.Float64(1433.53),
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigureAccessPointResponse != nil {
        // handle response
    }
}
```

## CreateNetwork

Creates a network.

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
    res, err := s.SDK.CreateNetwork(ctx, operations.CreateNetworkRequest{
        RequestBody: operations.CreateNetworkRequestBody{
            ClientToken: sdk.String("modi"),
            Description: sdk.String("qui"),
            NetworkName: "impedit",
            Tags: map[string]string{
                "esse": "ipsum",
                "excepturi": "aspernatur",
                "perferendis": "ad",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkResponse != nil {
        // handle response
    }
}
```

## CreateNetworkSite

Creates a network site.

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
    res, err := s.SDK.CreateNetworkSite(ctx, operations.CreateNetworkSiteRequest{
        RequestBody: operations.CreateNetworkSiteRequestBody{
            AvailabilityZone: sdk.String("saepe"),
            AvailabilityZoneID: sdk.String("fuga"),
            ClientToken: sdk.String("in"),
            Description: sdk.String("corporis"),
            NetworkArn: "iste",
            NetworkSiteName: "iure",
            PendingPlan: &operations.CreateNetworkSiteRequestBodyPendingPlan{
                Options: []shared.NameValuePair{
                    shared.NameValuePair{
                        Name: "Roger Beier",
                        Value: sdk.String("mollitia"),
                    },
                    shared.NameValuePair{
                        Name: "Ernest Ebert",
                        Value: sdk.String("nobis"),
                    },
                    shared.NameValuePair{
                        Name: "Guadalupe Hickle",
                        Value: sdk.String("accusantium"),
                    },
                    shared.NameValuePair{
                        Name: "Cecilia Yundt MD",
                        Value: sdk.String("dolorem"),
                    },
                },
                ResourceDefinitions: []shared.NetworkResourceDefinition{
                    shared.NetworkResourceDefinition{
                        Count: 161309,
                        Options: []shared.NameValuePair{
                            shared.NameValuePair{
                                Name: "Tracy Fritsch",
                                Value: sdk.String("molestiae"),
                            },
                            shared.NameValuePair{
                                Name: "Sabrina Cronin MD",
                                Value: sdk.String("animi"),
                            },
                            shared.NameValuePair{
                                Name: "Christina Satterfield",
                                Value: sdk.String("ipsam"),
                            },
                            shared.NameValuePair{
                                Name: "Miss Rufus Ankunding",
                                Value: sdk.String("laborum"),
                            },
                        },
                        Type: shared.NetworkResourceDefinitionTypeEnumRadioUnit,
                    },
                    shared.NetworkResourceDefinition{
                        Count: 971945,
                        Options: []shared.NameValuePair{
                            shared.NameValuePair{
                                Name: "Jessie Langosh V",
                                Value: sdk.String("voluptate"),
                            },
                            shared.NameValuePair{
                                Name: "Thomas Batz",
                                Value: sdk.String("maiores"),
                            },
                            shared.NameValuePair{
                                Name: "Stacy Gulgowski MD",
                                Value: sdk.String("enim"),
                            },
                            shared.NameValuePair{
                                Name: "Mrs. Leslie VonRueden",
                                Value: sdk.String("molestias"),
                            },
                        },
                        Type: shared.NetworkResourceDefinitionTypeEnumDeviceIdentifier,
                    },
                    shared.NetworkResourceDefinition{
                        Count: 865103,
                        Options: []shared.NameValuePair{
                            shared.NameValuePair{
                                Name: "Dr. Jordan Von",
                                Value: sdk.String("veritatis"),
                            },
                            shared.NameValuePair{
                                Name: "Miss Randall Hamill",
                                Value: sdk.String("explicabo"),
                            },
                        },
                        Type: shared.NetworkResourceDefinitionTypeEnumDeviceIdentifier,
                    },
                },
            },
            Tags: map[string]string{
                "quibusdam": "labore",
                "modi": "qui",
                "aliquid": "cupiditate",
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSiteResponse != nil {
        // handle response
    }
}
```

## DeactivateDeviceIdentifier

Deactivates the specified device identifier.

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
    res, err := s.SDK.DeactivateDeviceIdentifier(ctx, operations.DeactivateDeviceIdentifierRequest{
        RequestBody: operations.DeactivateDeviceIdentifierRequestBody{
            ClientToken: sdk.String("dolorum"),
            DeviceIdentifierArn: "excepturi",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeactivateDeviceIdentifierResponse != nil {
        // handle response
    }
}
```

## DeleteNetwork

Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.

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
    res, err := s.SDK.DeleteNetwork(ctx, operations.DeleteNetworkRequest{
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        ClientToken: sdk.String("dolor"),
        NetworkArn: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNetworkResponse != nil {
        // handle response
    }
}
```

## DeleteNetworkSite

Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 

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
    res, err := s.SDK.DeleteNetworkSite(ctx, operations.DeleteNetworkSiteRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        ClientToken: sdk.String("dicta"),
        NetworkSiteArn: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNetworkSiteResponse != nil {
        // handle response
    }
}
```

## GetDeviceIdentifier

Gets the specified device identifier.

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
    res, err := s.SDK.GetDeviceIdentifier(ctx, operations.GetDeviceIdentifierRequest{
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        DeviceIdentifierArn: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceIdentifierResponse != nil {
        // handle response
    }
}
```

## GetNetwork

Gets the specified network.

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
    res, err := s.SDK.GetNetwork(ctx, operations.GetNetworkRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        NetworkArn: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkResponse != nil {
        // handle response
    }
}
```

## GetNetworkResource

Gets the specified network resource.

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
    res, err := s.SDK.GetNetworkResource(ctx, operations.GetNetworkResourceRequest{
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
        NetworkResourceArn: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkResourceResponse != nil {
        // handle response
    }
}
```

## GetNetworkSite

Gets the specified network site.

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
    res, err := s.SDK.GetNetworkSite(ctx, operations.GetNetworkSiteRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
        NetworkSiteArn: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSiteResponse != nil {
        // handle response
    }
}
```

## GetOrder

Gets the specified order.

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
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        OrderArn: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderResponse != nil {
        // handle response
    }
}
```

## ListDeviceIdentifiers

<p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

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
    res, err := s.SDK.ListDeviceIdentifiers(ctx, operations.ListDeviceIdentifiersRequest{
        RequestBody: operations.ListDeviceIdentifiersRequestBody{
            Filters: map[string][]string{
                "excepturi": []string{
                    "provident",
                    "quos",
                },
            },
            MaxResults: sdk.Int64(574325),
            NetworkArn: "accusantium",
            StartToken: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        MaxResults: sdk.String("nemo"),
        StartToken: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceIdentifiersResponse != nil {
        // handle response
    }
}
```

## ListNetworkResources

<p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

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
    res, err := s.SDK.ListNetworkResources(ctx, operations.ListNetworkResourcesRequest{
        RequestBody: operations.ListNetworkResourcesRequestBody{
            Filters: map[string][]string{
                "doloribus": []string{
                    "eius",
                    "maxime",
                    "deleniti",
                    "facilis",
                },
                "in": []string{
                    "architecto",
                },
            },
            MaxResults: sdk.Int64(919483),
            NetworkArn: "ullam",
            StartToken: sdk.String("expedita"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        MaxResults: sdk.String("consequuntur"),
        StartToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkResourcesResponse != nil {
        // handle response
    }
}
```

## ListNetworkSites

Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.

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
    res, err := s.SDK.ListNetworkSites(ctx, operations.ListNetworkSitesRequest{
        RequestBody: operations.ListNetworkSitesRequestBody{
            Filters: map[string][]string{
                "magni": []string{
                    "quo",
                },
                "illum": []string{
                    "maxime",
                    "ea",
                    "excepturi",
                    "odit",
                },
                "ea": []string{
                    "ab",
                },
            },
            MaxResults: sdk.Int64(982575),
            NetworkArn: "quidem",
            StartToken: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        MaxResults: sdk.String("perferendis"),
        StartToken: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkSitesResponse != nil {
        // handle response
    }
}
```

## ListNetworks

Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.

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
    res, err := s.SDK.ListNetworks(ctx, operations.ListNetworksRequest{
        RequestBody: operations.ListNetworksRequestBody{
            Filters: map[string][]string{
                "aut": []string{
                    "corporis",
                    "hic",
                    "libero",
                    "nobis",
                },
            },
            MaxResults: sdk.Int64(171629),
            StartToken: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        MaxResults: sdk.String("dolores"),
        StartToken: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworksResponse != nil {
        // handle response
    }
}
```

## ListOrders

<p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

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
        RequestBody: operations.ListOrdersRequestBody{
            Filters: map[string][]string{
                "dolor": []string{
                    "nostrum",
                    "hic",
                    "recusandae",
                    "omnis",
                },
                "facilis": []string{
                    "voluptatem",
                    "porro",
                    "consequuntur",
                },
            },
            MaxResults: sdk.Int64(500026),
            NetworkArn: "error",
            StartToken: sdk.String("eaque"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
        MaxResults: sdk.String("dolorum"),
        StartToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrdersResponse != nil {
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
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        ResourceArn: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## Ping

Checks the health of the service.

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
    res, err := s.SDK.Ping(ctx, operations.PingRequest{
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PingResponse != nil {
        // handle response
    }
}
```

## StartNetworkResourceUpdate

<p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>

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
    res, err := s.SDK.StartNetworkResourceUpdate(ctx, operations.StartNetworkResourceUpdateRequest{
        RequestBody: operations.StartNetworkResourceUpdateRequestBody{
            NetworkResourceArn: "cum",
            ReturnReason: sdk.String("voluptate"),
            ShippingAddress: &operations.StartNetworkResourceUpdateRequestBodyShippingAddress{
                City: sdk.String("dignissimos"),
                Company: sdk.String("reiciendis"),
                Country: sdk.String("amet"),
                Name: sdk.String("dolorum"),
                PhoneNumber: sdk.String("numquam"),
                PostalCode: sdk.String("veritatis"),
                StateOrProvince: sdk.String("ipsa"),
                Street1: sdk.String("ipsa"),
                Street2: sdk.String("iure"),
                Street3: sdk.String("odio"),
            },
            UpdateType: operations.StartNetworkResourceUpdateRequestBodyUpdateTypeEnumReplace,
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartNetworkResourceUpdateResponse != nil {
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
                "fugiat": "ab",
            },
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        ResourceArn: "necessitatibus",
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
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        ResourceArn: "eius",
        TagKeys: []string{
            "perferendis",
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

## UpdateNetworkSite

Updates the specified network site.

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
    res, err := s.SDK.UpdateNetworkSite(ctx, operations.UpdateNetworkSiteRequest{
        RequestBody: operations.UpdateNetworkSiteRequestBody{
            ClientToken: sdk.String("amet"),
            Description: sdk.String("optio"),
            NetworkSiteArn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSiteResponse != nil {
        // handle response
    }
}
```

## UpdateNetworkSitePlan

Updates the specified network site plan.

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
    res, err := s.SDK.UpdateNetworkSitePlan(ctx, operations.UpdateNetworkSitePlanRequest{
        RequestBody: operations.UpdateNetworkSitePlanRequestBody{
            ClientToken: sdk.String("totam"),
            NetworkSiteArn: "similique",
            PendingPlan: operations.UpdateNetworkSitePlanRequestBodyPendingPlan{
                Options: []shared.NameValuePair{
                    shared.NameValuePair{
                        Name: "Alex Goodwin",
                        Value: sdk.String("officiis"),
                    },
                },
                ResourceDefinitions: []shared.NetworkResourceDefinition{
                    shared.NetworkResourceDefinition{
                        Count: 679880,
                        Options: []shared.NameValuePair{
                            shared.NameValuePair{
                                Name: "Fannie Kub",
                                Value: sdk.String("tenetur"),
                            },
                            shared.NameValuePair{
                                Name: "Kelli Thompson",
                                Value: sdk.String("dolorem"),
                            },
                            shared.NameValuePair{
                                Name: "Miss Jimmie Kozey",
                                Value: sdk.String("sed"),
                            },
                            shared.NameValuePair{
                                Name: "Kelli Hintz",
                                Value: sdk.String("ipsum"),
                            },
                        },
                        Type: shared.NetworkResourceDefinitionTypeEnumRadioUnit,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSiteResponse != nil {
        // handle response
    }
}
```
