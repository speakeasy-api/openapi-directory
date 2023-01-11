import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaversionnumber as shared_schemaversionnumber
from ..shared import schemadifftype_enum as shared_schemadifftype_enum
from ..shared import schemaid as shared_schemaid


@dataclass_json
@dataclasses.dataclass
class GetSchemaVersionsDiffInput:
    first_schema_version_number: shared_schemaversionnumber.SchemaVersionNumber = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstSchemaVersionNumber') }})
    schema_diff_type: shared_schemadifftype_enum.SchemaDiffTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDiffType') }})
    schema_id: shared_schemaid.SchemaID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    second_schema_version_number: shared_schemaversionnumber.SchemaVersionNumber = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondSchemaVersionNumber') }})
    
