import dataclasses
from typing import Optional
from enum import Enum
from ..shared import optimisationactionnamegeneralparameters_enum as shared_optimisationactionnamegeneralparameters_enum
from ..shared import optimiserequest as shared_optimiserequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class OptimisePathParams:
    action_name: shared_optimisationactionnamegeneralparameters_enum.OptimisationActionNameGeneralParametersEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'actionName', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptimiseRequest:
    path_params: OptimisePathParams = dataclasses.field()
    request: shared_optimiserequest.OptimiseRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OptimiseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
