import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnconfiguration as shared_columnconfiguration
from ..shared import duplicateproductvalueconfiguration as shared_duplicateproductvalueconfiguration
from ..shared import detectedcatalogcolumnlinks as shared_detectedcatalogcolumnlinks


@dataclass_json
@dataclasses.dataclass
class DetectedCatalogColumn:
    r"""DetectedCatalogColumn
    The catalog column detected during the first parsing step
    """
    
    catalog_column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumnName') }})
    configuration: shared_columnconfiguration.ColumnConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: shared_detectedcatalogcolumnlinks.DetectedCatalogColumnLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    duplicate_product_value_configuration: Optional[shared_duplicateproductvalueconfiguration.DuplicateProductValueConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateProductValueConfiguration') }})
    ignored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    
