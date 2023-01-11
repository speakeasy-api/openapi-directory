import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_enterprise as shared_runner_groups_enterprise


@dataclasses.dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visibility: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_enterprise: Optional[shared_runner_groups_enterprise.RunnerGroupsEnterprise] = dataclasses.field(default=None)
    
