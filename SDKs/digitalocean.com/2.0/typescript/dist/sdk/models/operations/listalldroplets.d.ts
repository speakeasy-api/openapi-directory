import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllDropletsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    tagName?: string;
}
export declare enum ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum {
    ArchLinux = "Arch Linux",
    CentOs = "CentOS",
    CoreOs = "CoreOS",
    Debian = "Debian",
    Fedora = "Fedora",
    FedoraAtomic = "Fedora Atomic",
    FreeBsd = "FreeBSD",
    Gentoo = "Gentoo",
    OpenSuse = "openSUSE",
    RancherOs = "RancherOS",
    Ubuntu = "Ubuntu",
    Unknown = "Unknown"
}
export declare enum ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum {
    Ams1 = "ams1",
    Ams2 = "ams2",
    Ams3 = "ams3",
    Blr1 = "blr1",
    Fra1 = "fra1",
    Lon1 = "lon1",
    Nyc1 = "nyc1",
    Nyc2 = "nyc2",
    Nyc3 = "nyc3",
    Sfo1 = "sfo1",
    Sfo2 = "sfo2",
    Sfo3 = "sfo3",
    Sgp1 = "sgp1",
    Tor1 = "tor1"
}
export declare enum ListAllDroplets200ApplicationJsonDropletsImageStatusEnum {
    NewUpper = "NEW",
    NewLower = "new",
    Available = "available",
    Pending = "pending",
    Deleted = "deleted",
    Retired = "retired"
}
export declare enum ListAllDroplets200ApplicationJsonDropletsImageTypeEnum {
    Base = "base",
    Snapshot = "snapshot",
    Backup = "backup",
    Custom = "custom"
}
export declare class ListAllDroplets200ApplicationJsonDropletsImage extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    distribution?: ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum;
    errorMessage?: string;
    id?: number;
    minDiskSize?: number;
    name?: string;
    public?: boolean;
    regions?: ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum[];
    sizeGigabytes?: number;
    slug?: string;
    status?: ListAllDroplets200ApplicationJsonDropletsImageStatusEnum;
    tags?: string[];
    type?: ListAllDroplets200ApplicationJsonDropletsImageTypeEnum;
}
/**
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 *
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 *
**/
export declare class ListAllDroplets200ApplicationJsonDropletsKernel extends SpeakeasyBase {
    id?: number;
    name?: string;
    version?: string;
}
export declare enum ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum {
    Public = "public",
    Private = "private"
}
export declare class ListAllDroplets200ApplicationJsonDropletsNetworksV4 extends SpeakeasyBase {
    gateway?: string;
    ipAddress?: string;
    netmask?: string;
    type?: ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum;
}
export declare enum ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum {
    Public = "public"
}
export declare class ListAllDroplets200ApplicationJsonDropletsNetworksV6 extends SpeakeasyBase {
    gateway?: string;
    ipAddress?: string;
    netmask?: number;
    type?: ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum;
}
/**
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
export declare class ListAllDroplets200ApplicationJsonDropletsNetworks extends SpeakeasyBase {
    v4?: ListAllDroplets200ApplicationJsonDropletsNetworksV4[];
    v6?: ListAllDroplets200ApplicationJsonDropletsNetworksV6[];
}
/**
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
export declare class ListAllDroplets200ApplicationJsonDropletsNextBackupWindow extends SpeakeasyBase {
    end?: Date;
    start?: Date;
}
export declare class ListAllDroplets200ApplicationJsonDropletsSize extends SpeakeasyBase {
    available: boolean;
    description: string;
    disk: number;
    memory: number;
    priceHourly: number;
    priceMonthly: number;
    regions: string[];
    slug: string;
    transfer: number;
    vcpus: number;
}
export declare enum ListAllDroplets200ApplicationJsonDropletsStatusEnum {
    New = "new",
    Active = "active",
    Off = "off",
    Archive = "archive"
}
export declare class ListAllDroplets200ApplicationJsonDroplets extends SpeakeasyBase {
    backupIds: number[];
    createdAt: Date;
    disk: number;
    features: string[];
    id: number;
    image: ListAllDroplets200ApplicationJsonDropletsImage;
    kernel: ListAllDroplets200ApplicationJsonDropletsKernel;
    locked: boolean;
    memory: number;
    name: string;
    networks: ListAllDroplets200ApplicationJsonDropletsNetworks;
    nextBackupWindow: ListAllDroplets200ApplicationJsonDropletsNextBackupWindow;
    region: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion;
    size: ListAllDroplets200ApplicationJsonDropletsSize;
    sizeSlug: string;
    snapshotIds: number[];
    status: ListAllDroplets200ApplicationJsonDropletsStatusEnum;
    tags: string[];
    vcpus: number;
    volumeIds: string[];
    vpcUuid?: string;
}
export declare class ListAllDroplets200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllDroplets200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllDroplets200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllDroplets200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllDroplets200ApplicationJson extends SpeakeasyBase {
    droplets?: ListAllDroplets200ApplicationJsonDroplets[];
    links?: ListAllDroplets200ApplicationJsonLinks;
    meta: ListAllDroplets200ApplicationJsonMeta;
}
export declare class ListAllDroplets401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllDropletsRequest extends SpeakeasyBase {
    queryParams: ListAllDropletsQueryParams;
}
export declare class ListAllDropletsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllDroplets200ApplicationJSONObject?: ListAllDroplets200ApplicationJson;
    listAllDroplets401ApplicationJSONObject?: ListAllDroplets401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
