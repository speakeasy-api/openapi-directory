import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PartListElement:
    r"""PartListElement
    A list of the part sizes of the multipart upload.
    """
    
    range_in_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeInBytes') }})
    sha256_tree_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SHA256TreeHash') }})
    
