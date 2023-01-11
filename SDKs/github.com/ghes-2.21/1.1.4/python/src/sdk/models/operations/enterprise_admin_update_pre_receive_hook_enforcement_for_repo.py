import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository_pre_receive_hook as shared_repository_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    TESTING = "testing"


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody:
    enforcement: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_pre_receive_hook: Optional[shared_repository_pre_receive_hook.RepositoryPreReceiveHook] = dataclasses.field(default=None)
    
