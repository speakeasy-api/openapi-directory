import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tablemetadata as shared_tablemetadata


@dataclass_json
@dataclasses.dataclass
class GetTableMetadataOutput:
    table_metadata: Optional[shared_tablemetadata.TableMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMetadata') }})
    
