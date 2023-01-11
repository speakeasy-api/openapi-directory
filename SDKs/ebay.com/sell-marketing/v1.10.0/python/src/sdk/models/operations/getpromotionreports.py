import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import promotionsreportpagedcollection as shared_promotionsreportpagedcollection


@dataclasses.dataclass
class GetPromotionReportsQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    promotion_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'promotion_status', 'style': 'form', 'explode': True }})
    promotion_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'promotion_type', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPromotionReportsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPromotionReportsRequest:
    query_params: GetPromotionReportsQueryParams = dataclasses.field()
    security: GetPromotionReportsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPromotionReportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    promotions_report_paged_collection: Optional[shared_promotionsreportpagedcollection.PromotionsReportPagedCollection] = dataclasses.field(default=None)
    
