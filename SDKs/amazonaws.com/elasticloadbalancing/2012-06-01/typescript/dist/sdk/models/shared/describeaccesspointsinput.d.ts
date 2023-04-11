import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DescribeLoadBalancers.
 */
export declare class DescribeAccessPointsInput extends SpeakeasyBase {
    loadBalancerNames?: string[];
    marker?: string;
    pageSize?: number;
}
