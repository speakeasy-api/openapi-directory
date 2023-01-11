import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateResolverQueryLogConfigRequest:
    creator_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    destination_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
