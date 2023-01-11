import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import custompatientfieldtype as shared_custompatientfieldtype


@dataclasses.dataclass
class CustomDemographicsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CustomDemographicsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomDemographicsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomDemographicsReadRequest:
    path_params: CustomDemographicsReadPathParams = dataclasses.field()
    query_params: CustomDemographicsReadQueryParams = dataclasses.field()
    security: CustomDemographicsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomDemographicsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_patient_field_type: Optional[shared_custompatientfieldtype.CustomPatientFieldType] = dataclasses.field(default=None)
    
