import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeListenersInput extends SpeakeasyBase {
    listenerArns?: string[];
    loadBalancerArn?: string;
    marker?: string;
    pageSize?: number;
}
