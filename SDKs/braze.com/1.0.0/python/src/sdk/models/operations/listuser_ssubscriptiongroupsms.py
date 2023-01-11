import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListUserSSubscriptionGroupSmsQueryParams:
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUserSSubscriptionGroupSmsRequest:
    query_params: ListUserSSubscriptionGroupSmsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListUserSSubscriptionGroupSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
