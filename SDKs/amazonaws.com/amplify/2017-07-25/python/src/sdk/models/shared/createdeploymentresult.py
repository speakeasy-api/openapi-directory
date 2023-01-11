import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateDeploymentResult:
    r"""CreateDeploymentResult
     The result structure for the create a new deployment request. 
    """
    
    file_upload_urls: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadUrls') }})
    zip_upload_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipUploadUrl') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
