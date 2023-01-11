import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routingstrategytype_enum as shared_routingstrategytype_enum


@dataclass_json
@dataclasses.dataclass
class ListAliasesInput:
    r"""ListAliasesInput
    Represents the input for a request operation.
    """
    
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    routing_strategy_type: Optional[shared_routingstrategytype_enum.RoutingStrategyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingStrategyType') }})
    
