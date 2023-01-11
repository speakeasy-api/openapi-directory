import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RunnerApplication:
    r"""RunnerApplication
    Runner Application
    """
    
    architecture: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    download_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    os: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    
