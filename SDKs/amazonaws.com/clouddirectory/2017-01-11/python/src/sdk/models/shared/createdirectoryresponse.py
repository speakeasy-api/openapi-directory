import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateDirectoryResponse:
    applied_schema_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedSchemaArn') }})
    directory_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    object_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    
