import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import marketplace_listing_plan as shared_marketplace_listing_plan


@dataclasses.dataclass
class AppsListPlansStubbedQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListPlansStubbedRequest:
    query_params: AppsListPlansStubbedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListPlansStubbedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    marketplace_listing_plans: Optional[list[shared_marketplace_listing_plan.MarketplaceListingPlan]] = dataclasses.field(default=None)
    
