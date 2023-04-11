import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingImageEncryptionConfiguration } from "./streamingimageencryptionconfiguration";
import { StreamingImageStateEnum } from "./streamingimagestateenum";
import { StreamingImageStatusCodeEnum } from "./streamingimagestatuscodeenum";
/**
 * <p>Represents a streaming image resource.</p> <p>Streaming images are used by studio users to select which operating system and software they want to use in a Nimble Studio streaming session.</p> <p>Amazon provides a number of streaming images that include popular 3rd-party software.</p> <p>You can create your own streaming images using an Amazon EC2 machine image that you create for this purpose. You can also include software that your users require.</p>
 */
export declare class StreamingImage extends SpeakeasyBase {
    arn?: string;
    description?: string;
    ec2ImageId?: string;
    encryptionConfiguration?: StreamingImageEncryptionConfiguration;
    eulaIds?: string[];
    name?: string;
    owner?: string;
    platform?: string;
    state?: StreamingImageStateEnum;
    statusCode?: StreamingImageStatusCodeEnum;
    statusMessage?: string;
    streamingImageId?: string;
    tags?: Record<string, string>;
}
