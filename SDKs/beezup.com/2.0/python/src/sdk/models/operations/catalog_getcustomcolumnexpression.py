import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class CatalogGetCustomColumnExpressionPathParams:
    column_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'columnId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogGetCustomColumnExpressionRequest:
    path_params: CatalogGetCustomColumnExpressionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CatalogGetCustomColumnExpressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    catalog_get_custom_column_expression_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
