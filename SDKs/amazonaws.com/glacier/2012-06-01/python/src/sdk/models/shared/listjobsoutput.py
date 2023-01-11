import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glacierjobdescription as shared_glacierjobdescription


@dataclass_json
@dataclasses.dataclass
class ListJobsOutput:
    r"""ListJobsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    job_list: Optional[list[shared_glacierjobdescription.GlacierJobDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobList') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
