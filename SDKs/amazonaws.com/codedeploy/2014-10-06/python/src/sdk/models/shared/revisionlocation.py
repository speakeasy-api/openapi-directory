import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appspeccontent as shared_appspeccontent
from ..shared import githublocation as shared_githublocation
from ..shared import revisionlocationtype_enum as shared_revisionlocationtype_enum
from ..shared import s3location as shared_s3location
from ..shared import rawstring as shared_rawstring


@dataclass_json
@dataclasses.dataclass
class RevisionLocation:
    r"""RevisionLocation
    Information about the location of an application revision.
    """
    
    app_spec_content: Optional[shared_appspeccontent.AppSpecContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSpecContent') }})
    git_hub_location: Optional[shared_githublocation.GitHubLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitHubLocation') }})
    revision_type: Optional[shared_revisionlocationtype_enum.RevisionLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionType') }})
    s3_location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    string: Optional[shared_rawstring.RawString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('string') }})
    
