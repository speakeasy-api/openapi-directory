import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeNodeAssociationStatusRequest:
    node_association_status_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeAssociationStatusToken') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    
