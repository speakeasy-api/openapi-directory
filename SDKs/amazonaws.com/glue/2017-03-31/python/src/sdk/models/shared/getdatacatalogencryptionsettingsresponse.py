import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacatalogencryptionsettings as shared_datacatalogencryptionsettings


@dataclass_json
@dataclasses.dataclass
class GetDataCatalogEncryptionSettingsResponse:
    data_catalog_encryption_settings: Optional[shared_datacatalogencryptionsettings.DataCatalogEncryptionSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalogEncryptionSettings') }})
    
