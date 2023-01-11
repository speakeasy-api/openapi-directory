import dataclasses
from typing import Optional
from ..shared import notfound as shared_notfound
from ..shared import teachersresponse as shared_teachersresponse


@dataclasses.dataclass
class GetTeachersForDistrictPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeachersForDistrictQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTeachersForDistrictRequest:
    path_params: GetTeachersForDistrictPathParams = dataclasses.field()
    query_params: GetTeachersForDistrictQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeachersForDistrictResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    teachers_response: Optional[shared_teachersresponse.TeachersResponse] = dataclasses.field(default=None)
    
