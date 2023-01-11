import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sectionresponse as shared_sectionresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetSectionPathParams:
    section_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'section_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSectionQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSection200ApplicationJSON:
    data: Optional[shared_sectionresponse.SectionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetSectionRequest:
    path_params: GetSectionPathParams = dataclasses.field()
    query_params: GetSectionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_section_200_application_json_object: Optional[GetSection200ApplicationJSON] = dataclasses.field(default=None)
    
