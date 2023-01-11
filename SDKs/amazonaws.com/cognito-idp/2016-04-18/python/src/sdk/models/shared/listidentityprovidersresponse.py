import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import providerdescription as shared_providerdescription


@dataclass_json
@dataclasses.dataclass
class ListIdentityProvidersResponse:
    providers: list[shared_providerdescription.ProviderDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Providers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
