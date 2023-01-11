import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteAccessRequest:
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    
