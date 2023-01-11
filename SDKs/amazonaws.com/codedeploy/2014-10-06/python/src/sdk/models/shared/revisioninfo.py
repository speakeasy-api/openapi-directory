import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import genericrevisioninfo as shared_genericrevisioninfo
from ..shared import revisionlocation as shared_revisionlocation


@dataclass_json
@dataclasses.dataclass
class RevisionInfo:
    r"""RevisionInfo
    Information about an application revision.
    """
    
    generic_revision_info: Optional[shared_genericrevisioninfo.GenericRevisionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRevisionInfo') }})
    revision_location: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionLocation') }})
    
