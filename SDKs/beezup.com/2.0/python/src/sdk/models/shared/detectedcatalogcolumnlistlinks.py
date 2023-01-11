import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_getdetectedcatalogcolumnslink as shared_links_importation_getdetectedcatalogcolumnslink


@dataclass_json
@dataclasses.dataclass
class DetectedCatalogColumnListLinks:
    self: shared_links_importation_getdetectedcatalogcolumnslink.LinksImportationGetDetectedCatalogColumnsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
