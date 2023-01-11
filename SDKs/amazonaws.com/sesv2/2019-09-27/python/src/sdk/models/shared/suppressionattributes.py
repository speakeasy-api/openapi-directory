import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppressionlistreason_enum as shared_suppressionlistreason_enum


@dataclass_json
@dataclasses.dataclass
class SuppressionAttributes:
    r"""SuppressionAttributes
    An object that contains information about the email address suppression preferences for your account in the current AWS Region.
    """
    
    suppressed_reasons: Optional[list[shared_suppressionlistreason_enum.SuppressionListReasonEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedReasons') }})
    
