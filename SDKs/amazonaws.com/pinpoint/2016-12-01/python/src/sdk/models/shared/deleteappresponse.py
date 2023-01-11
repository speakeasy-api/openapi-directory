import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationresponse as shared_applicationresponse


@dataclass_json
@dataclasses.dataclass
class DeleteAppResponse:
    application_response: shared_applicationresponse.ApplicationResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationResponse') }})
    
