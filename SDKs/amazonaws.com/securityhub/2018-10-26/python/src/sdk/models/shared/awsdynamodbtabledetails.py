import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsdynamodbtableattributedefinition as shared_awsdynamodbtableattributedefinition
from ..shared import awsdynamodbtablebillingmodesummary as shared_awsdynamodbtablebillingmodesummary
from ..shared import awsdynamodbtableglobalsecondaryindex as shared_awsdynamodbtableglobalsecondaryindex
from ..shared import awsdynamodbtablekeyschema as shared_awsdynamodbtablekeyschema
from ..shared import awsdynamodbtablelocalsecondaryindex as shared_awsdynamodbtablelocalsecondaryindex
from ..shared import awsdynamodbtableprovisionedthroughput as shared_awsdynamodbtableprovisionedthroughput
from ..shared import awsdynamodbtablereplica as shared_awsdynamodbtablereplica
from ..shared import awsdynamodbtablerestoresummary as shared_awsdynamodbtablerestoresummary
from ..shared import awsdynamodbtablessedescription as shared_awsdynamodbtablessedescription
from ..shared import awsdynamodbtablestreamspecification as shared_awsdynamodbtablestreamspecification


@dataclass_json
@dataclasses.dataclass
class AwsDynamoDbTableDetails:
    r"""AwsDynamoDbTableDetails
    Provides details about a DynamoDB table.
    """
    
    attribute_definitions: Optional[list[shared_awsdynamodbtableattributedefinition.AwsDynamoDbTableAttributeDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinitions') }})
    billing_mode_summary: Optional[shared_awsdynamodbtablebillingmodesummary.AwsDynamoDbTableBillingModeSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingModeSummary') }})
    creation_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime') }})
    global_secondary_indexes: Optional[list[shared_awsdynamodbtableglobalsecondaryindex.AwsDynamoDbTableGlobalSecondaryIndex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    global_table_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableVersion') }})
    item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[list[shared_awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    latest_stream_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamArn') }})
    latest_stream_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamLabel') }})
    local_secondary_indexes: Optional[list[shared_awsdynamodbtablelocalsecondaryindex.AwsDynamoDbTableLocalSecondaryIndex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    provisioned_throughput: Optional[shared_awsdynamodbtableprovisionedthroughput.AwsDynamoDbTableProvisionedThroughput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    replicas: Optional[list[shared_awsdynamodbtablereplica.AwsDynamoDbTableReplica]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replicas') }})
    restore_summary: Optional[shared_awsdynamodbtablerestoresummary.AwsDynamoDbTableRestoreSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreSummary') }})
    sse_description: Optional[shared_awsdynamodbtablessedescription.AwsDynamoDbTableSseDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseDescription') }})
    stream_specification: Optional[shared_awsdynamodbtablestreamspecification.AwsDynamoDbTableStreamSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamSpecification') }})
    table_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableId') }})
    table_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableSizeBytes') }})
    table_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatus') }})
    
