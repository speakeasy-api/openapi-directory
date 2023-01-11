import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacatalog as shared_datacatalog


@dataclass_json
@dataclasses.dataclass
class GetDataCatalogOutput:
    data_catalog: Optional[shared_datacatalog.DataCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalog') }})
    
