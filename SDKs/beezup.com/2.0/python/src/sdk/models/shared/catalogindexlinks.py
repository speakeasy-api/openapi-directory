import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_catalog_getbeezupcolumnslink as shared_links_catalog_getbeezupcolumnslink
from ..shared import links_catalogindexlink as shared_links_catalogindexlink


@dataclass_json
@dataclasses.dataclass
class CatalogIndexLinks:
    beez_up_columns: shared_links_catalog_getbeezupcolumnslink.LinksCatalogGetBeezUpColumnsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumns') }})
    self: shared_links_catalogindexlink.LinksCatalogIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
