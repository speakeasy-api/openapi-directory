import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscaling as shared_autoscaling
from ..shared import provisionedcapacity as shared_provisionedcapacity
from ..shared import apachekafkacluster as shared_apachekafkacluster
from ..shared import kafkaclusterclientauthenticationtype_enum as shared_kafkaclusterclientauthenticationtype_enum
from ..shared import kafkaclusterencryptionintransittype_enum as shared_kafkaclusterencryptionintransittype_enum
from ..shared import workerlogdelivery as shared_workerlogdelivery
from ..shared import plugin as shared_plugin
from ..shared import createconnectorresponse as shared_createconnectorresponse


@dataclasses.dataclass
class CreateConnectorHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyCapacity:
    r"""CreateConnectorRequestBodyCapacity
    Information about the capacity of the connector, whether it is auto scaled or provisioned.
    """
    
    auto_scaling: Optional[shared_autoscaling.AutoScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    provisioned_capacity: Optional[shared_provisionedcapacity.ProvisionedCapacity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedCapacity') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyKafkaCluster:
    r"""CreateConnectorRequestBodyKafkaCluster
    The details of the Apache Kafka cluster to which the connector is connected.
    """
    
    apache_kafka_cluster: Optional[shared_apachekafkacluster.ApacheKafkaCluster] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apacheKafkaCluster') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyKafkaClusterClientAuthentication:
    r"""CreateConnectorRequestBodyKafkaClusterClientAuthentication
    The client authentication information used in order to authenticate with the Apache Kafka cluster.
    """
    
    authentication_type: Optional[shared_kafkaclusterclientauthenticationtype_enum.KafkaClusterClientAuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit:
    r"""CreateConnectorRequestBodyKafkaClusterEncryptionInTransit
    Details of encryption in transit to the Apache Kafka cluster.
    """
    
    encryption_type: Optional[shared_kafkaclusterencryptionintransittype_enum.KafkaClusterEncryptionInTransitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyLogDelivery:
    r"""CreateConnectorRequestBodyLogDelivery
    Details about log delivery.
    """
    
    worker_log_delivery: Optional[shared_workerlogdelivery.WorkerLogDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerLogDelivery') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBodyWorkerConfiguration:
    r"""CreateConnectorRequestBodyWorkerConfiguration
    The configuration of the workers, which are the processes that run the connector logic.
    """
    
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    worker_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfigurationArn') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConnectorRequestBody:
    capacity: CreateConnectorRequestBodyCapacity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    connector_configuration: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfiguration') }})
    connector_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    kafka_cluster: CreateConnectorRequestBodyKafkaCluster = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaCluster') }})
    kafka_cluster_client_authentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterClientAuthentication') }})
    kafka_cluster_encryption_in_transit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterEncryptionInTransit') }})
    kafka_connect_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaConnectVersion') }})
    plugins: list[shared_plugin.Plugin] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plugins') }})
    service_execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceExecutionRoleArn') }})
    connector_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorDescription') }})
    log_delivery: Optional[CreateConnectorRequestBodyLogDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDelivery') }})
    worker_configuration: Optional[CreateConnectorRequestBodyWorkerConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfiguration') }})
    

@dataclasses.dataclass
class CreateConnectorRequest:
    headers: CreateConnectorHeaders = dataclasses.field()
    request: CreateConnectorRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateConnectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_connector_response: Optional[shared_createconnectorresponse.CreateConnectorResponse] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
