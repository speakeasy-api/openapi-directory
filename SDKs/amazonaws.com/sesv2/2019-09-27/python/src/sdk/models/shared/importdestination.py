import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactlistdestination as shared_contactlistdestination
from ..shared import suppressionlistdestination as shared_suppressionlistdestination


@dataclass_json
@dataclasses.dataclass
class ImportDestination:
    r"""ImportDestination
    An object that contains details about the resource destination the import job is going to target.
    """
    
    contact_list_destination: Optional[shared_contactlistdestination.ContactListDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListDestination') }})
    suppression_list_destination: Optional[shared_suppressionlistdestination.SuppressionListDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListDestination') }})
    
