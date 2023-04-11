import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that OpenSearch derives based on <code>VPCOptions</code> for the domain.
 */
export declare class AwsElasticsearchDomainVPCOptions extends SpeakeasyBase {
    availabilityZones?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
