import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class RemovePermissionPathParams:
    function_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    statement_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'StatementId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemovePermissionQueryParams:
    qualifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RevisionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RemovePermissionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemovePermissionRequest:
    headers: RemovePermissionHeaders = dataclasses.field()
    path_params: RemovePermissionPathParams = dataclasses.field()
    query_params: RemovePermissionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RemovePermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
