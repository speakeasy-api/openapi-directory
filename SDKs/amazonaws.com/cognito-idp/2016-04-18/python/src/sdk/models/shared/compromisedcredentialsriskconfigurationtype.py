import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compromisedcredentialsactionstype as shared_compromisedcredentialsactionstype
from ..shared import eventfiltertype_enum as shared_eventfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class CompromisedCredentialsRiskConfigurationType:
    r"""CompromisedCredentialsRiskConfigurationType
    The compromised credentials risk configuration type.
    """
    
    actions: shared_compromisedcredentialsactionstype.CompromisedCredentialsActionsType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_filter: Optional[list[shared_eventfiltertype_enum.EventFilterTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    
