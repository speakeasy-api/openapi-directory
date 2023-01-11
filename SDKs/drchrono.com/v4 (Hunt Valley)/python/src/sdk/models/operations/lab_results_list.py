import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import labresult as shared_labresult


@dataclasses.dataclass
class LabResultsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabResultsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class LabResultsList200ApplicationJSON:
    r"""LabResultsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_labresult.LabResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class LabResultsListRequest:
    query_params: LabResultsListQueryParams = dataclasses.field()
    security: LabResultsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabResultsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_results_list_200_application_json_object: Optional[LabResultsList200ApplicationJSON] = dataclasses.field(default=None)
    
