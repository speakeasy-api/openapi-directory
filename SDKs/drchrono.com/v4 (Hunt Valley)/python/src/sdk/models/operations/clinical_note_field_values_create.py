import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import soapnotelineitemfieldvalue as shared_soapnotelineitemfieldvalue


@dataclasses.dataclass
class ClinicalNoteFieldValuesCreateQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    clinical_note_field: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_field', 'style': 'form', 'explode': True }})
    clinical_note_template: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_template', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesCreateRequest:
    query_params: ClinicalNoteFieldValuesCreateQueryParams = dataclasses.field()
    security: ClinicalNoteFieldValuesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    soap_note_line_item_field_value: Optional[shared_soapnotelineitemfieldvalue.SoapNoteLineItemFieldValue] = dataclasses.field(default=None)
    
