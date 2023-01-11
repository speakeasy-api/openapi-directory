import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsdynamodbtableprovisionedthroughputoverride as shared_awsdynamodbtableprovisionedthroughputoverride


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableReplicaGlobalSecondaryIndex:
    r"""AwsDynamoDbTableReplicaGlobalSecondaryIndex
    Information about a global secondary index for a DynamoDB table replica.
    """
    
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    provisioned_throughput_override: Optional[shared_awsdynamodbtableprovisionedthroughputoverride.AwsDynamoDbTableProvisionedThroughputOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    
