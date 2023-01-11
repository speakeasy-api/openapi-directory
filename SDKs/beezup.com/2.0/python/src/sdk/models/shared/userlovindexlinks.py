import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getuserlistofvalueslink as shared_links_getuserlistofvalueslink
from ..shared import links_getuserlovindexlink as shared_links_getuserlovindexlink


@dataclass_json
@dataclasses.dataclass
class UserLovIndexLinks:
    lists: Optional[dict[str, shared_links_getuserlistofvalueslink.LinksGetUserListOfValuesLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    self: Optional[shared_links_getuserlovindexlink.LinksGetUserLovIndexLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
