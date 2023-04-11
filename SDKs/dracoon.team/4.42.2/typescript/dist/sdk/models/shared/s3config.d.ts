import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3 configuration
 */
export declare class S3Config extends SpeakeasyBase {
    /**
     * Determines whether Access Key ID is defined
     */
    accessKeyDefined: boolean;
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
    bucketUrl: string;
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
     * Determines whether Access Secret Key is defined
     */
    secretKeyDefined: boolean;
}
