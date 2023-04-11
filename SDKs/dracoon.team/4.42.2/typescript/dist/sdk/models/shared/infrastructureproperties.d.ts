import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Infrastructure properties
 */
export declare class InfrastructureProperties extends SpeakeasyBase {
    /**
     * &#128640; Since v4.21.0
     *
     * @remarks
     *
     * Determines if the DRACOON Core is deployed in the cloud environment
     */
    isDracoonCloud?: boolean;
    /**
     * Determines if the media server is enabled
     */
    mediaServerConfigEnabled?: boolean;
    /**
     * Suggested S3 Region
     */
    s3DefaultRegion?: string;
    /**
     * &#128640; Since v4.15.0
     *
     * @remarks
     *
     * Enforce direct upload to S3
     */
    s3EnforceDirectUpload?: boolean;
    /**
     * Allow sending of share passwords via SMS
     */
    smsConfigEnabled?: boolean;
    /**
     * &#128640; Since v4.21.0
     *
     * @remarks
     *
     * Current tenant UUID
     */
    tenantUuid?: string;
}
