import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateLfTagRequest:
    tag_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValues') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
