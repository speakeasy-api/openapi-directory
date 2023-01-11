import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcedownloadownersetting as shared_resourcedownloadownersetting


@dataclass_json
@dataclasses.dataclass
class SageMakerMachineLearningModelResourceData:
    r"""SageMakerMachineLearningModelResourceData
    Attributes that define an Amazon SageMaker machine learning resource.
    """
    
    destination_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPath') }})
    owner_setting: Optional[shared_resourcedownloadownersetting.ResourceDownloadOwnerSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerSetting') }})
    sage_maker_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerJobArn') }})
    
