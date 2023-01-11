import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationflowconfig as shared_destinationflowconfig
from ..shared import flowstatus_enum as shared_flowstatus_enum
from ..shared import executiondetails as shared_executiondetails
from ..shared import sourceflowconfig as shared_sourceflowconfig
from ..shared import task as shared_task
from ..shared import triggerconfig as shared_triggerconfig


@dataclass_json
@dataclasses.dataclass
class DescribeFlowResponse:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_flow_config_list: Optional[list[shared_destinationflowconfig.DestinationFlowConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationFlowConfigList') }})
    flow_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowArn') }})
    flow_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowName') }})
    flow_status: Optional[shared_flowstatus_enum.FlowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowStatus') }})
    flow_status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowStatusMessage') }})
    kms_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsArn') }})
    last_run_execution_details: Optional[shared_executiondetails.ExecutionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunExecutionDetails') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedBy') }})
    source_flow_config: Optional[shared_sourceflowconfig.SourceFlowConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFlowConfig') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tasks: Optional[list[shared_task.Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    trigger_config: Optional[shared_triggerconfig.TriggerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfig') }})
    
