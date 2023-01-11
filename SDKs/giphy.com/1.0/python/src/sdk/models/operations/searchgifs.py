import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta
from ..shared import pagination as shared_pagination


@dataclasses.dataclass
class SearchGifsQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    rating: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchGifs200ApplicationJSON:
    data: Optional[list[shared_gif.Gif]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclasses.dataclass
class SearchGifsRequest:
    query_params: SearchGifsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchGifsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_gifs_200_application_json_object: Optional[SearchGifs200ApplicationJSON] = dataclasses.field(default=None)
    
