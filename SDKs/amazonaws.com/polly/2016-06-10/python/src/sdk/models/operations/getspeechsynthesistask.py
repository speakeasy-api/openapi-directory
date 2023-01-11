import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getspeechsynthesistaskoutput as shared_getspeechsynthesistaskoutput


@dataclasses.dataclass
class GetSpeechSynthesisTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpeechSynthesisTaskHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpeechSynthesisTaskRequest:
    headers: GetSpeechSynthesisTaskHeaders = dataclasses.field()
    path_params: GetSpeechSynthesisTaskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpeechSynthesisTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_speech_synthesis_task_output: Optional[shared_getspeechsynthesistaskoutput.GetSpeechSynthesisTaskOutput] = dataclasses.field(default=None)
    invalid_task_id_exception: Optional[Any] = dataclasses.field(default=None)
    service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    synthesis_task_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
