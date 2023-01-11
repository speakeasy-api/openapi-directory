import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publickey as shared_publickey


@dataclass_json
@dataclasses.dataclass
class ListPublicKeysResponse:
    r"""ListPublicKeysResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    public_key_list: Optional[list[shared_publickey.PublicKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKeyList') }})
    
