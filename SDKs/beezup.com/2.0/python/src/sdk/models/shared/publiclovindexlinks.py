import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getpubliclistofvalueslink as shared_links_getpubliclistofvalueslink
from ..shared import links_getpubliclovindexlink as shared_links_getpubliclovindexlink


@dataclass_json
@dataclasses.dataclass
class PublicLovIndexLinks:
    lists: Optional[dict[str, shared_links_getpubliclistofvalueslink.LinksGetPublicListOfValuesLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    self: Optional[shared_links_getpubliclovindexlink.LinksGetPublicLovIndexLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
