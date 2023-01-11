import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsService:
    r"""AwsService
    Provides information about an Amazon Web Service that performed an action on an affected resource.
    """
    
    invoked_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invokedBy') }})
    
