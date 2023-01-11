import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getintrospectionschemaresponse as shared_getintrospectionschemaresponse


@dataclasses.dataclass
class GetIntrospectionSchemaPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    
class GetIntrospectionSchemaFormatEnum(str, Enum):
    SDL = "SDL"
    JSON = "JSON"


@dataclasses.dataclass
class GetIntrospectionSchemaQueryParams:
    format: GetIntrospectionSchemaFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    include_directives: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeDirectives', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetIntrospectionSchemaHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIntrospectionSchemaRequest:
    headers: GetIntrospectionSchemaHeaders = dataclasses.field()
    path_params: GetIntrospectionSchemaPathParams = dataclasses.field()
    query_params: GetIntrospectionSchemaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIntrospectionSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_introspection_schema_response: Optional[shared_getintrospectionschemaresponse.GetIntrospectionSchemaResponse] = dataclasses.field(default=None)
    graph_ql_schema_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
