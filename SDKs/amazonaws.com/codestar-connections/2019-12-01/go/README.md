# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar-connections/2019-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionInput: shared.CreateConnectionInput{
            ConnectionName: "corrupti",
            HostArn: sdk.String("provident"),
            ProviderType: shared.ProviderTypeEnumGitHubEnterpriseServer.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateConnection](docs/sdk/README.md#createconnection) - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
* [CreateHost](docs/sdk/README.md#createhost) - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
* [DeleteConnection](docs/sdk/README.md#deleteconnection) - The connection to be deleted.
* [DeleteHost](docs/sdk/README.md#deletehost) - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
* [GetConnection](docs/sdk/README.md#getconnection) - Returns the connection ARN and details such as status, owner, and provider type.
* [GetHost](docs/sdk/README.md#gethost) - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
* [ListConnections](docs/sdk/README.md#listconnections) - Lists the connections associated with your account.
* [ListHosts](docs/sdk/README.md#listhosts) - Lists the hosts associated with your account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [TagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from an AWS resource.
* [UpdateHost](docs/sdk/README.md#updatehost) - Updates a specified host with the provided configurations.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
