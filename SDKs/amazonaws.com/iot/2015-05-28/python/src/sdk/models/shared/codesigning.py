import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customcodesigning as shared_customcodesigning
from ..shared import startsigningjobparameter as shared_startsigningjobparameter


@dataclass_json
@dataclasses.dataclass
class CodeSigning:
    r"""CodeSigning
    Describes the method to use when code signing a file.
    """
    
    aws_signer_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsSignerJobId') }})
    custom_code_signing: Optional[shared_customcodesigning.CustomCodeSigning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customCodeSigning') }})
    start_signing_job_parameter: Optional[shared_startsigningjobparameter.StartSigningJobParameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startSigningJobParameter') }})
    
