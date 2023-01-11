import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}
export declare class Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems extends SpeakeasyBase {
    createdAt: Date;
    id: number;
    minDiskSize: number;
    name: string;
    regions: string[];
    sizeGigabytes: number;
    type: Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum;
}
