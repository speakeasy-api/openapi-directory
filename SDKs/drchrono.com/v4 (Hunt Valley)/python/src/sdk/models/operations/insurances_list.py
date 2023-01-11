import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import insurance as shared_insurance


@dataclasses.dataclass
class InsurancesListQueryParams:
    payer_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payer_type', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    term: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InsurancesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class InsurancesList200ApplicationJSON:
    r"""InsurancesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_insurance.Insurance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class InsurancesListRequest:
    query_params: InsurancesListQueryParams = dataclasses.field()
    security: InsurancesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InsurancesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insurances_list_200_application_json_object: Optional[InsurancesList200ApplicationJSON] = dataclasses.field(default=None)
    
