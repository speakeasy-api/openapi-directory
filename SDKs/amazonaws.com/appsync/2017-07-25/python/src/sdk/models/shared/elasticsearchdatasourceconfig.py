import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ElasticsearchDataSourceConfig:
    r"""ElasticsearchDataSourceConfig
    Describes an Elasticsearch data source configuration.
    """
    
    aws_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
