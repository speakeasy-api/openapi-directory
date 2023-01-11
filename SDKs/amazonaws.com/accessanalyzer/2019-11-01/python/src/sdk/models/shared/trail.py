import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Trail:
    r"""Trail
    Contains details about the CloudTrail trail being analyzed to generate a policy.
    """
    
    cloud_trail_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudTrailArn') }})
    all_regions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allRegions') }})
    regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
