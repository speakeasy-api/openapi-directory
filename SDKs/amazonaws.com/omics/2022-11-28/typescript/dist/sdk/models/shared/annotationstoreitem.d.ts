import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { SseConfig } from "./sseconfig";
import { StoreFormatEnum } from "./storeformatenum";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * An annotation store.
 */
export declare class AnnotationStoreItem extends SpeakeasyBase {
    creationTime: Date;
    description: string;
    id: string;
    name: string;
    reference: ReferenceItem;
    sseConfig: SseConfig;
    status: StoreStatusEnum;
    statusMessage: string;
    storeArn: string;
    storeFormat: StoreFormatEnum;
    storeSizeBytes: number;
    updateTime: Date;
}
