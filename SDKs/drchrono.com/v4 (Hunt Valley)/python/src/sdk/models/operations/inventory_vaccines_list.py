import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import inventoryvaccine as shared_inventoryvaccine


@dataclasses.dataclass
class InventoryVaccinesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    cvx_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cvx_code', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InventoryVaccinesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class InventoryVaccinesList200ApplicationJSON:
    r"""InventoryVaccinesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_inventoryvaccine.InventoryVaccine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class InventoryVaccinesListRequest:
    query_params: InventoryVaccinesListQueryParams = dataclasses.field()
    security: InventoryVaccinesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InventoryVaccinesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_vaccines_list_200_application_json_object: Optional[InventoryVaccinesList200ApplicationJSON] = dataclasses.field(default=None)
    
