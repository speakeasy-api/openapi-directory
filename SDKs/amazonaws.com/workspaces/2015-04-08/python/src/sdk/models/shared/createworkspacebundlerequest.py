import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computetype as shared_computetype
from ..shared import rootstorage as shared_rootstorage
from ..shared import tag as shared_tag
from ..shared import userstorage as shared_userstorage


@dataclass_json
@dataclasses.dataclass
class CreateWorkspaceBundleRequest:
    bundle_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleDescription') }})
    bundle_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleName') }})
    compute_type: shared_computetype.ComputeType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeType') }})
    image_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageId') }})
    user_storage: shared_userstorage.UserStorage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStorage') }})
    root_storage: Optional[shared_rootstorage.RootStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootStorage') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
