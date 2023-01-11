import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listkeywordsfordatasourceresponse as shared_listkeywordsfordatasourceresponse

class ListKeywordsForDataSourceSourceEnum(str, Enum):
    AWS_CLOUDTRAIL = "AWS_Cloudtrail"
    AWS_CONFIG = "AWS_Config"
    AWS_SECURITY_HUB = "AWS_Security_Hub"
    AWS_API_CALL = "AWS_API_Call"
    MANUAL = "MANUAL"


@dataclasses.dataclass
class ListKeywordsForDataSourceQueryParams:
    source: ListKeywordsForDataSourceSourceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListKeywordsForDataSourceHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListKeywordsForDataSourceRequest:
    headers: ListKeywordsForDataSourceHeaders = dataclasses.field()
    query_params: ListKeywordsForDataSourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListKeywordsForDataSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_keywords_for_data_source_response: Optional[shared_listkeywordsfordatasourceresponse.ListKeywordsForDataSourceResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
