import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemadefinition as shared_schemadefinition


@dataclass_json
@dataclasses.dataclass
class ParquetConfiguration:
    r"""ParquetConfiguration
    Contains the configuration information of the Parquet format.
    """
    
    schema_definition: Optional[shared_schemadefinition.SchemaDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaDefinition') }})
    
