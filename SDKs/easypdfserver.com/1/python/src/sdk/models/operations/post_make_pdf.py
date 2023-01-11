import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostMakePdfRequestBody:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class PostMakePdfRequest:
    request: PostMakePdfRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostMakePdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_make_pdf_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
