import dataclasses
from typing import Optional
from ..shared import configureautoimportintervalrequest as shared_configureautoimportintervalrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class AutoConfigureAutoImportIntervalPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AutoConfigureAutoImportIntervalRequest:
    path_params: AutoConfigureAutoImportIntervalPathParams = dataclasses.field()
    request: shared_configureautoimportintervalrequest.ConfigureAutoImportIntervalRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AutoConfigureAutoImportIntervalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
