import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentupdatetype_enum as shared_deploymentupdatetype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateEnvironmentInput:
    deployment_type: shared_deploymentupdatetype_enum.DeploymentUpdateTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment_account_connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnectionId') }})
    proton_service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protonServiceRoleArn') }})
    spec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    template_major_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMajorVersion') }})
    template_minor_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMinorVersion') }})
    
