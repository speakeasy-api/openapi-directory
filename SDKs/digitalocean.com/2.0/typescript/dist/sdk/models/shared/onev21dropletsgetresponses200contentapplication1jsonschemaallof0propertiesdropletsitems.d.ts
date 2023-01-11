import { SpeakeasyBase } from "../../../internal/utils";
import { Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion } from "./onev21actionsgetresponses200contentapplication1jsonschemaallof0propertiesactionsitemspropertiesregion";
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum {
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
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum {
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
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum {
    NewUpper = "NEW",
    NewLower = "new",
    Available = "available",
    Pending = "pending",
    Deleted = "deleted",
    Retired = "retired"
}
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum {
    Base = "base",
    Snapshot = "snapshot",
    Backup = "backup",
    Custom = "custom"
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageDistributionEnum;
    errorMessage?: string;
    id?: number;
    minDiskSize?: number;
    name?: string;
    public?: boolean;
    regions?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageRegionsEnum[];
    sizeGigabytes?: number;
    slug?: string;
    status?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageStatusEnum;
    tags?: string[];
    type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImageTypeEnum;
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
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel extends SpeakeasyBase {
    id?: number;
    name?: string;
    version?: string;
}
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum {
    Public = "public",
    Private = "private"
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4 extends SpeakeasyBase {
    gateway?: string;
    ipAddress?: string;
    netmask?: string;
    type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4TypeEnum;
}
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum {
    Public = "public"
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6 extends SpeakeasyBase {
    gateway?: string;
    ipAddress?: string;
    netmask?: number;
    type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6TypeEnum;
}
/**
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks extends SpeakeasyBase {
    v4?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV4[];
    v6?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworksV6[];
}
/**
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow extends SpeakeasyBase {
    end?: Date;
    start?: Date;
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize extends SpeakeasyBase {
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
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum {
    New = "new",
    Active = "active",
    Off = "off",
    Archive = "archive"
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems extends SpeakeasyBase {
    backupIds: number[];
    createdAt: Date;
    disk: number;
    features: string[];
    id: number;
    image: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsImage;
    kernel: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsKernel;
    locked: boolean;
    memory: number;
    name: string;
    networks: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNetworks;
    nextBackupWindow: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsNextBackupWindow;
    region: Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion;
    size: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsSize;
    sizeSlug: string;
    snapshotIds: number[];
    status: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsStatusEnum;
    tags: string[];
    vcpus: number;
    volumeIds: string[];
    vpcUuid?: string;
}
