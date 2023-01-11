import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webacl as shared_webacl


@dataclass_json
@dataclasses.dataclass
class GetWebACLResponse:
    web_acl: Optional[shared_webacl.WebACL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACL') }})
    
