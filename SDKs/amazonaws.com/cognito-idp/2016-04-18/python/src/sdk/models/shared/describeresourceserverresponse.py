import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceservertype as shared_resourceservertype


@dataclass_json
@dataclasses.dataclass
class DescribeResourceServerResponse:
    resource_server: shared_resourceservertype.ResourceServerType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceServer') }})
    
