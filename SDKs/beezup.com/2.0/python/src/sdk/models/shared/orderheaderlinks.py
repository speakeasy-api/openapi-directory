import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getorderlink as shared_links_getorderlink


@dataclass_json
@dataclasses.dataclass
class OrderHeaderLinks:
    self: shared_links_getorderlink.LinksGetOrderLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
