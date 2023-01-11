import dataclasses
from typing import Optional
from ..shared import changecustomcolumnrequest as shared_changecustomcolumnrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class ImportationSaveCustomColumnPathParams:
    column_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'columnId', 'style': 'simple', 'explode': False }})
    execution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationSaveCustomColumnRequest:
    path_params: ImportationSaveCustomColumnPathParams = dataclasses.field()
    request: shared_changecustomcolumnrequest.ChangeCustomColumnRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportationSaveCustomColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
