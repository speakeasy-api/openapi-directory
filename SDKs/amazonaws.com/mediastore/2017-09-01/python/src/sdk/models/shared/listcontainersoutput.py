import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import container as shared_container


@dataclass_json
@dataclasses.dataclass
class ListContainersOutput:
    containers: list[shared_container.Container] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Containers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
