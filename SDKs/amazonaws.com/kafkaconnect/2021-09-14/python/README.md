# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/kafkaconnect/2021-09-14/python
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


req = operations.CreateConnectorRequest(
    request_body=operations.CreateConnectorRequestBody(
        capacity=operations.CreateConnectorRequestBodyCapacity(
            auto_scaling=shared.AutoScaling(
                max_worker_count=548814,
                mcu_count=592845,
                min_worker_count=715190,
                scale_in_policy=shared.ScaleInPolicy(
                    cpu_utilization_percentage=844266,
                ),
                scale_out_policy=shared.ScaleOutPolicy(
                    cpu_utilization_percentage=602763,
                ),
            ),
            provisioned_capacity=shared.ProvisionedCapacity(
                mcu_count=857946,
                worker_count=544883,
            ),
        ),
        connector_configuration={
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        connector_description="delectus",
        connector_name="tempora",
        kafka_cluster=operations.CreateConnectorRequestBodyKafkaCluster(
            apache_kafka_cluster=shared.ApacheKafkaCluster(
                bootstrap_servers="suscipit",
                vpc=shared.Vpc(
                    security_groups=[
                        "minus",
                        "placeat",
                    ],
                    subnets=[
                        "iusto",
                        "excepturi",
                        "nisi",
                    ],
                ),
            ),
        ),
        kafka_cluster_client_authentication=operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication(
            authentication_type="IAM",
        ),
        kafka_cluster_encryption_in_transit=operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit(
            encryption_type="TLS",
        ),
        kafka_connect_version="ab",
        log_delivery=operations.CreateConnectorRequestBodyLogDelivery(
            worker_log_delivery=shared.WorkerLogDelivery(
                cloud_watch_logs=shared.CloudWatchLogsLogDelivery(
                    enabled=False,
                    log_group="quis",
                ),
                firehose=shared.FirehoseLogDelivery(
                    delivery_stream="veritatis",
                    enabled=False,
                ),
                s3=shared.S3LogDelivery(
                    bucket="deserunt",
                    enabled=False,
                    prefix="perferendis",
                ),
            ),
        ),
        plugins=[
            shared.Plugin(
                custom_plugin=shared.CustomPlugin(
                    custom_plugin_arn="repellendus",
                    revision=957156,
                ),
            ),
            shared.Plugin(
                custom_plugin=shared.CustomPlugin(
                    custom_plugin_arn="quo",
                    revision=140350,
                ),
            ),
        ],
        service_execution_role_arn="at",
        worker_configuration=operations.CreateConnectorRequestBodyWorkerConfiguration(
            revision=870088,
            worker_configuration_arn="maiores",
        ),
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="quod",
    x_amz_credential="quod",
    x_amz_date="esse",
    x_amz_security_token="totam",
    x_amz_signature="porro",
    x_amz_signed_headers="dolorum",
)
    
res = s.create_connector(req)

if res.create_connector_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_connector` - Creates a connector using the specified properties.
* `create_custom_plugin` - Creates a custom plugin using the specified properties.
* `create_worker_configuration` - Creates a worker configuration using the specified properties.
* `delete_connector` - Deletes the specified connector.
* `delete_custom_plugin` - Deletes a custom plugin.
* `describe_connector` - Returns summary information about the connector.
* `describe_custom_plugin` - A summary description of the custom plugin.
* `describe_worker_configuration` - Returns information about a worker configuration.
* `list_connectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `list_custom_plugins` - Returns a list of all of the custom plugins in this account and Region.
* `list_worker_configurations` - Returns a list of all of the worker configurations in this account and Region.
* `update_connector` - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
