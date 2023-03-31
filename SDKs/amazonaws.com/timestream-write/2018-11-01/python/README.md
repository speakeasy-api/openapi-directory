# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/timestream-write/2018-11-01/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateBatchLoadTaskRequest(
    create_batch_load_task_request=shared.CreateBatchLoadTaskRequest(
        client_token="corrupti",
        data_model_configuration=shared.DataModelConfiguration(
            data_model=shared.DataModel(
                dimension_mappings=[
                    shared.DimensionMapping(
                        destination_column="distinctio",
                        source_column="quibusdam",
                    ),
                    shared.DimensionMapping(
                        destination_column="unde",
                        source_column="nulla",
                    ),
                    shared.DimensionMapping(
                        destination_column="corrupti",
                        source_column="illum",
                    ),
                ],
                measure_name_column="vel",
                mixed_measure_mappings=[
                    shared.MixedMeasureMapping(
                        measure_name="deserunt",
                        measure_value_type="VARCHAR",
                        multi_measure_attribute_mappings=[
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="BIGINT",
                                source_column="debitis",
                                target_multi_measure_attribute_name="ipsa",
                            ),
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="TIMESTAMP",
                                source_column="tempora",
                                target_multi_measure_attribute_name="suscipit",
                            ),
                        ],
                        source_column="molestiae",
                        target_measure_name="minus",
                    ),
                    shared.MixedMeasureMapping(
                        measure_name="placeat",
                        measure_value_type="BOOLEAN",
                        multi_measure_attribute_mappings=[
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="BOOLEAN",
                                source_column="nisi",
                                target_multi_measure_attribute_name="recusandae",
                            ),
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="TIMESTAMP",
                                source_column="ab",
                                target_multi_measure_attribute_name="quis",
                            ),
                        ],
                        source_column="veritatis",
                        target_measure_name="deserunt",
                    ),
                    shared.MixedMeasureMapping(
                        measure_name="perferendis",
                        measure_value_type="VARCHAR",
                        multi_measure_attribute_mappings=[
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="TIMESTAMP",
                                source_column="quo",
                                target_multi_measure_attribute_name="odit",
                            ),
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="TIMESTAMP",
                                source_column="at",
                                target_multi_measure_attribute_name="maiores",
                            ),
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="BOOLEAN",
                                source_column="quod",
                                target_multi_measure_attribute_name="quod",
                            ),
                            shared.MultiMeasureAttributeMapping(
                                measure_value_type="BOOLEAN",
                                source_column="totam",
                                target_multi_measure_attribute_name="porro",
                            ),
                        ],
                        source_column="dolorum",
                        target_measure_name="dicta",
                    ),
                ],
                multi_measure_mappings=shared.MultiMeasureMappings(
                    multi_measure_attribute_mappings=[
                        shared.MultiMeasureAttributeMapping(
                            measure_value_type="VARCHAR",
                            source_column="occaecati",
                            target_multi_measure_attribute_name="fugit",
                        ),
                        shared.MultiMeasureAttributeMapping(
                            measure_value_type="BOOLEAN",
                            source_column="hic",
                            target_multi_measure_attribute_name="optio",
                        ),
                        shared.MultiMeasureAttributeMapping(
                            measure_value_type="BOOLEAN",
                            source_column="beatae",
                            target_multi_measure_attribute_name="commodi",
                        ),
                    ],
                    target_multi_measure_name="molestiae",
                ),
                time_column="modi",
                time_unit="MILLISECONDS",
            ),
            data_model_s3_configuration=shared.DataModelS3Configuration(
                bucket_name="impedit",
                object_key="cum",
            ),
        ),
        data_source_configuration=shared.DataSourceConfiguration(
            csv_configuration=shared.CsvConfiguration(
                column_separator="esse",
                escape_char="ipsum",
                null_value="excepturi",
                quote_char="aspernatur",
                trim_white_space=False,
            ),
            data_format="CSV",
            data_source_s3_configuration=shared.DataSourceS3Configuration(
                bucket_name="perferendis",
                object_key_prefix="ad",
            ),
        ),
        record_version=617636,
        report_configuration=shared.ReportConfiguration(
            report_s3_configuration=shared.ReportS3Configuration(
                bucket_name="sed",
                encryption_option="SSE_KMS",
                kms_key_id="dolor",
                object_key_prefix="natus",
            ),
        ),
        target_database_name="laboriosam",
        target_table_name="hic",
    ),
    x_amz_algorithm="saepe",
    x_amz_content_sha256="fuga",
    x_amz_credential="in",
    x_amz_date="corporis",
    x_amz_security_token="iste",
    x_amz_signature="iure",
    x_amz_signed_headers="saepe",
    x_amz_target="Timestream_20181101.CreateBatchLoadTask",
)
    
res = s.create_batch_load_task(req)

if res.create_batch_load_task_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_batch_load_task` - Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
* `create_database` - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 
* `create_table` - Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 
* `delete_database` - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
* `delete_table` - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
* `describe_batch_load_task` - Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
* `describe_database` - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
* `describe_endpoints` - <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
* `describe_table` - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 
* `list_batch_load_tasks` - Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
* `list_databases` - Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 
* `list_tables` - Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 
* `list_tags_for_resource` -  Lists all tags on a Timestream resource. 
* `resume_batch_load_task` -  
* `tag_resource` -  Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* `untag_resource` -  Removes the association of tags from a Timestream resource. 
* `update_database` - <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
* `update_table` - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
* `write_records` - <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
