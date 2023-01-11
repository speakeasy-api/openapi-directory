import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import catalogcolumnlist as shared_catalogcolumnlist


@dataclasses.dataclass
class CatalogGetCatalogColumnsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetCatalogColumnsRequest:
    path_params: CatalogGetCatalogColumnsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetCatalogColumnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    catalog_column_list: Optional[shared_catalogcolumnlist.CatalogColumnList] = dataclasses.field(default=None)
    
