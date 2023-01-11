import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubDomainSetting:
    r"""SubDomainSetting
     Describes the settings for the subdomain. 
    """
    
    branch_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
