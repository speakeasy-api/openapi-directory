import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimisebycategorylink as shared_links_optimisebycategorylink


@dataclass_json
@dataclasses.dataclass
class ReportByCategoryLinks:
    disable_products: Optional[shared_links_optimisebycategorylink.LinksOptimiseByCategoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableProducts') }})
    enable_products: Optional[shared_links_optimisebycategorylink.LinksOptimiseByCategoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableProducts') }})
    
