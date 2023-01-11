import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import analyticsindex as shared_analyticsindex


@dataclasses.dataclass
class AnalyticsIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    analytics_index: Optional[shared_analyticsindex.AnalyticsIndex] = dataclasses.field(default=None)
    
