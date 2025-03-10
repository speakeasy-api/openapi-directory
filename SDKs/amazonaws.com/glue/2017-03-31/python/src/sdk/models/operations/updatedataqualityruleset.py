"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import updatedataqualityrulesetrequest as shared_updatedataqualityrulesetrequest
from ..shared import updatedataqualityrulesetresponse as shared_updatedataqualityrulesetresponse
from enum import Enum
from typing import Any, Optional

class UpdateDataQualityRulesetXAmzTargetEnum(str, Enum):
    AWS_GLUE_UPDATE_DATA_QUALITY_RULESET = 'AWSGlue.UpdateDataQualityRuleset'


@dataclasses.dataclass
class UpdateDataQualityRulesetRequest:
    
    update_data_quality_ruleset_request: shared_updatedataqualityrulesetrequest.UpdateDataQualityRulesetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: UpdateDataQualityRulesetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateDataQualityRulesetResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AlreadyExistsException"""  
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""EntityNotFoundException"""  
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    r"""IdempotentParameterMismatchException"""  
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServiceException"""  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    r"""OperationTimeoutException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_number_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNumberLimitExceededException"""  
    update_data_quality_ruleset_response: Optional[shared_updatedataqualityrulesetresponse.UpdateDataQualityRulesetResponse] = dataclasses.field(default=None)
    r"""Success"""  
    