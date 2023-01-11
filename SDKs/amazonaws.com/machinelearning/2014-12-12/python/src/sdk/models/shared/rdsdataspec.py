import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rdsdatabasecredentials as shared_rdsdatabasecredentials
from ..shared import rdsdatabase as shared_rdsdatabase


@dataclass_json
@dataclasses.dataclass
class RdsDataSpec:
    r"""RdsDataSpec
    The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
    """
    
    database_credentials: shared_rdsdatabasecredentials.RdsDatabaseCredentials = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseCredentials') }})
    database_information: shared_rdsdatabase.RdsDatabase = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInformation') }})
    resource_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRole') }})
    s3_staging_location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StagingLocation') }})
    security_group_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    select_sql_query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    service_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    subnet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    data_rearrangement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchema') }})
    data_schema_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchemaUri') }})
    
