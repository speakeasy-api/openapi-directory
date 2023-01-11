import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateSignalingChannelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSignalingChannelRequestBodySingleMasterConfiguration:
    r"""UpdateSignalingChannelRequestBodySingleMasterConfiguration
    A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
    """
    
    message_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageTtlSeconds') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSignalingChannelRequestBody:
    channel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    current_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentVersion') }})
    single_master_configuration: Optional[UpdateSignalingChannelRequestBodySingleMasterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleMasterConfiguration') }})
    

@dataclasses.dataclass
class UpdateSignalingChannelRequest:
    headers: UpdateSignalingChannelHeaders = dataclasses.field()
    request: UpdateSignalingChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSignalingChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_signaling_channel_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    version_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    
