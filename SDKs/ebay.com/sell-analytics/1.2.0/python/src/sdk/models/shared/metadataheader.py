import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definition as shared_definition


@dataclass_json
@dataclasses.dataclass
class MetadataHeader:
    r"""MetadataHeader
    Type that defines the metadata header fields.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metadata_keys: Optional[list[shared_definition.Definition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataKeys') }})
    
