import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billinggroupmetadata as shared_billinggroupmetadata
from ..shared import billinggroupproperties as shared_billinggroupproperties


@dataclass_json
@dataclasses.dataclass
class DescribeBillingGroupResponse:
    billing_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupArn') }})
    billing_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupId') }})
    billing_group_metadata: Optional[shared_billinggroupmetadata.BillingGroupMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupMetadata') }})
    billing_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupName') }})
    billing_group_properties: Optional[shared_billinggroupproperties.BillingGroupProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupProperties') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
