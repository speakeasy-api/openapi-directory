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