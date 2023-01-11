import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodegroupissuecode_enum as shared_nodegroupissuecode_enum


@dataclass_json
@dataclasses.dataclass
class Issue:
    r"""Issue
    An object representing an issue with an Amazon EKS resource.
    """
    
    code: Optional[shared_nodegroupissuecode_enum.NodegroupIssueCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIds') }})
    
