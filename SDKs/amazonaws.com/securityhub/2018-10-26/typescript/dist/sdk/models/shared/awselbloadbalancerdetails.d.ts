import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerAttributes } from "./awselbloadbalancerattributes";
import { AwsElbLoadBalancerBackendServerDescription } from "./awselbloadbalancerbackendserverdescription";
import { AwsElbLoadBalancerHealthCheck } from "./awselbloadbalancerhealthcheck";
import { AwsElbLoadBalancerInstance } from "./awselbloadbalancerinstance";
import { AwsElbLoadBalancerListenerDescription } from "./awselbloadbalancerlistenerdescription";
import { AwsElbLoadBalancerPolicies } from "./awselbloadbalancerpolicies";
import { AwsElbLoadBalancerSourceSecurityGroup } from "./awselbloadbalancersourcesecuritygroup";
/**
 * Contains details about a Classic Load Balancer.
 */
export declare class AwsElbLoadBalancerDetails extends SpeakeasyBase {
    availabilityZones?: string[];
    backendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];
    canonicalHostedZoneName?: string;
    canonicalHostedZoneNameID?: string;
    createdTime?: string;
    dnsName?: string;
    healthCheck?: AwsElbLoadBalancerHealthCheck;
    instances?: AwsElbLoadBalancerInstance[];
    listenerDescriptions?: AwsElbLoadBalancerListenerDescription[];
    loadBalancerAttributes?: AwsElbLoadBalancerAttributes;
    loadBalancerName?: string;
    policies?: AwsElbLoadBalancerPolicies;
    scheme?: string;
    securityGroups?: string[];
    sourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
    subnets?: string[];
    vpcId?: string;
}
