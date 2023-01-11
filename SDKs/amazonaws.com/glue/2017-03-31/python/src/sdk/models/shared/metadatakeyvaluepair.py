import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MetadataKeyValuePair:
    r"""MetadataKeyValuePair
    A structure containing a key value pair for metadata.
    """
    
    metadata_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataKey') }})
    metadata_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataValue') }})
    
