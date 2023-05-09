# SDK

## Overview

<p>Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p> <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail.</p> <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cassandra/>
### Available Operations

* [createKeyspace](#createkeyspace) - <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [createTable](#createtable) - <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [deleteKeyspace](#deletekeyspace) - The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 
* [deleteTable](#deletetable) - The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.
* [getKeyspace](#getkeyspace) - Returns the name and the Amazon Resource Name (ARN) of the specified table.
* [getTable](#gettable) - <p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>
* [listKeyspaces](#listkeyspaces) - Returns a list of keyspaces.
* [listTables](#listtables) - Returns a list of tables for a specified keyspace.
* [listTagsForResource](#listtagsforresource) - Returns a list of all tags associated with the specified Amazon Keyspaces resource.
* [restoreTable](#restoretable) - <p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>
* [tagResource](#tagresource) - <p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [untagResource](#untagresource) - Removes the association of tags from a Amazon Keyspaces resource.
* [updateTable](#updatetable) - Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

## createKeyspace

<p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKeyspaceRequest;
import org.openapis.openapi.models.operations.CreateKeyspaceResponse;
import org.openapis.openapi.models.operations.CreateKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateKeyspaceRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateKeyspaceRequest req = new CreateKeyspaceRequest(                new CreateKeyspaceRequest("iusto") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("temporibus", "ab") {{
                                        key = "nisi";
                                        value = "recusandae";
                                    }}),
                                    add(new Tag("deserunt", "perferendis") {{
                                        key = "quis";
                                        value = "veritatis";
                                    }}),
                                    add(new Tag("sapiente", "quo") {{
                                        key = "ipsam";
                                        value = "repellendus";
                                    }}),
                                }};
                            }};, CreateKeyspaceXAmzTargetEnum.KEYSPACES_SERVICE_CREATE_KEYSPACE) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CreateKeyspaceResponse res = sdk.sdk.createKeyspace(req);

            if (res.createKeyspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTable

<p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTableRequest;
import org.openapis.openapi.models.operations.CreateTableResponse;
import org.openapis.openapi.models.operations.CreateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacitySpecification;
import org.openapis.openapi.models.shared.ClientSideTimestamps;
import org.openapis.openapi.models.shared.ClientSideTimestampsStatusEnum;
import org.openapis.openapi.models.shared.ClusteringKey;
import org.openapis.openapi.models.shared.ColumnDefinition;
import org.openapis.openapi.models.shared.Comment;
import org.openapis.openapi.models.shared.CreateTableRequest;
import org.openapis.openapi.models.shared.EncryptionSpecification;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.PartitionKey;
import org.openapis.openapi.models.shared.PointInTimeRecovery;
import org.openapis.openapi.models.shared.PointInTimeRecoveryStatusEnum;
import org.openapis.openapi.models.shared.SchemaDefinition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.StaticColumn;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ThroughputModeEnum;
import org.openapis.openapi.models.shared.TimeToLive;
import org.openapis.openapi.models.shared.TimeToLiveStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTableRequest req = new CreateTableRequest(                new CreateTableRequest("totam",                 new SchemaDefinition(                new org.openapis.openapi.models.shared.ColumnDefinition[]{{
                                                                add(new ColumnDefinition("deleniti", "hic") {{
                                                                    name = "Samuel Reichel";
                                                                    type = "fugit";
                                                                }}),
                                                                add(new ColumnDefinition("qui", "impedit") {{
                                                                    name = "Everett Breitenberg";
                                                                    type = "modi";
                                                                }}),
                                                                add(new ColumnDefinition("ad", "natus") {{
                                                                    name = "Cory Emmerich";
                                                                    type = "perferendis";
                                                                }}),
                                                                add(new ColumnDefinition("saepe", "fuga") {{
                                                                    name = "Sheryl Fadel";
                                                                    type = "hic";
                                                                }}),
                                                            }},                 new org.openapis.openapi.models.shared.PartitionKey[]{{
                                                                add(new PartitionKey("architecto") {{
                                                                    name = "Sheryl Kertzmann";
                                                                }}),
                                                                add(new PartitionKey("dolores") {{
                                                                    name = "Lela Orn";
                                                                }}),
                                                            }}) {{
                                                clusteringKeys = new org.openapis.openapi.models.shared.ClusteringKey[]{{
                                                    add(new ClusteringKey("minima", SortOrderEnum.DESC) {{
                                                        name = "Rose Rolfson";
                                                        orderBy = SortOrderEnum.ASC;
                                                    }}),
                                                }};
                                                staticColumns = new org.openapis.openapi.models.shared.StaticColumn[]{{
                                                    add(new StaticColumn("dolorem") {{
                                                        name = "Cecilia Yundt MD";
                                                    }}),
                                                }};
                                            }};, "culpa") {{
                                capacitySpecification = new CapacitySpecification(ThroughputModeEnum.PAY_PER_REQUEST) {{
                                    readCapacityUnits = 995300L;
                                    writeCapacityUnits = 653108L;
                                }};;
                                clientSideTimestamps = new ClientSideTimestamps(ClientSideTimestampsStatusEnum.ENABLED);;
                                comment = new Comment("occaecati");;
                                defaultTimeToLive = 253291L;
                                encryptionSpecification = new EncryptionSpecification(EncryptionTypeEnum.CUSTOMER_MANAGED_KMS_KEY) {{
                                    kmsKeyIdentifier = "quam";
                                }};;
                                pointInTimeRecovery = new PointInTimeRecovery(PointInTimeRecoveryStatusEnum.ENABLED);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quis", "vitae") {{
                                        key = "error";
                                        value = "quia";
                                    }}),
                                }};
                                ttl = new TimeToLive(TimeToLiveStatusEnum.ENABLED);;
                            }};, CreateTableXAmzTargetEnum.KEYSPACES_SERVICE_CREATE_TABLE) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            CreateTableResponse res = sdk.sdk.createTable(req);

            if (res.createTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKeyspace

The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyspaceRequest;
import org.openapis.openapi.models.operations.DeleteKeyspaceResponse;
import org.openapis.openapi.models.operations.DeleteKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteKeyspaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKeyspaceRequest req = new DeleteKeyspaceRequest(                new DeleteKeyspaceRequest("id");, DeleteKeyspaceXAmzTargetEnum.KEYSPACES_SERVICE_DELETE_KEYSPACE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteKeyspaceResponse res = sdk.sdk.deleteKeyspace(req);

            if (res.deleteKeyspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTable

The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTableRequest;
import org.openapis.openapi.models.operations.DeleteTableResponse;
import org.openapis.openapi.models.operations.DeleteTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTableRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTableRequest req = new DeleteTableRequest(                new DeleteTableRequest("voluptatibus", "vero");, DeleteTableXAmzTargetEnum.KEYSPACES_SERVICE_DELETE_TABLE) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            DeleteTableResponse res = sdk.sdk.deleteTable(req);

            if (res.deleteTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeyspace

Returns the name and the Amazon Resource Name (ARN) of the specified table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyspaceRequest;
import org.openapis.openapi.models.operations.GetKeyspaceResponse;
import org.openapis.openapi.models.operations.GetKeyspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetKeyspaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKeyspaceRequest req = new GetKeyspaceRequest(                new GetKeyspaceRequest("doloremque");, GetKeyspaceXAmzTargetEnum.KEYSPACES_SERVICE_GET_KEYSPACE) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            GetKeyspaceResponse res = sdk.sdk.getKeyspace(req);

            if (res.getKeyspaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTable

<p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTableRequest;
import org.openapis.openapi.models.operations.GetTableResponse;
import org.openapis.openapi.models.operations.GetTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTableRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTableRequest req = new GetTableRequest(                new GetTableRequest("harum", "enim");, GetTableXAmzTargetEnum.KEYSPACES_SERVICE_GET_TABLE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "repudiandae";
                xAmzDate = "quae";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "molestias";
            }};            

            GetTableResponse res = sdk.sdk.getTable(req);

            if (res.getTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKeyspaces

Returns a list of keyspaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKeyspacesRequest;
import org.openapis.openapi.models.operations.ListKeyspacesResponse;
import org.openapis.openapi.models.operations.ListKeyspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListKeyspacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListKeyspacesRequest req = new ListKeyspacesRequest(                new ListKeyspacesRequest() {{
                                maxResults = 865103L;
                                nextToken = "modi";
                            }};, ListKeyspacesXAmzTargetEnum.KEYSPACES_SERVICE_LIST_KEYSPACES) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "voluptates";
                xAmzDate = "quasi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "veritatis";
                maxResults = "itaque";
                nextToken = "incidunt";
            }};            

            ListKeyspacesResponse res = sdk.sdk.listKeyspaces(req);

            if (res.listKeyspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTables

Returns a list of tables for a specified keyspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTablesRequest;
import org.openapis.openapi.models.operations.ListTablesResponse;
import org.openapis.openapi.models.operations.ListTablesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTablesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTablesRequest req = new ListTablesRequest(                new ListTablesRequest("consequatur") {{
                                maxResults = 667411L;
                                nextToken = "quibusdam";
                            }};, ListTablesXAmzTargetEnum.KEYSPACES_SERVICE_LIST_TABLES) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
                maxResults = "aliquid";
                nextToken = "cupiditate";
            }};            

            ListTablesResponse res = sdk.sdk.listTables(req);

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of all tags associated with the specified Amazon Keyspaces resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("perferendis") {{
                                maxResults = 164940L;
                                nextToken = "assumenda";
                            }};, ListTagsForResourceXAmzTargetEnum.KEYSPACES_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
                maxResults = "tempore";
                nextToken = "labore";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreTable

<p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreTableRequest;
import org.openapis.openapi.models.operations.RestoreTableResponse;
import org.openapis.openapi.models.operations.RestoreTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacitySpecification;
import org.openapis.openapi.models.shared.EncryptionSpecification;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.PointInTimeRecovery;
import org.openapis.openapi.models.shared.PointInTimeRecoveryStatusEnum;
import org.openapis.openapi.models.shared.RestoreTableRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ThroughputModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreTableRequest req = new RestoreTableRequest(                new RestoreTableRequest("eum", "non", "eligendi", "sint") {{
                                capacitySpecificationOverride = new CapacitySpecification(ThroughputModeEnum.PAY_PER_REQUEST) {{
                                    readCapacityUnits = 592042L;
                                    writeCapacityUnits = 896039L;
                                }};;
                                encryptionSpecificationOverride = new EncryptionSpecification(EncryptionTypeEnum.AWS_OWNED_KMS_KEY) {{
                                    kmsKeyIdentifier = "officia";
                                }};;
                                pointInTimeRecoveryOverride = new PointInTimeRecovery(PointInTimeRecoveryStatusEnum.ENABLED);;
                                restoreTimestamp = OffsetDateTime.parse("2020-02-22T17:45:21.686Z");
                                tagsOverride = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "maiores") {{
                                        key = "in";
                                        value = "in";
                                    }}),
                                    add(new Tag("magnam", "cumque") {{
                                        key = "rerum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag("aliquid", "laborum") {{
                                        key = "facere";
                                        value = "ea";
                                    }}),
                                }};
                            }};, RestoreTableXAmzTargetEnum.KEYSPACES_SERVICE_RESTORE_TABLE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            RestoreTableResponse res = sdk.sdk.restoreTable(req);

            if (res.restoreTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("nam",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("sapiente", "amet") {{
                                                    key = "blanditiis";
                                                    value = "deleniti";
                                                }}),
                                                add(new Tag("vel", "natus") {{
                                                    key = "deserunt";
                                                    value = "nisi";
                                                }}),
                                                add(new Tag("perferendis", "nihil") {{
                                                    key = "omnis";
                                                    value = "molestiae";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.KEYSPACES_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the association of tags from a Amazon Keyspaces resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("eum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("magnam", "et") {{
                                                    key = "aspernatur";
                                                    value = "architecto";
                                                }}),
                                                add(new Tag("provident", "quos") {{
                                                    key = "excepturi";
                                                    value = "ullam";
                                                }}),
                                                add(new Tag("mollitia", "reiciendis") {{
                                                    key = "sint";
                                                    value = "accusantium";
                                                }}),
                                                add(new Tag("eum", "dolor") {{
                                                    key = "mollitia";
                                                    value = "ad";
                                                }}),
                                            }});, UntagResourceXAmzTargetEnum.KEYSPACES_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTable

Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTableRequest;
import org.openapis.openapi.models.operations.UpdateTableResponse;
import org.openapis.openapi.models.operations.UpdateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacitySpecification;
import org.openapis.openapi.models.shared.ClientSideTimestamps;
import org.openapis.openapi.models.shared.ClientSideTimestampsStatusEnum;
import org.openapis.openapi.models.shared.ColumnDefinition;
import org.openapis.openapi.models.shared.EncryptionSpecification;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.PointInTimeRecovery;
import org.openapis.openapi.models.shared.PointInTimeRecoveryStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThroughputModeEnum;
import org.openapis.openapi.models.shared.TimeToLive;
import org.openapis.openapi.models.shared.TimeToLiveStatusEnum;
import org.openapis.openapi.models.shared.UpdateTableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTableRequest req = new UpdateTableRequest(                new UpdateTableRequest("maxime", "deleniti") {{
                                addColumns = new org.openapis.openapi.models.shared.ColumnDefinition[]{{
                                    add(new ColumnDefinition("nihil", "repellat") {{
                                        name = "Alice Bradtke";
                                        type = "expedita";
                                    }}),
                                    add(new ColumnDefinition("natus", "magni") {{
                                        name = "Louis Turner Sr.";
                                        type = "praesentium";
                                    }}),
                                    add(new ColumnDefinition("excepturi", "odit") {{
                                        name = "Angelica Stanton";
                                        type = "ea";
                                    }}),
                                }};
                                capacitySpecification = new CapacitySpecification(ThroughputModeEnum.PAY_PER_REQUEST) {{
                                    readCapacityUnits = 33222L;
                                    writeCapacityUnits = 69167L;
                                }};;
                                clientSideTimestamps = new ClientSideTimestamps(ClientSideTimestampsStatusEnum.ENABLED);;
                                defaultTimeToLive = 982575L;
                                encryptionSpecification = new EncryptionSpecification(EncryptionTypeEnum.AWS_OWNED_KMS_KEY) {{
                                    kmsKeyIdentifier = "ipsam";
                                }};;
                                pointInTimeRecovery = new PointInTimeRecovery(PointInTimeRecoveryStatusEnum.ENABLED);;
                                ttl = new TimeToLive(TimeToLiveStatusEnum.ENABLED);;
                            }};, UpdateTableXAmzTargetEnum.KEYSPACES_SERVICE_UPDATE_TABLE) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            UpdateTableResponse res = sdk.sdk.updateTable(req);

            if (res.updateTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
