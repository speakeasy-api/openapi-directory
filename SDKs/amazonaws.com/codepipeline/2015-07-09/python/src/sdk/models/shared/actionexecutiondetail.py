import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionexecutioninput as shared_actionexecutioninput
from ..shared import actionexecutionoutput as shared_actionexecutionoutput
from ..shared import actionexecutionstatus_enum as shared_actionexecutionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ActionExecutionDetail:
    r"""ActionExecutionDetail
    Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action. 
    """
    
    action_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionExecutionId') }})
    action_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    input: Optional[shared_actionexecutioninput.ActionExecutionInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    last_update_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output: Optional[shared_actionexecutionoutput.ActionExecutionOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    pipeline_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    pipeline_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineVersion') }})
    stage_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_actionexecutionstatus_enum.ActionExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
