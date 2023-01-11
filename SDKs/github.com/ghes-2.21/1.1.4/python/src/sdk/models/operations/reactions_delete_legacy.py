import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class ReactionsDeleteLegacyPathParams:
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReactionsDeleteLegacy415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReactionsDeleteLegacyRequest:
    path_params: ReactionsDeleteLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    reactions_delete_legacy_415_application_json_object: Optional[ReactionsDeleteLegacy415ApplicationJSON] = dataclasses.field(default=None)
    
