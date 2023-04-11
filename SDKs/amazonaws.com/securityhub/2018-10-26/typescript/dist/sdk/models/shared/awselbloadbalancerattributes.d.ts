import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerAccessLog } from "./awselbloadbalanceraccesslog";
import { AwsElbLoadBalancerAdditionalAttribute } from "./awselbloadbalanceradditionalattribute";
import { AwsElbLoadBalancerConnectionDraining } from "./awselbloadbalancerconnectiondraining";
import { AwsElbLoadBalancerConnectionSettings } from "./awselbloadbalancerconnectionsettings";
import { AwsElbLoadBalancerCrossZoneLoadBalancing } from "./awselbloadbalancercrosszoneloadbalancing";
/**
 * Contains attributes for the load balancer.
 */
export declare class AwsElbLoadBalancerAttributes extends SpeakeasyBase {
    accessLog?: AwsElbLoadBalancerAccessLog;
    additionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[];
    connectionDraining?: AwsElbLoadBalancerConnectionDraining;
    connectionSettings?: AwsElbLoadBalancerConnectionSettings;
    crossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
}
