import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { AwsElbv2LoadBalancerAttribute } from "./awselbv2loadbalancerattribute";
import { LoadBalancerState } from "./loadbalancerstate";
/**
 * Information about a load balancer.
 */
export declare class AwsElbv2LoadBalancerDetails extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    canonicalHostedZoneId?: string;
    createdTime?: string;
    dnsName?: string;
    ipAddressType?: string;
    loadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
    scheme?: string;
    securityGroups?: string[];
    state?: LoadBalancerState;
    type?: string;
    vpcId?: string;
}
