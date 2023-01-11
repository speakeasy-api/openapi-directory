import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import createsignalingchanneloutput as shared_createsignalingchanneloutput


@dataclasses.dataclass
class CreateSignalingChannelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateSignalingChannelRequestBodyChannelTypeEnum(str, Enum):
    SINGLE_MASTER = "SINGLE_MASTER"


@dataclass_json
@dataclasses.dataclass
class CreateSignalingChannelRequestBodySingleMasterConfiguration:
    r"""CreateSignalingChannelRequestBodySingleMasterConfiguration
    A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
    """
    
    message_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageTtlSeconds') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSignalingChannelRequestBody:
    channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelName') }})
    channel_type: Optional[CreateSignalingChannelRequestBodyChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    single_master_configuration: Optional[CreateSignalingChannelRequestBodySingleMasterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleMasterConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclasses.dataclass
class CreateSignalingChannelRequest:
    headers: CreateSignalingChannelHeaders = dataclasses.field()
    request: CreateSignalingChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSignalingChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    account_channel_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    create_signaling_channel_output: Optional[shared_createsignalingchanneloutput.CreateSignalingChannelOutput] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    tags_per_resource_exceeded_limit_exception: Optional[Any] = dataclasses.field(default=None)
    
