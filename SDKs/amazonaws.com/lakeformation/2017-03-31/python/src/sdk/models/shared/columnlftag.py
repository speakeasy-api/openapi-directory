import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftagpair as shared_lftagpair


@dataclass_json
@dataclasses.dataclass
class ColumnLfTag:
    r"""ColumnLfTag
    A structure containing the name of a column resource and the tags attached to it.
    """
    
    lf_tags: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTags') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
