import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listavailablemanagementcidrrangesrequest as shared_listavailablemanagementcidrrangesrequest
from ..shared import listavailablemanagementcidrrangesresult as shared_listavailablemanagementcidrrangesresult

class ListAvailableManagementCidrRangesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES = "WorkspacesService.ListAvailableManagementCidrRanges"


@dataclasses.dataclass
class ListAvailableManagementCidrRangesHeaders:
    x_amz_target: ListAvailableManagementCidrRangesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAvailableManagementCidrRangesRequest:
    headers: ListAvailableManagementCidrRangesHeaders = dataclasses.field()
    request: shared_listavailablemanagementcidrrangesrequest.ListAvailableManagementCidrRangesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAvailableManagementCidrRangesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    list_available_management_cidr_ranges_result: Optional[shared_listavailablemanagementcidrrangesresult.ListAvailableManagementCidrRangesResult] = dataclasses.field(default=None)
    
