import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bulkdeployment as shared_bulkdeployment


@dataclass_json
@dataclasses.dataclass
class ListBulkDeploymentsResponse:
    bulk_deployments: Optional[list[shared_bulkdeployment.BulkDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeployments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
