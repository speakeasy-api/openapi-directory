import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import inventorycategory as shared_inventorycategory


@dataclasses.dataclass
class InventoryCategoriesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InventoryCategoriesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class InventoryCategoriesList200ApplicationJSON:
    r"""InventoryCategoriesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_inventorycategory.InventoryCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class InventoryCategoriesListRequest:
    query_params: InventoryCategoriesListQueryParams = dataclasses.field()
    security: InventoryCategoriesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InventoryCategoriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_categories_list_200_application_json_object: Optional[InventoryCategoriesList200ApplicationJSON] = dataclasses.field(default=None)
    
