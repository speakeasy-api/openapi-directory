import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogItemStatusEnum } from "./catalogitemstatusenum";
import { Ec2Capacity } from "./ec2capacity";
import { SupportedStorageEnumEnum } from "./supportedstorageenumenum";
/**
 *  Information about a catalog item.
 */
export declare class CatalogItem extends SpeakeasyBase {
    catalogItemId?: string;
    ec2Capacities?: Ec2Capacity[];
    itemStatus?: CatalogItemStatusEnum;
    powerKva?: number;
    supportedStorage?: SupportedStorageEnumEnum[];
    supportedUplinkGbps?: number[];
    weightLbs?: number;
}
