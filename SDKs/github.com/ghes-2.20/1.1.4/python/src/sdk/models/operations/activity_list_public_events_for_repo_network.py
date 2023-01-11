import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListPublicEventsForRepoNetworkPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListPublicEventsForRepoNetworkQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListPublicEventsForRepoNetworkRequest:
    path_params: ActivityListPublicEventsForRepoNetworkPathParams = dataclasses.field()
    query_params: ActivityListPublicEventsForRepoNetworkQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListPublicEventsForRepoNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
