import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import billingperiodlist as shared_billingperiodlist


@dataclasses.dataclass
class GetBillingPeriodsHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBillingPeriodsRequest:
    headers: GetBillingPeriodsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetBillingPeriodsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    billing_period_list: Optional[shared_billingperiodlist.BillingPeriodList] = dataclasses.field(default=None)
    
