import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import collectionprivacy_enum as shared_collectionprivacy_enum


@dataclass_json
@dataclasses.dataclass
class CollectionCreation:
    privacy: shared_collectionprivacy_enum.CollectionPrivacyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
