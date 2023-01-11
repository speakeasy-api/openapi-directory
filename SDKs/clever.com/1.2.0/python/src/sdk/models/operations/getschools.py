import dataclasses
from typing import Optional
from ..shared import schoolsresponse as shared_schoolsresponse


@dataclasses.dataclass
class GetSchoolsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchoolsRequest:
    query_params: GetSchoolsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchoolsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schools_response: Optional[shared_schoolsresponse.SchoolsResponse] = dataclasses.field(default=None)
    
