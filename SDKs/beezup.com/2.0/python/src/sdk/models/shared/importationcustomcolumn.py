import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnconfiguration as shared_columnconfiguration
from ..shared import importationcustomcolumnlinks as shared_importationcustomcolumnlinks


@dataclass_json
@dataclasses.dataclass
class ImportationCustomColumn:
    r"""ImportationCustomColumn
    The custom column configuration
    """
    
    configuration: shared_columnconfiguration.ColumnConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: shared_importationcustomcolumnlinks.ImportationCustomColumnLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    
