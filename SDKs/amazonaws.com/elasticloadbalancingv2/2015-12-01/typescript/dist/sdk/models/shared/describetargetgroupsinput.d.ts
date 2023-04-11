import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeTargetGroupsInput extends SpeakeasyBase {
    loadBalancerArn?: string;
    marker?: string;
    names?: string[];
    pageSize?: number;
    targetGroupArns?: string[];
}
