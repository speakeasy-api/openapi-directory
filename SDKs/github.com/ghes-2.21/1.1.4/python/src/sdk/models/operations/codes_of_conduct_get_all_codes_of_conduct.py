import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import code_of_conduct as shared_code_of_conduct


@dataclass_json
@dataclasses.dataclass
class CodesOfConductGetAllCodesOfConduct415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodesOfConductGetAllCodesOfConductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_of_conducts: Optional[list[shared_code_of_conduct.CodeOfConduct]] = dataclasses.field(default=None)
    codes_of_conduct_get_all_codes_of_conduct_415_application_json_object: Optional[CodesOfConductGetAllCodesOfConduct415ApplicationJSON] = dataclasses.field(default=None)
    
