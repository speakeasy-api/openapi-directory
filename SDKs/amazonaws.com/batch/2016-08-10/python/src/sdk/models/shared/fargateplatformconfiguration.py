import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FargatePlatformConfiguration:
    r"""FargatePlatformConfiguration
    The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
    """
    
    platform_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    
