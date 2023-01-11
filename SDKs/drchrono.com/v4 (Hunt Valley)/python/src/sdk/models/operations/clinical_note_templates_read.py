import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import soapnotecustomreport as shared_soapnotecustomreport


@dataclasses.dataclass
class ClinicalNoteTemplatesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClinicalNoteTemplatesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteTemplatesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClinicalNoteTemplatesReadRequest:
    path_params: ClinicalNoteTemplatesReadPathParams = dataclasses.field()
    query_params: ClinicalNoteTemplatesReadQueryParams = dataclasses.field()
    security: ClinicalNoteTemplatesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    soap_note_custom_report: Optional[shared_soapnotecustomreport.SoapNoteCustomReport] = dataclasses.field(default=None)
    
