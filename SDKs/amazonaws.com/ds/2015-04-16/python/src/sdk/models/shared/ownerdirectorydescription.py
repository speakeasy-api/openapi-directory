import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import radiussettings as shared_radiussettings
from ..shared import radiusstatus_enum as shared_radiusstatus_enum
from ..shared import directoryvpcsettingsdescription as shared_directoryvpcsettingsdescription


@dataclass_json
@dataclasses.dataclass
class OwnerDirectoryDescription:
    r"""OwnerDirectoryDescription
    Describes the directory owner account details that have been shared to the directory consumer account.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    radius_settings: Optional[shared_radiussettings.RadiusSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    radius_status: Optional[shared_radiusstatus_enum.RadiusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusStatus') }})
    vpc_settings: Optional[shared_directoryvpcsettingsdescription.DirectoryVpcSettingsDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
