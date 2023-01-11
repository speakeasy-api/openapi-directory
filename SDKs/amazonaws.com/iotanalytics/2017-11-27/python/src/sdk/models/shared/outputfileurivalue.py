import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OutputFileURIValue:
    r"""OutputFileURIValue
    The value of the variable as a structure that specifies an output file URI.
    """
    
    file_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    
