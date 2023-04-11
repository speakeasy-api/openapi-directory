import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginSslProtocols } from "./awscloudfrontdistributionoriginsslprotocols";
/**
 * A custom origin. A custom origin is any origin that is not an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> is a custom origin.
 */
export declare class AwsCloudFrontDistributionOriginCustomOriginConfig extends SpeakeasyBase {
    httpPort?: number;
    httpsPort?: number;
    originKeepaliveTimeout?: number;
    originProtocolPolicy?: string;
    originReadTimeout?: number;
    originSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
}
