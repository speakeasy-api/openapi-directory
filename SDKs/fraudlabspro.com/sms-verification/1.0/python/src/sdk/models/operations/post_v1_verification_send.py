import dataclasses
from typing import Optional
from enum import Enum

class PostV1VerificationSendFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class PostV1VerificationSendQueryParams:
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    tel: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tel', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    format: Optional[PostV1VerificationSendFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    mesg: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mesg', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostV1VerificationSendRequest:
    query_params: PostV1VerificationSendQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostV1VerificationSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_v1_verification_send_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
