import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describedaccess as shared_describedaccess


@dataclass_json
@dataclasses.dataclass
class DescribeAccessResponse:
    access: shared_describedaccess.DescribedAccess = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Access') }})
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    
