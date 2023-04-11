import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionCacheBehaviors } from "./awscloudfrontdistributioncachebehaviors";
import { AwsCloudFrontDistributionDefaultCacheBehavior } from "./awscloudfrontdistributiondefaultcachebehavior";
import { AwsCloudFrontDistributionLogging } from "./awscloudfrontdistributionlogging";
import { AwsCloudFrontDistributionOriginGroups } from "./awscloudfrontdistributionorigingroups";
import { AwsCloudFrontDistributionOrigins } from "./awscloudfrontdistributionorigins";
import { AwsCloudFrontDistributionViewerCertificate } from "./awscloudfrontdistributionviewercertificate";
/**
 * A CloudFront distribution configuration.
 */
export declare class AwsCloudFrontDistributionDetails extends SpeakeasyBase {
    cacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
    defaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
    defaultRootObject?: string;
    domainName?: string;
    eTag?: string;
    lastModifiedTime?: string;
    logging?: AwsCloudFrontDistributionLogging;
    originGroups?: AwsCloudFrontDistributionOriginGroups;
    origins?: AwsCloudFrontDistributionOrigins;
    status?: string;
    viewerCertificate?: AwsCloudFrontDistributionViewerCertificate;
    webAclId?: string;
}
