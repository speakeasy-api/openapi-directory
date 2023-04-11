import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";
/**
 * Success
 */
export declare class GetLoadBalancersResult extends SpeakeasyBase {
    loadBalancers?: LoadBalancer[];
    nextPageToken?: string;
}
