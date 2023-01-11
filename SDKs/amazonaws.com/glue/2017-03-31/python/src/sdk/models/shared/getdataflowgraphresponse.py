import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codegenedge as shared_codegenedge
from ..shared import codegennode as shared_codegennode


@dataclass_json
@dataclasses.dataclass
class GetDataflowGraphResponse:
    dag_edges: Optional[list[shared_codegenedge.CodeGenEdge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagEdges') }})
    dag_nodes: Optional[list[shared_codegennode.CodeGenNode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagNodes') }})
    
