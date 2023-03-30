# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/glue/2017-03-31/go
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

    req := operations.BatchCreatePartitionRequest{
        Headers: operations.BatchCreatePartitionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "nihil",
            DatabaseName: "fuga",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "2022-11-09T16:45:28.236Z",
                    LastAnalyzedTime: "2022-10-21T06:40:39.586Z",
                    Parameters: map[string]string{
                        "saepe": "inventore",
                        "sapiente": "enim",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "voluptatum",
                            "autem",
                        },
                        BucketColumns: []string{
                            "non",
                            "deleniti",
                            "similique",
                            "reprehenderit",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "quo",
                                Name: "quasi",
                                Parameters: map[string]string{
                                    "dicta": "est",
                                    "voluptatem": "consequatur",
                                },
                                Type: "fugiat",
                            },
                            shared.Column{
                                Comment: "a",
                                Name: "omnis",
                                Parameters: map[string]string{
                                    "accusamus": "accusamus",
                                },
                                Type: "reiciendis",
                            },
                            shared.Column{
                                Comment: "rem",
                                Name: "quibusdam",
                                Parameters: map[string]string{
                                    "praesentium": "occaecati",
                                    "dolor": "soluta",
                                    "sed": "quisquam",
                                    "rerum": "culpa",
                                },
                                Type: "qui",
                            },
                            shared.Column{
                                Comment: "sed",
                                Name: "rerum",
                                Parameters: map[string]string{
                                    "occaecati": "odit",
                                    "esse": "rem",
                                    "voluptatem": "amet",
                                    "est": "id",
                                },
                                Type: "blanditiis",
                            },
                        },
                        Compressed: false,
                        InputFormat: "numquam",
                        Location: "similique",
                        NumberOfBuckets: 135218,
                        OutputFormat: "sit",
                        Parameters: map[string]string{
                            "et": "voluptatem",
                            "laborum": "modi",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "et",
                                SchemaArn: "iure",
                                SchemaName: "earum",
                            },
                            SchemaVersionID: "ut",
                            SchemaVersionNumber: 681820,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "qui",
                            Parameters: map[string]string{
                                "laborum": "iusto",
                                "ut": "optio",
                            },
                            SerializationLibrary: "aspernatur",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "ut",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "et": "libero",
                                "ipsum": "non",
                                "ea": "magni",
                            },
                            SkewedColumnValues: []string{
                                "ipsam",
                                "est",
                                "commodi",
                                "quia",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "eaque",
                                SortOrder: 438601,
                            },
                            shared.Order{
                                Column: "harum",
                                SortOrder: 988374,
                            },
                            shared.Order{
                                Column: "a",
                                SortOrder: 102044,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "non",
                        "quidem",
                        "neque",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-03-31T17:07:03.299Z",
                    LastAnalyzedTime: "2022-08-03T14:42:46.013Z",
                    Parameters: map[string]string{
                        "aliquam": "esse",
                        "totam": "voluptatum",
                        "et": "fuga",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "laboriosam",
                        },
                        BucketColumns: []string{
                            "cum",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "ipsam",
                                Name: "eos",
                                Parameters: map[string]string{
                                    "adipisci": "hic",
                                    "consequatur": "distinctio",
                                    "qui": "perferendis",
                                    "aspernatur": "fuga",
                                },
                                Type: "quo",
                            },
                            shared.Column{
                                Comment: "tempore",
                                Name: "explicabo",
                                Parameters: map[string]string{
                                    "reiciendis": "debitis",
                                    "totam": "molestias",
                                    "reiciendis": "illo",
                                    "id": "qui",
                                },
                                Type: "quod",
                            },
                            shared.Column{
                                Comment: "sit",
                                Name: "eaque",
                                Parameters: map[string]string{
                                    "veniam": "reiciendis",
                                    "sed": "ea",
                                },
                                Type: "exercitationem",
                            },
                        },
                        Compressed: false,
                        InputFormat: "deleniti",
                        Location: "sed",
                        NumberOfBuckets: 688661,
                        OutputFormat: "voluptatem",
                        Parameters: map[string]string{
                            "esse": "sint",
                            "veritatis": "numquam",
                            "eligendi": "error",
                            "similique": "et",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "ut",
                                SchemaArn: "molestias",
                                SchemaName: "cupiditate",
                            },
                            SchemaVersionID: "sint",
                            SchemaVersionNumber: 93940,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "et",
                            Parameters: map[string]string{
                                "vitae": "non",
                                "minima": "voluptatem",
                                "aut": "libero",
                            },
                            SerializationLibrary: "voluptas",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "est",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "voluptas": "nostrum",
                                "voluptatem": "sit",
                                "in": "officia",
                            },
                            SkewedColumnValues: []string{
                                "voluptatem",
                                "dolorem",
                                "eum",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "consequatur",
                                SortOrder: 146441,
                            },
                            shared.Order{
                                Column: "cum",
                                SortOrder: 569618,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "nihil",
                        "id",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-12-14T16:53:16.922Z",
                    LastAnalyzedTime: "2022-04-12T19:10:12.416Z",
                    Parameters: map[string]string{
                        "dolore": "possimus",
                        "in": "qui",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "eveniet",
                            "sunt",
                            "rerum",
                        },
                        BucketColumns: []string{
                            "necessitatibus",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "soluta",
                                Name: "ducimus",
                                Parameters: map[string]string{
                                    "nulla": "reiciendis",
                                    "cumque": "fugit",
                                },
                                Type: "ullam",
                            },
                            shared.Column{
                                Comment: "voluptas",
                                Name: "vel",
                                Parameters: map[string]string{
                                    "qui": "cum",
                                    "aut": "magnam",
                                },
                                Type: "culpa",
                            },
                            shared.Column{
                                Comment: "enim",
                                Name: "aut",
                                Parameters: map[string]string{
                                    "eligendi": "officia",
                                    "est": "distinctio",
                                    "et": "provident",
                                    "a": "incidunt",
                                },
                                Type: "facilis",
                            },
                            shared.Column{
                                Comment: "qui",
                                Name: "nihil",
                                Parameters: map[string]string{
                                    "id": "voluptatum",
                                    "sit": "rem",
                                    "corporis": "porro",
                                },
                                Type: "distinctio",
                            },
                        },
                        Compressed: false,
                        InputFormat: "quis",
                        Location: "nostrum",
                        NumberOfBuckets: 383462,
                        OutputFormat: "et",
                        Parameters: map[string]string{
                            "molestiae": "debitis",
                            "dolores": "aut",
                            "ullam": "explicabo",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "similique",
                                SchemaArn: "ex",
                                SchemaName: "deserunt",
                            },
                            SchemaVersionID: "omnis",
                            SchemaVersionNumber: 574325,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "aperiam",
                            Parameters: map[string]string{
                                "ut": "et",
                                "voluptatem": "et",
                                "modi": "eveniet",
                            },
                            SerializationLibrary: "qui",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "aspernatur",
                                "iusto",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "saepe": "quaerat",
                                "aut": "sed",
                                "nihil": "ducimus",
                                "aspernatur": "aspernatur",
                            },
                            SkewedColumnValues: []string{
                                "aliquid",
                                "quo",
                                "totam",
                                "repellat",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "voluptatem",
                                SortOrder: 904648,
                            },
                            shared.Order{
                                Column: "accusamus",
                                SortOrder: 37559,
                            },
                            shared.Order{
                                Column: "neque",
                                SortOrder: 508315,
                            },
                            shared.Order{
                                Column: "et",
                                SortOrder: 166847,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "omnis",
                    },
                },
            },
            TableName: "pariatur",
        },
    }

    ctx := context.Background()
    res, err := s.BatchCreatePartition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePartitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchCreatePartition` - Creates one or more partitions in a batch operation.
* `BatchDeleteConnection` - Deletes a list of connection definitions from the Data Catalog.
* `BatchDeletePartition` - Deletes one or more partitions in a batch operation.
* `BatchDeleteTable` - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `BatchDeleteTableVersion` - Deletes a specified batch of versions of a table.
* `BatchGetBlueprints` - Retrieves information about a list of blueprints.
* `BatchGetCrawlers` - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `BatchGetCustomEntityTypes` - Retrieves the details for the custom patterns specified by a list of names.
* `BatchGetDataQualityResult` - Retrieves a list of data quality results for the specified result IDs.
* `BatchGetDevEndpoints` - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `BatchGetJobs` - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* `BatchGetPartition` - Retrieves partitions in a batch request.
* `BatchGetTriggers` - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `BatchGetWorkflows` - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `BatchStopJobRun` - Stops one or more job runs for a specified job definition.
* `BatchUpdatePartition` - Updates one or more partitions in a batch operation.
* `CancelDataQualityRuleRecommendationRun` - Cancels the specified recommendation run that was being used to generate rules.
* `CancelDataQualityRulesetEvaluationRun` - Cancels a run where a ruleset is being evaluated against a data source.
* `CancelMLTaskRun` - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* `CancelStatement` - Cancels the statement.
* `CheckSchemaVersionValidity` - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* `CreateBlueprint` - Registers a blueprint with Glue.
* `CreateClassifier` - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* `CreateConnection` - Creates a connection definition in the Data Catalog.
* `CreateCrawler` - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* `CreateCustomEntityType` - <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
* `CreateDataQualityRuleset` - <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
* `CreateDatabase` - Creates a new database in a Data Catalog.
* `CreateDevEndpoint` - Creates a new development endpoint.
* `CreateJob` - Creates a new job definition.
* `CreateMLTransform` - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* `CreatePartition` - Creates a new partition.
* `CreatePartitionIndex` - Creates a specified partition index in an existing table.
* `CreateRegistry` - Creates a new registry which may be used to hold a collection of schemas.
* `CreateSchema` - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* `CreateScript` - Transforms a directed acyclic graph (DAG) into code.
* `CreateSecurityConfiguration` - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* `CreateSession` - Creates a new session.
* `CreateTable` - Creates a new table definition in the Data Catalog.
* `CreateTrigger` - Creates a new trigger.
* `CreateUserDefinedFunction` - Creates a new function definition in the Data Catalog.
* `CreateWorkflow` - Creates a new workflow.
* `DeleteBlueprint` - Deletes an existing blueprint.
* `DeleteClassifier` - Removes a classifier from the Data Catalog.
* `DeleteColumnStatisticsForPartition` - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* `DeleteColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* `DeleteConnection` - Deletes a connection from the Data Catalog.
* `DeleteCrawler` - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* `DeleteCustomEntityType` - Deletes a custom pattern by specifying its name.
* `DeleteDataQualityRuleset` - Deletes a data quality ruleset.
* `DeleteDatabase` - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* `DeleteDevEndpoint` - Deletes a specified development endpoint.
* `DeleteJob` - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* `DeleteMLTransform` - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* `DeletePartition` - Deletes a specified partition.
* `DeletePartitionIndex` - Deletes a specified partition index from an existing table.
* `DeleteRegistry` - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* `DeleteResourcePolicy` - Deletes a specified policy.
* `DeleteSchema` - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* `DeleteSchemaVersions` - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* `DeleteSecurityConfiguration` - Deletes a specified security configuration.
* `DeleteSession` - Deletes the session.
* `DeleteTable` - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `DeleteTableVersion` - Deletes a specified version of a table.
* `DeleteTrigger` - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* `DeleteUserDefinedFunction` - Deletes an existing function definition from the Data Catalog.
* `DeleteWorkflow` - Deletes a workflow.
* `GetBlueprint` - Retrieves the details of a blueprint.
* `GetBlueprintRun` - Retrieves the details of a blueprint run.
* `GetBlueprintRuns` - Retrieves the details of blueprint runs for a specified blueprint.
* `GetCatalogImportStatus` - Retrieves the status of a migration operation.
* `GetClassifier` - Retrieve a classifier by name.
* `GetClassifiers` - Lists all classifier objects in the Data Catalog.
* `GetColumnStatisticsForPartition` - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* `GetColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* `GetConnection` - Retrieves a connection definition from the Data Catalog.
* `GetConnections` - Retrieves a list of connection definitions from the Data Catalog.
* `GetCrawler` - Retrieves metadata for a specified crawler.
* `GetCrawlerMetrics` - Retrieves metrics about specified crawlers.
* `GetCrawlers` - Retrieves metadata for all crawlers defined in the customer account.
* `GetCustomEntityType` - Retrieves the details of a custom pattern by specifying its name.
* `GetDataCatalogEncryptionSettings` - Retrieves the security configuration for a specified catalog.
* `GetDataQualityResult` - Retrieves the result of a data quality rule evaluation.
* `GetDataQualityRuleRecommendationRun` - Gets the specified recommendation run that was used to generate rules.
* `GetDataQualityRuleset` - Returns an existing ruleset by identifier or name.
* `GetDataQualityRulesetEvaluationRun` - Retrieves a specific run where a ruleset is evaluated against a data source.
* `GetDatabase` - Retrieves the definition of a specified database.
* `GetDatabases` - Retrieves all databases defined in a given Data Catalog.
* `GetDataflowGraph` - Transforms a Python script into a directed acyclic graph (DAG). 
* `GetDevEndpoint` - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `GetDevEndpoints` - <p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `GetJob` - Retrieves an existing job definition.
* `GetJobBookmark` - <p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* `GetJobRun` - Retrieves the metadata for a given job run.
* `GetJobRuns` - Retrieves metadata for all runs of a given job definition.
* `GetJobs` - Retrieves all current job definitions.
* `GetMLTaskRun` - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* `GetMLTaskRuns` - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* `GetMLTransform` - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* `GetMLTransforms` - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* `GetMapping` - Creates mappings.
* `GetPartition` - Retrieves information about a specified partition.
* `GetPartitionIndexes` - Retrieves the partition indexes associated with a table.
* `GetPartitions` - Retrieves information about the partitions in a table.
* `GetPlan` - Gets code to perform a specified mapping.
* `GetRegistry` - Describes the specified registry in detail.
* `GetResourcePolicies` - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* `GetResourcePolicy` - Retrieves a specified resource policy.
* `GetSchema` - Describes the specified schema in detail.
* `GetSchemaByDefinition` - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* `GetSchemaVersion` - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* `GetSchemaVersionsDiff` - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* `GetSecurityConfiguration` - Retrieves a specified security configuration.
* `GetSecurityConfigurations` - Retrieves a list of all security configurations.
* `GetSession` - Retrieves the session.
* `GetStatement` - Retrieves the statement.
* `GetTable` - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* `GetTableVersion` - Retrieves a specified version of a table.
* `GetTableVersions` - Retrieves a list of strings that identify available versions of a specified table.
* `GetTables` - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* `GetTags` - Retrieves a list of tags associated with a resource.
* `GetTrigger` - Retrieves the definition of a trigger.
* `GetTriggers` - Gets all the triggers associated with a job.
* `GetUnfilteredPartitionMetadata` - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
* `GetUnfilteredPartitionsMetadata` - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
* `GetUnfilteredTableMetadata` - <p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
* `GetUserDefinedFunction` - Retrieves a specified function definition from the Data Catalog.
* `GetUserDefinedFunctions` - Retrieves multiple function definitions from the Data Catalog.
* `GetWorkflow` - Retrieves resource metadata for a workflow.
* `GetWorkflowRun` - Retrieves the metadata for a given workflow run. 
* `GetWorkflowRunProperties` - Retrieves the workflow run properties which were set during the run.
* `GetWorkflowRuns` - Retrieves metadata for all runs of a given workflow.
* `ImportCatalogToGlue` - Imports an existing Amazon Athena Data Catalog to Glue.
* `ListBlueprints` - Lists all the blueprint names in an account.
* `ListCrawlers` - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `ListCrawls` - <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>
* `ListCustomEntityTypes` - Lists all the custom patterns that have been created.
* `ListDataQualityResults` - Returns all data quality execution results for your account.
* `ListDataQualityRuleRecommendationRuns` - Lists the recommendation runs meeting the filter criteria.
* `ListDataQualityRulesetEvaluationRuns` - Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.
* `ListDataQualityRulesets` - Returns a paginated list of rulesets for the specified list of Glue tables.
* `ListDevEndpoints` - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `ListJobs` - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `ListMLTransforms` -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* `ListRegistries` - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* `ListSchemaVersions` - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* `ListSchemas` - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* `ListSessions` - Retrieve a list of sessions.
* `ListStatements` - Lists statements for the session.
* `ListTriggers` - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `ListWorkflows` - Lists names of workflows created in the account.
* `PutDataCatalogEncryptionSettings` - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* `PutResourcePolicy` - Sets the Data Catalog resource policy for access control.
* `PutSchemaVersionMetadata` - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* `PutWorkflowRunProperties` - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* `QuerySchemaVersionMetadata` - Queries for the schema version metadata information. 
* `RegisterSchemaVersion` - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* `RemoveSchemaVersionMetadata` - Removes a key value pair from the schema version metadata for the specified schema version ID.
* `ResetJobBookmark` - <p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* `ResumeWorkflowRun` - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* `RunStatement` - Executes the statement.
* `SearchTables` - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* `StartBlueprintRun` - Starts a new run of the specified blueprint.
* `StartCrawler` - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* `StartCrawlerSchedule` - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* `StartDataQualityRuleRecommendationRun` - Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
* `StartDataQualityRulesetEvaluationRun` - Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.
* `StartExportLabelsTaskRun` - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* `StartImportLabelsTaskRun` - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* `StartJobRun` - Starts a job run using a job definition.
* `StartMLEvaluationTaskRun` - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* `StartMLLabelingSetGenerationTaskRun` - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* `StartTrigger` - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* `StartWorkflowRun` - Starts a new run of the specified workflow.
* `StopCrawler` - If the specified crawler is running, stops the crawl.
* `StopCrawlerSchedule` - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* `StopSession` - Stops the session.
* `StopTrigger` - Stops a specified trigger.
* `StopWorkflowRun` - Stops the execution of the specified workflow run.
* `TagResource` - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* `UntagResource` - Removes tags from a resource.
* `UpdateBlueprint` - Updates a registered blueprint.
* `UpdateClassifier` - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* `UpdateColumnStatisticsForPartition` - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* `UpdateColumnStatisticsForTable` - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* `UpdateConnection` - Updates a connection definition in the Data Catalog.
* `UpdateCrawler` - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* `UpdateCrawlerSchedule` - Updates the schedule of a crawler using a <code>cron</code> expression. 
* `UpdateDataQualityRuleset` - Updates the specified data quality ruleset.
* `UpdateDatabase` - Updates an existing database definition in a Data Catalog.
* `UpdateDevEndpoint` - Updates a specified development endpoint.
* `UpdateJob` - Updates an existing job definition. The previous job definition is completely overwritten by this information.
* `UpdateJobFromSourceControl` - <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>
* `UpdateMLTransform` - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* `UpdatePartition` - Updates a partition.
* `UpdateRegistry` - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* `UpdateSchema` - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* `UpdateSourceControlFromJob` - <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>
* `UpdateTable` - Updates a metadata table in the Data Catalog.
* `UpdateTrigger` - Updates a trigger definition.
* `UpdateUserDefinedFunction` - Updates an existing function definition in the Data Catalog.
* `UpdateWorkflow` - Updates an existing workflow.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
