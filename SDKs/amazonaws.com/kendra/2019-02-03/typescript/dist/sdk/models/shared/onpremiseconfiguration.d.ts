import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
/**
 * Provides the configuration information to connect to GitHub Enterprise Server (on premises).
 */
export declare class OnPremiseConfiguration extends SpeakeasyBase {
    hostUrl: string;
    organizationName: string;
    sslCertificateS3Path: S3Path;
}
