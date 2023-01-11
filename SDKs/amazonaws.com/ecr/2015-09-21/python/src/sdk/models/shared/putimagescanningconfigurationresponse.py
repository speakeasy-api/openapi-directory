import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagescanningconfiguration as shared_imagescanningconfiguration


@dataclass_json
@dataclasses.dataclass
class PutImageScanningConfigurationResponse:
    image_scanning_configuration: Optional[shared_imagescanningconfiguration.ImageScanningConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanningConfiguration') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
