import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privatednsnamespaceproperties as shared_privatednsnamespaceproperties
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePrivateDNSNamespaceRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    vpc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vpc') }})
    creator_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[shared_privatednsnamespaceproperties.PrivateDNSNamespaceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
