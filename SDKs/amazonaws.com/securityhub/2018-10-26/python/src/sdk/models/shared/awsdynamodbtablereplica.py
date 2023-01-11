import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsdynamodbtablereplicaglobalsecondaryindex as shared_awsdynamodbtablereplicaglobalsecondaryindex
from ..shared import awsdynamodbtableprovisionedthroughputoverride as shared_awsdynamodbtableprovisionedthroughputoverride


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableReplica:
    r"""AwsDynamoDbTableReplica
    Information about a replica of a DynamoDB table.
    """
    
    global_secondary_indexes: Optional[list[shared_awsdynamodbtablereplicaglobalsecondaryindex.AwsDynamoDbTableReplicaGlobalSecondaryIndex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    kms_master_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsMasterKeyId') }})
    provisioned_throughput_override: Optional[shared_awsdynamodbtableprovisionedthroughputoverride.AwsDynamoDbTableProvisionedThroughputOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    region_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatus') }})
    replica_status_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatusDescription') }})
    
