import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import filesystempolicydescription as shared_filesystempolicydescription


@dataclasses.dataclass
class DescribeFileSystemPolicyPathParams:
    file_system_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeFileSystemPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeFileSystemPolicyRequest:
    headers: DescribeFileSystemPolicyHeaders = dataclasses.field()
    path_params: DescribeFileSystemPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeFileSystemPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    file_system_policy_description: Optional[shared_filesystempolicydescription.FileSystemPolicyDescription] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    policy_not_found: Optional[Any] = dataclasses.field(default=None)
    
