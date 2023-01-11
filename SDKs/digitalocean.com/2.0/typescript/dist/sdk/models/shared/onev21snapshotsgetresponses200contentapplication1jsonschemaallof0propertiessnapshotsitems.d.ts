import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum {
    Droplet = "droplet",
    Volume = "volume"
}
export declare class Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems extends SpeakeasyBase {
    createdAt: Date;
    id: string;
    minDiskSize: number;
    name: string;
    regions: string[];
    resourceId: string;
    resourceType: Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum;
    sizeGigabytes: number;
    tags: string[];
}
