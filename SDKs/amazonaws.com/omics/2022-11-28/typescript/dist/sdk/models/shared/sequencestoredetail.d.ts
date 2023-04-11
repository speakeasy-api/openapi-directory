import { SpeakeasyBase } from "../../../internal/utils";
import { SseConfig } from "./sseconfig";
/**
 * Details about a sequence store.
 */
export declare class SequenceStoreDetail extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    id: string;
    name?: string;
    sseConfig?: SseConfig;
}
