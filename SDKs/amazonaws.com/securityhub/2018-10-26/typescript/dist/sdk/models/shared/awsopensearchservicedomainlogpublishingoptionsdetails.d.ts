import { SpeakeasyBase } from "../../../internal/utils";
import { AwsOpenSearchServiceDomainLogPublishingOption } from "./awsopensearchservicedomainlogpublishingoption";
/**
 * Configures the CloudWatch Logs to publish for the OpenSearch domain.
 */
export declare class AwsOpenSearchServiceDomainLogPublishingOptionsDetails extends SpeakeasyBase {
    auditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
    indexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
    searchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}
