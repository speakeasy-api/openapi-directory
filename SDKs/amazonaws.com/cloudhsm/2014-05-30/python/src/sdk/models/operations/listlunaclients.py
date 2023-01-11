import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listlunaclientsrequest as shared_listlunaclientsrequest
from ..shared import listlunaclientsresponse as shared_listlunaclientsresponse

class ListLunaClientsXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_LIST_LUNA_CLIENTS = "CloudHsmFrontendService.ListLunaClients"


@dataclasses.dataclass
class ListLunaClientsHeaders:
    x_amz_target: ListLunaClientsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLunaClientsRequest:
    headers: ListLunaClientsHeaders = dataclasses.field()
    request: shared_listlunaclientsrequest.ListLunaClientsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListLunaClientsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_hsm_internal_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_luna_clients_response: Optional[shared_listlunaclientsresponse.ListLunaClientsResponse] = dataclasses.field(default=None)
    
