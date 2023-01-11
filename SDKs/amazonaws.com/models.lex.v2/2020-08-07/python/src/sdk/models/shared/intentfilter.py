import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import intentfiltername_enum as shared_intentfiltername_enum
from ..shared import intentfilteroperator_enum as shared_intentfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class IntentFilter:
    r"""IntentFilter
    Filters the response from the <code>ListIntents</code> operation.
    """
    
    name: shared_intentfiltername_enum.IntentFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_intentfilteroperator_enum.IntentFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
