import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteGitHubAccountTokenOutput:
    r"""DeleteGitHubAccountTokenOutput
    Represents the output of a <code>DeleteGitHubAccountToken</code> operation.
    """
    
    token_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenName') }})
    
