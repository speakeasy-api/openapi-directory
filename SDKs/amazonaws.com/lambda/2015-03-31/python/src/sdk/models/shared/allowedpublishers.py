import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllowedPublishers:
    r"""AllowedPublishers
    List of signing profiles that can sign a code package. 
    """
    
    signing_profile_version_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArns') }})
    
