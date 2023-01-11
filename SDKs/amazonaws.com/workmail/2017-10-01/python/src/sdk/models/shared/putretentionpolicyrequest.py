import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import folderconfiguration as shared_folderconfiguration


@dataclass_json
@dataclasses.dataclass
class PutRetentionPolicyRequest:
    folder_configurations: list[shared_folderconfiguration.FolderConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FolderConfigurations') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
