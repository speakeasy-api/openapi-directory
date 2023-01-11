import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictdetailleveltypeenum_enum as shared_conflictdetailleveltypeenum_enum
from ..shared import conflictresolutionstrategytypeenum_enum as shared_conflictresolutionstrategytypeenum_enum


@dataclass_json
@dataclasses.dataclass
class GetMergeCommitInput:
    destination_commit_specifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitSpecifier') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    source_commit_specifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitSpecifier') }})
    conflict_detail_level: Optional[shared_conflictdetailleveltypeenum_enum.ConflictDetailLevelTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetailLevel') }})
    conflict_resolution_strategy: Optional[shared_conflictresolutionstrategytypeenum_enum.ConflictResolutionStrategyTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictResolutionStrategy') }})
    
