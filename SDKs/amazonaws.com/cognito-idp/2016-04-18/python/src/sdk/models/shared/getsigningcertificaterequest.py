import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetSigningCertificateRequest:
    r"""GetSigningCertificateRequest
    Request to get a signing certificate from Cognito.
    """
    
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
