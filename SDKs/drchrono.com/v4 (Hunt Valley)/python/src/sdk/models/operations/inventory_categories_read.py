import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import inventorycategory as shared_inventorycategory


@dataclasses.dataclass
class InventoryCategoriesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InventoryCategoriesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InventoryCategoriesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class InventoryCategoriesReadRequest:
    path_params: InventoryCategoriesReadPathParams = dataclasses.field()
    query_params: InventoryCategoriesReadQueryParams = dataclasses.field()
    security: InventoryCategoriesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InventoryCategoriesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_category: Optional[shared_inventorycategory.InventoryCategory] = dataclasses.field(default=None)
    
