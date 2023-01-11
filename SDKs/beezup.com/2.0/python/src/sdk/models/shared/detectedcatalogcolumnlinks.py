import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_configurecatalogcolumnlink as shared_links_importation_configurecatalogcolumnlink
from ..shared import links_importation_ignorecolumnlink as shared_links_importation_ignorecolumnlink
from ..shared import links_importation_mapcatalogcolumnlink as shared_links_importation_mapcatalogcolumnlink
from ..shared import links_importation_reattendcolumnlink as shared_links_importation_reattendcolumnlink
from ..shared import links_importation_unmapcatalogcolumnlink as shared_links_importation_unmapcatalogcolumnlink


@dataclass_json
@dataclasses.dataclass
class DetectedCatalogColumnLinks:
    configure: Optional[shared_links_importation_configurecatalogcolumnlink.LinksImportationConfigureCatalogColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configure') }})
    ignore: Optional[shared_links_importation_ignorecolumnlink.LinksImportationIgnoreColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignore') }})
    map: Optional[shared_links_importation_mapcatalogcolumnlink.LinksImportationMapCatalogColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    reattend: Optional[shared_links_importation_reattendcolumnlink.LinksImportationReattendColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reattend') }})
    unmap: Optional[shared_links_importation_unmapcatalogcolumnlink.LinksImportationUnmapCatalogColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmap') }})
    
