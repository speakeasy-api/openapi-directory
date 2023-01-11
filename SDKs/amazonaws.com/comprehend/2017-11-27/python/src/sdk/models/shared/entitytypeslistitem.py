import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntityTypesListItem:
    r"""EntityTypesListItem
    An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
