import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationdetail as shared_applicationdetail


@dataclass_json
@dataclasses.dataclass
class DescribeApplicationVersionResponse:
    application_version_detail: Optional[shared_applicationdetail.ApplicationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionDetail') }})
    
