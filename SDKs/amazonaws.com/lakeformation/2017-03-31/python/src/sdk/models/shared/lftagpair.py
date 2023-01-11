import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LfTagPair:
    r"""LfTagPair
    A structure containing a tag key-value pair.
    """
    
    tag_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValues') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
