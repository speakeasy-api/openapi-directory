import dataclasses
from typing import Optional
from ..shared import apiresponsesimilarity as shared_apiresponsesimilarity


@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams:
    song_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'song_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongRequest:
    query_params: SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityBySongResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_similarity: Optional[shared_apiresponsesimilarity.APIResponseSimilarity] = dataclasses.field(default=None)
    src_searchly_api_v1_controllers_similarity_by_song_default_application_text_string: Optional[str] = dataclasses.field(default=None)
    
