import dataclasses
from typing import Optional
from ..shared import check_suite as shared_check_suite


@dataclasses.dataclass
class ChecksGetSuitePathParams:
    check_suite_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksGetSuiteRequest:
    path_params: ChecksGetSuitePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksGetSuiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_suite: Optional[shared_check_suite.CheckSuite] = dataclasses.field(default=None)
    
