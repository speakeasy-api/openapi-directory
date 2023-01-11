import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blobmetadata as shared_blobmetadata
from ..shared import changetypeenum_enum as shared_changetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class Difference:
    r"""Difference
    Returns information about a set of differences for a commit specifier.
    """
    
    after_blob: Optional[shared_blobmetadata.BlobMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterBlob') }})
    before_blob: Optional[shared_blobmetadata.BlobMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeBlob') }})
    change_type: Optional[shared_changetypeenum_enum.ChangeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeType') }})
    
