import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginCustomOriginConfig } from "./awscloudfrontdistributionorigincustomoriginconfig";
import { AwsCloudFrontDistributionOriginS3OriginConfig } from "./awscloudfrontdistributionorigins3originconfig";
/**
 * A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
 */
export declare class AwsCloudFrontDistributionOriginItem extends SpeakeasyBase {
    customOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
    domainName?: string;
    id?: string;
    originPath?: string;
    s3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
}
