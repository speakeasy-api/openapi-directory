import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import effectivedeployment as shared_effectivedeployment


@dataclass_json
@dataclasses.dataclass
class ListEffectiveDeploymentsResponse:
    effective_deployments: Optional[list[shared_effectivedeployment.EffectiveDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDeployments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
