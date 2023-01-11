import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import disputesummaryresponse as shared_disputesummaryresponse


GET_PAYMENT_DISPUTE_SUMMARIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class GetPaymentDisputeSummariesQueryParams:
    buyer_username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'buyer_username', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    open_date_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'open_date_from', 'style': 'form', 'explode': True }})
    open_date_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'open_date_to', 'style': 'form', 'explode': True }})
    order_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_id', 'style': 'form', 'explode': True }})
    payment_dispute_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payment_dispute_status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentDisputeSummariesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentDisputeSummariesRequest:
    query_params: GetPaymentDisputeSummariesQueryParams = dataclasses.field()
    security: GetPaymentDisputeSummariesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetPaymentDisputeSummariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dispute_summary_response: Optional[shared_disputesummaryresponse.DisputeSummaryResponse] = dataclasses.field(default=None)
    
