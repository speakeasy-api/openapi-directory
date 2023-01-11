import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class TagResourceRequest:
    r"""TagResourceRequest
    TagResourceRequest
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    tags: list[shared_taglistentry.TagListEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
