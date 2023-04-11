import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { SseConfig } from "./sseconfig";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * Success
 */
export declare class GetVariantStoreResponse extends SpeakeasyBase {
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
    tags: Record<string, string>;
    updateTime: Date;
}
