import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import redshiftdatabase as shared_redshiftdatabase


@dataclass_json
@dataclasses.dataclass
class RedshiftMetadata:
    r"""RedshiftMetadata
    Describes the <code>DataSource</code> details specific to Amazon Redshift.
    """
    
    database_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseUserName') }})
    redshift_database: Optional[shared_redshiftdatabase.RedshiftDatabase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDatabase') }})
    select_sql_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectSqlQuery') }})
    
