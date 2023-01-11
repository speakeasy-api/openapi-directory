import dataclasses
from typing import Optional
from ..shared import returningproduction as shared_returningproduction


@dataclasses.dataclass
class GetReturningProductionQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReturningProductionRequest:
    query_params: GetReturningProductionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReturningProductionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    returning_productions: Optional[list[shared_returningproduction.ReturningProduction]] = dataclasses.field(default=None)
    
