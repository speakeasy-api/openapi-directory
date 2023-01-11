import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ThirdPartySourceRepository:
    r"""ThirdPartySourceRepository
     Information about a third-party source repository connected to CodeGuru Reviewer. 
    """
    
    connection_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    
