import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sort_enum1 as shared_sort_enum1
from ..shared import sort_enum as shared_sort_enum
from ..shared import basic_error as shared_basic_error
from ..shared import marketplace_purchase as shared_marketplace_purchase


@dataclasses.dataclass
class AppsListAccountsForPlanStubbedPathParams:
    plan_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsListAccountsForPlanStubbedQueryParams:
    direction: Optional[shared_sort_enum1.SortEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListAccountsForPlanStubbedRequest:
    path_params: AppsListAccountsForPlanStubbedPathParams = dataclasses.field()
    query_params: AppsListAccountsForPlanStubbedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListAccountsForPlanStubbedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    marketplace_purchases: Optional[list[shared_marketplace_purchase.MarketplacePurchase]] = dataclasses.field(default=None)
    
