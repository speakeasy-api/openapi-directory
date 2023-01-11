import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowgraph as shared_workflowgraph
from ..shared import startingeventbatchcondition as shared_startingeventbatchcondition
from ..shared import workflowrunstatistics as shared_workflowrunstatistics
from ..shared import workflowrunstatus_enum as shared_workflowrunstatus_enum


@dataclass_json
@dataclasses.dataclass
class WorkflowRun:
    r"""WorkflowRun
    A workflow run is an execution of a workflow providing all the runtime information.
    """
    
    completed_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    graph: Optional[shared_workflowgraph.WorkflowGraph] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Graph') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    previous_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousRunId') }})
    started_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    starting_event_batch_condition: Optional[shared_startingeventbatchcondition.StartingEventBatchCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingEventBatchCondition') }})
    statistics: Optional[shared_workflowrunstatistics.WorkflowRunStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistics') }})
    status: Optional[shared_workflowrunstatus_enum.WorkflowRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    workflow_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowRunId') }})
    workflow_run_properties: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowRunProperties') }})
    
