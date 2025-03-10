"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import batchgetresourceconfigrequest as shared_batchgetresourceconfigrequest
from ..shared import batchgetresourceconfigresponse as shared_batchgetresourceconfigresponse
from enum import Enum
from typing import Any, Optional

class BatchGetResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_BATCH_GET_RESOURCE_CONFIG = 'StarlingDoveService.BatchGetResourceConfig'


@dataclasses.dataclass
class BatchGetResourceConfigRequest:
    
    batch_get_resource_config_request: shared_batchgetresourceconfigrequest.BatchGetResourceConfigRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: BatchGetResourceConfigXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class BatchGetResourceConfigResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    batch_get_resource_config_response: Optional[shared_batchgetresourceconfigresponse.BatchGetResourceConfigResponse] = dataclasses.field(default=None)
    r"""Success"""  
    no_available_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NoAvailableConfigurationRecorderException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    