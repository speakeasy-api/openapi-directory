import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listdomaindeliverabilitycampaignsresponse as shared_listdomaindeliverabilitycampaignsresponse


@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsPathParams:
    subscribed_domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscribedDomain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsQueryParams:
    end_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    start_date: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsRequest:
    headers: ListDomainDeliverabilityCampaignsHeaders = dataclasses.field()
    path_params: ListDomainDeliverabilityCampaignsPathParams = dataclasses.field()
    query_params: ListDomainDeliverabilityCampaignsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_domain_deliverability_campaigns_response: Optional[shared_listdomaindeliverabilitycampaignsresponse.ListDomainDeliverabilityCampaignsResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
