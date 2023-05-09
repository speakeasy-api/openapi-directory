# SDK

## Overview

<p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/aoss/>
### Available Operations

* [BatchGetCollection](#batchgetcollection) - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [BatchGetVpcEndpoint](#batchgetvpcendpoint) - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [CreateAccessPolicy](#createaccesspolicy) - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [CreateCollection](#createcollection) - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [CreateSecurityConfig](#createsecurityconfig) - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* [CreateSecurityPolicy](#createsecuritypolicy) - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [CreateVpcEndpoint](#createvpcendpoint) - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [DeleteAccessPolicy](#deleteaccesspolicy) - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [DeleteCollection](#deletecollection) - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [DeleteSecurityConfig](#deletesecurityconfig) - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [DeleteSecurityPolicy](#deletesecuritypolicy) - Deletes an OpenSearch Serverless security policy.
* [DeleteVpcEndpoint](#deletevpcendpoint) - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [GetAccessPolicy](#getaccesspolicy) - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [GetAccountSettings](#getaccountsettings) - Returns account-level settings related to OpenSearch Serverless.
* [GetPoliciesStats](#getpoliciesstats) - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* [GetSecurityConfig](#getsecurityconfig) - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [GetSecurityPolicy](#getsecuritypolicy) - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [ListAccessPolicies](#listaccesspolicies) - Returns information about a list of OpenSearch Serverless access policies.
* [ListCollections](#listcollections) - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* [ListSecurityConfigs](#listsecurityconfigs) - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [ListSecurityPolicies](#listsecuritypolicies) - Returns information about configured OpenSearch Serverless security policies.
* [ListTagsForResource](#listtagsforresource) - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [ListVpcEndpoints](#listvpcendpoints) - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [TagResource](#tagresource) - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [UntagResource](#untagresource) - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [UpdateAccessPolicy](#updateaccesspolicy) - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [UpdateAccountSettings](#updateaccountsettings) - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* [UpdateCollection](#updatecollection) - Updates an OpenSearch Serverless collection.
* [UpdateSecurityConfig](#updatesecurityconfig) - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [UpdateSecurityPolicy](#updatesecuritypolicy) - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [UpdateVpcEndpoint](#updatevpcendpoint) - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

## BatchGetCollection

Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

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
    res, err := s.SDK.BatchGetCollection(ctx, operations.BatchGetCollectionRequest{
        BatchGetCollectionRequest: shared.BatchGetCollectionRequest{
            Ids: []string{
                "delectus",
            },
            Names: []string{
                "suscipit",
                "molestiae",
            },
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.BatchGetCollectionXAmzTargetEnumOpenSearchServerlessBatchGetCollection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCollectionResponse != nil {
        // handle response
    }
}
```

## BatchGetVpcEndpoint

Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

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
    res, err := s.SDK.BatchGetVpcEndpoint(ctx, operations.BatchGetVpcEndpointRequest{
        BatchGetVpcEndpointRequest: shared.BatchGetVpcEndpointRequest{
            Ids: []string{
                "ab",
                "quis",
                "veritatis",
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.BatchGetVpcEndpointXAmzTargetEnumOpenSearchServerlessBatchGetVpcEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetVpcEndpointResponse != nil {
        // handle response
    }
}
```

## CreateAccessPolicy

Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.CreateAccessPolicy(ctx, operations.CreateAccessPolicyRequest{
        CreateAccessPolicyRequest: shared.CreateAccessPolicyRequest{
            ClientToken: sdk.String("at"),
            Description: sdk.String("maiores"),
            Name: "Bernadette Schmidt",
            Policy: "porro",
            Type: shared.AccessPolicyTypeEnumData,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateAccessPolicyXAmzTargetEnumOpenSearchServerlessCreateAccessPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessPolicyResponse != nil {
        // handle response
    }
}
```

## CreateCollection

Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

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
    res, err := s.SDK.CreateCollection(ctx, operations.CreateCollectionRequest{
        CreateCollectionRequest: shared.CreateCollectionRequest{
            ClientToken: sdk.String("hic"),
            Description: sdk.String("optio"),
            Name: "Jack Johns",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "impedit",
                    Value: "cum",
                },
            },
            Type: shared.CollectionTypeEnumSearch.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.CreateCollectionXAmzTargetEnumOpenSearchServerlessCreateCollection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCollectionResponse != nil {
        // handle response
    }
}
```

## CreateSecurityConfig

Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 

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
    res, err := s.SDK.CreateSecurityConfig(ctx, operations.CreateSecurityConfigRequest{
        CreateSecurityConfigRequest: shared.CreateSecurityConfigRequest{
            ClientToken: sdk.String("iste"),
            Description: sdk.String("dolor"),
            Name: "Lester Welch",
            SamlOptions: &shared.SamlConfigOptions{
                GroupAttribute: sdk.String("in"),
                Metadata: "corporis",
                SessionTimeout: sdk.Int64(613064),
                UserAttribute: sdk.String("iure"),
            },
            Type: shared.SecurityConfigTypeEnumSaml,
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.CreateSecurityConfigXAmzTargetEnumOpenSearchServerlessCreateSecurityConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSecurityConfigResponse != nil {
        // handle response
    }
}
```

## CreateSecurityPolicy

Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.CreateSecurityPolicy(ctx, operations.CreateSecurityPolicyRequest{
        CreateSecurityPolicyRequest: shared.CreateSecurityPolicyRequest{
            ClientToken: sdk.String("laborum"),
            Description: sdk.String("dolores"),
            Name: "Stacy Champlin",
            Policy: "omnis",
            Type: shared.SecurityPolicyTypeEnumEncryption,
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateSecurityPolicyXAmzTargetEnumOpenSearchServerlessCreateSecurityPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSecurityPolicyResponse != nil {
        // handle response
    }
}
```

## CreateVpcEndpoint

Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

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
    res, err := s.SDK.CreateVpcEndpoint(ctx, operations.CreateVpcEndpointRequest{
        CreateVpcEndpointRequest: shared.CreateVpcEndpointRequest{
            ClientToken: sdk.String("architecto"),
            Name: "Mike Nicolas",
            SecurityGroupIds: []string{
                "occaecati",
                "numquam",
                "commodi",
            },
            SubnetIds: []string{
                "molestiae",
                "velit",
            },
            VpcID: "error",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateVpcEndpointXAmzTargetEnumOpenSearchServerlessCreateVpcEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateVpcEndpointResponse != nil {
        // handle response
    }
}
```

## DeleteAccessPolicy

Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.DeleteAccessPolicy(ctx, operations.DeleteAccessPolicyRequest{
        DeleteAccessPolicyRequest: shared.DeleteAccessPolicyRequest{
            ClientToken: sdk.String("quo"),
            Name: "Mandy Hills",
            Type: shared.AccessPolicyTypeEnumData,
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.DeleteAccessPolicyXAmzTargetEnumOpenSearchServerlessDeleteAccessPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteCollection

Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

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
    res, err := s.SDK.DeleteCollection(ctx, operations.DeleteCollectionRequest{
        DeleteCollectionRequest: shared.DeleteCollectionRequest{
            ClientToken: sdk.String("voluptatibus"),
            ID: "e78f097b-0074-4f15-871b-5e6e13b99d48",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.DeleteCollectionXAmzTargetEnumOpenSearchServerlessDeleteCollection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCollectionResponse != nil {
        // handle response
    }
}
```

## DeleteSecurityConfig

Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.DeleteSecurityConfig(ctx, operations.DeleteSecurityConfigRequest{
        DeleteSecurityConfigRequest: shared.DeleteSecurityConfigRequest{
            ClientToken: sdk.String("incidunt"),
            ID: "50ad2abd-4426-4980-ad50-2a94bb4f63c9",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DeleteSecurityConfigXAmzTargetEnumOpenSearchServerlessDeleteSecurityConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSecurityConfigResponse != nil {
        // handle response
    }
}
```

## DeleteSecurityPolicy

Deletes an OpenSearch Serverless security policy.

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
    res, err := s.SDK.DeleteSecurityPolicy(ctx, operations.DeleteSecurityPolicyRequest{
        DeleteSecurityPolicyRequest: shared.DeleteSecurityPolicyRequest{
            ClientToken: sdk.String("a"),
            Name: "Arnold Kirlin",
            Type: shared.SecurityPolicyTypeEnumNetwork,
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteSecurityPolicyXAmzTargetEnumOpenSearchServerlessDeleteSecurityPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSecurityPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteVpcEndpoint

Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

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
    res, err := s.SDK.DeleteVpcEndpoint(ctx, operations.DeleteVpcEndpointRequest{
        DeleteVpcEndpointRequest: shared.DeleteVpcEndpointRequest{
            ClientToken: sdk.String("accusamus"),
            ID: "395efb9b-a88f-43a6-a997-074ba4469b6e",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteVpcEndpointXAmzTargetEnumOpenSearchServerlessDeleteVpcEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVpcEndpointResponse != nil {
        // handle response
    }
}
```

## GetAccessPolicy

Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.GetAccessPolicy(ctx, operations.GetAccessPolicyRequest{
        GetAccessPolicyRequest: shared.GetAccessPolicyRequest{
            Name: "Kirk Bartoletti",
            Type: shared.AccessPolicyTypeEnumData,
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.GetAccessPolicyXAmzTargetEnumOpenSearchServerlessGetAccessPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccessPolicyResponse != nil {
        // handle response
    }
}
```

## GetAccountSettings

Returns account-level settings related to OpenSearch Serverless.

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
    res, err := s.SDK.GetAccountSettings(ctx, operations.GetAccountSettingsRequest{
        RequestBody: map[string]interface{}{
            "iure": "doloribus",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetAccountSettingsXAmzTargetEnumOpenSearchServerlessGetAccountSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsResponse != nil {
        // handle response
    }
}
```

## GetPoliciesStats

Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.

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
    res, err := s.SDK.GetPoliciesStats(ctx, operations.GetPoliciesStatsRequest{
        RequestBody: map[string]interface{}{
            "repudiandae": "ullam",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.GetPoliciesStatsXAmzTargetEnumOpenSearchServerlessGetPoliciesStats,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPoliciesStatsResponse != nil {
        // handle response
    }
}
```

## GetSecurityConfig

Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.GetSecurityConfig(ctx, operations.GetSecurityConfigRequest{
        GetSecurityConfigRequest: shared.GetSecurityConfigRequest{
            ID: "028921cd-dc69-4260-9fb5-76b0d5f0d30c",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.GetSecurityConfigXAmzTargetEnumOpenSearchServerlessGetSecurityConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSecurityConfigResponse != nil {
        // handle response
    }
}
```

## GetSecurityPolicy

Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.GetSecurityPolicy(ctx, operations.GetSecurityPolicyRequest{
        GetSecurityPolicyRequest: shared.GetSecurityPolicyRequest{
            Name: "Cynthia Hayes",
            Type: shared.SecurityPolicyTypeEnumEncryption,
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.GetSecurityPolicyXAmzTargetEnumOpenSearchServerlessGetSecurityPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSecurityPolicyResponse != nil {
        // handle response
    }
}
```

## ListAccessPolicies

Returns information about a list of OpenSearch Serverless access policies.

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
    res, err := s.SDK.ListAccessPolicies(ctx, operations.ListAccessPoliciesRequest{
        ListAccessPoliciesRequest: shared.ListAccessPoliciesRequest{
            MaxResults: sdk.Int64(928082),
            NextToken: sdk.String("omnis"),
            Resource: []string{
                "perspiciatis",
                "voluptatem",
                "porro",
            },
            Type: shared.AccessPolicyTypeEnumData,
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.ListAccessPoliciesXAmzTargetEnumOpenSearchServerlessListAccessPolicies,
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessPoliciesResponse != nil {
        // handle response
    }
}
```

## ListCollections

<p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>

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
    res, err := s.SDK.ListCollections(ctx, operations.ListCollectionsRequest{
        ListCollectionsRequest: shared.ListCollectionsRequest{
            CollectionFilters: &shared.CollectionFilters{
                Name: sdk.String("Sheryl Parisian"),
                Status: shared.CollectionStatusEnumActive.ToPointer(),
            },
            MaxResults: sdk.Int64(750844),
            NextToken: sdk.String("libero"),
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListCollectionsXAmzTargetEnumOpenSearchServerlessListCollections,
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCollectionsResponse != nil {
        // handle response
    }
}
```

## ListSecurityConfigs

Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.ListSecurityConfigs(ctx, operations.ListSecurityConfigsRequest{
        ListSecurityConfigsRequest: shared.ListSecurityConfigsRequest{
            MaxResults: sdk.Int64(944373),
            NextToken: sdk.String("excepturi"),
            Type: shared.SecurityConfigTypeEnumSaml,
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.ListSecurityConfigsXAmzTargetEnumOpenSearchServerlessListSecurityConfigs,
        MaxResults: sdk.String("veritatis"),
        NextToken: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityConfigsResponse != nil {
        // handle response
    }
}
```

## ListSecurityPolicies

Returns information about configured OpenSearch Serverless security policies.

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
    res, err := s.SDK.ListSecurityPolicies(ctx, operations.ListSecurityPoliciesRequest{
        ListSecurityPoliciesRequest: shared.ListSecurityPoliciesRequest{
            MaxResults: sdk.Int64(56418),
            NextToken: sdk.String("iure"),
            Resource: []string{
                "quaerat",
                "accusamus",
            },
            Type: shared.SecurityPolicyTypeEnumNetwork,
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.ListSecurityPoliciesXAmzTargetEnumOpenSearchServerlessListSecurityPolicies,
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityPoliciesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
            ResourceArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumOpenSearchServerlessListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListVpcEndpoints

Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

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
    res, err := s.SDK.ListVpcEndpoints(ctx, operations.ListVpcEndpointsRequest{
        ListVpcEndpointsRequest: shared.ListVpcEndpointsRequest{
            MaxResults: sdk.Int64(990339),
            NextToken: sdk.String("nihil"),
            VpcEndpointFilters: &shared.VpcEndpointFilters{
                Status: shared.VpcEndpointStatusEnumPending.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.ListVpcEndpointsXAmzTargetEnumOpenSearchServerlessListVpcEndpoints,
        MaxResults: sdk.String("optio"),
        NextToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVpcEndpointsResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
            ResourceArn: "ad",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "provident",
                    Value: "minima",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "totam",
                },
                shared.Tag{
                    Key: "similique",
                    Value: "alias",
                },
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumOpenSearchServerlessTagResource,
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

Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

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
            ResourceArn: "dolorum",
            TagKeys: []string{
                "esse",
                "harum",
                "iusto",
                "ipsum",
            },
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumOpenSearchServerlessUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAccessPolicy

Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.UpdateAccessPolicy(ctx, operations.UpdateAccessPolicyRequest{
        UpdateAccessPolicyRequest: shared.UpdateAccessPolicyRequest{
            ClientToken: sdk.String("dolorem"),
            Description: sdk.String("sapiente"),
            Name: "Christian Balistreri",
            Policy: sdk.String("sed"),
            PolicyVersion: "vel",
            Type: shared.AccessPolicyTypeEnumData,
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.UpdateAccessPolicyXAmzTargetEnumOpenSearchServerlessUpdateAccessPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccessPolicyResponse != nil {
        // handle response
    }
}
```

## UpdateAccountSettings

Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.UpdateAccountSettings(ctx, operations.UpdateAccountSettingsRequest{
        UpdateAccountSettingsRequest: shared.UpdateAccountSettingsRequest{
            CapacityLimits: &shared.CapacityLimits{
                MaxIndexingCapacityInOCU: sdk.Int64(586784),
                MaxSearchCapacityInOCU: sdk.Int64(807581),
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.UpdateAccountSettingsXAmzTargetEnumOpenSearchServerlessUpdateAccountSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateCollection

Updates an OpenSearch Serverless collection.

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
    res, err := s.SDK.UpdateCollection(ctx, operations.UpdateCollectionRequest{
        UpdateCollectionRequest: shared.UpdateCollectionRequest{
            ClientToken: sdk.String("dolores"),
            Description: sdk.String("distinctio"),
            ID: "b679d232-2715-4bf0-8bb1-e31b8b90f344",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.UpdateCollectionXAmzTargetEnumOpenSearchServerlessUpdateCollection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCollectionResponse != nil {
        // handle response
    }
}
```

## UpdateSecurityConfig

Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.UpdateSecurityConfig(ctx, operations.UpdateSecurityConfigRequest{
        UpdateSecurityConfigRequest: shared.UpdateSecurityConfigRequest{
            ClientToken: sdk.String("consequatur"),
            ConfigVersion: "est",
            Description: sdk.String("repellendus"),
            ID: "cf4b9218-79fc-4e95-bf73-ef7fbc7abd74",
            SamlOptions: &shared.SamlConfigOptions{
                GroupAttribute: sdk.String("quibusdam"),
                Metadata: "illum",
                SessionTimeout: sdk.Int64(194342),
                UserAttribute: sdk.String("natus"),
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.UpdateSecurityConfigXAmzTargetEnumOpenSearchServerlessUpdateSecurityConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSecurityConfigResponse != nil {
        // handle response
    }
}
```

## UpdateSecurityPolicy

Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

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
    res, err := s.SDK.UpdateSecurityPolicy(ctx, operations.UpdateSecurityPolicyRequest{
        UpdateSecurityPolicyRequest: shared.UpdateSecurityPolicyRequest{
            ClientToken: sdk.String("maiores"),
            Description: sdk.String("doloribus"),
            Name: "Miss Vicky Kuphal",
            Policy: sdk.String("ipsam"),
            PolicyVersion: "ea",
            Type: shared.SecurityPolicyTypeEnumEncryption,
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateSecurityPolicyXAmzTargetEnumOpenSearchServerlessUpdateSecurityPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSecurityPolicyResponse != nil {
        // handle response
    }
}
```

## UpdateVpcEndpoint

Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

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
    res, err := s.SDK.UpdateVpcEndpoint(ctx, operations.UpdateVpcEndpointRequest{
        UpdateVpcEndpointRequest: shared.UpdateVpcEndpointRequest{
            AddSecurityGroupIds: []string{
                "maiores",
            },
            AddSubnetIds: []string{
                "ex",
            },
            ClientToken: sdk.String("nulla"),
            ID: "9f5fce6c-5561-446c-be25-0fb008c42e14",
            RemoveSecurityGroupIds: []string{
                "dolorum",
            },
            RemoveSubnetIds: []string{
                "placeat",
                "velit",
                "eum",
            },
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.UpdateVpcEndpointXAmzTargetEnumOpenSearchServerlessUpdateVpcEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateVpcEndpointResponse != nil {
        // handle response
    }
}
```
