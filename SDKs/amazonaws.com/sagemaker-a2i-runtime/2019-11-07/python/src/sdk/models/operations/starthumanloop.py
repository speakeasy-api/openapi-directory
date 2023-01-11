import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentclassifier_enum as shared_contentclassifier_enum
from ..shared import starthumanloopresponse as shared_starthumanloopresponse


@dataclasses.dataclass
class StartHumanLoopHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StartHumanLoopRequestBodyDataAttributes:
    r"""StartHumanLoopRequestBodyDataAttributes
    Attributes of the data specified by the customer. Use these to describe the data to be labeled.
    """
    
    content_classifiers: Optional[list[shared_contentclassifier_enum.ContentClassifierEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentClassifiers') }})
    

@dataclass_json
@dataclasses.dataclass
class StartHumanLoopRequestBodyHumanLoopInput:
    r"""StartHumanLoopRequestBodyHumanLoopInput
    An object containing the human loop input in JSON format.
    """
    
    input_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputContent') }})
    

@dataclass_json
@dataclasses.dataclass
class StartHumanLoopRequestBody:
    flow_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_input: StartHumanLoopRequestBodyHumanLoopInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopInput') }})
    human_loop_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    data_attributes: Optional[StartHumanLoopRequestBodyDataAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAttributes') }})
    

@dataclasses.dataclass
class StartHumanLoopRequest:
    headers: StartHumanLoopHeaders = dataclasses.field()
    request: StartHumanLoopRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartHumanLoopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_human_loop_response: Optional[shared_starthumanloopresponse.StartHumanLoopResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
