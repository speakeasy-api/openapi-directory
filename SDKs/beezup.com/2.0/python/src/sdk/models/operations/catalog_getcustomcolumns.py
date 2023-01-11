import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import customcolumnlist as shared_customcolumnlist


@dataclasses.dataclass
class CatalogGetCustomColumnsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetCustomColumnsRequest:
    path_params: CatalogGetCustomColumnsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetCustomColumnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    custom_column_list: Optional[shared_customcolumnlist.CustomColumnList] = dataclasses.field(default=None)
    
