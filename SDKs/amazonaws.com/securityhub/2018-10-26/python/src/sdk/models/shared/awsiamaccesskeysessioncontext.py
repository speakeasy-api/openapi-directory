import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsiamaccesskeysessioncontextattributes as shared_awsiamaccesskeysessioncontextattributes
from ..shared import awsiamaccesskeysessioncontextsessionissuer as shared_awsiamaccesskeysessioncontextsessionissuer


@dataclass_json
@dataclasses.dataclass
class AwsIamAccessKeySessionContext:
    r"""AwsIamAccessKeySessionContext
    Provides information about the session that the key was used for.
    """
    
    attributes: Optional[shared_awsiamaccesskeysessioncontextattributes.AwsIamAccessKeySessionContextAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    session_issuer: Optional[shared_awsiamaccesskeysessioncontextsessionissuer.AwsIamAccessKeySessionContextSessionIssuer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionIssuer') }})
    
