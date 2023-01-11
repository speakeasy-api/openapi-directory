import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_catalog_savecustomcolumnlink as shared_links_catalog_savecustomcolumnlink
from ..shared import links_catalog_getcustomcolumnslink as shared_links_catalog_getcustomcolumnslink


@dataclass_json
@dataclasses.dataclass
class CustomColumnListLinks:
    self: shared_links_catalog_getcustomcolumnslink.LinksCatalogGetCustomColumnsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    add: Optional[shared_links_catalog_savecustomcolumnlink.LinksCatalogSaveCustomColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    
