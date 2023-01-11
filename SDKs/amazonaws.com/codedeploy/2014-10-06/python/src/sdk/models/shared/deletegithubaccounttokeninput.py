import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteGitHubAccountTokenInput:
    r"""DeleteGitHubAccountTokenInput
    Represents the input of a <code>DeleteGitHubAccount</code> operation.
    """
    
    token_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    
