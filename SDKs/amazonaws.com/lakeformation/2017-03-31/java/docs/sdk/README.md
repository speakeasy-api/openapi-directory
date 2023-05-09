# SDK

## Overview

<fullname>Lake Formation</fullname> <p>Defines the public endpoint for the Lake Formation service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lakeformation/>
### Available Operations

* [addLFTagsToResource](#addlftagstoresource) - Attaches one or more LF-tags to an existing resource.
* [assumeDecoratedRoleWithSAML](#assumedecoratedrolewithsaml) - <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
* [batchGrantPermissions](#batchgrantpermissions) - Batch operation to grant permissions to the principal.
* [batchRevokePermissions](#batchrevokepermissions) - Batch operation to revoke permissions from the principal.
* [cancelTransaction](#canceltransaction) - Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
* [commitTransaction](#committransaction) - Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
* [createDataCellsFilter](#createdatacellsfilter) - Creates a data cell filter to allow one to grant access to certain columns on certain rows.
* [createLFTag](#createlftag) - Creates an LF-tag with the specified name and values.
* [deleteDataCellsFilter](#deletedatacellsfilter) - Deletes a data cell filter.
* [deleteLFTag](#deletelftag) - Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
* [deleteObjectsOnCancel](#deleteobjectsoncancel) - <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
* [deregisterResource](#deregisterresource) - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* [describeResource](#describeresource) - Retrieves the current data access role for the given resource registered in Lake Formation.
* [describeTransaction](#describetransaction) - Returns the details of a single transaction.
* [extendTransaction](#extendtransaction) - <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
* [getDataCellsFilter](#getdatacellsfilter) - Returns a data cells filter.
* [getDataLakeSettings](#getdatalakesettings) - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* [getEffectivePermissionsForPath](#geteffectivepermissionsforpath) - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* [getLFTag](#getlftag) - Returns an LF-tag definition.
* [getQueryState](#getquerystate) - Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
* [getQueryStatistics](#getquerystatistics) - Retrieves statistics on the planning and execution of a query.
* [getResourceLFTags](#getresourcelftags) - Returns the LF-tags applied to a resource.
* [getTableObjects](#gettableobjects) - Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
* [getTemporaryGluePartitionCredentials](#gettemporarygluepartitioncredentials) - This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
* [getTemporaryGlueTableCredentials](#gettemporarygluetablecredentials) - Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
* [getWorkUnitResults](#getworkunitresults) - Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 
* [getWorkUnits](#getworkunits) - Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
* [grantPermissions](#grantpermissions) - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [listDataCellsFilter](#listdatacellsfilter) - Lists all the data cell filters on a table.
* [listLFTags](#listlftags) - Lists LF-tags that the requester has permission to view. 
* [listPermissions](#listpermissions) - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [listResources](#listresources) - Lists the resources registered to be managed by the Data Catalog.
* [listTableStorageOptimizers](#listtablestorageoptimizers) - Returns the configuration of all storage optimizers associated with a specified table.
* [listTransactions](#listtransactions) - <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
* [putDataLakeSettings](#putdatalakesettings) - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* [registerResource](#registerresource) - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* [removeLFTagsFromResource](#removelftagsfromresource) - Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* [revokePermissions](#revokepermissions) - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* [searchDatabasesByLFTags](#searchdatabasesbylftags) - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* [searchTablesByLFTags](#searchtablesbylftags) - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* [startQueryPlanning](#startqueryplanning) - <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
* [startTransaction](#starttransaction) - Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
* [updateDataCellsFilter](#updatedatacellsfilter) - Updates a data cell filter.
* [updateLFTag](#updatelftag) - Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 
* [updateResource](#updateresource) - Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 
* [updateTableObjects](#updatetableobjects) - Updates the manifest of Amazon S3 objects that make up the specified governed table.
* [updateTableStorageOptimizer](#updatetablestorageoptimizer) - Updates the configuration of the storage optimizers for a table.

## addLFTagsToResource

Attaches one or more LF-tags to an existing resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBody;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBodyResource;
import org.openapis.openapi.models.operations.AddLFTagsToResourceResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPair;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLFTagsToResourceRequest req = new AddLFTagsToResourceRequest(                new AddLFTagsToResourceRequestBody(                new org.openapis.openapi.models.shared.LFTagPair[]{{
                                                add(new LFTagPair("velit",                 new String[]{{
                                                                    add("quia"),
                                                                    add("quis"),
                                                                    add("vitae"),
                                                                }}) {{
                                                    catalogId = "occaecati";
                                                    tagKey = "numquam";
                                                    tagValues = new String[]{{
                                                        add("quam"),
                                                        add("molestiae"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("sequi",                 new String[]{{
                                                                    add("ipsam"),
                                                                    add("id"),
                                                                    add("possimus"),
                                                                    add("aut"),
                                                                }}) {{
                                                    catalogId = "laborum";
                                                    tagKey = "animi";
                                                    tagValues = new String[]{{
                                                        add("odit"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("vero",                 new String[]{{
                                                                    add("praesentium"),
                                                                    add("voluptatibus"),
                                                                }}) {{
                                                    catalogId = "quasi";
                                                    tagKey = "error";
                                                    tagValues = new String[]{{
                                                        add("laborum"),
                                                        add("quasi"),
                                                        add("reiciendis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                            }},                 new AddLFTagsToResourceRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("omnis", "voluptate");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "cum";
                                                    name = "Sharon Kiehn";
                                                    tableCatalogId = "dicta";
                                                    tableName = "corporis";
                                                }};;
                                                dataLocation = new DataLocationResource("dolore") {{
                                                    catalogId = "iusto";
                                                }};;
                                                database = new DatabaseResource("dicta") {{
                                                    catalogId = "harum";
                                                }};;
                                                lfTag = new LFTagKeyResource("enim",                 new String[]{{
                                                                    add("commodi"),
                                                                    add("repudiandae"),
                                                                    add("quae"),
                                                                    add("ipsum"),
                                                                }}) {{
                                                    catalogId = "quidem";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("quasi",                 new String[]{{
                                                                                        add("sint"),
                                                                                        add("veritatis"),
                                                                                        add("itaque"),
                                                                                        add("incidunt"),
                                                                                    }}) {{
                                                                        tagKey = "excepturi";
                                                                        tagValues = new String[]{{
                                                                            add("modi"),
                                                                            add("praesentium"),
                                                                            add("rem"),
                                                                            add("voluptates"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("quibusdam",                 new String[]{{
                                                                                        add("deserunt"),
                                                                                    }}) {{
                                                                        tagKey = "enim";
                                                                        tagValues = new String[]{{
                                                                            add("est"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("cupiditate",                 new String[]{{
                                                                                        add("perferendis"),
                                                                                        add("magni"),
                                                                                        add("assumenda"),
                                                                                    }}) {{
                                                                        tagKey = "distinctio";
                                                                        tagValues = new String[]{{
                                                                            add("labore"),
                                                                            add("modi"),
                                                                            add("qui"),
                                                                            add("aliquid"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.DATABASE) {{
                                                    catalogId = "alias";
                                                }};;
                                                table = new TableResource("fugit") {{
                                                    catalogId = "dolorum";
                                                    name = "Eddie Prosacco";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("eum", "non");
                                                        put("eligendi", "sint");
                                                        put("aliquid", "provident");
                                                        put("necessitatibus", "sint");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("officia", "dolor") {{
                                                    catalogId = "debitis";
                                                    columnNames = new String[]{{
                                                        add("dolorum"),
                                                        add("in"),
                                                        add("in"),
                                                        add("illum"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("rerum"),
                                                            add("dicta"),
                                                            add("magnam"),
                                                            add("cumque"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "facere";
                            }};) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            AddLFTagsToResourceResponse res = sdk.sdk.addLFTagsToResource(req);

            if (res.addLFTagsToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assumeDecoratedRoleWithSAML

<p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssumeDecoratedRoleWithSAMLRequest;
import org.openapis.openapi.models.operations.AssumeDecoratedRoleWithSAMLRequestBody;
import org.openapis.openapi.models.operations.AssumeDecoratedRoleWithSAMLResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssumeDecoratedRoleWithSAMLRequest req = new AssumeDecoratedRoleWithSAMLRequest(                new AssumeDecoratedRoleWithSAMLRequestBody("delectus", "quidem", "provident") {{
                                durationSeconds = 725255L;
                            }};) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            AssumeDecoratedRoleWithSAMLResponse res = sdk.sdk.assumeDecoratedRoleWithSAML(req);

            if (res.assumeDecoratedRoleWithSAMLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGrantPermissions

Batch operation to grant permissions to the principal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGrantPermissionsRequest;
import org.openapis.openapi.models.operations.BatchGrantPermissionsRequestBody;
import org.openapis.openapi.models.operations.BatchGrantPermissionsResponse;
import org.openapis.openapi.models.shared.BatchPermissionsRequestEntry;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLakePrincipal;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGrantPermissionsRequest req = new BatchGrantPermissionsRequest(                new BatchGrantPermissionsRequestBody(                new org.openapis.openapi.models.shared.BatchPermissionsRequestEntry[]{{
                                                add(new BatchPermissionsRequestEntry("dolorem") {{
                                                    id = "97074ba4-469b-46e2-9419-59890afa563e";
                                                    permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.DELETE),
                                                    }};
                                                    permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.INSERT),
                                                    }};
                                                    principal = new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "doloribus";
                                                    }};
                                                    resource = new Resource() {{
                                                        catalog = new java.util.HashMap<String, Object>() {{
                                                            put("eius", "maxime");
                                                            put("deleniti", "facilis");
                                                            put("in", "architecto");
                                                            put("architecto", "repudiandae");
                                                        }};
                                                        dataCellsFilter = new DataCellsFilterResource() {{
                                                            databaseName = "ullam";
                                                            name = "Jessie Zulauf";
                                                            tableCatalogId = "saepe";
                                                            tableName = "pariatur";
                                                        }};
                                                        dataLocation = new DataLocationResource("praesentium") {{
                                                            catalogId = "accusantium";
                                                            resourceArn = "consequuntur";
                                                        }};
                                                        database = new DatabaseResource("maxime") {{
                                                            catalogId = "natus";
                                                            name = "Joan Satterfield";
                                                        }};
                                                        lfTag = new LFTagKeyResource("accusantium",                 new String[]{{
                                                                            add("maiores"),
                                                                        }}) {{
                                                            catalogId = "ea";
                                                            tagKey = "excepturi";
                                                            tagValues = new String[]{{
                                                                add("ea"),
                                                            }};
                                                        }};
                                                        lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                            add(new LFTag("nesciunt",                 new String[]{{
                                                                                                add("perferendis"),
                                                                                            }}) {{
                                                                                tagKey = "quis";
                                                                                tagValues = new String[]{{
                                                                                    add("dignissimos"),
                                                                                    add("eaque"),
                                                                                    add("quis"),
                                                                                }};
                                                                            }}),
                                                                        }}, ResourceTypeEnum.DATABASE) {{
                                                            catalogId = "quidem";
                                                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                                                add(new LFTag("pariatur",                 new String[]{{
                                                                                    add("voluptatibus"),
                                                                                    add("perferendis"),
                                                                                }}) {{
                                                                    tagKey = "voluptate";
                                                                    tagValues = new String[]{{
                                                                        add("nam"),
                                                                        add("eaque"),
                                                                    }};
                                                                }}),
                                                                add(new LFTag("cumque",                 new String[]{{
                                                                                    add("hic"),
                                                                                    add("libero"),
                                                                                }}) {{
                                                                    tagKey = "fugiat";
                                                                    tagValues = new String[]{{
                                                                        add("aut"),
                                                                    }};
                                                                }}),
                                                            }};
                                                            resourceType = ResourceTypeEnum.TABLE;
                                                        }};
                                                        table = new TableResource("error") {{
                                                            catalogId = "minus";
                                                            databaseName = "quam";
                                                            name = "Eula Hegmann";
                                                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                                                put("facilis", "perspiciatis");
                                                                put("voluptatem", "porro");
                                                                put("consequuntur", "blanditiis");
                                                            }};
                                                        }};
                                                        tableWithColumns = new TableWithColumnsResource("quos", "aliquid") {{
                                                            catalogId = "eaque";
                                                            columnNames = new String[]{{
                                                                add("rerum"),
                                                                add("adipisci"),
                                                                add("asperiores"),
                                                            }};
                                                            columnWildcard = new ColumnWildcard() {{
                                                                excludedColumnNames = new String[]{{
                                                                    add("modi"),
                                                                    add("iste"),
                                                                    add("dolorum"),
                                                                    add("deleniti"),
                                                                }};
                                                            }};
                                                            databaseName = "pariatur";
                                                            name = "Loren Renner";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchPermissionsRequestEntry("et") {{
                                                    id = "3323f9b7-7f3a-4410-8674-ebf69280d1ba";
                                                    permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.INSERT),
                                                        add(PermissionEnum.CREATE_TABLE),
                                                    }};
                                                    permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.CREATE_DATABASE),
                                                        add(PermissionEnum.CREATE_TAG),
                                                        add(PermissionEnum.CREATE_TABLE),
                                                    }};
                                                    principal = new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "asperiores";
                                                    }};
                                                    resource = new Resource() {{
                                                        catalog = new java.util.HashMap<String, Object>() {{
                                                            put("ipsum", "voluptate");
                                                            put("id", "saepe");
                                                        }};
                                                        dataCellsFilter = new DataCellsFilterResource() {{
                                                            databaseName = "eius";
                                                            name = "Lisa Fay";
                                                            tableCatalogId = "ad";
                                                            tableName = "saepe";
                                                        }};
                                                        dataLocation = new DataLocationResource("provident") {{
                                                            catalogId = "suscipit";
                                                            resourceArn = "deserunt";
                                                        }};
                                                        database = new DatabaseResource("tempora") {{
                                                            catalogId = "minima";
                                                            name = "Dr. Jimmie Murphy";
                                                        }};
                                                        lfTag = new LFTagKeyResource("harum",                 new String[]{{
                                                                            add("ipsum"),
                                                                            add("quisquam"),
                                                                        }}) {{
                                                            catalogId = "vel";
                                                            tagKey = "quod";
                                                            tagValues = new String[]{{
                                                                add("qui"),
                                                                add("dolorum"),
                                                                add("a"),
                                                                add("esse"),
                                                            }};
                                                        }};
                                                        lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                            add(new LFTag("ipsum",                 new String[]{{
                                                                                                add("qui"),
                                                                                                add("cupiditate"),
                                                                                            }}) {{
                                                                                tagKey = "vel";
                                                                                tagValues = new String[]{{
                                                                                    add("voluptas"),
                                                                                    add("deserunt"),
                                                                                    add("quam"),
                                                                                }};
                                                                            }}),
                                                                        }}, ResourceTypeEnum.TABLE) {{
                                                            catalogId = "tenetur";
                                                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                                                add(new LFTag("totam",                 new String[]{{
                                                                                    add("sit"),
                                                                                    add("expedita"),
                                                                                }}) {{
                                                                    tagKey = "tempore";
                                                                    tagValues = new String[]{{
                                                                        add("numquam"),
                                                                        add("enim"),
                                                                        add("dolorem"),
                                                                        add("sapiente"),
                                                                    }};
                                                                }}),
                                                            }};
                                                            resourceType = ResourceTypeEnum.DATABASE;
                                                        }};
                                                        table = new TableResource("aliquid") {{
                                                            catalogId = "pariatur";
                                                            databaseName = "soluta";
                                                            name = "Kayla Larson";
                                                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                                                put("distinctio", "facilis");
                                                            }};
                                                        }};
                                                        tableWithColumns = new TableWithColumnsResource("soluta", "nobis") {{
                                                            catalogId = "quam";
                                                            columnNames = new String[]{{
                                                                add("temporibus"),
                                                                add("qui"),
                                                                add("neque"),
                                                            }};
                                                            columnWildcard = new ColumnWildcard() {{
                                                                excludedColumnNames = new String[]{{
                                                                    add("magni"),
                                                                }};
                                                            }};
                                                            databaseName = "odio";
                                                            name = "Marion Reichert DDS";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchPermissionsRequestEntry("quo") {{
                                                    id = "e31b8b90-f344-43a1-908e-0adcf4b92187";
                                                    permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.ASSOCIATE),
                                                        add(PermissionEnum.DATA_LOCATION_ACCESS),
                                                        add(PermissionEnum.CREATE_TAG),
                                                    }};
                                                    permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.DELETE),
                                                        add(PermissionEnum.ALTER),
                                                        add(PermissionEnum.ASSOCIATE),
                                                    }};
                                                    principal = new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "voluptate";
                                                    }};
                                                    resource = new Resource() {{
                                                        catalog = new java.util.HashMap<String, Object>() {{
                                                            put("vero", "tenetur");
                                                        }};
                                                        dataCellsFilter = new DataCellsFilterResource() {{
                                                            databaseName = "dignissimos";
                                                            name = "Kelvin Schmidt";
                                                            tableCatalogId = "facilis";
                                                            tableName = "vero";
                                                        }};
                                                        dataLocation = new DataLocationResource("quibusdam") {{
                                                            catalogId = "ducimus";
                                                            resourceArn = "dolore";
                                                        }};
                                                        database = new DatabaseResource("nulla") {{
                                                            catalogId = "illum";
                                                            name = "Dr. Faye Rutherford";
                                                        }};
                                                        lfTag = new LFTagKeyResource("alias",                 new String[]{{
                                                                            add("tempora"),
                                                                            add("ipsam"),
                                                                            add("ea"),
                                                                        }}) {{
                                                            catalogId = "fugit";
                                                            tagKey = "porro";
                                                            tagValues = new String[]{{
                                                                add("doloribus"),
                                                                add("iusto"),
                                                                add("eligendi"),
                                                                add("ducimus"),
                                                            }};
                                                        }};
                                                        lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                            add(new LFTag("magnam",                 new String[]{{
                                                                                                add("quo"),
                                                                                                add("consectetur"),
                                                                                            }}) {{
                                                                                tagKey = "ea";
                                                                                tagValues = new String[]{{
                                                                                    add("corporis"),
                                                                                    add("veniam"),
                                                                                    add("aliquid"),
                                                                                    add("inventore"),
                                                                                }};
                                                                            }}),
                                                                            add(new LFTag("eaque",                 new String[]{{
                                                                                                add("libero"),
                                                                                                add("aut"),
                                                                                                add("aut"),
                                                                                                add("deleniti"),
                                                                                            }}) {{
                                                                                tagKey = "recusandae";
                                                                                tagValues = new String[]{{
                                                                                    add("minima"),
                                                                                }};
                                                                            }}),
                                                                            add(new LFTag("inventore",                 new String[]{{
                                                                                                add("et"),
                                                                                                add("dolorum"),
                                                                                            }}) {{
                                                                                tagKey = "impedit";
                                                                                tagValues = new String[]{{
                                                                                    add("fugit"),
                                                                                    add("accusamus"),
                                                                                }};
                                                                            }}),
                                                                            add(new LFTag("quas",                 new String[]{{
                                                                                                add("nulla"),
                                                                                                add("voluptas"),
                                                                                                add("libero"),
                                                                                                add("quasi"),
                                                                                            }}) {{
                                                                                tagKey = "laborum";
                                                                                tagValues = new String[]{{
                                                                                    add("velit"),
                                                                                    add("eum"),
                                                                                    add("autem"),
                                                                                    add("nobis"),
                                                                                }};
                                                                            }}),
                                                                        }}, ResourceTypeEnum.DATABASE) {{
                                                            catalogId = "aspernatur";
                                                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                                                add(new LFTag("laudantium",                 new String[]{{
                                                                                    add("dolor"),
                                                                                }}) {{
                                                                    tagKey = "possimus";
                                                                    tagValues = new String[]{{
                                                                        add("ratione"),
                                                                        add("ex"),
                                                                    }};
                                                                }}),
                                                                add(new LFTag("nulla",                 new String[]{{
                                                                                    add("voluptatibus"),
                                                                                    add("nostrum"),
                                                                                    add("sapiente"),
                                                                                }}) {{
                                                                    tagKey = "maiores";
                                                                    tagValues = new String[]{{
                                                                        add("ex"),
                                                                    }};
                                                                }}),
                                                            }};
                                                            resourceType = ResourceTypeEnum.TABLE;
                                                        }};
                                                        table = new TableResource("reprehenderit") {{
                                                            catalogId = "numquam";
                                                            databaseName = "explicabo";
                                                            name = "Jose Kreiger";
                                                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                                                put("esse", "esse");
                                                                put("rem", "fuga");
                                                            }};
                                                        }};
                                                        tableWithColumns = new TableWithColumnsResource("quo", "illum") {{
                                                            catalogId = "quidem";
                                                            columnNames = new String[]{{
                                                                add("ut"),
                                                                add("eum"),
                                                                add("suscipit"),
                                                                add("assumenda"),
                                                            }};
                                                            columnWildcard = new ColumnWildcard() {{
                                                                excludedColumnNames = new String[]{{
                                                                    add("praesentium"),
                                                                }};
                                                            }};
                                                            databaseName = "quisquam";
                                                            name = "Angela Olson";
                                                        }};
                                                    }};
                                                }}),
                                            }}) {{
                                catalogId = "fuga";
                            }};) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            BatchGrantPermissionsResponse res = sdk.sdk.batchGrantPermissions(req);

            if (res.batchGrantPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchRevokePermissions

Batch operation to revoke permissions from the principal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchRevokePermissionsRequest;
import org.openapis.openapi.models.operations.BatchRevokePermissionsRequestBody;
import org.openapis.openapi.models.operations.BatchRevokePermissionsResponse;
import org.openapis.openapi.models.shared.BatchPermissionsRequestEntry;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLakePrincipal;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchRevokePermissionsRequest req = new BatchRevokePermissionsRequest(                new BatchRevokePermissionsRequestBody(                new org.openapis.openapi.models.shared.BatchPermissionsRequestEntry[]{{
                                                add(new BatchPermissionsRequestEntry("accusantium") {{
                                                    id = "23c7e0bc-7178-4e47-96f2-a70c688282aa";
                                                    permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.DESCRIBE),
                                                        add(PermissionEnum.SELECT),
                                                    }};
                                                    permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.DELETE),
                                                        add(PermissionEnum.SELECT),
                                                    }};
                                                    principal = new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "sapiente";
                                                    }};
                                                    resource = new Resource() {{
                                                        catalog = new java.util.HashMap<String, Object>() {{
                                                            put("ratione", "explicabo");
                                                        }};
                                                        dataCellsFilter = new DataCellsFilterResource() {{
                                                            databaseName = "saepe";
                                                            name = "Ivan Bosco";
                                                            tableCatalogId = "accusamus";
                                                            tableName = "veritatis";
                                                        }};
                                                        dataLocation = new DataLocationResource("nam") {{
                                                            catalogId = "esse";
                                                            resourceArn = "quod";
                                                        }};
                                                        database = new DatabaseResource("molestiae") {{
                                                            catalogId = "vero";
                                                            name = "Frances Turner";
                                                        }};
                                                        lfTag = new LFTagKeyResource("sit",                 new String[]{{
                                                                            add("tempore"),
                                                                            add("adipisci"),
                                                                            add("cumque"),
                                                                        }}) {{
                                                            catalogId = "rerum";
                                                            tagKey = "occaecati";
                                                            tagValues = new String[]{{
                                                                add("distinctio"),
                                                                add("eligendi"),
                                                            }};
                                                        }};
                                                        lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                            add(new LFTag("quia",                 new String[]{{
                                                                                                add("asperiores"),
                                                                                                add("facere"),
                                                                                                add("veritatis"),
                                                                                                add("consequuntur"),
                                                                                            }}) {{
                                                                                tagKey = "quasi";
                                                                                tagValues = new String[]{{
                                                                                    add("error"),
                                                                                    add("sint"),
                                                                                    add("pariatur"),
                                                                                    add("possimus"),
                                                                                }};
                                                                            }}),
                                                                            add(new LFTag("quae",                 new String[]{{
                                                                                                add("vel"),
                                                                                                add("in"),
                                                                                                add("eius"),
                                                                                                add("libero"),
                                                                                            }}) {{
                                                                                tagKey = "quasi";
                                                                                tagValues = new String[]{{
                                                                                    add("culpa"),
                                                                                    add("aliquid"),
                                                                                    add("tenetur"),
                                                                                }};
                                                                            }}),
                                                                        }}, ResourceTypeEnum.TABLE) {{
                                                            catalogId = "consequuntur";
                                                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                                                add(new LFTag("esse",                 new String[]{{
                                                                                    add("provident"),
                                                                                    add("a"),
                                                                                    add("nulla"),
                                                                                }}) {{
                                                                    tagKey = "minus";
                                                                    tagValues = new String[]{{
                                                                        add("sapiente"),
                                                                        add("consectetur"),
                                                                    }};
                                                                }}),
                                                            }};
                                                            resourceType = ResourceTypeEnum.TABLE;
                                                        }};
                                                        table = new TableResource("quibusdam") {{
                                                            catalogId = "soluta";
                                                            databaseName = "accusantium";
                                                            name = "Miranda Carter";
                                                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                                                put("nisi", "aut");
                                                                put("voluptatum", "qui");
                                                            }};
                                                        }};
                                                        tableWithColumns = new TableWithColumnsResource("iste", "temporibus") {{
                                                            catalogId = "ex";
                                                            columnNames = new String[]{{
                                                                add("itaque"),
                                                                add("dolorum"),
                                                                add("architecto"),
                                                            }};
                                                            columnWildcard = new ColumnWildcard() {{
                                                                excludedColumnNames = new String[]{{
                                                                    add("tenetur"),
                                                                    add("quasi"),
                                                                    add("at"),
                                                                }};
                                                            }};
                                                            databaseName = "et";
                                                            name = "Mrs. Cynthia Hansen";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchPermissionsRequestEntry("asperiores") {{
                                                    id = "8086a184-0394-4c26-871f-93f5f0642dac";
                                                    permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.CREATE_DATABASE),
                                                        add(PermissionEnum.ASSOCIATE),
                                                    }};
                                                    permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                        add(PermissionEnum.ALL),
                                                        add(PermissionEnum.DROP),
                                                    }};
                                                    principal = new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "porro";
                                                    }};
                                                    resource = new Resource() {{
                                                        catalog = new java.util.HashMap<String, Object>() {{
                                                            put("labore", "ab");
                                                            put("adipisci", "fuga");
                                                            put("id", "suscipit");
                                                            put("velit", "culpa");
                                                        }};
                                                        dataCellsFilter = new DataCellsFilterResource() {{
                                                            databaseName = "est";
                                                            name = "Felix Stehr";
                                                            tableCatalogId = "quos";
                                                            tableName = "vel";
                                                        }};
                                                        dataLocation = new DataLocationResource("facilis") {{
                                                            catalogId = "labore";
                                                            resourceArn = "possimus";
                                                        }};
                                                        database = new DatabaseResource("nemo") {{
                                                            catalogId = "cum";
                                                            name = "Pearl Hessel";
                                                        }};
                                                        lfTag = new LFTagKeyResource("consectetur",                 new String[]{{
                                                                            add("exercitationem"),
                                                                            add("earum"),
                                                                        }}) {{
                                                            catalogId = "recusandae";
                                                            tagKey = "aliquid";
                                                            tagValues = new String[]{{
                                                                add("cum"),
                                                            }};
                                                        }};
                                                        lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                            add(new LFTag("tempora",                 new String[]{{
                                                                                                add("voluptas"),
                                                                                            }}) {{
                                                                                tagKey = "voluptates";
                                                                                tagValues = new String[]{{
                                                                                    add("vitae"),
                                                                                    add("accusamus"),
                                                                                    add("similique"),
                                                                                }};
                                                                            }}),
                                                                        }}, ResourceTypeEnum.DATABASE) {{
                                                            catalogId = "facere";
                                                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                                                add(new LFTag("saepe",                 new String[]{{
                                                                                    add("dolore"),
                                                                                    add("sunt"),
                                                                                    add("asperiores"),
                                                                                    add("adipisci"),
                                                                                }}) {{
                                                                    tagKey = "doloribus";
                                                                    tagValues = new String[]{{
                                                                        add("reiciendis"),
                                                                        add("quidem"),
                                                                    }};
                                                                }}),
                                                                add(new LFTag("dignissimos",                 new String[]{{
                                                                                    add("debitis"),
                                                                                    add("consectetur"),
                                                                                    add("corporis"),
                                                                                    add("harum"),
                                                                                }}) {{
                                                                    tagKey = "non";
                                                                    tagValues = new String[]{{
                                                                        add("beatae"),
                                                                    }};
                                                                }}),
                                                            }};
                                                            resourceType = ResourceTypeEnum.DATABASE;
                                                        }};
                                                        table = new TableResource("adipisci") {{
                                                            catalogId = "voluptas";
                                                            databaseName = "minima";
                                                            name = "Wilbur Ferry";
                                                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                                                put("in", "dolore");
                                                                put("aliquam", "officiis");
                                                                put("temporibus", "ullam");
                                                            }};
                                                        }};
                                                        tableWithColumns = new TableWithColumnsResource("reiciendis", "explicabo") {{
                                                            catalogId = "cum";
                                                            columnNames = new String[]{{
                                                                add("quas"),
                                                                add("hic"),
                                                                add("nesciunt"),
                                                            }};
                                                            columnWildcard = new ColumnWildcard() {{
                                                                excludedColumnNames = new String[]{{
                                                                    add("corrupti"),
                                                                    add("pariatur"),
                                                                    add("totam"),
                                                                }};
                                                            }};
                                                            databaseName = "hic";
                                                            name = "Della Bailey";
                                                        }};
                                                    }};
                                                }}),
                                            }}) {{
                                catalogId = "facilis";
                            }};) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "ab";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sed";
            }};            

            BatchRevokePermissionsResponse res = sdk.sdk.batchRevokePermissions(req);

            if (res.batchRevokePermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelTransaction

Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTransactionRequest;
import org.openapis.openapi.models.operations.CancelTransactionRequestBody;
import org.openapis.openapi.models.operations.CancelTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelTransactionRequest req = new CancelTransactionRequest(                new CancelTransactionRequestBody("commodi");) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
            }};            

            CancelTransactionResponse res = sdk.sdk.cancelTransaction(req);

            if (res.cancelTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commitTransaction

Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommitTransactionRequest;
import org.openapis.openapi.models.operations.CommitTransactionRequestBody;
import org.openapis.openapi.models.operations.CommitTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CommitTransactionRequest req = new CommitTransactionRequest(                new CommitTransactionRequestBody("illo");) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            CommitTransactionResponse res = sdk.sdk.commitTransaction(req);

            if (res.commitTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataCellsFilter

Creates a data cell filter to allow one to grant access to certain columns on certain rows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataCellsFilterRequest;
import org.openapis.openapi.models.operations.CreateDataCellsFilterRequestBody;
import org.openapis.openapi.models.operations.CreateDataCellsFilterRequestBodyTableData;
import org.openapis.openapi.models.operations.CreateDataCellsFilterResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.RowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataCellsFilterRequest req = new CreateDataCellsFilterRequest(                new CreateDataCellsFilterRequestBody(                new CreateDataCellsFilterRequestBodyTableData() {{
                                                columnNames = new String[]{{
                                                    add("ipsum"),
                                                    add("ea"),
                                                    add("occaecati"),
                                                    add("quos"),
                                                }};
                                                columnWildcard = new ColumnWildcard() {{
                                                    excludedColumnNames = new String[]{{
                                                        add("tempora"),
                                                        add("tempora"),
                                                        add("voluptate"),
                                                        add("reiciendis"),
                                                    }};
                                                }};;
                                                databaseName = "ex";
                                                name = "Ethel Towne";
                                                rowFilter = new RowFilter() {{
                                                    allRowsWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("incidunt", "ipsam");
                                                        put("debitis", "rem");
                                                    }};
                                                    filterExpression = "sit";
                                                }};;
                                                tableCatalogId = "nobis";
                                                tableName = "error";
                                                versionId = "veniam";
                                            }};);) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateDataCellsFilterResponse res = sdk.sdk.createDataCellsFilter(req);

            if (res.createDataCellsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLFTag

Creates an LF-tag with the specified name and values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLFTagRequest;
import org.openapis.openapi.models.operations.CreateLFTagRequestBody;
import org.openapis.openapi.models.operations.CreateLFTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLFTagRequest req = new CreateLFTagRequest(                new CreateLFTagRequestBody("veniam",                 new String[]{{
                                                add("officiis"),
                                                add("beatae"),
                                            }}) {{
                                catalogId = "laudantium";
                            }};) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "cum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "error";
            }};            

            CreateLFTagResponse res = sdk.sdk.createLFTag(req);

            if (res.createLFTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataCellsFilter

Deletes a data cell filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataCellsFilterRequest;
import org.openapis.openapi.models.operations.DeleteDataCellsFilterRequestBody;
import org.openapis.openapi.models.operations.DeleteDataCellsFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataCellsFilterRequest req = new DeleteDataCellsFilterRequest(                new DeleteDataCellsFilterRequestBody() {{
                                databaseName = "expedita";
                                name = "Tony Pagac";
                                tableCatalogId = "dolorum";
                                tableName = "corrupti";
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "atque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DeleteDataCellsFilterResponse res = sdk.sdk.deleteDataCellsFilter(req);

            if (res.deleteDataCellsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLFTag

Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLFTagRequest;
import org.openapis.openapi.models.operations.DeleteLFTagRequestBody;
import org.openapis.openapi.models.operations.DeleteLFTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLFTagRequest req = new DeleteLFTagRequest(                new DeleteLFTagRequestBody("expedita") {{
                                catalogId = "magnam";
                            }};) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DeleteLFTagResponse res = sdk.sdk.deleteLFTag(req);

            if (res.deleteLFTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteObjectsOnCancel

<p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteObjectsOnCancelRequest;
import org.openapis.openapi.models.operations.DeleteObjectsOnCancelRequestBody;
import org.openapis.openapi.models.operations.DeleteObjectsOnCancelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObjectsOnCancelRequest req = new DeleteObjectsOnCancelRequest(                new DeleteObjectsOnCancelRequestBody("et",                 new org.openapis.openapi.models.shared.VirtualObject[]{{
                                                add(new VirtualObject("saepe") {{
                                                    eTag = "ex";
                                                    uri = "http://alarming-hermit.info";
                                                }}),
                                                add(new VirtualObject("harum") {{
                                                    eTag = "error";
                                                    uri = "http://feminine-warm-up.biz";
                                                }}),
                                                add(new VirtualObject("atque") {{
                                                    eTag = "dicta";
                                                    uri = "http://noxious-duster.net";
                                                }}),
                                            }}, "laborum", "nam") {{
                                catalogId = "tenetur";
                            }};) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteObjectsOnCancelResponse res = sdk.sdk.deleteObjectsOnCancel(req);

            if (res.deleteObjectsOnCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterResource

<p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterResourceRequest;
import org.openapis.openapi.models.operations.DeregisterResourceRequestBody;
import org.openapis.openapi.models.operations.DeregisterResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterResourceRequest req = new DeregisterResourceRequest(                new DeregisterResourceRequestBody("repellendus");) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "perferendis";
                xAmzDate = "est";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "facere";
            }};            

            DeregisterResourceResponse res = sdk.sdk.deregisterResource(req);

            if (res.deregisterResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResource

Retrieves the current data access role for the given resource registered in Lake Formation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourceRequest;
import org.openapis.openapi.models.operations.DescribeResourceRequestBody;
import org.openapis.openapi.models.operations.DescribeResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourceRequest req = new DescribeResourceRequest(                new DescribeResourceRequestBody("praesentium");) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "voluptatem";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "atque";
            }};            

            DescribeResourceResponse res = sdk.sdk.describeResource(req);

            if (res.describeResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTransaction

Returns the details of a single transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTransactionRequest;
import org.openapis.openapi.models.operations.DescribeTransactionRequestBody;
import org.openapis.openapi.models.operations.DescribeTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTransactionRequest req = new DescribeTransactionRequest(                new DescribeTransactionRequestBody("asperiores");) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "quidem";
                xAmzDate = "maxime";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "amet";
            }};            

            DescribeTransactionResponse res = sdk.sdk.describeTransaction(req);

            if (res.describeTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## extendTransaction

<p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtendTransactionRequest;
import org.openapis.openapi.models.operations.ExtendTransactionRequestBody;
import org.openapis.openapi.models.operations.ExtendTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExtendTransactionRequest req = new ExtendTransactionRequest(                new ExtendTransactionRequestBody() {{
                                transactionId = "ea";
                            }};) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "error";
                xAmzCredential = "officiis";
                xAmzDate = "officiis";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minima";
            }};            

            ExtendTransactionResponse res = sdk.sdk.extendTransaction(req);

            if (res.extendTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataCellsFilter

Returns a data cells filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataCellsFilterRequest;
import org.openapis.openapi.models.operations.GetDataCellsFilterRequestBody;
import org.openapis.openapi.models.operations.GetDataCellsFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataCellsFilterRequest req = new GetDataCellsFilterRequest(                new GetDataCellsFilterRequestBody("ex", "maiores", "corrupti", "at");) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "suscipit";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "atque";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sunt";
            }};            

            GetDataCellsFilterResponse res = sdk.sdk.getDataCellsFilter(req);

            if (res.getDataCellsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataLakeSettings

Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataLakeSettingsRequest;
import org.openapis.openapi.models.operations.GetDataLakeSettingsRequestBody;
import org.openapis.openapi.models.operations.GetDataLakeSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataLakeSettingsRequest req = new GetDataLakeSettingsRequest(                new GetDataLakeSettingsRequestBody() {{
                                catalogId = "dolorum";
                            }};) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "labore";
                xAmzCredential = "reiciendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetDataLakeSettingsResponse res = sdk.sdk.getDataLakeSettings(req);

            if (res.getDataLakeSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEffectivePermissionsForPath

Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEffectivePermissionsForPathRequest;
import org.openapis.openapi.models.operations.GetEffectivePermissionsForPathRequestBody;
import org.openapis.openapi.models.operations.GetEffectivePermissionsForPathResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEffectivePermissionsForPathRequest req = new GetEffectivePermissionsForPathRequest(                new GetEffectivePermissionsForPathRequestBody("dolores") {{
                                catalogId = "enim";
                                maxResults = 389135L;
                                nextToken = "velit";
                            }};) {{
                maxResults = "a";
                nextToken = "molestias";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "consequuntur";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "in";
            }};            

            GetEffectivePermissionsForPathResponse res = sdk.sdk.getEffectivePermissionsForPath(req);

            if (res.getEffectivePermissionsForPathResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLFTag

Returns an LF-tag definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLFTagRequest;
import org.openapis.openapi.models.operations.GetLFTagRequestBody;
import org.openapis.openapi.models.operations.GetLFTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLFTagRequest req = new GetLFTagRequest(                new GetLFTagRequestBody("eveniet") {{
                                catalogId = "occaecati";
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "id";
                xAmzDate = "quis";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "illo";
            }};            

            GetLFTagResponse res = sdk.sdk.getLFTag(req);

            if (res.getLFTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryState

Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryStateRequest;
import org.openapis.openapi.models.operations.GetQueryStateRequestBody;
import org.openapis.openapi.models.operations.GetQueryStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryStateRequest req = new GetQueryStateRequest(                new GetQueryStateRequestBody("quidem");) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "non";
                xAmzCredential = "vero";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "iure";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "totam";
            }};            

            GetQueryStateResponse res = sdk.sdk.getQueryState(req);

            if (res.getQueryStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryStatistics

Retrieves statistics on the planning and execution of a query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryStatisticsRequest;
import org.openapis.openapi.models.operations.GetQueryStatisticsRequestBody;
import org.openapis.openapi.models.operations.GetQueryStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryStatisticsRequest req = new GetQueryStatisticsRequest(                new GetQueryStatisticsRequestBody("molestiae");) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cum";
                xAmzDate = "iure";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "laborum";
            }};            

            GetQueryStatisticsResponse res = sdk.sdk.getQueryStatistics(req);

            if (res.getQueryStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceLFTags

Returns the LF-tags applied to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceLFTagsRequest;
import org.openapis.openapi.models.operations.GetResourceLFTagsRequestBody;
import org.openapis.openapi.models.operations.GetResourceLFTagsRequestBodyResource;
import org.openapis.openapi.models.operations.GetResourceLFTagsResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceLFTagsRequest req = new GetResourceLFTagsRequest(                new GetResourceLFTagsRequestBody(                new GetResourceLFTagsRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("rem", "aliquam");
                                                    put("ad", "repellat");
                                                    put("alias", "corporis");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "perspiciatis";
                                                    name = "Dr. Iris Hodkiewicz";
                                                    tableCatalogId = "dolores";
                                                    tableName = "id";
                                                }};;
                                                dataLocation = new DataLocationResource("minima") {{
                                                    catalogId = "dolore";
                                                }};;
                                                database = new DatabaseResource("dolorum") {{
                                                    catalogId = "nesciunt";
                                                }};;
                                                lfTag = new LFTagKeyResource("quae",                 new String[]{{
                                                                    add("omnis"),
                                                                    add("quaerat"),
                                                                    add("molestiae"),
                                                                    add("ex"),
                                                                }}) {{
                                                    catalogId = "ut";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("esse",                 new String[]{{
                                                                                        add("quis"),
                                                                                        add("eum"),
                                                                                        add("reiciendis"),
                                                                                    }}) {{
                                                                        tagKey = "adipisci";
                                                                        tagValues = new String[]{{
                                                                            add("laudantium"),
                                                                            add("eum"),
                                                                            add("nemo"),
                                                                            add("recusandae"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("quasi",                 new String[]{{
                                                                                        add("nostrum"),
                                                                                        add("mollitia"),
                                                                                        add("provident"),
                                                                                    }}) {{
                                                                        tagKey = "provident";
                                                                        tagValues = new String[]{{
                                                                            add("ullam"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("repellat",                 new String[]{{
                                                                                        add("ullam"),
                                                                                        add("in"),
                                                                                        add("nam"),
                                                                                        add("earum"),
                                                                                    }}) {{
                                                                        tagKey = "possimus";
                                                                        tagValues = new String[]{{
                                                                            add("ex"),
                                                                            add("aliquid"),
                                                                            add("accusantium"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.TABLE) {{
                                                    catalogId = "laborum";
                                                }};;
                                                table = new TableResource("placeat") {{
                                                    catalogId = "modi";
                                                    name = "Virgil Towne";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("rerum", "tempora");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("quis", "inventore") {{
                                                    catalogId = "fugit";
                                                    columnNames = new String[]{{
                                                        add("quae"),
                                                        add("perferendis"),
                                                        add("velit"),
                                                        add("aspernatur"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("eius"),
                                                            add("rem"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "at";
                                showAssignedLFTags = false;
                            }};) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "eos";
                xAmzCredential = "sapiente";
                xAmzDate = "eum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "beatae";
            }};            

            GetResourceLFTagsResponse res = sdk.sdk.getResourceLFTags(req);

            if (res.getResourceLFTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTableObjects

Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTableObjectsRequest;
import org.openapis.openapi.models.operations.GetTableObjectsRequestBody;
import org.openapis.openapi.models.operations.GetTableObjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTableObjectsRequest req = new GetTableObjectsRequest(                new GetTableObjectsRequestBody("provident", "earum") {{
                                catalogId = "soluta";
                                maxResults = 940782L;
                                nextToken = "illum";
                                partitionPredicate = "eaque";
                                queryAsOfTime = OffsetDateTime.parse("2021-03-19T03:34:18.129Z");
                                transactionId = "maiores";
                            }};) {{
                maxResults = "debitis";
                nextToken = "aliquid";
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "dolorem";
                xAmzDate = "fugit";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "ratione";
            }};            

            GetTableObjectsResponse res = sdk.sdk.getTableObjects(req);

            if (res.getTableObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemporaryGluePartitionCredentials

This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemporaryGluePartitionCredentialsRequest;
import org.openapis.openapi.models.operations.GetTemporaryGluePartitionCredentialsRequestBody;
import org.openapis.openapi.models.operations.GetTemporaryGluePartitionCredentialsRequestBodyAuditContext;
import org.openapis.openapi.models.operations.GetTemporaryGluePartitionCredentialsRequestBodyPartition;
import org.openapis.openapi.models.operations.GetTemporaryGluePartitionCredentialsResponse;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.PermissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemporaryGluePartitionCredentialsRequest req = new GetTemporaryGluePartitionCredentialsRequest(                new GetTemporaryGluePartitionCredentialsRequestBody(                new GetTemporaryGluePartitionCredentialsRequestBodyPartition() {{
                                                values = new String[]{{
                                                    add("nulla"),
                                                    add("consequatur"),
                                                    add("quasi"),
                                                    add("et"),
                                                }};
                                            }};,                 new org.openapis.openapi.models.shared.PermissionTypeEnum[]{{
                                                add(PermissionTypeEnum.CELL_FILTER_PERMISSION),
                                                add(PermissionTypeEnum.CELL_FILTER_PERMISSION),
                                            }}, "suscipit") {{
                                auditContext = new GetTemporaryGluePartitionCredentialsRequestBodyAuditContext() {{
                                    additionalAuditContext = "adipisci";
                                }};;
                                durationSeconds = 96562L;
                                permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                    add(PermissionEnum.ASSOCIATE),
                                }};
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "tempora";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "dicta";
            }};            

            GetTemporaryGluePartitionCredentialsResponse res = sdk.sdk.getTemporaryGluePartitionCredentials(req);

            if (res.getTemporaryGluePartitionCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemporaryGlueTableCredentials

Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemporaryGlueTableCredentialsRequest;
import org.openapis.openapi.models.operations.GetTemporaryGlueTableCredentialsRequestBody;
import org.openapis.openapi.models.operations.GetTemporaryGlueTableCredentialsRequestBodyAuditContext;
import org.openapis.openapi.models.operations.GetTemporaryGlueTableCredentialsResponse;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.PermissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemporaryGlueTableCredentialsRequest req = new GetTemporaryGlueTableCredentialsRequest(                new GetTemporaryGlueTableCredentialsRequestBody(                new org.openapis.openapi.models.shared.PermissionTypeEnum[]{{
                                                add(PermissionTypeEnum.CELL_FILTER_PERMISSION),
                                                add(PermissionTypeEnum.CELL_FILTER_PERMISSION),
                                            }}, "reiciendis") {{
                                auditContext = new GetTemporaryGlueTableCredentialsRequestBodyAuditContext() {{
                                    additionalAuditContext = "vel";
                                }};;
                                durationSeconds = 99958L;
                                permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                    add(PermissionEnum.ALL),
                                    add(PermissionEnum.SELECT),
                                    add(PermissionEnum.INSERT),
                                    add(PermissionEnum.DROP),
                                }};
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ex";
                xAmzCredential = "consectetur";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sunt";
            }};            

            GetTemporaryGlueTableCredentialsResponse res = sdk.sdk.getTemporaryGlueTableCredentials(req);

            if (res.getTemporaryGlueTableCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkUnitResults

Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkUnitResultsRequest;
import org.openapis.openapi.models.operations.GetWorkUnitResultsRequestBody;
import org.openapis.openapi.models.operations.GetWorkUnitResultsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkUnitResultsRequest req = new GetWorkUnitResultsRequest(                new GetWorkUnitResultsRequestBody("fugiat", 713767L, "aliquid");) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "aliquid";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "iste";
            }};            

            GetWorkUnitResultsResponse res = sdk.sdk.getWorkUnitResults(req);

            if (res.getWorkUnitResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkUnits

Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkUnitsRequest;
import org.openapis.openapi.models.operations.GetWorkUnitsRequestBody;
import org.openapis.openapi.models.operations.GetWorkUnitsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkUnitsRequest req = new GetWorkUnitsRequest(                new GetWorkUnitsRequestBody("ab") {{
                                nextToken = "error";
                                pageSize = 822407L;
                            }};) {{
                nextToken = "voluptates";
                pageSize = "mollitia";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "libero";
                xAmzCredential = "ad";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "enim";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "repellendus";
            }};            

            GetWorkUnitsResponse res = sdk.sdk.getWorkUnits(req);

            if (res.getWorkUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## grantPermissions

<p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GrantPermissionsRequest;
import org.openapis.openapi.models.operations.GrantPermissionsRequestBody;
import org.openapis.openapi.models.operations.GrantPermissionsRequestBodyPrincipal;
import org.openapis.openapi.models.operations.GrantPermissionsRequestBodyResource;
import org.openapis.openapi.models.operations.GrantPermissionsResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GrantPermissionsRequest req = new GrantPermissionsRequest(                new GrantPermissionsRequestBody(                new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                add(PermissionEnum.DELETE),
                                                add(PermissionEnum.DROP),
                                                add(PermissionEnum.DROP),
                                                add(PermissionEnum.CREATE_TABLE),
                                            }},                 new GrantPermissionsRequestBodyPrincipal() {{
                                                dataLakePrincipalIdentifier = "voluptatem";
                                            }};,                 new GrantPermissionsRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("cum", "aliquid");
                                                    put("beatae", "voluptatum");
                                                    put("omnis", "veritatis");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "rerum";
                                                    name = "Trevor Bartell";
                                                    tableCatalogId = "architecto";
                                                    tableName = "fuga";
                                                }};;
                                                dataLocation = new DataLocationResource("pariatur") {{
                                                    catalogId = "debitis";
                                                }};;
                                                database = new DatabaseResource("voluptatem") {{
                                                    catalogId = "alias";
                                                }};;
                                                lfTag = new LFTagKeyResource("deleniti",                 new String[]{{
                                                                    add("ex"),
                                                                    add("sapiente"),
                                                                    add("rem"),
                                                                    add("minus"),
                                                                }}) {{
                                                    catalogId = "nemo";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("totam",                 new String[]{{
                                                                                        add("quibusdam"),
                                                                                        add("nam"),
                                                                                        add("ipsam"),
                                                                                        add("culpa"),
                                                                                    }}) {{
                                                                        tagKey = "ratione";
                                                                        tagValues = new String[]{{
                                                                            add("perferendis"),
                                                                            add("illum"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("veritatis",                 new String[]{{
                                                                                        add("dolor"),
                                                                                        add("consequatur"),
                                                                                    }}) {{
                                                                        tagKey = "dolor";
                                                                        tagValues = new String[]{{
                                                                            add("inventore"),
                                                                            add("deleniti"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("fugit",                 new String[]{{
                                                                                        add("laudantium"),
                                                                                    }}) {{
                                                                        tagKey = "architecto";
                                                                        tagValues = new String[]{{
                                                                            add("modi"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("ipsam",                 new String[]{{
                                                                                        add("ipsa"),
                                                                                    }}) {{
                                                                        tagKey = "quae";
                                                                        tagValues = new String[]{{
                                                                            add("fugiat"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.TABLE) {{
                                                    catalogId = "eveniet";
                                                }};;
                                                table = new TableResource("impedit") {{
                                                    catalogId = "officiis";
                                                    name = "Jana Cremin";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("eum", "vel");
                                                        put("voluptatum", "magnam");
                                                        put("exercitationem", "ab");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("porro", "autem") {{
                                                    catalogId = "nobis";
                                                    columnNames = new String[]{{
                                                        add("recusandae"),
                                                        add("consequuntur"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("exercitationem"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "necessitatibus";
                                permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                    add(PermissionEnum.DELETE),
                                }};
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "vero";
                xAmzCredential = "est";
                xAmzDate = "harum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GrantPermissionsResponse res = sdk.sdk.grantPermissions(req);

            if (res.grantPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataCellsFilter

Lists all the data cell filters on a table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataCellsFilterRequest;
import org.openapis.openapi.models.operations.ListDataCellsFilterRequestBody;
import org.openapis.openapi.models.operations.ListDataCellsFilterRequestBodyTable;
import org.openapis.openapi.models.operations.ListDataCellsFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataCellsFilterRequest req = new ListDataCellsFilterRequest(                new ListDataCellsFilterRequestBody() {{
                                maxResults = 579681L;
                                nextToken = "nemo";
                                table = new ListDataCellsFilterRequestBodyTable() {{
                                    catalogId = "voluptate";
                                    databaseName = "blanditiis";
                                    name = "Hector Funk";
                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                        put("aspernatur", "ducimus");
                                        put("nesciunt", "fuga");
                                    }};
                                }};;
                            }};) {{
                maxResults = "laudantium";
                nextToken = "incidunt";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fugiat";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consectetur";
            }};            

            ListDataCellsFilterResponse res = sdk.sdk.listDataCellsFilter(req);

            if (res.listDataCellsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLFTags

Lists LF-tags that the requester has permission to view. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLFTagsRequest;
import org.openapis.openapi.models.operations.ListLFTagsRequestBody;
import org.openapis.openapi.models.operations.ListLFTagsRequestBodyResourceShareTypeEnum;
import org.openapis.openapi.models.operations.ListLFTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLFTagsRequest req = new ListLFTagsRequest(                new ListLFTagsRequestBody() {{
                                catalogId = "cupiditate";
                                maxResults = 970732L;
                                nextToken = "soluta";
                                resourceShareType = ListLFTagsRequestBodyResourceShareTypeEnum.FOREIGN;
                            }};) {{
                maxResults = "omnis";
                nextToken = "eos";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "iste";
                xAmzCredential = "magni";
                xAmzDate = "inventore";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            ListLFTagsResponse res = sdk.sdk.listLFTags(req);

            if (res.listLFTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPermissions

<p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPermissionsRequest;
import org.openapis.openapi.models.operations.ListPermissionsRequestBody;
import org.openapis.openapi.models.operations.ListPermissionsRequestBodyPrincipal;
import org.openapis.openapi.models.operations.ListPermissionsRequestBodyResource;
import org.openapis.openapi.models.operations.ListPermissionsRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.ListPermissionsResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPermissionsRequest req = new ListPermissionsRequest(                new ListPermissionsRequestBody() {{
                                catalogId = "omnis";
                                includeRelated = "delectus";
                                maxResults = 328379L;
                                nextToken = "praesentium";
                                principal = new ListPermissionsRequestBodyPrincipal() {{
                                    dataLakePrincipalIdentifier = "maxime";
                                }};;
                                resource = new ListPermissionsRequestBodyResource() {{
                                    catalog = new java.util.HashMap<String, Object>() {{
                                        put("temporibus", "quos");
                                        put("commodi", "itaque");
                                    }};
                                    dataCellsFilter = new DataCellsFilterResource() {{
                                        databaseName = "commodi";
                                        name = "Darin Gleichner";
                                        tableCatalogId = "voluptatem";
                                        tableName = "ipsam";
                                    }};;
                                    dataLocation = new DataLocationResource("vel") {{
                                        catalogId = "alias";
                                    }};;
                                    database = new DatabaseResource("quasi") {{
                                        catalogId = "non";
                                    }};;
                                    lfTag = new LFTagKeyResource("maiores",                 new String[]{{
                                                        add("sint"),
                                                        add("nulla"),
                                                    }}) {{
                                        catalogId = "deserunt";
                                    }};;
                                    lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                        add(new LFTag("sint",                 new String[]{{
                                                                            add("impedit"),
                                                                            add("hic"),
                                                                            add("necessitatibus"),
                                                                            add("asperiores"),
                                                                        }}) {{
                                                            tagKey = "nemo";
                                                            tagValues = new String[]{{
                                                                add("est"),
                                                                add("quis"),
                                                            }};
                                                        }}),
                                                        add(new LFTag("quae",                 new String[]{{
                                                                            add("fuga"),
                                                                            add("laborum"),
                                                                            add("consectetur"),
                                                                            add("velit"),
                                                                        }}) {{
                                                            tagKey = "ex";
                                                            tagValues = new String[]{{
                                                                add("debitis"),
                                                                add("delectus"),
                                                            }};
                                                        }}),
                                                    }}, ResourceTypeEnum.TABLE) {{
                                        catalogId = "ipsum";
                                    }};;
                                    table = new TableResource("impedit") {{
                                        catalogId = "magni";
                                        name = "Lamar Reichert";
                                        tableWildcard = new java.util.HashMap<String, Object>() {{
                                            put("sequi", "dignissimos");
                                            put("neque", "quo");
                                        }};
                                    }};;
                                    tableWithColumns = new TableWithColumnsResource("deleniti", "quibusdam") {{
                                        catalogId = "iure";
                                        columnNames = new String[]{{
                                            add("voluptatibus"),
                                        }};
                                        columnWildcard = new ColumnWildcard() {{
                                            excludedColumnNames = new String[]{{
                                                add("magnam"),
                                                add("quibusdam"),
                                            }};
                                        }};;
                                    }};;
                                }};;
                                resourceType = ListPermissionsRequestBodyResourceTypeEnum.CATALOG;
                            }};) {{
                maxResults = "facere";
                nextToken = "libero";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quia";
                xAmzDate = "porro";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "illo";
            }};            

            ListPermissionsResponse res = sdk.sdk.listPermissions(req);

            if (res.listPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResources

Lists the resources registered to be managed by the Data Catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesRequest;
import org.openapis.openapi.models.operations.ListResourcesRequestBody;
import org.openapis.openapi.models.operations.ListResourcesResponse;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.FieldNameStringEnum;
import org.openapis.openapi.models.shared.FilterCondition;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesRequest req = new ListResourcesRequest(                new ListResourcesRequestBody() {{
                                filterConditionList = new org.openapis.openapi.models.shared.FilterCondition[]{{
                                    add(new FilterCondition() {{
                                        comparisonOperator = ComparisonOperatorEnum.GE;
                                        field = FieldNameStringEnum.RESOURCE_ARN;
                                        stringValueList = new String[]{{
                                            add("excepturi"),
                                            add("eum"),
                                            add("velit"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new FilterCondition() {{
                                        comparisonOperator = ComparisonOperatorEnum.CONTAINS;
                                        field = FieldNameStringEnum.LAST_MODIFIED;
                                        stringValueList = new String[]{{
                                            add("impedit"),
                                        }};
                                    }}),
                                }};
                                maxResults = 975884L;
                                nextToken = "iste";
                            }};) {{
                maxResults = "itaque";
                nextToken = "alias";
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "velit";
                xAmzDate = "laborum";
                xAmzSecurityToken = "non";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "iusto";
            }};            

            ListResourcesResponse res = sdk.sdk.listResources(req);

            if (res.listResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTableStorageOptimizers

Returns the configuration of all storage optimizers associated with a specified table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTableStorageOptimizersRequest;
import org.openapis.openapi.models.operations.ListTableStorageOptimizersRequestBody;
import org.openapis.openapi.models.operations.ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum;
import org.openapis.openapi.models.operations.ListTableStorageOptimizersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTableStorageOptimizersRequest req = new ListTableStorageOptimizersRequest(                new ListTableStorageOptimizersRequestBody("doloremque", "consequatur") {{
                                catalogId = "officia";
                                maxResults = 927403L;
                                nextToken = "ea";
                                storageOptimizerType = ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum.ALL;
                            }};) {{
                maxResults = "voluptas";
                nextToken = "facilis";
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "expedita";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "a";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ullam";
            }};            

            ListTableStorageOptimizersResponse res = sdk.sdk.listTableStorageOptimizers(req);

            if (res.listTableStorageOptimizersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTransactions

<p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTransactionsRequest;
import org.openapis.openapi.models.operations.ListTransactionsRequestBody;
import org.openapis.openapi.models.operations.ListTransactionsRequestBodyStatusFilterEnum;
import org.openapis.openapi.models.operations.ListTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTransactionsRequest req = new ListTransactionsRequest(                new ListTransactionsRequestBody() {{
                                catalogId = "necessitatibus";
                                maxResults = 654082L;
                                nextToken = "impedit";
                                statusFilter = ListTransactionsRequestBodyStatusFilterEnum.COMPLETED;
                            }};) {{
                maxResults = "corporis";
                nextToken = "est";
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "esse";
                xAmzCredential = "labore";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "vitae";
            }};            

            ListTransactionsResponse res = sdk.sdk.listTransactions(req);

            if (res.listTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDataLakeSettings

<p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDataLakeSettingsRequest;
import org.openapis.openapi.models.operations.PutDataLakeSettingsRequestBody;
import org.openapis.openapi.models.operations.PutDataLakeSettingsRequestBodyDataLakeSettings;
import org.openapis.openapi.models.operations.PutDataLakeSettingsResponse;
import org.openapis.openapi.models.shared.DataLakePrincipal;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.PrincipalPermissions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDataLakeSettingsRequest req = new PutDataLakeSettingsRequest(                new PutDataLakeSettingsRequestBody(                new PutDataLakeSettingsRequestBodyDataLakeSettings() {{
                                                allowExternalDataFiltering = false;
                                                authorizedSessionTagValueList = new String[]{{
                                                    add("ad"),
                                                }};
                                                createDatabaseDefaultPermissions = new org.openapis.openapi.models.shared.PrincipalPermissions[]{{
                                                    add(new PrincipalPermissions() {{
                                                        permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                            add(PermissionEnum.DELETE),
                                                            add(PermissionEnum.DELETE),
                                                            add(PermissionEnum.CREATE_TABLE),
                                                        }};
                                                        principal = new DataLakePrincipal() {{
                                                            dataLakePrincipalIdentifier = "libero";
                                                        }};
                                                    }}),
                                                }};
                                                createTableDefaultPermissions = new org.openapis.openapi.models.shared.PrincipalPermissions[]{{
                                                    add(new PrincipalPermissions() {{
                                                        permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                            add(PermissionEnum.INSERT),
                                                            add(PermissionEnum.SELECT),
                                                            add(PermissionEnum.ALL),
                                                        }};
                                                        principal = new DataLakePrincipal() {{
                                                            dataLakePrincipalIdentifier = "magni";
                                                        }};
                                                    }}),
                                                    add(new PrincipalPermissions() {{
                                                        permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                            add(PermissionEnum.ALL),
                                                            add(PermissionEnum.ALL),
                                                        }};
                                                        principal = new DataLakePrincipal() {{
                                                            dataLakePrincipalIdentifier = "modi";
                                                        }};
                                                    }}),
                                                    add(new PrincipalPermissions() {{
                                                        permissions = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                            add(PermissionEnum.DELETE),
                                                        }};
                                                        principal = new DataLakePrincipal() {{
                                                            dataLakePrincipalIdentifier = "itaque";
                                                        }};
                                                    }}),
                                                }};
                                                dataLakeAdmins = new org.openapis.openapi.models.shared.DataLakePrincipal[]{{
                                                    add(new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "ipsum";
                                                    }}),
                                                }};
                                                externalDataFilteringAllowList = new org.openapis.openapi.models.shared.DataLakePrincipal[]{{
                                                    add(new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "nulla";
                                                    }}),
                                                    add(new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "distinctio";
                                                    }}),
                                                    add(new DataLakePrincipal() {{
                                                        dataLakePrincipalIdentifier = "maxime";
                                                    }}),
                                                }};
                                                parameters = new java.util.HashMap<String, String>() {{
                                                    put("quia", "nostrum");
                                                }};
                                                trustedResourceOwners = new String[]{{
                                                    add("libero"),
                                                    add("dicta"),
                                                    add("id"),
                                                }};
                                            }};) {{
                                catalogId = "libero";
                            }};) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "officia";
                xAmzCredential = "quos";
                xAmzDate = "placeat";
                xAmzSecurityToken = "sit";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "ipsa";
            }};            

            PutDataLakeSettingsResponse res = sdk.sdk.putDataLakeSettings(req);

            if (res.putDataLakeSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerResource

<p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterResourceRequest;
import org.openapis.openapi.models.operations.RegisterResourceRequestBody;
import org.openapis.openapi.models.operations.RegisterResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterResourceRequest req = new RegisterResourceRequest(                new RegisterResourceRequestBody("inventore") {{
                                roleArn = "aperiam";
                                useServiceLinkedRole = false;
                                withFederation = false;
                            }};) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "eligendi";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "esse";
            }};            

            RegisterResourceResponse res = sdk.sdk.registerResource(req);

            if (res.registerResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeLFTagsFromResource

Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveLFTagsFromResourceRequest;
import org.openapis.openapi.models.operations.RemoveLFTagsFromResourceRequestBody;
import org.openapis.openapi.models.operations.RemoveLFTagsFromResourceRequestBodyResource;
import org.openapis.openapi.models.operations.RemoveLFTagsFromResourceResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPair;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveLFTagsFromResourceRequest req = new RemoveLFTagsFromResourceRequest(                new RemoveLFTagsFromResourceRequestBody(                new org.openapis.openapi.models.shared.LFTagPair[]{{
                                                add(new LFTagPair("necessitatibus",                 new String[]{{
                                                                    add("sint"),
                                                                    add("ea"),
                                                                    add("autem"),
                                                                }}) {{
                                                    catalogId = "beatae";
                                                    tagKey = "est";
                                                    tagValues = new String[]{{
                                                        add("corrupti"),
                                                        add("molestiae"),
                                                        add("provident"),
                                                        add("accusamus"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("cum",                 new String[]{{
                                                                    add("alias"),
                                                                    add("quia"),
                                                                    add("quidem"),
                                                                    add("fuga"),
                                                                }}) {{
                                                    catalogId = "ipsam";
                                                    tagKey = "rerum";
                                                    tagValues = new String[]{{
                                                        add("corporis"),
                                                        add("officiis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("odio",                 new String[]{{
                                                                    add("odit"),
                                                                    add("explicabo"),
                                                                    add("corporis"),
                                                                }}) {{
                                                    catalogId = "repudiandae";
                                                    tagKey = "accusantium";
                                                    tagValues = new String[]{{
                                                        add("officiis"),
                                                        add("eos"),
                                                        add("quibusdam"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("similique",                 new String[]{{
                                                                    add("quidem"),
                                                                    add("quis"),
                                                                }}) {{
                                                    catalogId = "error";
                                                    tagKey = "earum";
                                                    tagValues = new String[]{{
                                                        add("recusandae"),
                                                    }};
                                                }}),
                                            }},                 new RemoveLFTagsFromResourceRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("unde", "molestiae");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "delectus";
                                                    name = "Steve Fritsch";
                                                    tableCatalogId = "at";
                                                    tableName = "officia";
                                                }};;
                                                dataLocation = new DataLocationResource("dignissimos") {{
                                                    catalogId = "optio";
                                                }};;
                                                database = new DatabaseResource("necessitatibus") {{
                                                    catalogId = "corporis";
                                                }};;
                                                lfTag = new LFTagKeyResource("qui",                 new String[]{{
                                                                    add("voluptatum"),
                                                                    add("cupiditate"),
                                                                    add("minima"),
                                                                }}) {{
                                                    catalogId = "placeat";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("modi",                 new String[]{{
                                                                                        add("magnam"),
                                                                                        add("voluptates"),
                                                                                    }}) {{
                                                                        tagKey = "neque";
                                                                        tagValues = new String[]{{
                                                                            add("minus"),
                                                                            add("eum"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("labore",                 new String[]{{
                                                                                        add("occaecati"),
                                                                                        add("voluptas"),
                                                                                        add("quo"),
                                                                                    }}) {{
                                                                        tagKey = "maiores";
                                                                        tagValues = new String[]{{
                                                                            add("aperiam"),
                                                                            add("libero"),
                                                                            add("ratione"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.DATABASE) {{
                                                    catalogId = "minus";
                                                }};;
                                                table = new TableResource("fuga") {{
                                                    catalogId = "nostrum";
                                                    name = "Myron Windler";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("repellat", "pariatur");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("nemo", "reprehenderit") {{
                                                    catalogId = "aperiam";
                                                    columnNames = new String[]{{
                                                        add("minima"),
                                                        add("in"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("excepturi"),
                                                            add("dolores"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "error";
                            }};) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "voluptate";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "optio";
            }};            

            RemoveLFTagsFromResourceResponse res = sdk.sdk.removeLFTagsFromResource(req);

            if (res.removeLFTagsFromResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokePermissions

Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokePermissionsRequest;
import org.openapis.openapi.models.operations.RevokePermissionsRequestBody;
import org.openapis.openapi.models.operations.RevokePermissionsRequestBodyPrincipal;
import org.openapis.openapi.models.operations.RevokePermissionsRequestBodyResource;
import org.openapis.openapi.models.operations.RevokePermissionsResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RevokePermissionsRequest req = new RevokePermissionsRequest(                new RevokePermissionsRequestBody(                new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                                add(PermissionEnum.INSERT),
                                                add(PermissionEnum.CREATE_TAG),
                                            }},                 new RevokePermissionsRequestBodyPrincipal() {{
                                                dataLakePrincipalIdentifier = "placeat";
                                            }};,                 new RevokePermissionsRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("exercitationem", "quam");
                                                    put("dolorem", "modi");
                                                    put("ipsa", "sint");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "vero";
                                                    name = "Dr. Elvira Robel";
                                                    tableCatalogId = "animi";
                                                    tableName = "dolores";
                                                }};;
                                                dataLocation = new DataLocationResource("nam") {{
                                                    catalogId = "dicta";
                                                }};;
                                                database = new DatabaseResource("consequuntur") {{
                                                    catalogId = "necessitatibus";
                                                }};;
                                                lfTag = new LFTagKeyResource("nobis",                 new String[]{{
                                                                    add("ducimus"),
                                                                }}) {{
                                                    catalogId = "maiores";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("excepturi",                 new String[]{{
                                                                                        add("nemo"),
                                                                                        add("aliquam"),
                                                                                        add("nostrum"),
                                                                                    }}) {{
                                                                        tagKey = "quasi";
                                                                        tagValues = new String[]{{
                                                                            add("pariatur"),
                                                                            add("libero"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.TABLE) {{
                                                    catalogId = "eligendi";
                                                }};;
                                                table = new TableResource("sint") {{
                                                    catalogId = "enim";
                                                    name = "Matt Macejkovic";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("eaque", "saepe");
                                                        put("architecto", "quos");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("iste", "assumenda") {{
                                                    catalogId = "tempore";
                                                    columnNames = new String[]{{
                                                        add("velit"),
                                                        add("doloremque"),
                                                        add("delectus"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("cum"),
                                                            add("ipsum"),
                                                            add("adipisci"),
                                                            add("saepe"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "deserunt";
                                permissionsWithGrantOption = new org.openapis.openapi.models.shared.PermissionEnum[]{{
                                    add(PermissionEnum.DELETE),
                                }};
                            }};) {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "libero";
                xAmzCredential = "architecto";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "possimus";
            }};            

            RevokePermissionsResponse res = sdk.sdk.revokePermissions(req);

            if (res.revokePermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchDatabasesByLFTags

This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDatabasesByLFTagsRequest;
import org.openapis.openapi.models.operations.SearchDatabasesByLFTagsRequestBody;
import org.openapis.openapi.models.operations.SearchDatabasesByLFTagsResponse;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchDatabasesByLFTagsRequest req = new SearchDatabasesByLFTagsRequest(                new SearchDatabasesByLFTagsRequestBody(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                add(new LFTag("veniam",                 new String[]{{
                                                                    add("facere"),
                                                                }}) {{
                                                    tagKey = "itaque";
                                                    tagValues = new String[]{{
                                                        add("asperiores"),
                                                    }};
                                                }}),
                                                add(new LFTag("amet",                 new String[]{{
                                                                    add("ab"),
                                                                    add("velit"),
                                                                }}) {{
                                                    tagKey = "laudantium";
                                                    tagValues = new String[]{{
                                                        add("pariatur"),
                                                    }};
                                                }}),
                                            }}) {{
                                catalogId = "facilis";
                                maxResults = 731065L;
                                nextToken = "nisi";
                            }};) {{
                maxResults = "voluptatibus";
                nextToken = "quaerat";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "nisi";
                xAmzDate = "quis";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "minus";
            }};            

            SearchDatabasesByLFTagsResponse res = sdk.sdk.searchDatabasesByLFTags(req);

            if (res.searchDatabasesByLFTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchTablesByLFTags

This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTablesByLFTagsRequest;
import org.openapis.openapi.models.operations.SearchTablesByLFTagsRequestBody;
import org.openapis.openapi.models.operations.SearchTablesByLFTagsResponse;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchTablesByLFTagsRequest req = new SearchTablesByLFTagsRequest(                new SearchTablesByLFTagsRequestBody(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                add(new LFTag("consequuntur",                 new String[]{{
                                                                    add("labore"),
                                                                    add("rerum"),
                                                                    add("eos"),
                                                                    add("reprehenderit"),
                                                                }}) {{
                                                    tagKey = "ipsum";
                                                    tagValues = new String[]{{
                                                        add("voluptatibus"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new LFTag("est",                 new String[]{{
                                                                    add("eligendi"),
                                                                    add("fugiat"),
                                                                    add("unde"),
                                                                }}) {{
                                                    tagKey = "nostrum";
                                                    tagValues = new String[]{{
                                                        add("iusto"),
                                                    }};
                                                }}),
                                                add(new LFTag("error",                 new String[]{{
                                                                    add("vitae"),
                                                                    add("dignissimos"),
                                                                    add("esse"),
                                                                    add("fugiat"),
                                                                }}) {{
                                                    tagKey = "officiis";
                                                    tagValues = new String[]{{
                                                        add("dolor"),
                                                        add("dicta"),
                                                    }};
                                                }}),
                                            }}) {{
                                catalogId = "ad";
                                maxResults = 134818L;
                                nextToken = "enim";
                            }};) {{
                maxResults = "delectus";
                nextToken = "iusto";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illo";
                xAmzDate = "ab";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "saepe";
            }};            

            SearchTablesByLFTagsResponse res = sdk.sdk.searchTablesByLFTags(req);

            if (res.searchTablesByLFTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startQueryPlanning

<p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartQueryPlanningRequest;
import org.openapis.openapi.models.operations.StartQueryPlanningRequestBody;
import org.openapis.openapi.models.operations.StartQueryPlanningRequestBodyQueryPlanningContext;
import org.openapis.openapi.models.operations.StartQueryPlanningResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartQueryPlanningRequest req = new StartQueryPlanningRequest(                new StartQueryPlanningRequestBody(                new StartQueryPlanningRequestBodyQueryPlanningContext() {{
                                                catalogId = "veniam";
                                                databaseName = "eos";
                                                queryAsOfTime = OffsetDateTime.parse("2020-03-08T14:51:04.568Z");
                                                queryParameters = new java.util.HashMap<String, String>() {{
                                                    put("praesentium", "nemo");
                                                    put("repellat", "quisquam");
                                                }};
                                                transactionId = "sequi";
                                            }};, "nihil");) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "illo";
                xAmzCredential = "labore";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "provident";
            }};            

            StartQueryPlanningResponse res = sdk.sdk.startQueryPlanning(req);

            if (res.startQueryPlanningResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTransaction

Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTransactionRequest;
import org.openapis.openapi.models.operations.StartTransactionRequestBody;
import org.openapis.openapi.models.operations.StartTransactionRequestBodyTransactionTypeEnum;
import org.openapis.openapi.models.operations.StartTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTransactionRequest req = new StartTransactionRequest(                new StartTransactionRequestBody() {{
                                transactionType = StartTransactionRequestBodyTransactionTypeEnum.READ_ONLY;
                            }};) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "aspernatur";
                xAmzDate = "nam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "provident";
            }};            

            StartTransactionResponse res = sdk.sdk.startTransaction(req);

            if (res.startTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataCellsFilter

Updates a data cell filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataCellsFilterRequest;
import org.openapis.openapi.models.operations.UpdateDataCellsFilterRequestBody;
import org.openapis.openapi.models.operations.UpdateDataCellsFilterRequestBodyTableData;
import org.openapis.openapi.models.operations.UpdateDataCellsFilterResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.RowFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataCellsFilterRequest req = new UpdateDataCellsFilterRequest(                new UpdateDataCellsFilterRequestBody(                new UpdateDataCellsFilterRequestBodyTableData() {{
                                                columnNames = new String[]{{
                                                    add("dignissimos"),
                                                    add("corporis"),
                                                    add("vero"),
                                                }};
                                                columnWildcard = new ColumnWildcard() {{
                                                    excludedColumnNames = new String[]{{
                                                        add("repellendus"),
                                                        add("iure"),
                                                        add("dolorem"),
                                                    }};
                                                }};;
                                                databaseName = "commodi";
                                                name = "Mrs. Leslie Anderson I";
                                                rowFilter = new RowFilter() {{
                                                    allRowsWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("praesentium", "quidem");
                                                        put("cum", "amet");
                                                        put("quasi", "dicta");
                                                        put("laudantium", "doloremque");
                                                    }};
                                                    filterExpression = "earum";
                                                }};;
                                                tableCatalogId = "iusto";
                                                tableName = "amet";
                                                versionId = "provident";
                                            }};);) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "provident";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "molestiae";
            }};            

            UpdateDataCellsFilterResponse res = sdk.sdk.updateDataCellsFilter(req);

            if (res.updateDataCellsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLFTag

Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLFTagRequest;
import org.openapis.openapi.models.operations.UpdateLFTagRequestBody;
import org.openapis.openapi.models.operations.UpdateLFTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLFTagRequest req = new UpdateLFTagRequest(                new UpdateLFTagRequestBody("facilis") {{
                                catalogId = "corrupti";
                                tagValuesToAdd = new String[]{{
                                    add("sint"),
                                }};
                                tagValuesToDelete = new String[]{{
                                    add("eos"),
                                    add("totam"),
                                    add("dicta"),
                                    add("voluptatem"),
                                }};
                            }};) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "sunt";
                xAmzDate = "a";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateLFTagResponse res = sdk.sdk.updateLFTag(req);

            if (res.updateLFTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResource

Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceRequest;
import org.openapis.openapi.models.operations.UpdateResourceRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceRequest req = new UpdateResourceRequest(                new UpdateResourceRequestBody("at", "labore") {{
                                withFederation = false;
                            }};) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "esse";
                xAmzCredential = "voluptatem";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aperiam";
            }};            

            UpdateResourceResponse res = sdk.sdk.updateResource(req);

            if (res.updateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTableObjects

Updates the manifest of Amazon S3 objects that make up the specified governed table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTableObjectsRequest;
import org.openapis.openapi.models.operations.UpdateTableObjectsRequestBody;
import org.openapis.openapi.models.operations.UpdateTableObjectsResponse;
import org.openapis.openapi.models.shared.AddObjectInput;
import org.openapis.openapi.models.shared.DeleteObjectInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WriteOperation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTableObjectsRequest req = new UpdateTableObjectsRequest(                new UpdateTableObjectsRequestBody("repellat", "velit",                 new org.openapis.openapi.models.shared.WriteOperation[]{{
                                                add(new WriteOperation() {{
                                                    addObject = new AddObjectInput("officia", 228857L, "tenetur") {{
                                                        eTag = "provident";
                                                        partitionValues = new String[]{{
                                                            add("eligendi"),
                                                        }};
                                                        size = 490110L;
                                                        uri = "http://shiny-outset.org";
                                                    }};
                                                    deleteObject = new DeleteObjectInput("explicabo") {{
                                                        eTag = "aspernatur";
                                                        partitionValues = new String[]{{
                                                            add("itaque"),
                                                            add("illum"),
                                                            add("laborum"),
                                                            add("dignissimos"),
                                                        }};
                                                        uri = "https://dense-curry.org";
                                                    }};
                                                }}),
                                                add(new WriteOperation() {{
                                                    addObject = new AddObjectInput("non", 719389L, "in") {{
                                                        eTag = "explicabo";
                                                        partitionValues = new String[]{{
                                                            add("nihil"),
                                                            add("non"),
                                                        }};
                                                        size = 68093L;
                                                        uri = "http://wary-pear.org";
                                                    }};
                                                    deleteObject = new DeleteObjectInput("rem") {{
                                                        eTag = "exercitationem";
                                                        partitionValues = new String[]{{
                                                            add("numquam"),
                                                            add("repudiandae"),
                                                        }};
                                                        uri = "http://itchy-canteen.org";
                                                    }};
                                                }}),
                                                add(new WriteOperation() {{
                                                    addObject = new AddObjectInput("magnam", 24272L, "modi") {{
                                                        eTag = "aperiam";
                                                        partitionValues = new String[]{{
                                                            add("deleniti"),
                                                        }};
                                                        size = 316730L;
                                                        uri = "http://plaintive-explanation.net";
                                                    }};
                                                    deleteObject = new DeleteObjectInput("veniam") {{
                                                        eTag = "eum";
                                                        partitionValues = new String[]{{
                                                            add("mollitia"),
                                                        }};
                                                        uri = "http://thorny-filly.info";
                                                    }};
                                                }}),
                                                add(new WriteOperation() {{
                                                    addObject = new AddObjectInput("numquam", 677045L, "possimus") {{
                                                        eTag = "reiciendis";
                                                        partitionValues = new String[]{{
                                                            add("modi"),
                                                        }};
                                                        size = 13865L;
                                                        uri = "http://unwritten-jumper.info";
                                                    }};
                                                    deleteObject = new DeleteObjectInput("distinctio") {{
                                                        eTag = "voluptate";
                                                        partitionValues = new String[]{{
                                                            add("nesciunt"),
                                                        }};
                                                        uri = "http://vicious-settler.com";
                                                    }};
                                                }}),
                                            }}) {{
                                catalogId = "iusto";
                                transactionId = "quas";
                            }};) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "amet";
                xAmzDate = "autem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "rem";
            }};            

            UpdateTableObjectsResponse res = sdk.sdk.updateTableObjects(req);

            if (res.updateTableObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTableStorageOptimizer

Updates the configuration of the storage optimizers for a table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTableStorageOptimizerRequest;
import org.openapis.openapi.models.operations.UpdateTableStorageOptimizerRequestBody;
import org.openapis.openapi.models.operations.UpdateTableStorageOptimizerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTableStorageOptimizerRequest req = new UpdateTableStorageOptimizerRequest(                new UpdateTableStorageOptimizerRequestBody("quos",                 new java.util.HashMap<String, java.util.HashMap<String, String>>() {{
                                                put("repellendus", new java.util.HashMap<String, String>() {{
                                                    put("quae", "eaque");
                                                }});
                                                put("saepe", new java.util.HashMap<String, String>() {{
                                                    put("mollitia", "nulla");
                                                    put("officia", "sed");
                                                    put("voluptatem", "alias");
                                                    put("eveniet", "hic");
                                                }});
                                                put("voluptatem", new java.util.HashMap<String, String>() {{
                                                    put("qui", "qui");
                                                    put("necessitatibus", "harum");
                                                }});
                                            }}, "explicabo") {{
                                catalogId = "beatae";
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "modi";
                xAmzCredential = "optio";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "libero";
            }};            

            UpdateTableStorageOptimizerResponse res = sdk.sdk.updateTableStorageOptimizer(req);

            if (res.updateTableStorageOptimizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
