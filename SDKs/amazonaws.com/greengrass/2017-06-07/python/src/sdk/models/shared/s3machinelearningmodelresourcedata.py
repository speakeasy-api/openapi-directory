import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcedownloadownersetting as shared_resourcedownloadownersetting


@dataclass_json
@dataclasses.dataclass
class S3MachineLearningModelResourceData:
    r"""S3MachineLearningModelResourceData
    Attributes that define an Amazon S3 machine learning resource.
    """
    
    destination_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPath') }})
    owner_setting: Optional[shared_resourcedownloadownersetting.ResourceDownloadOwnerSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerSetting') }})
    s3_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
