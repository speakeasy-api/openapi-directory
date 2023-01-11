import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import searchexception as shared_searchexception
from ..shared import searchresponse as shared_searchresponse

class SearchFormatEnum(str, Enum):
    SDK = "sdk"

class SearchPrettyEnum(str, Enum):
    TRUE = "true"

class SearchQParserEnum(str, Enum):
    SIMPLE = "simple"
    STRUCTURED = "structured"
    LUCENE = "lucene"
    DISMAX = "dismax"


@dataclasses.dataclass
class SearchQueryParams:
    format: SearchFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pretty: SearchPrettyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    expr: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expr', 'style': 'form', 'explode': True }})
    facet: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet', 'style': 'form', 'explode': True }})
    fq: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fq', 'style': 'form', 'explode': True }})
    highlight: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highlight', 'style': 'form', 'explode': True }})
    partial: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'partial', 'style': 'form', 'explode': True }})
    q_options: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q.options', 'style': 'form', 'explode': True }})
    q_parser: Optional[SearchQParserEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q.parser', 'style': 'form', 'explode': True }})
    return_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    stats: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stats', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchRequest:
    headers: SearchHeaders = dataclasses.field()
    query_params: SearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_exception: Optional[shared_searchexception.SearchException] = dataclasses.field(default=None)
    search_response: Optional[shared_searchresponse.SearchResponse] = dataclasses.field(default=None)
    
