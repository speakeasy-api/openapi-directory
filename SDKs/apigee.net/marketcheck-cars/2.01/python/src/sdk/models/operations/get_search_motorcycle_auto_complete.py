import dataclasses
from typing import Optional
from enum import Enum
from ..shared import api_key_enum5 as shared_api_key_enum5
from ..shared import inventory_type_enum as shared_inventory_type_enum
from ..shared import inventory_type_enum1 as shared_inventory_type_enum1
from ..shared import error as shared_error
from ..shared import searchautocompleteresponse as shared_searchautocompleteresponse


@dataclasses.dataclass
class GetSearchMotorcycleAutoCompleteQueryParams:
    field: shared_api_key_enum5.APIKeyEnum5 = dataclasses.field(metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    input: str = dataclasses.field(metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    inventory_type: Optional[shared_inventory_type_enum.InventoryTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inventory_type', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_inventory_type_enum1.InventoryTypeEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    term_counts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'term_counts', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchMotorcycleAutoCompleteRequest:
    query_params: GetSearchMotorcycleAutoCompleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchMotorcycleAutoCompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    search_auto_complete_response: Optional[shared_searchautocompleteresponse.SearchAutoCompleteResponse] = dataclasses.field(default=None)
    
