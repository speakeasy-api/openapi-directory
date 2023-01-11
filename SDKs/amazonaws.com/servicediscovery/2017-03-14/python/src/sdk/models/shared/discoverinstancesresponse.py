import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpinstancesummary as shared_httpinstancesummary


@dataclass_json
@dataclasses.dataclass
class DiscoverInstancesResponse:
    instances: Optional[list[shared_httpinstancesummary.HTTPInstanceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    
