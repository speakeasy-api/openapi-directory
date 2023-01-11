import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum {
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
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum {
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
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum {
    NewUpper = "NEW",
    NewLower = "new",
    Available = "available",
    Pending = "pending",
    Deleted = "deleted",
    Retired = "retired"
}
export declare enum Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum {
    Base = "base",
    Snapshot = "snapshot",
    Backup = "backup",
    Custom = "custom"
}
export declare class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageDistributionEnum;
    errorMessage?: string;
    id?: number;
    minDiskSize?: number;
    name?: string;
    public?: boolean;
    regions?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageRegionsEnum[];
    sizeGigabytes?: number;
    slug?: string;
    status?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageStatusEnum;
    tags?: string[];
    type?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImageTypeEnum;
}
