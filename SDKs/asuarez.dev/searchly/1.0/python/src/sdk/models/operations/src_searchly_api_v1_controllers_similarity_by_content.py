import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiresponsesimilarity as shared_apiresponsesimilarity


@dataclass_json
@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentRequest:
    request: SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SrcSearchlyAPIV1ControllersSimilarityByContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response_similarity: Optional[shared_apiresponsesimilarity.APIResponseSimilarity] = dataclasses.field(default=None)
    src_searchly_api_v1_controllers_similarity_by_content_default_application_text_string: Optional[str] = dataclasses.field(default=None)
    
