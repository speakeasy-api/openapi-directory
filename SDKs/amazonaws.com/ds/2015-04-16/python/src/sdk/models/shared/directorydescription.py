import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directoryconnectsettingsdescription as shared_directoryconnectsettingsdescription
from ..shared import directoryedition_enum as shared_directoryedition_enum
from ..shared import ownerdirectorydescription as shared_ownerdirectorydescription
from ..shared import radiussettings as shared_radiussettings
from ..shared import radiusstatus_enum as shared_radiusstatus_enum
from ..shared import regionsinfo as shared_regionsinfo
from ..shared import sharemethod_enum as shared_sharemethod_enum
from ..shared import sharestatus_enum as shared_sharestatus_enum
from ..shared import directorysize_enum as shared_directorysize_enum
from ..shared import directorystage_enum as shared_directorystage_enum
from ..shared import directorytype_enum as shared_directorytype_enum
from ..shared import directoryvpcsettingsdescription as shared_directoryvpcsettingsdescription


@dataclass_json
@dataclasses.dataclass
class DirectoryDescription:
    r"""DirectoryDescription
    Contains information about an Directory Service directory.
    """
    
    access_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessUrl') }})
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    connect_settings: Optional[shared_directoryconnectsettingsdescription.DirectoryConnectSettingsDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectSettings') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    desired_number_of_domain_controllers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredNumberOfDomainControllers') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    edition: Optional[shared_directoryedition_enum.DirectoryEditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Edition') }})
    launch_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_directory_description: Optional[shared_ownerdirectorydescription.OwnerDirectoryDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerDirectoryDescription') }})
    radius_settings: Optional[shared_radiussettings.RadiusSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    radius_status: Optional[shared_radiusstatus_enum.RadiusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusStatus') }})
    regions_info: Optional[shared_regionsinfo.RegionsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsInfo') }})
    share_method: Optional[shared_sharemethod_enum.ShareMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareMethod') }})
    share_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareNotes') }})
    share_status: Optional[shared_sharestatus_enum.ShareStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareStatus') }})
    short_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShortName') }})
    size: Optional[shared_directorysize_enum.DirectorySizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    sso_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsoEnabled') }})
    stage: Optional[shared_directorystage_enum.DirectoryStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stage') }})
    stage_last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageLastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stage_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StageReason') }})
    type: Optional[shared_directorytype_enum.DirectoryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    vpc_settings: Optional[shared_directoryvpcsettingsdescription.DirectoryVpcSettingsDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSettings') }})
    
