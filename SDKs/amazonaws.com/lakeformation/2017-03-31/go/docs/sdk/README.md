# SDK

## Overview

<fullname>Lake Formation</fullname> <p>Defines the public endpoint for the Lake Formation service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lakeformation/>
### Available Operations

* [AddLFTagsToResource](#addlftagstoresource) - Attaches one or more LF-tags to an existing resource.
* [AssumeDecoratedRoleWithSAML](#assumedecoratedrolewithsaml) - <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
* [BatchGrantPermissions](#batchgrantpermissions) - Batch operation to grant permissions to the principal.
* [BatchRevokePermissions](#batchrevokepermissions) - Batch operation to revoke permissions from the principal.
* [CancelTransaction](#canceltransaction) - Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
* [CommitTransaction](#committransaction) - Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
* [CreateDataCellsFilter](#createdatacellsfilter) - Creates a data cell filter to allow one to grant access to certain columns on certain rows.
* [CreateLFTag](#createlftag) - Creates an LF-tag with the specified name and values.
* [DeleteDataCellsFilter](#deletedatacellsfilter) - Deletes a data cell filter.
* [DeleteLFTag](#deletelftag) - Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
* [DeleteObjectsOnCancel](#deleteobjectsoncancel) - <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
* [DeregisterResource](#deregisterresource) - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* [DescribeResource](#describeresource) - Retrieves the current data access role for the given resource registered in Lake Formation.
* [DescribeTransaction](#describetransaction) - Returns the details of a single transaction.
* [ExtendTransaction](#extendtransaction) - <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
* [GetDataCellsFilter](#getdatacellsfilter) - Returns a data cells filter.
* [GetDataLakeSettings](#getdatalakesettings) - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* [GetEffectivePermissionsForPath](#geteffectivepermissionsforpath) - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* [GetLFTag](#getlftag) - Returns an LF-tag definition.
* [GetQueryState](#getquerystate) - Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
* [GetQueryStatistics](#getquerystatistics) - Retrieves statistics on the planning and execution of a query.
* [GetResourceLFTags](#getresourcelftags) - Returns the LF-tags applied to a resource.
* [GetTableObjects](#gettableobjects) - Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
* [GetTemporaryGluePartitionCredentials](#gettemporarygluepartitioncredentials) - This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
* [GetTemporaryGlueTableCredentials](#gettemporarygluetablecredentials) - Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
* [GetWorkUnitResults](#getworkunitresults) - Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 
* [GetWorkUnits](#getworkunits) - Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
* [GrantPermissions](#grantpermissions) - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [ListDataCellsFilter](#listdatacellsfilter) - Lists all the data cell filters on a table.
* [ListLFTags](#listlftags) - Lists LF-tags that the requester has permission to view. 
* [ListPermissions](#listpermissions) - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [ListResources](#listresources) - Lists the resources registered to be managed by the Data Catalog.
* [ListTableStorageOptimizers](#listtablestorageoptimizers) - Returns the configuration of all storage optimizers associated with a specified table.
* [ListTransactions](#listtransactions) - <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
* [PutDataLakeSettings](#putdatalakesettings) - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* [RegisterResource](#registerresource) - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* [RemoveLFTagsFromResource](#removelftagsfromresource) - Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* [RevokePermissions](#revokepermissions) - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* [SearchDatabasesByLFTags](#searchdatabasesbylftags) - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* [SearchTablesByLFTags](#searchtablesbylftags) - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* [StartQueryPlanning](#startqueryplanning) - <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
* [StartTransaction](#starttransaction) - Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
* [UpdateDataCellsFilter](#updatedatacellsfilter) - Updates a data cell filter.
* [UpdateLFTag](#updatelftag) - Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 
* [UpdateResource](#updateresource) - Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 
* [UpdateTableObjects](#updatetableobjects) - Updates the manifest of Amazon S3 objects that make up the specified governed table.
* [UpdateTableStorageOptimizer](#updatetablestorageoptimizer) - Updates the configuration of the storage optimizers for a table.

## AddLFTagsToResource

Attaches one or more LF-tags to an existing resource.

### Example Usage

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
    res, err := s.SDK.AddLFTagsToResource(ctx, operations.AddLFTagsToResourceRequest{
        RequestBody: operations.AddLFTagsToResourceRequestBody{
            CatalogID: sdk.String("excepturi"),
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: sdk.String("iure"),
                    TagKey: "culpa",
                    TagValues: []string{
                        "sapiente",
                        "architecto",
                        "mollitia",
                        "dolorem",
                    },
                },
            },
            Resource: operations.AddLFTagsToResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "consequuntur": "repellat",
                    "mollitia": "occaecati",
                    "numquam": "commodi",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("quam"),
                    Name: sdk.String("Shannon Mueller"),
                    TableCatalogID: sdk.String("vitae"),
                    TableName: sdk.String("laborum"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("animi"),
                    ResourceArn: "enim",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("odit"),
                    Name: "Jimmy Wiegand",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("possimus"),
                    TagKey: "aut",
                    TagValues: []string{
                        "error",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("temporibus"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "quasi",
                            TagValues: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                        },
                        shared.LFTag{
                            TagKey: "voluptatibus",
                            TagValues: []string{
                                "omnis",
                            },
                        },
                        shared.LFTag{
                            TagKey: "voluptate",
                            TagValues: []string{
                                "perferendis",
                                "doloremque",
                                "reprehenderit",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("maiores"),
                    DatabaseName: "dicta",
                    Name: sdk.String("Miss Valerie Kshlerin"),
                    TableWildcard: map[string]interface{}{
                        "commodi": "repudiandae",
                        "quae": "ipsum",
                        "quidem": "molestias",
                        "excepturi": "pariatur",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("modi"),
                    ColumnNames: []string{
                        "rem",
                        "voluptates",
                        "quasi",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "sint",
                            "veritatis",
                            "itaque",
                            "incidunt",
                        },
                    },
                    DatabaseName: "enim",
                    Name: "Monique Spinka",
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLFTagsToResourceResponse != nil {
        // handle response
    }
}
```

## AssumeDecoratedRoleWithSAML

<p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>

### Example Usage

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
    res, err := s.SDK.AssumeDecoratedRoleWithSAML(ctx, operations.AssumeDecoratedRoleWithSAMLRequest{
        RequestBody: operations.AssumeDecoratedRoleWithSAMLRequestBody{
            DurationSeconds: sdk.Int64(552822),
            PrincipalArn: "perferendis",
            RoleArn: "magni",
            SAMLAssertion: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssumeDecoratedRoleWithSAMLResponse != nil {
        // handle response
    }
}
```

## BatchGrantPermissions

Batch operation to grant permissions to the principal.

### Example Usage

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
    res, err := s.SDK.BatchGrantPermissions(ctx, operations.BatchGrantPermissionsRequest{
        RequestBody: operations.BatchGrantPermissionsRequestBody{
            CatalogID: sdk.String("tempore"),
            Entries: []shared.BatchPermissionsRequestEntry{
                shared.BatchPermissionsRequestEntry{
                    ID: "f63c969e-9a3e-4fa7-bdfb-14cd66ae395e",
                    Permissions: []shared.PermissionEnum{
                        shared.PermissionEnumCreateTable,
                        shared.PermissionEnumCreateDatabase,
                        shared.PermissionEnumCreateTable,
                        shared.PermissionEnumCreateDatabase,
                    },
                    PermissionsWithGrantOption: []shared.PermissionEnum{
                        shared.PermissionEnumDescribe,
                        shared.PermissionEnumAssociate,
                        shared.PermissionEnumAlter,
                    },
                    Principal: &shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("deserunt"),
                    },
                    Resource: &shared.Resource{
                        Catalog: map[string]interface{}{
                            "vel": "natus",
                            "omnis": "molestiae",
                        },
                        DataCellsFilter: &shared.DataCellsFilterResource{
                            DatabaseName: sdk.String("perferendis"),
                            Name: sdk.String("Megan Rau"),
                            TableCatalogID: sdk.String("labore"),
                            TableName: sdk.String("suscipit"),
                        },
                        DataLocation: &shared.DataLocationResource{
                            CatalogID: sdk.String("natus"),
                            ResourceArn: "nobis",
                        },
                        Database: &shared.DatabaseResource{
                            CatalogID: sdk.String("eum"),
                            Name: "Brandon Brakus V",
                        },
                        LFTag: &shared.LFTagKeyResource{
                            CatalogID: sdk.String("ullam"),
                            TagKey: "provident",
                            TagValues: []string{
                                "sint",
                                "accusantium",
                                "mollitia",
                            },
                        },
                        LFTagPolicy: &shared.LFTagPolicyResource{
                            CatalogID: sdk.String("reiciendis"),
                            Expression: []shared.LFTag{
                                shared.LFTag{
                                    TagKey: "ad",
                                    TagValues: []string{
                                        "dolor",
                                        "necessitatibus",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "odit",
                                    TagValues: []string{
                                        "quasi",
                                        "iure",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "doloribus",
                                    TagValues: []string{
                                        "eius",
                                        "maxime",
                                        "deleniti",
                                        "facilis",
                                    },
                                },
                            },
                            ResourceType: shared.ResourceTypeEnumDatabase,
                        },
                        Table: &shared.TableResource{
                            CatalogID: sdk.String("architecto"),
                            DatabaseName: "architecto",
                            Name: sdk.String("Pedro Ratke"),
                            TableWildcard: map[string]interface{}{
                                "sed": "saepe",
                                "pariatur": "accusantium",
                                "consequuntur": "praesentium",
                                "natus": "magni",
                            },
                        },
                        TableWithColumns: &shared.TableWithColumnsResource{
                            CatalogID: sdk.String("sunt"),
                            ColumnNames: []string{
                                "illum",
                                "pariatur",
                                "maxime",
                                "ea",
                            },
                            ColumnWildcard: &shared.ColumnWildcard{
                                ExcludedColumnNames: []string{
                                    "odit",
                                    "ea",
                                    "accusantium",
                                },
                            },
                            DatabaseName: "ab",
                            Name: "Rickey Hintz",
                        },
                    },
                },
                shared.BatchPermissionsRequestEntry{
                    ID: "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe",
                    Permissions: []shared.PermissionEnum{
                        shared.PermissionEnumCreateTable,
                        shared.PermissionEnumCreateDatabase,
                        shared.PermissionEnumAll,
                    },
                    PermissionsWithGrantOption: []shared.PermissionEnum{
                        shared.PermissionEnumSelect,
                        shared.PermissionEnumDescribe,
                        shared.PermissionEnumCreateDatabase,
                        shared.PermissionEnumAll,
                    },
                    Principal: &shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("occaecati"),
                    },
                    Resource: &shared.Resource{
                        Catalog: map[string]interface{}{
                            "adipisci": "asperiores",
                            "earum": "modi",
                            "iste": "dolorum",
                        },
                        DataCellsFilter: &shared.DataCellsFilterResource{
                            DatabaseName: sdk.String("deleniti"),
                            Name: sdk.String("Rene Rolfson"),
                            TableCatalogID: sdk.String("quaerat"),
                            TableName: sdk.String("quos"),
                        },
                        DataLocation: &shared.DataLocationResource{
                            CatalogID: sdk.String("aliquid"),
                            ResourceArn: "dolorem",
                        },
                        Database: &shared.DatabaseResource{
                            CatalogID: sdk.String("dolorem"),
                            Name: "Norma Erdman",
                        },
                        LFTag: &shared.LFTagKeyResource{
                            CatalogID: sdk.String("cum"),
                            TagKey: "voluptate",
                            TagValues: []string{
                                "reiciendis",
                                "amet",
                            },
                        },
                        LFTagPolicy: &shared.LFTagPolicyResource{
                            CatalogID: sdk.String("dolorum"),
                            Expression: []shared.LFTag{
                                shared.LFTag{
                                    TagKey: "veritatis",
                                    TagValues: []string{
                                        "ipsa",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "iure",
                                    TagValues: []string{
                                        "quaerat",
                                        "accusamus",
                                    },
                                },
                            },
                            ResourceType: shared.ResourceTypeEnumTable,
                        },
                        Table: &shared.TableResource{
                            CatalogID: sdk.String("voluptatibus"),
                            DatabaseName: "voluptas",
                            Name: sdk.String("Dr. Craig Littel DDS"),
                            TableWildcard: map[string]interface{}{
                                "iusto": "voluptate",
                                "dolorum": "deleniti",
                                "omnis": "necessitatibus",
                            },
                        },
                        TableWithColumns: &shared.TableWithColumnsResource{
                            CatalogID: sdk.String("distinctio"),
                            ColumnNames: []string{
                                "nihil",
                                "ipsum",
                                "voluptate",
                                "id",
                            },
                            ColumnWildcard: &shared.ColumnWildcard{
                                ExcludedColumnNames: []string{
                                    "eius",
                                    "aspernatur",
                                    "perferendis",
                                    "amet",
                                },
                            },
                            DatabaseName: "optio",
                            Name: "Tommy Turner",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGrantPermissionsResponse != nil {
        // handle response
    }
}
```

## BatchRevokePermissions

Batch operation to revoke permissions from the principal.

### Example Usage

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
    res, err := s.SDK.BatchRevokePermissions(ctx, operations.BatchRevokePermissionsRequest{
        RequestBody: operations.BatchRevokePermissionsRequestBody{
            CatalogID: sdk.String("quaerat"),
            Entries: []shared.BatchPermissionsRequestEntry{
                shared.BatchPermissionsRequestEntry{
                    ID: "6ce2af7a-73cf-43be-853f-870b326b5a73",
                    Permissions: []shared.PermissionEnum{
                        shared.PermissionEnumAlter,
                        shared.PermissionEnumCreateDatabase,
                    },
                    PermissionsWithGrantOption: []shared.PermissionEnum{
                        shared.PermissionEnumCreateTag,
                        shared.PermissionEnumCreateTable,
                        shared.PermissionEnumSelect,
                        shared.PermissionEnumCreateTable,
                    },
                    Principal: &shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("totam"),
                    },
                    Resource: &shared.Resource{
                        Catalog: map[string]interface{}{
                            "aspernatur": "dolores",
                            "distinctio": "facilis",
                        },
                        DataCellsFilter: &shared.DataCellsFilterResource{
                            DatabaseName: sdk.String("aliquid"),
                            Name: sdk.String("Felicia Spencer"),
                            TableCatalogID: sdk.String("fugit"),
                            TableName: sdk.String("magni"),
                        },
                        DataLocation: &shared.DataLocationResource{
                            CatalogID: sdk.String("odio"),
                            ResourceArn: "sunt",
                        },
                        Database: &shared.DatabaseResource{
                            CatalogID: sdk.String("ullam"),
                            Name: "Terrell Bartell",
                        },
                        LFTag: &shared.LFTagKeyResource{
                            CatalogID: sdk.String("nobis"),
                            TagKey: "et",
                            TagValues: []string{
                                "ipsum",
                                "veritatis",
                                "nobis",
                                "quos",
                            },
                        },
                        LFTagPolicy: &shared.LFTagPolicyResource{
                            CatalogID: sdk.String("tempore"),
                            Expression: []shared.LFTag{
                                shared.LFTag{
                                    TagKey: "aperiam",
                                    TagValues: []string{
                                        "dolorem",
                                        "dolore",
                                        "labore",
                                        "adipisci",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "dolorum",
                                    TagValues: []string{
                                        "quae",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "aut",
                                    TagValues: []string{
                                        "itaque",
                                        "consequatur",
                                        "est",
                                    },
                                },
                            },
                            ResourceType: shared.ResourceTypeEnumTable,
                        },
                        Table: &shared.TableResource{
                            CatalogID: sdk.String("porro"),
                            DatabaseName: "doloribus",
                            Name: sdk.String("Olivia McGlynn IV"),
                            TableWildcard: map[string]interface{}{
                                "occaecati": "voluptatibus",
                                "quisquam": "vero",
                            },
                        },
                        TableWithColumns: &shared.TableWithColumnsResource{
                            CatalogID: sdk.String("omnis"),
                            ColumnNames: []string{
                                "ipsum",
                                "delectus",
                            },
                            ColumnWildcard: &shared.ColumnWildcard{
                                ExcludedColumnNames: []string{
                                    "consectetur",
                                    "vero",
                                },
                            },
                            DatabaseName: "tenetur",
                            Name: "Darla Rau",
                        },
                    },
                },
                shared.BatchPermissionsRequestEntry{
                    ID: "abd74dd3-9c0f-45d2-8ff7-c70a45626d43",
                    Permissions: []shared.PermissionEnum{
                        shared.PermissionEnumDescribe,
                        shared.PermissionEnumSelect,
                    },
                    PermissionsWithGrantOption: []shared.PermissionEnum{
                        shared.PermissionEnumAssociate,
                    },
                    Principal: &shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("quasi"),
                    },
                    Resource: &shared.Resource{
                        Catalog: map[string]interface{}{
                            "nulla": "excepturi",
                            "voluptatibus": "nostrum",
                        },
                        DataCellsFilter: &shared.DataCellsFilterResource{
                            DatabaseName: sdk.String("sapiente"),
                            Name: sdk.String("Elbert Jenkins"),
                            TableCatalogID: sdk.String("veniam"),
                            TableName: sdk.String("aliquid"),
                        },
                        DataLocation: &shared.DataLocationResource{
                            CatalogID: sdk.String("inventore"),
                            ResourceArn: "magnam",
                        },
                        Database: &shared.DatabaseResource{
                            CatalogID: sdk.String("ea"),
                            Name: "Glenn Walter",
                        },
                        LFTag: &shared.LFTagKeyResource{
                            CatalogID: sdk.String("eaque"),
                            TagKey: "a",
                            TagValues: []string{
                                "aut",
                                "aut",
                                "deleniti",
                            },
                        },
                        LFTagPolicy: &shared.LFTagPolicyResource{
                            CatalogID: sdk.String("impedit"),
                            Expression: []shared.LFTag{
                                shared.LFTag{
                                    TagKey: "fugit",
                                    TagValues: []string{
                                        "inventore",
                                        "non",
                                        "et",
                                        "dolorum",
                                    },
                                },
                                shared.LFTag{
                                    TagKey: "laborum",
                                    TagValues: []string{
                                        "velit",
                                        "eum",
                                        "autem",
                                        "nobis",
                                    },
                                },
                            },
                            ResourceType: shared.ResourceTypeEnumTable,
                        },
                        Table: &shared.TableResource{
                            CatalogID: sdk.String("assumenda"),
                            DatabaseName: "nulla",
                            Name: sdk.String("Jeannette Boyer"),
                            TableWildcard: map[string]interface{}{
                                "provident": "ipsa",
                            },
                        },
                        TableWithColumns: &shared.TableWithColumnsResource{
                            CatalogID: sdk.String("molestiae"),
                            ColumnNames: []string{
                                "odio",
                                "eius",
                            },
                            ColumnWildcard: &shared.ColumnWildcard{
                                ExcludedColumnNames: []string{
                                    "esse",
                                    "rem",
                                },
                            },
                            DatabaseName: "fuga",
                            Name: "Yvette Stehr",
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchRevokePermissionsResponse != nil {
        // handle response
    }
}
```

## CancelTransaction

Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.

### Example Usage

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
    res, err := s.SDK.CancelTransaction(ctx, operations.CancelTransactionRequest{
        RequestBody: operations.CancelTransactionRequestBody{
            TransactionID: "id",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTransactionResponse != nil {
        // handle response
    }
}
```

## CommitTransaction

Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.

### Example Usage

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
    res, err := s.SDK.CommitTransaction(ctx, operations.CommitTransactionRequest{
        RequestBody: operations.CommitTransactionRequestBody{
            TransactionID: "eos",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitTransactionResponse != nil {
        // handle response
    }
}
```

## CreateDataCellsFilter

Creates a data cell filter to allow one to grant access to certain columns on certain rows.

### Example Usage

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
    res, err := s.SDK.CreateDataCellsFilter(ctx, operations.CreateDataCellsFilterRequest{
        RequestBody: operations.CreateDataCellsFilterRequestBody{
            TableData: operations.CreateDataCellsFilterRequestBodyTableData{
                ColumnNames: []string{
                    "sequi",
                },
                ColumnWildcard: &shared.ColumnWildcard{
                    ExcludedColumnNames: []string{
                        "esse",
                        "recusandae",
                        "aperiam",
                        "distinctio",
                    },
                },
                DatabaseName: sdk.String("quod"),
                Name: sdk.String("Debra Kovacek"),
                RowFilter: &shared.RowFilter{
                    AllRowsWildcard: map[string]interface{}{
                        "odio": "occaecati",
                        "commodi": "sapiente",
                    },
                    FilterExpression: sdk.String("dolores"),
                },
                TableCatalogID: sdk.String("deserunt"),
                TableName: sdk.String("molestiae"),
                VersionID: sdk.String("accusantium"),
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataCellsFilterResponse != nil {
        // handle response
    }
}
```

## CreateLFTag

Creates an LF-tag with the specified name and values.

### Example Usage

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
    res, err := s.SDK.CreateLFTag(ctx, operations.CreateLFTagRequest{
        RequestBody: operations.CreateLFTagRequestBody{
            CatalogID: sdk.String("fuga"),
            TagKey: "mollitia",
            TagValues: []string{
                "atque",
                "explicabo",
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLFTagResponse != nil {
        // handle response
    }
}
```

## DeleteDataCellsFilter

Deletes a data cell filter.

### Example Usage

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
    res, err := s.SDK.DeleteDataCellsFilter(ctx, operations.DeleteDataCellsFilterRequest{
        RequestBody: operations.DeleteDataCellsFilterRequestBody{
            DatabaseName: sdk.String("saepe"),
            Name: sdk.String("Ivan Bosco"),
            TableCatalogID: sdk.String("accusamus"),
            TableName: sdk.String("veritatis"),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDataCellsFilterResponse != nil {
        // handle response
    }
}
```

## DeleteLFTag

Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.

### Example Usage

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
    res, err := s.SDK.DeleteLFTag(ctx, operations.DeleteLFTagRequest{
        RequestBody: operations.DeleteLFTagRequestBody{
            CatalogID: sdk.String("vel"),
            TagKey: "harum",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLFTagResponse != nil {
        // handle response
    }
}
```

## DeleteObjectsOnCancel

<p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>

### Example Usage

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
    res, err := s.SDK.DeleteObjectsOnCancel(ctx, operations.DeleteObjectsOnCancelRequest{
        RequestBody: operations.DeleteObjectsOnCancelRequestBody{
            CatalogID: sdk.String("culpa"),
            DatabaseName: "tempore",
            Objects: []shared.VirtualObject{
                shared.VirtualObject{
                    ETag: sdk.String("cumque"),
                    URI: "http://active-shift.biz",
                },
            },
            TableName: "sapiente",
            TransactionID: "consectetur",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteObjectsOnCancelResponse != nil {
        // handle response
    }
}
```

## DeregisterResource

<p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>

### Example Usage

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
    res, err := s.SDK.DeregisterResource(ctx, operations.DeregisterResourceRequest{
        RequestBody: operations.DeregisterResourceRequestBody{
            ResourceArn: "quasi",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterResourceResponse != nil {
        // handle response
    }
}
```

## DescribeResource

Retrieves the current data access role for the given resource registered in Lake Formation.

### Example Usage

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
    res, err := s.SDK.DescribeResource(ctx, operations.DescribeResourceRequest{
        RequestBody: operations.DescribeResourceRequestBody{
            ResourceArn: "asperiores",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourceResponse != nil {
        // handle response
    }
}
```

## DescribeTransaction

Returns the details of a single transaction.

### Example Usage

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
    res, err := s.SDK.DescribeTransaction(ctx, operations.DescribeTransactionRequest{
        RequestBody: operations.DescribeTransactionRequestBody{
            TransactionID: "tenetur",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTransactionResponse != nil {
        // handle response
    }
}
```

## ExtendTransaction

<p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>

### Example Usage

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
    res, err := s.SDK.ExtendTransaction(ctx, operations.ExtendTransactionRequest{
        RequestBody: operations.ExtendTransactionRequestBody{
            TransactionID: sdk.String("soluta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtendTransactionResponse != nil {
        // handle response
    }
}
```

## GetDataCellsFilter

Returns a data cells filter.

### Example Usage

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
    res, err := s.SDK.GetDataCellsFilter(ctx, operations.GetDataCellsFilterRequest{
        RequestBody: operations.GetDataCellsFilterRequestBody{
            DatabaseName: "nisi",
            Name: "Nora Denesik",
            TableCatalogID: "deleniti",
            TableName: "itaque",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataCellsFilterResponse != nil {
        // handle response
    }
}
```

## GetDataLakeSettings

Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 

### Example Usage

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
    res, err := s.SDK.GetDataLakeSettings(ctx, operations.GetDataLakeSettingsRequest{
        RequestBody: operations.GetDataLakeSettingsRequestBody{
            CatalogID: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataLakeSettingsResponse != nil {
        // handle response
    }
}
```

## GetEffectivePermissionsForPath

Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.

### Example Usage

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
    res, err := s.SDK.GetEffectivePermissionsForPath(ctx, operations.GetEffectivePermissionsForPathRequest{
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("rem"),
        RequestBody: operations.GetEffectivePermissionsForPathRequestBody{
            CatalogID: sdk.String("aut"),
            MaxResults: sdk.Int64(513075),
            NextToken: sdk.String("eum"),
            ResourceArn: "mollitia",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEffectivePermissionsForPathResponse != nil {
        // handle response
    }
}
```

## GetLFTag

Returns an LF-tag definition.

### Example Usage

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
    res, err := s.SDK.GetLFTag(ctx, operations.GetLFTagRequest{
        RequestBody: operations.GetLFTagRequestBody{
            CatalogID: sdk.String("impedit"),
            TagKey: "explicabo",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLFTagResponse != nil {
        // handle response
    }
}
```

## GetQueryState

Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.

### Example Usage

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
    res, err := s.SDK.GetQueryState(ctx, operations.GetQueryStateRequest{
        RequestBody: operations.GetQueryStateRequestBody{
            QueryID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryStateResponse != nil {
        // handle response
    }
}
```

## GetQueryStatistics

Retrieves statistics on the planning and execution of a query.

### Example Usage

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
    res, err := s.SDK.GetQueryStatistics(ctx, operations.GetQueryStatisticsRequest{
        RequestBody: operations.GetQueryStatisticsRequestBody{
            QueryID: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryStatisticsResponse != nil {
        // handle response
    }
}
```

## GetResourceLFTags

Returns the LF-tags applied to a resource.

### Example Usage

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
    res, err := s.SDK.GetResourceLFTags(ctx, operations.GetResourceLFTagsRequest{
        RequestBody: operations.GetResourceLFTagsRequestBody{
            CatalogID: sdk.String("porro"),
            Resource: operations.GetResourceLFTagsRequestBodyResource{
                Catalog: map[string]interface{}{
                    "labore": "ab",
                    "adipisci": "fuga",
                    "id": "suscipit",
                    "velit": "culpa",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("est"),
                    Name: sdk.String("Felix Stehr"),
                    TableCatalogID: sdk.String("quos"),
                    TableName: sdk.String("vel"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("labore"),
                    ResourceArn: "possimus",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("facilis"),
                    Name: "Leslie King",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("assumenda"),
                    TagKey: "nemo",
                    TagValues: []string{
                        "aliquid",
                        "aperiam",
                        "cum",
                        "consectetur",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("in"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "earum",
                            TagValues: []string{
                                "numquam",
                                "doloribus",
                                "suscipit",
                                "reiciendis",
                            },
                        },
                        shared.LFTag{
                            TagKey: "quidem",
                            TagValues: []string{
                                "necessitatibus",
                                "dolore",
                                "sunt",
                                "asperiores",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("non"),
                    DatabaseName: "amet",
                    Name: sdk.String("Courtney Wiegand"),
                    TableWildcard: map[string]interface{}{
                        "harum": "laboriosam",
                        "ipsa": "voluptates",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("libero"),
                    ColumnNames: []string{
                        "accusamus",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "tempora",
                            "aspernatur",
                            "voluptas",
                        },
                    },
                    DatabaseName: "voluptas",
                    Name: "Cathy Rohan",
                },
            },
            ShowAssignedLFTags: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceLFTagsResponse != nil {
        // handle response
    }
}
```

## GetTableObjects

Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTableObjects(ctx, operations.GetTableObjectsRequest{
        MaxResults: sdk.String("temporibus"),
        NextToken: sdk.String("ullam"),
        RequestBody: operations.GetTableObjectsRequestBody{
            CatalogID: sdk.String("adipisci"),
            DatabaseName: "cum",
            MaxResults: sdk.Int64(502389),
            NextToken: sdk.String("quas"),
            PartitionPredicate: sdk.String("hic"),
            QueryAsOfTime: types.MustTimeFromString("2022-05-14T14:10:48.315Z"),
            TableName: "corrupti",
            TransactionID: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTableObjectsResponse != nil {
        // handle response
    }
}
```

## GetTemporaryGluePartitionCredentials

This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.

### Example Usage

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
    res, err := s.SDK.GetTemporaryGluePartitionCredentials(ctx, operations.GetTemporaryGluePartitionCredentialsRequest{
        RequestBody: operations.GetTemporaryGluePartitionCredentialsRequestBody{
            AuditContext: &operations.GetTemporaryGluePartitionCredentialsRequestBodyAuditContext{
                AdditionalAuditContext: sdk.String("reiciendis"),
            },
            DurationSeconds: sdk.Int64(131852),
            Partition: operations.GetTemporaryGluePartitionCredentialsRequestBodyPartition{
                Values: []string{
                    "facilis",
                    "voluptate",
                    "expedita",
                    "ab",
                },
            },
            Permissions: []shared.PermissionEnum{
                shared.PermissionEnumDrop,
                shared.PermissionEnumCreateTable,
                shared.PermissionEnumSelect,
            },
            SupportedPermissionTypes: []shared.PermissionTypeEnum{
                shared.PermissionTypeEnumColumnPermission,
                shared.PermissionTypeEnumCellFilterPermission,
            },
            TableArn: "explicabo",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemporaryGluePartitionCredentialsResponse != nil {
        // handle response
    }
}
```

## GetTemporaryGlueTableCredentials

Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.

### Example Usage

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
    res, err := s.SDK.GetTemporaryGlueTableCredentials(ctx, operations.GetTemporaryGlueTableCredentialsRequest{
        RequestBody: operations.GetTemporaryGlueTableCredentialsRequestBody{
            AuditContext: &operations.GetTemporaryGlueTableCredentialsRequestBodyAuditContext{
                AdditionalAuditContext: sdk.String("reiciendis"),
            },
            DurationSeconds: sdk.Int64(19300),
            Permissions: []shared.PermissionEnum{
                shared.PermissionEnumAssociate,
                shared.PermissionEnumDrop,
                shared.PermissionEnumSelect,
            },
            SupportedPermissionTypes: []shared.PermissionTypeEnum{
                shared.PermissionTypeEnumColumnPermission,
                shared.PermissionTypeEnumCellFilterPermission,
                shared.PermissionTypeEnumColumnPermission,
            },
            TableArn: "ea",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemporaryGlueTableCredentialsResponse != nil {
        // handle response
    }
}
```

## GetWorkUnitResults

Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 

### Example Usage

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
    res, err := s.SDK.GetWorkUnitResults(ctx, operations.GetWorkUnitResultsRequest{
        RequestBody: operations.GetWorkUnitResultsRequestBody{
            QueryID: "ex",
            WorkUnitID: 25497,
            WorkUnitToken: "non",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkUnitResultsResponse != nil {
        // handle response
    }
}
```

## GetWorkUnits

Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.

### Example Usage

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
    res, err := s.SDK.GetWorkUnits(ctx, operations.GetWorkUnitsRequest{
        NextToken: sdk.String("rem"),
        PageSize: sdk.String("sit"),
        RequestBody: operations.GetWorkUnitsRequestBody{
            NextToken: sdk.String("nobis"),
            PageSize: sdk.Int64(625637),
            QueryID: "veniam",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkUnitsResponse != nil {
        // handle response
    }
}
```

## GrantPermissions

<p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

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
    res, err := s.SDK.GrantPermissions(ctx, operations.GrantPermissionsRequest{
        RequestBody: operations.GrantPermissionsRequestBody{
            CatalogID: sdk.String("numquam"),
            Permissions: []shared.PermissionEnum{
                shared.PermissionEnumInsert,
                shared.PermissionEnumCreateTag,
            },
            PermissionsWithGrantOption: []shared.PermissionEnum{
                shared.PermissionEnumDescribe,
            },
            Principal: operations.GrantPermissionsRequestBodyPrincipal{
                DataLakePrincipalIdentifier: sdk.String("exercitationem"),
            },
            Resource: operations.GrantPermissionsRequestBodyResource{
                Catalog: map[string]interface{}{
                    "cum": "laboriosam",
                    "dolorum": "voluptatum",
                    "error": "hic",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("expedita"),
                    Name: sdk.String("Tony Pagac"),
                    TableCatalogID: sdk.String("dolorum"),
                    TableName: sdk.String("corrupti"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("accusamus"),
                    ResourceArn: "tempora",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("atque"),
                    Name: "Miss April Stiedemann",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("magnam"),
                    TagKey: "consequatur",
                    TagValues: []string{
                        "ipsam",
                        "sit",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("voluptatum"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "repudiandae",
                            TagValues: []string{
                                "et",
                                "blanditiis",
                            },
                        },
                        shared.LFTag{
                            TagKey: "ex",
                            TagValues: []string{
                                "sit",
                            },
                        },
                        shared.LFTag{
                            TagKey: "vel",
                            TagValues: []string{
                                "saepe",
                                "error",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("incidunt"),
                    DatabaseName: "reiciendis",
                    Name: sdk.String("Ms. Opal Buckridge"),
                    TableWildcard: map[string]interface{}{
                        "atque": "laborum",
                        "nam": "tenetur",
                        "laboriosam": "alias",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("amet"),
                    ColumnNames: []string{
                        "voluptate",
                        "unde",
                        "reiciendis",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "repellendus",
                            "delectus",
                            "voluptates",
                        },
                    },
                    DatabaseName: "perferendis",
                    Name: "Rickey Kiehn",
                },
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GrantPermissionsResponse != nil {
        // handle response
    }
}
```

## ListDataCellsFilter

Lists all the data cell filters on a table.

### Example Usage

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
    res, err := s.SDK.ListDataCellsFilter(ctx, operations.ListDataCellsFilterRequest{
        MaxResults: sdk.String("atque"),
        NextToken: sdk.String("reprehenderit"),
        RequestBody: operations.ListDataCellsFilterRequestBody{
            MaxResults: sdk.Int64(991142),
            NextToken: sdk.String("totam"),
            Table: &operations.ListDataCellsFilterRequestBodyTable{
                CatalogID: sdk.String("suscipit"),
                DatabaseName: sdk.String("quidem"),
                Name: sdk.String("Henry Koepp"),
                TableWildcard: map[string]interface{}{
                    "atque": "error",
                    "officiis": "officiis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataCellsFilterResponse != nil {
        // handle response
    }
}
```

## ListLFTags

Lists LF-tags that the requester has permission to view. 

### Example Usage

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
    res, err := s.SDK.ListLFTags(ctx, operations.ListLFTagsRequest{
        MaxResults: sdk.String("at"),
        NextToken: sdk.String("error"),
        RequestBody: operations.ListLFTagsRequestBody{
            CatalogID: sdk.String("blanditiis"),
            MaxResults: sdk.Int64(379356),
            NextToken: sdk.String("repudiandae"),
            ResourceShareType: operations.ListLFTagsRequestBodyResourceShareTypeEnumAll.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLFTagsResponse != nil {
        // handle response
    }
}
```

## ListPermissions

<p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

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
    res, err := s.SDK.ListPermissions(ctx, operations.ListPermissionsRequest{
        MaxResults: sdk.String("doloremque"),
        NextToken: sdk.String("repudiandae"),
        RequestBody: operations.ListPermissionsRequestBody{
            CatalogID: sdk.String("dicta"),
            IncludeRelated: sdk.String("accusantium"),
            MaxResults: sdk.Int64(106429),
            NextToken: sdk.String("dolores"),
            Principal: &operations.ListPermissionsRequestBodyPrincipal{
                DataLakePrincipalIdentifier: sdk.String("enim"),
            },
            Resource: &operations.ListPermissionsRequestBodyResource{
                Catalog: map[string]interface{}{
                    "velit": "a",
                    "molestias": "magnam",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("saepe"),
                    Name: sdk.String("Toni Torphy"),
                    TableCatalogID: sdk.String("adipisci"),
                    TableName: sdk.String("eveniet"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("occaecati"),
                    ResourceArn: "consequuntur",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("fugit"),
                    Name: "Leo Kiehn II",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("quidem"),
                    TagKey: "eveniet",
                    TagValues: []string{
                        "vero",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("doloremque"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "ipsa",
                            TagValues: []string{
                                "quae",
                                "molestiae",
                                "eveniet",
                            },
                        },
                        shared.LFTag{
                            TagKey: "qui",
                            TagValues: []string{
                                "iure",
                                "necessitatibus",
                                "ratione",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumTable,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("distinctio"),
                    DatabaseName: "voluptatum",
                    Name: sdk.String("Jim Hammes II"),
                    TableWildcard: map[string]interface{}{
                        "nihil": "mollitia",
                        "voluptas": "alias",
                        "maiores": "reiciendis",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("dolores"),
                    ColumnNames: []string{
                        "minima",
                        "dolore",
                        "dolorum",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "quae",
                        },
                    },
                    DatabaseName: "recusandae",
                    Name: "Calvin Kreiger",
                },
            },
            ResourceType: operations.ListPermissionsRequestBodyResourceTypeEnumLfTagPolicy.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPermissionsResponse != nil {
        // handle response
    }
}
```

## ListResources

Lists the resources registered to be managed by the Data Catalog.

### Example Usage

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
    res, err := s.SDK.ListResources(ctx, operations.ListResourcesRequest{
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("quis"),
        RequestBody: operations.ListResourcesRequestBody{
            FilterConditionList: []shared.FilterCondition{
                shared.FilterCondition{
                    ComparisonOperator: shared.ComparisonOperatorEnumBetween.ToPointer(),
                    Field: shared.FieldNameStringEnumRoleArn.ToPointer(),
                    StringValueList: []string{
                        "ullam",
                    },
                },
                shared.FilterCondition{
                    ComparisonOperator: shared.ComparisonOperatorEnumNe.ToPointer(),
                    Field: shared.FieldNameStringEnumRoleArn.ToPointer(),
                    StringValueList: []string{
                        "mollitia",
                        "provident",
                    },
                },
            },
            MaxResults: sdk.Int64(821719),
            NextToken: sdk.String("animi"),
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesResponse != nil {
        // handle response
    }
}
```

## ListTableStorageOptimizers

Returns the configuration of all storage optimizers associated with a specified table.

### Example Usage

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
    res, err := s.SDK.ListTableStorageOptimizers(ctx, operations.ListTableStorageOptimizersRequest{
        MaxResults: sdk.String("nam"),
        NextToken: sdk.String("earum"),
        RequestBody: operations.ListTableStorageOptimizersRequestBody{
            CatalogID: sdk.String("officia"),
            DatabaseName: "laborum",
            MaxResults: sdk.Int64(813054),
            NextToken: sdk.String("modi"),
            StorageOptimizerType: operations.ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnumAll.ToPointer(),
            TableName: "molestias",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableStorageOptimizersResponse != nil {
        // handle response
    }
}
```

## ListTransactions

<p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>

### Example Usage

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
    res, err := s.SDK.ListTransactions(ctx, operations.ListTransactionsRequest{
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("fugit"),
        RequestBody: operations.ListTransactionsRequestBody{
            CatalogID: sdk.String("cumque"),
            MaxResults: sdk.Int64(62636),
            NextToken: sdk.String("perferendis"),
            StatusFilter: operations.ListTransactionsRequestBodyStatusFilterEnumCompleted.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransactionsResponse != nil {
        // handle response
    }
}
```

## PutDataLakeSettings

<p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>

### Example Usage

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
    res, err := s.SDK.PutDataLakeSettings(ctx, operations.PutDataLakeSettingsRequest{
        RequestBody: operations.PutDataLakeSettingsRequestBody{
            CatalogID: sdk.String("sapiente"),
            DataLakeSettings: operations.PutDataLakeSettingsRequestBodyDataLakeSettings{
                AllowExternalDataFiltering: sdk.Bool(false),
                AuthorizedSessionTagValueList: []string{
                    "dicta",
                    "minima",
                },
                CreateDatabaseDefaultPermissions: []shared.PrincipalPermissions{
                    shared.PrincipalPermissions{
                        Permissions: []shared.PermissionEnum{
                            shared.PermissionEnumCreateDatabase,
                            shared.PermissionEnumAssociate,
                            shared.PermissionEnumCreateTable,
                        },
                        Principal: &shared.DataLakePrincipal{
                            DataLakePrincipalIdentifier: sdk.String("hic"),
                        },
                    },
                },
                CreateTableDefaultPermissions: []shared.PrincipalPermissions{
                    shared.PrincipalPermissions{
                        Permissions: []shared.PermissionEnum{
                            shared.PermissionEnumAssociate,
                        },
                        Principal: &shared.DataLakePrincipal{
                            DataLakePrincipalIdentifier: sdk.String("perspiciatis"),
                        },
                    },
                    shared.PrincipalPermissions{
                        Permissions: []shared.PermissionEnum{
                            shared.PermissionEnumCreateTag,
                            shared.PermissionEnumDelete,
                            shared.PermissionEnumDataLocationAccess,
                            shared.PermissionEnumDelete,
                        },
                        Principal: &shared.DataLakePrincipal{
                            DataLakePrincipalIdentifier: sdk.String("dolorem"),
                        },
                    },
                    shared.PrincipalPermissions{
                        Permissions: []shared.PermissionEnum{
                            shared.PermissionEnumDataLocationAccess,
                        },
                        Principal: &shared.DataLakePrincipal{
                            DataLakePrincipalIdentifier: sdk.String("fuga"),
                        },
                    },
                    shared.PrincipalPermissions{
                        Permissions: []shared.PermissionEnum{
                            shared.PermissionEnumCreateDatabase,
                        },
                        Principal: &shared.DataLakePrincipal{
                            DataLakePrincipalIdentifier: sdk.String("necessitatibus"),
                        },
                    },
                },
                DataLakeAdmins: []shared.DataLakePrincipal{
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("consequatur"),
                    },
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("quasi"),
                    },
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("et"),
                    },
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("ducimus"),
                    },
                },
                ExternalDataFilteringAllowList: []shared.DataLakePrincipal{
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("occaecati"),
                    },
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("suscipit"),
                    },
                    shared.DataLakePrincipal{
                        DataLakePrincipalIdentifier: sdk.String("adipisci"),
                    },
                },
                Parameters: map[string]string{
                    "magni": "doloribus",
                },
                TrustedResourceOwners: []string{
                    "necessitatibus",
                    "ipsa",
                    "tempora",
                    "nihil",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDataLakeSettingsResponse != nil {
        // handle response
    }
}
```

## RegisterResource

<p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>

### Example Usage

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
    res, err := s.SDK.RegisterResource(ctx, operations.RegisterResourceRequest{
        RequestBody: operations.RegisterResourceRequestBody{
            ResourceArn: "vel",
            RoleArn: sdk.String("architecto"),
            UseServiceLinkedRole: sdk.Bool(false),
            WithFederation: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterResourceResponse != nil {
        // handle response
    }
}
```

## RemoveLFTagsFromResource

Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.

### Example Usage

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
    res, err := s.SDK.RemoveLFTagsFromResource(ctx, operations.RemoveLFTagsFromResourceRequest{
        RequestBody: operations.RemoveLFTagsFromResourceRequestBody{
            CatalogID: sdk.String("consectetur"),
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: sdk.String("ipsa"),
                    TagKey: "laborum",
                    TagValues: []string{
                        "nostrum",
                    },
                },
                shared.LFTagPair{
                    CatalogID: sdk.String("fugiat"),
                    TagKey: "expedita",
                    TagValues: []string{
                        "officia",
                        "suscipit",
                    },
                },
            },
            Resource: operations.RemoveLFTagsFromResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "perferendis": "eum",
                    "voluptas": "iste",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("id"),
                    Name: sdk.String("Isabel Schuster"),
                    TableCatalogID: sdk.String("laborum"),
                    TableName: sdk.String("libero"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("ad"),
                    ResourceArn: "deleniti",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("enim"),
                    Name: "Estelle Jakubowski",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("ut"),
                    TagKey: "ad",
                    TagValues: []string{
                        "voluptatem",
                        "molestias",
                        "cum",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("aliquid"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "voluptatum",
                            TagValues: []string{
                                "veritatis",
                                "rerum",
                                "est",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumTable,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("voluptatem"),
                    DatabaseName: "sapiente",
                    Name: sdk.String("Juan Parker"),
                    TableWildcard: map[string]interface{}{
                        "alias": "deleniti",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("earum"),
                    ColumnNames: []string{
                        "sapiente",
                        "rem",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "nemo",
                            "asperiores",
                            "ratione",
                            "ullam",
                        },
                    },
                    DatabaseName: "perferendis",
                    Name: "Jimmie Russel",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveLFTagsFromResourceResponse != nil {
        // handle response
    }
}
```

## RevokePermissions

Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.

### Example Usage

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
    res, err := s.SDK.RevokePermissions(ctx, operations.RevokePermissionsRequest{
        RequestBody: operations.RevokePermissionsRequestBody{
            CatalogID: sdk.String("tempora"),
            Permissions: []shared.PermissionEnum{
                shared.PermissionEnumAll,
            },
            PermissionsWithGrantOption: []shared.PermissionEnum{
                shared.PermissionEnumAll,
            },
            Principal: operations.RevokePermissionsRequestBodyPrincipal{
                DataLakePrincipalIdentifier: sdk.String("modi"),
            },
            Resource: operations.RevokePermissionsRequestBodyResource{
                Catalog: map[string]interface{}{
                    "ab": "laudantium",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("quae"),
                    Name: sdk.String("Janis Hills V"),
                    TableCatalogID: sdk.String("eveniet"),
                    TableName: sdk.String("impedit"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("officiis"),
                    ResourceArn: "esse",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("necessitatibus"),
                    Name: "Sally Dooley",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("vel"),
                    TagKey: "voluptatum",
                    TagValues: []string{
                        "exercitationem",
                        "ab",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("porro"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "nobis",
                            TagValues: []string{
                                "recusandae",
                                "consequuntur",
                            },
                        },
                        shared.LFTag{
                            TagKey: "voluptatem",
                            TagValues: []string{
                                "necessitatibus",
                                "quasi",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("at"),
                    DatabaseName: "vero",
                    Name: sdk.String("Kerry Dickinson"),
                    TableWildcard: map[string]interface{}{
                        "occaecati": "nemo",
                        "voluptate": "blanditiis",
                        "officia": "voluptas",
                        "numquam": "nemo",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("quos"),
                    ColumnNames: []string{
                        "aspernatur",
                        "ducimus",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "fuga",
                        },
                    },
                    DatabaseName: "laudantium",
                    Name: "Joyce Leffler III",
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevokePermissionsResponse != nil {
        // handle response
    }
}
```

## SearchDatabasesByLFTags

This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.

### Example Usage

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
    res, err := s.SDK.SearchDatabasesByLFTags(ctx, operations.SearchDatabasesByLFTagsRequest{
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("eos"),
        RequestBody: operations.SearchDatabasesByLFTagsRequestBody{
            CatalogID: sdk.String("occaecati"),
            Expression: []shared.LFTag{
                shared.LFTag{
                    TagKey: "magni",
                    TagValues: []string{
                        "fuga",
                    },
                },
                shared.LFTag{
                    TagKey: "accusamus",
                    TagValues: []string{
                        "distinctio",
                        "omnis",
                        "delectus",
                        "minima",
                    },
                },
                shared.LFTag{
                    TagKey: "praesentium",
                    TagValues: []string{
                        "magnam",
                        "temporibus",
                        "quos",
                        "commodi",
                    },
                },
            },
            MaxResults: sdk.Int64(930819),
            NextToken: sdk.String("commodi"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchDatabasesByLFTagsResponse != nil {
        // handle response
    }
}
```

## SearchTablesByLFTags

This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.

### Example Usage

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
    res, err := s.SDK.SearchTablesByLFTags(ctx, operations.SearchTablesByLFTagsRequest{
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("alias"),
        RequestBody: operations.SearchTablesByLFTagsRequestBody{
            CatalogID: sdk.String("quasi"),
            Expression: []shared.LFTag{
                shared.LFTag{
                    TagKey: "maiores",
                    TagValues: []string{
                        "sint",
                        "nulla",
                    },
                },
            },
            MaxResults: sdk.Int64(643678),
            NextToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTablesByLFTagsResponse != nil {
        // handle response
    }
}
```

## StartQueryPlanning

<p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartQueryPlanning(ctx, operations.StartQueryPlanningRequest{
        RequestBody: operations.StartQueryPlanningRequestBody{
            QueryPlanningContext: operations.StartQueryPlanningRequestBodyQueryPlanningContext{
                CatalogID: sdk.String("hic"),
                DatabaseName: sdk.String("necessitatibus"),
                QueryAsOfTime: types.MustTimeFromString("2021-10-15T06:49:27.168Z"),
                QueryParameters: map[string]string{
                    "debitis": "delectus",
                    "quae": "minus",
                },
                TransactionID: sdk.String("fuga"),
            },
            QueryString: "laborum",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("soluta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartQueryPlanningResponse != nil {
        // handle response
    }
}
```

## StartTransaction

Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.

### Example Usage

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
    res, err := s.SDK.StartTransaction(ctx, operations.StartTransactionRequest{
        RequestBody: operations.StartTransactionRequestBody{
            TransactionType: operations.StartTransactionRequestBodyTransactionTypeEnumReadOnly.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTransactionResponse != nil {
        // handle response
    }
}
```

## UpdateDataCellsFilter

Updates a data cell filter.

### Example Usage

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
    res, err := s.SDK.UpdateDataCellsFilter(ctx, operations.UpdateDataCellsFilterRequest{
        RequestBody: operations.UpdateDataCellsFilterRequestBody{
            TableData: operations.UpdateDataCellsFilterRequestBodyTableData{
                ColumnNames: []string{
                    "deleniti",
                    "quibusdam",
                    "iure",
                    "odit",
                },
                ColumnWildcard: &shared.ColumnWildcard{
                    ExcludedColumnNames: []string{
                        "vel",
                        "magnam",
                        "quibusdam",
                        "inventore",
                    },
                },
                DatabaseName: sdk.String("facere"),
                Name: sdk.String("Juan Wolf"),
                RowFilter: &shared.RowFilter{
                    AllRowsWildcard: map[string]interface{}{
                        "velit": "illo",
                        "accusantium": "vel",
                    },
                    FilterExpression: sdk.String("ea"),
                },
                TableCatalogID: sdk.String("beatae"),
                TableName: sdk.String("vero"),
                VersionID: sdk.String("excepturi"),
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataCellsFilterResponse != nil {
        // handle response
    }
}
```

## UpdateLFTag

Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 

### Example Usage

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
    res, err := s.SDK.UpdateLFTag(ctx, operations.UpdateLFTagRequest{
        RequestBody: operations.UpdateLFTagRequestBody{
            CatalogID: sdk.String("voluptatibus"),
            TagKey: "iste",
            TagValuesToAdd: []string{
                "alias",
                "nisi",
                "itaque",
                "velit",
            },
            TagValuesToDelete: []string{
                "non",
                "dolor",
                "iusto",
            },
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLFTagResponse != nil {
        // handle response
    }
}
```

## UpdateResource

Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 

### Example Usage

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
    res, err := s.SDK.UpdateResource(ctx, operations.UpdateResourceRequest{
        RequestBody: operations.UpdateResourceRequestBody{
            ResourceArn: "voluptas",
            RoleArn: "facilis",
            WithFederation: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceResponse != nil {
        // handle response
    }
}
```

## UpdateTableObjects

Updates the manifest of Amazon S3 objects that make up the specified governed table.

### Example Usage

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
    res, err := s.SDK.UpdateTableObjects(ctx, operations.UpdateTableObjectsRequest{
        RequestBody: operations.UpdateTableObjectsRequestBody{
            CatalogID: sdk.String("unde"),
            DatabaseName: "necessitatibus",
            TableName: "animi",
            TransactionID: sdk.String("impedit"),
            WriteOperations: []shared.WriteOperation{
                shared.WriteOperation{
                    AddObject: &shared.AddObjectInput{
                        ETag: "corporis",
                        PartitionValues: []string{
                            "error",
                            "esse",
                            "labore",
                        },
                        Size: 85066,
                        URI: "https://empty-buffer.com",
                    },
                    DeleteObject: &shared.DeleteObjectInput{
                        ETag: sdk.String("dolorem"),
                        PartitionValues: []string{
                            "qui",
                            "iste",
                        },
                        URI: "http://handy-result.net",
                    },
                },
                shared.WriteOperation{
                    AddObject: &shared.AddObjectInput{
                        ETag: "rem",
                        PartitionValues: []string{
                            "odio",
                            "fugit",
                            "alias",
                        },
                        Size: 168042,
                        URI: "http://belated-bandolier.biz",
                    },
                    DeleteObject: &shared.DeleteObjectInput{
                        ETag: sdk.String("neque"),
                        PartitionValues: []string{
                            "itaque",
                            "et",
                        },
                        URI: "http://outrageous-strap.net",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableObjectsResponse != nil {
        // handle response
    }
}
```

## UpdateTableStorageOptimizer

Updates the configuration of the storage optimizers for a table.

### Example Usage

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
    res, err := s.SDK.UpdateTableStorageOptimizer(ctx, operations.UpdateTableStorageOptimizerRequest{
        RequestBody: operations.UpdateTableStorageOptimizerRequestBody{
            CatalogID: sdk.String("id"),
            DatabaseName: "libero",
            StorageOptimizerConfig: map[string]map[string]string{
                "officia": map[string]string{
                    "placeat": "sit",
                    "iusto": "ipsa",
                    "voluptates": "inventore",
                },
                "aperiam": map[string]string{
                    "dolore": "eligendi",
                    "distinctio": "voluptatem",
                    "autem": "esse",
                },
                "dolores": map[string]string{
                    "beatae": "est",
                    "facere": "corrupti",
                    "molestiae": "provident",
                    "accusamus": "necessitatibus",
                },
                "tempore": map[string]string{
                    "ea": "autem",
                    "ipsam": "rerum",
                    "laudantium": "corporis",
                },
            },
            TableName: "officiis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableStorageOptimizerResponse != nil {
        // handle response
    }
}
```
