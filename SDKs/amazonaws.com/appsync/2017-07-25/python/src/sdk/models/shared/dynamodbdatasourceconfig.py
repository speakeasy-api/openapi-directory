import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deltasyncconfig as shared_deltasyncconfig


@dataclass_json
@dataclasses.dataclass
class DynamodbDataSourceConfig:
    r"""DynamodbDataSourceConfig
    Describes an Amazon DynamoDB data source configuration.
    """
    
    aws_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    delta_sync_config: Optional[shared_deltasyncconfig.DeltaSyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncConfig') }})
    use_caller_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCallerCredentials') }})
    versioned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioned') }})
    
