import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictdetailleveltypeenum_enum as shared_conflictdetailleveltypeenum_enum
from ..shared import conflictresolution as shared_conflictresolution
from ..shared import conflictresolutionstrategytypeenum_enum as shared_conflictresolutionstrategytypeenum_enum


@dataclass_json
@dataclasses.dataclass
class MergeBranchesBySquashInput:
    destination_commit_specifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitSpecifier') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_commit_specifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitSpecifier') }})
    author_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    conflict_detail_level: Optional[shared_conflictdetailleveltypeenum_enum.ConflictDetailLevelTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetailLevel') }})
    conflict_resolution: Optional[shared_conflictresolution.ConflictResolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictResolution') }})
    conflict_resolution_strategy: Optional[shared_conflictresolutionstrategytypeenum_enum.ConflictResolutionStrategyTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictResolutionStrategy') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    target_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBranch') }})
    
