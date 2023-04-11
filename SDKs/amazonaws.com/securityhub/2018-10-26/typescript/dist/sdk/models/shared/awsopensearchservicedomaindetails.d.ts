import { SpeakeasyBase } from "../../../internal/utils";
import { AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails } from "./awsopensearchservicedomainadvancedsecurityoptionsdetails";
import { AwsOpenSearchServiceDomainClusterConfigDetails } from "./awsopensearchservicedomainclusterconfigdetails";
import { AwsOpenSearchServiceDomainDomainEndpointOptionsDetails } from "./awsopensearchservicedomaindomainendpointoptionsdetails";
import { AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails } from "./awsopensearchservicedomainencryptionatrestoptionsdetails";
import { AwsOpenSearchServiceDomainLogPublishingOptionsDetails } from "./awsopensearchservicedomainlogpublishingoptionsdetails";
import { AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails } from "./awsopensearchservicedomainnodetonodeencryptionoptionsdetails";
import { AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails } from "./awsopensearchservicedomainservicesoftwareoptionsdetails";
import { AwsOpenSearchServiceDomainVpcOptionsDetails } from "./awsopensearchservicedomainvpcoptionsdetails";
/**
 * Information about an Amazon OpenSearch Service domain.
 */
export declare class AwsOpenSearchServiceDomainDetails extends SpeakeasyBase {
    accessPolicies?: string;
    advancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
    arn?: string;
    clusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;
    domainEndpoint?: string;
    domainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
    domainEndpoints?: Record<string, string>;
    domainName?: string;
    encryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
    engineVersion?: string;
    id?: string;
    logPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
    nodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
    serviceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
    vpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;
}
