import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bulkdeploymentresult as shared_bulkdeploymentresult


@dataclass_json
@dataclasses.dataclass
class ListBulkDeploymentDetailedReportsResponse:
    deployments: Optional[list[shared_bulkdeploymentresult.BulkDeploymentResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deployments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
