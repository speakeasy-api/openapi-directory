import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import content as shared_content


@dataclass_json
@dataclasses.dataclass
class ImportAddressRequest:
    content: shared_content.Content = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
