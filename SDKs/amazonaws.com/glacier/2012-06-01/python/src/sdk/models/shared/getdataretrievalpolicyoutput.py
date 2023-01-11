import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataretrievalpolicy as shared_dataretrievalpolicy


@dataclass_json
@dataclasses.dataclass
class GetDataRetrievalPolicyOutput:
    r"""GetDataRetrievalPolicyOutput
    Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
    """
    
    policy: Optional[shared_dataretrievalpolicy.DataRetrievalPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    
