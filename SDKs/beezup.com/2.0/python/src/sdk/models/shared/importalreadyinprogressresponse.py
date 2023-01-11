import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_usererrormessage as shared_beezup_common_usererrormessage
from ..shared import importalreadyinprogressresponselinks as shared_importalreadyinprogressresponselinks


@dataclass_json
@dataclasses.dataclass
class ImportAlreadyInProgressResponse:
    errors: list[shared_beezup_common_usererrormessage.BeezUpCommonUserErrorMessage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: shared_importalreadyinprogressresponselinks.ImportAlreadyInProgressResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
