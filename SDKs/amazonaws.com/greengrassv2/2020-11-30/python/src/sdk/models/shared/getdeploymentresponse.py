import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentdeploymentspecification as shared_componentdeploymentspecification
from ..shared import deploymentpolicies as shared_deploymentpolicies
from ..shared import deploymentstatus_enum as shared_deploymentstatus_enum
from ..shared import deploymentiotjobconfiguration as shared_deploymentiotjobconfiguration


@dataclass_json
@dataclasses.dataclass
class GetDeploymentResponse:
    components: Optional[dict[str, shared_componentdeploymentspecification.ComponentDeploymentSpecification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    creation_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentName') }})
    deployment_policies: Optional[shared_deploymentpolicies.DeploymentPolicies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentPolicies') }})
    deployment_status: Optional[shared_deploymentstatus_enum.DeploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatus') }})
    iot_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobArn') }})
    iot_job_configuration: Optional[shared_deploymentiotjobconfiguration.DeploymentIoTJobConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobConfiguration') }})
    iot_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobId') }})
    is_latest_for_target: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLatestForTarget') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    
