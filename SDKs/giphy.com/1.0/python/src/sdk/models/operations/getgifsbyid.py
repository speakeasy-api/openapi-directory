import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta
from ..shared import pagination as shared_pagination


@dataclasses.dataclass
class GetGifsByIDQueryParams:
    ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetGifsByID200ApplicationJSON:
    data: Optional[list[shared_gif.Gif]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclasses.dataclass
class GetGifsByIDRequest:
    query_params: GetGifsByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGifsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_gifs_by_id_200_application_json_object: Optional[GetGifsByID200ApplicationJSON] = dataclasses.field(default=None)
    
