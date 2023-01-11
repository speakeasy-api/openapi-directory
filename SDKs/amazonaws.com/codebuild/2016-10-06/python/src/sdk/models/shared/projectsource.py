import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceauth as shared_sourceauth
from ..shared import buildstatusconfig as shared_buildstatusconfig
from ..shared import gitsubmodulesconfig as shared_gitsubmodulesconfig
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclass_json
@dataclasses.dataclass
class ProjectSource:
    r"""ProjectSource
    Information about the build input source code for the build project.
    """
    
    type: shared_sourcetype_enum.SourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    auth: Optional[shared_sourceauth.SourceAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    build_status_config: Optional[shared_buildstatusconfig.BuildStatusConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatusConfig') }})
    buildspec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildspec') }})
    git_clone_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCloneDepth') }})
    git_submodules_config: Optional[shared_gitsubmodulesconfig.GitSubmodulesConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitSubmodulesConfig') }})
    insecure_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecureSsl') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    report_build_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBuildStatus') }})
    source_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceIdentifier') }})
    
