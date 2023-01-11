import dataclasses
from typing import Optional
from ..shared import check_run as shared_check_run


@dataclasses.dataclass
class ChecksGetPathParams:
    check_run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksGetRequest:
    path_params: ChecksGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_run: Optional[shared_check_run.CheckRun] = dataclasses.field(default=None)
    
