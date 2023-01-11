import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactlistimportaction_enum as shared_contactlistimportaction_enum


@dataclass_json
@dataclasses.dataclass
class ContactListDestination:
    r"""ContactListDestination
    An object that contains details about the action of a contact list.
    """
    
    contact_list_import_action: shared_contactlistimportaction_enum.ContactListImportActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListImportAction') }})
    contact_list_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListName') }})
    
