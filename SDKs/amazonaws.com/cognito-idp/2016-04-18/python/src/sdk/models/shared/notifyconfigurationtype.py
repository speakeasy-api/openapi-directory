import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notifyemailtype as shared_notifyemailtype


@dataclass_json
@dataclasses.dataclass
class NotifyConfigurationType:
    r"""NotifyConfigurationType
    The notify configuration type.
    """
    
    source_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceArn') }})
    block_email: Optional[shared_notifyemailtype.NotifyEmailType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockEmail') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('From') }})
    mfa_email: Optional[shared_notifyemailtype.NotifyEmailType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaEmail') }})
    no_action_email: Optional[shared_notifyemailtype.NotifyEmailType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoActionEmail') }})
    reply_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyTo') }})
    
