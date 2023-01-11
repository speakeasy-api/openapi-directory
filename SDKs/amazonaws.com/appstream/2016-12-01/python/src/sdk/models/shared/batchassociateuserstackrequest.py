import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userstackassociation as shared_userstackassociation


@dataclass_json
@dataclasses.dataclass
class BatchAssociateUserStackRequest:
    user_stack_associations: list[shared_userstackassociation.UserStackAssociation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStackAssociations') }})
    
