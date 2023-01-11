import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta


@dataclasses.dataclass
class RandomGifQueryParams:
    rating: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RandomGif200ApplicationJSON:
    data: Optional[shared_gif.Gif] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class RandomGifRequest:
    query_params: RandomGifQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RandomGifResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    random_gif_200_application_json_object: Optional[RandomGif200ApplicationJSON] = dataclasses.field(default=None)
    
