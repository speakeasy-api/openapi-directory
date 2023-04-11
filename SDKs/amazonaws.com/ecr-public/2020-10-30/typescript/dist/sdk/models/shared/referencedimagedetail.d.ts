import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.
 */
export declare class ReferencedImageDetail extends SpeakeasyBase {
    artifactMediaType?: string;
    imageDigest?: string;
    imageManifestMediaType?: string;
    imagePushedAt?: Date;
    imageSizeInBytes?: number;
}
