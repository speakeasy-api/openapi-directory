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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddLFTagsToResourceRequest{
        Headers: operations.AddLFTagsToResourceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AddLFTagsToResourceRequestBody{
            CatalogID: "nulla",
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: "fuga",
                    TagKey: "facilis",
                    TagValues: []string{
                        "iusto",
                        "ullam",
                    },
                },
                shared.LFTagPair{
                    CatalogID: "saepe",
                    TagKey: "inventore",
                    TagValues: []string{
                        "enim",
                        "eum",
                        "voluptatum",
                        "autem",
                    },
                },
            },
            Resource: operations.AddLFTagsToResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "non": "deleniti",
                    "similique": "reprehenderit",
                    "molestiae": "quo",
                    "quasi": "laboriosam",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: "dicta",
                    Name: "est",
                    TableCatalogID: "voluptatem",
                    TableName: "consequatur",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "fugiat",
                    ResourceArn: "a",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "omnis",
                    Name: "eos",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: "accusamus",
                    TagKey: "accusamus",
                    TagValues: []string{
                        "rem",
                        "quibusdam",
                        "et",
                        "praesentium",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: "occaecati",
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "soluta",
                            TagValues: []string{
                                "quisquam",
                            },
                        },
                        shared.LFTag{
                            TagKey: "rerum",
                            TagValues: []string{
                                "qui",
                                "sed",
                                "rerum",
                            },
                        },
                        shared.LFTag{
                            TagKey: "possimus",
                            TagValues: []string{
                                "odit",
                                "esse",
                                "rem",
                            },
                        },
                        shared.LFTag{
                            TagKey: "voluptatem",
                            TagValues: []string{
                                "est",
                            },
                        },
                    },
                    ResourceType: "TABLE",
                },
                Table: &shared.TableResource{
                    CatalogID: "blanditiis",
                    DatabaseName: "numquam",
                    Name: "similique",
                    TableWildcard: map[string]interface{}{
                        "sit": "quia",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "et",
                    ColumnNames: []string{
                        "laborum",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "et",
                        },
                    },
                    DatabaseName: "iure",
                    Name: "earum",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddLFTagsToResource(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AddLFTagsToResource` - Attaches one or more LF-tags to an existing resource.
* `AssumeDecoratedRoleWithSAML` - <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
* `BatchGrantPermissions` - Batch operation to grant permissions to the principal.
* `BatchRevokePermissions` - Batch operation to revoke permissions from the principal.
* `CancelTransaction` - Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
* `CommitTransaction` - Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
* `CreateDataCellsFilter` - Creates a data cell filter to allow one to grant access to certain columns on certain rows.
* `CreateLFTag` - Creates an LF-tag with the specified name and values.
* `DeleteDataCellsFilter` - Deletes a data cell filter.
* `DeleteLFTag` - Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
* `DeleteObjectsOnCancel` - <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
* `DeregisterResource` - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* `DescribeResource` - Retrieves the current data access role for the given resource registered in Lake Formation.
* `DescribeTransaction` - Returns the details of a single transaction.
* `ExtendTransaction` - <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
* `GetDataCellsFilter` - Returns a data cells filter.
* `GetDataLakeSettings` - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* `GetEffectivePermissionsForPath` - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* `GetLFTag` - Returns an LF-tag definition.
* `GetQueryState` - Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
* `GetQueryStatistics` - Retrieves statistics on the planning and execution of a query.
* `GetResourceLFTags` - Returns the LF-tags applied to a resource.
* `GetTableObjects` - Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
* `GetTemporaryGluePartitionCredentials` - This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
* `GetTemporaryGlueTableCredentials` - Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
* `GetWorkUnitResults` - Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 
* `GetWorkUnits` - Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
* `GrantPermissions` - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `ListDataCellsFilter` - Lists all the data cell filters on a table.
* `ListLFTags` - Lists LF-tags that the requester has permission to view. 
* `ListPermissions` - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* `ListResources` - Lists the resources registered to be managed by the Data Catalog.
* `ListTableStorageOptimizers` - Returns the configuration of all storage optimizers associated with a specified table.
* `ListTransactions` - <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
* `PutDataLakeSettings` - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* `RegisterResource` - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* `RemoveLFTagsFromResource` - Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* `RevokePermissions` - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* `SearchDatabasesByLFTags` - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* `SearchTablesByLFTags` - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* `StartQueryPlanning` - <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
* `StartTransaction` - Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
* `UpdateDataCellsFilter` - Updates a data cell filter.
* `UpdateLFTag` - Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 
* `UpdateResource` - Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 
* `UpdateTableObjects` - Updates the manifest of Amazon S3 objects that make up the specified governed table.
* `UpdateTableStorageOptimizer` - Updates the configuration of the storage optimizers for a table.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
