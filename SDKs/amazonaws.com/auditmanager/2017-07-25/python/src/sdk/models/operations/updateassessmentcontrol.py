import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateassessmentcontrolresponse as shared_updateassessmentcontrolresponse


@dataclasses.dataclass
class UpdateAssessmentControlPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'controlId', 'style': 'simple', 'explode': False }})
    control_set_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssessmentControlHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAssessmentControlRequestBodyControlStatusEnum(str, Enum):
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class UpdateAssessmentControlRequestBody:
    comment_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentBody') }})
    control_status: Optional[UpdateAssessmentControlRequestBodyControlStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlStatus') }})
    

@dataclasses.dataclass
class UpdateAssessmentControlRequest:
    headers: UpdateAssessmentControlHeaders = dataclasses.field()
    path_params: UpdateAssessmentControlPathParams = dataclasses.field()
    request: UpdateAssessmentControlRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAssessmentControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_assessment_control_response: Optional[shared_updateassessmentcontrolresponse.UpdateAssessmentControlResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
