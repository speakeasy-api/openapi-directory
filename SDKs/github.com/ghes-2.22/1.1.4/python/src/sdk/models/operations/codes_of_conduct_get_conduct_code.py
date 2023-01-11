import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_of_conduct as shared_code_of_conduct


@dataclasses.dataclass
class CodesOfConductGetConductCodePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CodesOfConductGetConductCode415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodesOfConductGetConductCodeRequest:
    path_params: CodesOfConductGetConductCodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CodesOfConductGetConductCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_of_conduct: Optional[shared_code_of_conduct.CodeOfConduct] = dataclasses.field(default=None)
    codes_of_conduct_get_conduct_code_415_application_json_object: Optional[CodesOfConductGetConductCode415ApplicationJSON] = dataclasses.field(default=None)
    
