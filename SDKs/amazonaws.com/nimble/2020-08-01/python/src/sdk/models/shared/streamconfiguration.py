import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingclipboardmode_enum as shared_streamingclipboardmode_enum
from ..shared import streaminginstancetype_enum as shared_streaminginstancetype_enum


@dataclass_json
@dataclasses.dataclass
class StreamConfiguration:
    r"""StreamConfiguration
    A configuration for a streaming session.
    """
    
    clipboard_mode: Optional[shared_streamingclipboardmode_enum.StreamingClipboardModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clipboardMode') }})
    ec2_instance_types: Optional[list[shared_streaminginstancetype_enum.StreamingInstanceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceTypes') }})
    max_session_length_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSessionLengthInMinutes') }})
    streaming_image_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImageIds') }})
    
