import dataclasses
from typing import Optional
from enum import Enum

class PostV1OrderFeedbackActionEnum(str, Enum):
    APPROVE = "APPROVE"
    REJECT = "REJECT"
    REJECT_BLACKLIST = "REJECT_BLACKLIST"

class PostV1OrderFeedbackFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class PostV1OrderFeedbackQueryParams:
    action: PostV1OrderFeedbackActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[PostV1OrderFeedbackFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostV1OrderFeedbackRequest:
    query_params: PostV1OrderFeedbackQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostV1OrderFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_v1_order_feedback_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
