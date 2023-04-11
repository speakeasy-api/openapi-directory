import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating a S3 configuration
 */
export declare class S3ConfigUpdateRequest extends SpeakeasyBase {
    /**
     * Access Key ID
     */
    accessKey?: string;
    /**
     * &#128679; Deprecated since v4.24.0
     *
     * @remarks
     *
     * S3 bucket name
     *
     * use `bucketUrl` instead
     */
    bucketName?: string;
    /**
     * S3 object storage bucket URL
     */
    bucketUrl?: string;
    /**
     * &#128679; Deprecated since v4.24.0
     *
     * @remarks
     *
     * S3 object storage endpoint URL
     *
     * use `bucketUrl` instead
     */
    endpointUrl?: string;
    /**
     * S3 region
     */
    region?: string;
    /**
     * Secret Access Key
     */
    secretKey?: string;
}
