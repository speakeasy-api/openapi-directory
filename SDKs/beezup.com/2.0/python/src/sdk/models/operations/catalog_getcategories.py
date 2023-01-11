import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import categorylist as shared_categorylist


@dataclasses.dataclass
class CatalogGetCategoriesPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetCategoriesHeaders:
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetCategoriesRequest:
    headers: CatalogGetCategoriesHeaders = dataclasses.field()
    path_params: CatalogGetCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetCategoriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    category_list: Optional[shared_categorylist.CategoryList] = dataclasses.field(default=None)
    
