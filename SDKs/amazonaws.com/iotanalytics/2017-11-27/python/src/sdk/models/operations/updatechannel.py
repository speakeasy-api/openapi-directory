import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanagedchannels3storage as shared_customermanagedchannels3storage


@dataclasses.dataclass
class UpdateChannelPathParams:
    channel_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateChannelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateChannelRequestBodyChannelStorage:
    r"""UpdateChannelRequestBodyChannelStorage
    Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
    """
    
    customer_managed_s3: Optional[shared_customermanagedchannels3storage.CustomerManagedChannelS3Storage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    service_managed_s3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateChannelRequestBodyRetentionPeriod:
    r"""UpdateChannelRequestBodyRetentionPeriod
    How long, in days, message data is kept.
    """
    
    number_of_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDays') }})
    unlimited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateChannelRequestBody:
    channel_storage: Optional[UpdateChannelRequestBodyChannelStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelStorage') }})
    retention_period: Optional[UpdateChannelRequestBodyRetentionPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    

@dataclasses.dataclass
class UpdateChannelRequest:
    headers: UpdateChannelHeaders = dataclasses.field()
    path_params: UpdateChannelPathParams = dataclasses.field()
    request: UpdateChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
