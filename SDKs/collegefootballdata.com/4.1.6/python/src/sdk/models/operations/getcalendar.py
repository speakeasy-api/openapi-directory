import dataclasses
from typing import Optional
from ..shared import week as shared_week


@dataclasses.dataclass
class GetCalendarQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCalendarRequest:
    query_params: GetCalendarQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCalendarResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    weeks: Optional[list[shared_week.Week]] = dataclasses.field(default=None)
    
