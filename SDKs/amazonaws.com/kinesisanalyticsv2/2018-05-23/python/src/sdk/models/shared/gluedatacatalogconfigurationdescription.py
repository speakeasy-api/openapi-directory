import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GlueDataCatalogConfigurationDescription:
    r"""GlueDataCatalogConfigurationDescription
    The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
    """
    
    database_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseARN') }})
    
