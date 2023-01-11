import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrycatalogdata as shared_registrycatalogdata


@dataclass_json
@dataclasses.dataclass
class PutRegistryCatalogDataResponse:
    registry_catalog_data: shared_registrycatalogdata.RegistryCatalogData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCatalogData') }})
    
