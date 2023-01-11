import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import accountsynchronizationlist as shared_accountsynchronizationlist
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationV3QueryParams:
    store_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationV3Headers:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationV3Request:
    headers: GetMarketplaceAccountsSynchronizationV3Headers = dataclasses.field()
    query_params: GetMarketplaceAccountsSynchronizationV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketplaceAccountsSynchronizationV3Response:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    account_synchronization_list: Optional[shared_accountsynchronizationlist.AccountSynchronizationList] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
