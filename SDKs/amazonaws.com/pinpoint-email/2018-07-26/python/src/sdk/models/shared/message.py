import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import body as shared_body
from ..shared import content as shared_content


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
    """
    
    body: shared_body.Body = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    subject: shared_content.Content = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    
