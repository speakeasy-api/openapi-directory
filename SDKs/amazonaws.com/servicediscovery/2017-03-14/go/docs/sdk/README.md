# SDK

## Overview

<fullname>Cloud Map</fullname> <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice applications run in. When an instance becomes available, you can call the Cloud Map API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map automatically creates DNS records and an optional health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer that contains up to eight healthy records. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicediscovery/>
### Available Operations

* [CreateHTTPNamespace](#createhttpnamespace) - <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [CreatePrivateDNSNamespace](#createprivatednsnamespace) - Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.
* [CreatePublicDNSNamespace](#createpublicdnsnamespace) - <p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>
* [CreateService](#createservice) - <p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [DeleteNamespace](#deletenamespace) - Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
* [DeleteService](#deleteservice) - Deletes a specified service. If the service still contains one or more registered instances, the request fails.
* [DeregisterInstance](#deregisterinstance) - Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.
* [DiscoverInstances](#discoverinstances) - Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
* [GetInstance](#getinstance) - Gets information about a specified instance.
* [GetInstancesHealthStatus](#getinstanceshealthstatus) - <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
* [GetNamespace](#getnamespace) - Gets information about a namespace.
* [GetOperation](#getoperation) - <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
* [GetService](#getservice) - Gets the settings for a specified service.
* [ListInstances](#listinstances) - Lists summary information about the instances that you registered by using a specified service.
* [ListNamespaces](#listnamespaces) - Lists summary information about the namespaces that were created by the current Amazon Web Services account.
* [ListOperations](#listoperations) - Lists operations that match the criteria that you specify.
* [ListServices](#listservices) - Lists summary information for all the services that are associated with one or more specified namespaces.
* [ListTagsForResource](#listtagsforresource) - Lists tags for the specified resource.
* [RegisterInstance](#registerinstance) - <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>
* [TagResource](#tagresource) - Adds one or more tags to the specified resource.
* [UntagResource](#untagresource) - Removes one or more tags from the specified resource.
* [UpdateHTTPNamespace](#updatehttpnamespace) - Updates an HTTP namespace.
* [UpdateInstanceCustomHealthStatus](#updateinstancecustomhealthstatus) - <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
* [UpdatePrivateDNSNamespace](#updateprivatednsnamespace) - Updates a private DNS namespace.
* [UpdatePublicDNSNamespace](#updatepublicdnsnamespace) - Updates a public DNS namespace.
* [UpdateService](#updateservice) - <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

## CreateHTTPNamespace

<p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS.</p> <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateHTTPNamespace(ctx, operations.CreateHTTPNamespaceRequest{
        CreateHTTPNamespaceRequest: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: sdk.String("iusto"),
            Description: sdk.String("excepturi"),
            Name: "Mrs. Sophie Smith MD",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsam",
                    Value: "repellendus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateHTTPNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreateHTTPNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHTTPNamespaceResponse != nil {
        // handle response
    }
}
```

## CreatePrivateDNSNamespace

Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service instances that are registered using a private DNS namespace can be discovered using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.

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
    res, err := s.SDK.CreatePrivateDNSNamespace(ctx, operations.CreatePrivateDNSNamespaceRequest{
        CreatePrivateDNSNamespaceRequest: shared.CreatePrivateDNSNamespaceRequest{
            CreatorRequestID: sdk.String("quod"),
            Description: sdk.String("quod"),
            Name: "Deanna Sauer MD",
            Properties: &shared.PrivateDNSNamespaceProperties{
                DNSProperties: shared.PrivateDNSPropertiesMutable{
                    Soa: shared.Soa{
                        TTL: 639921,
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "fugit",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "beatae",
                },
            },
            Vpc: "commodi",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.CreatePrivateDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreatePrivateDNSNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePrivateDNSNamespaceResponse != nil {
        // handle response
    }
}
```

## CreatePublicDNSNamespace

<p>Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. You can discover instances that were registered with a public DNS namespace by using either a <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p> <important> <p>The <code>CreatePublicDnsNamespace</code> API operation is not supported in the Amazon Web Services GovCloud (US) Regions.</p> </important>

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
    res, err := s.SDK.CreatePublicDNSNamespace(ctx, operations.CreatePublicDNSNamespaceRequest{
        CreatePublicDNSNamespaceRequest: shared.CreatePublicDNSNamespaceRequest{
            CreatorRequestID: sdk.String("excepturi"),
            Description: sdk.String("aspernatur"),
            Name: "Cathy Mosciski",
            Properties: &shared.PublicDNSNamespaceProperties{
                DNSProperties: shared.PublicDNSPropertiesMutable{
                    Soa: shared.Soa{
                        TTL: 222321,
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.CreatePublicDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314CreatePublicDNSNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePublicDNSNamespaceResponse != nil {
        // handle response
    }
}
```

## CreateService

<p>Creates a service. This action defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>AAAA</code> </p> </li> <li> <p> <code>A</code> and <code>AAAA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceRequest{
        CreateServiceRequest: shared.CreateServiceRequest{
            CreatorRequestID: sdk.String("est"),
            Description: sdk.String("mollitia"),
            DNSConfig: &shared.DNSConfig{
                DNSRecords: []shared.DNSRecord{
                    shared.DNSRecord{
                        TTL: 170909,
                        Type: shared.RecordTypeEnumSrv,
                    },
                    shared.DNSRecord{
                        TTL: 358152,
                        Type: shared.RecordTypeEnumSrv,
                    },
                    shared.DNSRecord{
                        TTL: 750686,
                        Type: shared.RecordTypeEnumA,
                    },
                },
                NamespaceID: sdk.String("omnis"),
                RoutingPolicy: shared.RoutingPolicyEnumMultivalue.ToPointer(),
            },
            HealthCheckConfig: &shared.HealthCheckConfig{
                FailureThreshold: sdk.Int64(325047),
                ResourcePath: sdk.String("excepturi"),
                Type: shared.HealthCheckTypeEnumHTTP,
            },
            HealthCheckCustomConfig: &shared.HealthCheckCustomConfig{
                FailureThreshold: sdk.Int64(438601),
            },
            Name: "Miss Aubrey Williamson",
            NamespaceID: sdk.String("culpa"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "repellat",
                    Value: "mollitia",
                },
            },
            Type: shared.ServiceTypeOptionEnumHTTP.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateServiceXAmzTargetEnumRoute53AutoNamingV20170314CreateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServiceResponse != nil {
        // handle response
    }
}
```

## DeleteNamespace

Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.

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
    res, err := s.SDK.DeleteNamespace(ctx, operations.DeleteNamespaceRequest{
        DeleteNamespaceRequest: shared.DeleteNamespaceRequest{
            ID: "251aa52c-3f5a-4d01-9da1-ffe78f097b00",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.DeleteNamespaceXAmzTargetEnumRoute53AutoNamingV20170314DeleteNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNamespaceResponse != nil {
        // handle response
    }
}
```

## DeleteService

Deletes a specified service. If the service still contains one or more registered instances, the request fails.

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
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        DeleteServiceRequest: shared.DeleteServiceRequest{
            ID: "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DeleteServiceXAmzTargetEnumRoute53AutoNamingV20170314DeleteService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServiceResponse != nil {
        // handle response
    }
}
```

## DeregisterInstance

Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.

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
    res, err := s.SDK.DeregisterInstance(ctx, operations.DeregisterInstanceRequest{
        DeregisterInstanceRequest: shared.DeregisterInstanceRequest{
            InstanceID: "assumenda",
            ServiceID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.DeregisterInstanceXAmzTargetEnumRoute53AutoNamingV20170314DeregisterInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterInstanceResponse != nil {
        // handle response
    }
}
```

## DiscoverInstances

Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.

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
    res, err := s.SDK.DiscoverInstances(ctx, operations.DiscoverInstancesRequest{
        DiscoverInstancesRequest: shared.DiscoverInstancesRequest{
            HealthStatus: shared.HealthStatusFilterEnumUnhealthy.ToPointer(),
            MaxResults: sdk.Int64(962189),
            NamespaceName: "eum",
            OptionalParameters: map[string]string{
                "eligendi": "sint",
            },
            QueryParameters: map[string]string{
                "provident": "necessitatibus",
                "sint": "officia",
            },
            ServiceName: "dolor",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DiscoverInstancesXAmzTargetEnumRoute53AutoNamingV20170314DiscoverInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverInstancesResponse != nil {
        // handle response
    }
}
```

## GetInstance

Gets information about a specified instance.

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
    res, err := s.SDK.GetInstance(ctx, operations.GetInstanceRequest{
        GetInstanceRequest: shared.GetInstanceRequest{
            InstanceID: "rerum",
            ServiceID: "dicta",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.GetInstanceXAmzTargetEnumRoute53AutoNamingV20170314GetInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceResponse != nil {
        // handle response
    }
}
```

## GetInstancesHealthStatus

<p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There's a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>

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
    res, err := s.SDK.GetInstancesHealthStatus(ctx, operations.GetInstancesHealthStatusRequest{
        GetInstancesHealthStatusRequest: shared.GetInstancesHealthStatusRequest{
            Instances: []string{
                "occaecati",
            },
            MaxResults: sdk.Int64(313218),
            NextToken: sdk.String("accusamus"),
            ServiceID: "delectus",
        },
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.GetInstancesHealthStatusXAmzTargetEnumRoute53AutoNamingV20170314GetInstancesHealthStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstancesHealthStatusResponse != nil {
        // handle response
    }
}
```

## GetNamespace

Gets information about a namespace.

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
    res, err := s.SDK.GetNamespace(ctx, operations.GetNamespaceRequest{
        GetNamespaceRequest: shared.GetNamespaceRequest{
            ID: "66997074-ba44-469b-ae21-41959890afa5",
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.GetNamespaceXAmzTargetEnumRoute53AutoNamingV20170314GetNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceResponse != nil {
        // handle response
    }
}
```

## GetOperation

<p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>

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
    res, err := s.SDK.GetOperation(ctx, operations.GetOperationRequest{
        GetOperationRequest: shared.GetOperationRequest{
            OperationID: "doloribus",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetOperationXAmzTargetEnumRoute53AutoNamingV20170314GetOperation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationResponse != nil {
        // handle response
    }
}
```

## GetService

Gets the settings for a specified service.

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
    res, err := s.SDK.GetService(ctx, operations.GetServiceRequest{
        GetServiceRequest: shared.GetServiceRequest{
            ID: "1e5b7fd2-ed02-4892-9cdd-c692601fb576",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.GetServiceXAmzTargetEnumRoute53AutoNamingV20170314GetService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceResponse != nil {
        // handle response
    }
}
```

## ListInstances

Lists summary information about the instances that you registered by using a specified service.

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
    res, err := s.SDK.ListInstances(ctx, operations.ListInstancesRequest{
        ListInstancesRequest: shared.ListInstancesRequest{
            MaxResults: sdk.Int64(230742),
            NextToken: sdk.String("aut"),
            ServiceID: "cumque",
        },
        MaxResults: sdk.String("corporis"),
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.ListInstancesXAmzTargetEnumRoute53AutoNamingV20170314ListInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## ListNamespaces

Lists summary information about the namespaces that were created by the current Amazon Web Services account.

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
    res, err := s.SDK.ListNamespaces(ctx, operations.ListNamespacesRequest{
        ListNamespacesRequest: shared.ListNamespacesRequest{
            Filters: []shared.NamespaceFilter{
                shared.NamespaceFilter{
                    Condition: shared.FilterConditionEnumEq.ToPointer(),
                    Name: shared.NamespaceFilterNameEnumType,
                    Values: []string{
                        "dolores",
                    },
                },
                shared.NamespaceFilter{
                    Condition: shared.FilterConditionEnumBeginsWith.ToPointer(),
                    Name: shared.NamespaceFilterNameEnumName,
                    Values: []string{
                        "vero",
                    },
                },
            },
            MaxResults: sdk.Int64(345352),
            NextToken: sdk.String("hic"),
        },
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("omnis"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ListNamespacesXAmzTargetEnumRoute53AutoNamingV20170314ListNamespaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNamespacesResponse != nil {
        // handle response
    }
}
```

## ListOperations

Lists operations that match the criteria that you specify.

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
    res, err := s.SDK.ListOperations(ctx, operations.ListOperationsRequest{
        ListOperationsRequest: shared.ListOperationsRequest{
            Filters: []shared.OperationFilter{
                shared.OperationFilter{
                    Condition: shared.FilterConditionEnumBetween.ToPointer(),
                    Name: shared.OperationFilterNameEnumType,
                    Values: []string{
                        "asperiores",
                    },
                },
            },
            MaxResults: sdk.Int64(934214),
            NextToken: sdk.String("modi"),
        },
        MaxResults: sdk.String("iste"),
        NextToken: sdk.String("dolorum"),
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.ListOperationsXAmzTargetEnumRoute53AutoNamingV20170314ListOperations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ListServices

Lists summary information for all the services that are associated with one or more specified namespaces.

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
    res, err := s.SDK.ListServices(ctx, operations.ListServicesRequest{
        ListServicesRequest: shared.ListServicesRequest{
            Filters: []shared.ServiceFilter{
                shared.ServiceFilter{
                    Condition: shared.FilterConditionEnumIn.ToPointer(),
                    Name: shared.ServiceFilterNameEnumNamespaceID,
                    Values: []string{
                        "dolorem",
                    },
                },
                shared.ServiceFilter{
                    Condition: shared.FilterConditionEnumEq.ToPointer(),
                    Name: shared.ServiceFilterNameEnumNamespaceID,
                    Values: []string{
                        "ipsum",
                    },
                },
                shared.ServiceFilter{
                    Condition: shared.FilterConditionEnumBeginsWith.ToPointer(),
                    Name: shared.ServiceFilterNameEnumNamespaceID,
                    Values: []string{
                        "cum",
                        "voluptate",
                        "dignissimos",
                    },
                },
            },
            MaxResults: sdk.Int64(970237),
            NextToken: sdk.String("amet"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListServicesXAmzTargetEnumRoute53AutoNamingV20170314ListServices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists tags for the specified resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "quidem",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumRoute53AutoNamingV20170314ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RegisterInstance

<p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that's specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that's associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current quota on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the <i>Cloud Map Developer Guide</i>.</p>

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
    res, err := s.SDK.RegisterInstance(ctx, operations.RegisterInstanceRequest{
        RegisterInstanceRequest: shared.RegisterInstanceRequest{
            Attributes: map[string]string{
                "soluta": "dolorum",
            },
            CreatorRequestID: sdk.String("iusto"),
            InstanceID: "voluptate",
            ServiceID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.RegisterInstanceXAmzTargetEnumRoute53AutoNamingV20170314RegisterInstance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterInstanceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to the specified resource.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "voluptate",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: "eius",
                },
                shared.Tag{
                    Key: "aspernatur",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "amet",
                    Value: "optio",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumRoute53AutoNamingV20170314TagResource,
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

Removes one or more tags from the specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "repellendus",
            TagKeys: []string{
                "similique",
                "alias",
                "at",
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumRoute53AutoNamingV20170314UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateHTTPNamespace

Updates an HTTP namespace.

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
    res, err := s.SDK.UpdateHTTPNamespace(ctx, operations.UpdateHTTPNamespaceRequest{
        UpdateHTTPNamespaceRequest: shared.UpdateHTTPNamespaceRequest{
            ID: "f7a73cf3-be45-43f8-b0b3-26b5a73429cd",
            Namespace: shared.HTTPNamespaceChange{
                Description: "soluta",
            },
            UpdaterRequestID: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.UpdateHTTPNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdateHTTPNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHTTPNamespaceResponse != nil {
        // handle response
    }
}
```

## UpdateInstanceCustomHealthStatus

<p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>

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
    res, err := s.SDK.UpdateInstanceCustomHealthStatus(ctx, operations.UpdateInstanceCustomHealthStatusRequest{
        UpdateInstanceCustomHealthStatusRequest: shared.UpdateInstanceCustomHealthStatusRequest{
            InstanceID: "aliquid",
            ServiceID: "quam",
            Status: shared.CustomHealthStatusEnumUnhealthy,
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.UpdateInstanceCustomHealthStatusXAmzTargetEnumRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePrivateDNSNamespace

Updates a private DNS namespace.

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
    res, err := s.SDK.UpdatePrivateDNSNamespace(ctx, operations.UpdatePrivateDNSNamespaceRequest{
        UpdatePrivateDNSNamespaceRequest: shared.UpdatePrivateDNSNamespaceRequest{
            ID: "5bf0cbb1-e31b-48b9-8f34-43a1108e0adc",
            Namespace: shared.PrivateDNSNamespaceChange{
                Description: sdk.String("doloribus"),
                Properties: &shared.PrivateDNSNamespacePropertiesChange{
                    DNSProperties: shared.PrivateDNSPropertiesMutableChange{
                        Soa: shared.SOAChange{
                            TTL: 281730,
                        },
                    },
                },
            },
            UpdaterRequestID: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.UpdatePrivateDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdatePrivateDNSNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePrivateDNSNamespaceResponse != nil {
        // handle response
    }
}
```

## UpdatePublicDNSNamespace

Updates a public DNS namespace.

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
    res, err := s.SDK.UpdatePublicDNSNamespace(ctx, operations.UpdatePublicDNSNamespaceRequest{
        UpdatePublicDNSNamespaceRequest: shared.UpdatePublicDNSNamespaceRequest{
            ID: "ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c",
            Namespace: shared.PublicDNSNamespaceChange{
                Description: sdk.String("maiores"),
                Properties: &shared.PublicDNSNamespacePropertiesChange{
                    DNSProperties: shared.PublicDNSPropertiesMutableChange{
                        Soa: shared.SOAChange{
                            TTL: 985033,
                        },
                    },
                },
            },
            UpdaterRequestID: sdk.String("iusto"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.UpdatePublicDNSNamespaceXAmzTargetEnumRoute53AutoNamingV20170314UpdatePublicDNSNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePublicDNSNamespaceResponse != nil {
        // handle response
    }
}
```

## UpdateService

<p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration isn't deleted from the service.</p> </li> </ul> <p>When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>

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
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        UpdateServiceRequest: shared.UpdateServiceRequest{
            ID: "26d43681-3f16-4d9f-9fce-6c556146c3e2",
            Service: shared.ServiceChange{
                Description: sdk.String("minima"),
                DNSConfig: &shared.DNSConfigChange{
                    DNSRecords: []shared.DNSRecord{
                        shared.DNSRecord{
                            TTL: 952871,
                            Type: shared.RecordTypeEnumAaaa,
                        },
                    },
                },
                HealthCheckConfig: &shared.HealthCheckConfig{
                    FailureThreshold: sdk.Int64(13948),
                    ResourcePath: sdk.String("aut"),
                    Type: shared.HealthCheckTypeEnumHTTPS,
                },
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.UpdateServiceXAmzTargetEnumRoute53AutoNamingV20170314UpdateService,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceResponse != nil {
        // handle response
    }
}
```
