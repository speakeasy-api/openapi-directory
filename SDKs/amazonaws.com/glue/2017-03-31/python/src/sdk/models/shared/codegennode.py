import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codegennodearg as shared_codegennodearg


@dataclass_json
@dataclasses.dataclass
class CodeGenNode:
    r"""CodeGenNode
    Represents a node in a directed acyclic graph (DAG)
    """
    
    args: list[shared_codegennodearg.CodeGenNodeArg] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    node_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    line_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineNumber') }})
    
