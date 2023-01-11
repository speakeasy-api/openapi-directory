import dataclasses
from typing import Optional
from ..shared import districtadminsresponse as shared_districtadminsresponse


@dataclasses.dataclass
class GetDistrictAdminsQueryParams:
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    show_links: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_links', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDistrictAdminsRequest:
    query_params: GetDistrictAdminsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictAdminsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    district_admins_response: Optional[shared_districtadminsresponse.DistrictAdminsResponse] = dataclasses.field(default=None)
    
