import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetagmapping as shared_resourcetagmapping


@dataclass_json
@dataclasses.dataclass
class GetResourcesOutput:
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    resource_tag_mapping_list: Optional[list[shared_resourcetagmapping.ResourceTagMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTagMappingList') }})
    
