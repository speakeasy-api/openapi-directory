import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateDashboardResponse:
    dashboard_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardArn') }})
    dashboard_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardId') }})
    
