# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/lakeformation/2017-03-31/go
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
    res, err := s.AddLFTagsToResource(ctx, operations.AddLFTagsToResourceRequest{
        RequestBody: operations.AddLFTagsToResourceRequestBody{
            CatalogID: sdk.String("corrupti"),
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: sdk.String("distinctio"),
                    TagKey: "quibusdam",
                    TagValues: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.LFTagPair{
                    CatalogID: sdk.String("vel"),
                    TagKey: "error",
                    TagValues: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
                shared.LFTagPair{
                    CatalogID: sdk.String("debitis"),
                    TagKey: "ipsa",
                    TagValues: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                },
            },
            Resource: operations.AddLFTagsToResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "voluptatum": "iusto",
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("veritatis"),
                    Name: sdk.String("Christopher Hills"),
                    TableCatalogID: sdk.String("quo"),
                    TableName: sdk.String("odit"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("at"),
                    ResourceArn: "at",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("maiores"),
                    Name: "Bernadette Schmidt",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("porro"),
                    TagKey: "dolorum",
                    TagValues: []string{
                        "nam",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("officia"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "fugit",
                            TagValues: []string{
                                "hic",
                                "optio",
                                "totam",
                            },
                        },
                        shared.LFTag{
                            TagKey: "beatae",
                            TagValues: []string{
                                "molestiae",
                                "modi",
                            },
                        },
                        shared.LFTag{
                            TagKey: "qui",
                            TagValues: []string{
                                "cum",
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("perferendis"),
                    DatabaseName: "ad",
                    Name: sdk.String("Louis Moore"),
                    TableWildcard: map[string]interface{}{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("corporis"),
                    ColumnNames: []string{
                        "iure",
                        "saepe",
                        "quidem",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "ipsa",
                        },
                    },
                    DatabaseName: "reiciendis",
                    Name: "Shaun Osinski",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLFTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddLFTagsToResource](docs/sdk/README.md#addlftagstoresource) - Attaches one or more LF-tags to an existing resource.
* [AssumeDecoratedRoleWithSAML](docs/sdk/README.md#assumedecoratedrolewithsaml) - <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
* [BatchGrantPermissions](docs/sdk/README.md#batchgrantpermissions) - Batch operation to grant permissions to the principal.
* [BatchRevokePermissions](docs/sdk/README.md#batchrevokepermissions) - Batch operation to revoke permissions from the principal.
* [CancelTransaction](docs/sdk/README.md#canceltransaction) - Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
* [CommitTransaction](docs/sdk/README.md#committransaction) - Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
* [CreateDataCellsFilter](docs/sdk/README.md#createdatacellsfilter) - Creates a data cell filter to allow one to grant access to certain columns on certain rows.
* [CreateLFTag](docs/sdk/README.md#createlftag) - Creates an LF-tag with the specified name and values.
* [DeleteDataCellsFilter](docs/sdk/README.md#deletedatacellsfilter) - Deletes a data cell filter.
* [DeleteLFTag](docs/sdk/README.md#deletelftag) - Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
* [DeleteObjectsOnCancel](docs/sdk/README.md#deleteobjectsoncancel) - <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
* [DeregisterResource](docs/sdk/README.md#deregisterresource) - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* [DescribeResource](docs/sdk/README.md#describeresource) - Retrieves the current data access role for the given resource registered in Lake Formation.
* [DescribeTransaction](docs/sdk/README.md#describetransaction) - Returns the details of a single transaction.
* [ExtendTransaction](docs/sdk/README.md#extendtransaction) - <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
* [GetDataCellsFilter](docs/sdk/README.md#getdatacellsfilter) - Returns a data cells filter.
* [GetDataLakeSettings](docs/sdk/README.md#getdatalakesettings) - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* [GetEffectivePermissionsForPath](docs/sdk/README.md#geteffectivepermissionsforpath) - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* [GetLFTag](docs/sdk/README.md#getlftag) - Returns an LF-tag definition.
* [GetQueryState](docs/sdk/README.md#getquerystate) - Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
* [GetQueryStatistics](docs/sdk/README.md#getquerystatistics) - Retrieves statistics on the planning and execution of a query.
* [GetResourceLFTags](docs/sdk/README.md#getresourcelftags) - Returns the LF-tags applied to a resource.
* [GetTableObjects](docs/sdk/README.md#gettableobjects) - Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
* [GetTemporaryGluePartitionCredentials](docs/sdk/README.md#gettemporarygluepartitioncredentials) - This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
* [GetTemporaryGlueTableCredentials](docs/sdk/README.md#gettemporarygluetablecredentials) - Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
* [GetWorkUnitResults](docs/sdk/README.md#getworkunitresults) - Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 
* [GetWorkUnits](docs/sdk/README.md#getworkunits) - Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
* [GrantPermissions](docs/sdk/README.md#grantpermissions) - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [ListDataCellsFilter](docs/sdk/README.md#listdatacellsfilter) - Lists all the data cell filters on a table.
* [ListLFTags](docs/sdk/README.md#listlftags) - Lists LF-tags that the requester has permission to view. 
* [ListPermissions](docs/sdk/README.md#listpermissions) - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [ListResources](docs/sdk/README.md#listresources) - Lists the resources registered to be managed by the Data Catalog.
* [ListTableStorageOptimizers](docs/sdk/README.md#listtablestorageoptimizers) - Returns the configuration of all storage optimizers associated with a specified table.
* [ListTransactions](docs/sdk/README.md#listtransactions) - <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
* [PutDataLakeSettings](docs/sdk/README.md#putdatalakesettings) - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* [RegisterResource](docs/sdk/README.md#registerresource) - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* [RemoveLFTagsFromResource](docs/sdk/README.md#removelftagsfromresource) - Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* [RevokePermissions](docs/sdk/README.md#revokepermissions) - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* [SearchDatabasesByLFTags](docs/sdk/README.md#searchdatabasesbylftags) - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* [SearchTablesByLFTags](docs/sdk/README.md#searchtablesbylftags) - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* [StartQueryPlanning](docs/sdk/README.md#startqueryplanning) - <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
* [StartTransaction](docs/sdk/README.md#starttransaction) - Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
* [UpdateDataCellsFilter](docs/sdk/README.md#updatedatacellsfilter) - Updates a data cell filter.
* [UpdateLFTag](docs/sdk/README.md#updatelftag) - Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 
* [UpdateResource](docs/sdk/README.md#updateresource) - Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 
* [UpdateTableObjects](docs/sdk/README.md#updatetableobjects) - Updates the manifest of Amazon S3 objects that make up the specified governed table.
* [UpdateTableStorageOptimizer](docs/sdk/README.md#updatetablestorageoptimizer) - Updates the configuration of the storage optimizers for a table.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
