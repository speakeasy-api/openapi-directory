import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datareplicationinfo as shared_datareplicationinfo
from ..shared import launchedinstance as shared_launchedinstance
from ..shared import lifecycle as shared_lifecycle
from ..shared import sourceproperties as shared_sourceproperties


@dataclass_json
@dataclasses.dataclass
class SourceServer:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    data_replication_info: Optional[shared_datareplicationinfo.DataReplicationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataReplicationInfo') }})
    is_archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isArchived') }})
    launched_instance: Optional[shared_launchedinstance.LaunchedInstance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchedInstance') }})
    life_cycle: Optional[shared_lifecycle.LifeCycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifeCycle') }})
    source_properties: Optional[shared_sourceproperties.SourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    source_server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
