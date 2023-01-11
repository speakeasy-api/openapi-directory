import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcerevision as shared_sourcerevision
from ..shared import pipelineexecutionstatus_enum as shared_pipelineexecutionstatus_enum
from ..shared import stopexecutiontrigger as shared_stopexecutiontrigger
from ..shared import executiontrigger as shared_executiontrigger


@dataclass_json
@dataclasses.dataclass
class PipelineExecutionSummary:
    r"""PipelineExecutionSummary
    Summary information about a pipeline execution.
    """
    
    last_update_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    source_revisions: Optional[list[shared_sourcerevision.SourceRevision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRevisions') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stop_trigger: Optional[shared_stopexecutiontrigger.StopExecutionTrigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTrigger') }})
    trigger: Optional[shared_executiontrigger.ExecutionTrigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
