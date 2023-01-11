import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customcolumn as shared_customcolumn
from ..shared import customcolumnlistlinks as shared_customcolumnlistlinks


@dataclass_json
@dataclasses.dataclass
class CustomColumnList:
    custom_columns: list[shared_customcolumn.CustomColumn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customColumns') }})
    links: shared_customcolumnlistlinks.CustomColumnListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
