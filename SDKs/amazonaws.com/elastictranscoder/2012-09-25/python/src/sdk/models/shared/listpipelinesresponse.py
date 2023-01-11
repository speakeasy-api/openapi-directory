import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipeline as shared_pipeline


@dataclass_json
@dataclasses.dataclass
class ListPipelinesResponse:
    r"""ListPipelinesResponse
    A list of the pipelines associated with the current AWS account.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    pipelines: Optional[list[shared_pipeline.Pipeline]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipelines') }})
    
