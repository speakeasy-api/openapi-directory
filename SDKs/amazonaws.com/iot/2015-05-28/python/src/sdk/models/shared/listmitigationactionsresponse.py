import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mitigationactionidentifier as shared_mitigationactionidentifier


@dataclass_json
@dataclasses.dataclass
class ListMitigationActionsResponse:
    action_identifiers: Optional[list[shared_mitigationactionidentifier.MitigationActionIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionIdentifiers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
