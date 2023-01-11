import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custompayload as shared_custompayload
from ..shared import imageresponsecard as shared_imageresponsecard
from ..shared import plaintextmessage as shared_plaintextmessage
from ..shared import ssmlmessage as shared_ssmlmessage


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    The object that provides message text and it's type.
    """
    
    custom_payload: Optional[shared_custompayload.CustomPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPayload') }})
    image_response_card: Optional[shared_imageresponsecard.ImageResponseCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageResponseCard') }})
    plain_text_message: Optional[shared_plaintextmessage.PlainTextMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plainTextMessage') }})
    ssml_message: Optional[shared_ssmlmessage.SsmlMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlMessage') }})
    
