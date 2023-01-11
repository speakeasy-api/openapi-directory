import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pathelement as shared_pathelement
from ..shared import span as shared_span


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    A location in a policy that is represented as a path through the JSON representation and a corresponding span.
    """
    
    path: list[shared_pathelement.PathElement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    span: shared_span.Span = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('span') }})
    
