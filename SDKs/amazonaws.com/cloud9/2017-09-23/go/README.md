# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloud9/2017-09-23/go
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

    req := operations.CreateEnvironmentEc2Request{
        CreateEnvironmentEc2Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: 548814,
            ClientRequestToken: "provident",
            ConnectionType: "CONNECT_SSM",
            Description: "quibusdam",
            DryRun: false,
            ImageID: "unde",
            InstanceType: "nulla",
            Name: "corrupti",
            OwnerArn: "illum",
            SubnetID: "vel",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
        XAmzTarget: "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
    }

    ctx := context.Background()
    res, err := s.CreateEnvironmentEc2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnvironmentEc2Result != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateEnvironmentEc2` - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* `CreateEnvironmentMembership` - Adds an environment member to an Cloud9 development environment.
* `DeleteEnvironment` - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* `DeleteEnvironmentMembership` - Deletes an environment member from a development environment.
* `DescribeEnvironmentMemberships` - Gets information about environment members for an Cloud9 development environment.
* `DescribeEnvironmentStatus` - Gets status information for an Cloud9 development environment.
* `DescribeEnvironments` - Gets information about Cloud9 development environments.
* `ListEnvironments` - Gets a list of Cloud9 development environment identifiers.
* `ListTagsForResource` - Gets a list of the tags associated with an Cloud9 development environment.
* `TagResource` - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* `UntagResource` - Removes tags from an Cloud9 development environment.
* `UpdateEnvironment` - Changes the settings of an existing Cloud9 development environment.
* `UpdateEnvironmentMembership` - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
