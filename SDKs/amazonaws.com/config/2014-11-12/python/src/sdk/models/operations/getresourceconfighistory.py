import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getresourceconfighistoryrequest as shared_getresourceconfighistoryrequest
from ..shared import getresourceconfighistoryresponse as shared_getresourceconfighistoryresponse


@dataclasses.dataclass
class GetResourceConfigHistoryQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetResourceConfigHistoryXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_RESOURCE_CONFIG_HISTORY = "StarlingDoveService.GetResourceConfigHistory"


@dataclasses.dataclass
class GetResourceConfigHistoryHeaders:
    x_amz_target: GetResourceConfigHistoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceConfigHistoryRequest:
    headers: GetResourceConfigHistoryHeaders = dataclasses.field()
    query_params: GetResourceConfigHistoryQueryParams = dataclasses.field()
    request: shared_getresourceconfighistoryrequest.GetResourceConfigHistoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetResourceConfigHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resource_config_history_response: Optional[shared_getresourceconfighistoryresponse.GetResourceConfigHistoryResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_time_range_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_discovered_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
