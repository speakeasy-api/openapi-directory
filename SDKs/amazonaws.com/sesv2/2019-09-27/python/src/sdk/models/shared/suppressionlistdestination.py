import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppressionlistimportaction_enum as shared_suppressionlistimportaction_enum


@dataclass_json
@dataclasses.dataclass
class SuppressionListDestination:
    r"""SuppressionListDestination
    An object that contains details about the action of suppression list.
    """
    
    suppression_list_import_action: shared_suppressionlistimportaction_enum.SuppressionListImportActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListImportAction') }})
    
