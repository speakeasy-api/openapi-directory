import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getpublicationslink as shared_links_getpublicationslink


@dataclass_json
@dataclasses.dataclass
class AccountPublicationsLinks:
    self: shared_links_getpublicationslink.LinksGetPublicationsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
