import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getuserlistofvalueslink as shared_links_getuserlistofvalueslink


@dataclass_json
@dataclasses.dataclass
class UserListOfValuesResponseLinks:
    self: Optional[shared_links_getuserlistofvalueslink.LinksGetUserListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
