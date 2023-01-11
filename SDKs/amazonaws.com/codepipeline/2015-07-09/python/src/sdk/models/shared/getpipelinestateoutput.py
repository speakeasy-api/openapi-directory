import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stagestate as shared_stagestate


@dataclass_json
@dataclasses.dataclass
class GetPipelineStateOutput:
    r"""GetPipelineStateOutput
    Represents the output of a <code>GetPipelineState</code> action.
    """
    
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    pipeline_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineVersion') }})
    stage_states: Optional[list[shared_stagestate.StageState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageStates') }})
    updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
