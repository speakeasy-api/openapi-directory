import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission as shared_permission


@dataclass_json
@dataclasses.dataclass
class PipelineOutputConfig:
    r"""PipelineOutputConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    
