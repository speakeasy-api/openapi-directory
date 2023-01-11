import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customerindexlinks as shared_customerindexlinks
from ..shared import customerindexlovlinks as shared_customerindexlovlinks


@dataclass_json
@dataclasses.dataclass
class CustomerIndex:
    r"""CustomerIndex
    The index of the customer API
    """
    
    links: shared_customerindexlinks.CustomerIndexLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    lov_links: shared_customerindexlovlinks.CustomerIndexLovLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    
