import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import deleteresourcepolicystatementresponse as shared_deleteresourcepolicystatementresponse


@dataclasses.dataclass
class DeleteResourcePolicyStatementPathParams:
    resource_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    statement_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteResourcePolicyStatementQueryParams:
    expected_revision_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expectedRevisionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteResourcePolicyStatementHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteResourcePolicyStatementRequest:
    headers: DeleteResourcePolicyStatementHeaders = dataclasses.field()
    path_params: DeleteResourcePolicyStatementPathParams = dataclasses.field()
    query_params: DeleteResourcePolicyStatementQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteResourcePolicyStatementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_resource_policy_statement_response: Optional[shared_deleteresourcepolicystatementresponse.DeleteResourcePolicyStatementResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
