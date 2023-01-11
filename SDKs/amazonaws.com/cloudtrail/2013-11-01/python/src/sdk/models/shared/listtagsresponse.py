import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetag as shared_resourcetag


@dataclass_json
@dataclasses.dataclass
class ListTagsResponse:
    r"""ListTagsResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_tag_list: Optional[list[shared_resourcetag.ResourceTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTagList') }})
    
