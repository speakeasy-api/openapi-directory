import dataclasses
from typing import Optional


@dataclasses.dataclass
class MonthlyActiveUsersForLast30DaysQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MonthlyActiveUsersForLast30DaysRequest:
    query_params: MonthlyActiveUsersForLast30DaysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MonthlyActiveUsersForLast30DaysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
