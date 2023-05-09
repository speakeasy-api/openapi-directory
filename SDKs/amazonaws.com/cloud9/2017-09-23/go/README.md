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
    res, err := s.CreateEnvironmentEc2(ctx, operations.CreateEnvironmentEc2Request{
        CreateEnvironmentEc2Request: shared.CreateEnvironmentEc2Request{
            AutomaticStopTimeMinutes: sdk.Int64(548814),
            ClientRequestToken: sdk.String("provident"),
            ConnectionType: shared.ConnectionTypeEnumConnectSsm.ToPointer(),
            Description: sdk.String("quibusdam"),
            DryRun: sdk.Bool(false),
            ImageID: sdk.String("unde"),
            InstanceType: "nulla",
            Name: "Dallas Kassulke",
            OwnerArn: sdk.String("suscipit"),
            SubnetID: sdk.String("iure"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateEnvironmentEc2XAmzTargetEnumAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2,
    })
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

### [SDK](docs/sdk/README.md)

* [CreateEnvironmentEc2](docs/sdk/README.md#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [CreateEnvironmentMembership](docs/sdk/README.md#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [DeleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [DeleteEnvironmentMembership](docs/sdk/README.md#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [DescribeEnvironmentMemberships](docs/sdk/README.md#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [DescribeEnvironmentStatus](docs/sdk/README.md#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [DescribeEnvironments](docs/sdk/README.md#describeenvironments) - Gets information about Cloud9 development environments.
* [ListEnvironments](docs/sdk/README.md#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [TagResource](docs/sdk/README.md#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from an Cloud9 development environment.
* [UpdateEnvironment](docs/sdk/README.md#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [UpdateEnvironmentMembership](docs/sdk/README.md#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
