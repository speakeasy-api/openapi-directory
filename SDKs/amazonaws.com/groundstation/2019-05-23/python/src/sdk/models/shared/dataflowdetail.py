import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class DataflowDetail:
    r"""DataflowDetail
    Information about a dataflow edge used in a contact.
    """
    
    destination: Optional[shared_destination.Destination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
