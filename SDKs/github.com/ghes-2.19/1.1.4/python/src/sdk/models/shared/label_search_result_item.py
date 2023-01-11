import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import search_result_text_matches as shared_search_result_text_matches


@dataclass_json
@dataclasses.dataclass
class LabelSearchResultItem:
    r"""LabelSearchResultItem
    Label Search Result Item
    """
    
    color: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    text_matches: Optional[list[shared_search_result_text_matches.SearchResultTextMatches]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_matches') }})
    
