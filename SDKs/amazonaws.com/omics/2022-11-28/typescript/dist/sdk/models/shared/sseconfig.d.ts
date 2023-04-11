import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
/**
 * Server-side encryption (SSE) settings for a store.
 */
export declare class SseConfig extends SpeakeasyBase {
    keyArn?: string;
    type: EncryptionTypeEnum;
}
