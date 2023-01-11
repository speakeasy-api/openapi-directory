import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutionconfiguration as shared_workflowexecutionconfiguration
from ..shared import workflowexecutioninfo as shared_workflowexecutioninfo
from ..shared import workflowexecutionopencounts as shared_workflowexecutionopencounts


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionDetail:
    r"""WorkflowExecutionDetail
    Contains details about a workflow execution.
    """
    
    execution_configuration: shared_workflowexecutionconfiguration.WorkflowExecutionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfiguration') }})
    execution_info: shared_workflowexecutioninfo.WorkflowExecutionInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfo') }})
    open_counts: shared_workflowexecutionopencounts.WorkflowExecutionOpenCounts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openCounts') }})
    latest_activity_task_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestActivityTaskTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_execution_context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecutionContext') }})
    
