import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import analyticsstoreindex as shared_analyticsstoreindex


@dataclasses.dataclass
class AnalyticsStoreIndexPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AnalyticsStoreIndexRequest:
    path_params: AnalyticsStoreIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AnalyticsStoreIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    analytics_store_index: Optional[shared_analyticsstoreindex.AnalyticsStoreIndex] = dataclasses.field(default=None)
    
