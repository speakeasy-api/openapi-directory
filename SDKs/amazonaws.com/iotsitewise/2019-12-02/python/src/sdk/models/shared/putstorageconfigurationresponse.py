import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationstatus as shared_configurationstatus
from ..shared import multilayerstorage as shared_multilayerstorage
from ..shared import storagetype_enum as shared_storagetype_enum


@dataclass_json
@dataclasses.dataclass
class PutStorageConfigurationResponse:
    configuration_status: shared_configurationstatus.ConfigurationStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationStatus') }})
    storage_type: shared_storagetype_enum.StorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    multi_layer_storage: Optional[shared_multilayerstorage.MultiLayerStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiLayerStorage') }})
    
