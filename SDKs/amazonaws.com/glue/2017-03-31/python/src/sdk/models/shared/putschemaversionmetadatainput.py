import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadatakeyvaluepair as shared_metadatakeyvaluepair
from ..shared import schemaid as shared_schemaid
from ..shared import schemaversionnumber as shared_schemaversionnumber


@dataclass_json
@dataclasses.dataclass
class PutSchemaVersionMetadataInput:
    metadata_key_value: shared_metadatakeyvaluepair.MetadataKeyValuePair = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataKeyValue') }})
    schema_id: Optional[shared_schemaid.SchemaID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    schema_version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_number: Optional[shared_schemaversionnumber.SchemaVersionNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
