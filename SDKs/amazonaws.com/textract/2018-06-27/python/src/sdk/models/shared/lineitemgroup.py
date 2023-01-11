import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitemfields as shared_lineitemfields


@dataclass_json
@dataclasses.dataclass
class LineItemGroup:
    r"""LineItemGroup
    A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
    """
    
    line_item_group_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItemGroupIndex') }})
    line_items: Optional[list[shared_lineitemfields.LineItemFields]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItems') }})
    
