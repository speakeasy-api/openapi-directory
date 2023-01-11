import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import closestatus_enum as shared_closestatus_enum
from ..shared import workflowexecution as shared_workflowexecution
from ..shared import executionstatus_enum as shared_executionstatus_enum
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionInfo:
    r"""WorkflowExecutionInfo
    Contains information about a workflow execution.
    """
    
    execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    execution_status: shared_executionstatus_enum.ExecutionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStatus') }})
    start_timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    cancel_requested: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequested') }})
    close_status: Optional[shared_closestatus_enum.CloseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeStatus') }})
    close_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent: Optional[shared_workflowexecution.WorkflowExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    tag_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    
