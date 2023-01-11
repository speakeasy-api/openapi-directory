import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compromisedcredentialseventactiontype_enum as shared_compromisedcredentialseventactiontype_enum


@dataclass_json
@dataclasses.dataclass
class CompromisedCredentialsActionsType:
    r"""CompromisedCredentialsActionsType
    The compromised credentials actions type
    """
    
    event_action: shared_compromisedcredentialseventactiontype_enum.CompromisedCredentialsEventActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventAction') }})
    
