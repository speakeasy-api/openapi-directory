import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import deleteresourceshareresponse as shared_deleteresourceshareresponse


@dataclasses.dataclass
class DeleteResourceShareQueryParams:
    resource_share_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resourceShareArn', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteResourceShareHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteResourceShareRequest:
    headers: DeleteResourceShareHeaders = dataclasses.field()
    query_params: DeleteResourceShareQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteResourceShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_resource_share_response: Optional[shared_deleteresourceshareresponse.DeleteResourceShareResponse] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_state_transition_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_arn_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
