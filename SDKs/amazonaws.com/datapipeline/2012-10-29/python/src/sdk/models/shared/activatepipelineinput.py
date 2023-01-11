import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parametervalue as shared_parametervalue


@dataclass_json
@dataclasses.dataclass
class ActivatePipelineInput:
    r"""ActivatePipelineInput
    Contains the parameters for ActivatePipeline.
    """
    
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    parameter_values: Optional[list[shared_parametervalue.ParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    start_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
