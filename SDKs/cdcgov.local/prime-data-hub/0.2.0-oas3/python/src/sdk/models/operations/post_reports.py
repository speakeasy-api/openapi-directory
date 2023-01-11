import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import report as shared_report

class PostReportsOptionEnum(str, Enum):
    VALIDATE_PAYLOAD = "ValidatePayload"
    CHECK_CONNECTIONS = "CheckConnections"
    SEND_IMMEDIATELY = "SendImmediately"
    SKIP_SEND = "SkipSend"
    SKIP_INVALID_ITEMS = "SkipInvalidItems"


@dataclasses.dataclass
class PostReportsQueryParams:
    client: str = dataclasses.field(metadata={'query_param': { 'field_name': 'client', 'style': 'form', 'explode': True }})
    default: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'default', 'style': 'form', 'explode': False }})
    option: Optional[PostReportsOptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    route_to: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routeTo', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostReportsRequest:
    query_params: PostReportsQueryParams = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'text/csv' }})
    security: PostReportsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    report: Optional[shared_report.Report] = dataclasses.field(default=None)
    
