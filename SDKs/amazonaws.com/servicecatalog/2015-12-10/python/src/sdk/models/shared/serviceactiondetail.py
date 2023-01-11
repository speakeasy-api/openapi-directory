import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactionsummary as shared_serviceactionsummary


@dataclass_json
@dataclasses.dataclass
class ServiceActionDetail:
    r"""ServiceActionDetail
    An object containing detailed information about the self-service action.
    """
    
    definition: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Definition') }})
    service_action_summary: Optional[shared_serviceactionsummary.ServiceActionSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionSummary') }})
    
