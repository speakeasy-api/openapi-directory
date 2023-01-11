import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systeminstancesummary as shared_systeminstancesummary


@dataclass_json
@dataclasses.dataclass
class UndeploySystemInstanceResponse:
    summary: Optional[shared_systeminstancesummary.SystemInstanceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
