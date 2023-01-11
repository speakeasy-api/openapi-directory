import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptiontype_enum as shared_subscriptiontype_enum


@dataclass_json
@dataclasses.dataclass
class CreateHsmRequest:
    r"""CreateHsmRequest
    Contains the inputs for the <code>CreateHsm</code> operation.
    """
    
    iam_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    ssh_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKey') }})
    subnet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    subscription_type: shared_subscriptiontype_enum.SubscriptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionType') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    eni_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EniIp') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    syslog_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyslogIp') }})
    
