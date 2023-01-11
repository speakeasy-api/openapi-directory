import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import soapnotelineitemfieldtype as shared_soapnotelineitemfieldtype


@dataclasses.dataclass
class ClinicalNoteFieldTypesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClinicalNoteFieldTypesReadQueryParams:
    clinical_note_template: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_template', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteFieldTypesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClinicalNoteFieldTypesReadRequest:
    path_params: ClinicalNoteFieldTypesReadPathParams = dataclasses.field()
    query_params: ClinicalNoteFieldTypesReadQueryParams = dataclasses.field()
    security: ClinicalNoteFieldTypesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteFieldTypesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    soap_note_line_item_field_type: Optional[shared_soapnotelineitemfieldtype.SoapNoteLineItemFieldType] = dataclasses.field(default=None)
    
