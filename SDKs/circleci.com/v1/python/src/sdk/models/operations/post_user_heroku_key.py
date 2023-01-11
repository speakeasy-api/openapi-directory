import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostUserHerokuKey403ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostUserHerokuKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_user_heroku_key_403_application_json_object: Optional[PostUserHerokuKey403ApplicationJSON] = dataclasses.field(default=None)
    
