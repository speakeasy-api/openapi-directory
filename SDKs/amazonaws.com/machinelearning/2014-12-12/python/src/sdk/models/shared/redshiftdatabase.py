import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RedshiftDatabase:
    r"""RedshiftDatabase
    Describes the database details required to connect to an Amazon Redshift database.
    """
    
    cluster_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    
