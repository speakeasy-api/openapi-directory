import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse

class GetScoreRevisionDataFormatEnum(str, Enum):
    JSON = "json"
    MXL = "mxl"
    XML = "xml"
    MP3 = "mp3"
    WAV = "wav"
    MIDI = "midi"
    THUMBNAIL_PNG = "thumbnail.png"
    SYNCHRONIZATION_POINTS = "synchronizationPoints"


@dataclasses.dataclass
class GetScoreRevisionDataPathParams:
    format: GetScoreRevisionDataFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    revision: str = dataclasses.field(metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreRevisionDataQueryParams:
    only_cached: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyCached', 'style': 'form', 'explode': True }})
    parts: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parts', 'style': 'form', 'explode': True }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    url: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreRevisionDataSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreRevisionDataRequest:
    path_params: GetScoreRevisionDataPathParams = dataclasses.field()
    query_params: GetScoreRevisionDataQueryParams = dataclasses.field()
    security: GetScoreRevisionDataSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreRevisionDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    get_score_revision_data_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_application_vnd_recordare_musicxml_plus_xml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_application_vnd_recordare_musicxml_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_audio_midi_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_audio_mp3_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_audio_wav_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_score_revision_data_200_image_png_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
