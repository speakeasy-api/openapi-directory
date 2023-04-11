import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingImageEncryptionConfigurationKeyTypeEnum } from "./streamingimageencryptionconfigurationkeytypeenum";
/**
 * Specifies how a streaming image is encrypted.
 */
export declare class StreamingImageEncryptionConfiguration extends SpeakeasyBase {
    keyArn?: string;
    keyType: StreamingImageEncryptionConfigurationKeyTypeEnum;
}
