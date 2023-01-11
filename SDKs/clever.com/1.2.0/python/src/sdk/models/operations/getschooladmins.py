import dataclasses
from typing import Optional
from ..shared import schooladminsresponse as shared_schooladminsresponse


@dataclasses.dataclass
class GetSchoolAdminsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchoolAdminsRequest:
    query_params: GetSchoolAdminsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSchoolAdminsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    school_admins_response: Optional[shared_schooladminsresponse.SchoolAdminsResponse] = dataclasses.field(default=None)
    
