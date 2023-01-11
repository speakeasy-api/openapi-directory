import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableKeySchema:
    r"""AwsDynamoDbTableKeySchema
    A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    key_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    
