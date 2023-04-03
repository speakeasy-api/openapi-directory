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

    req := operations.CreateAlertManagerDefinitionRequest{
        RequestBody: operations.CreateAlertManagerDefinitionRequestBody{
            ClientToken: "corrupti",
            Data: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        WorkspaceID: "error",
    }

    ctx := context.Background()
    res, err := s.CreateAlertManagerDefinition(ctx, req)
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

### SDK SDK

* `CreateAlertManagerDefinition` - Create an alert manager definition.
* `CreateLoggingConfiguration` - Create logging configuration.
* `CreateRuleGroupsNamespace` - Create a rule group namespace.
* `CreateWorkspace` - Creates a new AMP workspace.
* `DeleteAlertManagerDefinition` - Deletes an alert manager definition.
* `DeleteLoggingConfiguration` - Delete logging configuration.
* `DeleteRuleGroupsNamespace` - Delete a rule groups namespace.
* `DeleteWorkspace` - Deletes an AMP workspace.
* `DescribeAlertManagerDefinition` - Describes an alert manager definition.
* `DescribeLoggingConfiguration` - Describes logging configuration.
* `DescribeRuleGroupsNamespace` - Describe a rule groups namespace.
* `DescribeWorkspace` - Describes an existing AMP workspace.
* `ListRuleGroupsNamespaces` - Lists rule groups namespaces.
* `ListTagsForResource` - Lists the tags you have assigned to the resource.
* `ListWorkspaces` - Lists all AMP workspaces, including workspaces being created or deleted.
* `PutAlertManagerDefinition` - Update an alert manager definition.
* `PutRuleGroupsNamespace` - Update a rule groups namespace.
* `TagResource` - Creates tags for the specified resource.
* `UntagResource` - Deletes tags from the specified resource.
* `UpdateLoggingConfiguration` - Update logging configuration.
* `UpdateWorkspaceAlias` - Updates an AMP workspace alias.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
