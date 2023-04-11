import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the VPC configuration used by the cluster control plane.
 */
export declare class AwsEksClusterResourcesVpcConfigDetails extends SpeakeasyBase {
    endpointPublicAccess?: boolean;
    securityGroupIds?: string[];
    subnetIds?: string[];
}
