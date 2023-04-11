import { SpeakeasyBase } from "../../../internal/utils";
import { PresignedUrl } from "./presignedurl";
/**
 * List of generated presigned URLs
 */
export declare class PresignedUrlList extends SpeakeasyBase {
    /**
     * List of S3 presigned URLs
     */
    urls: PresignedUrl[];
}
