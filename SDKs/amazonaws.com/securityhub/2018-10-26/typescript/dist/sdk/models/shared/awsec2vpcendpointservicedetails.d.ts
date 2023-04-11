import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpcEndpointServiceServiceTypeDetails } from "./awsec2vpcendpointserviceservicetypedetails";
/**
 * Contains details about the service configuration for a VPC endpoint service.
 */
export declare class AwsEc2VpcEndpointServiceDetails extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    gatewayLoadBalancerArns?: string[];
    managesVpcEndpoints?: boolean;
    networkLoadBalancerArns?: string[];
    privateDnsName?: string;
    serviceId?: string;
    serviceName?: string;
    serviceState?: string;
    serviceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[];
}
