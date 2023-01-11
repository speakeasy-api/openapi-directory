import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesskey as shared_accesskey


@dataclass_json
@dataclasses.dataclass
class GetBucketAccessKeysResult:
    access_keys: Optional[list[shared_accesskey.AccessKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeys') }})
    
