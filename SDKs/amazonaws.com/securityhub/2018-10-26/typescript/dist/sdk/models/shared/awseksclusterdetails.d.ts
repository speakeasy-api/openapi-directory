import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEksClusterLoggingDetails } from "./awseksclusterloggingdetails";
import { AwsEksClusterResourcesVpcConfigDetails } from "./awseksclusterresourcesvpcconfigdetails";
/**
 * Provides details about an Amazon EKS cluster.
 */
export declare class AwsEksClusterDetails extends SpeakeasyBase {
    arn?: string;
    certificateAuthorityData?: string;
    clusterStatus?: string;
    endpoint?: string;
    logging?: AwsEksClusterLoggingDetails;
    name?: string;
    resourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;
    roleArn?: string;
    version?: string;
}
