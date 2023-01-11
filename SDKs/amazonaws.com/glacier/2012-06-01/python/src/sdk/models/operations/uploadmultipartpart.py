import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UploadMultipartPartPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    upload_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    vault_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadMultipartPartHeaders:
    content_range: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_sha256_tree_hash: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-sha256-tree-hash', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UploadMultipartPartRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class UploadMultipartPartRequest:
    headers: UploadMultipartPartHeaders = dataclasses.field()
    path_params: UploadMultipartPartPathParams = dataclasses.field()
    request: UploadMultipartPartRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UploadMultipartPartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    missing_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    upload_multipart_part_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
