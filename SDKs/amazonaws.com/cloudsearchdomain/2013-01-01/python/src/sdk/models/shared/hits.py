import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hit as shared_hit


@dataclass_json
@dataclasses.dataclass
class Hits:
    r"""Hits
    The collection of documents that match the search request.
    """
    
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    hit: Optional[list[shared_hit.Hit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hit') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
