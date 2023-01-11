import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_auto_getautoimportconfigurationlink as shared_links_auto_getautoimportconfigurationlink
from ..shared import links_catalog_getcatalogcolumnslink as shared_links_catalog_getcatalogcolumnslink
from ..shared import links_catalog_getcategorieslink as shared_links_catalog_getcategorieslink
from ..shared import links_catalog_computeexpressionlink as shared_links_catalog_computeexpressionlink
from ..shared import links_catalog_getcustomcolumnslink as shared_links_catalog_getcustomcolumnslink
from ..shared import links_importation_getreportingslink as shared_links_importation_getreportingslink
from ..shared import links_importation_getmanualupdatelastinputconfiglink as shared_links_importation_getmanualupdatelastinputconfiglink
from ..shared import links_catalog_getproductslink as shared_links_catalog_getproductslink
from ..shared import links_catalog_getrandomproductslink as shared_links_catalog_getrandomproductslink
from ..shared import links_catalogstoreindexlink as shared_links_catalogstoreindexlink
from ..shared import links_importation_startmanualupdatelink as shared_links_importation_startmanualupdatelink


@dataclass_json
@dataclasses.dataclass
class CatalogStoreIndexLinks:
    self: shared_links_catalogstoreindexlink.LinksCatalogStoreIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    auto_import_info: Optional[shared_links_auto_getautoimportconfigurationlink.LinksAutoGetAutoImportConfigurationLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoImportInfo') }})
    catalog_columns: Optional[shared_links_catalog_getcatalogcolumnslink.LinksCatalogGetCatalogColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumns') }})
    categories: Optional[shared_links_catalog_getcategorieslink.LinksCatalogGetCategoriesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    compute_expression: Optional[shared_links_catalog_computeexpressionlink.LinksCatalogComputeExpressionLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeExpression') }})
    custom_columns: Optional[shared_links_catalog_getcustomcolumnslink.LinksCatalogGetCustomColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customColumns') }})
    importations: Optional[shared_links_importation_getreportingslink.LinksImportationGetReportingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importations') }})
    input_configuration: Optional[shared_links_importation_getmanualupdatelastinputconfiglink.LinksImportationGetManualUpdateLastInputConfigLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguration') }})
    products: Optional[shared_links_catalog_getproductslink.LinksCatalogGetProductsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    random_products: Optional[shared_links_catalog_getrandomproductslink.LinksCatalogGetRandomProductsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('randomProducts') }})
    start_importation: Optional[shared_links_importation_startmanualupdatelink.LinksImportationStartManualUpdateLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startImportation') }})
    
