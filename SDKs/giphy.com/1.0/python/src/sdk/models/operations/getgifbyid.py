import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta


@dataclasses.dataclass
class GetGifByIDPathParams:
    gif_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'gifId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetGifByID200ApplicationJSON:
    data: Optional[shared_gif.Gif] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetGifByIDRequest:
    path_params: GetGifByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGifByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_gif_by_id_200_application_json_object: Optional[GetGifByID200ApplicationJSON] = dataclasses.field(default=None)
    
