import dataclasses
from typing import Optional
from ..shared import changecustomcolumnexpressionrequest as shared_changecustomcolumnexpressionrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importalreadyinprogressresponse as shared_importalreadyinprogressresponse


@dataclasses.dataclass
class CatalogChangeCustomColumnExpressionPathParams:
    column_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'columnId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CatalogChangeCustomColumnExpressionRequest:
    path_params: CatalogChangeCustomColumnExpressionPathParams = dataclasses.field()
    request: shared_changecustomcolumnexpressionrequest.ChangeCustomColumnExpressionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CatalogChangeCustomColumnExpressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    import_already_in_progress_response: Optional[shared_importalreadyinprogressresponse.ImportAlreadyInProgressResponse] = dataclasses.field(default=None)
    
