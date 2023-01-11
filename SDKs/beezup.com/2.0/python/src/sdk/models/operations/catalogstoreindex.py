import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import catalogstoreindex as shared_catalogstoreindex


@dataclasses.dataclass
class CatalogStoreIndexPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogStoreIndexRequest:
    path_params: CatalogStoreIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogStoreIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    catalog_store_index: Optional[shared_catalogstoreindex.CatalogStoreIndex] = dataclasses.field(default=None)
    
