import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importationsresponse as shared_importationsresponse


@dataclasses.dataclass
class ImportationGetReportingsAllStoresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    importations_per_store_response: Optional[dict[str, shared_importationsresponse.ImportationsResponse]] = dataclasses.field(default=None)
    
