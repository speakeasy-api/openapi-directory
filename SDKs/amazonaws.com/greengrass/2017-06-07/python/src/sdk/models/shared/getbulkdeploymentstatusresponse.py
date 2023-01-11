import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bulkdeploymentmetrics as shared_bulkdeploymentmetrics
from ..shared import bulkdeploymentstatus_enum as shared_bulkdeploymentstatus_enum
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class GetBulkDeploymentStatusResponse:
    bulk_deployment_metrics: Optional[shared_bulkdeploymentmetrics.BulkDeploymentMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentMetrics') }})
    bulk_deployment_status: Optional[shared_bulkdeploymentstatus_enum.BulkDeploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentStatus') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    error_details: Optional[list[shared_errordetail.ErrorDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
