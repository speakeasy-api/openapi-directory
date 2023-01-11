import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_cancellink as shared_links_importation_cancellink
from ..shared import links_importation_getimportationmonitoringlink as shared_links_importation_getimportationmonitoringlink


@dataclass_json
@dataclasses.dataclass
class ImportAlreadyInProgressResponseLinks:
    r"""ImportAlreadyInProgressResponseLinks
    The action links
    """
    
    cancel_current_importation: shared_links_importation_cancellink.LinksImportationCancelLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelCurrentImportation') }})
    current_importation: shared_links_importation_getimportationmonitoringlink.LinksImportationGetImportationMonitoringLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentImportation') }})
    
