import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimisealllink as shared_links_optimisealllink
from ..shared import links_optimiselink as shared_links_optimiselink


@dataclass_json
@dataclasses.dataclass
class ReportByCommonResponseLinks:
    disable_all_products: Optional[shared_links_optimisealllink.LinksOptimiseAllLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAllProducts') }})
    disable_products: Optional[shared_links_optimiselink.LinksOptimiseLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProducts') }})
    enable_all_products: Optional[shared_links_optimisealllink.LinksOptimiseAllLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAllProducts') }})
    enable_products: Optional[shared_links_optimiselink.LinksOptimiseLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableProducts') }})
    
