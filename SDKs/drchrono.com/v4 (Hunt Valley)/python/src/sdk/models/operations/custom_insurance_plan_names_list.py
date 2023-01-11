import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import custominsuranceplanname as shared_custominsuranceplanname


@dataclasses.dataclass
class CustomInsurancePlanNamesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomInsurancePlanNamesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CustomInsurancePlanNamesList200ApplicationJSON:
    r"""CustomInsurancePlanNamesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_custominsuranceplanname.CustomInsurancePlanName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CustomInsurancePlanNamesListRequest:
    query_params: CustomInsurancePlanNamesListQueryParams = dataclasses.field()
    security: CustomInsurancePlanNamesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomInsurancePlanNamesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_insurance_plan_names_list_200_application_json_object: Optional[CustomInsurancePlanNamesList200ApplicationJSON] = dataclasses.field(default=None)
    
