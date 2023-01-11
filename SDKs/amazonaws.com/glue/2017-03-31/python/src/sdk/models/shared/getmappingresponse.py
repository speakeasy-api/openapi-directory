import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mappingentry as shared_mappingentry


@dataclass_json
@dataclasses.dataclass
class GetMappingResponse:
    mapping: list[shared_mappingentry.MappingEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mapping') }})
    
