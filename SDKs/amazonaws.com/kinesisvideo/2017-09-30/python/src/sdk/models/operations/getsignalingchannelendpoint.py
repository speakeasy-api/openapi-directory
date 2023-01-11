import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelprotocol_enum as shared_channelprotocol_enum
from ..shared import channelrole_enum as shared_channelrole_enum
from ..shared import getsignalingchannelendpointoutput as shared_getsignalingchannelendpointoutput


@dataclasses.dataclass
class GetSignalingChannelEndpointHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration:
    r"""GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
    An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
    """
    
    protocols: Optional[list[shared_channelprotocol_enum.ChannelProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    role: Optional[shared_channelrole_enum.ChannelRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSignalingChannelEndpointRequestBody:
    channel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    single_master_channel_endpoint_configuration: Optional[GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleMasterChannelEndpointConfiguration') }})
    

@dataclasses.dataclass
class GetSignalingChannelEndpointRequest:
    headers: GetSignalingChannelEndpointHeaders = dataclasses.field()
    request: GetSignalingChannelEndpointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSignalingChannelEndpointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    get_signaling_channel_endpoint_output: Optional[shared_getsignalingchannelendpointoutput.GetSignalingChannelEndpointOutput] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
