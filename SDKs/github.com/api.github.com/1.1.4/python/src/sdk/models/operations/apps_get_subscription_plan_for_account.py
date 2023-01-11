import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import marketplace_purchase as shared_marketplace_purchase


@dataclasses.dataclass
class AppsGetSubscriptionPlanForAccountPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetSubscriptionPlanForAccountRequest:
    path_params: AppsGetSubscriptionPlanForAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetSubscriptionPlanForAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    marketplace_purchase: Optional[shared_marketplace_purchase.MarketplacePurchase] = dataclasses.field(default=None)
    
