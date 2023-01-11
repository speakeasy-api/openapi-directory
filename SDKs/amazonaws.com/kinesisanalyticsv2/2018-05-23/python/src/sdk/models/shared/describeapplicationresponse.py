import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationdetail as shared_applicationdetail


@dataclass_json
@dataclasses.dataclass
class DescribeApplicationResponse:
    application_detail: shared_applicationdetail.ApplicationDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDetail') }})
    
