import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getobjectresponse as shared_getobjectresponse


@dataclasses.dataclass
class GetObjectPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetObjectHeaders:
    range: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetObjectRequest:
    headers: GetObjectHeaders = dataclasses.field()
    path_params: GetObjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    container_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    get_object_response: Optional[shared_getobjectresponse.GetObjectResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    object_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    requested_range_not_satisfiable_exception: Optional[Any] = dataclasses.field(default=None)
    
