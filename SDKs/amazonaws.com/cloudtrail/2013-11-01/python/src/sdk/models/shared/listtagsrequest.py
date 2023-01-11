import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListTagsRequest:
    r"""ListTagsRequest
    Specifies a list of trail tags to return.
    """
    
    resource_id_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
