import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportfilter as shared_reportfilter


@dataclasses.dataclass
class GetReportFilterPathParams:
    report_filter_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportFilterId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportFilterRequest:
    path_params: GetReportFilterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_filter: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None)
    
