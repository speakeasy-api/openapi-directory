import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import state as shared_state
from ..shared import tag as shared_tag
from ..shared import createdetectormodelresponse as shared_createdetectormodelresponse


@dataclasses.dataclass
class CreateDetectorModelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDetectorModelRequestBodyDetectorModelDefinition:
    r"""CreateDetectorModelRequestBodyDetectorModelDefinition
    Information that defines how a detector operates.
    """
    
    initial_state_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialStateName') }})
    states: Optional[list[shared_state.State]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
class CreateDetectorModelRequestBodyEvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"


@dataclass_json
@dataclasses.dataclass
class CreateDetectorModelRequestBody:
    detector_model_definition: CreateDetectorModelRequestBodyDetectorModelDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDefinition') }})
    detector_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    detector_model_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDescription') }})
    evaluation_method: Optional[CreateDetectorModelRequestBodyEvaluationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMethod') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateDetectorModelRequest:
    headers: CreateDetectorModelHeaders = dataclasses.field()
    request: CreateDetectorModelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDetectorModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_detector_model_response: Optional[shared_createdetectormodelresponse.CreateDetectorModelResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
