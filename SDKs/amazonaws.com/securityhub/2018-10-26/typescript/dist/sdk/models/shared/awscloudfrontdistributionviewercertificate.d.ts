import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the TLS/SSL configuration that the CloudFront distribution uses to communicate with viewers.
 */
export declare class AwsCloudFrontDistributionViewerCertificate extends SpeakeasyBase {
    acmCertificateArn?: string;
    certificate?: string;
    certificateSource?: string;
    cloudFrontDefaultCertificate?: boolean;
    iamCertificateId?: string;
    minimumProtocolVersion?: string;
    sslSupportMethod?: string;
}
