import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TerminateContract:
    r"""TerminateContract
    The contract termination info
    """
    
    contract_termination_reason_type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractTerminationReasonType') }})
    contract_termination_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractTerminationReason') }})
    
