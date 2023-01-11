import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentapplicationconfig as shared_deploymentapplicationconfig
from ..shared import deploymentconfig as shared_deploymentconfig
from ..shared import deploymentjoberrorcode_enum as shared_deploymentjoberrorcode_enum
from ..shared import deploymentstatus_enum as shared_deploymentstatus_enum


@dataclass_json
@dataclasses.dataclass
class SyncDeploymentJobResponse:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_application_configs: Optional[list[shared_deploymentapplicationconfig.DeploymentApplicationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentApplicationConfigs') }})
    deployment_config: Optional[shared_deploymentconfig.DeploymentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfig') }})
    failure_code: Optional[shared_deploymentjoberrorcode_enum.DeploymentJobErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    fleet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleet') }})
    status: Optional[shared_deploymentstatus_enum.DeploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
