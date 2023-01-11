import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filesystempolicydescription as shared_filesystempolicydescription


@dataclasses.dataclass
class PutFileSystemPolicyPathParams:
    file_system_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutFileSystemPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutFileSystemPolicyRequestBody:
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    bypass_policy_lockout_safety_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BypassPolicyLockoutSafetyCheck') }})
    

@dataclasses.dataclass
class PutFileSystemPolicyRequest:
    headers: PutFileSystemPolicyHeaders = dataclasses.field()
    path_params: PutFileSystemPolicyPathParams = dataclasses.field()
    request: PutFileSystemPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutFileSystemPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    file_system_policy_description: Optional[shared_filesystempolicydescription.FileSystemPolicyDescription] = dataclasses.field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_policy_exception: Optional[Any] = dataclasses.field(default=None)
    
