import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userstackassociation as shared_userstackassociation


@dataclass_json
@dataclasses.dataclass
class DescribeUserStackAssociationsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_stack_associations: Optional[list[shared_userstackassociation.UserStackAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStackAssociations') }})
    
