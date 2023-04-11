import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";
/**
 * Success
 */
export declare class DescribeLoadBalancersOutput extends SpeakeasyBase {
    loadBalancers?: LoadBalancer[];
    nextMarker?: string;
}
