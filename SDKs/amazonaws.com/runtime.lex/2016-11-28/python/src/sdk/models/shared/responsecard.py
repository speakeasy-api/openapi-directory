import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contenttype_enum as shared_contenttype_enum
from ..shared import genericattachment as shared_genericattachment


@dataclass_json
@dataclasses.dataclass
class ResponseCard:
    r"""ResponseCard
    If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
    """
    
    content_type: Optional[shared_contenttype_enum.ContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    generic_attachments: Optional[list[shared_genericattachment.GenericAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericAttachments') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
