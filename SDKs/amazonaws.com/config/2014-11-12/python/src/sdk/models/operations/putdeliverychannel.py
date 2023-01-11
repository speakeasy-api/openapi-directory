import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putdeliverychannelrequest as shared_putdeliverychannelrequest

class PutDeliveryChannelXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_DELIVERY_CHANNEL = "StarlingDoveService.PutDeliveryChannel"


@dataclasses.dataclass
class PutDeliveryChannelHeaders:
    x_amz_target: PutDeliveryChannelXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDeliveryChannelRequest:
    headers: PutDeliveryChannelHeaders = dataclasses.field()
    request: shared_putdeliverychannelrequest.PutDeliveryChannelRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutDeliveryChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_delivery_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_delivery_channel_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_s3_key_prefix_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_s3_kms_key_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sns_topic_arn_exception: Optional[Any] = dataclasses.field(default=None)
    max_number_of_delivery_channels_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_bucket_exception: Optional[Any] = dataclasses.field(default=None)
    
