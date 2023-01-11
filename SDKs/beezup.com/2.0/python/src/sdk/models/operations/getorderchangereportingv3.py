import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import changeorderreporting as shared_changeorderreporting
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class GetOrderChangeReportingV3PathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    beez_up_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'beezUPOrderId', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    order_change_execution_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderChangeExecutionUUID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderChangeReportingV3Request:
    path_params: GetOrderChangeReportingV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderChangeReportingV3Response:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    change_order_reporting: Optional[shared_changeorderreporting.ChangeOrderReporting] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
