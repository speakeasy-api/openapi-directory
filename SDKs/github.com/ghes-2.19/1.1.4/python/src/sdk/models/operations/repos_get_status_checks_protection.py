import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import status_check_policy as shared_status_check_policy


@dataclasses.dataclass
class ReposGetStatusChecksProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetStatusChecksProtectionRequest:
    path_params: ReposGetStatusChecksProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetStatusChecksProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    status_check_policy: Optional[shared_status_check_policy.StatusCheckPolicy] = dataclasses.field(default=None)
    
