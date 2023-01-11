import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceDefinitionCreate:
    docker_image_tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImageTag') }})
    docker_repository: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    icon: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    
