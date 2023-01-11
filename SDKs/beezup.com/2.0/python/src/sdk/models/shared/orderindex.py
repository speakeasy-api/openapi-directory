import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderindexlinks as shared_orderindexlinks
from ..shared import orderindexlovlinks as shared_orderindexlovlinks


@dataclass_json
@dataclasses.dataclass
class OrderIndex:
    links: shared_orderindexlinks.OrderIndexLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    lov_links: shared_orderindexlovlinks.OrderIndexLovLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    
