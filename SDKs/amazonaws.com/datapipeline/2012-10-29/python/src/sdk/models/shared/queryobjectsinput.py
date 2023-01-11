import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import query as shared_query


@dataclass_json
@dataclasses.dataclass
class QueryObjectsInput:
    r"""QueryObjectsInput
    Contains the parameters for QueryObjects.
    """
    
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    sphere: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sphere') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    query: Optional[shared_query.Query] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
