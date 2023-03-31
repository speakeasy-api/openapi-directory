# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreatePartitionXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchCreatePartitionHeaders;
import org.openapis.openapi.models.operations.BatchCreatePartitionRequest;
import org.openapis.openapi.models.operations.BatchCreatePartitionResponse;
import org.openapis.openapi.models.shared.BatchCreatePartitionRequest;
import org.openapis.openapi.models.shared.PartitionInput;
import org.openapis.openapi.models.shared.StorageDescriptor;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.SkewedInfo;
import org.openapis.openapi.models.shared.SerDeInfo;
import org.openapis.openapi.models.shared.SchemaReference;
import org.openapis.openapi.models.shared.SchemaId;
import org.openapis.openapi.models.shared.Column;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchCreatePartitionRequest req = new BatchCreatePartitionRequest() {{
                headers = new BatchCreatePartitionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSGlue.BatchCreatePartition";
                }};
                request = new BatchCreatePartitionRequest() {{
                    catalogId = "illum";
                    databaseName = "vel";
                    partitionInputList = new org.openapis.openapi.models.shared.PartitionInput[]{{
                        add(new PartitionInput() {{
                            lastAccessTime = "2022-03-26T09:37:56.283Z";
                            lastAnalyzedTime = "2022-09-14T09:35:47.986Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                bucketColumns = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "perferendis";
                                        name = "ipsam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("sapiente", "quo");
                                            put("odit", "at");
                                            put("at", "maiores");
                                            put("molestiae", "quod");
                                        }};
                                        type = "quod";
                                    }}),
                                    add(new Column() {{
                                        comment = "esse";
                                        name = "totam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("dolorum", "dicta");
                                            put("nam", "officia");
                                            put("occaecati", "fugit");
                                            put("deleniti", "hic");
                                        }};
                                        type = "optio";
                                    }}),
                                    add(new Column() {{
                                        comment = "totam";
                                        name = "beatae";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("molestiae", "modi");
                                            put("qui", "impedit");
                                        }};
                                        type = "cum";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "esse";
                                location = "ipsum";
                                numberOfBuckets = 568434;
                                outputFormat = "aspernatur";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("ad", "natus");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "sed";
                                        schemaArn = "iste";
                                        schemaName = "dolor";
                                    }};
                                    schemaVersionId = "natus";
                                    schemaVersionNumber = 386489;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "hic";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("fuga", "in");
                                        put("corporis", "iste");
                                        put("iure", "saepe");
                                        put("quidem", "architecto");
                                    }};
                                    serializationLibrary = "ipsa";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("est"),
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("corporis", "explicabo");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("enim"),
                                        add("omnis"),
                                        add("nemo"),
                                        add("minima"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "accusantium";
                                        sortOrder = 438601;
                                    }}),
                                    add(new Order() {{
                                        column = "culpa";
                                        sortOrder = 988374;
                                    }}),
                                    add(new Order() {{
                                        column = "sapiente";
                                        sortOrder = 102044;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("dolorem"),
                                add("culpa"),
                                add("consequuntur"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "2021-01-15T20:18:47.519Z";
                            lastAnalyzedTime = "2022-06-30T02:19:51.375Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("quam", "molestiae");
                                put("velit", "error");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("quis"),
                                }};
                                bucketColumns = new String[]{{
                                    add("laborum"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "enim";
                                        name = "odit";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("sequi", "tenetur");
                                            put("ipsam", "id");
                                            put("possimus", "aut");
                                            put("quasi", "error");
                                        }};
                                        type = "temporibus";
                                    }}),
                                    add(new Column() {{
                                        comment = "laborum";
                                        name = "quasi";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "vero");
                                            put("nihil", "praesentium");
                                            put("voluptatibus", "ipsa");
                                            put("omnis", "voluptate");
                                        }};
                                        type = "cum";
                                    }}),
                                    add(new Column() {{
                                        comment = "perferendis";
                                        name = "doloremque";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("ut", "maiores");
                                            put("dicta", "corporis");
                                        }};
                                        type = "dolore";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "iusto";
                                location = "dicta";
                                numberOfBuckets = 688661;
                                outputFormat = "enim";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("commodi", "repudiandae");
                                    put("quae", "ipsum");
                                    put("quidem", "molestias");
                                    put("excepturi", "pariatur");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "modi";
                                        schemaArn = "praesentium";
                                        schemaName = "rem";
                                    }};
                                    schemaVersionId = "voluptates";
                                    schemaVersionNumber = 93940;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "repudiandae";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("veritatis", "itaque");
                                        put("incidunt", "enim");
                                        put("consequatur", "est");
                                    }};
                                    serializationLibrary = "quibusdam";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("deserunt"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("quibusdam", "labore");
                                        put("modi", "qui");
                                        put("aliquid", "cupiditate");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("perferendis"),
                                        add("magni"),
                                        add("assumenda"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "alias";
                                        sortOrder = 146441;
                                    }}),
                                    add(new Order() {{
                                        column = "dolorum";
                                        sortOrder = 569618;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("facilis"),
                                add("tempore"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "2022-01-14T19:13:42.009Z";
                            lastAnalyzedTime = "2022-10-02T04:55:20.234Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("sint", "aliquid");
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                                put("dolor", "debitis");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("dolorum"),
                                    add("in"),
                                    add("in"),
                                    add("illum"),
                                }};
                                bucketColumns = new String[]{{
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "ea";
                                        name = "aliquid";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("accusamus", "non");
                                            put("occaecati", "enim");
                                            put("accusamus", "delectus");
                                        }};
                                        type = "quidem";
                                    }}),
                                    add(new Column() {{
                                        comment = "provident";
                                        name = "nam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("blanditiis", "deleniti");
                                            put("sapiente", "amet");
                                            put("deserunt", "nisi");
                                        }};
                                        type = "vel";
                                    }}),
                                    add(new Column() {{
                                        comment = "natus";
                                        name = "omnis";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "nihil");
                                            put("magnam", "distinctio");
                                        }};
                                        type = "id";
                                    }}),
                                    add(new Column() {{
                                        comment = "labore";
                                        name = "labore";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("natus", "nobis");
                                            put("eum", "vero");
                                        }};
                                        type = "aspernatur";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "architecto";
                                location = "magnam";
                                numberOfBuckets = 92373;
                                outputFormat = "excepturi";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("provident", "quos");
                                    put("sint", "accusantium");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "mollitia";
                                        schemaArn = "reiciendis";
                                        schemaName = "mollitia";
                                    }};
                                    schemaVersionId = "ad";
                                    schemaVersionNumber = 431418;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "dolor";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("odit", "nemo");
                                        put("quasi", "iure");
                                        put("doloribus", "debitis");
                                        put("eius", "maxime");
                                    }};
                                    serializationLibrary = "deleniti";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("in"),
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("ullam", "expedita");
                                        put("nihil", "repellat");
                                        put("quibusdam", "sed");
                                        put("saepe", "pariatur");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("consequuntur"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "natus";
                                        sortOrder = 166847;
                                    }}),
                                    add(new Order() {{
                                        column = "sunt";
                                        sortOrder = 779051;
                                    }}),
                                    add(new Order() {{
                                        column = "illum";
                                        sortOrder = 864934;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("ea"),
                                add("excepturi"),
                                add("odit"),
                                add("ea"),
                            }};
                        }}),
                    }};
                    tableName = "accusantium";
                }};
            }};            

            BatchCreatePartitionResponse res = sdk.batchCreatePartition(req);

            if (res.batchCreatePartitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchCreatePartition` - Creates one or more partitions in a batch operation.
* `batchDeleteConnection` - Deletes a list of connection definitions from the Data Catalog.
* `batchDeletePartition` - Deletes one or more partitions in a batch operation.
* `batchDeleteTable` - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `batchDeleteTableVersion` - Deletes a specified batch of versions of a table.
* `batchGetBlueprints` - Retrieves information about a list of blueprints.
* `batchGetCrawlers` - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetCustomEntityTypes` - Retrieves the details for the custom patterns specified by a list of names.
* `batchGetDataQualityResult` - Retrieves a list of data quality results for the specified result IDs.
* `batchGetDevEndpoints` - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetJobs` - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* `batchGetPartition` - Retrieves partitions in a batch request.
* `batchGetTriggers` - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetWorkflows` - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchStopJobRun` - Stops one or more job runs for a specified job definition.
* `batchUpdatePartition` - Updates one or more partitions in a batch operation.
* `cancelDataQualityRuleRecommendationRun` - Cancels the specified recommendation run that was being used to generate rules.
* `cancelDataQualityRulesetEvaluationRun` - Cancels a run where a ruleset is being evaluated against a data source.
* `cancelMLTaskRun` - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* `cancelStatement` - Cancels the statement.
* `checkSchemaVersionValidity` - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* `createBlueprint` - Registers a blueprint with Glue.
* `createClassifier` - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* `createConnection` - Creates a connection definition in the Data Catalog.
* `createCrawler` - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* `createCustomEntityType` - <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
* `createDataQualityRuleset` - <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
* `createDatabase` - Creates a new database in a Data Catalog.
* `createDevEndpoint` - Creates a new development endpoint.
* `createJob` - Creates a new job definition.
* `createMLTransform` - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* `createPartition` - Creates a new partition.
* `createPartitionIndex` - Creates a specified partition index in an existing table.
* `createRegistry` - Creates a new registry which may be used to hold a collection of schemas.
* `createSchema` - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* `createScript` - Transforms a directed acyclic graph (DAG) into code.
* `createSecurityConfiguration` - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* `createSession` - Creates a new session.
* `createTable` - Creates a new table definition in the Data Catalog.
* `createTrigger` - Creates a new trigger.
* `createUserDefinedFunction` - Creates a new function definition in the Data Catalog.
* `createWorkflow` - Creates a new workflow.
* `deleteBlueprint` - Deletes an existing blueprint.
* `deleteClassifier` - Removes a classifier from the Data Catalog.
* `deleteColumnStatisticsForPartition` - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* `deleteColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* `deleteConnection` - Deletes a connection from the Data Catalog.
* `deleteCrawler` - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* `deleteCustomEntityType` - Deletes a custom pattern by specifying its name.
* `deleteDataQualityRuleset` - Deletes a data quality ruleset.
* `deleteDatabase` - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* `deleteDevEndpoint` - Deletes a specified development endpoint.
* `deleteJob` - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* `deleteMLTransform` - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* `deletePartition` - Deletes a specified partition.
* `deletePartitionIndex` - Deletes a specified partition index from an existing table.
* `deleteRegistry` - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* `deleteResourcePolicy` - Deletes a specified policy.
* `deleteSchema` - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* `deleteSchemaVersions` - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* `deleteSecurityConfiguration` - Deletes a specified security configuration.
* `deleteSession` - Deletes the session.
* `deleteTable` - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `deleteTableVersion` - Deletes a specified version of a table.
* `deleteTrigger` - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* `deleteUserDefinedFunction` - Deletes an existing function definition from the Data Catalog.
* `deleteWorkflow` - Deletes a workflow.
* `getBlueprint` - Retrieves the details of a blueprint.
* `getBlueprintRun` - Retrieves the details of a blueprint run.
* `getBlueprintRuns` - Retrieves the details of blueprint runs for a specified blueprint.
* `getCatalogImportStatus` - Retrieves the status of a migration operation.
* `getClassifier` - Retrieve a classifier by name.
* `getClassifiers` - Lists all classifier objects in the Data Catalog.
* `getColumnStatisticsForPartition` - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* `getColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* `getConnection` - Retrieves a connection definition from the Data Catalog.
* `getConnections` - Retrieves a list of connection definitions from the Data Catalog.
* `getCrawler` - Retrieves metadata for a specified crawler.
* `getCrawlerMetrics` - Retrieves metrics about specified crawlers.
* `getCrawlers` - Retrieves metadata for all crawlers defined in the customer account.
* `getCustomEntityType` - Retrieves the details of a custom pattern by specifying its name.
* `getDataCatalogEncryptionSettings` - Retrieves the security configuration for a specified catalog.
* `getDataQualityResult` - Retrieves the result of a data quality rule evaluation.
* `getDataQualityRuleRecommendationRun` - Gets the specified recommendation run that was used to generate rules.
* `getDataQualityRuleset` - Returns an existing ruleset by identifier or name.
* `getDataQualityRulesetEvaluationRun` - Retrieves a specific run where a ruleset is evaluated against a data source.
* `getDatabase` - Retrieves the definition of a specified database.
* `getDatabases` - Retrieves all databases defined in a given Data Catalog.
* `getDataflowGraph` - Transforms a Python script into a directed acyclic graph (DAG). 
* `getDevEndpoint` - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `getDevEndpoints` - <p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `getJob` - Retrieves an existing job definition.
* `getJobBookmark` - <p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* `getJobRun` - Retrieves the metadata for a given job run.
* `getJobRuns` - Retrieves metadata for all runs of a given job definition.
* `getJobs` - Retrieves all current job definitions.
* `getMLTaskRun` - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* `getMLTaskRuns` - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* `getMLTransform` - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* `getMLTransforms` - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* `getMapping` - Creates mappings.
* `getPartition` - Retrieves information about a specified partition.
* `getPartitionIndexes` - Retrieves the partition indexes associated with a table.
* `getPartitions` - Retrieves information about the partitions in a table.
* `getPlan` - Gets code to perform a specified mapping.
* `getRegistry` - Describes the specified registry in detail.
* `getResourcePolicies` - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* `getResourcePolicy` - Retrieves a specified resource policy.
* `getSchema` - Describes the specified schema in detail.
* `getSchemaByDefinition` - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* `getSchemaVersion` - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* `getSchemaVersionsDiff` - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* `getSecurityConfiguration` - Retrieves a specified security configuration.
* `getSecurityConfigurations` - Retrieves a list of all security configurations.
* `getSession` - Retrieves the session.
* `getStatement` - Retrieves the statement.
* `getTable` - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* `getTableVersion` - Retrieves a specified version of a table.
* `getTableVersions` - Retrieves a list of strings that identify available versions of a specified table.
* `getTables` - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* `getTags` - Retrieves a list of tags associated with a resource.
* `getTrigger` - Retrieves the definition of a trigger.
* `getTriggers` - Gets all the triggers associated with a job.
* `getUnfilteredPartitionMetadata` - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
* `getUnfilteredPartitionsMetadata` - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
* `getUnfilteredTableMetadata` - <p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
* `getUserDefinedFunction` - Retrieves a specified function definition from the Data Catalog.
* `getUserDefinedFunctions` - Retrieves multiple function definitions from the Data Catalog.
* `getWorkflow` - Retrieves resource metadata for a workflow.
* `getWorkflowRun` - Retrieves the metadata for a given workflow run. 
* `getWorkflowRunProperties` - Retrieves the workflow run properties which were set during the run.
* `getWorkflowRuns` - Retrieves metadata for all runs of a given workflow.
* `importCatalogToGlue` - Imports an existing Amazon Athena Data Catalog to Glue.
* `listBlueprints` - Lists all the blueprint names in an account.
* `listCrawlers` - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listCrawls` - <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>
* `listCustomEntityTypes` - Lists all the custom patterns that have been created.
* `listDataQualityResults` - Returns all data quality execution results for your account.
* `listDataQualityRuleRecommendationRuns` - Lists the recommendation runs meeting the filter criteria.
* `listDataQualityRulesetEvaluationRuns` - Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.
* `listDataQualityRulesets` - Returns a paginated list of rulesets for the specified list of Glue tables.
* `listDevEndpoints` - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listJobs` - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listMLTransforms` -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* `listRegistries` - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* `listSchemaVersions` - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* `listSchemas` - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* `listSessions` - Retrieve a list of sessions.
* `listStatements` - Lists statements for the session.
* `listTriggers` - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listWorkflows` - Lists names of workflows created in the account.
* `putDataCatalogEncryptionSettings` - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* `putResourcePolicy` - Sets the Data Catalog resource policy for access control.
* `putSchemaVersionMetadata` - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* `putWorkflowRunProperties` - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* `querySchemaVersionMetadata` - Queries for the schema version metadata information. 
* `registerSchemaVersion` - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* `removeSchemaVersionMetadata` - Removes a key value pair from the schema version metadata for the specified schema version ID.
* `resetJobBookmark` - <p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* `resumeWorkflowRun` - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* `runStatement` - Executes the statement.
* `searchTables` - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* `startBlueprintRun` - Starts a new run of the specified blueprint.
* `startCrawler` - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* `startCrawlerSchedule` - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* `startDataQualityRuleRecommendationRun` - Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
* `startDataQualityRulesetEvaluationRun` - Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.
* `startExportLabelsTaskRun` - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* `startImportLabelsTaskRun` - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* `startJobRun` - Starts a job run using a job definition.
* `startMLEvaluationTaskRun` - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* `startMLLabelingSetGenerationTaskRun` - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* `startTrigger` - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* `startWorkflowRun` - Starts a new run of the specified workflow.
* `stopCrawler` - If the specified crawler is running, stops the crawl.
* `stopCrawlerSchedule` - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* `stopSession` - Stops the session.
* `stopTrigger` - Stops a specified trigger.
* `stopWorkflowRun` - Stops the execution of the specified workflow run.
* `tagResource` - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* `untagResource` - Removes tags from a resource.
* `updateBlueprint` - Updates a registered blueprint.
* `updateClassifier` - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* `updateColumnStatisticsForPartition` - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* `updateColumnStatisticsForTable` - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* `updateConnection` - Updates a connection definition in the Data Catalog.
* `updateCrawler` - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* `updateCrawlerSchedule` - Updates the schedule of a crawler using a <code>cron</code> expression. 
* `updateDataQualityRuleset` - Updates the specified data quality ruleset.
* `updateDatabase` - Updates an existing database definition in a Data Catalog.
* `updateDevEndpoint` - Updates a specified development endpoint.
* `updateJob` - Updates an existing job definition. The previous job definition is completely overwritten by this information.
* `updateJobFromSourceControl` - <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>
* `updateMLTransform` - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* `updatePartition` - Updates a partition.
* `updateRegistry` - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* `updateSchema` - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* `updateSourceControlFromJob` - <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>
* `updateTable` - Updates a metadata table in the Data Catalog.
* `updateTrigger` - Updates a trigger definition.
* `updateUserDefinedFunction` - Updates an existing function definition in the Data Catalog.
* `updateWorkflow` - Updates an existing workflow.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
