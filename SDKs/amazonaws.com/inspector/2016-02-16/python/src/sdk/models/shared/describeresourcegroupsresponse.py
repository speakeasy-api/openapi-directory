import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileditemdetails as shared_faileditemdetails
from ..shared import resourcegroup as shared_resourcegroup


@dataclass_json
@dataclasses.dataclass
class DescribeResourceGroupsResponse:
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    resource_groups: list[shared_resourcegroup.ResourceGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroups') }})
    
