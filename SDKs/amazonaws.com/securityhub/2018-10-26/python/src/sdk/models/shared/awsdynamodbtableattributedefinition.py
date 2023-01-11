import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableAttributeDefinition:
    r"""AwsDynamoDbTableAttributeDefinition
    Contains a definition of an attribute for the table.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
