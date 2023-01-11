import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ClinicalNoteFieldValuesUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesUpdateQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    clinical_note_field: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_field', 'style': 'form', 'explode': True }})
    clinical_note_template: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_template', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesUpdateRequest:
    path_params: ClinicalNoteFieldValuesUpdatePathParams = dataclasses.field()
    query_params: ClinicalNoteFieldValuesUpdateQueryParams = dataclasses.field()
    security: ClinicalNoteFieldValuesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
