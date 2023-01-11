import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_catalog_deletecustomcolumnlink as shared_links_catalog_deletecustomcolumnlink
from ..shared import links_catalog_getcustomcolumnexpressionlink as shared_links_catalog_getcustomcolumnexpressionlink
from ..shared import links_importation_mapcustomcolumnlink as shared_links_importation_mapcustomcolumnlink
from ..shared import links_importation_getproductsamplecustomcolumnvaluelink as shared_links_importation_getproductsamplecustomcolumnvaluelink
from ..shared import links_importation_savecustomcolumnlink as shared_links_importation_savecustomcolumnlink
from ..shared import links_importation_unmapcustomcolumnlink as shared_links_importation_unmapcustomcolumnlink


@dataclass_json
@dataclasses.dataclass
class ImportationCustomColumnLinks:
    delete: shared_links_catalog_deletecustomcolumnlink.LinksCatalogDeleteCustomColumnLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    expression: shared_links_catalog_getcustomcolumnexpressionlink.LinksCatalogGetCustomColumnExpressionLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    save: shared_links_importation_savecustomcolumnlink.LinksImportationSaveCustomColumnLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    map: Optional[shared_links_importation_mapcustomcolumnlink.LinksImportationMapCustomColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    product_sample_value: Optional[shared_links_importation_getproductsamplecustomcolumnvaluelink.LinksImportationGetProductSampleCustomColumnValueLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSampleValue') }})
    unmap: Optional[shared_links_importation_unmapcustomcolumnlink.LinksImportationUnmapCustomColumnLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmap') }})
    
