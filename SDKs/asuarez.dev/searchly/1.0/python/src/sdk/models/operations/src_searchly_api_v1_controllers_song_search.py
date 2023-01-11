import dataclasses
from typing import Optional
from ..shared import apiresponsesong as shared_apiresponsesong


@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSongSearchQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSongSearchRequest:
    query_params: SrcSearchlyAPIV1ControllersSongSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSongSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_song: Optional[shared_apiresponsesong.APIResponseSong] = dataclasses.field(default=None)
    src_searchly_api_v1_controllers_song_search_default_application_text_string: Optional[str] = dataclasses.field(default=None)
    
