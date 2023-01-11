import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComplianceDetails:
    r"""ComplianceDetails
    Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.
    """
    
    compliance_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceStatus') }})
    keys_with_noncompliant_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeysWithNoncompliantValues') }})
    noncompliant_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncompliantKeys') }})
    
