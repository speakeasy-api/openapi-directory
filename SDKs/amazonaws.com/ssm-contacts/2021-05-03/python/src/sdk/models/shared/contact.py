import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contacttype_enum as shared_contacttype_enum


@dataclass_json
@dataclasses.dataclass
class Contact:
    r"""Contact
    A personal contact or escalation plan that Incident Manager engages during an incident.
    """
    
    alias: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    contact_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    type: shared_contacttype_enum.ContactTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    
