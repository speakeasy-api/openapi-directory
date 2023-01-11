import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateWebACLRequest:
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    web_acl_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    
