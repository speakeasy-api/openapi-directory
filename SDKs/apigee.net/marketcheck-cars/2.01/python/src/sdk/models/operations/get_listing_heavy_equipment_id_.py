import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import heavyequipmentslisting as shared_heavyequipmentslisting


@dataclasses.dataclass
class GetListingHeavyEquipmentIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDRequest:
    path_params: GetListingHeavyEquipmentIDPathParams = dataclasses.field()
    query_params: GetListingHeavyEquipmentIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingHeavyEquipmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    heavy_equipments_listing: Optional[shared_heavyequipmentslisting.HeavyEquipmentsListing] = dataclasses.field(default=None)
    
