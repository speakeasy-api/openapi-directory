import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimisebychannellink as shared_links_optimisebychannellink


@dataclass_json
@dataclasses.dataclass
class ReportByChannelLinks:
    disable_products: Optional[shared_links_optimisebychannellink.LinksOptimiseByChannelLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProducts') }})
    enable_products: Optional[shared_links_optimisebychannellink.LinksOptimiseByChannelLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableProducts') }})
    
