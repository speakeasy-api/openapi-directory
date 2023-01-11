import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import searchexception as shared_searchexception
from ..shared import suggestresponse as shared_suggestresponse

class SuggestFormatEnum(str, Enum):
    SDK = "sdk"

class SuggestPrettyEnum(str, Enum):
    TRUE = "true"


@dataclasses.dataclass
class SuggestQueryParams:
    format: SuggestFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pretty: SuggestPrettyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    suggester: str = dataclasses.field(metadata={'query_param': { 'field_name': 'suggester', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SuggestHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SuggestRequest:
    headers: SuggestHeaders = dataclasses.field()
    query_params: SuggestQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SuggestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_exception: Optional[shared_searchexception.SearchException] = dataclasses.field(default=None)
    suggest_response: Optional[shared_suggestresponse.SuggestResponse] = dataclasses.field(default=None)
    
