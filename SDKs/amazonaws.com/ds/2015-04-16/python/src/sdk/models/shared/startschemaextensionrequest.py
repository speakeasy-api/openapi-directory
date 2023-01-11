import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartSchemaExtensionRequest:
    create_snapshot_before_schema_extension: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateSnapshotBeforeSchemaExtension') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    ldif_content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LdifContent') }})
    
