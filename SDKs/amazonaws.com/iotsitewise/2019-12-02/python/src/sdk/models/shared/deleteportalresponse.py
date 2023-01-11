import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portalstatus as shared_portalstatus


@dataclass_json
@dataclasses.dataclass
class DeletePortalResponse:
    portal_status: shared_portalstatus.PortalStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portalStatus') }})
    
