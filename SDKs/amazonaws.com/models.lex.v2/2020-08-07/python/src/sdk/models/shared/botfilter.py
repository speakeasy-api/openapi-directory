import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botfiltername_enum as shared_botfiltername_enum
from ..shared import botfilteroperator_enum as shared_botfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class BotFilter:
    r"""BotFilter
    Filters the responses returned by the <code>ListBots</code> operation.
    """
    
    name: shared_botfiltername_enum.BotFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_botfilteroperator_enum.BotFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
