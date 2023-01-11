import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta
from ..shared import pagination as shared_pagination


@dataclasses.dataclass
class TrendingStickersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    rating: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class TrendingStickers200ApplicationJSON:
    data: Optional[list[shared_gif.Gif]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    pagination: Optional[shared_pagination.Pagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclasses.dataclass
class TrendingStickersRequest:
    query_params: TrendingStickersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TrendingStickersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trending_stickers_200_application_json_object: Optional[TrendingStickers200ApplicationJSON] = dataclasses.field(default=None)
    
