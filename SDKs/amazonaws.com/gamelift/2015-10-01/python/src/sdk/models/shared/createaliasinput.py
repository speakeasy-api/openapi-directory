import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingstrategy as shared_routingstrategy
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateAliasInput:
    r"""CreateAliasInput
    Represents the input for a request operation.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    routing_strategy: shared_routingstrategy.RoutingStrategy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingStrategy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
