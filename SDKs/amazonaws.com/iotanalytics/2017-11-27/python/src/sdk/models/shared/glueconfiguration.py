import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GlueConfiguration:
    r"""GlueConfiguration
    Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.
    """
    
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseName') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
