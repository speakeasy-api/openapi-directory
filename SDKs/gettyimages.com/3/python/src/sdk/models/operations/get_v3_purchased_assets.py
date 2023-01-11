import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import previousassetpurchases as shared_previousassetpurchases


@dataclasses.dataclass
class GetV3PurchasedAssetsQueryParams:
    company_purchases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_purchases', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3PurchasedAssetsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3PurchasedAssetsRequest:
    headers: GetV3PurchasedAssetsHeaders = dataclasses.field()
    query_params: GetV3PurchasedAssetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3PurchasedAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    previous_asset_purchases: Optional[shared_previousassetpurchases.PreviousAssetPurchases] = dataclasses.field(default=None)
    
