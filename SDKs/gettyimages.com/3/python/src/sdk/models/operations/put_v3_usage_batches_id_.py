import dataclasses
from typing import Optional
from ..shared import report_usage_batch_request as shared_report_usage_batch_request
from ..shared import report_usage_batch_response as shared_report_usage_batch_response


@dataclasses.dataclass
class PutV3UsageBatchesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutV3UsageBatchesIDRequest:
    path_params: PutV3UsageBatchesIDPathParams = dataclasses.field()
    request: Optional[shared_report_usage_batch_request.ReportUsageBatchRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutV3UsageBatchesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report_usage_batch_response: Optional[shared_report_usage_batch_response.ReportUsageBatchResponse] = dataclasses.field(default=None)
    
