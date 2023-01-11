import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaignpagedcollection as shared_campaignpagedcollection


@dataclasses.dataclass
class GetCampaignsQueryParams:
    campaign_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaign_name', 'style': 'form', 'explode': True }})
    campaign_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'campaign_status', 'style': 'form', 'explode': True }})
    end_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date_range', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date_range', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCampaignsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCampaignsRequest:
    query_params: GetCampaignsQueryParams = dataclasses.field()
    security: GetCampaignsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCampaignsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaign_paged_collection: Optional[shared_campaignpagedcollection.CampaignPagedCollection] = dataclasses.field(default=None)
    
