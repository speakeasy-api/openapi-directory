import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shareinvitationsummary as shared_shareinvitationsummary


@dataclass_json
@dataclasses.dataclass
class ListShareInvitationsOutput:
    r"""ListShareInvitationsOutput
    Input for List Share Invitations
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    share_invitation_summaries: Optional[list[shared_shareinvitationsummary.ShareInvitationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitationSummaries') }})
    
