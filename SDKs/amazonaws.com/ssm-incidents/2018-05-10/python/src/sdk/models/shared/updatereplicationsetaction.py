import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addregionaction as shared_addregionaction
from ..shared import deleteregionaction as shared_deleteregionaction


@dataclass_json
@dataclasses.dataclass
class UpdateReplicationSetAction:
    r"""UpdateReplicationSetAction
    Details used when updating the replication set.
    """
    
    add_region_action: Optional[shared_addregionaction.AddRegionAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addRegionAction') }})
    delete_region_action: Optional[shared_deleteregionaction.DeleteRegionAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRegionAction') }})
    
