import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * Success
 */
export declare class CreateVariantStoreResponse extends SpeakeasyBase {
    creationTime: Date;
    id: string;
    name: string;
    reference?: ReferenceItem;
    status: StoreStatusEnum;
}
