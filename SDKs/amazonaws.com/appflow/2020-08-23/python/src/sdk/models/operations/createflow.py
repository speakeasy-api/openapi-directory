import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectortype_enum as shared_connectortype_enum
from ..shared import incrementalpullconfig as shared_incrementalpullconfig
from ..shared import sourceconnectorproperties as shared_sourceconnectorproperties
from ..shared import triggerproperties as shared_triggerproperties
from ..shared import triggertype_enum as shared_triggertype_enum
from ..shared import destinationflowconfig as shared_destinationflowconfig
from ..shared import task as shared_task
from ..shared import createflowresponse as shared_createflowresponse


@dataclasses.dataclass
class CreateFlowHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFlowRequestBodySourceFlowConfig:
    r"""CreateFlowRequestBodySourceFlowConfig
     Contains information about the configuration of the source connector used in the flow. 
    """
    
    connector_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_type: Optional[shared_connectortype_enum.ConnectorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    incremental_pull_config: Optional[shared_incrementalpullconfig.IncrementalPullConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementalPullConfig') }})
    source_connector_properties: Optional[shared_sourceconnectorproperties.SourceConnectorProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConnectorProperties') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFlowRequestBodyTriggerConfig:
    r"""CreateFlowRequestBodyTriggerConfig
     The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
    """
    
    trigger_properties: Optional[shared_triggerproperties.TriggerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerProperties') }})
    trigger_type: Optional[shared_triggertype_enum.TriggerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFlowRequestBody:
    destination_flow_config_list: list[shared_destinationflowconfig.DestinationFlowConfig] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationFlowConfigList') }})
    flow_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowName') }})
    source_flow_config: CreateFlowRequestBodySourceFlowConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFlowConfig') }})
    tasks: list[shared_task.Task] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    trigger_config: CreateFlowRequestBodyTriggerConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    kms_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsArn') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateFlowRequest:
    headers: CreateFlowHeaders = dataclasses.field()
    request: CreateFlowRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    connector_authentication_exception: Optional[Any] = dataclasses.field(default=None)
    connector_server_exception: Optional[Any] = dataclasses.field(default=None)
    create_flow_response: Optional[shared_createflowresponse.CreateFlowResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
