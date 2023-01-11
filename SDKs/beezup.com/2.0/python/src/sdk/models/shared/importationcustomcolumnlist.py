import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importationcustomcolumn as shared_importationcustomcolumn
from ..shared import customcolumnlistlinks as shared_customcolumnlistlinks


@dataclass_json
@dataclasses.dataclass
class ImportationCustomColumnList:
    custom_columns: list[shared_importationcustomcolumn.ImportationCustomColumn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customColumns') }})
    links: shared_customcolumnlistlinks.CustomColumnListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
