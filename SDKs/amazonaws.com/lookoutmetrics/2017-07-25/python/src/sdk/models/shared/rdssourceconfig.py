import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcconfiguration as shared_vpcconfiguration


@dataclass_json
@dataclasses.dataclass
class RdsSourceConfig:
    r"""RdsSourceConfig
    Contains information about the Amazon Relational Database Service (RDS) configuration.
    """
    
    db_instance_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DBInstanceIdentifier') }})
    database_host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseHost') }})
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    database_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabasePort') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    secret_manager_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretManagerArn') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    vpc_configuration: shared_vpcconfiguration.VpcConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
