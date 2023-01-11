import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetAccessTokenRequest:
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    token_properties: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenProperties') }})
    
