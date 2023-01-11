import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ListTagsForStreamOutput:
    r"""ListTagsForStreamOutput
    Represents the output for <code>ListTagsForStream</code>.
    """
    
    has_more_tags: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreTags') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
