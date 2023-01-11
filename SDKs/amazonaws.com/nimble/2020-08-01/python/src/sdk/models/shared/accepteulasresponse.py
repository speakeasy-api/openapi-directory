import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eulaacceptance as shared_eulaacceptance


@dataclass_json
@dataclasses.dataclass
class AcceptEulasResponse:
    eula_acceptances: Optional[list[shared_eulaacceptance.EulaAcceptance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eulaAcceptances') }})
    
