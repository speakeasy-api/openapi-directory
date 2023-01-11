import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TerminologyDataLocation:
    r"""TerminologyDataLocation
    The location of the custom terminology data.
    """
    
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    repository_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryType') }})
    
