import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration


@dataclass_json
@dataclasses.dataclass
class DestinationConfiguration:
    r"""DestinationConfiguration
    A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
    """
    
    s3: Optional[shared_s3destinationconfiguration.S3DestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
