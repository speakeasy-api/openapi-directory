import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secretlistentry as shared_secretlistentry


@dataclass_json
@dataclasses.dataclass
class ListSecretsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    secret_list: Optional[list[shared_secretlistentry.SecretListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretList') }})
    
