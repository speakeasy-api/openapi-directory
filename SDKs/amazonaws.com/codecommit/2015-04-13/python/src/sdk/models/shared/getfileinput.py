import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetFileInput:
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    commit_specifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitSpecifier') }})
    
