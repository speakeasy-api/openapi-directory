import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ZendeskSourceProperties:
    r"""ZendeskSourceProperties
    The properties that are applied when using Zendesk as a flow source.
    """
    
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Object') }})
    
