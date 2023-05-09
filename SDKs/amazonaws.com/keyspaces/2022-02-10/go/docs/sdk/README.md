# SDK

## Overview

<p>Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p> <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail.</p> <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cassandra/>
### Available Operations

* [CreateKeyspace](#createkeyspace) - <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [CreateTable](#createtable) - <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [DeleteKeyspace](#deletekeyspace) - The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 
* [DeleteTable](#deletetable) - The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.
* [GetKeyspace](#getkeyspace) - Returns the name and the Amazon Resource Name (ARN) of the specified table.
* [GetTable](#gettable) - <p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>
* [ListKeyspaces](#listkeyspaces) - Returns a list of keyspaces.
* [ListTables](#listtables) - Returns a list of tables for a specified keyspace.
* [ListTagsForResource](#listtagsforresource) - Returns a list of all tags associated with the specified Amazon Keyspaces resource.
* [RestoreTable](#restoretable) - <p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>
* [TagResource](#tagresource) - <p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [UntagResource](#untagresource) - Removes the association of tags from a Amazon Keyspaces resource.
* [UpdateTable](#updatetable) - Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

## CreateKeyspace

<p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateKeyspace(ctx, operations.CreateKeyspaceRequest{
        CreateKeyspaceRequest: shared.CreateKeyspaceRequest{
            KeyspaceName: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "tempora",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateKeyspaceXAmzTargetEnumKeyspacesServiceCreateKeyspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKeyspaceResponse != nil {
        // handle response
    }
}
```

## CreateTable

<p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

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
    res, err := s.SDK.CreateTable(ctx, operations.CreateTableRequest{
        CreateTableRequest: shared.CreateTableRequest{
            CapacitySpecification: &shared.CapacitySpecification{
                ReadCapacityUnits: sdk.Int64(20218),
                ThroughputMode: shared.ThroughputModeEnumPayPerRequest,
                WriteCapacityUnits: sdk.Int64(832620),
            },
            ClientSideTimestamps: &shared.ClientSideTimestamps{
                Status: shared.ClientSideTimestampsStatusEnumEnabled,
            },
            Comment: &shared.Comment{
                Message: "sapiente",
            },
            DefaultTimeToLive: sdk.Int64(778157),
            EncryptionSpecification: &shared.EncryptionSpecification{
                KmsKeyIdentifier: sdk.String("odit"),
                Type: shared.EncryptionTypeEnumAwsOwnedKmsKey,
            },
            KeyspaceName: "at",
            PointInTimeRecovery: &shared.PointInTimeRecovery{
                Status: shared.PointInTimeRecoveryStatusEnumDisabled,
            },
            SchemaDefinition: shared.SchemaDefinition{
                AllColumns: []shared.ColumnDefinition{
                    shared.ColumnDefinition{
                        Name: "Forrest Koepp",
                        Type: "dolorum",
                    },
                    shared.ColumnDefinition{
                        Name: "Antoinette Nikolaus",
                        Type: "deleniti",
                    },
                },
                ClusteringKeys: []shared.ClusteringKey{
                    shared.ClusteringKey{
                        Name: "Everett Breitenberg",
                        OrderBy: shared.SortOrderEnumAsc,
                    },
                    shared.ClusteringKey{
                        Name: "Krista Rippin",
                        OrderBy: shared.SortOrderEnumDesc,
                    },
                    shared.ClusteringKey{
                        Name: "Dorothy Hane",
                        OrderBy: shared.SortOrderEnumDesc,
                    },
                    shared.ClusteringKey{
                        Name: "Faye Howe",
                        OrderBy: shared.SortOrderEnumDesc,
                    },
                },
                PartitionKeys: []shared.PartitionKey{
                    shared.PartitionKey{
                        Name: "Sheryl Kertzmann",
                    },
                    shared.PartitionKey{
                        Name: "Brenda Wisozk",
                    },
                },
                StaticColumns: []shared.StaticColumn{
                    shared.StaticColumn{
                        Name: "Connie Herzog",
                    },
                    shared.StaticColumn{
                        Name: "Guadalupe Hickle",
                    },
                    shared.StaticColumn{
                        Name: "Charlene Nicolas",
                    },
                },
            },
            TableName: "architecto",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "culpa",
                },
                shared.Tag{
                    Key: "consequuntur",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "mollitia",
                    Value: "occaecati",
                },
            },
            TTL: &shared.TimeToLive{
                Status: shared.TimeToLiveStatusEnumEnabled,
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        XAmzTarget: operations.CreateTableXAmzTargetEnumKeyspacesServiceCreateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTableResponse != nil {
        // handle response
    }
}
```

## DeleteKeyspace

The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 

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
    res, err := s.SDK.DeleteKeyspace(ctx, operations.DeleteKeyspaceRequest{
        DeleteKeyspaceRequest: shared.DeleteKeyspaceRequest{
            KeyspaceName: "quis",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.DeleteKeyspaceXAmzTargetEnumKeyspacesServiceDeleteKeyspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKeyspaceResponse != nil {
        // handle response
    }
}
```

## DeleteTable

The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.

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
    res, err := s.SDK.DeleteTable(ctx, operations.DeleteTableRequest{
        DeleteTableRequest: shared.DeleteTableRequest{
            KeyspaceName: "tenetur",
            TableName: "ipsam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteTableXAmzTargetEnumKeyspacesServiceDeleteTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTableResponse != nil {
        // handle response
    }
}
```

## GetKeyspace

Returns the name and the Amazon Resource Name (ARN) of the specified table.

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
    res, err := s.SDK.GetKeyspace(ctx, operations.GetKeyspaceRequest{
        GetKeyspaceRequest: shared.GetKeyspaceRequest{
            KeyspaceName: "quasi",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.GetKeyspaceXAmzTargetEnumKeyspacesServiceGetKeyspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKeyspaceResponse != nil {
        // handle response
    }
}
```

## GetTable

<p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>

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
    res, err := s.SDK.GetTable(ctx, operations.GetTableRequest{
        GetTableRequest: shared.GetTableRequest{
            KeyspaceName: "omnis",
            TableName: "voluptate",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.GetTableXAmzTargetEnumKeyspacesServiceGetTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTableResponse != nil {
        // handle response
    }
}
```

## ListKeyspaces

Returns a list of keyspaces.

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
    res, err := s.SDK.ListKeyspaces(ctx, operations.ListKeyspacesRequest{
        ListKeyspacesRequest: shared.ListKeyspacesRequest{
            MaxResults: sdk.Int64(359444),
            NextToken: sdk.String("dolore"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.ListKeyspacesXAmzTargetEnumKeyspacesServiceListKeyspaces,
        MaxResults: sdk.String("quae"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeyspacesResponse != nil {
        // handle response
    }
}
```

## ListTables

Returns a list of tables for a specified keyspace.

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
    res, err := s.SDK.ListTables(ctx, operations.ListTablesRequest{
        ListTablesRequest: shared.ListTablesRequest{
            KeyspaceName: "quidem",
            MaxResults: sdk.Int64(565189),
            NextToken: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.ListTablesXAmzTargetEnumKeyspacesServiceListTables,
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of all tags associated with the specified Amazon Keyspaces resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            MaxResults: sdk.Int64(929297),
            NextToken: sdk.String("incidunt"),
            ResourceArn: "enim",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumKeyspacesServiceListTagsForResource,
        MaxResults: sdk.String("labore"),
        NextToken: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RestoreTable

<p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreTable(ctx, operations.RestoreTableRequest{
        RestoreTableRequest: shared.RestoreTableRequest{
            CapacitySpecificationOverride: &shared.CapacitySpecification{
                ReadCapacityUnits: sdk.Int64(183191),
                ThroughputMode: shared.ThroughputModeEnumPayPerRequest,
                WriteCapacityUnits: sdk.Int64(586513),
            },
            EncryptionSpecificationOverride: &shared.EncryptionSpecification{
                KmsKeyIdentifier: sdk.String("quos"),
                Type: shared.EncryptionTypeEnumCustomerManagedKmsKey,
            },
            PointInTimeRecoveryOverride: &shared.PointInTimeRecovery{
                Status: shared.PointInTimeRecoveryStatusEnumEnabled,
            },
            RestoreTimestamp: types.MustTimeFromString("2021-11-22T01:26:35.048Z"),
            SourceKeyspaceName: "alias",
            SourceTableName: "fugit",
            TagsOverride: []shared.Tag{
                shared.Tag{
                    Key: "excepturi",
                    Value: "tempora",
                },
                shared.Tag{
                    Key: "facilis",
                    Value: "tempore",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "delectus",
                },
            },
            TargetKeyspaceName: "eum",
            TargetTableName: "non",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.RestoreTableXAmzTargetEnumKeyspacesServiceRestoreTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreTableResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "dolor",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "a",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "in",
                    Value: "in",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumKeyspacesServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the association of tags from a Amazon Keyspaces resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "non",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "accusamus",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "quidem",
                },
                shared.Tag{
                    Key: "provident",
                    Value: "nam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumKeyspacesServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateTable

Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

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
    res, err := s.SDK.UpdateTable(ctx, operations.UpdateTableRequest{
        UpdateTableRequest: shared.UpdateTableRequest{
            AddColumns: []shared.ColumnDefinition{
                shared.ColumnDefinition{
                    Name: "Ms. Arturo Krajcik",
                    Type: "distinctio",
                },
                shared.ColumnDefinition{
                    Name: "Leroy Greenfelder",
                    Type: "nobis",
                },
            },
            CapacitySpecification: &shared.CapacitySpecification{
                ReadCapacityUnits: sdk.Int64(428769),
                ThroughputMode: shared.ThroughputModeEnumProvisioned,
                WriteCapacityUnits: sdk.Int64(135474),
            },
            ClientSideTimestamps: &shared.ClientSideTimestamps{
                Status: shared.ClientSideTimestampsStatusEnumEnabled,
            },
            DefaultTimeToLive: sdk.Int64(102863),
            EncryptionSpecification: &shared.EncryptionSpecification{
                KmsKeyIdentifier: sdk.String("magnam"),
                Type: shared.EncryptionTypeEnumCustomerManagedKmsKey,
            },
            KeyspaceName: "excepturi",
            PointInTimeRecovery: &shared.PointInTimeRecovery{
                Status: shared.PointInTimeRecoveryStatusEnumEnabled,
            },
            TableName: "provident",
            TTL: &shared.TimeToLive{
                Status: shared.TimeToLiveStatusEnumEnabled,
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.UpdateTableXAmzTargetEnumKeyspacesServiceUpdateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableResponse != nil {
        // handle response
    }
}
```
