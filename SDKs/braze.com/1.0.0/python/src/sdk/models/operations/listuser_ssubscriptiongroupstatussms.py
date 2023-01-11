import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListUserSSubscriptionGroupStatusSmsQueryParams:
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    subscription_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subscription_group_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUserSSubscriptionGroupStatusSmsRequest:
    query_params: ListUserSSubscriptionGroupStatusSmsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListUserSSubscriptionGroupStatusSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
