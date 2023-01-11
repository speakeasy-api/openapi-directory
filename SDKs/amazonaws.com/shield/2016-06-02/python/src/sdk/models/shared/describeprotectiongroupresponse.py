import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongroup as shared_protectiongroup


@dataclass_json
@dataclasses.dataclass
class DescribeProtectionGroupResponse:
    protection_group: shared_protectiongroup.ProtectionGroup = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroup') }})
    
