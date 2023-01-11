import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContactChannelAddress:
    r"""ContactChannelAddress
    The details that Incident Manager uses when trying to engage the contact channel. 
    """
    
    simple_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimpleAddress') }})
    
