import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogimportstatus as shared_catalogimportstatus


@dataclass_json
@dataclasses.dataclass
class GetCatalogImportStatusResponse:
    import_status: Optional[shared_catalogimportstatus.CatalogImportStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportStatus') }})
    
