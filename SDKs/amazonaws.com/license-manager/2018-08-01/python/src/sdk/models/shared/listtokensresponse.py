import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tokendata as shared_tokendata


@dataclass_json
@dataclasses.dataclass
class ListTokensResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    tokens: Optional[list[shared_tokendata.TokenData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tokens') }})
    
