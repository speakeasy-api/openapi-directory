import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageidentifier as shared_imageidentifier


@dataclass_json
@dataclasses.dataclass
class DescribeImageScanFindingsRequest:
    image_id: shared_imageidentifier.ImageIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
