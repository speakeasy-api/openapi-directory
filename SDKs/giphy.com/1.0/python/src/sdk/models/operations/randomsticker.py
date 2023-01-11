import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta


@dataclasses.dataclass
class RandomStickerQueryParams:
    rating: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RandomSticker200ApplicationJSON:
    data: Optional[shared_gif.Gif] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class RandomStickerRequest:
    query_params: RandomStickerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RandomStickerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    random_sticker_200_application_json_object: Optional[RandomSticker200ApplicationJSON] = dataclasses.field(default=None)
    
