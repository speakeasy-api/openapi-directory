import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userlovindexlinks as shared_userlovindexlinks


@dataclass_json
@dataclasses.dataclass
class UserLovIndex:
    links: Optional[shared_userlovindexlinks.UserLovIndexLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
