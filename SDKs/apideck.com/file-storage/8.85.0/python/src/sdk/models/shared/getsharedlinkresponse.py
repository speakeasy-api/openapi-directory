import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharedlink as shared_sharedlink


@dataclass_json
@dataclasses.dataclass
class GetSharedLinkResponseOutput:
    data: shared_sharedlink.SharedLinkOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    operation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
