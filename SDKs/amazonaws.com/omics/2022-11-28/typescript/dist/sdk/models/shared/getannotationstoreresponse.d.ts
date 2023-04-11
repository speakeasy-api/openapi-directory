import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceItem } from "./referenceitem";
import { SseConfig } from "./sseconfig";
import { StoreFormatEnum } from "./storeformatenum";
import { StoreOptions } from "./storeoptions";
import { StoreStatusEnum } from "./storestatusenum";
/**
 * Success
 */
export declare class GetAnnotationStoreResponse extends SpeakeasyBase {
    creationTime: Date;
    description: string;
    id: string;
    name: string;
    reference: ReferenceItem;
    sseConfig: SseConfig;
    status: StoreStatusEnum;
    statusMessage: string;
    storeArn: string;
    storeFormat?: StoreFormatEnum;
    storeOptions?: StoreOptions;
    storeSizeBytes: number;
    tags: Record<string, string>;
    updateTime: Date;
}
