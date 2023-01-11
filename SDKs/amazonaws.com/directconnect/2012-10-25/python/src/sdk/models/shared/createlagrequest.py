import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateLagRequest:
    connections_bandwidth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionsBandwidth') }})
    lag_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagName') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    number_of_connections: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfConnections') }})
    child_connection_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childConnectionTags') }})
    connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    provider_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    request_mac_sec: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMACSec') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
