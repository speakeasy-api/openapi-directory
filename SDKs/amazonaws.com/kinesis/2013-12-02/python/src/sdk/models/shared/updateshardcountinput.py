import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingtype_enum as shared_scalingtype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateShardCountInput:
    scaling_type: shared_scalingtype_enum.ScalingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingType') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    target_shard_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetShardCount') }})
    
