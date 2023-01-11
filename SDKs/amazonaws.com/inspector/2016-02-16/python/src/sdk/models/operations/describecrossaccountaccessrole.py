import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecrossaccountaccessroleresponse as shared_describecrossaccountaccessroleresponse

class DescribeCrossAccountAccessRoleXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE = "InspectorService.DescribeCrossAccountAccessRole"


@dataclasses.dataclass
class DescribeCrossAccountAccessRoleHeaders:
    x_amz_target: DescribeCrossAccountAccessRoleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeCrossAccountAccessRoleRequest:
    headers: DescribeCrossAccountAccessRoleHeaders = dataclasses.field()
    

@dataclasses.dataclass
class DescribeCrossAccountAccessRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_cross_account_access_role_response: Optional[shared_describecrossaccountaccessroleresponse.DescribeCrossAccountAccessRoleResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    
