import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeendpointgrouprequest as shared_describeendpointgrouprequest
from ..shared import describeendpointgroupresponse as shared_describeendpointgroupresponse

class DescribeEndpointGroupXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ENDPOINT_GROUP = "GlobalAccelerator_V20180706.DescribeEndpointGroup"


@dataclasses.dataclass
class DescribeEndpointGroupHeaders:
    x_amz_target: DescribeEndpointGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeEndpointGroupRequest:
    headers: DescribeEndpointGroupHeaders = dataclasses.field()
    request: shared_describeendpointgrouprequest.DescribeEndpointGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeEndpointGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_endpoint_group_response: Optional[shared_describeendpointgroupresponse.DescribeEndpointGroupResponse] = dataclasses.field(default=None)
    endpoint_group_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    
