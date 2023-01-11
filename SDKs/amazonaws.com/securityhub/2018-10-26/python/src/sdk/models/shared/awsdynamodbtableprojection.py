import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableProjection:
    r"""AwsDynamoDbTableProjection
    For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
    """
    
    non_key_attributes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonKeyAttributes') }})
    projection_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectionType') }})
    
