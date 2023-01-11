import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsAPICallActionDomainDetails:
    r"""AwsAPICallActionDomainDetails
    Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
    """
    
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    
