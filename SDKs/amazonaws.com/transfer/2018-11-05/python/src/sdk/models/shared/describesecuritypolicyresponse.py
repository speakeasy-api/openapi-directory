import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describedsecuritypolicy as shared_describedsecuritypolicy


@dataclass_json
@dataclasses.dataclass
class DescribeSecurityPolicyResponse:
    security_policy: shared_describedsecuritypolicy.DescribedSecurityPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicy') }})
    
