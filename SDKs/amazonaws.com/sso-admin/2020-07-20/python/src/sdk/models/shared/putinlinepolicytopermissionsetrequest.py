import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutInlinePolicyToPermissionSetRequest:
    inline_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InlinePolicy') }})
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    
