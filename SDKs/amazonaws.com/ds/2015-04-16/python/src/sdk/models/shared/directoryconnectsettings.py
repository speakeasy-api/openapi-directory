import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DirectoryConnectSettings:
    r"""DirectoryConnectSettings
    Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
    """
    
    customer_dns_ips: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerDnsIps') }})
    customer_user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerUserName') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
