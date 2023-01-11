import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BillingGroupProperties:
    r"""BillingGroupProperties
    The properties of a billing group.
    """
    
    billing_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupDescription') }})
    
