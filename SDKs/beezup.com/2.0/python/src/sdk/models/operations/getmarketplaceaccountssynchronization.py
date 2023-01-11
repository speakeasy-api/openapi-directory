import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import accountsynchronizationlist as shared_accountsynchronizationlist


@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationRequest:
    headers: GetMarketplaceAccountsSynchronizationHeaders = dataclasses.field()
    query_params: GetMarketplaceAccountsSynchronizationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    account_synchronization_list: Optional[shared_accountsynchronizationlist.AccountSynchronizationList] = dataclasses.field(default=None)
    
