import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTypeEnumEnum } from "./loadbalancertypeenumenum";
export declare class DescribeSSLPoliciesInput extends SpeakeasyBase {
    loadBalancerType?: LoadBalancerTypeEnumEnum;
    marker?: string;
    names?: string[];
    pageSize?: number;
}
