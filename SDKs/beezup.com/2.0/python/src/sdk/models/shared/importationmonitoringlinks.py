import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_activateautoimportlink as shared_links_importation_activateautoimportlink
from ..shared import links_importation_cancellink as shared_links_importation_cancellink
from ..shared import links_importation_getdetectedcatalogcolumnslink as shared_links_importation_getdetectedcatalogcolumnslink
from ..shared import links_importation_commitlink as shared_links_importation_commitlink
from ..shared import links_importation_commitcolumnslink as shared_links_importation_commitcolumnslink
from ..shared import links_importation_configureremainingcatalogcolumnslink as shared_links_importation_configureremainingcatalogcolumnslink
from ..shared import links_importation_getcustomcolumnslink as shared_links_importation_getcustomcolumnslink
from ..shared import links_importation_getproductsamplelink as shared_links_importation_getproductsamplelink
from ..shared import links_importation_getimportationmonitoringlink as shared_links_importation_getimportationmonitoringlink
from ..shared import links_importation_technicalprogressionlink as shared_links_importation_technicalprogressionlink


@dataclass_json
@dataclasses.dataclass
class ImportationMonitoringLinks:
    r"""ImportationMonitoringLinks
    Applicable operations considering the state of the importation
    """
    
    self: shared_links_importation_getimportationmonitoringlink.LinksImportationGetImportationMonitoringLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    technical_progression: shared_links_importation_technicalprogressionlink.LinksImportationTechnicalProgressionLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('technicalProgression') }})
    activate_auto_import: Optional[shared_links_importation_activateautoimportlink.LinksImportationActivateAutoImportLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activateAutoImport') }})
    cancel: Optional[shared_links_importation_cancellink.LinksImportationCancelLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel') }})
    catalog_columns: Optional[shared_links_importation_getdetectedcatalogcolumnslink.LinksImportationGetDetectedCatalogColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumns') }})
    commit: Optional[shared_links_importation_commitlink.LinksImportationCommitLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    commit_columns: Optional[shared_links_importation_commitcolumnslink.LinksImportationCommitColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitColumns') }})
    configure_remaining_catalog_columns: Optional[shared_links_importation_configureremainingcatalogcolumnslink.LinksImportationConfigureRemainingCatalogColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureRemainingCatalogColumns') }})
    custom_columns: Optional[shared_links_importation_getcustomcolumnslink.LinksImportationGetCustomColumnsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customColumns') }})
    product_samples: Optional[shared_links_importation_getproductsamplelink.LinksImportationGetProductSampleLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSamples') }})
    
