<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateConnectorRequest(
    headers=operations.CreateConnectorHeaders(
        x_amz_algorithm="totam",
        x_amz_content_sha256="eum",
        x_amz_credential="laborum",
        x_amz_date="maxime",
        x_amz_security_token="voluptatem",
        x_amz_signature="aut",
        x_amz_signed_headers="qui",
    ),
    request=operations.CreateConnectorRequestBody(
        capacity=operations.CreateConnectorRequestBodyCapacity(
            auto_scaling=shared.AutoScaling(
                max_worker_count=3504002613480678211,
                mcu_count=2500753354058343789,
                min_worker_count=2787501642645844576,
                scale_in_policy=shared.ScaleInPolicy(
                    cpu_utilization_percentage=7677299547891902014,
                ),
                scale_out_policy=shared.ScaleOutPolicy(
                    cpu_utilization_percentage=7105999358852640672,
                ),
            ),
            provisioned_capacity=shared.ProvisionedCapacity(
                mcu_count=3679840646143242248,
                worker_count=3126614124520816277,
            ),
        ),
        connector_configuration={
            "molestiae": "voluptas",
        },
        connector_description="officia",
        connector_name="cupiditate",
        kafka_cluster=operations.CreateConnectorRequestBodyKafkaCluster(
            apache_kafka_cluster=shared.ApacheKafkaCluster(
                bootstrap_servers="in",
                vpc=shared.Vpc(
                    security_groups=[
                        "ipsa",
                        "nemo",
                    ],
                    subnets=[
                        "quae",
                        "odit",
                        "expedita",
                    ],
                ),
            ),
        ),
        kafka_cluster_client_authentication=operations.CreateConnectorRequestBodyKafkaClusterClientAuthentication(
            authentication_type="NONE",
        ),
        kafka_cluster_encryption_in_transit=operations.CreateConnectorRequestBodyKafkaClusterEncryptionInTransit(
            encryption_type="TLS",
        ),
        kafka_connect_version="voluptate",
        log_delivery=operations.CreateConnectorRequestBodyLogDelivery(
            worker_log_delivery=shared.WorkerLogDelivery(
                cloud_watch_logs=shared.CloudWatchLogsLogDelivery(
                    enabled=False,
                    log_group="harum",
                ),
                firehose=shared.FirehoseLogDelivery(
                    delivery_stream="nulla",
                    enabled=True,
                ),
                s3=shared.S3LogDelivery(
                    bucket="corrupti",
                    enabled=False,
                    prefix="consectetur",
                ),
            ),
        ),
        plugins=[
            shared.Plugin(
                custom_plugin=shared.CustomPlugin(
                    custom_plugin_arn="impedit",
                    revision=8021751157946261264,
                ),
            ),
        ],
        service_execution_role_arn="doloribus",
        worker_configuration=operations.CreateConnectorRequestBodyWorkerConfiguration(
            revision=5906068016607125469,
            worker_configuration_arn="quis",
        ),
    ),
)
    
res = s.create_connector(req)

if res.create_connector_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->