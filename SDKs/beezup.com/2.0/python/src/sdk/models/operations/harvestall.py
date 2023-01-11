import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class HarvestAllQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class HarvestAllRequest:
    query_params: HarvestAllQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HarvestAllResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
