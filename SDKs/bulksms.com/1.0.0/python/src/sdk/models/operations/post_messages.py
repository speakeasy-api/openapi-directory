import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import submissionentry as shared_submissionentry
from ..shared import error as shared_error
from ..shared import message as shared_message


@dataclasses.dataclass
class PostMessagesQueryParams:
    auto_unicode: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auto-unicode', 'style': 'form', 'explode': True }})
    deduplication_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deduplication-id', 'style': 'form', 'explode': True }})
    schedule_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'schedule-date', 'style': 'form', 'explode': True }})
    schedule_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'schedule-description', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostMessagesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostMessagesRequest:
    query_params: PostMessagesQueryParams = dataclasses.field()
    request: list[shared_submissionentry.SubmissionEntry] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMessagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    
