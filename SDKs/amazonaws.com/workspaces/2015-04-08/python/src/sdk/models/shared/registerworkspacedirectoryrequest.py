import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import tenancy_enum as shared_tenancy_enum


@dataclass_json
@dataclasses.dataclass
class RegisterWorkspaceDirectoryRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    enable_work_docs: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWorkDocs') }})
    enable_self_service: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSelfService') }})
    subnet_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tenancy: Optional[shared_tenancy_enum.TenancyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    
