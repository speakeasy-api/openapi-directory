import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordpatch as shared_recordpatch
from ..shared import updaterecordsresponse as shared_updaterecordsresponse


@dataclasses.dataclass
class UpdateRecordsPathParams:
    dataset_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DatasetName', 'style': 'simple', 'explode': False }})
    identity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IdentityId', 'style': 'simple', 'explode': False }})
    identity_pool_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRecordsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_client_context: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRecordsRequestBody:
    sync_session_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncSessionToken') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    record_patches: Optional[list[shared_recordpatch.RecordPatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordPatches') }})
    

@dataclasses.dataclass
class UpdateRecordsRequest:
    headers: UpdateRecordsHeaders = dataclasses.field()
    path_params: UpdateRecordsPathParams = dataclasses.field()
    request: UpdateRecordsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRecordsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lambda_function_output_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    lambda_throttled_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_records_response: Optional[shared_updaterecordsresponse.UpdateRecordsResponse] = dataclasses.field(default=None)
    
