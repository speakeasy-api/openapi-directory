import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateWebACLMigrationStackResponse:
    s3_object_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ObjectUrl') }})
    
