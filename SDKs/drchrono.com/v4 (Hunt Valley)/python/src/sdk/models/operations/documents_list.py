import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import scannedclinicaldocument as shared_scannedclinicaldocument


@dataclasses.dataclass
class DocumentsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DocumentsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DocumentsList200ApplicationJSON:
    r"""DocumentsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_scannedclinicaldocument.ScannedClinicalDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DocumentsListRequest:
    query_params: DocumentsListQueryParams = dataclasses.field()
    security: DocumentsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DocumentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    documents_list_200_application_json_object: Optional[DocumentsList200ApplicationJSON] = dataclasses.field(default=None)
    
