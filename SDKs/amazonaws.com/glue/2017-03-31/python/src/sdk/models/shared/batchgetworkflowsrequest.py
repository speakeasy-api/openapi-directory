import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetWorkflowsRequest:
    names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    include_graph: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeGraph') }})
    
