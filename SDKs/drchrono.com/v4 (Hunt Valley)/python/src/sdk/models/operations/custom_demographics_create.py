import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import custompatientfieldtype as shared_custompatientfieldtype


@dataclasses.dataclass
class CustomDemographicsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomDemographicsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomDemographicsCreateRequest:
    query_params: CustomDemographicsCreateQueryParams = dataclasses.field()
    security: CustomDemographicsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomDemographicsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_patient_field_type: Optional[shared_custompatientfieldtype.CustomPatientFieldType] = dataclasses.field(default=None)
    
