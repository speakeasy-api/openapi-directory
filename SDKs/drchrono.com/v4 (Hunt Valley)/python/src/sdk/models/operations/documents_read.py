import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scannedclinicaldocument as shared_scannedclinicaldocument


@dataclasses.dataclass
class DocumentsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DocumentsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DocumentsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DocumentsReadRequest:
    path_params: DocumentsReadPathParams = dataclasses.field()
    query_params: DocumentsReadQueryParams = dataclasses.field()
    security: DocumentsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DocumentsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scanned_clinical_document: Optional[shared_scannedclinicaldocument.ScannedClinicalDocument] = dataclasses.field(default=None)
    
