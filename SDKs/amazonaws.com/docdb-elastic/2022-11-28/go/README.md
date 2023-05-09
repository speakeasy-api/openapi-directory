# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/docdb-elastic/2022-11-28/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            AdminUserName: "corrupti",
            AdminUserPassword: "provident",
            AuthType: operations.CreateClusterRequestBodyAuthTypeEnumSecretArn,
            ClientToken: sdk.String("quibusdam"),
            ClusterName: "unde",
            KmsKeyID: sdk.String("nulla"),
            PreferredMaintenanceWindow: sdk.String("corrupti"),
            ShardCapacity: 847252,
            ShardCount: 423655,
            SubnetIds: []string{
                "deserunt",
                "suscipit",
                "iure",
            },
            Tags: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
            VpcSecurityGroupIds: []string{
                "molestiae",
                "minus",
            },
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCluster](docs/sdk/README.md#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [CreateClusterSnapshot](docs/sdk/README.md#createclustersnapshot) - Creates a snapshot of a cluster.
* [DeleteCluster](docs/sdk/README.md#deletecluster) - Delete a Elastic DocumentDB cluster.
* [DeleteClusterSnapshot](docs/sdk/README.md#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [GetCluster](docs/sdk/README.md#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [GetClusterSnapshot](docs/sdk/README.md#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [ListClusterSnapshots](docs/sdk/README.md#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [ListClusters](docs/sdk/README.md#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [RestoreClusterFromSnapshot](docs/sdk/README.md#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [TagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [UntagResource](docs/sdk/README.md#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [UpdateCluster](docs/sdk/README.md#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
