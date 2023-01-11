import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startdeliverystreamencryptioninput as shared_startdeliverystreamencryptioninput

class StartDeliveryStreamEncryptionXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_START_DELIVERY_STREAM_ENCRYPTION = "Firehose_20150804.StartDeliveryStreamEncryption"


@dataclasses.dataclass
class StartDeliveryStreamEncryptionHeaders:
    x_amz_target: StartDeliveryStreamEncryptionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartDeliveryStreamEncryptionRequest:
    headers: StartDeliveryStreamEncryptionHeaders = dataclasses.field()
    request: shared_startdeliverystreamencryptioninput.StartDeliveryStreamEncryptionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartDeliveryStreamEncryptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_kms_resource_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    start_delivery_stream_encryption_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
