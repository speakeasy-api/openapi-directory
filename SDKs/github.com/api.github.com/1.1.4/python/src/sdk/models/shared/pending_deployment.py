import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user
from ..shared import team_simple as shared_team_simple
from ..shared import deployment_reviewer_type_enum as shared_deployment_reviewer_type_enum


@dataclass_json
@dataclasses.dataclass
class PendingDeploymentEnvironment:
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PendingDeploymentReviewers:
    reviewer: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewer') }})
    type: Optional[shared_deployment_reviewer_type_enum.DeploymentReviewerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PendingDeployment:
    r"""PendingDeployment
    Details of a deployment that is waiting for protection rules to pass
    """
    
    current_user_can_approve: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_can_approve') }})
    environment: PendingDeploymentEnvironment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    reviewers: list[PendingDeploymentReviewers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    wait_timer: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer') }})
    wait_timer_started_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer_started_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
