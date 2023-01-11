import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeuserstackassociationsrequest as shared_describeuserstackassociationsrequest
from ..shared import describeuserstackassociationsresult as shared_describeuserstackassociationsresult

class DescribeUserStackAssociationsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_USER_STACK_ASSOCIATIONS = "PhotonAdminProxyService.DescribeUserStackAssociations"


@dataclasses.dataclass
class DescribeUserStackAssociationsHeaders:
    x_amz_target: DescribeUserStackAssociationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeUserStackAssociationsRequest:
    headers: DescribeUserStackAssociationsHeaders = dataclasses.field()
    request: shared_describeuserstackassociationsrequest.DescribeUserStackAssociationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeUserStackAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_user_stack_associations_result: Optional[shared_describeuserstackassociationsresult.DescribeUserStackAssociationsResult] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    
