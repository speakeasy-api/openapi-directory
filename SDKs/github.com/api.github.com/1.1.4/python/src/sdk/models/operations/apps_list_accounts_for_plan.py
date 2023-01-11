import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sort_enum1 as shared_sort_enum1
from ..shared import sort_enum as shared_sort_enum
from ..shared import basic_error as shared_basic_error
from ..shared import marketplace_purchase as shared_marketplace_purchase
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsListAccountsForPlanPathParams:
    plan_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsListAccountsForPlanQueryParams:
    direction: Optional[shared_sort_enum1.SortEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListAccountsForPlanRequest:
    path_params: AppsListAccountsForPlanPathParams = dataclasses.field()
    query_params: AppsListAccountsForPlanQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListAccountsForPlanResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    marketplace_purchases: Optional[list[shared_marketplace_purchase.MarketplacePurchase]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
