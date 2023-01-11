import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messageformat_enum as shared_messageformat_enum


@dataclass_json
@dataclasses.dataclass
class SnsAction:
    r"""SnsAction
    Describes an action to publish to an Amazon SNS topic.
    """
    
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    message_format: Optional[shared_messageformat_enum.MessageFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    
