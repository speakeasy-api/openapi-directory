import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacitydescription as shared_capacitydescription
from ..shared import connectorstate_enum as shared_connectorstate_enum
from ..shared import kafkaclusterdescription as shared_kafkaclusterdescription
from ..shared import kafkaclusterclientauthenticationdescription as shared_kafkaclusterclientauthenticationdescription
from ..shared import kafkaclusterencryptionintransitdescription as shared_kafkaclusterencryptionintransitdescription
from ..shared import logdeliverydescription as shared_logdeliverydescription
from ..shared import plugindescription as shared_plugindescription
from ..shared import workerconfigurationdescription as shared_workerconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class ConnectorSummary:
    r"""ConnectorSummary
    Summary of a connector.
    """
    
    capacity: Optional[shared_capacitydescription.CapacityDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    connector_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorArn') }})
    connector_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorDescription') }})
    connector_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorName') }})
    connector_state: Optional[shared_connectorstate_enum.ConnectorStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorState') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    kafka_cluster: Optional[shared_kafkaclusterdescription.KafkaClusterDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaCluster') }})
    kafka_cluster_client_authentication: Optional[shared_kafkaclusterclientauthenticationdescription.KafkaClusterClientAuthenticationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterClientAuthentication') }})
    kafka_cluster_encryption_in_transit: Optional[shared_kafkaclusterencryptionintransitdescription.KafkaClusterEncryptionInTransitDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaClusterEncryptionInTransit') }})
    kafka_connect_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafkaConnectVersion') }})
    log_delivery: Optional[shared_logdeliverydescription.LogDeliveryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDelivery') }})
    plugins: Optional[list[shared_plugindescription.PluginDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plugins') }})
    service_execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceExecutionRoleArn') }})
    worker_configuration: Optional[shared_workerconfigurationdescription.WorkerConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfiguration') }})
    
