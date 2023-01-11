import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import initializeclusterrequest as shared_initializeclusterrequest
from ..shared import initializeclusterresponse as shared_initializeclusterresponse

class InitializeClusterXAmzTargetEnum(str, Enum):
    BALDR_API_SERVICE_INITIALIZE_CLUSTER = "BaldrApiService.InitializeCluster"


@dataclasses.dataclass
class InitializeClusterHeaders:
    x_amz_target: InitializeClusterXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InitializeClusterRequest:
    headers: InitializeClusterHeaders = dataclasses.field()
    request: shared_initializeclusterrequest.InitializeClusterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InitializeClusterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_hsm_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_service_exception: Optional[Any] = dataclasses.field(default=None)
    initialize_cluster_response: Optional[shared_initializeclusterresponse.InitializeClusterResponse] = dataclasses.field(default=None)
    
