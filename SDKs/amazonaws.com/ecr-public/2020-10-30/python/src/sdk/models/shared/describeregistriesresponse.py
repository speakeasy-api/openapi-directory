import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registry as shared_registry


@dataclass_json
@dataclasses.dataclass
class DescribeRegistriesResponse:
    registries: list[shared_registry.Registry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
