import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import storeshares as shared_storeshares


@dataclasses.dataclass
class GetStoreSharesPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreSharesHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreSharesRequest:
    headers: GetStoreSharesHeaders = dataclasses.field()
    path_params: GetStoreSharesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoreSharesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    store_shares: Optional[shared_storeshares.StoreShares] = dataclasses.field(default=None)
    
