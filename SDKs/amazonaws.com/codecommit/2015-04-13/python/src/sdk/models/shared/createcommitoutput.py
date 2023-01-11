import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemetadata as shared_filemetadata


@dataclass_json
@dataclasses.dataclass
class CreateCommitOutput:
    commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    files_added: Optional[list[shared_filemetadata.FileMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesAdded') }})
    files_deleted: Optional[list[shared_filemetadata.FileMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesDeleted') }})
    files_updated: Optional[list[shared_filemetadata.FileMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesUpdated') }})
    tree_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeId') }})
    
