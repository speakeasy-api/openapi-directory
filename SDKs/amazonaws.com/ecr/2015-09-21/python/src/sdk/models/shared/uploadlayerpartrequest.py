import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UploadLayerPartRequest:
    layer_part_blob: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerPartBlob') }})
    part_first_byte: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partFirstByte') }})
    part_last_byte: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partLastByte') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    upload_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
