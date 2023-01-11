import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnconfiguration as shared_columnconfiguration
from ..shared import customcolumnlinks as shared_customcolumnlinks


@dataclass_json
@dataclasses.dataclass
class CustomColumn:
    r"""CustomColumn
    The custom column configuration
    """
    
    configuration: shared_columnconfiguration.ColumnConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: shared_customcolumnlinks.CustomColumnLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    catalog_column_dependencies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumnDependencies') }})
    
