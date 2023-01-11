import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceptancetype_enum as shared_acceptancetype_enum


@dataclass_json
@dataclasses.dataclass
class AcceptMatchInput:
    r"""AcceptMatchInput
    Represents the input for a request operation.
    """
    
    acceptance_type: shared_acceptancetype_enum.AcceptanceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceType') }})
    player_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerIds') }})
    ticket_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketId') }})
    
