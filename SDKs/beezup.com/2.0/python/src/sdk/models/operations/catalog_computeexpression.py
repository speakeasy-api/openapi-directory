import dataclasses
from typing import Optional
from ..shared import computeexpressionrequest as shared_computeexpressionrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class CatalogComputeExpressionPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogComputeExpressionRequest:
    path_params: CatalogComputeExpressionPathParams = dataclasses.field()
    request: shared_computeexpressionrequest.ComputeExpressionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CatalogComputeExpressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    catalog_compute_expression_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    catalog_compute_expression_400_application_json_string: Optional[str] = dataclasses.field(default=None)
    
