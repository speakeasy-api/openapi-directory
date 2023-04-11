import { SpeakeasyBase } from "../../../internal/utils";
import { SSETypeEnum } from "./ssetypeenum";
/**
 * Represents the settings used to enable server-side encryption.
 */
export declare class SSESpecification extends SpeakeasyBase {
    enabled?: boolean;
    kmsMasterKeyId?: string;
    sseType?: SSETypeEnum;
}
