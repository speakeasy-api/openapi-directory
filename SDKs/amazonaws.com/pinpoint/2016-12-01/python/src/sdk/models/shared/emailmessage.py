import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rawemail as shared_rawemail
from ..shared import simpleemail as shared_simpleemail


@dataclass_json
@dataclasses.dataclass
class EmailMessage:
    r"""EmailMessage
    Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    feedback_forwarding_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingAddress') }})
    from_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromAddress') }})
    raw_email: Optional[shared_rawemail.RawEmail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawEmail') }})
    reply_to_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    simple_email: Optional[shared_simpleemail.SimpleEmail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimpleEmail') }})
    substitutions: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    
