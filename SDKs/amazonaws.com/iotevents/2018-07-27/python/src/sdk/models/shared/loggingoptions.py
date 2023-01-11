import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectordebugoption as shared_detectordebugoption
from ..shared import logginglevel_enum as shared_logginglevel_enum


@dataclass_json
@dataclasses.dataclass
class LoggingOptions:
    r"""LoggingOptions
    The values of the AWS IoT Events logging options.
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    level: shared_logginglevel_enum.LoggingLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    detector_debug_options: Optional[list[shared_detectordebugoption.DetectorDebugOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorDebugOptions') }})
    
