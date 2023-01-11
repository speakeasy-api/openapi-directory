import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveIPRoutesRequest:
    cidr_ips: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrIps') }})
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
