import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipeline as shared_pipeline


@dataclass_json
@dataclasses.dataclass
class DescribePipelineResponse:
    pipeline: Optional[shared_pipeline.Pipeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    
