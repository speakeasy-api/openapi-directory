import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taginfoforresource as shared_taginfoforresource


@dataclass_json
@dataclasses.dataclass
class ListTagsForResourceResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    tag_info_for_resource: Optional[shared_taginfoforresource.TagInfoForResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagInfoForResource') }})
    
