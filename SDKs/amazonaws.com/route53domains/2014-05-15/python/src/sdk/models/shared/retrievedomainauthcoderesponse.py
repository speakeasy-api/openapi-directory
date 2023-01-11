import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RetrieveDomainAuthCodeResponse:
    r"""RetrieveDomainAuthCodeResponse
    The RetrieveDomainAuthCode response includes the following element.
    """
    
    auth_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthCode') }})
    
