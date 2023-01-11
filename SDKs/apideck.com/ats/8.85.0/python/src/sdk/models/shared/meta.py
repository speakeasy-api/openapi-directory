import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MetaCursors:
    r"""MetaCursors
    Cursors to navigate to previous or next pages through the API
    """
    
    current: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass_json
@dataclasses.dataclass
class Meta:
    r"""Meta
    Response metadata
    """
    
    cursors: Optional[MetaCursors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursors') }})
    items_on_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_on_page') }})
    
