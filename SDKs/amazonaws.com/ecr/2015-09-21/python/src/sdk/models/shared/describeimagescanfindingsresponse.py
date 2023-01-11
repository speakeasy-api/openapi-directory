import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageidentifier as shared_imageidentifier
from ..shared import imagescanfindings as shared_imagescanfindings
from ..shared import imagescanstatus as shared_imagescanstatus


@dataclass_json
@dataclasses.dataclass
class DescribeImageScanFindingsResponse:
    image_id: Optional[shared_imageidentifier.ImageIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    image_scan_findings: Optional[shared_imagescanfindings.ImageScanFindings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanFindings') }})
    image_scan_status: Optional[shared_imagescanstatus.ImageScanStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
