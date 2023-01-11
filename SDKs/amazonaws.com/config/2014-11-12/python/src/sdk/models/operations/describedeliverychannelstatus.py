import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describedeliverychannelstatusrequest as shared_describedeliverychannelstatusrequest
from ..shared import describedeliverychannelstatusresponse as shared_describedeliverychannelstatusresponse

class DescribeDeliveryChannelStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNEL_STATUS = "StarlingDoveService.DescribeDeliveryChannelStatus"


@dataclasses.dataclass
class DescribeDeliveryChannelStatusHeaders:
    x_amz_target: DescribeDeliveryChannelStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeDeliveryChannelStatusRequest:
    headers: DescribeDeliveryChannelStatusHeaders = dataclasses.field()
    request: shared_describedeliverychannelstatusrequest.DescribeDeliveryChannelStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeDeliveryChannelStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_delivery_channel_status_response: Optional[shared_describedeliverychannelstatusresponse.DescribeDeliveryChannelStatusResponse] = dataclasses.field(default=None)
    no_such_delivery_channel_exception: Optional[Any] = dataclasses.field(default=None)
    
