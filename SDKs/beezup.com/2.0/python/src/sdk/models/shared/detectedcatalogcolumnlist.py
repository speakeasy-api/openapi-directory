import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectedcatalogcolumn as shared_detectedcatalogcolumn
from ..shared import detectedcatalogcolumnlistlinks as shared_detectedcatalogcolumnlistlinks


@dataclass_json
@dataclasses.dataclass
class DetectedCatalogColumnList:
    r"""DetectedCatalogColumnList
    The list of detected catalog column
    """
    
    links: shared_detectedcatalogcolumnlistlinks.DetectedCatalogColumnListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    detected_catalog_columns: Optional[list[shared_detectedcatalogcolumn.DetectedCatalogColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedCatalogColumns') }})
    
