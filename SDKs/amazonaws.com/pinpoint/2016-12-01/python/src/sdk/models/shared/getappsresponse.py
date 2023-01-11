import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsresponse as shared_applicationsresponse


@dataclass_json
@dataclasses.dataclass
class GetAppsResponse:
    applications_response: shared_applicationsresponse.ApplicationsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationsResponse') }})
    
