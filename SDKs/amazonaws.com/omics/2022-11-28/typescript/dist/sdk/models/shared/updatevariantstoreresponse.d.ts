import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * Success
 */
export declare class UpdateVariantStoreResponse extends SpeakeasyBase {
    creationTime: Date;
    description: string;
    id: string;
    name: string;
    reference: ReferenceItem;
    status: StoreStatusEnum;
    updateTime: Date;
}
