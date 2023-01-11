import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import referrer_traffic as shared_referrer_traffic


@dataclasses.dataclass
class ReposGetTopReferrersPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetTopReferrersRequest:
    path_params: ReposGetTopReferrersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetTopReferrersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    referrer_traffics: Optional[list[shared_referrer_traffic.ReferrerTraffic]] = dataclasses.field(default=None)
    
