import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingstatus_enum as shared_streamingstatus_enum


@dataclass_json
@dataclasses.dataclass
class CognitoStreams:
    r"""CognitoStreams
    Configuration options for configure Cognito streams.
    """
    
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    streaming_status: Optional[shared_streamingstatus_enum.StreamingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamingStatus') }})
    
