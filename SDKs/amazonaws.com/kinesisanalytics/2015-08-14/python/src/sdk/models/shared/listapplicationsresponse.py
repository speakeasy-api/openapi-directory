import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsummary as shared_applicationsummary


@dataclass_json
@dataclasses.dataclass
class ListApplicationsResponse:
    r"""ListApplicationsResponse
    <p/>
    """
    
    application_summaries: list[shared_applicationsummary.ApplicationSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSummaries') }})
    has_more_applications: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreApplications') }})
    
