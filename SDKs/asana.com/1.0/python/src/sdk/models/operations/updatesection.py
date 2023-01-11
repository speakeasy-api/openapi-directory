import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sectionrequest as shared_sectionrequest
from ..shared import sectionresponse as shared_sectionresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateSectionPathParams:
    section_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'section_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSectionQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSectionRequestBody:
    data: Optional[shared_sectionrequest.SectionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSection200ApplicationJSON:
    data: Optional[shared_sectionresponse.SectionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdateSectionRequest:
    path_params: UpdateSectionPathParams = dataclasses.field()
    query_params: UpdateSectionQueryParams = dataclasses.field()
    request: UpdateSectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_section_200_application_json_object: Optional[UpdateSection200ApplicationJSON] = dataclasses.field(default=None)
    
