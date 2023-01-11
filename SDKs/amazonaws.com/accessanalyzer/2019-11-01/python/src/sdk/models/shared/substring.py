import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Substring:
    r"""Substring
    A reference to a substring of a literal string in a JSON document.
    """
    
    length: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    start: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
