import dataclasses
from typing import Optional
from ..shared import reportbychannelrequest as shared_reportbychannelrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportbychannelresponse as shared_reportbychannelresponse


@dataclasses.dataclass
class GetStoreReportByChannelPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreReportByChannelRequest:
    path_params: GetStoreReportByChannelPathParams = dataclasses.field()
    request: shared_reportbychannelrequest.ReportByChannelRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetStoreReportByChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_by_channel_response: Optional[shared_reportbychannelresponse.ReportByChannelResponse] = dataclasses.field(default=None)
    
