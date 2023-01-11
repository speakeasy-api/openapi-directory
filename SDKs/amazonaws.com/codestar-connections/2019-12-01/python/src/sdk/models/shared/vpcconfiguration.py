import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VpcConfiguration:
    r"""VpcConfiguration
    The VPC configuration provisioned for the host.
    """
    
    security_group_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    tls_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsCertificate') }})
    
