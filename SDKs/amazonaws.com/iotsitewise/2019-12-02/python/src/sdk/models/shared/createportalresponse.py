import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portalstatus as shared_portalstatus


@dataclass_json
@dataclasses.dataclass
class CreatePortalResponse:
    portal_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalArn') }})
    portal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalId') }})
    portal_start_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStartUrl') }})
    portal_status: shared_portalstatus.PortalStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStatus') }})
    sso_application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoApplicationId') }})
    
