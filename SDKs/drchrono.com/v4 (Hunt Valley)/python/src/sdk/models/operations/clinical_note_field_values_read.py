import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import soapnotelineitemfieldvalue as shared_soapnotelineitemfieldvalue


@dataclasses.dataclass
class ClinicalNoteFieldValuesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    clinical_note_field: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_field', 'style': 'form', 'explode': True }})
    clinical_note_template: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_template', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesReadRequest:
    path_params: ClinicalNoteFieldValuesReadPathParams = dataclasses.field()
    query_params: ClinicalNoteFieldValuesReadQueryParams = dataclasses.field()
    security: ClinicalNoteFieldValuesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    soap_note_line_item_field_value: Optional[shared_soapnotelineitemfieldvalue.SoapNoteLineItemFieldValue] = dataclasses.field(default=None)
    
