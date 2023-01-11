import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CancelMailboxExportJobRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    
