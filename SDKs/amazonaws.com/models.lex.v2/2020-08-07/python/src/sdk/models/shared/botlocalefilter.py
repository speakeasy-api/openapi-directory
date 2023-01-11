import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botlocalefiltername_enum as shared_botlocalefiltername_enum
from ..shared import botlocalefilteroperator_enum as shared_botlocalefilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class BotLocaleFilter:
    r"""BotLocaleFilter
    Filters responses returned by the <code>ListBotLocales</code> operation.
    """
    
    name: shared_botlocalefiltername_enum.BotLocaleFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_botlocalefilteroperator_enum.BotLocaleFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
