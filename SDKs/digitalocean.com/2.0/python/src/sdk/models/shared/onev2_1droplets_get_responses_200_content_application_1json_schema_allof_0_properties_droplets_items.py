import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region as shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum(str, Enum):
    ARCH_LINUX = "Arch Linux"
    CENT_OS = "CentOS"
    CORE_OS = "CoreOS"
    DEBIAN = "Debian"
    FEDORA = "Fedora"
    FEDORA_ATOMIC = "Fedora Atomic"
    FREE_BSD = "FreeBSD"
    GENTOO = "Gentoo"
    OPEN_SUSE = "openSUSE"
    RANCHER_OS = "RancherOS"
    UBUNTU = "Ubuntu"
    UNKNOWN = "Unknown"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum(str, Enum):
    AMS1 = "ams1"
    AMS2 = "ams2"
    AMS3 = "ams3"
    BLR1 = "blr1"
    FRA1 = "fra1"
    LON1 = "lon1"
    NYC1 = "nyc1"
    NYC2 = "nyc2"
    NYC3 = "nyc3"
    SFO1 = "sfo1"
    SFO2 = "sfo2"
    SFO3 = "sfo3"
    SGP1 = "sgp1"
    TOR1 = "tor1"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum(str, Enum):
    NEW_UPPER = "NEW"
    NEW_LOWER = "new"
    AVAILABLE = "available"
    PENDING = "pending"
    DELETED = "deleted"
    RETIRED = "retired"

class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum(str, Enum):
    BASE = "base"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    distribution: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    min_disk_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_disk_size') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    regions: Optional[list[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    size_gigabytes: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    status: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel:
    r"""Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel
    **Note**: All Droplets created after March 2017 use internal kernels by default.
    These Droplets will have this attribute set to `null`.
    
    The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
    for Droplets with externally managed kernels. This will initially be set to
    the kernel of the base image when the Droplet is created.
    
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4:
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    netmask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum(str, Enum):
    PUBLIC = "public"


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6:
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    netmask: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    type: Optional[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks:
    r"""Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks
    The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
    """
    
    v4: Optional[list[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v4') }})
    v6: Optional[list[Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v6') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow:
    r"""Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow
    The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
    """
    
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize:
    available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    memory: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    price_hourly: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    regions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    transfer: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    vcpus: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    OFF = "off"
    ARCHIVE = "archive"


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems:
    backup_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_ids') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    features: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kernel: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel') }})
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    memory: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    next_backup_window: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_backup_window') }})
    region: shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    size_slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_slug') }})
    snapshot_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_ids') }})
    status: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vcpus: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volume_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_ids') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    
