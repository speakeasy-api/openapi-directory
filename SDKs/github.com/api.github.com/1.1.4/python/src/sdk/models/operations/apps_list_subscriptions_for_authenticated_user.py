import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import user_marketplace_purchase as shared_user_marketplace_purchase


@dataclasses.dataclass
class AppsListSubscriptionsForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListSubscriptionsForAuthenticatedUserRequest:
    query_params: AppsListSubscriptionsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListSubscriptionsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    user_marketplace_purchases: Optional[list[shared_user_marketplace_purchase.UserMarketplacePurchase]] = dataclasses.field(default=None)
    
