import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllDropletsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;
}

export enum ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum {
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

export enum ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum {
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

export enum ListAllDroplets200ApplicationJsonDropletsImageStatusEnum {
    NewUpper = "NEW",
    NewLower = "new",
    Available = "available",
    Pending = "pending",
    Deleted = "deleted",
    Retired = "retired"
}

export enum ListAllDroplets200ApplicationJsonDropletsImageTypeEnum {
    Base = "base",
    Snapshot = "snapshot",
    Backup = "backup",
    Custom = "custom"
}


export class ListAllDroplets200ApplicationJsonDropletsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=min_disk_size" })
  minDiskSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListAllDroplets200ApplicationJsonDropletsImageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsImageTypeEnum;
}


// ListAllDroplets200ApplicationJsonDropletsKernel
/** 
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 * 
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 * 
**/
export class ListAllDroplets200ApplicationJsonDropletsKernel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

export enum ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum {
    Public = "public",
    Private = "private"
}


export class ListAllDroplets200ApplicationJsonDropletsNetworksV4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=netmask" })
  netmask?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum;
}

export enum ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum {
    Public = "public"
}


export class ListAllDroplets200ApplicationJsonDropletsNetworksV6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=netmask" })
  netmask?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum;
}


// ListAllDroplets200ApplicationJsonDropletsNetworks
/** 
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
export class ListAllDroplets200ApplicationJsonDropletsNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v4", elemType: ListAllDroplets200ApplicationJsonDropletsNetworksV4 })
  v4?: ListAllDroplets200ApplicationJsonDropletsNetworksV4[];

  @SpeakeasyMetadata({ data: "json, name=v6", elemType: ListAllDroplets200ApplicationJsonDropletsNetworksV6 })
  v6?: ListAllDroplets200ApplicationJsonDropletsNetworksV6[];
}


// ListAllDroplets200ApplicationJsonDropletsNextBackupWindow
/** 
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
export class ListAllDroplets200ApplicationJsonDropletsNextBackupWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}


export class ListAllDroplets200ApplicationJsonDropletsSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk: number;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory: number;

  @SpeakeasyMetadata({ data: "json, name=price_hourly" })
  priceHourly: number;

  @SpeakeasyMetadata({ data: "json, name=price_monthly" })
  priceMonthly: number;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: string[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer: number;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus: number;
}

export enum ListAllDroplets200ApplicationJsonDropletsStatusEnum {
    New = "new",
    Active = "active",
    Off = "off",
    Archive = "archive"
}


export class ListAllDroplets200ApplicationJsonDroplets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup_ids" })
  backupIds: number[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk: number;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: ListAllDroplets200ApplicationJsonDropletsImage;

  @SpeakeasyMetadata({ data: "json, name=kernel" })
  kernel: ListAllDroplets200ApplicationJsonDropletsKernel;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked: boolean;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=networks" })
  networks: ListAllDroplets200ApplicationJsonDropletsNetworks;

  @SpeakeasyMetadata({ data: "json, name=next_backup_window" })
  nextBackupWindow: ListAllDroplets200ApplicationJsonDropletsNextBackupWindow;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: ListAllDroplets200ApplicationJsonDropletsSize;

  @SpeakeasyMetadata({ data: "json, name=size_slug" })
  sizeSlug: string;

  @SpeakeasyMetadata({ data: "json, name=snapshot_ids" })
  snapshotIds: number[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListAllDroplets200ApplicationJsonDropletsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus: number;

  @SpeakeasyMetadata({ data: "json, name=volume_ids" })
  volumeIds: string[];

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class ListAllDroplets200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDroplets200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDroplets200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDroplets200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDroplets200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDroplets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplets", elemType: ListAllDroplets200ApplicationJsonDroplets })
  droplets?: ListAllDroplets200ApplicationJsonDroplets[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllDroplets200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllDroplets200ApplicationJsonMeta;
}


export class ListAllDroplets401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDropletsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllDropletsQueryParams;
}


export class ListAllDropletsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllDroplets200ApplicationJSONObject?: ListAllDroplets200ApplicationJson;

  @SpeakeasyMetadata()
  listAllDroplets401ApplicationJSONObject?: ListAllDroplets401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
