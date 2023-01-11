import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SnowflakeConnectorProfileProperties:
    r"""SnowflakeConnectorProfileProperties
     The connector-specific profile properties required when using Snowflake. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    stage: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    warehouse: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    bucket_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    private_link_service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateLinkServiceName') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
