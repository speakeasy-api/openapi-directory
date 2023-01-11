import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gif as shared_gif
from ..shared import meta as shared_meta


@dataclasses.dataclass
class TranslateStickerQueryParams:
    s: str = dataclasses.field(metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class TranslateSticker200ApplicationJSON:
    data: Optional[shared_gif.Gif] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class TranslateStickerRequest:
    query_params: TranslateStickerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TranslateStickerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    translate_sticker_200_application_json_object: Optional[TranslateSticker200ApplicationJSON] = dataclasses.field(default=None)
    
