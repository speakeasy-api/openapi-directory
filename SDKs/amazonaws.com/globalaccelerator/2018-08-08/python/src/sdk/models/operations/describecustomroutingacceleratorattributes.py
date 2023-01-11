import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecustomroutingacceleratorattributesrequest as shared_describecustomroutingacceleratorattributesrequest
from ..shared import describecustomroutingacceleratorattributesresponse as shared_describecustomroutingacceleratorattributesresponse

class DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"


@dataclasses.dataclass
class DescribeCustomRoutingAcceleratorAttributesHeaders:
    x_amz_target: DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeCustomRoutingAcceleratorAttributesRequest:
    headers: DescribeCustomRoutingAcceleratorAttributesHeaders = dataclasses.field()
    request: shared_describecustomroutingacceleratorattributesrequest.DescribeCustomRoutingAcceleratorAttributesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeCustomRoutingAcceleratorAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accelerator_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    describe_custom_routing_accelerator_attributes_response: Optional[shared_describecustomroutingacceleratorattributesresponse.DescribeCustomRoutingAcceleratorAttributesResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    
