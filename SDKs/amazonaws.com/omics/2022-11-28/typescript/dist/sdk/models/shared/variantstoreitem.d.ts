import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { SseConfig } from "./sseconfig";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * A variant store.
 */
export declare class VariantStoreItem extends SpeakeasyBase {
    creationTime: Date;
    description: string;
    id: string;
    name: string;
    reference: ReferenceItem;
    sseConfig: SseConfig;
    status: StoreStatusEnum;
    statusMessage: string;
    storeArn: string;
    storeSizeBytes: number;
    updateTime: Date;
}
