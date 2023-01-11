import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import graph as shared_graph


@dataclass_json
@dataclasses.dataclass
class ListGraphsResponse:
    graph_list: Optional[list[shared_graph.Graph]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GraphList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
