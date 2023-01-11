import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import webhookactivityresponse as shared_webhookactivityresponse


@dataclasses.dataclass
class GetWebhookLogsQueryParams:
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    endpoint_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endpointUrl', 'style': 'form', 'explode': True }})
    event: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    resource_path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourcePath', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    status_code: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'statusCode', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWebhookLogsHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookLogsRequest:
    headers: GetWebhookLogsHeaders = dataclasses.field()
    query_params: GetWebhookLogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhookLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_activity_response: Optional[shared_webhookactivityresponse.WebhookActivityResponse] = dataclasses.field(default=None)
    
