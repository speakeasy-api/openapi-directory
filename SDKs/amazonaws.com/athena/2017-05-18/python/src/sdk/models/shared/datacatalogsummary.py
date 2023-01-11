import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacatalogtype_enum as shared_datacatalogtype_enum


@dataclass_json
@dataclasses.dataclass
class DataCatalogSummary:
    r"""DataCatalogSummary
    The summary information for the data catalog, which includes its name and type.
    """
    
    catalog_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogName') }})
    type: Optional[shared_datacatalogtype_enum.DataCatalogTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
