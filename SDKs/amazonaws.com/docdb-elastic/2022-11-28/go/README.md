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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            AdminUserName: "corrupti",
            AdminUserPassword: "provident",
            AuthType: "SECRET_ARN",
            ClientToken: "quibusdam",
            ClusterName: "unde",
            KmsKeyID: "nulla",
            PreferredMaintenanceWindow: "corrupti",
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
        XAmzAlgorithm: "placeat",
        XAmzContentSha256: "voluptatum",
        XAmzCredential: "iusto",
        XAmzDate: "excepturi",
        XAmzSecurityToken: "nisi",
        XAmzSignature: "recusandae",
        XAmzSignedHeaders: "temporibus",
    }

    ctx := context.Background()
    res, err := s.CreateCluster(ctx, req)
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

### SDK SDK

* `CreateCluster` - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* `CreateClusterSnapshot` - Creates a snapshot of a cluster.
* `DeleteCluster` - Delete a Elastic DocumentDB cluster.
* `DeleteClusterSnapshot` - Delete a Elastic DocumentDB snapshot.
* `GetCluster` - Returns information about a specific Elastic DocumentDB cluster.
* `GetClusterSnapshot` - Returns information about a specific Elastic DocumentDB snapshot
* `ListClusterSnapshots` - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* `ListClusters` - Returns information about provisioned Elastic DocumentDB clusters.
* `ListTagsForResource` - Lists all tags on a Elastic DocumentDB resource
* `RestoreClusterFromSnapshot` - Restores a Elastic DocumentDB cluster from a snapshot.
* `TagResource` - Adds metadata tags to a Elastic DocumentDB resource
* `UntagResource` - Removes metadata tags to a Elastic DocumentDB resource
* `UpdateCluster` - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
