import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrylistitem as shared_registrylistitem


@dataclass_json
@dataclasses.dataclass
class ListRegistriesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    registries: Optional[list[shared_registrylistitem.RegistryListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Registries') }})
    
