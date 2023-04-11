import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttribute } from "./loadbalancerattribute";
export declare class ModifyLoadBalancerAttributesInput extends SpeakeasyBase {
    attributes: LoadBalancerAttribute[];
    loadBalancerArn: string;
}
