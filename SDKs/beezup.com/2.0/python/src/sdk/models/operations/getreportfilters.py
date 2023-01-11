import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportfilterlist as shared_reportfilterlist


@dataclasses.dataclass
class GetReportFiltersPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportFiltersRequest:
    path_params: GetReportFiltersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_filter_list: Optional[shared_reportfilterlist.ReportFilterList] = dataclasses.field(default=None)
    
