import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_catalog_changecatalogcolumnusernamelink as shared_links_catalog_changecatalogcolumnusernamelink


@dataclass_json
@dataclasses.dataclass
class CatalogColumnLinks:
    rename: Optional[shared_links_catalog_changecatalogcolumnusernamelink.LinksCatalogChangeCatalogColumnUserNameLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    
