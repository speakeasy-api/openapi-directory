import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsdynamodbtablekeyschema as shared_awsdynamodbtablekeyschema
from ..shared import awsdynamodbtableprojection as shared_awsdynamodbtableprojection


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableLocalSecondaryIndex:
    r"""AwsDynamoDbTableLocalSecondaryIndex
    Information about a local secondary index for a DynamoDB table.
    """
    
    index_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexArn') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    key_schema: Optional[list[shared_awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Optional[shared_awsdynamodbtableprojection.AwsDynamoDbTableProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    
