import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behavior as shared_behavior
from ..shared import validatesecurityprofilebehaviorsresponse as shared_validatesecurityprofilebehaviorsresponse


@dataclasses.dataclass
class ValidateSecurityProfileBehaviorsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ValidateSecurityProfileBehaviorsRequestBody:
    behaviors: list[shared_behavior.Behavior] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviors') }})
    

@dataclasses.dataclass
class ValidateSecurityProfileBehaviorsRequest:
    headers: ValidateSecurityProfileBehaviorsHeaders = dataclasses.field()
    request: ValidateSecurityProfileBehaviorsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateSecurityProfileBehaviorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validate_security_profile_behaviors_response: Optional[shared_validatesecurityprofilebehaviorsresponse.ValidateSecurityProfileBehaviorsResponse] = dataclasses.field(default=None)
    
