"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import startsyncexecutioninput as shared_startsyncexecutioninput
from ..shared import startsyncexecutionoutput as shared_startsyncexecutionoutput
from enum import Enum
from typing import Any, Optional

class StartSyncExecutionXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION = 'AWSStepFunctions.StartSyncExecution'


@dataclasses.dataclass
class StartSyncExecutionRequest:
    
    start_sync_execution_input: shared_startsyncexecutioninput.StartSyncExecutionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: StartSyncExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class StartSyncExecutionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidArn"""  
    invalid_execution_input: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidExecutionInput"""  
    invalid_name: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidName"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    start_sync_execution_output: Optional[shared_startsyncexecutionoutput.StartSyncExecutionOutput] = dataclasses.field(default=None)
    r"""Success"""  
    state_machine_deleting: Optional[Any] = dataclasses.field(default=None)
    r"""StateMachineDeleting"""  
    state_machine_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    r"""StateMachineDoesNotExist"""  
    state_machine_type_not_supported: Optional[Any] = dataclasses.field(default=None)
    r"""StateMachineTypeNotSupported"""  
    