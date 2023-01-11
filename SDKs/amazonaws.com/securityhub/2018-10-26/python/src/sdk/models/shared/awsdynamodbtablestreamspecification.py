import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableStreamSpecification:
    r"""AwsDynamoDbTableStreamSpecification
    The current DynamoDB Streams configuration for the table.
    """
    
    stream_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamEnabled') }})
    stream_view_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamViewType') }})
    
