import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutItemInput:
    r"""PutItemInput
    The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
    """
    
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
