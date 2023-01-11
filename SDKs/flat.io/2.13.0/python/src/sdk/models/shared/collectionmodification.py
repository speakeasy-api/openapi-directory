import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionprivacy_enum as shared_collectionprivacy_enum


@dataclass_json
@dataclasses.dataclass
class CollectionModification:
    r"""CollectionModification
    Edit the collection metadata
    """
    
    privacy: Optional[shared_collectionprivacy_enum.CollectionPrivacyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
