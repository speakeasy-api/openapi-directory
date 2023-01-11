import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choiceupdate as shared_choiceupdate
from ..shared import updateansweroutput as shared_updateansweroutput


@dataclasses.dataclass
class UpdateAnswerPathParams:
    lens_alias: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LensAlias', 'style': 'simple', 'explode': False }})
    question_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'QuestionId', 'style': 'simple', 'explode': False }})
    workload_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAnswerHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAnswerRequestBodyReasonEnum(str, Enum):
    OUT_OF_SCOPE = "OUT_OF_SCOPE"
    BUSINESS_PRIORITIES = "BUSINESS_PRIORITIES"
    ARCHITECTURE_CONSTRAINTS = "ARCHITECTURE_CONSTRAINTS"
    OTHER = "OTHER"
    NONE = "NONE"


@dataclass_json
@dataclasses.dataclass
class UpdateAnswerRequestBody:
    choice_updates: Optional[dict[str, shared_choiceupdate.ChoiceUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceUpdates') }})
    is_applicable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsApplicable') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    reason: Optional[UpdateAnswerRequestBodyReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    selected_choices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedChoices') }})
    

@dataclasses.dataclass
class UpdateAnswerRequest:
    headers: UpdateAnswerHeaders = dataclasses.field()
    path_params: UpdateAnswerPathParams = dataclasses.field()
    request: UpdateAnswerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAnswerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_answer_output: Optional[shared_updateansweroutput.UpdateAnswerOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
