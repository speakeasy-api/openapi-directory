import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageidentifier as shared_imageidentifier


@dataclass_json
@dataclasses.dataclass
class BatchDeleteImageRequest:
    r"""BatchDeleteImageRequest
    Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
    """
    
    image_ids: list[shared_imageidentifier.ImageIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageIds') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
