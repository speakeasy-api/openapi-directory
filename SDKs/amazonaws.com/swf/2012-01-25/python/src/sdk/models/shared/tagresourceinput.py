import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetag as shared_resourcetag


@dataclass_json
@dataclasses.dataclass
class TagResourceInput:
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    tags: list[shared_resourcetag.ResourceTag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
