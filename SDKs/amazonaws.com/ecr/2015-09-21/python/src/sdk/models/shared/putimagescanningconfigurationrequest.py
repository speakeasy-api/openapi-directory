import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagescanningconfiguration as shared_imagescanningconfiguration


@dataclass_json
@dataclasses.dataclass
class PutImageScanningConfigurationRequest:
    image_scanning_configuration: shared_imagescanningconfiguration.ImageScanningConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanningConfiguration') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
