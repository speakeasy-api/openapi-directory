import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discoveredresource as shared_discoveredresource


@dataclass_json
@dataclasses.dataclass
class AssociateDiscoveredResourceRequest:
    discovered_resource: shared_discoveredresource.DiscoveredResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscoveredResource') }})
    migration_task_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
