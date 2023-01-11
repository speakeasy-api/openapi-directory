import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import othermetadatavaluelistitem as shared_othermetadatavaluelistitem


@dataclass_json
@dataclasses.dataclass
class MetadataInfo:
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    metadata_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataValue') }})
    other_metadata_value_list: Optional[list[shared_othermetadatavaluelistitem.OtherMetadataValueListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherMetadataValueList') }})
    
