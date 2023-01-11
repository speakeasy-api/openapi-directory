import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class ChangeOrderV3PathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    beez_up_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'beezUPOrderId', 'style': 'simple', 'explode': False }})
    change_order_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'changeOrderType', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChangeOrderV3QueryParams:
    user_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    test_mode: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'testMode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ChangeOrderV3Request:
    path_params: ChangeOrderV3PathParams = dataclasses.field()
    query_params: ChangeOrderV3QueryParams = dataclasses.field()
    request: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChangeOrderV3Response:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
