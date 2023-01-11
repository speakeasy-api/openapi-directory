import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systeminstancesummary as shared_systeminstancesummary


@dataclass_json
@dataclasses.dataclass
class DeploySystemInstanceResponse:
    summary: shared_systeminstancesummary.SystemInstanceSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    greengrass_deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassDeploymentId') }})
    
