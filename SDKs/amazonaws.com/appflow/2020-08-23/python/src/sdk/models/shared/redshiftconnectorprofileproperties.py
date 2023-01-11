import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RedshiftConnectorProfileProperties:
    r"""RedshiftConnectorProfileProperties
     The connector-specific profile properties when using Amazon Redshift. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    database_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseUrl') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    bucket_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    
