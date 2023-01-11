import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link3 as shared_link3


@dataclass_json
@dataclasses.dataclass
class SubscriptionLinks:
    activate: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activate') }})
    deactivate: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deactivate') }})
    delete: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    reporting: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reporting') }})
    retry: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retry') }})
    
