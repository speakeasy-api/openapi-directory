# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amp/2020-08-01/go
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
    res, err := s.CreateAlertManagerDefinition(ctx, operations.CreateAlertManagerDefinitionRequest{
        RequestBody: operations.CreateAlertManagerDefinitionRequestBody{
            ClientToken: sdk.String("corrupti"),
            Data: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
        WorkspaceID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlertManagerDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAlertManagerDefinition](docs/sdk/README.md#createalertmanagerdefinition) - Create an alert manager definition.
* [CreateLoggingConfiguration](docs/sdk/README.md#createloggingconfiguration) - Create logging configuration.
* [CreateRuleGroupsNamespace](docs/sdk/README.md#createrulegroupsnamespace) - Create a rule group namespace.
* [CreateWorkspace](docs/sdk/README.md#createworkspace) - Creates a new AMP workspace.
* [DeleteAlertManagerDefinition](docs/sdk/README.md#deletealertmanagerdefinition) - Deletes an alert manager definition.
* [DeleteLoggingConfiguration](docs/sdk/README.md#deleteloggingconfiguration) - Delete logging configuration.
* [DeleteRuleGroupsNamespace](docs/sdk/README.md#deleterulegroupsnamespace) - Delete a rule groups namespace.
* [DeleteWorkspace](docs/sdk/README.md#deleteworkspace) - Deletes an AMP workspace.
* [DescribeAlertManagerDefinition](docs/sdk/README.md#describealertmanagerdefinition) - Describes an alert manager definition.
* [DescribeLoggingConfiguration](docs/sdk/README.md#describeloggingconfiguration) - Describes logging configuration.
* [DescribeRuleGroupsNamespace](docs/sdk/README.md#describerulegroupsnamespace) - Describe a rule groups namespace.
* [DescribeWorkspace](docs/sdk/README.md#describeworkspace) - Describes an existing AMP workspace.
* [ListRuleGroupsNamespaces](docs/sdk/README.md#listrulegroupsnamespaces) - Lists rule groups namespaces.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags you have assigned to the resource.
* [ListWorkspaces](docs/sdk/README.md#listworkspaces) - Lists all AMP workspaces, including workspaces being created or deleted.
* [PutAlertManagerDefinition](docs/sdk/README.md#putalertmanagerdefinition) - Update an alert manager definition.
* [PutRuleGroupsNamespace](docs/sdk/README.md#putrulegroupsnamespace) - Update a rule groups namespace.
* [TagResource](docs/sdk/README.md#tagresource) - Creates tags for the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes tags from the specified resource.
* [UpdateLoggingConfiguration](docs/sdk/README.md#updateloggingconfiguration) - Update logging configuration.
* [UpdateWorkspaceAlias](docs/sdk/README.md#updateworkspacealias) - Updates an AMP workspace alias.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
