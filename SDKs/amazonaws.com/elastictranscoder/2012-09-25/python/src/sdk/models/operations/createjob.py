import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectedproperties as shared_detectedproperties
from ..shared import encryption as shared_encryption
from ..shared import inputcaptions as shared_inputcaptions
from ..shared import timespan as shared_timespan
from ..shared import jobalbumart as shared_jobalbumart
from ..shared import captions as shared_captions
from ..shared import jobwatermark as shared_jobwatermark
from ..shared import jobinput as shared_jobinput
from ..shared import createjoboutput as shared_createjoboutput
from ..shared import createjobplaylist as shared_createjobplaylist
from ..shared import createjobresponse as shared_createjobresponse


@dataclasses.dataclass
class CreateJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateJobRequestBodyInput:
    r"""CreateJobRequestBodyInput
    Information about the file that you're transcoding.
    """
    
    aspect_ratio: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    detected_properties: Optional[shared_detectedproperties.DetectedProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedProperties') }})
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    frame_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    input_captions: Optional[shared_inputcaptions.InputCaptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputCaptions') }})
    interlaced: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interlaced') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    time_span: Optional[shared_timespan.TimeSpan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSpan') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateJobRequestBodyOutput:
    r"""CreateJobRequestBodyOutput
    The <code>CreateJobOutput</code> structure.
    """
    
    album_art: Optional[shared_jobalbumart.JobAlbumArt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArt') }})
    captions: Optional[shared_captions.Captions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Captions') }})
    composition: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Composition') }})
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    preset_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetId') }})
    rotate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rotate') }})
    segment_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDuration') }})
    thumbnail_encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailEncryption') }})
    thumbnail_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailPattern') }})
    watermarks: Optional[list[shared_jobwatermark.JobWatermark]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateJobRequestBody:
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineId') }})
    input: Optional[CreateJobRequestBodyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    inputs: Optional[list[shared_jobinput.JobInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    output: Optional[CreateJobRequestBodyOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    output_key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeyPrefix') }})
    outputs: Optional[list[shared_createjoboutput.CreateJobOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    playlists: Optional[list[shared_createjobplaylist.CreateJobPlaylist]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Playlists') }})
    user_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMetadata') }})
    

@dataclasses.dataclass
class CreateJobRequest:
    headers: CreateJobHeaders = dataclasses.field()
    request: CreateJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_job_response: Optional[shared_createjobresponse.CreateJobResponse] = dataclasses.field(default=None)
    incompatible_version_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
