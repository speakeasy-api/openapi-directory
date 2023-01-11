import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class MedicationsAppendToPharmacyNotePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MedicationsAppendToPharmacyNoteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MedicationsAppendToPharmacyNoteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MedicationsAppendToPharmacyNoteRequest:
    path_params: MedicationsAppendToPharmacyNotePathParams = dataclasses.field()
    query_params: MedicationsAppendToPharmacyNoteQueryParams = dataclasses.field()
    security: MedicationsAppendToPharmacyNoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MedicationsAppendToPharmacyNoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
