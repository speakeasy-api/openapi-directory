import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import state as shared_state
from ..shared import updatedetectormodelresponse as shared_updatedetectormodelresponse


@dataclasses.dataclass
class UpdateDetectorModelPathParams:
    detector_model_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'detectorModelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDetectorModelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDetectorModelRequestBodyDetectorModelDefinition:
    r"""UpdateDetectorModelRequestBodyDetectorModelDefinition
    Information that defines how a detector operates.
    """
    
    initial_state_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialStateName') }})
    states: Optional[list[shared_state.State]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
class UpdateDetectorModelRequestBodyEvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"


@dataclass_json
@dataclasses.dataclass
class UpdateDetectorModelRequestBody:
    detector_model_definition: UpdateDetectorModelRequestBodyDetectorModelDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDefinition') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    detector_model_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDescription') }})
    evaluation_method: Optional[UpdateDetectorModelRequestBodyEvaluationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMethod') }})
    

@dataclasses.dataclass
class UpdateDetectorModelRequest:
    headers: UpdateDetectorModelHeaders = dataclasses.field()
    path_params: UpdateDetectorModelPathParams = dataclasses.field()
    request: UpdateDetectorModelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDetectorModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_detector_model_response: Optional[shared_updatedetectormodelresponse.UpdateDetectorModelResponse] = dataclasses.field(default=None)
    
