import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsdynamodbtablekeyschema as shared_awsdynamodbtablekeyschema
from ..shared import awsdynamodbtableprojection as shared_awsdynamodbtableprojection
from ..shared import awsdynamodbtableprovisionedthroughput as shared_awsdynamodbtableprovisionedthroughput


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableGlobalSecondaryIndex:
    r"""AwsDynamoDbTableGlobalSecondaryIndex
    Information abut a global secondary index for the table.
    """
    
    backfilling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Backfilling') }})
    index_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexArn') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexSizeBytes') }})
    index_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexStatus') }})
    item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[list[shared_awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Optional[shared_awsdynamodbtableprojection.AwsDynamoDbTableProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    provisioned_throughput: Optional[shared_awsdynamodbtableprovisionedthroughput.AwsDynamoDbTableProvisionedThroughput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    
