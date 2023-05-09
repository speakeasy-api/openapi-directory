# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cleanrooms/2022-02-17/go
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
    res, err := s.BatchGetSchema(ctx, operations.BatchGetSchemaRequest{
        RequestBody: operations.BatchGetSchemaRequestBody{
            Names: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        CollaborationIdentifier: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetSchemaOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchGetSchema](docs/sdk/README.md#batchgetschema) - Retrieves multiple schemas by their identifiers.
* [CreateCollaboration](docs/sdk/README.md#createcollaboration) - Creates a new collaboration.
* [CreateConfiguredTable](docs/sdk/README.md#createconfiguredtable) - Creates a new configured table resource.
* [CreateConfiguredTableAnalysisRule](docs/sdk/README.md#createconfiguredtableanalysisrule) - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* [CreateConfiguredTableAssociation](docs/sdk/README.md#createconfiguredtableassociation) - Creates a configured table association. A configured table association links a configured table with a collaboration.
* [CreateMembership](docs/sdk/README.md#createmembership) - Creates a membership for a specific collaboration identifier and joins the collaboration.
* [DeleteCollaboration](docs/sdk/README.md#deletecollaboration) - Deletes a collaboration. It can only be called by the collaboration owner.
* [DeleteConfiguredTable](docs/sdk/README.md#deleteconfiguredtable) - Deletes a configured table.
* [DeleteConfiguredTableAnalysisRule](docs/sdk/README.md#deleteconfiguredtableanalysisrule) - Deletes a configured table analysis rule.
* [DeleteConfiguredTableAssociation](docs/sdk/README.md#deleteconfiguredtableassociation) - Deletes a configured table association.
* [DeleteMember](docs/sdk/README.md#deletemember) - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* [DeleteMembership](docs/sdk/README.md#deletemembership) - Deletes a specified membership. All resources under a membership must be deleted.
* [GetCollaboration](docs/sdk/README.md#getcollaboration) - Returns metadata about a collaboration.
* [GetConfiguredTable](docs/sdk/README.md#getconfiguredtable) - Retrieves a configured table.
* [GetConfiguredTableAnalysisRule](docs/sdk/README.md#getconfiguredtableanalysisrule) - Retrieves a configured table analysis rule.
* [GetConfiguredTableAssociation](docs/sdk/README.md#getconfiguredtableassociation) - Retrieves a configured table association.
* [GetMembership](docs/sdk/README.md#getmembership) - Retrieves a specified membership for an identifier.
* [GetProtectedQuery](docs/sdk/README.md#getprotectedquery) - Returns query processing metadata.
* [GetSchema](docs/sdk/README.md#getschema) - Retrieves the schema for a relation within a collaboration.
* [GetSchemaAnalysisRule](docs/sdk/README.md#getschemaanalysisrule) - Retrieves a schema analysis rule.
* [ListCollaborations](docs/sdk/README.md#listcollaborations) - Lists collaborations the caller owns, is active in, or has been invited to.
* [ListConfiguredTableAssociations](docs/sdk/README.md#listconfiguredtableassociations) - Lists configured table associations for a membership.
* [ListConfiguredTables](docs/sdk/README.md#listconfiguredtables) - Lists configured tables.
* [ListMembers](docs/sdk/README.md#listmembers) - Lists all members within a collaboration.
* [ListMemberships](docs/sdk/README.md#listmemberships) - Lists all memberships resources within the caller's account.
* [ListProtectedQueries](docs/sdk/README.md#listprotectedqueries) - Lists protected queries, sorted by the most recent query.
* [ListSchemas](docs/sdk/README.md#listschemas) - Lists the schemas for relations within a collaboration.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all of the tags that have been added to a resource.
* [StartProtectedQuery](docs/sdk/README.md#startprotectedquery) - Creates a protected query that is started by AWS Clean Rooms.
* [TagResource](docs/sdk/README.md#tagresource) - Tags a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag or list of tags from a resource.
* [UpdateCollaboration](docs/sdk/README.md#updatecollaboration) - Updates collaboration metadata and can only be called by the collaboration owner.
* [UpdateConfiguredTable](docs/sdk/README.md#updateconfiguredtable) - Updates a configured table.
* [UpdateConfiguredTableAnalysisRule](docs/sdk/README.md#updateconfiguredtableanalysisrule) - Updates a configured table analysis rule.
* [UpdateConfiguredTableAssociation](docs/sdk/README.md#updateconfiguredtableassociation) - Updates a configured table association.
* [UpdateMembership](docs/sdk/README.md#updatemembership) - Updates a membership.
* [UpdateProtectedQuery](docs/sdk/README.md#updateprotectedquery) - Updates the processing of a currently running query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
