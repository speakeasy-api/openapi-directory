import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingImageEncryptionConfiguration } from "./streamingimageencryptionconfiguration";
import { StreamingImageStateEnum } from "./streamingimagestateenum";
import { StreamingImageStatusCodeEnum } from "./streamingimagestatuscodeenum";
export declare class CreateStreamingImageResponseStreamingImage extends SpeakeasyBase {
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
export declare class CreateStreamingImageResponse extends SpeakeasyBase {
    streamingImage?: CreateStreamingImageResponseStreamingImage;
}
