import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlparameter as shared_sqlparameter


@dataclass_json
@dataclasses.dataclass
class ExecuteStatementInput:
    cluster_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterIdentifier') }})
    database: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    sql: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sql') }})
    db_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    parameters: Optional[list[shared_sqlparameter.SQLParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    secret_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretArn') }})
    statement_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    with_event: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WithEvent') }})
    
