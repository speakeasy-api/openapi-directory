import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceFileSpecifier:
    r"""SourceFileSpecifier
    Information about a source file that is part of changes made in a commit.
    """
    
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    is_move: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMove') }})
    
