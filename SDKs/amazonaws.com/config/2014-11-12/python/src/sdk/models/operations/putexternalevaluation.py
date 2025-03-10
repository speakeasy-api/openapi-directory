"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import putexternalevaluationrequest as shared_putexternalevaluationrequest
from enum import Enum
from typing import Any, Optional

class PutExternalEvaluationXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_EXTERNAL_EVALUATION = 'StarlingDoveService.PutExternalEvaluation'


@dataclasses.dataclass
class PutExternalEvaluationRequest:
    
    put_external_evaluation_request: shared_putexternalevaluationrequest.PutExternalEvaluationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: PutExternalEvaluationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class PutExternalEvaluationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterValueException"""  
    no_such_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NoSuchConfigRuleException"""  
    put_external_evaluation_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    