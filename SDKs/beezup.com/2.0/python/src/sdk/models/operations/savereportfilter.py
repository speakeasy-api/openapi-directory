import dataclasses
from typing import Optional
from ..shared import savereportfilterrequest as shared_savereportfilterrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class SaveReportFilterPathParams:
    report_filter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportFilterId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SaveReportFilterRequest:
    path_params: SaveReportFilterPathParams = dataclasses.field()
    request: shared_savereportfilterrequest.SaveReportFilterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveReportFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
