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
    res, err := s.BatchCreatePartition(ctx, operations.BatchCreatePartitionRequest{
        BatchCreatePartitionRequest: shared.BatchCreatePartitionRequest{
            CatalogID: sdk.String("corrupti"),
            DatabaseName: "provident",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
                    Parameters: map[string]string{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "tempora",
                            "suscipit",
                            "molestiae",
                            "minus",
                        },
                        BucketColumns: []string{
                            "voluptatum",
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("temporibus"),
                                Name: "Erica Bogisich III",
                                Parameters: map[string]string{
                                    "sapiente": "quo",
                                    "odit": "at",
                                    "at": "maiores",
                                    "molestiae": "quod",
                                },
                                Type: sdk.String("quod"),
                            },
                            shared.Column{
                                Comment: sdk.String("esse"),
                                Name: "Miss Lowell Parisian",
                                Parameters: map[string]string{
                                    "fugit": "deleniti",
                                    "hic": "optio",
                                    "totam": "beatae",
                                },
                                Type: sdk.String("commodi"),
                            },
                            shared.Column{
                                Comment: sdk.String("molestiae"),
                                Name: "Norma Ryan",
                                Parameters: map[string]string{
                                    "excepturi": "aspernatur",
                                },
                                Type: sdk.String("perferendis"),
                            },
                            shared.Column{
                                Comment: sdk.String("ad"),
                                Name: "Louis Moore",
                                Parameters: map[string]string{
                                    "hic": "saepe",
                                    "fuga": "in",
                                },
                                Type: sdk.String("corporis"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("iste"),
                        Location: sdk.String("iure"),
                        NumberOfBuckets: sdk.Int64(902349),
                        OutputFormat: sdk.String("quidem"),
                        Parameters: map[string]string{
                            "ipsa": "reiciendis",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("est"),
                                SchemaArn: sdk.String("mollitia"),
                                SchemaName: sdk.String("laborum"),
                            },
                            SchemaVersionID: sdk.String("dolores"),
                            SchemaVersionNumber: sdk.Int64(210382),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Rose Rolfson"),
                            Parameters: map[string]string{
                                "minima": "excepturi",
                                "accusantium": "iure",
                            },
                            SerializationLibrary: sdk.String("culpa"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "sapiente",
                                "architecto",
                                "mollitia",
                                "dolorem",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "consequuntur": "repellat",
                                "mollitia": "occaecati",
                                "numquam": "commodi",
                            },
                            SkewedColumnValues: []string{
                                "molestiae",
                                "velit",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "quia",
                                SortOrder: 338007,
                            },
                            shared.Order{
                                Column: "vitae",
                                SortOrder: 674752,
                            },
                            shared.Order{
                                Column: "animi",
                                SortOrder: 317202,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "quo",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2022-01-19T09:45:27.272Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
                    Parameters: map[string]string{
                        "aut": "quasi",
                        "error": "temporibus",
                        "laborum": "quasi",
                        "reiciendis": "voluptatibus",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                        BucketColumns: []string{
                            "voluptate",
                            "cum",
                            "perferendis",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("reprehenderit"),
                                Name: "Shawna Carter",
                                Parameters: map[string]string{
                                    "dicta": "harum",
                                    "enim": "accusamus",
                                },
                                Type: sdk.String("commodi"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("repudiandae"),
                        Location: sdk.String("quae"),
                        NumberOfBuckets: sdk.Int64(216822),
                        OutputFormat: sdk.String("quidem"),
                        Parameters: map[string]string{
                            "excepturi": "pariatur",
                            "modi": "praesentium",
                            "rem": "voluptates",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("quasi"),
                                SchemaArn: sdk.String("repudiandae"),
                                SchemaName: sdk.String("sint"),
                            },
                            SchemaVersionID: sdk.String("veritatis"),
                            SchemaVersionNumber: sdk.Int64(929297),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Erin Altenwerth"),
                            Parameters: map[string]string{
                                "deserunt": "distinctio",
                            },
                            SerializationLibrary: sdk.String("quibusdam"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "modi",
                                "qui",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "cupiditate": "quos",
                                "perferendis": "magni",
                            },
                            SkewedColumnValues: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "tempora",
                                SortOrder: 703737,
                            },
                            shared.Order{
                                Column: "tempore",
                                SortOrder: 288476,
                            },
                            shared.Order{
                                Column: "delectus",
                                SortOrder: 433288,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "eligendi",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2022-03-17T20:21:28.792Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2021-03-17T21:24:26.606Z"),
                    Parameters: map[string]string{
                        "officia": "dolor",
                        "debitis": "a",
                        "dolorum": "in",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "illum",
                            "maiores",
                        },
                        BucketColumns: []string{
                            "dicta",
                            "magnam",
                            "cumque",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("ea"),
                                Name: "Kayla Thompson",
                                Parameters: map[string]string{
                                    "accusamus": "delectus",
                                    "quidem": "provident",
                                },
                                Type: sdk.String("nam"),
                            },
                            shared.Column{
                                Comment: sdk.String("id"),
                                Name: "Jaime Will",
                                Parameters: map[string]string{
                                    "vel": "natus",
                                    "omnis": "molestiae",
                                },
                                Type: sdk.String("perferendis"),
                            },
                            shared.Column{
                                Comment: sdk.String("nihil"),
                                Name: "Verna Olson",
                                Parameters: map[string]string{
                                    "natus": "nobis",
                                    "eum": "vero",
                                },
                                Type: sdk.String("aspernatur"),
                            },
                            shared.Column{
                                Comment: sdk.String("architecto"),
                                Name: "Frances Marks",
                                Parameters: map[string]string{
                                    "sint": "accusantium",
                                    "mollitia": "reiciendis",
                                    "mollitia": "ad",
                                },
                                Type: sdk.String("eum"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("dolor"),
                        Location: sdk.String("necessitatibus"),
                        NumberOfBuckets: sdk.Int64(141264),
                        OutputFormat: sdk.String("nemo"),
                        Parameters: map[string]string{
                            "iure": "doloribus",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("debitis"),
                                SchemaArn: sdk.String("eius"),
                                SchemaName: sdk.String("maxime"),
                            },
                            SchemaVersionID: sdk.String("deleniti"),
                            SchemaVersionNumber: sdk.Int64(703889),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Alice Bradtke"),
                            Parameters: map[string]string{
                                "nihil": "repellat",
                                "quibusdam": "sed",
                                "saepe": "pariatur",
                            },
                            SerializationLibrary: sdk.String("accusantium"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "praesentium",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "magni": "sunt",
                                "quo": "illum",
                                "pariatur": "maxime",
                            },
                            SkewedColumnValues: []string{
                                "excepturi",
                                "odit",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "accusantium",
                                SortOrder: 69167,
                            },
                            shared.Order{
                                Column: "maiores",
                                SortOrder: 697429,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "voluptate",
                        "autem",
                    },
                },
            },
            TableName: "nam",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.BatchCreatePartitionXAmzTargetEnumAwsGlueBatchCreatePartition,
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchCreatePartition](docs/sdk/README.md#batchcreatepartition) - Creates one or more partitions in a batch operation.
* [BatchDeleteConnection](docs/sdk/README.md#batchdeleteconnection) - Deletes a list of connection definitions from the Data Catalog.
* [BatchDeletePartition](docs/sdk/README.md#batchdeletepartition) - Deletes one or more partitions in a batch operation.
* [BatchDeleteTable](docs/sdk/README.md#batchdeletetable) - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* [BatchDeleteTableVersion](docs/sdk/README.md#batchdeletetableversion) - Deletes a specified batch of versions of a table.
* [BatchGetBlueprints](docs/sdk/README.md#batchgetblueprints) - Retrieves information about a list of blueprints.
* [BatchGetCrawlers](docs/sdk/README.md#batchgetcrawlers) - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [BatchGetCustomEntityTypes](docs/sdk/README.md#batchgetcustomentitytypes) - Retrieves the details for the custom patterns specified by a list of names.
* [BatchGetDataQualityResult](docs/sdk/README.md#batchgetdataqualityresult) - Retrieves a list of data quality results for the specified result IDs.
* [BatchGetDevEndpoints](docs/sdk/README.md#batchgetdevendpoints) - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [BatchGetJobs](docs/sdk/README.md#batchgetjobs) - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* [BatchGetPartition](docs/sdk/README.md#batchgetpartition) - Retrieves partitions in a batch request.
* [BatchGetTriggers](docs/sdk/README.md#batchgettriggers) - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [BatchGetWorkflows](docs/sdk/README.md#batchgetworkflows) - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [BatchStopJobRun](docs/sdk/README.md#batchstopjobrun) - Stops one or more job runs for a specified job definition.
* [BatchUpdatePartition](docs/sdk/README.md#batchupdatepartition) - Updates one or more partitions in a batch operation.
* [CancelDataQualityRuleRecommendationRun](docs/sdk/README.md#canceldataqualityrulerecommendationrun) - Cancels the specified recommendation run that was being used to generate rules.
* [CancelDataQualityRulesetEvaluationRun](docs/sdk/README.md#canceldataqualityrulesetevaluationrun) - Cancels a run where a ruleset is being evaluated against a data source.
* [CancelMLTaskRun](docs/sdk/README.md#cancelmltaskrun) - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* [CancelStatement](docs/sdk/README.md#cancelstatement) - Cancels the statement.
* [CheckSchemaVersionValidity](docs/sdk/README.md#checkschemaversionvalidity) - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* [CreateBlueprint](docs/sdk/README.md#createblueprint) - Registers a blueprint with Glue.
* [CreateClassifier](docs/sdk/README.md#createclassifier) - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* [CreateConnection](docs/sdk/README.md#createconnection) - Creates a connection definition in the Data Catalog.
* [CreateCrawler](docs/sdk/README.md#createcrawler) - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* [CreateCustomEntityType](docs/sdk/README.md#createcustomentitytype) - <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
* [CreateDataQualityRuleset](docs/sdk/README.md#createdataqualityruleset) - <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
* [CreateDatabase](docs/sdk/README.md#createdatabase) - Creates a new database in a Data Catalog.
* [CreateDevEndpoint](docs/sdk/README.md#createdevendpoint) - Creates a new development endpoint.
* [CreateJob](docs/sdk/README.md#createjob) - Creates a new job definition.
* [CreateMLTransform](docs/sdk/README.md#createmltransform) - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* [CreatePartition](docs/sdk/README.md#createpartition) - Creates a new partition.
* [CreatePartitionIndex](docs/sdk/README.md#createpartitionindex) - Creates a specified partition index in an existing table.
* [CreateRegistry](docs/sdk/README.md#createregistry) - Creates a new registry which may be used to hold a collection of schemas.
* [CreateSchema](docs/sdk/README.md#createschema) - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* [CreateScript](docs/sdk/README.md#createscript) - Transforms a directed acyclic graph (DAG) into code.
* [CreateSecurityConfiguration](docs/sdk/README.md#createsecurityconfiguration) - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* [CreateSession](docs/sdk/README.md#createsession) - Creates a new session.
* [CreateTable](docs/sdk/README.md#createtable) - Creates a new table definition in the Data Catalog.
* [CreateTrigger](docs/sdk/README.md#createtrigger) - Creates a new trigger.
* [CreateUserDefinedFunction](docs/sdk/README.md#createuserdefinedfunction) - Creates a new function definition in the Data Catalog.
* [CreateWorkflow](docs/sdk/README.md#createworkflow) - Creates a new workflow.
* [DeleteBlueprint](docs/sdk/README.md#deleteblueprint) - Deletes an existing blueprint.
* [DeleteClassifier](docs/sdk/README.md#deleteclassifier) - Removes a classifier from the Data Catalog.
* [DeleteColumnStatisticsForPartition](docs/sdk/README.md#deletecolumnstatisticsforpartition) - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* [DeleteColumnStatisticsForTable](docs/sdk/README.md#deletecolumnstatisticsfortable) - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* [DeleteConnection](docs/sdk/README.md#deleteconnection) - Deletes a connection from the Data Catalog.
* [DeleteCrawler](docs/sdk/README.md#deletecrawler) - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* [DeleteCustomEntityType](docs/sdk/README.md#deletecustomentitytype) - Deletes a custom pattern by specifying its name.
* [DeleteDataQualityRuleset](docs/sdk/README.md#deletedataqualityruleset) - Deletes a data quality ruleset.
* [DeleteDatabase](docs/sdk/README.md#deletedatabase) - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* [DeleteDevEndpoint](docs/sdk/README.md#deletedevendpoint) - Deletes a specified development endpoint.
* [DeleteJob](docs/sdk/README.md#deletejob) - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* [DeleteMLTransform](docs/sdk/README.md#deletemltransform) - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* [DeletePartition](docs/sdk/README.md#deletepartition) - Deletes a specified partition.
* [DeletePartitionIndex](docs/sdk/README.md#deletepartitionindex) - Deletes a specified partition index from an existing table.
* [DeleteRegistry](docs/sdk/README.md#deleteregistry) - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes a specified policy.
* [DeleteSchema](docs/sdk/README.md#deleteschema) - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* [DeleteSchemaVersions](docs/sdk/README.md#deleteschemaversions) - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* [DeleteSecurityConfiguration](docs/sdk/README.md#deletesecurityconfiguration) - Deletes a specified security configuration.
* [DeleteSession](docs/sdk/README.md#deletesession) - Deletes the session.
* [DeleteTable](docs/sdk/README.md#deletetable) - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* [DeleteTableVersion](docs/sdk/README.md#deletetableversion) - Deletes a specified version of a table.
* [DeleteTrigger](docs/sdk/README.md#deletetrigger) - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* [DeleteUserDefinedFunction](docs/sdk/README.md#deleteuserdefinedfunction) - Deletes an existing function definition from the Data Catalog.
* [DeleteWorkflow](docs/sdk/README.md#deleteworkflow) - Deletes a workflow.
* [GetBlueprint](docs/sdk/README.md#getblueprint) - Retrieves the details of a blueprint.
* [GetBlueprintRun](docs/sdk/README.md#getblueprintrun) - Retrieves the details of a blueprint run.
* [GetBlueprintRuns](docs/sdk/README.md#getblueprintruns) - Retrieves the details of blueprint runs for a specified blueprint.
* [GetCatalogImportStatus](docs/sdk/README.md#getcatalogimportstatus) - Retrieves the status of a migration operation.
* [GetClassifier](docs/sdk/README.md#getclassifier) - Retrieve a classifier by name.
* [GetClassifiers](docs/sdk/README.md#getclassifiers) - Lists all classifier objects in the Data Catalog.
* [GetColumnStatisticsForPartition](docs/sdk/README.md#getcolumnstatisticsforpartition) - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* [GetColumnStatisticsForTable](docs/sdk/README.md#getcolumnstatisticsfortable) - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* [GetConnection](docs/sdk/README.md#getconnection) - Retrieves a connection definition from the Data Catalog.
* [GetConnections](docs/sdk/README.md#getconnections) - Retrieves a list of connection definitions from the Data Catalog.
* [GetCrawler](docs/sdk/README.md#getcrawler) - Retrieves metadata for a specified crawler.
* [GetCrawlerMetrics](docs/sdk/README.md#getcrawlermetrics) - Retrieves metrics about specified crawlers.
* [GetCrawlers](docs/sdk/README.md#getcrawlers) - Retrieves metadata for all crawlers defined in the customer account.
* [GetCustomEntityType](docs/sdk/README.md#getcustomentitytype) - Retrieves the details of a custom pattern by specifying its name.
* [GetDataCatalogEncryptionSettings](docs/sdk/README.md#getdatacatalogencryptionsettings) - Retrieves the security configuration for a specified catalog.
* [GetDataQualityResult](docs/sdk/README.md#getdataqualityresult) - Retrieves the result of a data quality rule evaluation.
* [GetDataQualityRuleRecommendationRun](docs/sdk/README.md#getdataqualityrulerecommendationrun) - Gets the specified recommendation run that was used to generate rules.
* [GetDataQualityRuleset](docs/sdk/README.md#getdataqualityruleset) - Returns an existing ruleset by identifier or name.
* [GetDataQualityRulesetEvaluationRun](docs/sdk/README.md#getdataqualityrulesetevaluationrun) - Retrieves a specific run where a ruleset is evaluated against a data source.
* [GetDatabase](docs/sdk/README.md#getdatabase) - Retrieves the definition of a specified database.
* [GetDatabases](docs/sdk/README.md#getdatabases) - Retrieves all databases defined in a given Data Catalog.
* [GetDataflowGraph](docs/sdk/README.md#getdataflowgraph) - Transforms a Python script into a directed acyclic graph (DAG). 
* [GetDevEndpoint](docs/sdk/README.md#getdevendpoint) - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* [GetDevEndpoints](docs/sdk/README.md#getdevendpoints) - <p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* [GetJob](docs/sdk/README.md#getjob) - Retrieves an existing job definition.
* [GetJobBookmark](docs/sdk/README.md#getjobbookmark) - <p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* [GetJobRun](docs/sdk/README.md#getjobrun) - Retrieves the metadata for a given job run.
* [GetJobRuns](docs/sdk/README.md#getjobruns) - Retrieves metadata for all runs of a given job definition.
* [GetJobs](docs/sdk/README.md#getjobs) - Retrieves all current job definitions.
* [GetMLTaskRun](docs/sdk/README.md#getmltaskrun) - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* [GetMLTaskRuns](docs/sdk/README.md#getmltaskruns) - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* [GetMLTransform](docs/sdk/README.md#getmltransform) - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* [GetMLTransforms](docs/sdk/README.md#getmltransforms) - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* [GetMapping](docs/sdk/README.md#getmapping) - Creates mappings.
* [GetPartition](docs/sdk/README.md#getpartition) - Retrieves information about a specified partition.
* [GetPartitionIndexes](docs/sdk/README.md#getpartitionindexes) - Retrieves the partition indexes associated with a table.
* [GetPartitions](docs/sdk/README.md#getpartitions) - Retrieves information about the partitions in a table.
* [GetPlan](docs/sdk/README.md#getplan) - Gets code to perform a specified mapping.
* [GetRegistry](docs/sdk/README.md#getregistry) - Describes the specified registry in detail.
* [GetResourcePolicies](docs/sdk/README.md#getresourcepolicies) - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* [GetResourcePolicy](docs/sdk/README.md#getresourcepolicy) - Retrieves a specified resource policy.
* [GetSchema](docs/sdk/README.md#getschema) - Describes the specified schema in detail.
* [GetSchemaByDefinition](docs/sdk/README.md#getschemabydefinition) - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* [GetSchemaVersion](docs/sdk/README.md#getschemaversion) - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* [GetSchemaVersionsDiff](docs/sdk/README.md#getschemaversionsdiff) - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* [GetSecurityConfiguration](docs/sdk/README.md#getsecurityconfiguration) - Retrieves a specified security configuration.
* [GetSecurityConfigurations](docs/sdk/README.md#getsecurityconfigurations) - Retrieves a list of all security configurations.
* [GetSession](docs/sdk/README.md#getsession) - Retrieves the session.
* [GetStatement](docs/sdk/README.md#getstatement) - Retrieves the statement.
* [GetTable](docs/sdk/README.md#gettable) - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* [GetTableVersion](docs/sdk/README.md#gettableversion) - Retrieves a specified version of a table.
* [GetTableVersions](docs/sdk/README.md#gettableversions) - Retrieves a list of strings that identify available versions of a specified table.
* [GetTables](docs/sdk/README.md#gettables) - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* [GetTags](docs/sdk/README.md#gettags) - Retrieves a list of tags associated with a resource.
* [GetTrigger](docs/sdk/README.md#gettrigger) - Retrieves the definition of a trigger.
* [GetTriggers](docs/sdk/README.md#gettriggers) - Gets all the triggers associated with a job.
* [GetUnfilteredPartitionMetadata](docs/sdk/README.md#getunfilteredpartitionmetadata) - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
* [GetUnfilteredPartitionsMetadata](docs/sdk/README.md#getunfilteredpartitionsmetadata) - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
* [GetUnfilteredTableMetadata](docs/sdk/README.md#getunfilteredtablemetadata) - <p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
* [GetUserDefinedFunction](docs/sdk/README.md#getuserdefinedfunction) - Retrieves a specified function definition from the Data Catalog.
* [GetUserDefinedFunctions](docs/sdk/README.md#getuserdefinedfunctions) - Retrieves multiple function definitions from the Data Catalog.
* [GetWorkflow](docs/sdk/README.md#getworkflow) - Retrieves resource metadata for a workflow.
* [GetWorkflowRun](docs/sdk/README.md#getworkflowrun) - Retrieves the metadata for a given workflow run. 
* [GetWorkflowRunProperties](docs/sdk/README.md#getworkflowrunproperties) - Retrieves the workflow run properties which were set during the run.
* [GetWorkflowRuns](docs/sdk/README.md#getworkflowruns) - Retrieves metadata for all runs of a given workflow.
* [ImportCatalogToGlue](docs/sdk/README.md#importcatalogtoglue) - Imports an existing Amazon Athena Data Catalog to Glue.
* [ListBlueprints](docs/sdk/README.md#listblueprints) - Lists all the blueprint names in an account.
* [ListCrawlers](docs/sdk/README.md#listcrawlers) - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [ListCrawls](docs/sdk/README.md#listcrawls) - <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>
* [ListCustomEntityTypes](docs/sdk/README.md#listcustomentitytypes) - Lists all the custom patterns that have been created.
* [ListDataQualityResults](docs/sdk/README.md#listdataqualityresults) - Returns all data quality execution results for your account.
* [ListDataQualityRuleRecommendationRuns](docs/sdk/README.md#listdataqualityrulerecommendationruns) - Lists the recommendation runs meeting the filter criteria.
* [ListDataQualityRulesetEvaluationRuns](docs/sdk/README.md#listdataqualityrulesetevaluationruns) - Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.
* [ListDataQualityRulesets](docs/sdk/README.md#listdataqualityrulesets) - Returns a paginated list of rulesets for the specified list of Glue tables.
* [ListDevEndpoints](docs/sdk/README.md#listdevendpoints) - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [ListJobs](docs/sdk/README.md#listjobs) - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [ListMLTransforms](docs/sdk/README.md#listmltransforms) -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* [ListRegistries](docs/sdk/README.md#listregistries) - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* [ListSchemaVersions](docs/sdk/README.md#listschemaversions) - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* [ListSchemas](docs/sdk/README.md#listschemas) - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* [ListSessions](docs/sdk/README.md#listsessions) - Retrieve a list of sessions.
* [ListStatements](docs/sdk/README.md#liststatements) - Lists statements for the session.
* [ListTriggers](docs/sdk/README.md#listtriggers) - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [ListWorkflows](docs/sdk/README.md#listworkflows) - Lists names of workflows created in the account.
* [PutDataCatalogEncryptionSettings](docs/sdk/README.md#putdatacatalogencryptionsettings) - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Sets the Data Catalog resource policy for access control.
* [PutSchemaVersionMetadata](docs/sdk/README.md#putschemaversionmetadata) - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* [PutWorkflowRunProperties](docs/sdk/README.md#putworkflowrunproperties) - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* [QuerySchemaVersionMetadata](docs/sdk/README.md#queryschemaversionmetadata) - Queries for the schema version metadata information. 
* [RegisterSchemaVersion](docs/sdk/README.md#registerschemaversion) - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* [RemoveSchemaVersionMetadata](docs/sdk/README.md#removeschemaversionmetadata) - Removes a key value pair from the schema version metadata for the specified schema version ID.
* [ResetJobBookmark](docs/sdk/README.md#resetjobbookmark) - <p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* [ResumeWorkflowRun](docs/sdk/README.md#resumeworkflowrun) - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* [RunStatement](docs/sdk/README.md#runstatement) - Executes the statement.
* [SearchTables](docs/sdk/README.md#searchtables) - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* [StartBlueprintRun](docs/sdk/README.md#startblueprintrun) - Starts a new run of the specified blueprint.
* [StartCrawler](docs/sdk/README.md#startcrawler) - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* [StartCrawlerSchedule](docs/sdk/README.md#startcrawlerschedule) - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* [StartDataQualityRuleRecommendationRun](docs/sdk/README.md#startdataqualityrulerecommendationrun) - Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
* [StartDataQualityRulesetEvaluationRun](docs/sdk/README.md#startdataqualityrulesetevaluationrun) - Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.
* [StartExportLabelsTaskRun](docs/sdk/README.md#startexportlabelstaskrun) - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* [StartImportLabelsTaskRun](docs/sdk/README.md#startimportlabelstaskrun) - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* [StartJobRun](docs/sdk/README.md#startjobrun) - Starts a job run using a job definition.
* [StartMLEvaluationTaskRun](docs/sdk/README.md#startmlevaluationtaskrun) - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* [StartMLLabelingSetGenerationTaskRun](docs/sdk/README.md#startmllabelingsetgenerationtaskrun) - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* [StartTrigger](docs/sdk/README.md#starttrigger) - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* [StartWorkflowRun](docs/sdk/README.md#startworkflowrun) - Starts a new run of the specified workflow.
* [StopCrawler](docs/sdk/README.md#stopcrawler) - If the specified crawler is running, stops the crawl.
* [StopCrawlerSchedule](docs/sdk/README.md#stopcrawlerschedule) - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* [StopSession](docs/sdk/README.md#stopsession) - Stops the session.
* [StopTrigger](docs/sdk/README.md#stoptrigger) - Stops a specified trigger.
* [StopWorkflowRun](docs/sdk/README.md#stopworkflowrun) - Stops the execution of the specified workflow run.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [UpdateBlueprint](docs/sdk/README.md#updateblueprint) - Updates a registered blueprint.
* [UpdateClassifier](docs/sdk/README.md#updateclassifier) - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* [UpdateColumnStatisticsForPartition](docs/sdk/README.md#updatecolumnstatisticsforpartition) - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* [UpdateColumnStatisticsForTable](docs/sdk/README.md#updatecolumnstatisticsfortable) - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* [UpdateConnection](docs/sdk/README.md#updateconnection) - Updates a connection definition in the Data Catalog.
* [UpdateCrawler](docs/sdk/README.md#updatecrawler) - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* [UpdateCrawlerSchedule](docs/sdk/README.md#updatecrawlerschedule) - Updates the schedule of a crawler using a <code>cron</code> expression. 
* [UpdateDataQualityRuleset](docs/sdk/README.md#updatedataqualityruleset) - Updates the specified data quality ruleset.
* [UpdateDatabase](docs/sdk/README.md#updatedatabase) - Updates an existing database definition in a Data Catalog.
* [UpdateDevEndpoint](docs/sdk/README.md#updatedevendpoint) - Updates a specified development endpoint.
* [UpdateJob](docs/sdk/README.md#updatejob) - Updates an existing job definition. The previous job definition is completely overwritten by this information.
* [UpdateJobFromSourceControl](docs/sdk/README.md#updatejobfromsourcecontrol) - <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>
* [UpdateMLTransform](docs/sdk/README.md#updatemltransform) - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* [UpdatePartition](docs/sdk/README.md#updatepartition) - Updates a partition.
* [UpdateRegistry](docs/sdk/README.md#updateregistry) - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* [UpdateSchema](docs/sdk/README.md#updateschema) - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* [UpdateSourceControlFromJob](docs/sdk/README.md#updatesourcecontrolfromjob) - <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>
* [UpdateTable](docs/sdk/README.md#updatetable) - Updates a metadata table in the Data Catalog.
* [UpdateTrigger](docs/sdk/README.md#updatetrigger) - Updates a trigger definition.
* [UpdateUserDefinedFunction](docs/sdk/README.md#updateuserdefinedfunction) - Updates an existing function definition in the Data Catalog.
* [UpdateWorkflow](docs/sdk/README.md#updateworkflow) - Updates an existing workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
