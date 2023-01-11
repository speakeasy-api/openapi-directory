import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import trackingstatus as shared_trackingstatus


@dataclasses.dataclass
class GetTrackingStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    tracking_status: Optional[shared_trackingstatus.TrackingStatus] = dataclasses.field(default=None)
    
