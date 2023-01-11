import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDatabaseInput:
    catalog_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogName') }})
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    
