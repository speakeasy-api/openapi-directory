import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UploadArchivePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadArchiveHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_archive_description: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-archive-description', 'style': 'simple', 'explode': False }})
    x_amz_sha256_tree_hash: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-sha256-tree-hash', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UploadArchiveRequestBody:
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class UploadArchiveRequest:
    headers: UploadArchiveHeaders = dataclasses.field()
    path_params: UploadArchivePathParams = dataclasses.field()
    request: UploadArchiveRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UploadArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    archive_creation_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    missing_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    request_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
