import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hlsfragmentselectortype_enum as shared_hlsfragmentselectortype_enum
from ..shared import hlstimestamprange as shared_hlstimestamprange
from ..shared import gethlsstreamingsessionurloutput as shared_gethlsstreamingsessionurloutput


@dataclasses.dataclass
class GetHlsStreamingSessionURLHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetHlsStreamingSessionURLRequestBodyContainerFormatEnum(str, Enum):
    FRAGMENTED_MP4 = "FRAGMENTED_MP4"
    MPEG_TS = "MPEG_TS"

class GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"
    ON_DISCONTINUITY = "ON_DISCONTINUITY"

class GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"


@dataclass_json
@dataclasses.dataclass
class GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector:
    r"""GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector
    Contains the range of timestamps for the requested media, and the source of the timestamps.
    """
    
    fragment_selector_type: Optional[shared_hlsfragmentselectortype_enum.HlsFragmentSelectorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentSelectorType') }})
    timestamp_range: Optional[shared_hlstimestamprange.HlsTimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampRange') }})
    
class GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum(str, Enum):
    LIVE = "LIVE"
    LIVE_REPLAY = "LIVE_REPLAY"
    ON_DEMAND = "ON_DEMAND"


@dataclass_json
@dataclasses.dataclass
class GetHlsStreamingSessionURLRequestBody:
    container_format: Optional[GetHlsStreamingSessionURLRequestBodyContainerFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerFormat') }})
    discontinuity_mode: Optional[GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscontinuityMode') }})
    display_fragment_timestamp: Optional[GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayFragmentTimestamp') }})
    expires: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expires') }})
    hls_fragment_selector: Optional[GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HLSFragmentSelector') }})
    max_media_playlist_fragment_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxMediaPlaylistFragmentResults') }})
    playback_mode: Optional[GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaybackMode') }})
    stream_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclasses.dataclass
class GetHlsStreamingSessionURLRequest:
    headers: GetHlsStreamingSessionURLHeaders = dataclasses.field()
    request: GetHlsStreamingSessionURLRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetHlsStreamingSessionURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    get_hls_streaming_session_url_output: Optional[shared_gethlsstreamingsessionurloutput.GetHlsStreamingSessionURLOutput] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_codec_private_data_exception: Optional[Any] = dataclasses.field(default=None)
    missing_codec_private_data_exception: Optional[Any] = dataclasses.field(default=None)
    no_data_retention_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_stream_media_type_exception: Optional[Any] = dataclasses.field(default=None)
    
