import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateRelationalDatabaseRequest:
    master_database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterDatabaseName') }})
    master_username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUsername') }})
    relational_database_blueprint_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseBlueprintId') }})
    relational_database_bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseBundleId') }})
    relational_database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    availability_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    master_user_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUserPassword') }})
    preferred_backup_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMaintenanceWindow') }})
    publicly_accessible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publiclyAccessible') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
