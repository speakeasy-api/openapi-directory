import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagref as shared_tagref


@dataclass_json
@dataclasses.dataclass
class ListTagsForResourceOutput:
    r"""ListTagsForResourceOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    tags: list[shared_tagref.TagRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
