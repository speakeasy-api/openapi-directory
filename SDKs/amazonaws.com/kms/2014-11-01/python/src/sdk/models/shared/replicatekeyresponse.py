import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keymetadata as shared_keymetadata
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ReplicateKeyResponse:
    replica_key_metadata: Optional[shared_keymetadata.KeyMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaKeyMetadata') }})
    replica_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaPolicy') }})
    replica_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaTags') }})
    
