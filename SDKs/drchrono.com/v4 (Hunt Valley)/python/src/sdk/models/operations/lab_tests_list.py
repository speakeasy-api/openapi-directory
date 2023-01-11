import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import labtest as shared_labtest


@dataclasses.dataclass
class LabTestsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabTestsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class LabTestsList200ApplicationJSON:
    r"""LabTestsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_labtest.LabTest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class LabTestsListRequest:
    query_params: LabTestsListQueryParams = dataclasses.field()
    security: LabTestsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabTestsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_tests_list_200_application_json_object: Optional[LabTestsList200ApplicationJSON] = dataclasses.field(default=None)
    
