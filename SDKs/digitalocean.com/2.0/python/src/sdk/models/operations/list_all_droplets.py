import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region as shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListAllDropletsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag_name', 'style': 'form', 'explode': True }})
    
class ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum(str, Enum):
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

class ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum(str, Enum):
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

class ListAllDroplets200ApplicationJSONDropletsImageStatusEnum(str, Enum):
    NEW_UPPER = "NEW"
    NEW_LOWER = "new"
    AVAILABLE = "available"
    PENDING = "pending"
    DELETED = "deleted"
    RETIRED = "retired"

class ListAllDroplets200ApplicationJSONDropletsImageTypeEnum(str, Enum):
    BASE = "base"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsImage:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    distribution: Optional[ListAllDroplets200ApplicationJSONDropletsImageDistributionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    min_disk_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_disk_size') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    regions: Optional[list[ListAllDroplets200ApplicationJSONDropletsImageRegionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    size_gigabytes: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    status: Optional[ListAllDroplets200ApplicationJSONDropletsImageStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsImageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsKernel:
    r"""ListAllDroplets200ApplicationJSONDropletsKernel
    **Note**: All Droplets created after March 2017 use internal kernels by default.
    These Droplets will have this attribute set to `null`.
    
    The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
    for Droplets with externally managed kernels. This will initially be set to
    the kernel of the base image when the Droplet is created.
    
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
class ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworksV4:
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    netmask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsNetworksV4TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum(str, Enum):
    PUBLIC = "public"


@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworksV6:
    gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    netmask: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netmask') }})
    type: Optional[ListAllDroplets200ApplicationJSONDropletsNetworksV6TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsNetworks:
    r"""ListAllDroplets200ApplicationJSONDropletsNetworks
    The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
    """
    
    v4: Optional[list[ListAllDroplets200ApplicationJSONDropletsNetworksV4]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v4') }})
    v6: Optional[list[ListAllDroplets200ApplicationJSONDropletsNetworksV6]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v6') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsNextBackupWindow:
    r"""ListAllDroplets200ApplicationJSONDropletsNextBackupWindow
    The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
    """
    
    end: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDropletsSize:
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
    
class ListAllDroplets200ApplicationJSONDropletsStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    OFF = "off"
    ARCHIVE = "archive"


@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONDroplets:
    backup_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_ids') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    features: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: ListAllDroplets200ApplicationJSONDropletsImage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    kernel: ListAllDroplets200ApplicationJSONDropletsKernel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernel') }})
    locked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    memory: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    networks: ListAllDroplets200ApplicationJSONDropletsNetworks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    next_backup_window: ListAllDroplets200ApplicationJSONDropletsNextBackupWindow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_backup_window') }})
    region: shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items_properties_region.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: ListAllDroplets200ApplicationJSONDropletsSize = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    size_slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_slug') }})
    snapshot_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_ids') }})
    status: ListAllDroplets200ApplicationJSONDropletsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vcpus: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volume_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_ids') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSONMeta:
    r"""ListAllDroplets200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets200ApplicationJSON:
    meta: ListAllDroplets200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    droplets: Optional[list[ListAllDroplets200ApplicationJSONDroplets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplets') }})
    links: Optional[ListAllDroplets200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllDroplets401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAllDropletsRequest:
    query_params: ListAllDropletsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAllDropletsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_droplets_200_application_json_object: Optional[ListAllDroplets200ApplicationJSON] = dataclasses.field(default=None)
    list_all_droplets_401_application_json_object: Optional[ListAllDroplets401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
