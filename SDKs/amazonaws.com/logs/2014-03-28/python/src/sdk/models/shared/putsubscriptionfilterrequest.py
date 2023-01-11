import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distribution_enum as shared_distribution_enum


@dataclass_json
@dataclasses.dataclass
class PutSubscriptionFilterRequest:
    destination_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationArn') }})
    filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    filter_pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    distribution: Optional[shared_distribution_enum.DistributionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
