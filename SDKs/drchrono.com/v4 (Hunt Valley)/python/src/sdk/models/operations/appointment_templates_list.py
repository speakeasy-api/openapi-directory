import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import appointmenttemplate as shared_appointmenttemplate


@dataclasses.dataclass
class AppointmentTemplatesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentTemplatesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AppointmentTemplatesList200ApplicationJSON:
    r"""AppointmentTemplatesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_appointmenttemplate.AppointmentTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class AppointmentTemplatesListRequest:
    query_params: AppointmentTemplatesListQueryParams = dataclasses.field()
    security: AppointmentTemplatesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentTemplatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_templates_list_200_application_json_object: Optional[AppointmentTemplatesList200ApplicationJSON] = dataclasses.field(default=None)
    
