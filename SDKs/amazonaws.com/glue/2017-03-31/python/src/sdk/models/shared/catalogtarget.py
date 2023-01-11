import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CatalogTarget:
    r"""CatalogTarget
    Specifies an Glue Data Catalog target.
    """
    
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    tables: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tables') }})
    
