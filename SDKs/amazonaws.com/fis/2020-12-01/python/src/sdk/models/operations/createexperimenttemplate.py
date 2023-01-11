import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createexperimenttemplateactioninput as shared_createexperimenttemplateactioninput
from ..shared import createexperimenttemplatestopconditioninput as shared_createexperimenttemplatestopconditioninput
from ..shared import createexperimenttemplatetargetinput as shared_createexperimenttemplatetargetinput
from ..shared import createexperimenttemplateresponse as shared_createexperimenttemplateresponse


@dataclasses.dataclass
class CreateExperimentTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateExperimentTemplateRequestBody:
    actions: dict[str, shared_createexperimenttemplateactioninput.CreateExperimentTemplateActionInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stop_conditions: list[shared_createexperimenttemplatestopconditioninput.CreateExperimentTemplateStopConditionInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopConditions') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    targets: Optional[dict[str, shared_createexperimenttemplatetargetinput.CreateExperimentTemplateTargetInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    

@dataclasses.dataclass
class CreateExperimentTemplateRequest:
    headers: CreateExperimentTemplateHeaders = dataclasses.field()
    request: CreateExperimentTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateExperimentTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_experiment_template_response: Optional[shared_createexperimenttemplateresponse.CreateExperimentTemplateResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
