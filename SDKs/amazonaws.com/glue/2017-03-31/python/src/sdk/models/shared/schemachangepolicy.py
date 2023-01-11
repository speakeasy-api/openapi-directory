import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deletebehavior_enum as shared_deletebehavior_enum
from ..shared import updatebehavior_enum as shared_updatebehavior_enum


@dataclass_json
@dataclasses.dataclass
class SchemaChangePolicy:
    r"""SchemaChangePolicy
    A policy that specifies update and deletion behaviors for the crawler.
    """
    
    delete_behavior: Optional[shared_deletebehavior_enum.DeleteBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteBehavior') }})
    update_behavior: Optional[shared_updatebehavior_enum.UpdateBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateBehavior') }})
    
