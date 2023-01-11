import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getpubliclistofvalueslink as shared_links_getpubliclistofvalueslink


@dataclass_json
@dataclasses.dataclass
class PublicListOfValuesResponseLinks:
    self: Optional[shared_links_getpubliclistofvalueslink.LinksGetPublicListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
