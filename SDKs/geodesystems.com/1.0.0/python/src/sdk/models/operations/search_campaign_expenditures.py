import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchCampaignExpendituresQueryParams:
    changedate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.amount', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.city', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_committee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.committee', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.location', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_memo_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.memo_text', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_party: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.party', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_purpose: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.purpose', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_recipient: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.recipient', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.state', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_transaction_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.transaction_date', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_zip_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.zip_code', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchCampaignExpendituresRequest:
    query_params: SearchCampaignExpendituresQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchCampaignExpendituresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
