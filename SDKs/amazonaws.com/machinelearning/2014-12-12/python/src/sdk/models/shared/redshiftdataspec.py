import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import redshiftdatabasecredentials as shared_redshiftdatabasecredentials
from ..shared import redshiftdatabase as shared_redshiftdatabase


@dataclass_json
@dataclasses.dataclass
class RedshiftDataSpec:
    r"""RedshiftDataSpec
    Describes the data specification of an Amazon Redshift <code>DataSource</code>.
    """
    
    database_credentials: shared_redshiftdatabasecredentials.RedshiftDatabaseCredentials = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseCredentials') }})
    database_information: shared_redshiftdatabase.RedshiftDatabase = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInformation') }})
    s3_staging_location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3StagingLocation') }})
    select_sql_query: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    data_rearrangement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchema') }})
    data_schema_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSchemaUri') }})
    
