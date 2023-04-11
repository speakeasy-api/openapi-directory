import { SpeakeasyBase } from "../../../internal/utils";
import { SseConfig } from "./sseconfig";
/**
 * Success
 */
export declare class CreateReferenceStoreResponse extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    id: string;
    name?: string;
    sseConfig?: SseConfig;
}
