import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginGroupFailover } from "./awscloudfrontdistributionorigingroupfailover";
/**
 * Information about an origin group for the CloudFront distribution.
 */
export declare class AwsCloudFrontDistributionOriginGroup extends SpeakeasyBase {
    failoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
