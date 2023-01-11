import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationhealth as shared_cloudformationhealth
from ..shared import servicehealth as shared_servicehealth


@dataclass_json
@dataclasses.dataclass
class DescribeResourceCollectionHealthResponse:
    cloud_formation: list[shared_cloudformationhealth.CloudFormationHealth] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    service: Optional[list[shared_servicehealth.ServiceHealth]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    
