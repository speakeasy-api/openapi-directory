import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ACLPendingChanges:
    r"""ACLPendingChanges
    Returns the updates being applied to the ACL.
    """
    
    user_names_to_add: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserNamesToAdd') }})
    user_names_to_remove: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserNamesToRemove') }})
    
